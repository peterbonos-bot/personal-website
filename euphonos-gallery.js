(() => {
  const root = document.querySelector('.euphonos-carousel');
  if (!root) return;
  const panels = [...root.querySelectorAll('.euphonos-panel')];
  const pause = root.querySelector('[data-pause]');
  const status = root.querySelector('.euphonos-status');
  const names = ['Full ensemble', 'Trumpet and percussion', 'Clarinet and bass', 'Accordion and bass'];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0, paused = reduced.matches, timer, rollTimer, rollDelay, rolling = false;
  function render(announce = false) {
    panels.forEach((panel, index) => {
      const slot = (index - current + panels.length) % panels.length;
      panel.dataset.slot = slot;
      panel.setAttribute('aria-hidden', String(slot !== 0));
      panel.querySelector('a').tabIndex = slot === 0 ? 0 : -1;
    });
    status.setAttribute('aria-live', announce ? 'polite' : 'off');
    status.textContent = `Photo ${current + 1} of ${panels.length} · ${names[current]}`;
    pause.textContent = paused ? 'Play' : 'Pause';
    pause.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
  }
  function schedule() {
    clearInterval(timer);
    if (!rolling && !paused && !document.hidden && !root.matches(':hover') && !root.contains(document.activeElement)) {
      timer = setInterval(() => { current = (current + 1) % panels.length; render(); }, 6500);
    }
  }
  function step(direction) { current = (current + direction + panels.length) % panels.length; render(true); schedule(); }
  root.querySelector('[data-previous]').addEventListener('click', () => step(-1));
  root.querySelector('[data-next]').addEventListener('click', () => step(1));
  pause.addEventListener('click', () => { paused = !paused; render(); schedule(); });
  function stopRolling() {
    clearTimeout(rollDelay); clearInterval(rollTimer); rolling = false; schedule();
  }
  function startRolling(direction) {
    stopRolling();
    if (!matchMedia('(hover: hover)').matches || reduced.matches) return;
    rolling = true; clearInterval(timer);
    rollDelay = setTimeout(() => { step(direction); rollTimer = setInterval(() => step(direction), 1300); }, 450);
  }
  const rollButtons = [...root.querySelectorAll('[data-roll]')];
  rollButtons.forEach(button => {
    const direction = Number(button.dataset.roll);
    button.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') startRolling(direction); });
    button.addEventListener('pointerleave', stopRolling);
    button.addEventListener('click', () => { stopRolling(); step(direction); });
  });
  for (const [selector, direction] of [['[data-previous]', -1], ['[data-next]', 1]]) {
    const button = root.querySelector(selector);
    button.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') startRolling(direction); });
    button.addEventListener('pointerleave', stopRolling);
  }
  root.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); step(event.key === 'ArrowLeft' ? -1 : 1); }
  });
  root.addEventListener('mouseenter', schedule);
  root.addEventListener('mouseleave', schedule);
  root.addEventListener('focusin', schedule);
  root.addEventListener('focusout', () => setTimeout(schedule, 0));
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopRolling(); schedule(); });
  reduced.addEventListener('change', event => { if (event.matches) { paused = true; render(); schedule(); } });
  render(); schedule();
})();
