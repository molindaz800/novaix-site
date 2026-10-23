/* Explicit mail preparation only: no submission API, storage or telemetry. */
(() => {
  'use strict';
  const form = document.getElementById('process-inquiry-form');
  if (!form) return;
  const status = document.getElementById('process-inquiry-status');
  const text = (es, en) => document.documentElement.lang === 'en' ? en : es;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = Object.fromEntries(new FormData(form));
    const body = [
      text('Nombre: ', 'Name: ') + values.name.trim(),
      text('Empresa: ', 'Company: ') + values.company.trim(),
      text('Correo: ', 'Email: ') + values.email.trim(),
      '', text('Proceso que queremos mejorar:', 'Process we would like to improve:'),
      values.process.trim()
    ].join('\n');
    const href = 'mailto:info@novaix.es?subject=' + encodeURIComponent(text('NOVAIX · Consulta sobre un proceso', 'NOVAIX · Business process enquiry')) + '&body=' + encodeURIComponent(body);
    status.textContent = text('Se abrirá tu aplicación de correo. Revisa y envía el mensaje allí. Si no se abre, puedes escribir directamente a info@novaix.es.', 'Your email app will open. Review and send the message there. If it does not open, email info@novaix.es directly.');
    // Leave every field in place: opening an email app is not proof of delivery.
    window.location.href = href;
  });
})();
