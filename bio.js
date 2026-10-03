/* Short and medium biography tabs; the extended version uses a native disclosure. */
(function () {
  const tabList = document.querySelector('.bio-version-tabs');
  if (!tabList) return;
  const tabs = [...tabList.querySelectorAll('button')];
  const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
  tabList.setAttribute('role', 'tablist');
  tabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].tabIndex = 0;
  });
  function select(index, updateHash) {
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
    if (updateHash) history.replaceState(null, '', '#' + panels[index].id);
  }
  function fromHash() {
    const extended = document.getElementById('long');
    const index = panels.findIndex(panel => '#' + panel.id === location.hash);
    select(index === -1 ? 1 : index, false);
    if (location.hash === '#long') extended.open = true;
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(index, true));
    tab.addEventListener('keydown', event => {
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      select(next, true);
      tabs[next].focus();
    });
  });
  window.addEventListener('hashchange', fromHash);
  fromHash();
})();
