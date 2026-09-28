// Calendly + GTM loader (consent)
    const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';
    const CALENDLY_CONSENT_KEY = 'novaix_calendly_consent';
    const GTM_ID = 'GTM-M9PJJC95';
    let calendlyLoaded = false;
    let gtmLoaded = false;

    function loadCalendlyScript() {
      if (calendlyLoaded) return;
      const script = document.createElement('script');
      script.src = CALENDLY_SCRIPT_SRC;
      script.async = true;
      script.type = 'text/javascript';
      document.head.appendChild(script);
      calendlyLoaded = true;
    }

    function loadGtmScript() {
      if (gtmLoaded) return;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(script);

      const noscript = document.createElement('noscript');
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
      iframe.height = '0';
      iframe.width = '0';
      iframe.style.display = 'none';
      iframe.style.visibility = 'hidden';
      noscript.appendChild(iframe);
      document.body.appendChild(noscript);

      gtmLoaded = true;
    }

    function setCalendlyConsent(accepted) {
      localStorage.setItem(CALENDLY_CONSENT_KEY, accepted ? 'accepted' : 'declined');
      if (accepted) {
        loadCalendlyScript();
        loadGtmScript();
      }
    }

    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAccept = document.getElementById('cookie-accept');
    const cookieDecline = document.getElementById('cookie-decline');
    const existingConsent = localStorage.getItem(CALENDLY_CONSENT_KEY);
    if (existingConsent === 'accepted') {
      loadCalendlyScript();
      loadGtmScript();
    } else if (!existingConsent) {
      cookieBanner?.classList.add('show');
    }
    cookieAccept?.addEventListener('click', () => {
      setCalendlyConsent(true);
      cookieBanner?.classList.remove('show');
    });
    cookieDecline?.addEventListener('click', () => {
      setCalendlyConsent(false);
      cookieBanner?.classList.remove('show');
    });
