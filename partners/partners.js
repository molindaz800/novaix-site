/* Direct intake; no personal data in localStorage, analytics, or URLs. */
(() => {
  'use strict';
  const form = document.getElementById('partner-form');
  if (!form) return;
  const en = document.documentElement.lang === 'en';
  const status = document.getElementById('form-status');
  const button = form.querySelector('button[type="submit"]');
  const label = button.textContent;
  const local = ['localhost', '127.0.0.1'].includes(location.hostname);
  const endpoint = local ? 'http://127.0.0.1:8077/api/partners' : form.dataset.endpoint;
  let busy = false, requestId = '', lastPayload = '';
  button.disabled = false;
  const show = (message, state) => { status.textContent = message; status.dataset.state = state; };
  if (local) show(en ? 'Local preview: test applications do not send email.' : 'Vista previa local: las solicitudes de prueba no envían correos.', 'preview');
  form.addEventListener('input', event => {
    if (typeof event.target.setCustomValidity === 'function') event.target.setCustomValidity('');
    event.target.removeAttribute('aria-invalid');
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (busy || !form.reportValidity()) return;
    const values = new FormData(form);
    const payload = Object.fromEntries(['name','email','linkedin','markets','model','experience','website'].map(k => [k, String(values.get(k) || '').trim()]));
    const invalidField = !payload.name ? 'name' : !payload.markets ? 'markets' : payload.experience.length < 40 ? 'experience' : '';
    if (invalidField) {
      const message = invalidField === 'experience'
        ? (en ? 'Describe your experience in at least 40 characters.' : 'Describe tu experiencia con al menos 40 caracteres.')
        : (en ? 'Please complete this field.' : 'Completa este campo.');
      const field = form.elements[invalidField];
      field.setCustomValidity(message); field.setAttribute('aria-invalid','true');
      show(message, 'error'); field.reportValidity(); field.focus(); return;
    }
    if (payload.linkedin) {
      let valid = false;
      try {
        const url = new URL(payload.linkedin);
        valid = url.protocol === 'https:' && ['linkedin.com','www.linkedin.com'].includes(url.hostname) && url.pathname.startsWith('/in/') && !url.username && !url.password;
      } catch (_) { /* invalid URL; keep the user's input */ }
      if (!valid) {
        show(en ? 'Use a LinkedIn profile URL starting with https://www.linkedin.com/in/, or leave this optional field empty.' : 'Usa la URL de tu perfil https://www.linkedin.com/in/, o deja este campo opcional vacío.', 'error');
        form.elements.linkedin.focus(); return;
      }
    }
    payload.consent = values.get('consent') === 'on';
    payload.language = en ? 'en' : 'es';
    const serialized = JSON.stringify(payload);
    if (serialized !== lastPayload) { requestId = crypto.randomUUID(); lastPayload = serialized; }
    payload.requestId = requestId;
    busy = true; button.disabled = true; form.setAttribute('aria-busy','true');
    button.textContent = en ? 'Submitting…' : 'Enviando…';
    show(en ? 'Registering your proposal…' : 'Registrando tu propuesta…', 'loading');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(endpoint, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload), signal:controller.signal, credentials:'omit', redirect:'error'});
      const data = await response.json();
      if (!response.ok || data.status !== 'received' || !/^[a-f0-9-]{36}$/.test(data.reference || '')) {
        if (response.status === 429) throw new Error('rate');
        throw new Error('failed');
      }
      const message = data.preview
        ? (en ? 'Local test completed. No email has been sent and no application has been submitted for review. Reference: ' : 'Prueba local completada. No se ha enviado ningún correo ni presentado una solicitud para revisión. Referencia: ')
        : (en ? 'We have received your proposal. Our team will review it. Reference: ' : 'Hemos recibido tu propuesta. Nuestro equipo la revisará. Referencia: ');
      show(message + data.reference, 'success');
      form.reset(); lastPayload = ''; requestId = ''; status.focus();
    } catch (error) {
      show(error.message === 'rate'
        ? (en ? 'Too many attempts. Please wait a few minutes before trying again.' : 'Demasiados intentos. Espera unos minutos antes de volver a intentarlo.')
        : (en ? 'We could not confirm receipt. Your answers are still here. Retry, or contact info@novaix.es.' : 'No hemos podido confirmar la recepción. Tus respuestas siguen aquí. Reintenta o escribe a info@novaix.es.'), 'error');
    } finally { clearTimeout(timeout); busy = false; button.disabled = false; button.textContent = label; form.removeAttribute('aria-busy'); }
  });
})();
