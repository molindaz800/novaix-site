/* One playing/visible video, at most three retained agents and one intent preload. */
(function (root) {
  function createOpsPlayer({ video, status, control, translate = text => text,
    connection = typeof navigator !== 'undefined' ? navigator.connection : null }) {
    const template = video.cloneNode(false);
    const pool = new Map();
    let source = '', active = false, manualPause = false, epoch = 0, state = 'idle';
    let intentTimer = null, prepared = '';
    const labels = {
      idle: '', loading: 'Cargando vídeo…', buffering: 'Preparando reproducción…',
      playing: '', paused: 'Vídeo en pausa', error: 'No se pudo cargar el vídeo',
      blocked: 'Pulsa reproducir para ver el vídeo'
    };
    function render(next) {
      state = next;
      status.textContent = translate(labels[state]);
      control.hidden = state === 'idle';
      control.textContent = translate(state === 'error' ? 'Reintentar vídeo' :
        state === 'playing' ? 'Pausar vídeo' : 'Reproducir vídeo');
      video.setAttribute('aria-busy', String(state === 'loading' || state === 'buffering'));
    }
    function release(src) {
      const entry = pool.get(src);
      if (!entry) return;
      entry.pause(); entry.removeAttribute('src'); entry.load();
      pool.delete(src);
      if (prepared === src) prepared = '';
    }
    function complete(entry) {
      return Number.isFinite(entry.duration) && entry.buffered.length > 0 &&
        entry.buffered.end(entry.buffered.length - 1) >= entry.duration - 0.1;
    }
    function cancelIntent() {
      if (intentTimer !== null) clearTimeout(intentTimer);
      intentTimer = null;
    }
    function prune(keep) {
      for (const key of pool.keys()) {
        if (pool.size <= 3) break;
        if (key !== source && key !== keep) release(key);
      }
    }
    function obtain(src, poster) {
      let entry = pool.get(src);
      if (!entry) {
        entry = template.cloneNode(false);
        entry.removeAttribute('id');
        entry.muted = true; entry.defaultMuted = true; entry.preload = 'none';
        entry.poster = poster;
        entry.addEventListener('playing', () => {
          if (entry !== video || !source || !active || manualPause) { entry.pause(); return; }
          render('playing');
        });
        entry.addEventListener('waiting', () => {
          if (entry === video && source && active && !manualPause) render('buffering');
        });
        entry.addEventListener('error', () => {
          if (entry === video && source && entry.error) render('error');
        });
      }
      pool.delete(src); pool.set(src, entry); // Most recently used last.
      prune(src);
      return entry;
    }
    function play() {
      if (!source || !active || manualPause) return;
      const attempt = epoch, target = video;
      const promise = target.play();
      if (promise) promise.catch(error => {
        if (attempt !== epoch || target !== video || !active || manualPause || error.name === 'AbortError') return;
        render(error.name === 'NotAllowedError' ? 'blocked' : 'error');
      });
    }
    function load() {
      if (!source || !active) return;
      if (video.getAttribute('src') !== source || video.error) {
        video.preload = 'auto'; video.src = source; video.load(); render('loading');
      }
      play();
    }
    function prepare(src, poster) {
      if (!src || src === source || connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || '')) return;
      // Speculation must not compete with a selected clip still buffering.
      if (source && active && video.readyState < 3) return;
      if (prepared && prepared !== src && prepared !== source) {
        const pending = pool.get(prepared);
        if (pending && !complete(pending)) release(prepared);
      }
      const entry = obtain(src, poster);
      prepared = src;
      if (entry.getAttribute('src') !== src) {
        entry.preload = 'auto'; entry.src = src; entry.load();
      }
      // Never play a speculative or retained element.
    }
    control.addEventListener('click', () => {
      if (state === 'playing') {
        manualPause = true; video.pause(); render('paused');
      } else {
        manualPause = false;
        if (state === 'error') { epoch++; video.removeAttribute('src'); video.load(); }
        load();
      }
    });
    render('idle');
    return {
      select(src, poster) {
        cancelIntent(); epoch++; manualPause = false;
        const previous = source;
        video.pause();
        if (prepared && prepared !== src && prepared !== previous) {
          const pending = pool.get(prepared);
          if (pending && !complete(pending)) release(prepared);
        }
        // Retain completed recent clips, abort an unfinished download on a new choice.
        if (previous && previous !== src && !complete(video)) release(previous);
        source = src;
        const next = obtain(src, poster);
        if (next !== video) {
          const id = video.id;
          video.removeAttribute('id'); next.id = id;
          video.replaceWith(next); video = next;
        }
        video.poster = poster;
        if (video.readyState >= 1) video.currentTime = 0;
        prepared = '';
        render(active ? 'loading' : 'paused'); load();
      },
      // Dwell avoids downloads when the pointer simply crosses the orbital diagram.
      prepare(src, poster, immediate = false) {
        cancelIntent();
        if (immediate) prepare(src, poster);
        else intentTimer = setTimeout(() => { intentTimer = null; prepare(src, poster); }, 150);
      },
      cancelPrepare: cancelIntent,
      stop() {
        cancelIntent(); epoch++; source = ''; prepared = '';
        for (const key of [...pool.keys()]) release(key);
        video.pause(); video.removeAttribute('poster'); render('idle');
      },
      setActive(value) {
        if (active === value) { if (!value) cancelIntent(); return; }
        active = value;
        if (active) { if (state !== 'error' && state !== 'blocked') load(); }
        else {
          cancelIntent(); video.pause();
          if (prepared && prepared !== source) {
            const pending = pool.get(prepared);
            if (pending && !complete(pending)) release(prepared);
          }
          if (source && state !== 'error') render('paused');
        }
      },
      refresh() { render(state); }
    };
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = createOpsPlayer;
  else root.createOpsPlayer = createOpsPlayer;
})(typeof window !== 'undefined' ? window : globalThis);
