(() => {
  'use strict';
  const track = document.getElementById('atlas-sector-track');
  const controls = document.querySelector('.atlas-sector-controls');
  if (!track || !controls) return;
  const previous = controls.querySelector('[data-sector-direction="previous"]');
  const next = controls.querySelector('[data-sector-direction="next"]');
  if (!previous || !next) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function updateControls() {
    const end = Math.max(0, track.scrollWidth - track.clientWidth);
    controls.hidden = end <= 2;
    for (const [button, disabled] of [[previous, track.scrollLeft <= 2], [next, track.scrollLeft >= end - 2]]) {
      const value = String(disabled);
      if (button.getAttribute('aria-disabled') !== value) button.setAttribute('aria-disabled', value);
    }
  }
  function move(direction, button) {
    if (button.getAttribute('aria-disabled') === 'true') return;
    const cards = [...track.children];
    const origin = cards[0]?.offsetLeft || 0;
    const positions = cards.map(card => card.offsetLeft - origin);
    const target = direction > 0
      ? positions.find(left => left > track.scrollLeft + 2)
      : positions.reverse().find(left => left < track.scrollLeft - 2);
    track.scrollTo({ left: target ?? (direction > 0 ? track.scrollWidth : 0), behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  }
  previous.addEventListener('click', () => move(-1, previous));
  next.addEventListener('click', () => move(1, next));
  // Keep the entire focused link visible, including when tabbing backwards.
  track.addEventListener('focusin', event => {
    const link = event.target.closest('.atlas-sector-card');
    if (!link) return;
    const card = link.parentElement;
    const left = card.offsetLeft - track.children[0].offsetLeft;
    if (left < track.scrollLeft || left + card.offsetWidth > track.scrollLeft + track.clientWidth - 8) {
      track.scrollTo({ left, behavior: 'instant' });
    }
  });
  track.addEventListener('scroll', updateControls, { passive: true });
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(updateControls).observe(track);
  else window.addEventListener('resize', updateControls);
  updateControls();
})();
