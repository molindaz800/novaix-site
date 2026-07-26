import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const niches = [
  {
    slug: "transporte",
    name: "Transporte y logística",
    icon: "fa-truck-fast",
    image: "imagenes/landing-talleres-hero.webp",
    primary: "#34d399",
    secondary: "#67e8f9",
    title: "IA para empresas de transporte | NOVAIX",
    description: "Automatización e IA para pequeñas empresas de transporte: solicitudes, rutas, incidencias, documentación, estados de envío y atención al cliente.",
    eyebrow: "IA para pequeñas empresas de transporte",
    h1: "Menos llamadas repetidas y más control para tu empresa de transporte",
    lead: "NOVAIX centraliza solicitudes, estados, incidencias y documentación por WhatsApp y web para que tráfico y administración trabajen con información ordenada.",
    metrics: [["24/7", "recepción de solicitudes"], ["1 canal", "estados e incidencias"], ["-30%", "consultas repetitivas estimadas"]],
    features: [
      ["fa-route", "Solicitudes y rutas", "Recoge origen, destino, carga, fechas y requisitos antes de pasar la petición a tráfico."],
      ["fa-location-dot", "Estado de servicios", "Responde consultas autorizadas sobre recogidas, entregas y cambios sin saturar al equipo."],
      ["fa-triangle-exclamation", "Gestión de incidencias", "Clasifica retrasos, daños, ausencias y urgencias, y deriva según prioridad."],
      ["fa-file-shield", "Documentación", "Solicita albaranes, referencias y datos pendientes con trazabilidad."],
      ["fa-user-check", "Cualificación comercial", "Separa presupuestos viables de consultas incompletas y crea oportunidades en el CRM."],
      ["fa-chart-line", "Seguimiento", "Activa recordatorios y avisos internos para que ninguna solicitud quede olvidada."]
    ],
    steps: [["Recibe", "WhatsApp, formulario o email entra en una bandeja estructurada."], ["Completa", "La IA solicita los datos logísticos que falten."], ["Clasifica", "Distingue presupuesto, servicio activo, incidencia o documentación."], ["Escala", "Tráfico o administración recibe el caso con contexto y prioridad."]],
    faq: [
      ["¿La IA decide rutas o precios?", "No. Recoge y estructura información; las decisiones operativas y tarifarias siguen en el equipo."],
      ["¿Puede informar sobre un envío?", "Sí, cuando se conecta a una fuente autorizada y se definen exactamente los estados que puede comunicar."],
      ["¿Sirve para transportistas pequeños?", "Sí. El sistema se ajusta al volumen real y puede empezar por un solo flujo, como presupuestos o incidencias."]
    ]
  },
  {
    slug: "clinicas-dentales",
    name: "Clínicas dentales",
    icon: "fa-tooth",
    image: "imagenes/landing-clinicas-hero.webp",
    primary: "#38bdf8",
    secondary: "#a7f3d0",
    title: "IA para clínicas dentales | NOVAIX",
    description: "Recepción IA para clínicas dentales: citas, recordatorios, primeras consultas, reactivación de pacientes y atención administrativa 24/7.",
    eyebrow: "Automatización para clínicas dentales",
    h1: "Una recepción dental que responde, agenda y reduce ausencias",
    lead: "Automatiza consultas administrativas, solicitudes de primera visita y recordatorios sin sustituir al equipo clínico ni ofrecer diagnósticos.",
    metrics: [["24/7", "primera respuesta"], ["<60s", "atención inicial"], ["1 agenda", "citas y recordatorios"]],
    features: [
      ["fa-calendar-check", "Citas y cambios", "Propone huecos, confirma visitas y gestiona solicitudes de cambio según reglas de agenda."],
      ["fa-comments", "Primera consulta", "Recoge motivo general, disponibilidad y datos de contacto sin diagnosticar."],
      ["fa-bell", "Recordatorios", "Envía confirmaciones y recordatorios para reducir huecos de última hora."],
      ["fa-user-clock", "Reactivación", "Activa seguimientos autorizados para revisiones o planes pendientes."],
      ["fa-shield-heart", "Privacidad", "Minimiza los datos y deriva cualquier cuestión clínica al profesional."],
      ["fa-chart-simple", "Trazabilidad", "Registra origen, estado y siguiente acción de cada oportunidad."]
    ],
    steps: [["Atiende", "Responde preguntas administrativas y detecta la intención."], ["Recoge", "Pide solo los datos necesarios para continuar."], ["Agenda", "Ofrece horarios compatibles con profesional y tratamiento."], ["Deriva", "Escala urgencias percibidas o preguntas clínicas al equipo."]],
    faq: [
      ["¿Puede dar diagnósticos dentales?", "No. La automatización solo atiende procesos administrativos y deriva las cuestiones clínicas."],
      ["¿Se integra con la agenda?", "Sí, si el software ofrece una integración compatible o un flujo seguro de sincronización."],
      ["¿Puede reducir ausencias?", "Puede confirmar citas y enviar recordatorios; el resultado depende de la base de pacientes y las reglas de comunicación."]
    ]
  },
  {
    slug: "veterinarias",
    name: "Clínicas veterinarias",
    icon: "fa-paw",
    image: "imagenes/landing-clinicas-detail.webp",
    primary: "#f59e0b",
    secondary: "#6ee7b7",
    title: "IA para clínicas veterinarias | NOVAIX",
    description: "Automatización para clínicas veterinarias: recepción, citas, recordatorios, clasificación administrativa de consultas y seguimiento de pacientes.",
    eyebrow: "IA para clínicas veterinarias",
    h1: "Atiende a cada familia sin interrumpir constantemente al equipo veterinario",
    lead: "NOVAIX organiza citas, recordatorios y consultas administrativas, recoge contexto básico y deriva al profesional cuando existe una cuestión sanitaria.",
    metrics: [["24/7", "recepción administrativa"], ["1 ficha", "mascota y solicitud"], ["<60s", "respuesta inicial"]],
    features: [
      ["fa-calendar-days", "Agenda veterinaria", "Gestiona solicitudes para consulta, vacuna, revisión, cirugía o seguimiento."],
      ["fa-paw", "Datos de la mascota", "Recoge especie, nombre, edad y motivo general con minimización de datos."],
      ["fa-triangle-exclamation", "Derivación prioritaria", "Detecta expresiones de urgencia y pide contactar con el centro o servicio indicado."],
      ["fa-syringe", "Recordatorios", "Automatiza avisos de vacunas, revisiones y tratamientos solo bajo reglas aprobadas."],
      ["fa-box", "Consultas de productos", "Ordena preguntas sobre alimentación, pedidos o disponibilidad y las deriva cuando procede."],
      ["fa-user-doctor", "Control profesional", "Nunca diagnostica ni recomienda medicación; mantiene al veterinario en la decisión clínica."]
    ],
    steps: [["Identifica", "Registra cliente, mascota y tipo de solicitud."], ["Clasifica", "Distingue cita, seguimiento, producto o posible urgencia."], ["Responde", "Resuelve información administrativa aprobada."], ["Escala", "Entrega al equipo clínico el contexto sin emitir criterio sanitario."]],
    faq: [
      ["¿Puede valorar una urgencia veterinaria?", "No sustituye el triaje clínico. Ante señales definidas, indica el canal urgente aprobado y escala al equipo."],
      ["¿Puede recordar vacunas?", "Sí, usando fechas y consentimientos disponibles en una fuente autorizada."],
      ["¿Gestiona varias clínicas?", "Puede separar agendas, horarios, servicios y reglas por centro."]
    ]
  },
  {
    slug: "asesorias-gestorias",
    name: "Asesorías y gestorías",
    icon: "fa-folder-open",
    image: "imagenes/landing-negocios-hero.webp",
    primary: "#60a5fa",
    secondary: "#fbbf24",
    title: "IA para asesorías y gestorías | NOVAIX",
    description: "Automatización para asesorías y gestorías: captación, solicitudes documentales, citas, clasificación de consultas y seguimiento de expedientes.",
    eyebrow: "Automatización para asesorías y gestorías",
    h1: "Menos correos desordenados y más expedientes completos",
    lead: "Centraliza consultas, solicitudes de documentación y citas para que el equipo dedique más tiempo al trabajo fiscal, laboral, contable y administrativo.",
    metrics: [["1 flujo", "cliente y expediente"], ["24/7", "recepción documental"], ["-25%", "seguimientos manuales estimados"]],
    features: [
      ["fa-file-circle-check", "Solicitud documental", "Pide documentos pendientes con listas adaptadas al tipo de trámite."],
      ["fa-inbox", "Entrada ordenada", "Clasifica consultas por área, cliente, urgencia y fecha límite."],
      ["fa-calendar-check", "Citas", "Agenda reuniones y recopila el contexto antes de reservar."],
      ["fa-user-plus", "Nuevos clientes", "Cualifica autónomos y empresas según servicio solicitado."],
      ["fa-clock-rotate-left", "Seguimiento", "Recuerda entregas y próximos pasos sin perseguir manualmente cada respuesta."],
      ["fa-lock", "Acceso controlado", "Define qué información puede tratar cada flujo y quién recibe cada expediente."]
    ],
    steps: [["Clasifica", "Identifica área fiscal, laboral, contable o administrativa."], ["Solicita", "Pide datos y documentación según una lista aprobada."], ["Registra", "Crea o actualiza la oportunidad o expediente."], ["Avisa", "Notifica al responsable cuando el caso está listo o requiere revisión."]],
    faq: [
      ["¿La IA ofrece asesoramiento fiscal?", "No. Organiza la solicitud y responde información administrativa aprobada; el criterio corresponde al asesor."],
      ["¿Puede trabajar con documentos?", "Puede solicitar, clasificar y registrar archivos dentro de un entorno autorizado y con controles de acceso."],
      ["¿Se integra con un CRM?", "Sí, cuando existe API, webhook o una vía de integración compatible."]
    ]
  },
  {
    slug: "academias",
    name: "Academias y formación",
    icon: "fa-graduation-cap",
    image: "imagenes/landing-gimnasios-detail.webp",
    primary: "#a78bfa",
    secondary: "#22d3ee",
    title: "IA para academias y centros de formación | NOVAIX",
    description: "Automatización para academias: información de cursos, captación de alumnos, matrículas, clases de prueba, recordatorios y soporte administrativo.",
    eyebrow: "IA para academias y centros de formación",
    h1: "Convierte consultas sobre cursos en matrículas organizadas",
    lead: "Responde horarios, niveles y modalidades, cualifica a cada alumno y agenda pruebas o entrevistas sin dejar conversaciones sin atender.",
    metrics: [["24/7", "información de cursos"], ["<60s", "respuesta a interesados"], ["1 vista", "leads y matrículas"]],
    features: [
      ["fa-book-open", "Catálogo de cursos", "Responde información aprobada sobre niveles, horarios, modalidad y requisitos."],
      ["fa-user-graduate", "Cualificación", "Recoge edad, objetivo, nivel, disponibilidad y modalidad preferida."],
      ["fa-calendar-plus", "Pruebas y entrevistas", "Agenda clases de prueba o valoración según disponibilidad."],
      ["fa-clipboard-check", "Matrícula", "Guía los pasos administrativos y solicita datos pendientes."],
      ["fa-bell", "Recordatorios", "Confirma sesiones, vencimientos y documentación necesaria."],
      ["fa-chart-line", "Seguimiento comercial", "Prioriza interesados y registra el siguiente paso en el CRM."]
    ],
    steps: [["Informa", "Resuelve preguntas frecuentes con datos actualizados."], ["Orienta", "Identifica curso, nivel y disponibilidad."], ["Agenda", "Reserva prueba, entrevista o llamada."], ["Acompaña", "Recuerda documentación y pasos de matrícula."]],
    faq: [
      ["¿Puede recomendar un nivel?", "Puede recopilar información y aplicar reglas aprobadas; la evaluación académica final sigue en el centro."],
      ["¿Funciona para varias sedes?", "Sí. Puede separar cursos, horarios, calendarios y equipos por sede."],
      ["¿Puede atender en varios idiomas?", "Sí, siempre que el contenido y las reglas estén revisados en cada idioma."]
    ]
  },
  {
    slug: "reformas-servicios",
    name: "Reformas y servicios técnicos",
    icon: "fa-helmet-safety",
    image: "imagenes/landing-inmobiliarias-hero.webp",
    primary: "#fb923c",
    secondary: "#38bdf8",
    title: "IA para empresas de reformas y servicios | NOVAIX",
    description: "Automatización para reformas, instalaciones y servicios técnicos: solicitudes, visitas, presupuestos, incidencias y seguimiento comercial.",
    eyebrow: "IA para reformas, instalaciones y servicios técnicos",
    h1: "Presupuestos mejor preparados antes de desplazar al equipo",
    lead: "Recoge ubicación, tipo de trabajo, medidas, fotografías y disponibilidad para ordenar solicitudes y reservar visitas con la información mínima necesaria.",
    metrics: [["24/7", "entrada de solicitudes"], ["1 ficha", "datos y fotografías"], ["-20%", "visitas improductivas estimadas"]],
    features: [
      ["fa-camera", "Solicitud completa", "Pide fotografías, ubicación, medidas orientativas y descripción del trabajo."],
      ["fa-screwdriver-wrench", "Tipo de servicio", "Clasifica reforma, reparación, instalación, mantenimiento o urgencia."],
      ["fa-calendar-check", "Visitas técnicas", "Agenda valoraciones según zona, equipo y disponibilidad."],
      ["fa-file-invoice-dollar", "Presupuestos", "Recoge el contexto y mantiene informado al cliente sin prometer un precio no revisado."],
      ["fa-triangle-exclamation", "Incidencias", "Ordena avisos posventa y los asigna al responsable adecuado."],
      ["fa-user-check", "Seguimiento", "Recuerda propuestas pendientes y registra aceptación, dudas o aplazamientos."]
    ],
    steps: [["Recoge", "Solicita datos, ubicación y material visual."], ["Filtra", "Comprueba zona de servicio, tipo de trabajo y urgencia."], ["Agenda", "Propone una visita o llamada técnica."], ["Sigue", "Mantiene la oportunidad activa hasta decisión o cierre."]],
    faq: [
      ["¿Puede cerrar un presupuesto?", "Solo cuando existen tarifas y reglas aprobadas. Los trabajos que requieren visita se derivan al profesional."],
      ["¿Puede recibir fotografías?", "Sí, mediante canales compatibles y con una política definida de conservación."],
      ["¿Sirve para distintos gremios?", "Sí. Los formularios y reglas se adaptan a reformas, climatización, electricidad, fontanería u otros servicios."]
    ]
  }
];

