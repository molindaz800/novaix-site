/* Decorative routes only: no real traffic, requests or independent resize maths. */
(function (root) {
  'use strict';
  function createEarthConnections(host, env = window) {
    if (!host) return null;
    const doc = host.ownerDocument;
    const reduced = env.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    let destroyed = false;
    const sync = () => host.classList.toggle('earth-running', !destroyed && visible && !doc.hidden && !reduced.matches);
    const observer = typeof env.IntersectionObserver === 'function'
      ? new env.IntersectionObserver(entries => {
        visible = entries.some(entry => entry.isIntersecting);
        sync();
      }, { threshold: 0 }) : null;
    // Unsupported observers leave a complete static scene rather than an unbounded loop.
    if (observer) observer.observe(host);
    doc.addEventListener('visibilitychange', sync);
    reduced.addEventListener('change', sync);
    const onPageHide = () => { visible = false; sync(); };
    const onPageShow = () => {
      if (observer && !destroyed) { observer.unobserve(host); observer.observe(host); }
      sync();
    };
    env.addEventListener('pagehide', onPageHide);
    env.addEventListener('pageshow', onPageShow);
    sync();
    return { destroy() {
      destroyed = true; sync();
      if (observer) observer.disconnect();
      doc.removeEventListener('visibilitychange', sync);
      reduced.removeEventListener('change', sync);
      env.removeEventListener('pagehide', onPageHide);
      env.removeEventListener('pageshow', onPageShow);
    } };
  }
  if (typeof module === 'object' && module.exports) module.exports = createEarthConnections;
  else createEarthConnections(root.document.querySelector('[data-earth-art]'), root);
})(typeof window !== 'undefined' ? window : globalThis);
