document.getElementById('year').textContent = new Date().getFullYear();
    const t = (text) => (window.novaixT ? window.novaixT(text) : text);

    // Presentacion de NOVAIX: el avance no reproduce sonido; el video completo se abre a peticion.
    (() => {
      const openButton = document.getElementById('hero-video-open');
      const closeButton = document.getElementById('hero-video-close');
      const dialog = document.getElementById('novaix-video-dialog');
      const video = document.getElementById('novaix-presentation-video');
      if (!openButton || !closeButton || !dialog || !video) return;

      // Playback starts only after a user click, so the presentation can use audio.
      video.muted = false;
      video.defaultMuted = false;

      const closeVideo = () => {
        video.pause();
        dialog.close();
        openButton.focus();
      };
      openButton.addEventListener('click', () => {
        dialog.showModal();
        if (!video.getAttribute('src')) {
          video.src = video.dataset.src;
          video.load();
        }
        video.play().catch(() => {});
      });
      closeButton.addEventListener('click', closeVideo);
      dialog.addEventListener('cancel', (event) => {
        event.preventDefault();
        closeVideo();
      });
      dialog.addEventListener('click', (event) => {
        if (event.target === dialog) closeVideo();
      });
    })();

    // Scroll progress
    const progressBar = document.querySelector('.scroll-progress span');
    let progressRaf = 0;
    const updateProgress = () => {
      progressRaf = 0;
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      if (progressBar) progressBar.style.width = `${pct}%`;
    };
    const requestProgressUpdate = () => {
      if (progressRaf) return;
      progressRaf = requestAnimationFrame(updateProgress);
    };
    window.addEventListener('scroll', requestProgressUpdate, { passive: true });
    requestProgressUpdate();

    // Navbar: se oculta al hacer scroll (desktop) y reaparece al acercar el raton arriba
    const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const hoverFine = window.matchMedia('(hover: hover) and (pointer: fine)');

    const NAV_HIDE_SCROLL = 110;
    const NAV_REVEAL_ZONE = 44; // px desde arriba
    const NAV_HIDE_DELAY = 650;

    let navRaf = 0;
    let navHideTimer = 0;
    let lastPointerY = Number.POSITIVE_INFINITY;

    const clearNavHideTimer = () => {
      if (!navHideTimer) return;
      clearTimeout(navHideTimer);
      navHideTimer = 0;
    };
    const showNav = () => {
      if (!nav) return;
      clearNavHideTimer();
      nav.classList.remove('nav--hidden');
    };
    const hideNav = () => {
      if (!nav || !hoverFine.matches) return;
      if (window.scrollY <= NAV_HIDE_SCROLL) return;
      if (nav.classList.contains('nav--open')) return;
      if (nav.matches(':hover')) return;
      if (nav.contains(document.activeElement)) return;
      if (lastPointerY <= NAV_REVEAL_ZONE) return;
      nav.classList.add('nav--hidden');
    };
    const scheduleHideNav = () => {
      clearNavHideTimer();
      navHideTimer = setTimeout(hideNav, NAV_HIDE_DELAY);
    };
    const updateNavVisibility = () => {
      navRaf = 0;
      if (!nav) return;

      // En movil/touch no ocultamos (no hay hover fiable)
      if (!hoverFine.matches) {
        nav.classList.remove('nav--hidden');
        return;
      }

      if (window.scrollY <= NAV_HIDE_SCROLL) {
        showNav();
        return;
      }

      if (nav.classList.contains('nav--open') || nav.matches(':hover') || nav.contains(document.activeElement) || lastPointerY <= NAV_REVEAL_ZONE) {
        showNav();
        return;
      }

      nav.classList.add('nav--hidden');
    };
    const requestNavUpdate = () => {
      if (navRaf) return;
      navRaf = requestAnimationFrame(updateNavVisibility);
    };

    window.addEventListener('scroll', requestNavUpdate, { passive: true });
    window.addEventListener('resize', requestNavUpdate, { passive: true });
    if (hoverFine.addEventListener) hoverFine.addEventListener('change', requestNavUpdate);
    else if (hoverFine.addListener) hoverFine.addListener(requestNavUpdate);

    if (hoverFine.matches) {
      window.addEventListener('pointermove', (e) => {
        lastPointerY = e.clientY;
        if (lastPointerY <= NAV_REVEAL_ZONE) showNav();
        else scheduleHideNav();
      }, { passive: true });
    }

    nav?.addEventListener('mouseenter', showNav);
    nav?.addEventListener('mouseleave', scheduleHideNav);
    nav?.addEventListener('focusin', showNav);
    nav?.addEventListener('focusout', scheduleHideNav);

    document.querySelectorAll('.nav-dropdown').forEach((dropdown) => {
      dropdown.addEventListener('mouseenter', () => dropdown.classList.add('is-open'));
      dropdown.addEventListener('mouseleave', () => dropdown.classList.remove('is-open'));
      dropdown.addEventListener('focusin', () => dropdown.classList.add('is-open'));
      dropdown.addEventListener('focusout', () => dropdown.classList.remove('is-open'));
    });

    requestNavUpdate();

    // Mobile nav toggle
    if (nav && navToggle) {
      const setNavOpen = (open) => {
        nav.classList.toggle('nav--open', open);
        navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        const labelKey = open ? 'site.nav.close' : 'site.nav.open';
        navToggle.setAttribute('aria-label', window.novaixTranslateKey?.(labelKey) || (open ? 'Cerrar menú' : 'Abrir menú'));
        if (navLinks) {
          navLinks.style.maxHeight = open ? '80vh' : '';
          navLinks.style.opacity = open ? '1' : '';
          navLinks.style.visibility = open ? 'visible' : '';
        }
        showNav();
        requestNavUpdate();
      };

      navToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        setNavOpen(!nav.classList.contains('nav--open'));
      });

      navLinks?.querySelectorAll('a, button').forEach(link => link.addEventListener('click', () => setNavOpen(false)));
      document.addEventListener('click', (e) => {
        if (e.target && e.target.closest && e.target.closest('.nav-toggle')) return;
        if (!nav.contains(e.target)) {
          setNavOpen(false);
        }
      });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setNavOpen(false); });
    }

    // Reveal on scroll
    const revealTargets = document.querySelectorAll('section');
    revealTargets.forEach(el => el.classList.add('reveal'));
    const revealObs = new IntersectionObserver((entries, obsr) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obsr.unobserve(entry.target);
        }
      });
	    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
	    revealTargets.forEach(el => { if (el.id !== 'legal') revealObs.observe(el); });

	    // Efecto agua (onditas) en hero
	    const hero = document.getElementById('top');
    const rippleLayer = document.createElement('div');
    rippleLayer.style.position = 'absolute';
    rippleLayer.style.inset = '0';
    rippleLayer.style.overflow = 'hidden';
    rippleLayer.style.pointerEvents = 'none';
    rippleLayer.style.zIndex = '1';
    hero.appendChild(rippleLayer);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(pointer: fine)');
    let lastRippleAt = 0;

    function spawnRipple(e, rect) {
      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.width = ripple.style.height = '180px';
      ripple.style.borderRadius = '50%';
      ripple.style.border = '1px solid rgba(0,195,255,0.35)';
      ripple.style.boxShadow = '0 0 20px rgba(0,195,255,0.35)';
      ripple.style.left = (e.clientX - rect.left - 90) + 'px';
      ripple.style.top = (e.clientY - rect.top - 90) + 'px';
      ripple.style.opacity = '0.6';
      ripple.style.transform = 'scale(0.6)';
      ripple.style.transition = 'transform 1s ease, opacity 1s ease';
      rippleLayer.appendChild(ripple);
      requestAnimationFrame(() => {
        ripple.style.transform = 'scale(1.8)';
        ripple.style.opacity = '0';
      });
      setTimeout(() => ripple.remove(), 1100);
    }

    function handleHeroPointer(e) {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty('--rx', `${x}%`);
      hero.style.setProperty('--ry', `${y}%`);

      if (prefersReducedMotion.matches) return;
      const now = performance.now();
      if (now - lastRippleAt < 120) return;
      lastRippleAt = now;
      spawnRipple(e, rect);
    }

    if (finePointer.matches) {
      hero.addEventListener('pointermove', handleHeroPointer);
      hero.addEventListener('pointerleave', () => {
        hero.style.setProperty('--rx', '50%');
        hero.style.setProperty('--ry', '40%');
      });
    }

    // Ambient glow (cursor spotlight en toda la página)
    if (finePointer.matches && !prefersReducedMotion.matches) {
      let glowRaf = 0;
      let lastX = 0;
      let lastY = 0;
      window.addEventListener('pointermove', (e) => {
        lastX = e.clientX;
        lastY = e.clientY;
        if (glowRaf) return;
        glowRaf = requestAnimationFrame(() => {
          glowRaf = 0;
          const x = (lastX / window.innerWidth) * 100;
          const y = (lastY / window.innerHeight) * 100;
          document.documentElement.style.setProperty('--mx', `${x}%`);
          document.documentElement.style.setProperty('--my', `${y}%`);
        });
      }, { passive: true });
    }

    // Carrusel
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.slide'));
    const dotsContainer = document.getElementById('carousel-dots');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    let current = 0;
    slides.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.className = 'dot' + (i === 0 ? ' active' : '');
      btn.setAttribute('aria-label', t(`Ir al slide ${i + 1}`));
      btn.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(btn);
    });
    function goTo(index) {
      current = (index + slides.length) % slides.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      dotsContainer.querySelectorAll('.dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
        d.setAttribute('aria-current', i === current ? 'true' : 'false');
      });
      slides.forEach((slide, i) => {
        slide.inert = i !== current;
        slide.setAttribute('aria-hidden', String(i !== current));
      });
    }
    prevBtn?.addEventListener('click', () => {
      goTo(current - 1);
    });
    nextBtn?.addEventListener('click', () => {
      goTo(current + 1);
    });

    const carouselEl = document.getElementById('carousel');
    goTo(0);

    // Swipe en movil/trackpad
    if (carouselEl && track) {
      let startX = 0;
      let activePointerId = null;

      carouselEl.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        // No iniciar swipe si el usuario esta interactuando con controles (flechas/dots/enlaces)
        if (e.target && e.target.closest && e.target.closest('button, a, input, textarea, select, label')) return;
        startX = e.clientX;
        activePointerId = e.pointerId;
        carouselEl.setPointerCapture(activePointerId);
      });

      const finishSwipe = (e) => {
        if (activePointerId === null) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 50) {
          goTo(current + (dx < 0 ? 1 : -1));
        }
        activePointerId = null;
      };

      carouselEl.addEventListener('pointerup', finishSwipe);
      carouselEl.addEventListener('pointercancel', () => {
        activePointerId = null;
      });
    }

    // help text animacion on-visible
    const helpText = document.querySelector('.help-text');
    if (helpText) {
      const helpObs = new IntersectionObserver((entries, obsr) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            helpText.classList.add('visible');
            obsr.disconnect();
          }
        });
      }, { threshold: 0.4 });
      helpObs.observe(helpText);
    }

    // Calendly modal oscuro
    const calModal = document.getElementById('calendly-modal');
    const calClose = calModal?.querySelector('.calendly-close');
    const calTriggers = document.querySelectorAll('[data-calendly-open]');

    function openCalendlyModal(e) {
      if (e) e.preventDefault();
      const consent = localStorage.getItem('novaix_calendly_consent');
      if (consent !== 'accepted') {
        document.getElementById('cookie-banner')?.classList.add('show');
        return;
      }
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'schedule_cta_click',
        cta_text: e?.currentTarget?.innerText?.trim() || 'Agendar cita'
      });
      loadCalendlyScript();
      calModal?.classList.add('open');
      calModal?.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      calClose?.focus();
    }
    function closeCalendlyModal() {
      if (!calModal?.classList.contains('open')) return;
      calModal?.classList.remove('open');
      calModal?.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    calTriggers.forEach(btn => btn.addEventListener('click', openCalendlyModal));
    calClose?.addEventListener('click', closeCalendlyModal);
    calModal?.addEventListener('click', (e) => {
      if (e.target === calModal) closeCalendlyModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeCalendlyModal();
    });

    // Legal modal
    const legalModal = document.getElementById('legal-modal');
    const legalClose = legalModal?.querySelector('.legal-close');
    const legalTriggers = document.querySelectorAll('.legal-open, a[href="#legal"]');
    function openLegal(e) {
      if (e) e.preventDefault();
      legalModal?.classList.add('open');
      legalModal?.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      legalClose?.focus();
    }
    function closeLegal() {
      if (!legalModal?.classList.contains('open')) return;
      legalModal?.classList.remove('open');
      legalModal?.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    legalTriggers.forEach(l => l.addEventListener('click', openLegal));
    legalClose?.addEventListener('click', closeLegal);
    legalModal?.addEventListener('click', (e) => { if (e.target === legalModal) closeLegal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLegal(); });
    if (window.location.hash === '#legal') openLegal();

    // Scroll suave personalizado a demo (mas lento)
    document.querySelectorAll('a[href="#demo"]:not([data-calendly-open])').forEach(link => {
      link.addEventListener('click', (e) => {
        if (prefersReducedMotion.matches) return;
        e.preventDefault();
        const target = document.getElementById('demo');
        if (!target) return;
        const start = window.scrollY;
        const end = target.getBoundingClientRect().top + window.scrollY - 20;
        const duration = 900;
        let startTime = null;
        const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        function anim(timestamp) {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeInOutQuad(progress);
          window.scrollTo(0, start + (end - start) * eased);
          if (elapsed < duration) requestAnimationFrame(anim);
        }
        requestAnimationFrame(anim);
      });
    });

    // Chat funcional (n8n)
    (() => {
      const fab = document.getElementById('chat-fab');
      const chatbox = document.getElementById('chatbox');
      const closeBtn = document.getElementById('close-chat');
      const fullBtn = document.getElementById('toggle-full');
      const form = document.getElementById('chat-form');
      const input = document.getElementById('chat-input');
      const messages = document.getElementById('chat-messages');
      const statusBar = document.querySelector('.status-bar');
      const quickButtons = document.querySelectorAll('.chip-btn');
      const sendBtn = form?.querySelector('.send-btn');

      const N8N_WEBHOOK_URL = 'https://hooks.novaix.es/webhook/ai-chat';
      const sessionId = (() => {
        const existing = localStorage.getItem('novaix_session');
        if (existing) return existing;
        const fresh = window.crypto && crypto.randomUUID
          ? crypto.randomUUID()
          : `nx-${Date.now()}-${Math.random().toString(16).slice(2)}`;
        localStorage.setItem('novaix_session', fresh);
        return fresh;
      })();

      const closeChat = () => {
        if (!chatbox.classList.contains('chatbox--open')) return;
        fab.style.visibility = '';
        fab.setAttribute('aria-expanded', 'false');
        fab.focus();
        chatbox.classList.remove('chatbox--open');
        chatbox.inert = true;
        chatbox.setAttribute('aria-hidden', 'true');
      };
      fab?.addEventListener('click', () => {
        chatbox.inert = false;
        chatbox.setAttribute('aria-hidden', 'false');
        chatbox.classList.add('chatbox--open');
        fab.setAttribute('aria-expanded', 'true');
        fab.style.visibility = 'hidden';
        input?.focus();
      });
      closeBtn?.addEventListener('click', closeChat);
      chatbox?.addEventListener('keydown', event => {
        if (event.key === 'Escape') { event.preventDefault(); closeChat(); }
      });
      fullBtn?.addEventListener('click', () => {
        const isFull = chatbox.classList.toggle('chatbox--full');
        fullBtn.setAttribute('aria-pressed', isFull ? 'true' : 'false');
        fullBtn.setAttribute('aria-label', t(isFull ? 'Restaurar chat' : 'Maximizar chat'));
        fullBtn.innerHTML = isFull
          ? '<i class="fa-solid fa-down-left-and-up-right-to-center"></i>'
          : '<i class="fa-solid fa-up-right-and-down-left-from-center"></i>';
      });

      function addMessage(text, sender) {
        const div = document.createElement('div');
        div.className = `bubble-row ${sender}`;
        if (sender === 'bot') {
          const avatar = document.createElement('div');
          avatar.className = 'avatar';
          avatar.innerHTML = '<i class="fa-solid fa-robot"></i>';
          div.appendChild(avatar);
        }
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.textContent = text;
        div.appendChild(bubble);
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
      }

      function addLoadingMessage() {
        const div = document.createElement('div');
        div.className = 'bubble-row bot loading';
        const avatar = document.createElement('div');
        avatar.className = 'avatar';
        avatar.innerHTML = '<i class="fa-solid fa-robot"></i>';
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.setAttribute('aria-label', t('La IA está escribiendo'));
        for (let i = 0; i < 3; i += 1) {
          const dot = document.createElement('span');
          dot.className = 'typing-dot';
          bubble.appendChild(dot);
        }
        div.appendChild(avatar);
        div.appendChild(bubble);
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
        return div;
      }

      function setChatBusy(isBusy) {
        if (input) input.disabled = isBusy;
        if (sendBtn) sendBtn.disabled = isBusy;
        quickButtons.forEach(btn => { btn.disabled = isBusy; });
        if (statusBar) statusBar.textContent = isBusy ? t('La IA está pensando...') : t('Listo para responder');
      }

      async function sendToN8n(text) {
        addMessage(text, 'user');
        input.value = '';
        setChatBusy(true);
        const loading = addLoadingMessage();
        try {
          const res = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              message: text,
              sessionId,
              source: 'novaix-site',
              metadata: { page: window.location.href }
            })
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data = await res.json();
          if (
            localStorage.getItem('novaix_calendly_consent') === 'accepted'
            && sessionStorage.getItem('novaix_chat_started_tracked') !== '1'
          ) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ event: 'novaix_chat_started' });
            sessionStorage.setItem('novaix_chat_started_tracked', '1');
          }
          loading.remove();
          addMessage(data.reply || t('No he recibido respuesta de la IA. Intenta de nuevo.'), 'bot');
          setChatBusy(false);
          input?.focus();
        } catch (err) {
          console.error(err);
          loading.remove();
          addMessage(t('No he podido conectar con el asistente. Revisa la URL del webhook en n8n.'), 'bot');
          setChatBusy(false);
          if (statusBar) statusBar.textContent = t('Error de conexion');
        }
      }

      form?.addEventListener('submit', (e) => {
        e.preventDefault();
        const val = input.value.trim();
        if (!val) return;
        sendToN8n(val);
      });

      window.sendQuick = function(btn) {
        const text = btn.dataset.prompt || btn.innerText;
        sendToN8n(text);
      };
    })();

    /* ============================
       OPS HUB · ORBITAL SYSTEM
       ============================ */
    (() => {
      const stage = document.getElementById('nx-stage');
      const nodesHost = document.getElementById('nx-nodes');
      if (!stage || !nodesHost) return;

      const orbitOuter = document.getElementById('nx-orbit-outer');
      const orbitMid = document.getElementById('nx-orbit-mid');
      const orbOuter = document.getElementById('nx-orb-outer');
      const orbMid = document.getElementById('nx-orb-mid');
      const txSub = document.getElementById('nx-tx-sub');
      const txStatus = document.getElementById('nx-tx-status');
      const idle = document.getElementById('nx-idle');
      const live = document.getElementById('nx-live');
      const cardVideo = document.getElementById('nx-card-video');
      const liveAvatar = document.getElementById('nx-avatar-box');
      const liveCurtain = document.getElementById('nx-curtain');
      const liveCard = document.getElementById('nx-tx-card');
      const liveVeil = document.getElementById('nx-card-veil');
      const mediaPlayer = window.createOpsPlayer({
        video: cardVideo, status: document.getElementById('nx-media-status'),
        control: document.getElementById('nx-media-control'), translate: t
      });
      let cardVisible = false;
      const syncMediaVisibility = () => mediaPlayer.setActive(cardVisible && !document.hidden);
      new IntersectionObserver(([entry]) => {
        cardVisible = entry.isIntersecting; syncMediaVisibility();
      }, { threshold: 0 }).observe(liveCard);
      document.addEventListener('visibilitychange', syncMediaVisibility);
      const liveName = document.getElementById('nx-live-name');
      const liveRole = document.getElementById('nx-live-role');
      const liveLines = document.getElementById('nx-live-lines');
      const liveLog = document.getElementById('nx-live-log');
      const finished = document.getElementById('nx-finished');
      const replayBtn = document.getElementById('nx-replay');

      const canvas = document.getElementById('nx-stars');
      const ctx = canvas.getContext('2d');
      const faceCanvas = document.getElementById('nx-face');
      const fctx = faceCanvas.getContext('2d');
      const linkCanvas = document.getElementById('nx-links');
      const lctx = linkCanvas.getContext('2d');


      let selectedId = null;
      let timers = [];
      let faceTimer = null;

      const pos = new Map();
      let linkEdges = [];
      let linkW = 0;
      let linkH = 0;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const saveData = Boolean(navigator.connection && navigator.connection.saveData);
      const isMobileLite = window.matchMedia('(max-width: 980px)').matches || prefersReducedMotion.matches || saveData;

      function setAccent(rgbStr, rgbStr2) {
        document.documentElement.style.setProperty('--nx-agent-accent', rgbStr);
        document.documentElement.style.setProperty('--nx-agent-accent2', rgbStr2 || rgbStr);
      }

      const AGENTS = [
        { id: 'SENTINEL', name: 'SENTINEL', role: 'Seguridad y RGPD', video: '/videos/ops/Sentinel.mp4', accent: '0,195,255', accent2: '122,240,255',
          bullets: ['Control de acceso y roles.', 'Trazabilidad y auditoría.', 'Minimiza datos y aplica buenas prácticas.'],
          log: [{ t: 'Validando permisos y politicas...', kind: 'ok' }, { t: 'Canal aislado por rol + tenant.', kind: 'ok' }, { t: 'Auditoria lista (eventos criticos).', kind: 'ok' }]
        },
        { id: 'PULSE', name: 'PULSE', role: 'Soporte omnicanal', video: '/videos/ops/Pulse.mp4', accent: '122,240,255', accent2: '0,195,255',
          bullets: ['Filtra y califica consultas.', 'Escala a humano con historial.', 'Registra datos en CRM.'],
          log: [{ t: 'Ruteando consultas por intencion...', kind: 'ok' }, { t: 'Contexto + historial anexado.', kind: 'ok' }, { t: 'Registro en CRM sincronizado.', kind: 'ok' }]
        },
        { id: 'CHRONOS', name: 'CHRONOS', role: 'Agenda y citas', video: '/videos/ops/Chronos.mp4', accent: '64,255,210', accent2: '0,195,255',
          bullets: ['Reprogramacion inteligente.', 'Sincroniza calendarios.', 'Evita ausencias con avisos.'],
          log: [{ t: 'Slot-check en tiempo real...', kind: 'ok' }, { t: 'Confirmacion enviada al cliente.', kind: 'ok' }, { t: 'Recordatorio + reprogramacion activa.', kind: 'ok' }]
        },
        { id: 'SYNAPSE', name: 'SYNAPSE', role: 'CRM y operaciones', video: '/videos/ops/Synapse.mp4', accent: '160,120,255', accent2: '122,240,255',
          bullets: ['Actualiza contactos y tareas.', 'Gestiona estados y etiquetas.', 'Organiza historial con notas claras.'],
          log: [{ t: 'Actualizando pipeline y etiquetas...', kind: 'ok' }, { t: 'Normalizacion de campos aplicada.', kind: 'ok' }, { t: 'Back-office alineado con n8n.', kind: 'ok' }]
        },
        { id: 'AURA', name: 'AURA', role: 'Reseñas y reputación', video: '/videos/ops/Aura.mp4', accent: '255,120,210', accent2: '122,240,255',
          bullets: ['Solicita y gestiona reseñas.', 'Detecta incidencias.', 'Mejora valoraciones con seguimiento.'],
          log: [{ t: 'Detectando sentimiento y urgencia...', kind: 'ok' }, { t: 'Plantillas de respuesta por tono de marca.', kind: 'ok' }, { t: 'Flujo de recuperación activado.', kind: 'ok' }]
        },
        { id: 'FORGE', name: 'FORGE', role: 'Leads y ventas', video: '/videos/ops/Forge.mp4', accent: '255,181,62', accent2: '0,195,255',
          bullets: ['Cualificación automática con scoring.', 'Seguimiento de prospectos.', 'Resumen listo para CRM.'],
          log: [{ t: 'Scoring aplicado (fit + intención).', kind: 'ok' }, { t: 'Lead enriquecido y priorizado.', kind: 'ok' }, { t: 'Resumen comercial generado.', kind: 'ok' }]
        },
        { id: 'SPARK', name: 'SPARK', role: 'Contenido y redes', video: '/videos/ops/Spark.mp4', accent: '255,90,90', accent2: '255,181,62',
          bullets: ['Genera copys y piezas reutilizables.', 'Publica en horario óptimo.', 'Reusa formatos según canal.'],
          log: [{ t: 'Calendarización detectada...', kind: 'ok' }, { t: 'Creatividades adaptadas a canal.', kind: 'ok' }, { t: 'Publicación programada.', kind: 'ok' }]
        },
        { id: 'ORACLE', name: 'ORACLE', role: 'Informes y KPIs', video: '/videos/ops/Oracle.mp4', accent: '0,255,170', accent2: '122,240,255',
          bullets: ['Reporte semanal automático.', 'Alertas por caídas.', 'Recomendaciones accionables.'],
          log: [{ t: 'KPIs agregados (semana actual).', kind: 'ok' }, { t: 'Anomalías detectadas.', kind: 'warn' }, { t: 'Recomendación priorizada.', kind: 'ok' }]
        },
        { id: 'LEDGER', name: 'LEDGER', role: 'Cobros y pagos', video: '/videos/ops/Ledger.mp4', accent: '100,200,255', accent2: '0,195,255',
          bullets: ['Recordatorios automáticos.', 'Enlaces de pago rápidos.', 'Seguimiento por estado.'],
          log: [{ t: 'Enlace de pago generado.', kind: 'ok' }, { t: 'Recordatorio programado.', kind: 'ok' }, { t: 'Estado conciliado en back-office.', kind: 'ok' }]
        },
        { id: 'PRIME', name: 'PRIME', role: 'Director de Operaciones IA', video: '/videos/ops/Prime.mp4', leader: true, accent: '255,181,62', accent2: '0,195,255',
          bullets: ['Integra canales y herramientas clave.', 'Orquesta procesos end-to-end con reglas.', 'Sincroniza CRM y calendarios en vivo.', 'Supervisa ejecución con reporting.'],
          log: [{ t: 'Orquestación activada (canales + n8n)...', kind: 'ok' }, { t: 'Enrutado inteligente por prioridad.', kind: 'ok' }, { t: 'Observabilidad + reporting listo.', kind: 'ok' }]
        }
      ];

      const ICONS = {
        PRIME: 'fa-solid fa-crown',
        SENTINEL: 'fa-solid fa-shield-halved',
        PULSE: 'fa-solid fa-wave-square',
        CHRONOS: 'fa-solid fa-clock',
        SYNAPSE: 'fa-solid fa-plug-circle-bolt',
        AURA: 'fa-solid fa-star',
        FORGE: 'fa-solid fa-gears',
        ORACLE: 'fa-solid fa-chart-line',
        LEDGER: 'fa-solid fa-file-invoice-dollar',
        SPARK: 'fa-solid fa-bolt'
      };

      const outerIds = ['SENTINEL', 'AURA', 'FORGE', 'SPARK', 'LEDGER', 'PRIME'];
      const midIds = ['PULSE', 'CHRONOS', 'SYNAPSE', 'ORACLE'];

      const GRAPH = {
        PRIME: ['SENTINEL', 'PULSE', 'CHRONOS', 'SYNAPSE', 'FORGE', 'LEDGER', 'ORACLE', 'SPARK', 'AURA'],
        SENTINEL: ['PRIME', 'SYNAPSE', 'PULSE', 'LEDGER', 'ORACLE'],
        PULSE: ['PRIME', 'CHRONOS', 'SYNAPSE', 'AURA', 'FORGE'],
        CHRONOS: ['PRIME', 'PULSE', 'SYNAPSE', 'LEDGER', 'ORACLE'],
        SYNAPSE: ['PRIME', 'FORGE', 'CHRONOS', 'PULSE', 'LEDGER', 'ORACLE', 'SENTINEL'],
        FORGE: ['PRIME', 'SYNAPSE', 'PULSE', 'LEDGER', 'SPARK', 'ORACLE'],
        LEDGER: ['PRIME', 'SYNAPSE', 'FORGE', 'CHRONOS', 'SENTINEL'],
        ORACLE: ['PRIME', 'SYNAPSE', 'FORGE', 'CHRONOS', 'SPARK', 'SENTINEL'],
        SPARK: ['PRIME', 'FORGE', 'ORACLE', 'AURA'],
        AURA: ['PRIME', 'PULSE', 'SPARK']
      };

      const NODE_OFFSETS = {
        SYNAPSE: { dx: -42, dy: 0 },
        LEDGER: { dx: +42, dy: 0 },
        AURA: { dx: +40, dy: 0 },
        PULSE: { dx: -40, dy: 0 }
      };

      function clearTimers() {
        timers.forEach(t => clearTimeout(t));
        timers = [];
        if (faceTimer) { clearTimeout(faceTimer); faceTimer = null; }
      }

      function setTxIdle() {
        clearTimers();
        selectedId = null;
        finished.classList.remove('show');
        live.style.display = 'none';
        idle.style.display = 'grid';
        txSub.textContent = t('Canal cifrado · Esperando selección');
        txStatus.innerHTML = '<i class="fa-solid fa-circle-play"></i> ' + t('En espera');
        setAccent('0,195,255', '122,240,255');
        updateLinks(null);
        if (faceCanvas) {
          faceCanvas.style.opacity = '0';
          fctx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
        }
        mediaPlayer.stop();
        liveAvatar?.classList.remove('is-video');
        liveCard?.classList.remove('is-video');
        if (liveVeil) liveVeil.style.opacity = '0';
        liveCurtain?.classList.remove('play');
      }

      function stamp() {
        const d = new Date();
        return `[${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}]`;
      }

      function startTransmission(agentId) {
        clearTimers();
        finished.classList.remove('show');

        const a = AGENTS.find(x => x.id === agentId);
        if (!a) return;

        selectedId = agentId;
        setAccent(a.accent, a.accent2);
        updateLinks(agentId);
        showFace(agentId);
        if (isMobileLite) drawLinks(0);

        idle.style.display = 'none';
        live.style.display = 'grid';
        txSub.textContent = `${t('Canal cifrado')} · ${a.name} ${t('en línea')}`;
        txStatus.innerHTML = '<i class="fa-solid fa-signal"></i> ' + t('Transmitiendo');


        if (a.video) {
          mediaPlayer.select(a.video, a.video.replace(/\.mp4$/, '.webp'));
          liveCard?.classList.add('is-video');
          if (liveVeil) liveVeil.style.opacity = '1';
        } else {
          mediaPlayer.stop();
          liveCard?.classList.remove('is-video');
          if (liveVeil) liveVeil.style.opacity = '0';
        }

        liveName.textContent = a.name;
        liveRole.textContent = t(a.role);
        liveLines.innerHTML = '';
        liveLog.innerHTML = '';

        liveLog.innerHTML = `<span class="ok">${stamp()} ${t('handshake: estableciendo canal…')}</span>`;
        timers.push(setTimeout(() => {
          liveLog.innerHTML += `<span class="ok">${stamp()} ${t('canal: cifrado activo')}</span>`;
        }, 900));

        const baseDelay = 1200;
        const stepDelay = 1650;

        a.bullets.forEach((b, idx) => {
          timers.push(setTimeout(() => {
            const row = document.createElement('div');
            row.className = 'nx-line';
            row.innerHTML = `<i class="fa-solid fa-check"></i><div><b>${t('Paquete')} ${idx + 1}:</b> ${t(b)}</div>`;
            liveLines.appendChild(row);
          }, baseDelay + idx * stepDelay));
        });

        a.log.forEach((l, idx) => {
          timers.push(setTimeout(() => {
            const span = document.createElement('span');
            span.className = l.kind || 'ok';
            span.textContent = `${stamp()} ${t(l.t)}`;
            liveLog.appendChild(span);
            liveLog.scrollTop = liveLog.scrollHeight;
          }, baseDelay + 600 + idx * 1350));
        });

        const endAt = 15000;
        timers.push(setTimeout(() => {
          txStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> ' + t('Finalizada');
          const endLine = document.createElement('span');
          endLine.className = 'ok';
          endLine.textContent = `${stamp()} ${t('transmisión: finalizada (OK)')}`;
          liveLog.appendChild(endLine);
          liveLog.scrollTop = liveLog.scrollHeight;
          finished.classList.add('show');
        }, endAt));
      }

      replayBtn?.addEventListener('click', () => {
        if (selectedId) startTransmission(selectedId);
      });

      window.addEventListener('novaix:languagechange', () => {
        mediaPlayer.refresh();
        if (!selectedId) {
          txSub.textContent = t('Canal cifrado · Esperando selección');
          return;
        }
        const activeAgent = AGENTS.find(x => x.id === selectedId);
        if (!activeAgent) return;
        txSub.textContent = `${t('Canal cifrado')} · ${activeAgent.name} ${t('en línea')}`;
        liveRole.textContent = t(activeAgent.role);
      });

      function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

      function layout() {
        const rect = stage.getBoundingClientRect();
        const size = Math.min(rect.width, rect.height);
        const rOuter = Math.max(215, Math.floor(size * 0.41));
        const rMid = Math.max(155, Math.floor(size * 0.295));

        orbitOuter.style.width = orbitOuter.style.height = `${rOuter * 2}px`;
        orbitMid.style.width = orbitMid.style.height = `${rMid * 2}px`;

        orbOuter.style.setProperty('--r', `${rOuter}px`);
        orbOuter.style.animation = 'nxSpin 10.2s linear infinite';
        orbOuter.style.transform = `rotate(0deg) translateX(${rOuter}px)`;

        orbMid.style.setProperty('--r', `${rMid}px`);
        orbMid.style.animation = 'nxSpin 7.2s linear infinite reverse';
        orbMid.style.transform = `rotate(0deg) translateX(${rMid}px)`;

        nodesHost.innerHTML = '';
        pos.clear();

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const SAFE = 58;

        function placeRing(ids, radius, startAngleDeg) {
          const n = ids.length;
          ids.forEach((id, i) => {
            const a = AGENTS.find(x => x.id === id);
            const ang = (startAngleDeg + (360 / n) * i) * Math.PI / 180;

            let x = centerX + Math.cos(ang) * radius;
            let y = centerY + Math.sin(ang) * radius;

            const off = NODE_OFFSETS[id];
            if (off) {
              x += off.dx;
              y += off.dy;
            }

            x = clamp(x, SAFE, rect.width - SAFE);
            y = clamp(y, SAFE, rect.height - SAFE);

            pos.set(id, { x, y });

            const node = document.createElement('div');
            node.className = 'nx-node' + (id === 'PRIME' ? ' nx-prime' : '');
            node.style.left = `${x}px`;
            node.style.top = `${y}px`;
            node.setAttribute('data-agent', id);
            node.setAttribute('role', 'button');
            node.setAttribute('tabindex', '0');
            node.setAttribute('aria-label', a.name);
            const prepareVideo = (immediate = false) => {
              if (!document.hidden) mediaPlayer.prepare(a.video, a.video.replace(/\.mp4$/, '.webp'), immediate);
            };
            node.addEventListener('pointerenter', (event) => {
              if (event.pointerType !== 'touch') prepareVideo();
            });
            node.addEventListener('pointerleave', () => mediaPlayer.cancelPrepare());
            node.addEventListener('focus', () => prepareVideo());
            node.addEventListener('blur', () => mediaPlayer.cancelPrepare());
            node.addEventListener('pointerdown', () => prepareVideo(true));
            node.addEventListener('keydown', (event) => {
              if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); node.click(); }
            });

            node.style.setProperty('--node-accent', a.accent);
            node.style.setProperty('--node-accent2', a.accent2 || a.accent);
            node.style.animationDelay = (Math.random() * 1.2).toFixed(2) + 's';

            node.innerHTML = `
              <div class="nx-icon3d" aria-hidden="true">
                <i class="${ICONS[id] || 'fa-solid fa-circle'}"></i>
              </div>
              <div class="nx-label">${a.name}</div>
            `;

            node.addEventListener('click', () => {
              document.querySelectorAll('.nx-node').forEach(n => n.classList.remove('is-active'));
              node.classList.add('is-active');
              startTransmission(id);
              burstSparks(x, y, id === 'PRIME' ? 14 : 10);
              shockwave(x, y);
            });

            nodesHost.appendChild(node);
          });
        }

        placeRing(outerIds, rOuter, -150);
        placeRing(midIds, rMid, -90);

        if (selectedId) {
          updateLinks(selectedId);
        }
      }

      stage.addEventListener('pointermove', (e) => {
        const r = stage.getBoundingClientRect();
        const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
        const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
        const px = clamp(nx * 10, -10, 10);
        const py = clamp(ny * 10, -10, 10);
        stage.style.setProperty('--px', `${px}px`);
        stage.style.setProperty('--py', `${py}px`);
      });
      stage.addEventListener('pointerleave', () => {
        stage.style.setProperty('--px', '0px');
        stage.style.setProperty('--py', '0px');
      });

      function resizeCanvases() {
        const dpr = Math.min(1.5, Math.max(1, window.devicePixelRatio || 1));

        canvas.width = Math.floor(stage.clientWidth * dpr);
        canvas.height = Math.floor(stage.clientHeight * dpr);
        canvas.style.width = stage.clientWidth + 'px';
        canvas.style.height = stage.clientHeight + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        linkCanvas.width = Math.floor(stage.clientWidth * dpr);
        linkCanvas.height = Math.floor(stage.clientHeight * dpr);
        linkCanvas.style.width = stage.clientWidth + 'px';
        linkCanvas.style.height = stage.clientHeight + 'px';
        lctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        faceCanvas.width = Math.floor(stage.clientWidth * dpr);
        faceCanvas.height = Math.floor(stage.clientHeight * dpr);
        faceCanvas.style.width = stage.clientWidth + 'px';
        faceCanvas.style.height = stage.clientHeight + 'px';
        fctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        linkW = stage.clientWidth;
        linkH = stage.clientHeight;
      }

      let stars = [];
      let links = [];
      function initStars() {
        const w = stage.clientWidth;
        const h = stage.clientHeight;

        const base = Math.floor((w * h) / 16000) + 70;
        const count = Math.min(220, Math.max(120, base));

        stars = Array.from({ length: count }, () => ({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.45 + 0.25,
          a: Math.random() * 0.55 + 0.22,
          tw: Math.random() * 0.02 + 0.005,
          vx: (Math.random() - 0.5) * 0.06,
          vy: (Math.random() - 0.5) * 0.06
        }));

        links = [];
        const threshold = Math.min(190, Math.max(130, Math.sqrt(w * h) * 0.12));
        const maxPerStar = 2;

        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          const nearest = [];
          for (let j = 0; j < stars.length; j++) {
            if (i === j) continue;
            const t = stars[j];
            const dx = s.x - t.x;
            const dy = s.y - t.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < threshold) {
              nearest.push({ j, d });
            }
          }
          nearest.sort((a, b) => a.d - b.d);
          for (let k = 0; k < Math.min(maxPerStar, nearest.length); k++) {
            const j = nearest[k].j;
            const d = nearest[k].d;
            const keyA = i < j ? `${i}-${j}` : `${j}-${i}`;
            if (!links.some(L => (L.i < L.j ? `${L.i}-${L.j}` : `${L.j}-${L.i}`) === keyA)) {
              links.push({ i, j, d });
            }
          }
        }

        if (links.length > 260) {
          links.sort((a, b) => a.d - b.d);
          links = links.slice(0, 260);
        }
      }

      function drawStars() {
        if (isMobileLite) return;
        const w = stage.clientWidth;
        const h = stage.clientHeight;
        ctx.clearRect(0, 0, w, h);

        const g = ctx.createRadialGradient(w * 0.35, h * 0.25, 20, w * 0.5, h * 0.5, Math.max(w, h) * 0.78);
        g.addColorStop(0, 'rgba(0,195,255,0.06)');
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);

        ctx.save();
        ctx.lineWidth = 1;
        for (const L of links) {
          const a = stars[L.i];
          const b = stars[L.j];
          const alpha = Math.max(0, 0.12 - (L.d / 180) * 0.10);
          if (alpha <= 0.01) continue;
          ctx.strokeStyle = `rgba(0,195,255,${alpha * 0.7})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
        ctx.restore();

        for (const s of stars) {
          s.x += s.vx; s.y += s.vy;
          if (s.x < -10) s.x = w + 10;
          if (s.x > w + 10) s.x = -10;
          if (s.y < -10) s.y = h + 10;
          if (s.y > h + 10) s.y = -10;

          s.a += (Math.random() - 0.5) * s.tw;
          s.a = Math.max(0.18, Math.min(0.92, s.a));

          ctx.beginPath();
          ctx.fillStyle = `rgba(245,247,251,${s.a * 0.75})`;
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();

          if (s.r > 1.25) {
            ctx.beginPath();
            ctx.fillStyle = `rgba(122,240,255,${Math.min(0.14, s.a * 0.18)})`;
            ctx.arc(s.x, s.y, s.r * 2.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }


      }

      function drawPhantomFace(agentId) {
        const a = AGENTS.find(x => x.id === agentId);
        const rgb = a?.accent || '0,195,255';
        const rgb2 = a?.accent2 || rgb;

        fctx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);

        const w = stage.clientWidth;
        const h = stage.clientHeight;
        const cx = w * 0.52;
        const cy = h * 0.46;
        const rx = Math.min(w, h) * 0.18;
        const ry = Math.min(w, h) * 0.23;

        fctx.save();
        fctx.globalAlpha = 0.22;
        fctx.strokeStyle = `rgba(${rgb},0.35)`;
        fctx.lineWidth = 1.4;
        fctx.shadowColor = `rgba(${rgb2},0.35)`;
        fctx.shadowBlur = 22;
        fctx.beginPath();
        fctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        fctx.stroke();

        fctx.globalAlpha = 0.18;
        fctx.fillStyle = `rgba(${rgb2},0.45)`;
        fctx.beginPath();
        fctx.ellipse(cx - rx * 0.38, cy - ry * 0.15, rx * 0.18, ry * 0.14, 0, 0, Math.PI * 2);
        fctx.ellipse(cx + rx * 0.38, cy - ry * 0.15, rx * 0.18, ry * 0.14, 0, 0, Math.PI * 2);
        fctx.fill();

        fctx.globalAlpha = 0.22;
        fctx.strokeStyle = `rgba(${rgb},0.22)`;
        fctx.lineWidth = 1.1;
        fctx.beginPath();
        fctx.moveTo(cx, cy - ry * 0.05);
        fctx.quadraticCurveTo(cx + rx * 0.06, cy + ry * 0.08, cx, cy + ry * 0.16);
        fctx.stroke();

        fctx.globalAlpha = 0.16;
        fctx.beginPath();
        fctx.moveTo(cx - rx * 0.28, cy + ry * 0.24);
        fctx.quadraticCurveTo(cx, cy + ry * 0.32, cx + rx * 0.28, cy + ry * 0.22);
        fctx.stroke();

        fctx.globalAlpha = 0.36;
        fctx.shadowBlur = 12;
        for (let i = 0; i < 48; i++) {
          const ang = Math.random() * Math.PI * 2;
          const rad = rx * 0.65 + Math.random() * rx * 0.25;
          const x = cx + Math.cos(ang) * rad;
          const y = cy + Math.sin(ang) * rad * (ry / rx);
          fctx.beginPath();
          fctx.fillStyle = `rgba(${rgb},${0.12 + Math.random() * 0.18})`;
          fctx.arc(x, y, 1.2 + Math.random() * 1.3, 0, Math.PI * 2);
          fctx.fill();
        }

        fctx.restore();
      }

      function showFace(agentId) {
        drawPhantomFace(agentId);
        faceCanvas.style.opacity = '0.78';
        if (faceTimer) clearTimeout(faceTimer);
        faceTimer = setTimeout(() => {
          faceCanvas.style.opacity = '0';
        }, 4800);
      }

      function agentById(id) { return AGENTS.find(a => a.id === id); }

      function buildCluster(seed) {
        const cluster = new Set([seed]);
        const n1 = (GRAPH[seed] || []).slice();
        n1.forEach(x => cluster.add(x));

        const priority = ['SYNAPSE', 'CHRONOS', 'PULSE', 'LEDGER', 'ORACLE', 'PRIME', 'SENTINEL'];
        for (const nb of n1) {
          if (cluster.size >= 8) break;
          const n2 = GRAPH[nb] || [];
          for (const nb2 of priority) {
            if (cluster.size >= 8) break;
            if (n2.includes(nb2)) cluster.add(nb2);
          }
        }
        return cluster;
      }

      function updateLinks(seed) {
        linkEdges = [];
        if (!seed) return;

        const cluster = buildCluster(seed);
        const seedNeighbors = (GRAPH[seed] || []).filter(x => cluster.has(x));

        const edges = [];
        const seen = new Set();

        for (const nb of seedNeighbors) {
          if (!pos.has(seed) || !pos.has(nb)) continue;
          const key = [seed, nb].sort().join('-');
          if (seen.has(key)) continue;
          seen.add(key);

          edges.push({
            a: seed,
            b: nb,
            phase: Math.random(),
            speed: 0.18 + Math.random() * 0.10,
            alpha: 0.85,
            width: 2.1,
            curve: (Math.random() * 0.9 + 0.3) * (Math.random() < 0.5 ? -1 : 1)
          });
        }

        const meshCap = 6;
        let meshCount = 0;
        const clusterArr = Array.from(cluster);

        for (const aId of clusterArr) {
          if (meshCount >= meshCap) break;
          if (aId === seed) continue;

          const neigh = (GRAPH[aId] || []).filter(x => cluster.has(x) && x !== seed);
          for (const bId of neigh) {
            if (meshCount >= meshCap) break;
            if (!pos.has(aId) || !pos.has(bId)) continue;

            const key = [aId, bId].sort().join('-');
            if (seen.has(key)) continue;
            seen.add(key);

            edges.push({
              a: aId,
              b: bId,
              phase: Math.random(),
              speed: 0.10 + Math.random() * 0.08,
              alpha: 0.42,
              width: 1.5,
              curve: (Math.random() * 0.8 + 0.2) * (Math.random() < 0.5 ? -1 : 1)
            });
            meshCount++;
          }
        }

        linkEdges = edges;
      }

      function qBezier(t, p0, p1, p2) {
        const u = 1 - t;
        return {
          x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
          y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y
        };
      }

      function drawLinks(ts) {
        if (isMobileLite && ts > 0) return;
        lctx.clearRect(0, 0, linkW, linkH);

        if (!selectedId || linkEdges.length === 0) {

          return;
        }

        const sel = agentById(selectedId);
        const rgb = sel?.accent || '0,195,255';
        const rgb2 = sel?.accent2 || rgb;

        const bg = lctx.createRadialGradient(linkW * 0.5, linkH * 0.5, 20, linkW * 0.5, linkH * 0.5, Math.max(linkW, linkH) * 0.6);
        bg.addColorStop(0, `rgba(${rgb},0.06)`);
        bg.addColorStop(1, 'rgba(0,0,0,0)');
        lctx.fillStyle = bg;
        lctx.fillRect(0, 0, linkW, linkH);

        lctx.save();
        lctx.lineCap = 'round';
        lctx.lineJoin = 'round';

        const dash = [9, 12];
        const dashOff = -(ts * 0.06);

        for (const e of linkEdges) {
          const p0 = pos.get(e.a);
          const p2 = pos.get(e.b);
          if (!p0 || !p2) continue;

          const mx = (p0.x + p2.x) / 2;
          const my = (p0.y + p2.y) / 2;
          const dx = p2.x - p0.x;
          const dy = p2.y - p0.y;
          const len = Math.hypot(dx, dy) || 1;
          const nx = -dy / len;
          const ny = dx / len;

          const bend = Math.min(52, len * 0.14) * e.curve;
          const p1 = { x: mx + nx * bend, y: my + ny * bend };

          const grad = lctx.createLinearGradient(p0.x, p0.y, p2.x, p2.y);
          grad.addColorStop(0, `rgba(${rgb2},${0.12 * e.alpha})`);
          grad.addColorStop(0.5, `rgba(${rgb},${0.60 * e.alpha})`);
          grad.addColorStop(1, `rgba(${rgb2},${0.16 * e.alpha})`);

          lctx.globalAlpha = 1;
          lctx.strokeStyle = `rgba(${rgb},${0.12 * e.alpha})`;
          lctx.lineWidth = e.width + 2.6;
          lctx.shadowColor = `rgba(${rgb},${0.40 * e.alpha})`;
          lctx.shadowBlur = 10;
          lctx.setLineDash([]);
          lctx.beginPath();
          lctx.moveTo(p0.x, p0.y);
          lctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
          lctx.stroke();

          lctx.shadowBlur = 0;
          lctx.strokeStyle = grad;
          lctx.lineWidth = e.width * 0.9;
          lctx.setLineDash(dash);
          lctx.lineDashOffset = dashOff * (e.alpha > 0.6 ? 1.0 : 0.7);
          lctx.beginPath();
          lctx.moveTo(p0.x, p0.y);
          lctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
          lctx.stroke();

          const baseT = (ts * 0.001 * e.speed + e.phase) % 1;
          const t1 = baseT;
          const t2 = (baseT + (e.alpha > 0.6 ? 0.45 : 0.62)) % 1;

          const s1 = qBezier(t1, p0, p1, p2);
          const s2 = qBezier(t2, p0, p1, p2);

          const drawPacket = (pt, intensity) => {
            lctx.beginPath();
            lctx.fillStyle = `rgba(${rgb2},${0.75 * intensity})`;
            lctx.arc(pt.x, pt.y, 2.6, 0, Math.PI * 2);
            lctx.fill();

            lctx.beginPath();
            lctx.fillStyle = `rgba(${rgb},${0.12 * intensity})`;
            lctx.arc(pt.x, pt.y, 9.2, 0, Math.PI * 2);
            lctx.fill();
          };

          drawPacket(s1, e.alpha);
          drawPacket(s2, e.alpha * (e.alpha > 0.6 ? 0.75 : 0.55));
        }

        lctx.restore();

      }

      function shockwave(x, y) {
        const ring = document.createElement('span');
        ring.style.position = 'absolute';
        ring.style.left = `${x}px`;
        ring.style.top = `${y}px`;
        ring.style.width = '10px';
        ring.style.height = '10px';
        ring.style.borderRadius = '50%';
        ring.style.border = '1px solid rgba(0,195,255,0.33)';
        ring.style.boxShadow = '0 0 22px rgba(0,195,255,0.22)';
        ring.style.transform = 'translate(-50%,-50%) scale(0.6)';
        ring.style.opacity = '0.7';
        ring.style.pointerEvents = 'none';
        ring.style.zIndex = '8';
        ring.style.transition = 'transform 0.9s ease, opacity 0.9s ease';
        stage.appendChild(ring);
        requestAnimationFrame(() => {
          ring.style.transform = 'translate(-50%,-50%) scale(13.5)';
          ring.style.opacity = '0';
        });
        setTimeout(() => ring.remove(), 950);
      }

      function burstSparks(x, y, count) {
        for (let i = 0; i < count; i++) {
          const p = document.createElement('span');
          p.className = 'nx-spark';
          p.style.left = `${x}px`;
          p.style.top = `${y}px`;
          const ang = Math.random() * Math.PI * 2;
          const dist = 20 + Math.random() * 48;
          const dx = Math.cos(ang) * dist;
          const dy = Math.sin(ang) * dist;
          p.style.setProperty('--dx', `${dx}px`);
          p.style.setProperty('--dy', `${dy}px`);
          stage.appendChild(p);
          setTimeout(() => p.remove(), 1750);
        }
      }

      function spawnComet() {
        if (isMobileLite) return;
        const w = stage.clientWidth;
        const h = stage.clientHeight;

        const c = document.createElement('div');
        c.className = 'nx-comet';

        const startX = -160 + Math.random() * 80;
        const startY = Math.random() * h * 0.60;
        const endX = w + 240;
        const endY = startY + 90 + Math.random() * 150;
        const rot = `${10 + Math.random() * 12}deg`;

        c.style.setProperty('--sx', `${startX}px`);
        c.style.setProperty('--sy', `${startY}px`);
        c.style.setProperty('--ex', `${endX}px`);
        c.style.setProperty('--ey', `${endY}px`);
        c.style.setProperty('--rot', rot);

        stage.appendChild(c);
        setTimeout(() => c.remove(), 1950);
      }

      function cometLoop() {
        if (isMobileLite) return;
        const chance = 0.011;
        if (effectsVisible && !document.hidden && Math.random() < chance) spawnComet();
        setTimeout(cometLoop, 1100 + Math.random() * 900);
      }

      let effectsVisible = false;
      let effectsFrame = 0;
      let lastEffectsFrame = 0;
      function effectsTick(ts) {
        effectsFrame = 0;
        if (!effectsVisible || document.hidden || isMobileLite) return;
        if (ts - lastEffectsFrame >= 1000 / 30) {
          drawStars(); drawLinks(ts); lastEffectsFrame = ts;
        }
        effectsFrame = requestAnimationFrame(effectsTick);
      }
      function syncEffects() {
        stage.classList.toggle('nx-effects-paused', !effectsVisible || document.hidden);
        if (effectsFrame) cancelAnimationFrame(effectsFrame);
        effectsFrame = 0;
        if (effectsVisible && !document.hidden && !isMobileLite) effectsFrame = requestAnimationFrame(effectsTick);
      }
      new IntersectionObserver(([entry]) => {
        effectsVisible = entry.isIntersecting; syncEffects();
      }).observe(stage);
      document.addEventListener('visibilitychange', syncEffects);

      function init() {
        setTxIdle();
        resizeCanvases();
        initStars();
        layout();
        drawLinks(0);
        if (!isMobileLite) cometLoop();

        if (!isMobileLite) {
          setInterval(() => {
            if (effectsVisible && !document.hidden && Math.random() < 0.40) {
              const w = stage.clientWidth;
              const h = stage.clientHeight;
              const x = w * 0.32 + Math.random() * w * 0.36;
              const y = h * 0.32 + Math.random() * h * 0.36;
              burstSparks(x, y, 3);
            }
          }, 2200);
        }
      }

      window.addEventListener('resize', () => {
        resizeCanvases();
        initStars();
        layout();
      });

      init();
    })();
