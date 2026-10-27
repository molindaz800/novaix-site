/* Local, fictional walkthrough. No requests, sending, storage or autoplay. */
(() => {
  'use strict';
  const root = document.querySelector('[data-walkthrough]');
  if (!root) return;
  const panels = [...root.querySelectorAll('[data-walk-panel]')];
  const steps = [...root.querySelectorAll('[data-walk-step]')];
  const explanations = [...root.querySelectorAll('[data-walk-explanation]')];
  const controls = root.querySelector('[data-walk-controls]');
  const back = root.querySelector('[data-walk-back]');
  const next = root.querySelector('[data-walk-next]');
  const restart = root.querySelector('[data-walk-restart]');
  const announcement = root.querySelector('[data-walk-announcement]');
  if (panels.length !== 4 || steps.length !== 4 || explanations.length !== 4 ||
      !controls || !back || !next || !restart || !announcement) return;
  let current = 0;
  let animations = [];
  const cancelMotion = () => { animations.forEach(animation => animation.cancel()); animations = []; };
  const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function goTo(index, animate = true) {
    if (!Number.isInteger(index) || index < 0 || index >= panels.length) return;
    cancelMotion();
    current = index;
    panels.forEach((panel, i) => { panel.hidden = i !== current; });
    steps.forEach((step, i) => {
      step.setAttribute('data-complete', String(i < current));
      if (i === current) step.setAttribute('aria-current', 'step');
      else step.removeAttribute('aria-current');
    });
    explanations.forEach((explanation, i) => { explanation.hidden = i !== current; });
    back.disabled = current === 0;
    next.disabled = current === panels.length - 1;
    // Keep the focused next button in place at the last state; never auto-move focus.
    restart.hidden = current !== panels.length - 1;
    if (animate) {
      announcement.textContent = `${current + 1} / ${panels.length} · ${panels[current].querySelector('h3').textContent.trim()}`;
      if (!reduced() && !document.hidden) {
        const targets = panels[current].querySelectorAll('.walk-field--changed dd, .walk-status');
        targets.forEach(target => {
          if (typeof target.animate !== 'function') return;
          animations.push(target.animate([
            { opacity:.45, transform:'translateY(7px)' },
            { opacity:1, transform:'translateY(0)' }
          ], { duration:240, easing:'cubic-bezier(0.16, 1, 0.3, 1)' }));
        });
      }
    }
  }
  steps.forEach((step, index) => step.addEventListener('click', () => goTo(index)));
  back.addEventListener('click', () => goTo(current - 1));
  next.addEventListener('click', () => goTo(current + 1));
  restart.addEventListener('click', () => goTo(0));
  document.addEventListener('visibilitychange', () => { if (document.hidden) cancelMotion(); });
  window.addEventListener('novaix:languagechange', () => { announcement.textContent = ''; });
  root.dataset.enhanced = 'true';
  controls.hidden = false;
  goTo(0, false);
})();
