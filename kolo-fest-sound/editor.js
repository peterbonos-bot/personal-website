(() => {
  const toolbar = document.querySelector('#editor');
  const main = document.querySelector('main');
  const mast = document.querySelector('.mast');
  const regions = [mast.querySelector('p'), mast.querySelector('h1'), main];
  const key = 'kolo-festival-editor-v1:' + location.pathname;
  const toggle = toolbar.querySelector('[data-edit]');
  const status = toolbar.querySelector('output');
  let selection;
  const printedPatches = Array.from(main.querySelectorAll('.band[id] .patch-list'), table => [
    table.closest('.band').id, table.cloneNode(true)
  ]);
  const publishedOriginals = Array.from(main.querySelectorAll('.band > .original-source'), original => [
    original.closest('.band').id, original.cloneNode(true)
  ]);

  function persist() {
    for (const field of main.querySelectorAll('input')) {
      field.setAttribute('value', field.value);
    }
    try {
      localStorage.setItem(key, JSON.stringify(regions.map(region => region.innerHTML)));
      status.textContent = 'Saved in this browser';
    } catch {
      status.textContent = 'Use Download HTML to save your changes';
    }
  }

  try {
    const saved = JSON.parse(localStorage.getItem(key) || 'null');
    if (Array.isArray(saved) && saved.length === regions.length) {
      if (main.hasAttribute('data-rider-schedule') && !saved[2].includes('class="patch-list"')) {
        const previousPage = document.createElement('template');
        previousPage.innerHTML = saved[2];
        const previousRiders = new Map(
          Array.from(previousPage.content.querySelectorAll('.band[id]'), rider => [rider.id, rider])
        );
        for (const rider of main.querySelectorAll('.band[id]')) {
          const previous = previousRiders.get(rider.id);
          if (!previous) continue;
          if (rider.id === 'ionella-guzic' && previous.querySelectorAll('input').length !== 5) continue;

          const oldTitle = previous.querySelector('.rider-title, h2');
          const title = rider.querySelector('.rider-title');
          if (oldTitle) title.innerHTML = oldTitle.innerHTML.replace('Balksnton 340', 'Balkanton 340');

          const details = rider.querySelector('.rider-details');
          const oldDetails = previous.querySelector('.rider-details');
          const plot = details.querySelector('.visual-plot');
          if (oldDetails) {
            details.replaceChildren(...oldDetails.childNodes);
          } else {
            const start = Array.from(previous.children).findIndex(
              item => item.matches('.plot, .visual-plot, h3, table')
            );
            if (start < 0) continue;
            details.replaceChildren(...Array.from(previous.children).slice(start));
          }

          const oldPlot = details.querySelector('.plot');
          if (plot && oldPlot) oldPlot.replaceWith(plot);
          else if (plot && !details.querySelector('.visual-plot')) details.prepend(plot);
          for (const heading of details.querySelectorAll(':scope > h3')) {
            const replacement = document.createElement('h5');
            replacement.innerHTML = heading.innerHTML;
            heading.replaceWith(replacement);
          }
        }
        // Retain custom headings while letting the published page title change.
        regions[0].innerHTML = saved[0];
        if (saved[1] !== 'Stage plots') regions[1].innerHTML = saved[1];
      } else {
        regions.forEach((region, index) => { region.innerHTML = saved[index]; });
        const balkantonLink = main.querySelector('a[href="stage-plots.html#balksnton-340"]');
        if (balkantonLink?.textContent === 'Balksnton 340') balkantonLink.textContent = 'Balkanton 340';
      }
    }
  } catch {
    status.textContent = 'Browser storage is unavailable';
  }

  for (const [id, table] of printedPatches) {
    const rider = document.getElementById(id);
    const existing = rider?.querySelector('.rider-details table');
    if (!existing || existing.classList.contains('patch-list')) continue;
    const assigned = new Map(Array.from(existing.querySelectorAll('input'), input => [input.getAttribute('aria-label'), input.value]));
    for (const input of table.querySelectorAll('input')) {
      const previous = input.dataset.previousChannel;
      const value = assigned.get(input.getAttribute('aria-label')) || (previous ? assigned.get('Channel for ' + previous) : undefined);
      if (value) input.value = value;
    }
    existing.replaceWith(table);
  }

  main.addEventListener('click', event => {
    const button = event.target.closest('[data-print-rider]');
    if (!button) return;
    const rider = button.dataset.printRider ? document.getElementById(button.dataset.printRider) : null;
    const pageTitle = document.title;
    const actName = rider?.querySelector('.rider-title')?.cloneNode(true);
    actName?.querySelector('.pending')?.remove();
    document.title = actName?.textContent.trim() || 'Kolo Festival 2026 - Show Riders';
    window.addEventListener('afterprint', () => {
      document.title = pageTitle;
    }, { once: true });
    if (rider) {
      document.body.classList.add('print-single-rider');
      rider.classList.add('print-target');
      window.addEventListener('afterprint', () => {
        document.body.classList.remove('print-single-rider');
        rider.classList.remove('print-target');
      }, { once: true });
    }
    window.print();
  });

  for (const [id, original] of publishedOriginals) {
    const rider = document.getElementById(id);
    if (!rider) continue;
    rider.querySelectorAll(':scope > .original-source, :scope > .original').forEach(item => item.remove());
    rider.append(original);
  }

  const zoom = document.querySelector('#rider-image-zoom');
  if (zoom?.showModal) {
    main.addEventListener('click', event => {
      const link = event.target.closest('.rider-zoom');
      if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const preview = zoom.querySelector('img');
      preview.src = link.href;
      preview.alt = link.querySelector('img').alt;
      zoom.showModal();
      zoom.addEventListener('close', () => link.focus(), { once: true });
    });
  }

  toggle.addEventListener('click', () => {
    const enabled = toggle.getAttribute('aria-pressed') !== 'true';
    toggle.setAttribute('aria-pressed', String(enabled));
    toggle.textContent = enabled ? 'Done editing' : 'Edit text';
    for (const region of regions) region.contentEditable = String(enabled);
    for (const button of toolbar.querySelectorAll('[data-format]')) button.disabled = !enabled;
    if (!enabled) persist();
  });

  document.addEventListener('selectionchange', () => {
    const current = window.getSelection();
    if (current.rangeCount && regions.some(region => region.contains(current.anchorNode))) {
      selection = current.getRangeAt(0).cloneRange();
    }
  });

  toolbar.querySelectorAll('[data-format]').forEach(button => {
    button.addEventListener('mousedown', event => event.preventDefault());
    button.addEventListener('click', () => {
      if (selection) {
        const current = window.getSelection();
        current.removeAllRanges();
        current.addRange(selection);
      }
      document.execCommand(button.dataset.format);
      persist();
    });
  });

  regions.forEach(region => region.addEventListener('input', persist));

  toolbar.querySelector('[data-download]').addEventListener('click', () => {
    persist();
    const page = document.documentElement.cloneNode(true);
    for (const element of page.querySelectorAll("[href], [src]")) {
      const attribute = element.hasAttribute("href") ? "href" : "src";
      const value = element.getAttribute(attribute);
      if (value && !value.startsWith("#")) element.setAttribute(attribute, new URL(value, location.href).href);
    }
    page.querySelectorAll('[contenteditable]').forEach(region => {
      if (region.getAttribute('contenteditable') === 'true') region.removeAttribute('contenteditable');
    });
    const editButton = page.querySelector('[data-edit]');
    editButton.textContent = 'Edit text';
    editButton.setAttribute('aria-pressed', 'false');
    page.querySelectorAll('[data-format]').forEach(button => { button.disabled = true; });
    page.querySelector('output').textContent = '';
    const url = URL.createObjectURL(new Blob(['<!doctype html>\n', page.outerHTML], {type: 'text/html'}));
    const link = document.createElement('a');
    link.href = url;
    link.download = location.pathname.split('/').pop() || 'index.html';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
})();
