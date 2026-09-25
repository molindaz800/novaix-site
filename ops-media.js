/* One on-demand decoder. No agent video is requested before selection. */
(function (root) {
  function createOpsPlayer({ video, status, control, translate = text => text }) {
    let source = '', active = false, manualPause = false, epoch = 0, state = 'idle';
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
    function play() {
      if (!source || !active || manualPause) return;
      const attempt = epoch;
      const promise = video.play();
      if (promise) promise.catch(error => {
        if (attempt !== epoch || !active || manualPause || error.name === 'AbortError') return;
        render(error.name === 'NotAllowedError' ? 'blocked' : 'error');
      });
    }
    function load() {
      if (!source || !active) return;
      if (video.getAttribute('src') !== source) {
        video.src = source;
        video.load();
        render('loading');
      }
      play();
    }
    function clear() {
      epoch++;
      video.pause();
      video.removeAttribute('src');
      video.load(); // Abort the previous download and release the decoder.
    }
    video.muted = true;
    video.defaultMuted = true;
    video.preload = 'none';
    video.addEventListener('playing', () => {
      if (!source) return;
      if (!active || manualPause) { video.pause(); return; }
      render('playing');
    });
    video.addEventListener('waiting', () => {
      if (source && active && !manualPause) render('buffering');
    });
    video.addEventListener('error', () => { if (source && video.error) render('error'); });
    control.addEventListener('click', () => {
      if (state === 'playing') {
        manualPause = true; video.pause(); render('paused');
      } else {
        manualPause = false;
        if (state === 'error') clear();
        load();
      }
    });
    render('idle');
    return {
      select(src, poster) {
        clear(); source = src; manualPause = false;
        video.poster = poster;
        render(active ? 'loading' : 'paused');
        load();
      },
      stop() { source = ''; clear(); video.removeAttribute('poster'); render('idle'); },
      setActive(value) {
        if (active === value) return;
        active = value;
        if (active) { if (state !== 'error' && state !== 'blocked') load(); }
        else { video.pause(); if (source && state !== 'error') render('paused'); }
      },
      refresh() { render(state); }
    };
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = createOpsPlayer;
  else root.createOpsPlayer = createOpsPlayer;
})(typeof window !== 'undefined' ? window : globalThis);
