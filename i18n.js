(() => {
  const STORAGE_KEY = "novaix_language";
  const supportedLanguages = new Set(["es", "en"]);
  const entries = [];
  let entryCounter = 0;
  let externalCounter = 0;
  const makeKey = (prefix, index) => `${prefix}.${String(index).padStart(3, "0")}`;
  const E = (source, es, en, key) => {
    entryCounter += 1;
    entries.push({ key: key || makeKey("site", entryCounter), source, es, en });
  };

  E("NOVAIX · Agentes de IA y Automatización para empresas", "NOVAIX · Agentes de IA y Automatización para empresas", "NOVAIX · AI Agents and Automation for Businesses", "site.meta.title");
  E("Agentes de IA y automatizacion para empresas: ventas, soporte y operaciones multicanal con enfoque RGPD, LOPD-GDD, seguridad y cifrado de datos.", "Agentes de IA y automatización para empresas: ventas, soporte y operaciones multicanal con enfoque RGPD, LOPD-GDD, seguridad y cifrado de datos.", "AI agents and automation for businesses: sales, support and multichannel operations with GDPR, LOPD-GDD, security and data encryption built in.", "site.meta.description");
  E("Saltar al contenido", "Saltar al contenido", "Skip to content", "site.skip");
  E("Navegacion principal", "Navegación principal", "Main navigation", "site.nav.label");
  E("Abrir menu", "Abrir menú", "Open menu", "site.nav.open");
  E("Ir al inicio", "Ir al inicio", "Go to home", "site.nav.home");
  E("Beneficios", "Beneficios", "Benefits", "site.nav.benefits");
  E("Seguridad", "Seguridad", "Security", "site.nav.security");
  E("Ops Hub", "Ops Hub", "Ops Hub", "site.nav.ops");
  E("Servicios", "Servicios", "Services", "site.nav.services");
  E("Casos", "Casos", "Cases", "site.nav.cases");
  E("Ejemplos", "Ejemplos", "Examples", "site.nav.examples");
  E("Tipos de ejemplos", "Tipos de ejemplos", "Example categories", "site.nav.examples.menu");
  E("Casos por negocio", "Casos por negocio", "Use cases by business", "site.nav.examples.business");
  E("Landings sectoriales para gimnasios, clínicas, peluquerías y más.", "Landings sectoriales para gimnasios, clínicas, peluquerías y más.", "Sector landing pages for gyms, clinics, salons and more.", "site.nav.examples.businessDesc");
  E("Ejemplos en vídeo", "Ejemplos en vídeo", "Video examples", "site.nav.examples.video");
  E("Vídeos con casos reales, recorridos de producto y ejemplos de automatización.", "Vídeos con casos reales, recorridos de producto y ejemplos de automatización.", "Videos with real use cases, product walkthroughs and automation examples.", "site.nav.examples.videoDesc");
  E("Planes", "Planes", "Plans", "site.nav.plans");
  E("Quienes somos", "Quiénes somos", "About us", "site.nav.about");
  E("Contacto", "Contacto", "Contact", "site.nav.contact");
  E("Legal", "Legal", "Legal", "site.nav.legal");
  E("Agendar cita", "Agendar cita", "Book a call", "site.cta.book");
  E("Seleccionar idioma", "Seleccionar idioma", "Select language", "site.language.select");
  E("IA segura para ventas, soporte y operaciones", "IA segura para ventas, soporte y operaciones", "Secure AI for sales, support and operations", "site.hero.eyebrow");
  E("Automatiza procesos clave con agentes de IA listos para generar clientes.", "Automatiza procesos clave con agentes de IA listos para generar clientes", "Automate key processes with AI agents ready to generate customers", "site.hero.titleLegacy");
  E("Automatiza procesos clave con agentes de IA listos para generar clientes", "Automatiza procesos clave con agentes de IA listos para generar clientes", "Automate key processes with AI agents ready to generate customers", "site.hero.title");
  E("Diseñamos asistentes multicanal para WhatsApp, web y CRM que atienden, cualifican, reservan y escalan a tu equipo. Integraciones reales con HubSpot, Zoho, Airtable, Notion y n8n, con enfoque RGPD/LOPD-GDD y minimizacion de datos.", "Diseñamos asistentes multicanal para WhatsApp, web y CRM que atienden, cualifican, reservan y escalan a tu equipo. Integraciones reales con HubSpot, Zoho, Airtable, Notion y n8n, con enfoque RGPD/LOPD-GDD y minimización de datos.", "We design multichannel assistants for WhatsApp, web and CRM that answer, qualify, book and escalate to your team. Real integrations with HubSpot, Zoho, Airtable, Notion and n8n, with GDPR/LOPD-GDD alignment and data minimization.", "site.hero.subtitle");
  E("Ver servicios", "Ver servicios", "View services", "site.hero.servicesCta");
  E("Resultados promedio", "Resultados promedio", "Average results", "site.hero.resultsLabel");
  E("Consultas resueltas sin agentes humanos.", "Consultas resueltas sin agentes humanos.", "Inquiries resolved without human agents.", "site.hero.statResolved");
  E("Back-office automatizado en clientes Pro.", "Back-office automatizado en clientes Pro.", "Back-office automated for Pro clients.", "site.hero.statBackOffice");
  E("2 semanas", "2 semanas", "2 weeks", "site.hero.statWeeks");
  E("Tiempo medio de despliegue.", "Tiempo medio de despliegue.", "Average deployment time.", "site.hero.statDeploy");
  E("Enfoque de seguridad y privacidad", "Enfoque de seguridad y privacidad", "Security and privacy approach", "site.hero.securityLabel");
  E("Privacidad como ventaja competitiva:", "Privacidad como ventaja competitiva:", "Privacy as a competitive advantage:", "site.hero.privacyLead");
  E("diseñamos agentes con enfoque RGPD y LOPD-GDD, minimizacion de datos y controles de seguridad desde el primer flujo.", "diseñamos agentes con enfoque RGPD y LOPD-GDD, minimización de datos y controles de seguridad desde el primer flujo.", "we design agents with a GDPR and LOPD-GDD approach, data minimization and security controls from the first workflow.", "site.hero.privacyBody");
  E("RGPD + LOPD-GDD", "RGPD + LOPD-GDD", "GDPR + LOPD-GDD", "site.hero.badgeGdpr");
  E("Cifrado en transito", "Cifrado en tránsito", "Encryption in transit", "site.hero.badgeEncryption");
  E("Accesos por rol", "Accesos por rol", "Role-based access", "site.hero.badgeAccess");
  E("UE disponible", "UE disponible", "EU available", "site.hero.badgeEu");
  E("Prueba social", "Prueba social", "Social proof", "site.hero.socialLabel");
  E("Empresas que buscan automatizar confian en nuestro enfoque.", "Empresas que buscan automatizar confían en nuestro enfoque.", "Companies looking to automate trust our approach.", "site.hero.socialText");
  E("Salud", "Salud", "Healthcare");
  E("Retail", "Retail", "Retail");
  E("SaaS", "SaaS", "SaaS");
  E("Logistica", "Logística", "Logistics");
  E("Legal", "Legal", "Legal");
  E("Demo en video de NOVAIX", "Demo en vídeo de NOVAIX", "NOVAIX video demo");
  E("Beneficios directos", "Beneficios directos", "Direct benefits");
  E("La IA no es un experimento: es una palanca clara para convertir visitas en oportunidades y reducir carga operativa.", "La IA no es un experimento: es una palanca clara para convertir visitas en oportunidades y reducir carga operativa.", "AI is not an experiment: it is a clear lever to turn visits into opportunities and reduce operational workload.");
  E("Captura inmediata", "Captura inmediata", "Immediate capture");
  E("Respuestas en segundos en web y WhatsApp para mejorar conversion en el primer contacto.", "Respuestas en segundos en web y WhatsApp para mejorar conversión en el primer contacto.", "Replies in seconds on web and WhatsApp to improve conversion on first contact.");
  E("Calificacion inteligente", "Calificación inteligente", "Smart qualification");
  E("Preguntas guiadas que entregan leads listos y reducen hasta 40% el tiempo comercial.", "Preguntas guiadas que entregan leads listos y reducen hasta 40% el tiempo comercial.", "Guided questions that deliver sales-ready leads and reduce commercial time by up to 40%.");
  E("Escala con control", "Escala con control", "Scale with control");
  E("Atiende picos de demanda con reglas claras sobre datos, acceso humano y escalado seguro.", "Atiende picos de demanda con reglas claras sobre datos, acceso humano y escalado seguro.", "Handle demand peaks with clear rules for data, human handoff and safe escalation.");
  E("Visibilidad real", "Visibilidad real", "Real visibility");
  E("Indicadores de conversion y tiempos para recortar ciclos operativos hasta 30%.", "Indicadores de conversión y tiempos para recortar ciclos operativos hasta 30%.", "Conversion and timing indicators to shorten operating cycles by up to 30%.");
  E("Seguridad y proteccion de datos", "Seguridad y protección de datos", "Security and data protection");
  E("Automatizar no debe significar perder control. Nuestro enfoque pone la privacidad, la trazabilidad y la minimizacion de datos en el centro de cada agente.", "Automatizar no debe significar perder control. Nuestro enfoque pone la privacidad, la trazabilidad y la minimización de datos en el centro de cada agente.", "Automation should not mean losing control. Our approach puts privacy, traceability and data minimization at the center of every agent.");
  E("Privacidad desde el diseño", "Privacidad desde el diseño", "Privacy by design");
  E("IA preparada para tratar informacion de negocio sin convertir tus datos en un riesgo.", "IA preparada para tratar información de negocio sin convertir tus datos en un riesgo.", "AI ready to handle business information without turning your data into a risk.");
  E("Antes de desplegar definimos que datos necesita el agente, para que se usan, quien puede verlos, donde se alojan y como se conservan. El objetivo es que el asistente sea util, medible y proporcional al proceso que automatiza.", "Antes de desplegar definimos qué datos necesita el agente, para qué se usan, quién puede verlos, dónde se alojan y cómo se conservan. El objetivo es que el asistente sea útil, medible y proporcional al proceso que automatiza.", "Before deployment we define what data the agent needs, what it is used for, who can see it, where it is hosted and how it is retained. The goal is for the assistant to be useful, measurable and proportional to the process it automates.");
  E("Mapa de datos y finalidad del tratamiento antes de activar flujos con clientes.", "Mapa de datos y finalidad del tratamiento antes de activar flujos con clientes.", "Data map and processing purpose before activating customer workflows.");
  E("Configuracion orientada a RGPD y LOPD-GDD: minimizacion, conservacion limitada y derechos del usuario.", "Configuración orientada a RGPD y LOPD-GDD: minimización, conservación limitada y derechos del usuario.", "Configuration aligned with GDPR and LOPD-GDD: minimization, limited retention and user rights.");
  E("Proveedores, integraciones y alojamiento revisados segun el caso; infraestructura en la UE disponible.", "Proveedores, integraciones y alojamiento revisados según el caso; infraestructura en la UE disponible.", "Providers, integrations and hosting reviewed case by case; EU infrastructure available.");
  E("Escalado a humano para casos sensibles, incidencias o solicitudes que no deba resolver la IA sola.", "Escalado a humano para casos sensibles, incidencias o solicitudes que no deba resolver la IA sola.", "Human escalation for sensitive cases, incidents or requests AI should not handle alone.");
  E("Controles por defecto", "Controles por defecto", "Default controls");
  E("Data safe", "Data safe", "Data safe");
  E("Cifrado y canales seguros", "Cifrado y canales seguros", "Encryption and secure channels");
  E("Conexiones HTTPS y cifrado en transito en los servicios integrados que lo soportan.", "Conexiones HTTPS y cifrado en tránsito en los servicios integrados que lo soportan.", "HTTPS connections and encryption in transit in integrated services that support it.");
  E("Acceso minimo necesario", "Acceso mínimo necesario", "Least-privilege access");
  E("Roles, permisos y credenciales separados para limitar quien puede leer o modificar datos.", "Roles, permisos y credenciales separados para limitar quién puede leer o modificar datos.", "Separate roles, permissions and credentials to limit who can read or modify data.");
  E("Trazabilidad operativa", "Trazabilidad operativa", "Operational traceability");
  E("Registro de eventos clave para revisar conversaciones, derivaciones y automatizaciones.", "Registro de eventos clave para revisar conversaciones, derivaciones y automatizaciones.", "Key event logging to review conversations, handoffs and automations.");
  E("Datos justos y necesarios", "Datos justos y necesarios", "Only necessary data");
  E("Capturamos solo la informacion imprescindible para responder, reservar, cualificar o escalar.", "Capturamos solo la información imprescindible para responder, reservar, cualificar o escalar.", "We capture only the information needed to answer, book, qualify or escalate.");
  E("Encargados y proveedores", "Encargados y proveedores", "Processors and providers");
  E("Documentamos herramientas externas como Calendly, CRM, n8n o canales de mensajeria.", "Documentamos herramientas externas como Calendly, CRM, n8n o canales de mensajería.", "We document external tools such as Calendly, CRM, n8n or messaging channels.");
  E("Guardrails de IA", "Guardrails de IA", "AI guardrails");
  E("Limites de respuesta, escalado y revision humana para evitar usos fuera del alcance acordado.", "Límites de respuesta, escalado y revisión humana para evitar usos fuera del alcance acordado.", "Response limits, escalation and human review to prevent use outside the agreed scope.");
  E("Cada proyecto se ajusta al tratamiento real de datos: no prometemos una configuracion unica, disenamos el nivel de seguridad adecuado para tu negocio y sector.", "Cada proyecto se ajusta al tratamiento real de datos: no prometemos una configuración única, diseñamos el nivel de seguridad adecuado para tu negocio y sector.", "Each project is adapted to the real data processing involved: we do not promise a one-size-fits-all setup, we design the right security level for your business and sector.");
  E("Ops Hub: asistentes inteligentes para operaciones de alto impacto", "Ops Hub: asistentes inteligentes para operaciones de alto impacto", "Ops Hub: intelligent assistants for high-impact operations");
  E("Suite de asistentes que aprenden tu operativa, se entrenan con tu data y se despliegan en tiempo record para que tu equipo recupere el poder de decidir.", "Suite de asistentes que aprenden tu operativa, se entrenan con tus datos y se despliegan en tiempo récord para que tu equipo recupere el poder de decidir.", "A suite of assistants that learn your operations, train on your data and deploy in record time so your team can focus on decisions.");
  E("Agentes digitales especializados por proceso para escalar captación, gestión de agenda, cobros y reporting avanzado.", "Agentes digitales especializados por proceso para escalar captación, gestión de agenda, cobros y reporting avanzado.", "Digital agents specialized by process to scale acquisition, scheduling, payments and advanced reporting.");
  E("Entrenamiento profundo con la logica y contexto de tu negocio.", "Entrenamiento profundo con la lógica y contexto de tu negocio.", "Deep training with your business logic and context.");
  E("Despliegue agil con integracion a canales, CRM y n8n sin fricciones.", "Despliegue ágil con integración a canales, CRM y n8n sin fricciones.", "Agile deployment with smooth channel, CRM and n8n integration.");
  E("Orquestacion PRIME: sincroniza herramientas y elimina silos operativos.", "Orquestación PRIME: sincroniza herramientas y elimina silos operativos.", "PRIME orchestration: synchronize tools and remove operational silos.");
  E("Explorar servicios", "Explorar servicios", "Explore services");
  E("Sistema orbital de agentes NOVAIX", "Sistema orbital de agentes NOVAIX", "NOVAIX orbital agent system");
  E("OPS HUB", "OPS HUB", "OPS HUB");
  E("Selecciona un agente", "Selecciona un agente", "Select an agent");
  E("Transmisiones", "Transmisiones", "Transmissions");
  E("Canal cifrado · Esperando seleccion", "Canal cifrado · Esperando selección", "Encrypted channel · Waiting for selection");
  E("Cifrado", "Cifrado", "Encrypted");
  E("Loading", "Loading", "Loading");
  E("Loading…", "Loading…", "Loading…");
  E("Selecciona un agente del sistema orbital para iniciar la transmision.", "Selecciona un agente del sistema orbital para iniciar la transmisión.", "Select an agent in the orbital system to start the transmission.");
  E("Senal", "Señal", "Signal");
  E("Transmision finalizada", "Transmisión finalizada", "Transmission complete");
  E("Reproducir de nuevo", "Reproducir de nuevo", "Replay");
  E("Canal cifrado", "Canal cifrado", "Encrypted channel");
  E("en linea", "en línea", "online");
  E("Transmitiendo", "Transmitiendo", "Transmitting");
  E("Finalizada", "Finalizada", "Completed");
  E("Paquete", "Paquete", "Packet");
  E("handshake: estableciendo canal…", "handshake: estableciendo canal…", "handshake: establishing channel…");
  E("canal: cifrado activo", "canal: cifrado activo", "channel: encryption active");
  E("transmision: finalizada (OK)", "transmisión: finalizada (OK)", "transmission: completed (OK)");
  E("Comparativa", "Comparativa", "Comparison");
  E("Diferencias clave entre la automatizacion tradicional y NOVAIX Ops Hub.", "Diferencias clave entre la automatización tradicional y NOVAIX Ops Hub.", "Key differences between traditional automation and NOVAIX Ops Hub.");
  E("Capacidad", "Capacidad", "Capability");
  E("Automatizacion tradicional", "Automatización tradicional", "Traditional automation");
  E("Arquitectura de robot", "Arquitectura de robot", "Bot architecture");
  E("Bots de respuesta rigida y limitada.", "Bots de respuesta rígida y limitada.", "Rigid, limited-response bots.");
  E("Especialistas digitales con logica de negocio.", "Especialistas digitales con lógica de negocio.", "Digital specialists with business logic.");
  E("Aprendizaje IA", "Aprendizaje IA", "AI learning");
  E("Requiere ajustes manuales constantes.", "Requiere ajustes manuales constantes.", "Requires constant manual adjustments.");
  E("Entrenamiento continuo: aprende de cada interaccion.", "Entrenamiento continuo: aprende de cada interacción.", "Continuous training: learns from every interaction.");
  E("Implementacion", "Implementación", "Implementation");
  E("Semanas de configuracion tecnica.", "Semanas de configuración técnica.", "Weeks of technical setup.");
  E("Despliegue agil tipo", "Despliegue ágil tipo", "Agile");
  E("plug & play", "plug & play", "plug & play");
  E("Conectividad", "Conectividad", "Connectivity");
  E("Herramientas aisladas y silos de datos.", "Herramientas aisladas y silos de datos.", "Isolated tools and data silos.");
  E("Orquestacion PRIME con canales, CRM y n8n integrados.", "Orquestación PRIME con canales, CRM y n8n integrados.", "PRIME orchestration with integrated channels, CRM and n8n.");
  E("Rol humano", "Rol humano", "Human role");
  E("Operativo y correctivo.", "Operativo y correctivo.", "Operational and corrective.");
  E("Estrategico: tu equipo valida y decide.", "Estratégico: tu equipo valida y decide.", "Strategic: your team validates and decides.");
  E("Diseñamos, desplegamos y optimizamos agentes de IA listos para vender, atender y ejecutar tareas reales en tus sistemas.", "Diseñamos, desplegamos y optimizamos agentes de IA listos para vender, atender y ejecutar tareas reales en tus sistemas.", "We design, deploy and optimize AI agents ready to sell, support and execute real tasks inside your systems.");
  E("carrusel", "carrusel", "carousel");
  E("Anterior", "Anterior", "Previous");
  E("Siguiente", "Siguiente", "Next");
  E("slide", "slide", "slide");
  E("1 de 3", "1 de 3", "1 of 3");
  E("2 de 3", "2 de 3", "2 of 3");
  E("3 de 3", "3 de 3", "3 of 3");
  E("Paginacion", "Paginación", "Pagination");
  E("Ir al slide 1", "Ir al slide 1", "Go to slide 1");
  E("Ir al slide 2", "Ir al slide 2", "Go to slide 2");
  E("Ir al slide 3", "Ir al slide 3", "Go to slide 3");
  E("Bots multicanal", "Bots multicanal", "Multichannel bots");
  E("WhatsApp, webchat, Instagram y Messenger. Captura leads, agenda citas y responde FAQs con tono de tu marca.", "WhatsApp, webchat, Instagram y Messenger. Captura leads, agenda citas y responde FAQs con tono de tu marca.", "WhatsApp, webchat, Instagram and Messenger. Capture leads, book appointments and answer FAQs in your brand voice.");
  E("Automatizacion n8n", "Automatización n8n", "n8n automation");
  E("Reservas, pedidos, seguimiento y tareas. Conectado a HubSpot, Zoho, Airtable, Notion y Google Workspace.", "Reservas, pedidos, seguimiento y tareas. Conectado a HubSpot, Zoho, Airtable, Notion y Google Workspace.", "Bookings, orders, follow-up and tasks. Connected to HubSpot, Zoho, Airtable, Notion and Google Workspace.");
  E("Lectura avanzada", "Lectura avanzada", "Advanced reading");
  E("RAG con PDFs, imagenes y documentos. Resumenes automaticos de tickets y conversaciones para tu equipo.", "RAG con PDFs, imágenes y documentos. Resúmenes automáticos de tickets y conversaciones para tu equipo.", "RAG with PDFs, images and documents. Automatic summaries of tickets and conversations for your team.");
  E("Voz y llamadas IA", "Voz y llamadas IA", "AI voice and calls");
  E("Llamadas entrantes/salientes para soporte, reservas o cualificacion. Reportes y avisos en tiempo real.", "Llamadas entrantes/salientes para soporte, reservas o cualificación. Reportes y avisos en tiempo real.", "Inbound/outbound calls for support, bookings or qualification. Real-time reports and alerts.");
  E("Entrenamiento continuo", "Entrenamiento continuo", "Continuous training");
  E("Reentrenos mensuales, revision de prompts y KPIs. Asistencia VIP en picos de demanda.", "Reentrenos mensuales, revisión de prompts y KPIs. Asistencia VIP en picos de demanda.", "Monthly retraining, prompt reviews and KPIs. VIP support during demand peaks.");
  E("Onboarding guiado", "Onboarding guiado", "Guided onboarding");
  E("Plan de arranque en 3 semanas, con dashboards y metricas clave desde el dia uno.", "Plan de arranque en 3 semanas, con dashboards y métricas clave desde el día uno.", "Three-week launch plan with dashboards and key metrics from day one.");
  E("Integraciones principales", "Integraciones principales", "Main integrations");
  E("Conectamos con tus herramientas favoritas.", "Conectamos con tus herramientas favoritas.", "We connect with your favorite tools.");
  E("Resultados", "Resultados", "Results");
  E("Resultados tipicos en proyectos similares (pueden variar segun sector, volumen y canales).", "Resultados típicos en proyectos similares (pueden variar según sector, volumen y canales).", "Typical results in similar projects (may vary by sector, volume and channels).");
  E("Productividad de equipo", "Productividad de equipo", "Team productivity");
  E("Precision en respuestas", "Precisión en respuestas", "Response accuracy");
  E("Reduccion de tickets repetitivos", "Reducción de tickets repetitivos", "Reduction in repetitive tickets");
  E("Ahorro de tiempo en back-office", "Ahorro de tiempo en back-office", "Time saved in back-office");
  E("Recibe un diagnostico rapido con tu caso y objetivos.", "Recibe un diagnóstico rápido con tu caso y objetivos.", "Get a quick diagnosis for your case and goals.");
  E("Quiero mi diagnostico", "Quiero mi diagnóstico", "I want my diagnosis");
  E("Casos y resultados", "Casos y resultados", "Cases and results");
  E("Ejemplos de impacto real al automatizar procesos con IA.", "Ejemplos de impacto real al automatizar procesos con IA.", "Examples of real impact from automating processes with AI.");
  E("Clinica privada", "Clínica privada", "Private clinic");
  E("Agenda automatica + recordatorios: reduccion del 35% en ausencias y mas consultas cualificadas.", "Agenda automática + recordatorios: reducción del 35% en ausencias y más consultas cualificadas.", "Automated scheduling + reminders: 35% fewer no-shows and more qualified appointments.");
  E("Despacho legal", "Despacho legal", "Law firm");
  E("Filtrado inicial de casos: 60% menos tiempo de triage y mayor foco en casos rentables.", "Filtrado inicial de casos: 60% menos tiempo de triage y mayor foco en casos rentables.", "Initial case filtering: 60% less triage time and more focus on profitable cases.");
  E("eCommerce", "eCommerce", "eCommerce");
  E("Soporte postventa automatizado: -42% tickets repetitivos y aumento en conversion.", "Soporte postventa automatizado: -42% tickets repetitivos y aumento en conversión.", "Automated post-sales support: 42% fewer repetitive tickets and higher conversion.");
  E("Ver mas casos", "Ver más casos", "View more cases");
  E("Ver videos", "Ver vídeos", "View videos");
  E("Ver ejemplos en video", "Ver ejemplos en vídeo", "View video examples");
  E("Aplicaciones reales", "Aplicaciones reales", "Real applications");
  E("Casos tipicos donde desplegamos IA y automatizacion.", "Casos típicos donde desplegamos IA y automatización.", "Typical cases where we deploy AI and automation.");
  E("Reservas, recordatorios y triaje de pacientes 24/7. Reduce ausencias y llamadas perdidas.", "Reservas, recordatorios y triaje de pacientes 24/7. Reduce ausencias y llamadas perdidas.", "Bookings, reminders and 24/7 patient triage. Reduce no-shows and missed calls.");
  E("Filtrado inicial de casos, recogida de datos clave y derivacion al abogado adecuado.", "Filtrado inicial de casos, recogida de datos clave y derivación al abogado adecuado.", "Initial case filtering, key data collection and routing to the right lawyer.");
  E("Estetica y belleza", "Estética y belleza", "Aesthetics and beauty");
  E("Agenda automatica en web/WhatsApp, gestion de precios y tratamientos sin colas.", "Agenda automática en web/WhatsApp, gestión de precios y tratamientos sin colas.", "Automated booking on web/WhatsApp, price and treatment handling without queues.");
  E("Restaurantes", "Restaurantes", "Restaurants");
  E("Reservas, pedidos sencillos y respuestas instantaneas en horas punta.", "Reservas, pedidos sencillos y respuestas instantáneas en horas punta.", "Bookings, simple orders and instant answers during peak hours.");
  E("Inmobiliaria", "Inmobiliaria", "Real estate");
  E("Captura leads, cualifica y agenda visitas. Informacion inmediata de inmuebles.", "Captura leads, cualifica y agenda visitas. Información inmediata de inmuebles.", "Capture leads, qualify and book viewings. Immediate property information.");
  E("Asistencia en compra, abandono de carrito y soporte postventa con integraciones a CRM.", "Asistencia en compra, abandono de carrito y soporte postventa con integraciones a CRM.", "Purchase assistance, cart abandonment and post-sales support with CRM integrations.");
  E("Planes a tu medida", "Planes a tu medida", "Plans tailored to you");
  E("Precios sin IVA. Ajustamos por volumen e integraciones.", "Precios sin IVA. Ajustamos por volumen e integraciones.", "Prices exclude VAT. We adjust by volume and integrations.");
  E("Plan Basico", "Plan Básico", "Basic Plan");
  E("Inicio rapido · Pequenos negocios", "Inicio rápido · Pequeños negocios", "Fast start · Small businesses");
  E("Desde", "Desde", "From");
  E("/mes · SIN IVA", "/mes · SIN IVA", "/month · VAT excluded");
  E("Oferta temporal", "Oferta temporal", "Limited-time offer");
  E("Chatbot esencial para arrancar con IA.", "Chatbot esencial para arrancar con IA.", "Essential chatbot to get started with AI.");
  E("Chatbot IA 24/7 para web, WhatsApp o Instagram (1 canal)", "Chatbot IA 24/7 para web, WhatsApp o Instagram (1 canal)", "24/7 AI chatbot for web, WhatsApp or Instagram (1 channel)");
  E("Respuestas inteligentes a FAQs basicas (horarios, precios, servicios)", "Respuestas inteligentes a FAQs básicas (horarios, precios, servicios)", "Smart answers to basic FAQs (hours, prices, services)");
  E("Captura de leads sencilla (nombre, telefono, email)", "Captura de leads sencilla (nombre, teléfono, email)", "Simple lead capture (name, phone, email)");
  E("Panel basico de actividad", "Panel básico de actividad", "Basic activity panel");
  E("Configuracion base de privacidad y consentimiento", "Configuración base de privacidad y consentimiento", "Basic privacy and consent setup");
  E("Hasta 500 interacciones al mes", "Hasta 500 interacciones al mes", "Up to 500 interactions per month");
  E("Soporte por email", "Soporte por email", "Email support");
  E("1 idioma", "1 idioma", "1 language");
  E("Plan Profesional", "Plan Profesional", "Professional Plan");
  E("Automatizacion 40–70% back-office", "Automatización 40–70% back-office", "40–70% back-office automation");
  E("Automatizacion real con n8n y multicanal.", "Automatización real con n8n y multicanal.", "Real automation with n8n and multichannel support.");
  E("Todo lo del Plan Basico", "Todo lo del Plan Básico", "Everything in the Basic Plan");
  E("3 canales integrados (web + WhatsApp + Instagram o Facebook)", "3 canales integrados (web + WhatsApp + Instagram o Facebook)", "3 integrated channels (web + WhatsApp + Instagram or Facebook)");
  E("Integracion CRM (HubSpot, Zoho, Airtable, Notion…)", "Integración CRM (HubSpot, Zoho, Airtable, Notion…)", "CRM integration (HubSpot, Zoho, Airtable, Notion...)");
  E("Automatizacion real mediante n8n: reservas, pedidos, recordatorios, pagos", "Automatización real mediante n8n: reservas, pedidos, recordatorios, pagos", "Real automation through n8n: bookings, orders, reminders, payments");
  E("Lectura automatica de PDFs, imagenes y documentos", "Lectura automática de PDFs, imágenes y documentos", "Automatic reading of PDFs, images and documents");
  E("2.000 interacciones/mes", "2.000 interacciones/mes", "2,000 interactions/month");
  E("Bot multi-idioma (hasta 3 idiomas)", "Bot multi-idioma (hasta 3 idiomas)", "Multilingual bot (up to 3 languages)");
  E("Notificaciones automaticas por email/Telegram", "Notificaciones automáticas por email/Telegram", "Automatic email/Telegram notifications");
  E("Revision de flujos con enfoque RGPD/LOPD-GDD y minimizacion de datos", "Revisión de flujos con enfoque RGPD/LOPD-GDD y minimización de datos", "Workflow review with GDPR/LOPD-GDD and data minimization approach");
  E("Entrenamiento mensual del bot", "Entrenamiento mensual del bot", "Monthly bot training");
  E("Soporte prioritario", "Soporte prioritario", "Priority support");
  E("Plan Avanzado", "Plan Avanzado", "Advanced Plan");
  E("Enterprise ligero · Cerebro operativo", "Enterprise ligero · Cerebro operativo", "Light enterprise · Operational brain");
  E("IA integral con workflows complejos y voz.", "IA integral con workflows complejos y voz.", "Full AI with complex workflows and voice.");
  E("Todo lo del Profesional", "Todo lo del Profesional", "Everything in Professional");
  E("Interacciones ilimitadas", "Interacciones ilimitadas", "Unlimited interactions");
  E("Multiples agentes especializados (ventas, soporte, marketing, comercial)", "Múltiples agentes especializados (ventas, soporte, marketing, comercial)", "Multiple specialized agents (sales, support, marketing, business development)");
  E("Automatizacion avanzada con n8n (workflows complejos + integraciones profundas)", "Automatización avanzada con n8n (workflows complejos + integraciones profundas)", "Advanced automation with n8n (complex workflows + deep integrations)");
  E("Integraciones personalizadas con APIs propias del cliente", "Integraciones personalizadas con APIs propias del cliente", "Custom integrations with the client's own APIs");
  E("Llamadas telefonicas automaticas con IA (entrada y salida)", "Llamadas telefónicas automáticas con IA (entrada y salida)", "Automated AI phone calls (inbound and outbound)");
  E("Lectura avanzada de PDFs, emails, facturas, documentos complejos", "Lectura avanzada de PDFs, emails, facturas, documentos complejos", "Advanced reading of PDFs, emails, invoices and complex documents");
  E("Memoria larga con Pinecone", "Memoria larga con Pinecone", "Long-term memory with Pinecone");
  E("IA multimodal (imagen, voz, video)", "IA multimodal (imagen, voz, vídeo)", "Multimodal AI (image, voice, video)");
  E("Automatizacion contable y pipeline comercial", "Automatización contable y pipeline comercial", "Accounting automation and sales pipeline");
  E("Reentrenamiento continuo (mensual)", "Reentrenamiento continuo (mensual)", "Continuous retraining (monthly)");
  E("Reportes avanzados + metricas predictivas", "Reportes avanzados + métricas predictivas", "Advanced reports + predictive metrics");
  E("Auditoria funcional de trazabilidad, permisos y proveedores conectados", "Auditoría funcional de trazabilidad, permisos y proveedores conectados", "Functional audit of traceability, permissions and connected providers");
  E("Soporte VIP 24/7 garantizado", "Soporte VIP 24/7 garantizado", "Guaranteed 24/7 VIP support");
  E("Asistencia en campanas o picos de demanda", "Asistencia en campañas o picos de demanda", "Assistance during campaigns or demand peaks");
  E("Para negocios que quieren empezar a responder mejor sin complicarse.", "Para negocios que quieren empezar a responder mejor sin complicarse.", "For businesses that want to start responding better without adding complexity.");
  E("Asistente IA para 1 canal: web, WhatsApp o Instagram", "Asistente IA para 1 canal: web, WhatsApp o Instagram", "AI assistant for 1 channel: web, WhatsApp or Instagram");
  E("Respuestas a preguntas frecuentes: horarios, precios, servicios y disponibilidad", "Respuestas a preguntas frecuentes: horarios, precios, servicios y disponibilidad", "Answers to frequently asked questions: hours, prices, services and availability");
  E("Captura basica de leads: nombre, telefono, email y necesidad", "Captura básica de leads: nombre, teléfono, email y necesidad", "Basic lead capture: name, phone, email and need");
  E("Configuracion inicial de tono y limites de respuesta", "Configuración inicial de tono y límites de respuesta", "Initial setup of tone and response limits");
  E("Supervision y ajustes basicos", "Supervisión y ajustes básicos", "Basic supervision and adjustments");
  E("Volumen base de uso incluido", "Volumen base de uso incluido", "Base usage volume included");
  E("Multicanal · Automatizacion comercial", "Multicanal · Automatización comercial", "Multichannel · Commercial automation");
  E("Para negocios que reciben consultas por varios canales y quieren automatizar parte del proceso comercial.", "Para negocios que reciben consultas por varios canales y quieren automatizar parte del proceso comercial.", "For businesses that receive inquiries across several channels and want to automate part of the sales process.");
  E("Hasta 3 canales conectados: web, WhatsApp, Instagram/Facebook o email", "Hasta 3 canales conectados: web, WhatsApp, Instagram/Facebook o email", "Up to 3 connected channels: web, WhatsApp, Instagram/Facebook or email");
  E("Automatizacion de flujos: reservas, solicitudes, presupuestos, pedidos o recordatorios", "Automatización de flujos: reservas, solicitudes, presupuestos, pedidos o recordatorios", "Workflow automation: bookings, requests, quotes, orders or reminders");
  E("Integracion con CRM o herramientas de trabajo: Zoho, HubSpot, Airtable, Notion, etc.", "Integración con CRM o herramientas de trabajo: Zoho, HubSpot, Airtable, Notion, etc.", "Integration with CRM or work tools: Zoho, HubSpot, Airtable, Notion, etc.");
  E("Clasificacion automatica de consultas y derivacion a humano", "Clasificación automática de consultas y derivación a humano", "Automatic inquiry classification and human handoff");
  E("Lectura y extraccion de datos de documentos simples", "Lectura y extracción de datos de documentos simples", "Reading and data extraction from simple documents");
  E("Notificaciones internas por email, Telegram o panel", "Notificaciones internas por email, Telegram o panel", "Internal notifications by email, Telegram or dashboard");
  E("Hasta 3 idiomas", "Hasta 3 idiomas", "Up to 3 languages");
  E("Revision mensual del funcionamiento y ajustes", "Revisión mensual del funcionamiento y ajustes", "Monthly performance review and adjustments");
  E("Plan Integral", "Plan Integral", "Full Plan");
  E("Sistema avanzado · Integraciones y voz", "Sistema avanzado · Integraciones y voz", "Advanced system · Integrations and voice");
  E("Para empresas que quieren un sistema avanzado de automatizacion multicanal con integraciones y voz.", "Para empresas que quieren un sistema avanzado de automatización multicanal con integraciones y voz.", "For companies that want an advanced multichannel automation system with integrations and voice.");
  E("Todo lo del Plan Profesional", "Todo lo del Plan Profesional", "Everything in the Professional Plan");
  E("Multiples agentes especializados: ventas, soporte, reservas, operaciones y administracion", "Múltiples agentes especializados: ventas, soporte, reservas, operaciones y administración", "Multiple specialized agents: sales, support, bookings, operations and administration");
  E("Automatizaciones avanzadas conectadas a herramientas internas", "Automatizaciones avanzadas conectadas a herramientas internas", "Advanced automations connected to internal tools");
  E("Integraciones personalizadas con APIs del cliente", "Integraciones personalizadas con APIs del cliente", "Custom integrations with the client's APIs");
  E("Agente de voz para llamadas entrantes o seguimiento, previa validacion", "Agente de voz para llamadas entrantes o seguimiento, previa validación", "Voice agent for inbound calls or follow-up, after validation");
  E("Lectura avanzada de emails, PDFs, facturas, imagenes y documentos complejos", "Lectura avanzada de emails, PDFs, facturas, imágenes y documentos complejos", "Advanced reading of emails, PDFs, invoices, images and complex documents");
  E("Memoria documental y base de conocimiento avanzada", "Memoria documental y base de conocimiento avanzada", "Document memory and advanced knowledge base");
  E("Automatizacion de procesos comerciales y operativos", "Automatización de procesos comerciales y operativos", "Automation of commercial and operational processes");
  E("Reportes avanzados, metricas y trazabilidad", "Reportes avanzados, métricas y trazabilidad", "Advanced reports, metrics and traceability");
  E("Auditoria de permisos, proveedores y flujos conectados", "Auditoría de permisos, proveedores y flujos conectados", "Audit of permissions, providers and connected workflows");
  E("Soporte ampliado y asistencia en picos de demanda", "Soporte ampliado y asistencia en picos de demanda", "Expanded support and assistance during demand peaks");
  E("Volumen de uso escalable segun necesidades", "Volumen de uso escalable según necesidades", "Usage volume scalable according to needs");
  E("Cada negocio funciona diferente. Por eso, antes de empezar, revisamos el caso y ajustamos el alcance para evitar pagar por funcionalidades que no se necesitan.", "Cada negocio funciona diferente. Por eso, antes de empezar, revisamos el caso y ajustamos el alcance para evitar pagar por funcionalidades que no se necesitan.", "Every business works differently. That is why, before starting, we review the case and adjust the scope to avoid paying for features that are not needed.");
  E("Los precios son orientativos y pueden variar segun volumen de mensajes, canales conectados, integraciones necesarias y nivel de personalizacion.", "Los precios son orientativos y pueden variar según volumen de mensajes, canales conectados, integraciones necesarias y nivel de personalización.", "Prices are indicative and may vary depending on message volume, connected channels, required integrations and level of customization.");
  E("Importante", "Importante", "Important");
  E("Los planes cubren el", "Los planes cubren el", "Plans include");
  E("mantenimiento mensual del asistente", "mantenimiento mensual del asistente", "monthly assistant maintenance");
  E("(uso, soporte y mejora continua).", "(uso, soporte y mejora continua).", "(usage, support and continuous improvement).");
  E("El", "El", "The");
  E("diseno y desarrollo inicial", "diseño y desarrollo inicial", "initial design and development");
  E("se presupuesta aparte tras revisar tu negocio, canales y procesos.", "se presupuesta aparte tras revisar tu negocio, canales y procesos.", "is quoted separately after reviewing your business, channels and processes.");
  E("Segun la complejidad, cerramos un presupuesto de puesta en marcha y, aprobado, el asistente pasa a la cuota mensual del plan elegido. Precios sin IVA.", "Según la complejidad, cerramos un presupuesto de puesta en marcha y, aprobado, el asistente pasa a la cuota mensual del plan elegido. Precios sin IVA.", "Depending on complexity, we agree on a launch budget and, once approved, the assistant moves to the monthly fee of the selected plan. Prices exclude VAT.");
  E("Los requisitos de seguridad, cifrado, alojamiento en la UE o controles especificos se concretan en el alcance tecnico de cada proyecto.", "Los requisitos de seguridad, cifrado, alojamiento en la UE o controles específicos se concretan en el alcance técnico de cada proyecto.", "Security, encryption, EU hosting or specific control requirements are defined in the technical scope of each project.");
  E("Equipo especializado en IA aplicada a operaciones, soporte y ventas.", "Equipo especializado en IA aplicada a operaciones, soporte y ventas.", "A team specialized in AI applied to operations, support and sales.");
  E("Las personas detras de NOVAIX", "Las personas detrás de NOVAIX", "The people behind NOVAIX");
  E("Fundadores de NOVAIX", "Fundadores de NOVAIX", "NOVAIX founders");
  E("Ver foto de Juan Arano", "Ver foto de Juan Arano", "View Juan Arano photo");
  E("Juan Arano, cofundador de NOVAIX", "Juan Arano, cofundador de NOVAIX", "Juan Arano, NOVAIX co-founder");
  E("Estrategia, procesos y automatizacion", "Estrategia, procesos y automatización", "Strategy, processes and automation");
  E("Convierte problemas reales de negocio en flujos de IA claros, medibles y faciles de adoptar por equipos comerciales, soporte y operaciones.", "Convierte problemas reales de negocio en flujos de IA claros, medibles y fáciles de adoptar por equipos comerciales, soporte y operaciones.", "Turns real business problems into clear, measurable AI workflows that sales, support and operations teams can adopt easily.");
  E("Ver foto de Daniel Molina", "Ver foto de Daniel Molina", "View Daniel Molina photo");
  E("Daniel Molina, cofundador de NOVAIX", "Daniel Molina, cofundador de NOVAIX", "Daniel Molina, NOVAIX co-founder");
  E("Producto, integraciones y despliegue", "Producto, integraciones y despliegue", "Product, integrations and deployment");
  E("Une agentes, canales y herramientas como calendarios, CRM, voz y automatizaciones para que la IA trabaje dentro de la operativa diaria.", "Une agentes, canales y herramientas como calendarios, CRM, voz y automatizaciones para que la IA trabaje dentro de la operativa diaria.", "Connects agents, channels and tools such as calendars, CRM, voice and automations so AI works inside daily operations.");
  E("IA practica, cercana y con impacto real", "IA práctica, cercana y con impacto real", "Practical, accessible AI with real impact");
  E("En NOVAIX disenamos agentes de IA que atienden emails, llamadas y chats, organizan citas, actualizan herramientas internas y ayudan a vender, responder y operar con menos friccion.", "En NOVAIX diseñamos agentes de IA que atienden emails, llamadas y chats, organizan citas, actualizan herramientas internas y ayudan a vender, responder y operar con menos fricción.", "At NOVAIX we design AI agents that handle emails, calls and chats, organize appointments, update internal tools and help teams sell, respond and operate with less friction.");
  E("Trabajamos cada proyecto desde la realidad del negocio: entendemos tus procesos, conectamos tus sistemas y acompanamos la puesta en marcha para que la tecnologia se note en tiempo ahorrado, mejores respuestas y mas oportunidades.", "Trabajamos cada proyecto desde la realidad del negocio: entendemos tus procesos, conectamos tus sistemas y acompañamos la puesta en marcha para que la tecnología se note en tiempo ahorrado, mejores respuestas y más oportunidades.", "We work from the reality of each business: we understand your processes, connect your systems and support launch so the technology shows up as saved time, better answers and more opportunities.");
  E("IA aplicada", "IA aplicada", "Applied AI");
  E("n8n avanzado", "n8n avanzado", "Advanced n8n");
  E("Multicanal", "Multicanal", "Multichannel");
  E("Integraciones API", "Integraciones API", "API integrations");
  E("Combinamos vision de negocio, desarrollo tecnico y obsesion por la experiencia del usuario para crear asistentes utiles desde el primer dia.", "Combinamos visión de negocio, desarrollo técnico y obsesión por la experiencia del usuario para crear asistentes útiles desde el primer día.", "We combine business vision, technical development and a strong focus on user experience to create useful assistants from day one.");
  E("Nuestro objetivo es que cualquier empresa pueda usar IA sin complicarse: soluciones entendibles, mantenibles y orientadas a resultados.", "Nuestro objetivo es que cualquier empresa pueda usar IA sin complicarse: soluciones entendibles, mantenibles y orientadas a resultados.", "Our goal is for any company to use AI without complexity: understandable, maintainable and results-driven solutions.");
  E("FAQ", "FAQ", "FAQ");
  E("Respuestas rapidas a las dudas mas comunes antes de agendar una demo.", "Respuestas rápidas a las dudas más comunes antes de agendar una demo.", "Quick answers to the most common questions before booking a demo.");
  E("Cumplis con RGPD, LOPD-GDD y alojamiento en la UE?", "¿Cumplís con RGPD, LOPD-GDD y alojamiento en la UE?", "Do you comply with GDPR, LOPD-GDD and EU hosting?");
  E("Trabajamos con enfoque RGPD y LOPD-GDD desde el diseno del agente: minimizacion de datos, finalidad clara, conservacion limitada, control de accesos y revision de proveedores. Si el proyecto lo requiere, podemos plantear infraestructura dentro de la Union Europea y limitar que herramientas externas intervienen en el flujo.", "Trabajamos con enfoque RGPD y LOPD-GDD desde el diseño del agente: minimización de datos, finalidad clara, conservación limitada, control de accesos y revisión de proveedores. Si el proyecto lo requiere, podemos plantear infraestructura dentro de la Unión Europea y limitar qué herramientas externas intervienen en el flujo.", "We work with a GDPR and LOPD-GDD approach from the design of the agent: data minimization, clear purpose, limited retention, access control and provider review. If the project requires it, we can propose infrastructure within the European Union and limit which external tools are involved in the workflow.");
  E("Mis datos se usan para entrenar modelos publicos?", "¿Mis datos se usan para entrenar modelos públicos?", "Are my data used to train public models?");
  E("No usamos la informacion de tu empresa para entrenar modelos publicos sin autorizacion. El alcance de cada agente se define con tus documentos, procesos y canales, y se revisa que datos necesita realmente para operar.", "No usamos la información de tu empresa para entrenar modelos públicos sin autorización. El alcance de cada agente se define con tus documentos, procesos y canales, y se revisa qué datos necesita realmente para operar.", "We do not use your company information to train public models without authorization. Each agent scope is defined with your documents, processes and channels, and we review what data it really needs to operate.");
  E("Que medidas de seguridad aplicais en los agentes?", "¿Qué medidas de seguridad aplicáis en los agentes?", "What security measures do you apply to agents?");
  E("Aplicamos controles proporcionales al proyecto: conexiones HTTPS, cifrado en transito cuando el proveedor lo soporta, accesos por rol, credenciales separadas, registro de eventos relevantes, escalado a humano y limitacion de datos recogidos. En proyectos avanzados revisamos permisos, proveedores e integraciones conectadas.", "Aplicamos controles proporcionales al proyecto: conexiones HTTPS, cifrado en tránsito cuando el proveedor lo soporta, accesos por rol, credenciales separadas, registro de eventos relevantes, escalado a humano y limitación de datos recogidos. En proyectos avanzados revisamos permisos, proveedores e integraciones conectadas.", "We apply controls proportional to the project: HTTPS connections, encryption in transit when supported by the provider, role-based access, separate credentials, relevant event logging, human escalation and limits on collected data. In advanced projects we review permissions, providers and connected integrations.");
  E("Cuanto tardais en poner en marcha un asistente?", "¿Cuánto tardáis en poner en marcha un asistente?", "How long does it take to launch an assistant?");
  E("Depende del plan y de la complejidad del proyecto. En los casos sencillos (Plan Basico) solemos tener un asistente funcionando en 24–72 horas desde que tenemos la informacion necesaria. Cuando hay integraciones con CRM u otras herramientas, el plazo habitual esta entre 5 y 10 dias.", "Depende del plan y de la complejidad del proyecto. En los casos sencillos (Plan Básico) solemos tener un asistente funcionando en 24–72 horas desde que tenemos la información necesaria. Cuando hay integraciones con CRM u otras herramientas, el plazo habitual está entre 5 y 10 días.", "It depends on the plan and project complexity. In simple cases (Basic Plan), we usually have an assistant running within 24–72 hours once we have the required information. When CRM or other integrations are involved, the usual timeline is 5 to 10 days.");
  E("Se integra con WhatsApp, web y CRM?", "¿Se integra con WhatsApp, web y CRM?", "Does it integrate with WhatsApp, web and CRM?");
  E("Si. Podemos desplegar el asistente en tu web (widget de chat), en WhatsApp Business y en otros canales de mensajeria. Tambien podemos conectarlo con CRMs habituales para registrar contactos, oportunidades o citas. En la primera reunion revisamos que herramientas usas ahora y te proponemos la mejor forma de integrarlo.", "Sí. Podemos desplegar el asistente en tu web (widget de chat), en WhatsApp Business y en otros canales de mensajería. También podemos conectarlo con CRMs habituales para registrar contactos, oportunidades o citas. En la primera reunión revisamos qué herramientas usas ahora y te proponemos la mejor forma de integrarlo.", "Yes. We can deploy the assistant on your website (chat widget), WhatsApp Business and other messaging channels. We can also connect it with common CRMs to register contacts, opportunities or appointments. In the first meeting we review the tools you currently use and propose the best integration path.");
  E("Como sabemos si el asistente esta funcionando bien?", "¿Cómo sabemos si el asistente está funcionando bien?", "How do we know if the assistant is working well?");
  E("Antes de arrancar definimos contigo que quieres conseguir: ahorrar tiempo, atender mas consultas, generar mas oportunidades, etc. Despues medimos indicadores claros como: numero de conversaciones atendidas, tiempo estimado ahorrado al equipo, oportunidades o citas generadas. En los planes Profesional y Avanzado revisamos estos datos contigo de forma periodica y ajustamos el asistente segun los resultados.", "Antes de arrancar definimos contigo qué quieres conseguir: ahorrar tiempo, atender más consultas, generar más oportunidades, etc. Después medimos indicadores claros como: número de conversaciones atendidas, tiempo estimado ahorrado al equipo, oportunidades o citas generadas. En los planes Profesional y Avanzado revisamos estos datos contigo de forma periódica y ajustamos el asistente según los resultados.", "Before launch we define what you want to achieve: save time, handle more inquiries, generate more opportunities, etc. Then we measure clear indicators such as conversations handled, estimated time saved, opportunities or appointments generated. In Professional and Advanced plans we review these data with you periodically and adjust the assistant based on results.");
  E("Antes de arrancar definimos contigo que quieres conseguir: ahorrar tiempo, atender mas consultas, generar mas oportunidades, etc. Despues medimos indicadores claros como: numero de conversaciones atendidas, tiempo estimado ahorrado al equipo, oportunidades o citas generadas. En los planes Profesional e Integral revisamos estos datos contigo de forma periodica y ajustamos el asistente segun los resultados.", "Antes de arrancar definimos contigo qué quieres conseguir: ahorrar tiempo, atender más consultas, generar más oportunidades, etc. Después medimos indicadores claros como: número de conversaciones atendidas, tiempo estimado ahorrado al equipo, oportunidades o citas generadas. En los planes Profesional e Integral revisamos estos datos contigo de forma periódica y ajustamos el asistente según los resultados.", "Before launch we define what you want to achieve: save time, handle more inquiries, generate more opportunities, etc. Then we measure clear indicators such as conversations handled, estimated time saved, opportunities or appointments generated. In Professional and Full plans we review these data with you periodically and adjust the assistant based on results.");
  E("Que canales soporta?", "¿Qué canales soporta?", "Which channels are supported?");
  E("Podemos trabajar, entre otros, con: widget web, WhatsApp Business API, Instagram DM, Facebook Messenger, Telegram, email.", "Podemos trabajar, entre otros, con: widget web, WhatsApp Business API, Instagram DM, Facebook Messenger, Telegram, email.", "We can work with channels such as: web widget, WhatsApp Business API, Instagram DM, Facebook Messenger, Telegram and email.");
  E("Como entrenais al asistente con mi contenido?", "¿Cómo entrenáis al asistente con mi contenido?", "How do you train the assistant with my content?");
  E("Partimos de tu propia informacion: web, documentos, PDFs, tarifas, procesos internos y preguntas frecuentes. Con todo ello creamos y estructuramos la base de conocimiento del asistente, la revisamos contigo y hacemos pruebas internas antes de pasarlo a produccion.", "Partimos de tu propia información: web, documentos, PDFs, tarifas, procesos internos y preguntas frecuentes. Con todo ello creamos y estructuramos la base de conocimiento del asistente, la revisamos contigo y hacemos pruebas internas antes de pasarlo a producción.", "We start from your own information: website, documents, PDFs, pricing, internal processes and FAQs. With this we create and structure the assistant knowledge base, review it with you and run internal tests before going live.");
  E("Que pasa si aumenta el volumen?", "¿Qué pasa si aumenta el volumen?", "What happens if volume increases?");
  E("Si tu negocio crece o se anaden nuevos canales, el sistema puede escalar sin interrumpir el servicio. En caso de que el volumen de conversaciones suba de forma estable, revisamos contigo el plan contratado y te proponemos el ajuste de cuota mas adecuado al uso real.", "Si tu negocio crece o se añaden nuevos canales, el sistema puede escalar sin interrumpir el servicio. En caso de que el volumen de conversaciones suba de forma estable, revisamos contigo el plan contratado y te proponemos el ajuste de cuota más adecuado al uso real.", "If your business grows or new channels are added, the system can scale without interrupting service. If conversation volume increases steadily, we review your plan with you and propose the most appropriate fee adjustment based on real usage.");
  E("La cuota mensual incluye el desarrollo inicial del asistente?", "¿La cuota mensual incluye el desarrollo inicial del asistente?", "Does the monthly fee include initial assistant development?");
  E("No. Los planes que ves en la pagina corresponden al mantenimiento mensual del asistente: uso, soporte y mejora continua. El diseno y desarrollo inicial se presupuesta por separado, tras una primera reunion en la que analizamos tu caso, tus canales y los procesos que quieres automatizar.", "No. Los planes que ves en la página corresponden al mantenimiento mensual del asistente: uso, soporte y mejora continua. El diseño y desarrollo inicial se presupuesta por separado, tras una primera reunión en la que analizamos tu caso, tus canales y los procesos que quieres automatizar.", "No. The plans shown on the page correspond to monthly assistant maintenance: usage, support and continuous improvement. Initial design and development are quoted separately after a first meeting where we analyze your case, channels and the processes you want to automate.");
  E("Que necesito tener preparado antes de empezar?", "¿Qué necesito tener preparado antes de empezar?", "What do I need to prepare before starting?");
  E("No hace falta tenerlo todo perfecto. Con que tengas claro: tu tipo de negocio, por donde te contactan los clientes (telefono, WhatsApp, web…), y que tareas o preguntas te gustaria automatizar, es suficiente para una primera reunion. A partir de ahi te ayudamos a ordenar la informacion y definir el alcance del asistente.", "No hace falta tenerlo todo perfecto. Con que tengas claro: tu tipo de negocio, por dónde te contactan los clientes (teléfono, WhatsApp, web…), y qué tareas o preguntas te gustaría automatizar, es suficiente para una primera reunión. A partir de ahí te ayudamos a ordenar la información y definir el alcance del asistente.", "You do not need everything to be perfect. If you are clear on your business type, how customers contact you (phone, WhatsApp, web...) and which tasks or questions you would like to automate, that is enough for a first meeting. From there we help you organize the information and define the assistant scope.");
  E("El asistente sustituye a mi equipo?", "¿El asistente sustituye a mi equipo?", "Does the assistant replace my team?");
  E("No. El objetivo no es sustituir personas, sino liberarles de las tareas repetitivas: preguntas basicas, recordatorios, cambios de cita, recogida de datos, etc. Asi tu equipo puede centrarse en las tareas de mas valor: atender casos complejos, tomar decisiones y cuidar la relacion con el cliente.", "No. El objetivo no es sustituir personas, sino liberarles de las tareas repetitivas: preguntas básicas, recordatorios, cambios de cita, recogida de datos, etc. Así tu equipo puede centrarse en las tareas de más valor: atender casos complejos, tomar decisiones y cuidar la relación con el cliente.", "No. The goal is not to replace people, but to free them from repetitive tasks: basic questions, reminders, appointment changes, data collection, etc. Your team can focus on higher-value work: handling complex cases, making decisions and caring for customer relationships.");
  E("Quien se encarga de mantener y mejorar el asistente?", "¿Quién se encarga de mantener y mejorar el asistente?", "Who maintains and improves the assistant?");
  E("Nosotros. En los planes Profesional y Avanzado revisamos periodicamente como esta funcionando el asistente, detectamos posibles mejoras y aplicamos ajustes: nuevas respuestas, cambios en flujos, incorporacion de nuevos servicios, etc. Siempre puedes pedir cambios puntuales si actualizas tarifas, servicios o tu forma de trabajar.", "Nosotros. En los planes Profesional y Avanzado revisamos periódicamente cómo está funcionando el asistente, detectamos posibles mejoras y aplicamos ajustes: nuevas respuestas, cambios en flujos, incorporación de nuevos servicios, etc. Siempre puedes pedir cambios puntuales si actualizas tarifas, servicios o tu forma de trabajar.", "We do. In Professional and Advanced plans we periodically review how the assistant is working, detect improvements and apply adjustments: new answers, workflow changes, new services, etc. You can always request specific changes if you update prices, services or the way you work.");
  E("Nosotros. En los planes Profesional e Integral revisamos periodicamente como esta funcionando el asistente, detectamos posibles mejoras y aplicamos ajustes: nuevas respuestas, cambios en flujos, incorporacion de nuevos servicios, etc. Siempre puedes pedir cambios puntuales si actualizas tarifas, servicios o tu forma de trabajar.", "Nosotros. En los planes Profesional e Integral revisamos periódicamente cómo está funcionando el asistente, detectamos posibles mejoras y aplicamos ajustes: nuevas respuestas, cambios en flujos, incorporación de nuevos servicios, etc. Siempre puedes pedir cambios puntuales si actualizas tarifas, servicios o tu forma de trabajar.", "We do. In Professional and Full plans we periodically review how the assistant is working, detect improvements and apply adjustments: new answers, workflow changes, new services, etc. You can always request specific changes if you update prices, services or the way you work.");
  E("Que pasa si despues de probarlo veo que necesito cambios?", "¿Qué pasa si después de probarlo veo que necesito cambios?", "What if I need changes after trying it?");
  E("Es normal ajustar cosas al principio. Tras la puesta en marcha hacemos una fase de seguimiento donde recogemos tu feedback y el de tu equipo. A partir de ahi refinamos mensajes, flujos y respuestas hasta que el asistente encaja con la forma de trabajar de tu negocio.", "Es normal ajustar cosas al principio. Tras la puesta en marcha hacemos una fase de seguimiento donde recogemos tu feedback y el de tu equipo. A partir de ahí refinamos mensajes, flujos y respuestas hasta que el asistente encaja con la forma de trabajar de tu negocio.", "It is normal to adjust things at the beginning. After launch we run a follow-up phase where we gather feedback from you and your team. From there we refine messages, workflows and answers until the assistant fits how your business works.");
  E("Agenda tu cita", "Agenda tu cita", "Book your call");
  E("Concretamos tu caso, procesos y objetivos. Incluye diagnostico y un roadmap inicial.", "Concretamos tu caso, procesos y objetivos. Incluye diagnóstico y un roadmap inicial.", "We define your case, processes and goals. Includes a diagnosis and an initial roadmap.");
  E("30 min", "30 min", "30 min");
  E("Sesion con NOVAIX", "Sesión con NOVAIX", "Session with NOVAIX");
  E("Videollamada. Revisamos tus casos y conectamos canales.", "Videollamada. Revisamos tus casos y conectamos canales.", "Video call. We review your use cases and connect channels.");
  E("Al reservar aceptas nuestra", "Al reservar aceptas nuestra", "By booking, you accept our");
  E("Politica de Privacidad", "Política de Privacidad", "Privacy Policy");
  E("Como podemos ayudarte?", "¿Cómo podemos ayudarte?", "How can we help you?");
  E("Soporte NOVAIX", "Soporte NOVAIX", "NOVAIX support");
  E("Agenda con NOVAIX", "Agenda con NOVAIX", "Book with NOVAIX");
  E("Cerrar calendario", "Cerrar calendario", "Close calendar");
  E("Cerrar legal", "Cerrar legal", "Close legal");
  E("Responsable:", "Responsable:", "Controller:");
  E("Daniel Molina (Nombre comercial: NOVAIX) · Email:", "Daniel Molina (Nombre comercial: NOVAIX) · Email:", "Daniel Molina (trade name: NOVAIX) · Email:");
  E("· Sitio web:", "· Sitio web:", "· Website:");
  E("Datos que recogemos:", "Datos que recogemos:", "Data we collect:");
  E("nombre y apellidos, email, empresa o proyecto (si se facilita), fecha y hora de la cita solicitada, y cualquier informacion que incluyas en formularios o al agendar. No se recogen datos especialmente protegidos.", "nombre y apellidos, email, empresa o proyecto (si se facilita), fecha y hora de la cita solicitada, y cualquier información que incluyas en formularios o al agendar. No se recogen datos especialmente protegidos.", "first and last name, email, company or project (if provided), requested appointment date and time, and any information you include in forms or when booking. No special-category data is collected.");
  E("Finalidad:", "Finalidad:", "Purpose:");
  E("gestionar solicitudes de contacto y reuniones, coordinar y confirmar citas, responder consultas comerciales e informar sobre servicios/demos de automatizacion e IA.", "gestionar solicitudes de contacto y reuniones, coordinar y confirmar citas, responder consultas comerciales e informar sobre servicios/demos de automatización e IA.", "to manage contact and meeting requests, coordinate and confirm appointments, answer commercial inquiries and provide information about automation and AI services/demos.");
  E("Base legal:", "Base legal:", "Legal basis:");
  E("consentimiento del usuario y medidas precontractuales cuando pides informacion o una reunion sobre los servicios de NOVAIX.", "consentimiento del usuario y medidas precontractuales cuando pides información o una reunión sobre los servicios de NOVAIX.", "user consent and pre-contractual measures when you request information or a meeting about NOVAIX services.");
  E("Herramientas externas:", "Herramientas externas:", "External tools:");
  E("Calendly LLC (EE.UU.) como sistema de agenda; puede conectarse con Google Calendar, email o CRM. Calendly actua como encargado de tratamiento y usa Clausulas Contractuales Tipo (SCC). Politica:", "Calendly LLC (EE. UU.) como sistema de agenda; puede conectarse con Google Calendar, email o CRM. Calendly actúa como encargado de tratamiento y usa Cláusulas Contractuales Tipo (SCC). Política:", "Calendly LLC (USA) as a scheduling system; it may connect with Google Calendar, email or CRM. Calendly acts as a processor and uses Standard Contractual Clauses (SCC). Policy:");
  E("Transferencias internacionales:", "Transferencias internacionales:", "International transfers:");
  E("al usar Calendly los datos pueden alojarse en EE.UU. bajo SCC aprobadas por la Comision Europea.", "al usar Calendly los datos pueden alojarse en EE. UU. bajo SCC aprobadas por la Comisión Europea.", "when using Calendly, data may be hosted in the USA under SCCs approved by the European Commission.");
  E("Conservacion:", "Conservación:", "Retention:");
  E("mientras exista relacion comercial/contacto o hasta que solicites la supresion. Luego se eliminaran de forma segura.", "mientras exista relación comercial/contacto o hasta que solicites la supresión. Luego se eliminarán de forma segura.", "while there is a commercial/contact relationship or until you request deletion. Afterwards, data will be securely deleted.");
  E("Destinatarios:", "Destinatarios:", "Recipients:");
  E("no cedemos datos a terceros salvo obligacion legal o proveedores tecnologicos necesarios (agenda, correo, etc.).", "no cedemos datos a terceros salvo obligación legal o proveedores tecnológicos necesarios (agenda, correo, etc.).", "we do not share data with third parties except under legal obligation or with necessary technology providers (scheduling, email, etc.).");
  E("Derechos:", "Derechos:", "Rights:");
  E("acceso, rectificacion, supresion, oposicion, limitacion y portabilidad. Escribenos a", "acceso, rectificación, supresión, oposición, limitación y portabilidad. Escríbenos a", "access, rectification, deletion, objection, restriction and portability. Write to us at");
  E("indicando el derecho que quieres ejercer.", "indicando el derecho que quieres ejercer.", "indicating the right you want to exercise.");
  E("Marco normativo:", "Marco normativo:", "Regulatory framework:");
  E("tratamos la informacion conforme al Reglamento General de Proteccion de Datos (RGPD) y la Ley Organica 3/2018 de Proteccion de Datos Personales y garantia de los derechos digitales (LOPD-GDD), dentro del alcance real de los servicios contratados.", "tratamos la información conforme al Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD), dentro del alcance real de los servicios contratados.", "we process information in accordance with the General Data Protection Regulation (GDPR) and Spanish Organic Law 3/2018 on Personal Data Protection and digital rights (LOPD-GDD), within the real scope of the contracted services.");
  E("Medidas de seguridad:", "Medidas de seguridad:", "Security measures:");
  E("aplicamos medidas tecnicas y organizativas proporcionales al riesgo, como control de accesos, minimizacion de datos, revision de proveedores, cifrado en transito cuando el servicio lo permite y buenas practicas de confidencialidad e integridad.", "aplicamos medidas técnicas y organizativas proporcionales al riesgo, como control de accesos, minimización de datos, revisión de proveedores, cifrado en tránsito cuando el servicio lo permite y buenas prácticas de confidencialidad e integridad.", "we apply technical and organizational measures proportional to risk, such as access control, data minimization, provider review, encryption in transit when supported by the service, and good confidentiality and integrity practices.");
  E("IA y datos del cliente:", "IA y datos del cliente:", "AI and client data:");
  E("los datos facilitados para analizar una solicitud, preparar una demo o configurar un agente se usan solo para la finalidad acordada. No se utilizan para entrenar modelos publicos sin autorizacion expresa.", "los datos facilitados para analizar una solicitud, preparar una demo o configurar un agente se usan solo para la finalidad acordada. No se utilizan para entrenar modelos públicos sin autorización expresa.", "data provided to analyze a request, prepare a demo or configure an agent are used only for the agreed purpose. They are not used to train public models without express authorization.");
  E("Cambios:", "Cambios:", "Changes:");
  E("podremos actualizar esta politica para reflejar cambios legales o de servicio. La version vigente estara siempre aqui.", "podremos actualizar esta política para reflejar cambios legales o de servicio. La versión vigente estará siempre aquí.", "we may update this policy to reflect legal or service changes. The current version will always be available here.");
  E("Aceptacion:", "Aceptación:", "Acceptance:");
  E("usar la web o agendar una cita implica la aceptacion de esta Politica de Privacidad.", "usar la web o agendar una cita implica la aceptación de esta Política de Privacidad.", "using the website or booking a call implies acceptance of this Privacy Policy.");
  E("Aviso Legal", "Aviso Legal", "Legal Notice");
  E("Identidad:", "Identidad:", "Identity:");
  E("NOVAIX (Daniel Molina). Contacto:", "NOVAIX (Daniel Molina). Contacto:", "NOVAIX (Daniel Molina). Contact:");
  E("Objeto:", "Objeto:", "Purpose:");
  E("informar sobre servicios de automatizacion e IA conversacional. El uso del sitio implica la aceptacion de este aviso.", "informar sobre servicios de automatización e IA conversacional. El uso del sitio implica la aceptación de este aviso.", "to provide information about automation and conversational AI services. Use of the site implies acceptance of this notice.");
  E("Propiedad intelectual:", "Propiedad intelectual:", "Intellectual property:");
  E("los contenidos, textos, imagenes y elementos graficos son titularidad de NOVAIX o con licencia. No esta permitida su reproduccion sin autorizacion.", "los contenidos, textos, imágenes y elementos gráficos son titularidad de NOVAIX o con licencia. No está permitida su reproducción sin autorización.", "content, texts, images and graphic elements are owned by NOVAIX or licensed. Reproduction without authorization is not permitted.");
  E("Limitacion de responsabilidad:", "Limitación de responsabilidad:", "Limitation of liability:");
  E("NOVAIX no garantiza la ausencia de errores ni se responsabiliza de danos derivados del uso de la informacion.", "NOVAIX no garantiza la ausencia de errores ni se responsabiliza de daños derivados del uso de la información.", "NOVAIX does not guarantee the absence of errors and is not responsible for damages arising from the use of the information.");
  E("Politica de Cookies", "Política de Cookies", "Cookie Policy");
  E("Usamos cookies tecnicas necesarias para el funcionamiento. Tambien podemos cargar servicios externos como Calendly y analitica mediante Google Tag Manager tras tu consentimiento. No usamos cookies publicitarias propias.", "Usamos cookies técnicas necesarias para el funcionamiento. También podemos cargar servicios externos como Calendly y analítica mediante Google Tag Manager tras tu consentimiento. No usamos cookies publicitarias propias.", "We use technical cookies required for operation. We may also load external services such as Calendly and analytics through Google Tag Manager after your consent. We do not use our own advertising cookies.");
  E("Usamos Calendly y analitica (GTM) para mejorar la experiencia.", "Usamos Calendly y analítica (GTM) para mejorar la experiencia.", "We use Calendly and analytics (GTM) to improve the experience.");
  E("Ver politica de cookies", "Ver política de cookies", "View cookie policy");
  E("Aceptar", "Aceptar", "Accept");
  E("Rechazar", "Rechazar", "Reject");
  E("Abrir chat IA NOVAIX", "Abrir chat IA NOVAIX", "Open NOVAIX AI chat");
  E("Chat IA NOVAIX", "Chat IA NOVAIX", "NOVAIX AI chat");
  E("Maximizar chat", "Maximizar chat", "Maximize chat");
  E("IA privada", "IA privada", "Private AI");
  E("NOVAIX Chat", "NOVAIX Chat", "NOVAIX Chat");
  E("Consulta agentes, integraciones, seguridad y RGPD.", "Consulta agentes, integraciones, seguridad y RGPD.", "Ask about agents, integrations, security and GDPR.");
  E("Hola, soy NOVAIX. Puedo ayudarte con agentes de IA, integraciones, seguridad y RGPD.", "Hola, soy NOVAIX. Puedo ayudarte con agentes de IA, integraciones, seguridad y RGPD.", "Hi, I'm NOVAIX. I can help you with AI agents, integrations, security and GDPR.");
  E("Temas rapidos", "Temas rápidos", "Quick topics");
  E("Desliza para ver mas", "Desliza para ver más", "Swipe to see more");
  E("Que es un agente de IA y como ayuda a mi negocio?", "¿Qué es un agente de IA y cómo ayuda a mi negocio?", "What is an AI agent and how can it help my business?");
  E("Cumplis con RGPD, LOPD-GDD y alojamiento en la UE?", "¿Cumplís con RGPD, LOPD-GDD y alojamiento en la UE?", "Do you comply with GDPR, LOPD-GDD and EU hosting?");
  E("Como integras el asistente con mi CRM o WhatsApp?", "¿Cómo integras el asistente con mi CRM o WhatsApp?", "How do you integrate the assistant with my CRM or WhatsApp?");
  E("Dame ejemplos de como un agente de IA mejora ventas y soporte.", "Dame ejemplos de cómo un agente de IA mejora ventas y soporte.", "Give me examples of how an AI agent improves sales and support.");
  E("Agentes IA", "Agentes IA", "AI agents");
  E("RGPD y seguridad", "RGPD y seguridad", "GDPR and security");
  E("CRM y WhatsApp", "CRM y WhatsApp", "CRM and WhatsApp");
  E("Casos de uso", "Casos de uso", "Use cases");
  E("Escribe tu mensaje...", "Escribe tu mensaje...", "Write your message...");
  E("Enviar", "Enviar", "Send");
  E("Listo para responder", "Listo para responder", "Ready to answer");
  E("La IA esta escribiendo", "La IA está escribiendo", "AI is typing");
  E("La IA esta pensando...", "La IA está pensando...", "AI is thinking...");
  E("No he recibido respuesta de la IA. Intenta de nuevo.", "No he recibido respuesta de la IA. Intenta de nuevo.", "I did not receive a response from the AI. Please try again.");
  E("No he podido conectar con el asistente. Revisa la URL del webhook en n8n.", "No he podido conectar con el asistente. Revisa la URL del webhook en n8n.", "I could not connect to the assistant. Please check the webhook URL in n8n.");
  E("Error de conexion", "Error de conexión", "Connection error");
  E("NOVAIX. Todos los derechos reservados.", "NOVAIX. Todos los derechos reservados.", "NOVAIX. All rights reserved.");
  E("Seguridad y RGPD", "Seguridad y RGPD", "Security and GDPR");
  E("Soporte omnicanal", "Soporte omnicanal", "Omnichannel support");
  E("Agenda y citas", "Agenda y citas", "Scheduling and appointments");
  E("CRM y operaciones", "CRM y operaciones", "CRM and operations");
  E("Resenas y reputacion", "Reseñas y reputación", "Reviews and reputation");
  E("Leads y ventas", "Leads y ventas", "Leads and sales");
  E("Contenido y redes", "Contenido y redes", "Content and social media");
  E("Informes y KPIs", "Informes y KPIs", "Reports and KPIs");
  E("Cobros y pagos", "Cobros y pagos", "Collections and payments");
  E("Director de Operaciones IA", "Director de Operaciones IA", "AI Operations Director");
  E("Control de acceso y roles.", "Control de acceso y roles.", "Access control and roles.");
  E("Trazabilidad y auditoria.", "Trazabilidad y auditoría.", "Traceability and audit.");
  E("Minimiza datos y aplica buenas practicas.", "Minimiza datos y aplica buenas prácticas.", "Minimizes data and applies best practices.");
  E("Validando permisos y politicas...", "Validando permisos y políticas...", "Validating permissions and policies...");
  E("Canal aislado por rol + tenant.", "Canal aislado por rol + tenant.", "Channel isolated by role + tenant.");
  E("Auditoria lista (eventos criticos).", "Auditoría lista (eventos críticos).", "Audit ready (critical events).");
  E("Filtra y califica consultas.", "Filtra y califica consultas.", "Filters and qualifies inquiries.");
  E("Escala a humano con historial.", "Escala a humano con historial.", "Escalates to a human with history.");
  E("Registra datos en CRM.", "Registra datos en CRM.", "Logs data in CRM.");
  E("Ruteando consultas por intencion...", "Ruteando consultas por intención...", "Routing inquiries by intent...");
  E("Contexto + historial anexado.", "Contexto + historial anexado.", "Context + history attached.");
  E("Registro en CRM sincronizado.", "Registro en CRM sincronizado.", "CRM record synchronized.");
  E("Reprogramacion inteligente.", "Reprogramación inteligente.", "Smart rescheduling.");
  E("Sincroniza calendarios.", "Sincroniza calendarios.", "Syncs calendars.");
  E("Evita ausencias con avisos.", "Evita ausencias con avisos.", "Prevents no-shows with reminders.");
  E("Slot-check en tiempo real...", "Comprobación de huecos en tiempo real...", "Real-time slot check...");
  E("Confirmacion enviada al cliente.", "Confirmación enviada al cliente.", "Confirmation sent to the customer.");
  E("Recordatorio + reprogramacion activa.", "Recordatorio + reprogramación activa.", "Reminder + active rescheduling.");
  E("Actualiza contactos y tareas.", "Actualiza contactos y tareas.", "Updates contacts and tasks.");
  E("Gestiona estados y etiquetas.", "Gestiona estados y etiquetas.", "Manages statuses and tags.");
  E("Organiza historial con notas claras.", "Organiza historial con notas claras.", "Organizes history with clear notes.");
  E("Actualizando pipeline y etiquetas...", "Actualizando pipeline y etiquetas...", "Updating pipeline and tags...");
  E("Normalizacion de campos aplicada.", "Normalización de campos aplicada.", "Field normalization applied.");
  E("Back-office alineado con n8n.", "Back-office alineado con n8n.", "Back-office aligned with n8n.");
  E("Solicita y gestiona resenas.", "Solicita y gestiona reseñas.", "Requests and manages reviews.");
  E("Detecta incidencias.", "Detecta incidencias.", "Detects incidents.");
  E("Mejora valoraciones con seguimiento.", "Mejora valoraciones con seguimiento.", "Improves ratings with follow-up.");
  E("Detectando sentimiento y urgencia...", "Detectando sentimiento y urgencia...", "Detecting sentiment and urgency...");
  E("Plantillas de respuesta por tono de marca.", "Plantillas de respuesta por tono de marca.", "Response templates by brand voice.");
  E("Flujo de recuperacion activado.", "Flujo de recuperación activado.", "Recovery workflow activated.");
  E("Cualificacion automatica con scoring.", "Cualificación automática con scoring.", "Automatic qualification with scoring.");
  E("Seguimiento de prospectos.", "Seguimiento de prospectos.", "Prospect follow-up.");
  E("Resumen listo para CRM.", "Resumen listo para CRM.", "CRM-ready summary.");
  E("Scoring aplicado (fit + intencion).", "Scoring aplicado (fit + intención).", "Scoring applied (fit + intent).");
  E("Lead enriquecido y priorizado.", "Lead enriquecido y priorizado.", "Lead enriched and prioritized.");
  E("Resumen comercial generado.", "Resumen comercial generado.", "Commercial summary generated.");
  E("Genera copys y piezas reutilizables.", "Genera copys y piezas reutilizables.", "Generates copy and reusable assets.");
  E("Publica en horario optimo.", "Publica en horario óptimo.", "Publishes at the optimal time.");
  E("Reusa formatos segun canal.", "Reusa formatos según canal.", "Reuses formats by channel.");
  E("Calendarizacion detectada...", "Calendarización detectada...", "Scheduling detected...");
  E("Creatividades adaptadas a canal.", "Creatividades adaptadas a canal.", "Creatives adapted by channel.");
  E("Publicacion programada.", "Publicación programada.", "Publication scheduled.");
  E("Reporte semanal automatico.", "Reporte semanal automático.", "Automatic weekly report.");
  E("Alertas por caidas.", "Alertas por caídas.", "Drop alerts.");
  E("Recomendaciones accionables.", "Recomendaciones accionables.", "Actionable recommendations.");
  E("KPIs agregados (semana actual).", "KPIs agregados (semana actual).", "KPIs aggregated (current week).");
  E("Anomalias detectadas.", "Anomalías detectadas.", "Anomalies detected.");
  E("Recomendacion priorizada.", "Recomendación priorizada.", "Prioritized recommendation.");
  E("Recordatorios automaticos.", "Recordatorios automáticos.", "Automatic reminders.");
  E("Enlaces de pago rapidos.", "Enlaces de pago rápidos.", "Fast payment links.");
  E("Seguimiento por estado.", "Seguimiento por estado.", "Status-based follow-up.");
  E("Enlace de pago generado.", "Enlace de pago generado.", "Payment link generated.");
  E("Recordatorio programado.", "Recordatorio programado.", "Reminder scheduled.");
  E("Estado conciliado en back-office.", "Estado conciliado en back-office.", "Status reconciled in back-office.");
  E("Integra canales y herramientas clave.", "Integra canales y herramientas clave.", "Integrates key channels and tools.");
  E("Orquesta procesos end-to-end con reglas.", "Orquesta procesos end-to-end con reglas.", "Orchestrates end-to-end processes with rules.");
  E("Sincroniza CRM y calendarios en vivo.", "Sincroniza CRM y calendarios en vivo.", "Syncs CRM and calendars live.");
  E("Supervisa ejecucion con reporting.", "Supervisa ejecución con reporting.", "Monitors execution with reporting.");
  E("Orquestacion activada (canales + n8n)...", "Orquestación activada (canales + n8n)...", "Orchestration activated (channels + n8n)...");
  E("Enrutado inteligente por prioridad.", "Enrutado inteligente por prioridad.", "Smart routing by priority.");
  E("Observabilidad + reporting listo.", "Observabilidad + reporting listo.", "Observability + reporting ready.");

  const normalize = (value) => String(value || "").replace(/\s+/g, " ").trim();
  const lookup = new Map();
  const keyLookup = new Map();
  const indexEntry = (entry) => {
    if (entry.key) keyLookup.set(entry.key, entry);
    [entry.source, entry.es, entry.en].forEach((value) => {
      const key = normalize(value);
      if (key) lookup.set(key, entry);
    });
  };
  const nextExternalKey = () => makeKey("extra", ++externalCounter);
  const registerTranslations = (items = []) => {
    items.forEach((item) => {
      const entry = Array.isArray(item)
        ? { source: item[0], es: item[2] || item[0], en: item[1] || item[0], key: item[3] }
        : { source: item.source, es: item.es || item.source, en: item.en || item.source, key: item.key };
      if (!entry.source) return;
      if (!entry.key) entry.key = nextExternalKey();
      entries.push(entry);
      indexEntry(entry);
    });
    if (document.body && currentLanguage && !isApplying) {
      setLanguage(currentLanguage, { skipStorage: true });
    }
  };
  entries.forEach(indexEntry);

  let currentLanguage = "es";
  let observer = null;
  let isApplying = false;
  const translatableAttrs = ["aria-label", "aria-roledescription", "data-hover", "data-prompt", "placeholder", "alt", "title", "content"];

  function translateString(value, lang = currentLanguage) {
    const entry = lookup.get(normalize(value));
    return entry ? entry[lang] : value;
  }

  function translateKey(key, lang = currentLanguage) {
    const entry = keyLookup.get(key);
    return entry ? entry[lang] : null;
  }

  function preserveWhitespace(original, translated) {
    const start = original.match(/^\s*/)?.[0] || "";
    const end = original.match(/\s*$/)?.[0] || "";
    return `${start}${translated}${end}`;
  }

  function translateTextNode(node, lang) {
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const original = node.nodeValue || "";
    const normalized = normalize(original);
    if (!normalized) return;
    const translated = translateString(normalized, lang);
    if (translated !== normalized) node.nodeValue = preserveWhitespace(original, translated);
  }

  function setElementText(el, translated) {
    const directTextNodes = Array.from(el.childNodes || []).filter((node) => node.nodeType === Node.TEXT_NODE);
    const target = directTextNodes.find((node) => normalize(node.nodeValue));
    if (target) {
      target.nodeValue = preserveWhitespace(target.nodeValue || "", translated);
      return true;
    }
    if (!el.children || el.children.length === 0) {
      el.textContent = translated;
      return true;
    }
    return false;
  }

  function translateKeyedElement(el, lang) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
    let applied = false;
    const textKey = el.getAttribute("data-i18n");
    if (textKey) {
      const translated = translateKey(textKey, lang);
      if (translated !== null) applied = setElementText(el, translated) || applied;
    }
    Array.from(el.attributes || []).forEach((attr) => {
      if (!attr.name.startsWith("data-i18n-attr-")) return;
      const targetAttr = attr.name.slice("data-i18n-attr-".length);
      const translated = translateKey(attr.value, lang);
      if (translated !== null) {
        el.setAttribute(targetAttr, translated);
        applied = true;
      }
    });
    return applied;
  }

  function translateAttributes(el, lang) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return;
    translateKeyedElement(el, lang);
    translatableAttrs.forEach((attr) => {
      if (!el.hasAttribute(attr)) return;
      const original = el.getAttribute(attr);
      const translated = translateString(original, lang);
      if (translated !== original) el.setAttribute(attr, translated);
    });
  }

  function shouldSkipNode(node) {
    if (!node || node.nodeType !== Node.ELEMENT_NODE) return false;
    return ["SCRIPT", "STYLE", "NOSCRIPT", "SVG", "CANVAS"].includes(node.tagName);
  }

  function translateNode(node, lang) {
    if (!node) return;
    if (node.nodeType === Node.TEXT_NODE) {
      translateTextNode(node, lang);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE || shouldSkipNode(node)) return;
    translateAttributes(node, lang);
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
      acceptNode(current) {
        if (current.nodeType === Node.ELEMENT_NODE && shouldSkipNode(current)) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    let current = walker.currentNode;
    while (current) {
      if (current.nodeType === Node.ELEMENT_NODE) translateAttributes(current, lang);
      else translateTextNode(current, lang);
      current = walker.nextNode();
    }
  }

  function translateHead(lang) {
    document.documentElement.lang = lang;
    const title = document.querySelector("title");
    if (title && title.hasAttribute("data-i18n")) {
      translateKeyedElement(title, lang);
    } else {
      document.title = translateString(document.title, lang);
    }
    document.querySelectorAll("meta[content]").forEach((meta) => translateAttributes(meta, lang));
  }

  function setLanguage(lang, options = {}) {
    if (!supportedLanguages.has(lang)) lang = "es";
    currentLanguage = lang;
    isApplying = true;
    translateHead(lang);
    translateNode(document.body, lang);
    const select = document.getElementById("language-select");
    if (select && select.value !== lang) select.value = lang;
    if (!options.skipStorage) localStorage.setItem(STORAGE_KEY, lang);
    isApplying = false;
    window.dispatchEvent(new CustomEvent("novaix:languagechange", { detail: { lang } }));
  }

  function getInitialLanguage() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("lang");
    if (supportedLanguages.has(fromUrl)) return fromUrl;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (supportedLanguages.has(stored)) return stored;
    return (navigator.language || "").toLowerCase().startsWith("en") ? "en" : "es";
  }

  function bindSelector() {
    const select = document.getElementById("language-select");
    if (!select) return;
    select.value = currentLanguage;
    if (select.dataset.novaixLangBound === "true") return;
    select.dataset.novaixLangBound = "true";
    select.addEventListener("change", () => {
      const nextLang = supportedLanguages.has(select.value) ? select.value : "es";
      localStorage.setItem(STORAGE_KEY, nextLang);

      const url = new URL(window.location.href);
      const currentUrlLang = url.searchParams.get("lang");
      url.searchParams.set("lang", nextLang);

      if (currentUrlLang !== nextLang) {
        window.location.assign(url.toString());
        return;
      }

      setLanguage(nextLang);
    });
  }

  function startObserver() {
    if (observer || !document.body) return;
    observer = new MutationObserver((mutations) => {
      if (isApplying) return;
      isApplying = true;
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => translateNode(node, currentLanguage));
          bindSelector();
        } else if (mutation.type === "characterData") {
          translateTextNode(mutation.target, currentLanguage);
        } else if (mutation.type === "attributes") {
          translateAttributes(mutation.target, currentLanguage);
        }
      });
      isApplying = false;
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: translatableAttrs
    });
  }

  function init() {
    currentLanguage = getInitialLanguage();
    bindSelector();
    setLanguage(currentLanguage, { skipStorage: true });
    startObserver();
  }

  window.novaixT = translateString;
  window.novaixTranslateKey = translateKey;
  window.novaixGetLanguage = () => currentLanguage;
  window.novaixSetLanguage = setLanguage;
  window.novaixTranslateNode = translateNode;
  window.novaixRegisterTranslations = registerTranslations;
  window.novaixGetTranslations = () => entries.map((entry) => ({ ...entry }));
  if (Array.isArray(window.novaixExtraTranslations)) {
    registerTranslations(window.novaixExtraTranslations);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