function esc(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");
}

function render(niche) {
  const url = `https://novaix.es/landing-${niche.slug}.html`;
  const features = niche.features.map(([icon, title, text]) => `
          <article class="feature-card reveal"><i class="fa-solid ${icon}"></i><h3>${title}</h3><p>${text}</p></article>`).join("");
  const steps = niche.steps.map(([title, text], index) => `
            <div class="step"><span>${index + 1}</span><div><strong>${title}</strong><p>${text}</p></div></div>`).join("");
  const faq = niche.faq.map(([question, answer]) => `
          <details class="reveal"><summary>${question}</summary><p>${answer}</p></details>`).join("");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://novaix.es/#business",
        name: "NOVAIX",
        url: "https://novaix.es/",
        email: "info@novaix.es",
        areaServed: { "@type": "AdministrativeArea", name: "Comunidad de Madrid" },
        serviceType: `Automatización e inteligencia artificial para ${niche.name.toLowerCase()}`
      },
      {
        "@type": "Service",
        name: niche.title.replace(" | NOVAIX", ""),
        provider: { "@id": "https://novaix.es/#business" },
        areaServed: "España",
        url,
        description: niche.description
      },
      {
        "@type": "FAQPage",
        mainEntity: niche.faq.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text }
        }))
      }
    ]
  };

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${esc(niche.description)}">
  <title>${esc(niche.title)}</title>
  <link rel="canonical" href="${url}">
  <link rel="alternate" hreflang="es" href="${url}">
  <link rel="alternate" hreflang="x-default" href="${url}">
  <link rel="icon" href="favicon.ico" sizes="any">
  <meta name="theme-color" content="#0b0f12">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${esc(niche.title)}">
  <meta property="og:description" content="${esc(niche.description)}">
  <meta property="og:image" content="https://novaix.es/${niche.image}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css">
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">
  <link rel="stylesheet" href="landing-sector.css">
  <style>:root{--bg:#0b0f12}body{--primary:${niche.primary};--secondary:${niche.secondary};--accent:#ff6f52;--hero-image:url("${niche.image}")}</style>
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
  <a href="#contenido" class="skip-link">Saltar al contenido</a>
  <div class="nav-hover-zone" aria-hidden="true"></div>
  <nav class="nav" aria-label="Navegación principal">
    <a class="brand" href="index.html" aria-label="Volver a NOVAIX"><img src="imagenes/fav_icon.webp" alt="NOVAIX" width="256" height="256"><span>${niche.name}</span></a>
    <button class="nav-toggle" type="button" aria-label="Abrir menú" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
    <div class="nav-links"><a href="#sistema">Sistema</a><a href="#operativa">Operativa</a><a href="#preguntas">Preguntas</a><button class="btn btn-primary" type="button" data-calendly-open><i class="fa-regular fa-calendar-check"></i>Diagnóstico</button></div>
  </nav>
  <header class="hero" id="contenido">
    <div class="container hero-grid">
      <div class="hero-copy-block reveal">
        <span class="eyebrow"><i class="fa-solid ${niche.icon}"></i> ${niche.eyebrow}</span>
        <h1>${niche.h1}</h1>
        <p class="hero-copy">${niche.lead}</p>
        <div class="hero-actions"><button class="btn btn-primary" type="button" data-calendly-open><i class="fa-solid fa-bolt"></i>Solicitar diagnóstico</button><a class="btn btn-secondary" href="#sistema"><i class="fa-solid fa-arrow-down"></i>Ver automatizaciones</a></div>
        <div class="proof-row" aria-label="Indicadores de referencia">${niche.metrics.map(([value, label]) => `<div class="proof-item"><strong>${value}</strong><span>${label}</span></div>`).join("")}</div>
      </div>
      <aside class="ops-panel reveal" aria-label="Flujo de automatización para ${niche.name.toLowerCase()}">
        <div class="ops-head"><strong>NOVAIX Operations</strong><span class="status-dot">Preparado</span></div>
        <div class="ops-body">
          <div class="ops-metric-grid"><div class="ops-metric"><strong>01</strong><span>entrada unificada</span></div><div class="ops-metric"><strong>02</strong><span>reglas del negocio</span></div><div class="ops-metric"><strong>03</strong><span>equipo informado</span></div></div>
          <div class="whatsapp-screen"><div class="whatsapp-top"><span><i class="fa-brands fa-whatsapp"></i> Atención automatizada</span><span>Online</span></div><div class="wa-thread"><div class="wa-label">Nueva solicitud</div><div class="wa-bubble user"><strong>Cliente</strong>Necesito información y disponibilidad.<small>09:41</small></div><div class="wa-bubble ai"><strong>NOVAIX</strong>Te ayudo. Voy a recoger los datos necesarios y proponerte el siguiente paso.<small>09:41</small></div><div class="wa-bubble user"><strong>Cliente</strong>Perfecto, ¿qué necesitas?<small>09:42</small></div><div class="wa-bubble ai"><strong>NOVAIX</strong>Solo la información imprescindible. Si hace falta criterio profesional, lo revisará el equipo.<small>09:42</small></div></div></div>
          <div class="ops-footer"><div class="pulse-line" aria-hidden="true"><span></span></div><span>Canales, agenda y CRM conectables</span></div>
        </div>
      </aside>
    </div>
  </header>
  <main>
    <section class="section" id="sistema"><div class="container"><span class="section-kicker reveal">Sistema sectorial</span><h2 class="reveal">Automatizaciones diseñadas para el trabajo real de ${niche.name.toLowerCase()}</h2><p class="section-lead reveal">Empezamos por los procesos repetitivos y mantenemos las decisiones profesionales en tu equipo.</p><div class="grid-3">${features}</div></div></section>
    <section class="section section-alt" id="operativa"><div class="container split"><div class="reveal"><span class="section-kicker">Cómo funciona</span><h2>De la primera consulta a una siguiente acción clara</h2><p class="section-lead">Cada flujo se configura con límites, responsables y criterios de escalado.</p><div class="steps">${steps}</div></div><div class="image-stack reveal" role="img" aria-label="${niche.name}: automatización de atención y operaciones"><div class="floating-proof"><div><strong>Diagnóstico</strong><span>mapa del proceso actual</span></div><div><strong>Piloto</strong><span>un flujo medible</span></div><div><strong>Escala</strong><span>solo después de validar</span></div></div></div></div></section>
    <section class="section faq" id="preguntas"><div class="container"><span class="section-kicker reveal">Preguntas frecuentes</span><h2 class="reveal">Qué automatiza NOVAIX y dónde mantiene el control humano</h2>${faq}</div></section>
    <section class="section business-index" aria-labelledby="business-index-title"><div class="container business-index-panel reveal"><div><span class="section-kicker">Otros sectores</span><h2 id="business-index-title">Explora automatizaciones para otros tipos de negocio</h2><p>Cada página adapta la solución al cliente, la agenda, los datos y las decisiones propias del sector.</p></div><a class="btn btn-secondary" href="landing-negocios.html"><i class="fa-solid fa-layer-group"></i>Ver todos los negocios</a></div></section>
    <section class="cta-band"><div class="container"><div class="reveal"><h2>¿Qué proceso repetitivo frena hoy a tu equipo?</h2><p>Revisamos canales, volumen, herramientas y límites para proponerte un primer flujo viable.</p></div><button class="btn btn-primary reveal" type="button" data-calendly-open><i class="fa-regular fa-calendar-check"></i>Agendar diagnóstico</button></div></section>
  </main>
  <footer><div class="container footer-inner"><p>© <span id="year"></span> NOVAIX. Automatización e IA para operaciones, ventas y atención.</p><p><a href="mailto:info@novaix.es">info@novaix.es</a> · <a href="privacy/">Privacidad</a></p></div></footer>
  <div class="modal" id="calendly-modal" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Agenda con NOVAIX"><div class="modal-frame"><button class="modal-close" type="button" aria-label="Cerrar agenda"><i class="fa-solid fa-xmark"></i></button><div class="calendly-inline-widget" data-url="https://calendly.com/novaix-assist/30min?primary_color=${niche.primary.slice(1)}&text_color=fbf8f2&background_color=0b0f12"></div></div></div>
  <div class="cookie-banner" id="cookie-banner" role="dialog" aria-live="polite" aria-label="Aviso de cookies"><p>Usamos cookies técnicas. Calendly se carga solo cuando abres la agenda.</p><div class="cookie-actions"><button class="btn btn-secondary" type="button" id="cookie-decline">Cerrar</button><button class="btn btn-primary" type="button" id="cookie-accept">Entendido</button></div></div>
  <script src="landing-language.js"></script>
  <script src="i18n.js"></script>
  <script src="landing-common.js"></script>
  <script src="landing-niche.js"></script>
</body>
</html>
`;
}

for (const niche of niches) {
  writeFileSync(resolve(root, `landing-${niche.slug}.html`), render(niche), "utf8");
}

console.log(`Generated ${niches.length} niche landing pages.`);
