(() => {
  'use strict';
  const t = value => window.novaixT ? window.novaixT(value) : value;
  const filters = [...document.querySelectorAll('[data-atlas-filter]')];
  const entries = [...document.querySelectorAll('[data-atlas-category]')];
  const results = document.getElementById('atlas-results');
  if (!results) return;
  function filter(category, announce = true) {
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.atlasFilter === category)));
    entries.forEach(entry => {
      entry.hidden = category === 'all' ? entry.dataset.atlasDefault !== 'true' : entry.dataset.atlasCategory !== category;
    });
    results.dataset.filter = category;
    if (announce) {
      const label = filters.find(button => button.dataset.atlasFilter === category)?.textContent.trim();
      document.getElementById('atlas-status').textContent = `${t('Mostrando soluciones:')} ${label}`;
    }
  }
  filters.forEach(button => button.addEventListener('click', () => filter(button.dataset.atlasFilter)));
  document.documentElement.classList.add('atlas-ready');
  filter('all', false);

  const contexts = {
    channels: 'Comunicación multicanal', connections: 'Conexiones entre herramientas', custom: 'Software a medida',
    gimnasios: 'Gimnasios', 'clinicas-esteticas': 'Clínicas estéticas', peluquerias: 'Peluquerías', talleres: 'Talleres',
    inmobiliarias: 'Inmobiliarias', 'centros-belleza': 'Centros de belleza', fisioterapia: 'Fisioterapia',
    transporte: 'Transporte', 'clinicas-dentales': 'Clínicas dentales', veterinarias: 'Veterinarias',
    'asesorias-gestorias': 'Asesorías y gestorías', academias: 'Academias', 'reformas-servicios': 'Reformas y servicios',
    negocios: 'Otros negocios', facebook: 'Otros negocios'
  };
  // Optional contact enhancement; the atlas works independently of contact UI.
  const email = document.getElementById('project-email-link');
  if (!email) return;
  let context = '';
  function setContext(key) {
    context = Object.prototype.hasOwnProperty.call(contexts, key) ? key : '';
    const subject = ['NOVAIX', t('Consulta de proyecto'), context ? t(contexts[context]) : ''].filter(Boolean).join(' · ');
    email.setAttribute('href', `mailto:info@novaix.es?subject=${encodeURIComponent(subject)}`);
  }
  setContext(new URLSearchParams(window.location.search).get('sector'));
  document.querySelectorAll('[data-project-interest]').forEach(link => link.addEventListener('click', () => setContext(link.dataset.projectInterest)));
  window.addEventListener('novaix:languagechange', () => setContext(context));
})();
