/* Decorative space drift. No media downloads; only the visible hero animates. */
(function (root) {
  function createPlanetSpace(host, env = window) {
    const doc = host.ownerDocument;
    const canvas = doc.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    canvas.className = 'studio-stars';
    canvas.setAttribute('aria-hidden', 'true');
    (host.querySelector('.studio-space-scene') || host).appendChild(canvas);
    const reduced = env.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0, height = 0, stars = [], frame = null, last = null;
    let visible = false, elapsed = 0;
    const canRun = () => visible && !doc.hidden && !reduced.matches;
    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        const x = ((star.x * width - elapsed * star.speed) % width + width) % width;
        const y = ((star.y * height + elapsed * star.speed * .18) % height + height) % height;
        // Fade at the edges and over the planet so the original mark stays dominant.
        const edge = Math.min(1, x / 38, (width - x) / 38, y / 32, (height - y) / 32);
        const distance = Math.hypot((x / width - .58) / .3, (y / height - .48) / .36);
        const depth = Math.max(.08, Math.min(1, (distance - .6) * 1.5));
        ctx.globalAlpha = star.alpha * edge * depth;
        ctx.fillStyle = star.warm ? '#ffc28a' : '#b7edff';
        ctx.beginPath();
        ctx.arc(x, y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    function tick(now) {
      frame = null;
      if (!canRun()) { last = null; return; }
      if (last === null) last = now;
      const delta = now - last;
      if (delta >= 1000 / 24) {
        elapsed += Math.min(delta, 100) / 1000;
        last = now;
        draw();
      }
      frame = env.requestAnimationFrame(tick);
    }
    function sync() {
      host.classList.toggle('space-running', canRun());
      if (canRun()) {
        if (frame === null) frame = env.requestAnimationFrame(tick);
      } else {
        if (frame !== null) env.cancelAnimationFrame(frame);
        frame = null; last = null;
      }
    }
    function resize() {
      const bounds = host.getBoundingClientRect();
      width = Math.max(1, bounds.width); height = Math.max(1, bounds.height);
      const scale = Math.min(env.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * scale); canvas.height = Math.round(height * scale);
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      // Deterministic positions prevent stars jumping randomly on viewport changes.
      let seed = 219;
      const random = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
      stars = Array.from({ length: width < 500 ? 72 : 120 }, (_, i) => ({
        x: random(), y: random(), speed: 6 + (i % 3) * 6,
        radius: .8 + random() * 1.1, alpha: .5 + random() * .4, warm: i % 9 === 0
      }));
      draw();
    }
    const observer = new env.IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting; sync();
    });
    const sizeObserver = new env.ResizeObserver(resize);
    doc.addEventListener('visibilitychange', sync);
    reduced.addEventListener('change', sync);
    observer.observe(host); sizeObserver.observe(host);
    resize(); sync();
    return { destroy() {
      visible = false; sync();
      observer.disconnect(); sizeObserver.disconnect();
      doc.removeEventListener('visibilitychange', sync);
      reduced.removeEventListener('change', sync);
      canvas.remove();
    } };
  }
  if (typeof module === 'object' && module.exports) module.exports = createPlanetSpace;
  else {
    const host = root.document.querySelector('.studio-identity');
    if (host) createPlanetSpace(host, root);
  }
})(typeof window !== 'undefined' ? window : globalThis);
