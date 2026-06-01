(() => {
  const translations = [];
  const keyFor = (source) => {
    let hash = 5381;
    String(source || "").split("").forEach((char) => {
      hash = ((hash << 5) + hash) ^ char.charCodeAt(0);
    });
    return `landing.${(hash >>> 0).toString(36)}`;
  };
  const T = (source, en, key) => {
    translations.push({
      key: key || keyFor(source),
      source,
      es: source,
      en
    });
  };

  T(`Landing de NOVAIX para centros de belleza: reservas, bonos, tratamientos, recordatorios y seguimiento por WhatsApp.`, `NOVAIX landing page for beauty centers: bookings, gift vouchers, treatments, reminders and WhatsApp follow-up.`);
  T(`NOVAIX Centros de Belleza · Recepción IA 24/7`, `NOVAIX Beauty Centers · 24/7 AI Reception`);
  T(`Automatiza reservas, bonos, consultas y recordatorios para centros de belleza.`, `Automate bookings, gift vouchers, inquiries and reminders for beauty centers.`);
  T(`Centros de belleza`, `Beauty centers`);
  T(`IA para centros de belleza`, `AI for beauty centers`);
  T(`Recepción IA 24/7 para centros de belleza que no pueden perder reservas`, `24/7 AI reception for beauty centers that cannot afford to miss bookings`);
  T(`NOVAIX atiende WhatsApp, llamadas, formularios e Instagram, agenda tratamientos, vende bonos, resuelve dudas frecuentes y reactiva clientas indecisas con mensajes aprobados por tu centro.`, `NOVAIX handles WhatsApp, calls, forms and Instagram, books treatments, sells gift vouchers, answers FAQs and reactivates undecided clients with messages approved by your center.`);
  T(`primera respuesta a nuevas clientas`, `first response to new clients`);
  T(`reservas, bonos y recordatorios`, `bookings, gift vouchers and reminders`);
  T(`Beauty Flow AI`, `Beauty Flow AI`);
  T(`consultas atendidas hoy`, `inquiries handled today`);
  T(`reservas creadas`, `bookings created`);
  T(`dudas resueltas sin espera`, `questions answered without waiting`);
  T(`Reserva tratamiento`, `Book treatment`);
  T(`Bono regalo`, `Gift voucher`);
  T(`Consulta de precios`, `Price inquiry`);
  T(`Cliente`, `Client`);
  T(`Hola, quería reservar manicura semipermanente y cejas.`, `Hi, I would like to book semi-permanent manicure and brows.`);
  T(`Claro. Tengo miércoles 17:00 o viernes 12:30. La cita combinada dura aprox. 75 min.`, `Sure. I have Wednesday at 17:00 or Friday at 12:30. The combined appointment lasts about 75 minutes.`);
  T(`Viernes perfecto.`, `Friday is perfect.`);
  T(`Reservado. Te envío ubicación, preparación y recordatorio 24 h antes.`, `Booked. I will send you the location, preparation notes and a reminder 24 hours before.`);
  T(`Tenéis bonos regalo para masaje o facial?`, `Do you have gift vouchers for massage or facial treatments?`);
  T(`Sí. Hay bonos por importe o por tratamiento. Puedo pasarte opciones aprobadas y preparar recogida o envío.`, `Yes. There are vouchers by amount or by treatment. I can send approved options and prepare pickup or delivery.`);
  T(`Quiero uno de 60 euros.`, `I want one for 60 euros.`);
  T(`Perfecto. Te envío enlace de pago y el bono listo para enviar o recoger en el centro.`, `Perfect. I will send the payment link and prepare the voucher for delivery or pickup at the center.`);
  T(`Cuánto cuesta limpieza facial? Hay promoción?`, `How much is a facial cleansing? Is there a promotion?`);
  T(`Tenemos opciones según tipo de piel y duración. Te puedo pasar rangos o reservar una valoración express.`, `We have options depending on skin type and duration. I can send price ranges or book an express assessment.`);
  T(`Mejor valoración.`, `Assessment is better.`);
  T(`Tengo hueco hoy 18:00 o mañana 11:30. Te lo dejo pre-reservado?`, `I have today at 18:00 or tomorrow at 11:30. Shall I pre-book it for you?`);
  T(`Sistema comercial y operativo`, `Commercial and operational system`);
  T(`Una recepción que convierte interés en reservas, bonos y recurrencia`, `A reception system that turns interest into bookings, vouchers and repeat visits`);
  T(`En centros de belleza, contestar rápido y recordar citas protege agenda, margen y experiencia.`, `In beauty centers, fast replies and appointment reminders protect the schedule, margins and experience.`);
  T(`Atención inmediata`, `Immediate attention`);
  T(`Responde disponibilidad, precios orientativos, ubicación, bonos y preparación por WhatsApp o Instagram.`, `Answers availability, indicative prices, location, vouchers and preparation by WhatsApp or Instagram.`);
  T(`Reservas por tratamiento`, `Treatment-based bookings`);
  T(`Agenda manicura, cejas, facial, masaje, depilacion o packs según duración y profesional.`, `Books manicures, brows, facials, massage, waxing or packages by duration and professional.`);
  T(`Bonos y packs`, `Vouchers and packages`);
  T(`Detecta compras de bonos regalo, packs y promociones aprobadas por el centro.`, `Detects purchases of gift vouchers, packages and center-approved promotions.`);
  T(`Recordatorios`, `Reminders`);
  T(`Reduce ausencias con confirmaciones, preparación y reprogramación ordenada.`, `Reduces no-shows with confirmations, preparation notes and orderly rescheduling.`);
  T(`Reactivación`, `Reactivation`);
  T(`Recupera clientas que pidieron precio, no reservaron o llevan tiempo sin volver.`, `Recovers clients who asked for prices, did not book or have not returned for a while.`);
  T(`Límites claros`, `Clear limits`);
  T(`Deriva alergias, contraindicaciones o dudas sensibles al equipo profesional.`, `Routes allergies, contraindications or sensitive questions to the professional team.`);
  T(`Del mensaje a la reserva confirmada, cuidando la experiencia`, `From message to confirmed booking while caring for the experience`);
  T(`La IA pregunta lo necesario para proponer el tratamiento correcto y derivar lo sensible.`, `AI asks only what is needed to suggest the right treatment and escalate sensitive cases.`);
  T(`Identifica interés`, `Identifies interest`);
  T(`Tratamiento, zona, duración, preferencia de horario y si es primera visita.`, `Treatment, area, duration, preferred time and whether it is a first visit.`);
  T(`Propone huecos`, `Suggests slots`);
  T(`Aplica reglas por profesional, cabina, duración y preparación.`, `Applies rules by professional, room, duration and preparation.`);
  T(`Confirma y recuerda`, `Confirms and reminds`);
  T(`Envía ubicación, preparación, política de cambios y recordatorio.`, `Sends location, preparation, change policy and reminder.`);
  T(`Reactiva oportunidades`, `Reactivates opportunities`);
  T(`Hace seguimiento a consultas de precio, bonos y tratamientos no reservados.`, `Follows up on price inquiries, vouchers and unbooked treatments.`);
  T(`Centro de belleza con cabina de tratamiento`, `Beauty center with treatment room`);
  T(`reservas, bonos y seguimiento`, `bookings, vouchers and follow-up`);
  T(`Cuánto tiempo consume responder y reprogramar?`, `How much time is spent answering and rescheduling?`);
  T(`Estima el impacto de automatizar reservas, bonos, consultas frecuentes y recordatorios.`, `Estimate the impact of automating bookings, vouchers, frequent inquiries and reminders.`);
  T(`Consultas automatizables`, `Automatable inquiries`);
  T(`NOVAIX responde con textos aprobados y deriva cualquier duda sensible al equipo.`, `NOVAIX replies with approved texts and routes any sensitive question to the team.`);
  T(`Un piloto para agenda, bonos y recurrencia`, `A pilot for scheduling, vouchers and repeat visits`);
  T(`Empezamos por reservas, cambios, precios orientativos, bonos, recordatorios y reactivación.`, `We start with bookings, changes, indicative prices, vouchers, reminders and reactivation.`);
  T(`Auditoría de canales: WhatsApp, Instagram, teléfono, formularios y agenda.`, `Channel audit: WhatsApp, Instagram, phone, forms and scheduling.`);
  T(`Mapa de tratamientos, duraciones, precios orientativos, bonos y reglas de reserva.`, `Map of treatments, durations, indicative prices, vouchers and booking rules.`);
  T(`Automatización de reserva, cambio, bono, recordatorio y seguimiento.`, `Automation for booking, changes, vouchers, reminders and follow-up.`);
  T(`Panel con reservas, bonos, consultas resueltas y derivaciones.`, `Dashboard with bookings, vouchers, resolved inquiries and handoffs.`);
  T(`CRM o hoja de clientas`, `CRM or client sheet`);
  T(`Preguntas normales antes de automatizar un centro de belleza`, `Common questions before automating a beauty center`);
  T(`Puede vender bonos?`, `Can it sell vouchers?`);
  T(`Puede explicar bonos aprobados, recoger datos y enviar el enlace o derivar a recepción.`, `It can explain approved vouchers, collect data and send the link or route to reception.`);
  T(`Puede recomendar tratamientos?`, `Can it recommend treatments?`);
  T(`Puede orientar de forma informativa y reservar valoración. Las dudas sensibles se derivan al equipo.`, `It can guide informatively and book an assessment. Sensitive questions are routed to the team.`);
  T(`Puede cambiar citas?`, `Can it change appointments?`);
  T(`Sí. Reprograma según disponibilidad y reglas de agenda.`, `Yes. It reschedules according to availability and scheduling rules.`);
  T(`Funciona con Instagram?`, `Does it work with Instagram?`);
  T(`Sí. Ordena mensajes de Instagram y WhatsApp para convertirlos en reservas o seguimiento.`, `Yes. It organizes Instagram and WhatsApp messages to turn them into bookings or follow-up.`);
  T(`Quieres ver qué automatizaríamos en tu centro de belleza?`, `Want to see what we would automate in your beauty center?`);
  T(`En 30 minutos revisamos tus canales, tratamientos, agenda y bonos. Sales con un mapa concreto de automatización.`, `In 30 minutes we review your channels, treatments, schedule and vouchers. You leave with a concrete automation map.`);

  T(`Landing de NOVAIX para clínicas estéticas: recepción IA 24/7, gestión de citas, seguimiento de pacientes potenciales y automatización multicanal.`, `NOVAIX landing page for aesthetic clinics: 24/7 AI reception, appointment management, potential-patient follow-up and multichannel automation.`);
  T(`NOVAIX Clínicas Estéticas · Recepción IA 24/7`, `NOVAIX Aesthetic Clinics · 24/7 AI Reception`);
  T(`Automatiza atención, reservas de valoración, recordatorios y seguimiento comercial para clínicas estéticas.`, `Automate reception, assessment bookings, reminders and commercial follow-up for aesthetic clinics.`);
  T(`Clínicas estéticas`, `Aesthetic clinics`);
  T(`IA para clínicas estéticas`, `AI for aesthetic clinics`);
  T(`Recepción IA 24/7`, `24/7 AI reception`);
  T(`para clínicas que no pueden perder citas de valor`, `for clinics that cannot afford to miss valuable appointments`);
  T(`NOVAIX atiende WhatsApp, llamadas, formularios e Instagram, agenda valoraciones, resuelve dudas frecuentes con criterios aprobados y deriva al equipo clínico cualquier consulta sensible. Menos espera, menos no-shows y mejor seguimiento.`, `NOVAIX handles WhatsApp, calls, forms and Instagram, books assessments, answers FAQs with approved criteria and routes any sensitive question to the clinical team. Less waiting, fewer no-shows and better follow-up.`);
  T(`primera respuesta a pacientes potenciales`, `first response to potential patients`);
  T(`citas, dudas y recordatorios`, `appointments, questions and reminders`);
  T(`Panel de ejemplo de recepción IA para clínica estetica`, `Example AI reception panel for an aesthetic clinic`);
  T(`Clinic Flow AI`, `Clinic Flow AI`);
  T(`valoraciones agendadas`, `assessments booked`);
  T(`Valoración inicial`, `Initial assessment`);
  T(`Reserva de cita`, `Appointment booking`);
  T(`Paciente`, `Patient`);
  T(`Hola, quiero información sobre limpieza facial y manchas. No sé qué necesito.`, `Hi, I want information about facial cleansing and spots. I am not sure what I need.`);
  T(`Te puedo orientar de forma administrativa y agendar valoración con el equipo. No hacemos diagnóstico por chat. Qué horario te encaja?`, `I can guide you administratively and book an assessment with the team. We do not diagnose by chat. What time works for you?`);
  T(`Mejor por la tarde.`, `Afternoon is better.`);
  T(`Tienes miércoles 18:30 o viernes 11:00. La valoración dura 20 min y te enviamos indicaciones y recordatorio.`, `You have Wednesday at 18:30 or Friday at 11:00. The assessment lasts 20 minutes and we send instructions and a reminder.`);
  T(`Quería reservar para higiene facial esta semana.`, `I wanted to book facial hygiene this week.`);
  T(`Claro. Hay hueco jueves 17:00 o viernes 12:30. Te confirmo sede y profesional antes de cerrar la cita.`, `Sure. There is a slot Thursday at 17:00 or Friday at 12:30. I will confirm location and professional before closing the appointment.`);
  T(`Jueves 17:00 me va bien.`, `Thursday at 17:00 works for me.`);
  T(`Reservado. Te envío ubicación, preparación y recordatorio 24 h antes. Si surge una duda clínica, la revisa el equipo.`, `Booked. I will send location, preparation notes and a reminder 24 hours before. If a clinical question comes up, the team reviews it.`);
  T(`Cuánto cuesta un tratamiento facial? Hay promoción?`, `How much does a facial treatment cost? Is there a promotion?`);
  T(`Los precios dependen del protocolo. Puedo pasarte rangos autorizados o reservar valoración para indicarte la opción adecuada.`, `Prices depend on the protocol. I can send authorized ranges or book an assessment to indicate the right option.`);
  T(`Prefiero que me lo expliquen.`, `I prefer someone to explain it to me.`);
  T(`Perfecto. Tengo llamada de 10 min hoy 19:00 o mañana 13:30 con recepción. Te dejo la cita preconfirmada?`, `Perfect. I have a 10-minute call today at 19:00 or tomorrow at 13:30 with reception. Shall I leave it pre-confirmed?`);
  T(`Sistema comercial y agenda`, `Commercial and scheduling system`);
  T(`No es un bot que improvisa. Es una recepción digital con respuestas aprobadas y derivación profesional`, `It is not an improvising bot. It is a digital reception desk with approved answers and professional escalation`);
  T(`En clínicas estéticas el valor esta en responder rápido sin prometer resultados, agendar la valoración correcta y mantener el seguimiento sin saturar al equipo.`, `In aesthetic clinics, value comes from replying quickly without promising results, booking the right assessment and keeping follow-up active without overwhelming the team.`);
  T(`Atención multicanal inmediata`, `Immediate multichannel attention`);
  T(`Responde preguntas de horarios, ubicación, precios orientativos y disponibilidad por WhatsApp, llamada, email o formularios.`, `Answers questions about hours, location, indicative prices and availability by WhatsApp, call, email or forms.`);
  T(`Valoraciones agendadas`, `Assessments booked`);
  T(`Propone huecos, confirma datos mínimos, envía recordatorios y reduce fricción antes de la primera visita.`, `Suggests slots, confirms minimum data, sends reminders and reduces friction before the first visit.`);
  T(`Cualificación prudente`, `Prudent qualification`);
  T(`Ordena prioridad por tratamiento de interés, urgencia, presupuesto y disponibilidad sin entrar en diagnóstico clínico.`, `Prioritizes by treatment interest, urgency, budget and availability without entering clinical diagnosis.`);
  T(`Menos no-shows`, `Fewer no-shows`);
  T(`Activa confirmaciones, recordatorios y recuperación de citas canceladas para proteger huecos de agenda.`, `Activates confirmations, reminders and recovery of cancelled appointments to protect schedule slots.`);
  T(`Seguimiento post-visita`, `Post-visit follow-up`);
  T(`Recuerda revisiones, resuelve dudas administrativas y avisa al equipo si aparece una consulta sensible.`, `Reminds about checkups, answers administrative questions and alerts the team if a sensitive inquiry appears.`);
  T(`RGPD y control de datos`, `GDPR and data control`);
  T(`Flujos con minimización de datos, proveedores documentados y reglas claras para no tratar información clínica innecesaria.`, `Workflows with data minimization, documented providers and clear rules to avoid processing unnecessary clinical information.`);
  T(`Del primer mensaje a la valoración confirmada, con control del equipo`, `From first message to confirmed assessment, with team control`);
  T(`La IA no sustituye al profesional. Filtra, agenda, documenta y escala cuando la conversación requiere criterio clínico.`, `AI does not replace the professional. It filters, schedules, documents and escalates when the conversation requires clinical judgment.`);
  T(`Captura la consulta`, `Captures the inquiry`);
  T(`Identifica canal, tratamiento de interés, horario, sede y motivo de la visita.`, `Identifies channel, treatment of interest, schedule, location and reason for visit.`);
  T(`Agenda la valoración`, `Books the assessment`);
  T(`Propone huecos disponibles y confirma la cita con instrucciones claras.`, `Suggests available slots and confirms the appointment with clear instructions.`);
  T(`Reduce ausencias`, `Reduces no-shows`);
  T(`Envía recordatorios y reprograma de forma ordenada cuando el paciente no puede asistir.`, `Sends reminders and reschedules in an orderly way when the patient cannot attend.`);
  T(`Escala lo delicado`, `Escalates sensitive cases`);
  T(`Cuando hay duda médica, reaccion, contraindicacion o caso sensible, resume y deriva al equipo.`, `When there is a medical question, reaction, contraindication or sensitive case, it summarizes and routes to the team.`);
  T(`Clínica estetica con equipo profesional`, `Aesthetic clinic with professional team`);
  T(`más solicitudes atendidas fuera de horario`, `more requests handled outside business hours`);
  T(`menos citas sin confirmar`, `fewer unconfirmed appointments`);
  T(`agenda, leads y seguimiento`, `schedule, leads and follow-up`);
  T(`Calcula cuánto tiempo y cuantas oportunidades puede recuperar tu recepción`, `Calculate how much time and how many opportunities your reception can recover`);
  T(`Es una estimación inicial para orientar el diagnóstico. En la llamada revisamos volumen real, tratamientos, agenda, canales y tasa de no-show.`, `It is an initial estimate to guide the diagnosis. On the call we review real volume, treatments, schedule, channels and no-show rate.`);
  T(`Consultas al mes`, `Inquiries per month`);
  T(`Citas que requieren seguimiento`, `Appointments requiring follow-up`);
  T(`NOVAIX automatiza primera respuesta, preguntas frecuentes, reservas, recordatorios y reactivación. No hace diagnósticos ni sustituye indicaciones profesionales.`, `NOVAIX automates first response, FAQs, bookings, reminders and reactivation. It does not diagnose or replace professional instructions.`);
  T(`tiempo operativo estimado recuperable al mes`, `estimated operational time recoverable per month`);
  T(`consultas que podrían recibir seguimiento automático`, `inquiries that could receive automatic follow-up`);
  T(`menos carga semanal para recepción`, `less weekly workload for reception`);
  T(`Revisar mi caso`, `Review my case`);
  T(`Un piloto enfocado a agenda y conversión, con límites clínicos claros`, `A pilot focused on scheduling and conversion, with clear clinical limits`);
  T(`Empezamos por un flujo medible: consulta entrante, valoración, recordatorio, asistencia y seguimiento posterior. Lo que requiere criterio profesional se deriva.`, `We start with a measurable workflow: incoming inquiry, assessment, reminder, attendance and follow-up. Anything requiring professional judgment is escalated.`);
  T(`Incluye`, `Includes`);
  T(`Auditoría de canales actuales: WhatsApp, teléfono, Instagram, formularios, email y CRM.`, `Audit of current channels: WhatsApp, phone, Instagram, forms, email and CRM.`);
  T(`Mapa de preguntas frecuentes por tratamiento con respuestas aprobadas por la clínica.`, `Map of treatment FAQs with answers approved by the clinic.`);
  T(`Automatización de valoraciones: captación, reserva, confirmación, recordatorio y reprogramación.`, `Assessment automation: acquisition, booking, confirmation, reminder and rescheduling.`);
  T(`Panel de seguimiento con consultas, citas, no-shows, reactivaciones y derivaciones humanas.`, `Tracking dashboard with inquiries, appointments, no-shows, reactivations and human handoffs.`);
  T(`Integraciones habituales`, `Common integrations`);
  T(`Agenda o calendario interno`, `Internal schedule or calendar`);
  T(`CRM, formularios o hojas de calculo`, `CRM, forms or spreadsheets`);
  T(`Email, llamadas e Instagram`, `Email, calls and Instagram`);
  T(`Canales compatibles`, `Supported channels`);
  T(`Preguntas normales antes de automatizar una clínica estetica`, `Common questions before automating an aesthetic clinic`);
  T(`La IA puede hablar de tratamientos?`, `Can AI talk about treatments?`);
  T(`Sí, de forma informativa y con textos aprobados por la clínica. No diagnostica, no promete resultados y deriva las preguntas clínicas al equipo profesional.`, `Yes, informatively and with texts approved by the clinic. It does not diagnose, does not promise results and routes clinical questions to the professional team.`);
  T(`Puede gestionar precios y promociones?`, `Can it handle prices and promotions?`);
  T(`Puede explicar rangos, condiciones y promociones autorizadas. Si hay caso personalizado, negociación o duda clínica, lo pasa a recepción o dirección.`, `It can explain authorized ranges, conditions and promotions. If there is a personalized case, negotiation or clinical question, it routes to reception or management.`);
  T(`Cómo se tratan los datos sensibles?`, `How are sensitive data handled?`);
  T(`El piloto se diseña con minimización de datos, permisos por canal, proveedores documentados y reglas para no recoger información clínica que no sea necesaria.`, `The pilot is designed with data minimization, channel permissions, documented providers and rules to avoid collecting unnecessary clinical information.`);
  T(`Sirve si recibimos muchas consultas por Instagram?`, `Does it help if we receive many Instagram inquiries?`);
  T(`Sí. Podemos ordenar la entrada desde Instagram, WhatsApp, formularios y llamadas para que cada oportunidad termine en agenda o seguimiento medible.`, `Yes. We can organize intake from Instagram, WhatsApp, forms and calls so every opportunity ends in a booking or measurable follow-up.`);
  T(`Quieres ver qué automatizaríamos en tu clínica?`, `Want to see what we would automate in your clinic?`);
  T(`En 30 minutos revisamos tus canales, agenda, no-shows y seguimiento. Sales con un mapa claro de lo que merece la pena automatizar primero.`, `In 30 minutes we review your channels, schedule, no-shows and follow-up. You leave with a clear map of what is worth automating first.`);

  T(`Landing NOVAIX para empresas que quieren captar, atender y agendar clientes con agentes de IA conectados a WhatsApp, web, llamadas y CRM.`, `NOVAIX landing page for companies that want to capture, serve and book customers with AI agents connected to WhatsApp, web, calls and CRM.`);
  T(`NOVAIX | Agentes de IA para captar y atender clientes`, `NOVAIX | AI agents to capture and serve customers`);
  T(`Responde mensajes, cualifica leads, agenda citas y registra datos en tus herramientas con agentes de IA.`, `Reply to messages, qualify leads, book appointments and record data in your tools with AI agents.`);
  T(`Agentes de IA para negocios`, `AI agents for businesses`);
  T(`Secciones`, `Sections`);
  T(`Qué hace`, `What it does`);
  T(`Diagnóstico gratuito de 30 minutos`, `Free 30-minute diagnosis`);
  T(`Convierte`, `Turn`);
  T(`consultas en`, `inquiries into`);
  T(`citas y ventas`, `appointments and sales`);
  T(`con agentes de IA`, `with AI agents`);
  T(`NOVAIX diseña asistentes que responden por WhatsApp, web, llamadas y email, cualifican al cliente, organizan la agenda y registran la información en tu CRM o herramientas internas.`, `NOVAIX designs assistants that reply by WhatsApp, web, calls and email, qualify customers, organize the schedule and log information in your CRM or internal tools.`);
  T(`Ver ejemplos reales`, `View real examples`);
  T(`Quieres ver todos los servicios, planes y detalles?`, `Want to see all services, plans and details?`);
  T(`Ir a la web completa`, `Go to the full website`);
  T(`Puntos clave`, `Key points`);
  T(`Respuesta inmediata`, `Immediate response`);
  T(`Menos clientes perdidos por tardar en contestar.`, `Fewer lost customers due to slow replies.`);
  T(`Multicanal`, `Multichannel`);
  T(`WhatsApp, web, llamadas, email, CRM y n8n.`, `WhatsApp, web, calls, email, CRM and n8n.`);
  T(`Procesos con seguridad y minimización de datos.`, `Processes with security and data minimization.`);
  T(`Resumen de la cita`, `Call summary`);
  T(`Lo revisamos en la llamada`, `We review it on the call`);
  T(`Te decimos qué automatizar primero, qué canales conectar y qué coste tendría un primer despliegue realista.`, `We tell you what to automate first, which channels to connect and what a realistic first deployment would cost.`);
  T(`Mapa de procesos repetitivos y puntos de pérdida de clientes.`, `Map of repetitive processes and customer-loss points.`);
  T(`Propuesta de agente: ventas, soporte, reservas o back-office.`, `Agent proposal: sales, support, bookings or back-office.`);
  T(`Roadmap inicial con integraciones: CRM, calendario, WhatsApp o n8n.`, `Initial roadmap with integrations: CRM, calendar, WhatsApp or n8n.`);
  T(`Una landing para anuncios debe hacer una cosa:`, `An ad landing page should do one thing:`);
  T(`convertir interés en acción`, `turn interest into action`);
  T(`La home explica toda la empresa. Esta página está pensada para alguien que viene de un anuncio: entiende rápido el problema, ve la solución y agenda una cita sin distracciones.`, `The home page explains the whole company. This page is designed for someone coming from an ad: they understand the problem quickly, see the solution and book a call without distractions.`);
  T(`Responder y filtrar contactos`, `Answer and filter contacts`);
  T(`El agente atiende preguntas frecuentes, detecta intención, recoge datos útiles y separa oportunidades reales de consultas repetitivas.`, `The agent handles FAQs, detects intent, collects useful data and separates real opportunities from repetitive inquiries.`);
  T(`Agendar sin intercambio infinito`, `Book without endless back-and-forth`);
  T(`Puede proponer horarios, coordinar reservas, enviar recordatorios y reducir cancelaciones o huecos mal gestionados.`, `It can suggest times, coordinate bookings, send reminders and reduce cancellations or poorly managed slots.`);
  T(`Actualizar tus sistemas`, `Update your systems`);
  T(`Conectamos CRM, hojas, calendarios, n8n, bases de datos o herramientas internas para que la información no sé quéde en el chat.`, `We connect CRM, sheets, calendars, n8n, databases or internal tools so information does not stay stuck in chat.`);
  T(`Casos donde la IA aporta retorno rápido`, `Cases where AI delivers quick ROI`);
  T(`No empezamos por "poner un chatbot". Empezamos por detectar dónde pierdes tiempo, contactos o seguimiento comercial.`, `We do not start by "adding a chatbot". We start by finding where you lose time, contacts or commercial follow-up.`);
  T(`Clínicas`, `Clinics`);
  T(`Reservas, cambios de cita, recordatorios, preguntas frecuentes y derivación al equipo cuando hay un caso sensible.`, `Bookings, appointment changes, reminders, FAQs and team escalation when there is a sensitive case.`);
  T(`Servicios profesionales`, `Professional services`);
  T(`Recepción de leads, cualificación inicial, agenda comercial y resumen automático de cada solicitud.`, `Lead reception, initial qualification, sales scheduling and automatic summary of every request.`);
  T(`E-commerce`, `E-commerce`);
  T(`Estado de pedidos, dudas de producto, incidencias repetitivas y oportunidades de venta asistida.`, `Order status, product questions, repetitive incidents and assisted-sales opportunities.`);
  T(`Restaurantes`, `Restaurants`);
  T(`Reservas, horarios, carta, consultas habituales y reducción de llamadas repetitivas.`, `Bookings, hours, menu, common inquiries and fewer repetitive calls.`);
  T(`Equipos internos`, `Internal teams`);
  T(`Automatización de emails, clasificación de tickets, seguimiento de tareas y avisos al equipo.`, `Email automation, ticket classification, task follow-up and team alerts.`);
  T(`IA útil, pero con`, `Useful AI, but with`);
  T(`seguridad y protección de datos`, `security and data protection`);
  T(`desde el principio`, `from the start`);
  T(`Para NOVAIX no es un extra comercial. Antes de automatizar revisamos qué datos entran, dónde se guardan, qué proveedores intervienen y qué controles necesita el flujo.`, `For NOVAIX this is not a sales add-on. Before automating, we review what data enters, where it is stored, which providers are involved and what controls the workflow needs.`);
  T(`Finalidad clara, minimización de datos, conservación limitada y respeto de derechos del usuario.`, `Clear purpose, data minimization, limited retention and respect for user rights.`);
  T(`Control de proveedores`, `Provider control`);
  T(`Documentamos herramientas como Calendly, CRM, n8n, canales de mensajería o modelos de IA.`, `We document tools such as Calendly, CRM, n8n, messaging channels or AI models.`);
  T(`Accesos y trazabilidad`, `Access and traceability`);
  T(`Planteamos permisos, registros y separación de información sensible cuando el proyecto lo requiere.`, `We propose permissions, logs and separation of sensitive information when the project requires it.`);
  T(`Cómo sería empezar`, `How getting started would look`);
  T(`La primera llamada no es para venderte una herramienta cerrada. Es para entender si hay un caso claro y qué primer agente tendría sentido.`, `The first call is not to sell you a closed tool. It is to understand whether there is a clear case and which first agent would make sense.`);
  T(`Revisamos canales, volumen, preguntas frecuentes, procesos repetitivos y objetivos comerciales.`, `We review channels, volume, FAQs, repetitive processes and commercial goals.`);
  T(`Diseño del flujo`, `Workflow design`);
  T(`Definimos qué hace el agente, cuándo deriva a una persona, qué datos recoge y qué sistemas conecta.`, `We define what the agent does, when it escalates to a person, what data it collects and which systems it connects.`);
  T(`Piloto medible`, `Measurable pilot`);
  T(`Lanzamos una primera versión, medimos resultados y ajustamos antes de ampliar a más canales o tareas.`, `We launch a first version, measure results and adjust before expanding to more channels or tasks.`);
  T(`Agenda una llamada y sal con un plan claro`, `Book a call and leave with a clear plan`);
  T(`En 30 minutos vemos si tiene sentido automatizar ventas, soporte, reservas o procesos internos en tu caso concreto.`, `In 30 minutes we see whether it makes sense to automate sales, support, bookings or internal processes in your specific case.`);
  T(`Incluye en la llamada:`, `Included in the call:`);
  T(`Revisión de canales actuales.`, `Review of current channels.`);
  T(`Primer caso de uso recomendado.`, `First recommended use case.`);
  T(`Integraciones necesarias.`, `Required integrations.`);
  T(`Estimación de esfuerzo y siguientes pasos.`, `Effort estimate and next steps.`);
  T(`Preguntas habituales antes de agendar`, `Common questions before booking`);
  T(`Necesito tener claro que agente quiero?`, `Do I need to know which agent I want?`);
  T(`No. Basta con que sepas dónde pierdes más tiempo o clientes: WhatsApp, llamadas, emails, reservas, tickets, CRM o tareas internas. En la llamada lo ordenamos.`, `No. It is enough to know where you lose the most time or customers: WhatsApp, calls, emails, bookings, tickets, CRM or internal tasks. We organize it on the call.`);
  T(`Esto sustituye a mi equipo?`, `Does this replace my team?`);
  T(`No. La idea es liberar al equipo de tareas repetitivas y derivar los casos importantes a una persona con contexto suficiente.`, `No. The idea is to free the team from repetitive tasks and route important cases to a person with enough context.`);
  T(`Puede conectarse con mis herramientas?`, `Can it connect with my tools?`);
  T(`Normalmente si. Trabajamos con web, WhatsApp, email, calendarios, CRMs, n8n, bases de datos y herramientas como Airtable, Notion o Google Sheets.`, `Usually yes. We work with web, WhatsApp, email, calendars, CRMs, n8n, databases and tools such as Airtable, Notion or Google Sheets.`);
  T(`Qué pasa con los datos de mis clientes?`, `What happens with my customers' data?`);
  T(`Tratamos el proyecto con enfoque RGPD y LOPD-GDD: finalidad clara, minimización, control de accesos y revisión de proveedores. No usamos tus datos para entrenar modelos públicos sin autorización expresa.`, `We handle the project with a GDPR and LOPD-GDD approach: clear purpose, minimization, access control and provider review. We do not use your data to train public models without express authorization.`);
  T(`La llamada tiene coste?`, `Does the call cost anything?`);
  T(`No. Es un diagnóstico inicial para entender tu caso y decirte si vemos una oportunidad real de automatización.`, `No. It is an initial diagnosis to understand your case and tell you whether we see a real automation opportunity.`);
  T(`Hemos agrupado las landings por sector para que puedas comparar flujos de IA en gimnasios, clínicas, peluquerías, talleres, inmobiliarias, belleza y fisioterapia.`, `We have grouped the landings by sector so you can compare AI workflows for gyms, clinics, hair salons, repair shops, real estate, beauty and physiotherapy.`);
  T(`NOVAIX · Agentes de IA para ventas, soporte y operaciones.`, `NOVAIX · AI agents for sales, support and operations.`);
  T(`Ejemplos`, `Examples`);
  T(`Legal y privacidad`, `Legal and privacy`);
  T(`Agendar diagnóstico gratuito`, `Book a free diagnosis`);
  T(`Legal, privacidad y cookies`, `Legal, privacy and cookies`);
  T(`NOVAIX · Daniel Molina`, `NOVAIX · Daniel Molina`);
  T(`Datos tratados:`, `Data processed:`);
  T(`nombre, email, empresa o proyecto, fecha y hora de cita y cualquier información que facilites voluntariamente al agendar o contactar.`, `name, email, company or project, appointment date and time, and any information you voluntarily provide when booking or contacting us.`);
  T(`gestionar solicitudes, coordinar reuniones, responder consultas comerciales y preparar propuestas o demos de automatización e IA.`, `manage requests, coordinate meetings, answer commercial inquiries and prepare automation and AI proposals or demos.`);
  T(`consentimiento del usuario y medidas precontractuales cuando solicitas información o una reunión.`, `user consent and pre-contractual measures when you request information or a meeting.`);
  T(`Calendly LLC como sistema de agenda. Puede implicar transferencias internacionales bajo Clausulas Contractuales Tipo. Política:`, `Calendly LLC as a scheduling system. It may involve international transfers under Standard Contractual Clauses. Policy:`);
  T(`acceso, rectificacion, supresion, oposicion, limitacion y portabilidad escribiendo a`, `access, rectification, deletion, objection, restriction and portability by writing to`);
  T(`NOVAIX informa sobre servicios de automatización e IA conversacional. Los contenidos, textos, imágenes y elementos gráficos pertenecen a NOVAIX o se usan con licencia.`, `NOVAIX provides information about automation and conversational AI services. Content, texts, images and graphic elements belong to NOVAIX or are used under license.`);
  T(`Usamos cookies técnicas necesarias. Calendly se carga cuando solicitas expresamente abrir la agenda. Google Tag Manager y Meta Pixel se cargan tras tu consentimiento para medir la landing y mejorar campañas.`, `We use necessary technical cookies. Calendly loads when you expressly request to open the calendar. Google Tag Manager and Meta Pixel load after your consent to measure the landing and improve campaigns.`);
  T(`Usamos Calendly, analitica (GTM) y Meta Pixel para medir la landing y gestionar citas.`, `We use Calendly, analytics (GTM) and Meta Pixel to measure the landing and manage appointments.`);
  T(`Ver política`, `View policy`);

  T(`Landing de NOVAIX para fisioterapia: recepción IA 24/7, primeras visitas, cambios de cita, recordatorios y derivación profesional.`, `NOVAIX landing page for physiotherapy: 24/7 AI reception, first visits, appointment changes, reminders and professional escalation.`);
  T(`NOVAIX Fisioterapia · Recepción IA 24/7`, `NOVAIX Physiotherapy · 24/7 AI Reception`);
  T(`Automatiza recepción, primeras visitas, cambios de cita y seguimiento administrativo para fisioterapia.`, `Automate reception, first visits, appointment changes and administrative follow-up for physiotherapy.`);
  T(`Fisioterapia`, `Physiotherapy`);
  T(`IA para clínicas de fisioterapia`, `AI for physiotherapy clinics`);
  T(`Recepción IA 24/7 para fisioterapia que no puede perder primeras visitas`, `24/7 AI reception for physiotherapy clinics that cannot afford to miss first visits`);
  T(`NOVAIX atiende WhatsApp, llamadas y formularios, agenda primeras visitas, reprograma sesiones, envía recordatorios y deriva cualquier consulta clínica al fisioterapeuta. Menos interrupciones y mejor continuidad del paciente.`, `NOVAIX handles WhatsApp, calls and forms, books first visits, reschedules sessions, sends reminders and routes any clinical inquiry to the physiotherapist. Fewer interruptions and better patient continuity.`);
  T(`primera respuesta a pacientes`, `first response to patients`);
  T(`citas, cambios y recordatorios`, `appointments, changes and reminders`);
  T(`Physio Desk AI`, `Physio Desk AI`);
  T(`citas reservadas`, `appointments booked`);
  T(`dudas administrativas resueltas`, `administrative questions resolved`);
  T(`Primera visita`, `First visit`);
  T(`Cambio de cita`, `Appointment change`);
  T(`Bonos y precios`, `Packages and prices`);
  T(`Hola, tengo dolor lumbar y quería cita con un fisio.`, `Hi, I have lower back pain and wanted an appointment with a physio.`);
  T(`Te puedo agendar primera valoración. No hacemos diagnóstico por chat. Es dolor reciente o recurrente?`, `I can book an initial assessment. We do not diagnose by chat. Is the pain recent or recurrent?`);
  T(`Recurrente, pero hoy estoy peor.`, `Recurrent, but today it is worse.`);
  T(`Tengo hueco hoy 18:00 o mañana 09:30. Si hay síntomas de alarma, te paso con el equipo ahora.`, `I have a slot today at 18:00 or tomorrow at 09:30. If there are warning symptoms, I will pass you to the team now.`);
  T(`No puedo ir a la sesión de mañana.`, `I cannot attend tomorrow's session.`);
  T(`Sin problema. Hay hueco jueves 17:30 o viernes 10:00 con tu fisio.`, `No problem. There is a slot Thursday at 17:30 or Friday at 10:00 with your physio.`);
  T(`Jueves 17:30.`, `Thursday at 17:30.`);
  T(`Cita cambiada. Te envío nuevo recordatorio y mantenemos la continuidad del tratamiento.`, `Appointment changed. I will send a new reminder and keep treatment continuity.`);
  T(`Cuánto cuesta una sesión? Hay bono?`, `How much is a session? Is there a package?`);
  T(`Te puedo explicar precios y bonos aprobados. Para recomendar frecuencia, lo revisa el fisio en valoración.`, `I can explain approved prices and packages. Treatment frequency is reviewed by the physio in the assessment.`);
  T(`Vale, quiero primera cita.`, `Okay, I want a first appointment.`);
  T(`Perfecto. Tengo mañana 12:00 o jueves 19:00. Te envío ubicación y preparación.`, `Perfect. I have tomorrow at 12:00 or Thursday at 19:00. I will send location and preparation notes.`);
  T(`Una recepción que agenda y filtra sin hacer criterio clínico`, `A reception system that books and filters without making clinical judgments`);
  T(`En fisioterapia, la IA debe ser útil y prudente: agenda, organiza y deriva lo clínico al profesional.`, `In physiotherapy, AI must be useful and prudent: it schedules, organizes and routes clinical matters to the professional.`);
  T(`Responde horarios, ubicación, precios, bonos y disponibilidad por WhatsApp, llamada o formulario.`, `Answers hours, location, prices, packages and availability by WhatsApp, call or form.`);
  T(`Primeras visitas`, `First visits`);
  T(`Agenda valoraciones iniciales y sesiones según disponibilidad, profesional y duración.`, `Books initial assessments and sessions according to availability, professional and duration.`);
  T(`Derivación clínica`, `Clinical escalation`);
  T(`Escala síntomas de alarma, dudas de tratamiento o evolución al fisioterapeuta.`, `Escalates warning symptoms, treatment questions or progress concerns to the physiotherapist.`);
  T(`Reprograma sesiones y reduce huecos perdidos manteniendo continuidad.`, `Reschedules sessions and reduces lost slots while maintaining continuity.`);
  T(`Confirma citas, envía preparación y reduce ausencias.`, `Confirms appointments, sends preparation notes and reduces no-shows.`);
  T(`Seguimiento administrativo`, `Administrative follow-up`);
  T(`Ordena consultas, sesiones, no-shows y reactivaciones sin invadir información clínica innecesaria.`, `Organizes inquiries, sessions, no-shows and reactivations without collecting unnecessary clinical information.`);
  T(`Del primer mensaje a la cita correcta, con límites clínicos claros`, `From first message to the right appointment, with clear clinical limits`);
  T(`La IA ayuda en recepción y agenda. El criterio sanitario se queda en el equipo profesional.`, `AI helps with reception and scheduling. Healthcare judgment stays with the professional team.`);
  T(`Recoge motivo administrativo`, `Collects administrative reason`);
  T(`Primera visita, sesión, cambio, bono, precio o disponibilidad.`, `First visit, session, change, package, price or availability.`);
  T(`Detecta sensibilidad`, `Detects sensitivity`);
  T(`Si hay duda clínica, síntomas de alarma o evolución, deriva al fisioterapeuta.`, `If there is a clinical question, warning symptoms or progress concern, it routes to the physiotherapist.`);
  T(`Agenda o reprograma`, `Books or reschedules`);
  T(`Propone huecos y confirma preparación, ubicación y recordatorio.`, `Suggests slots and confirms preparation, location and reminder.`);
  T(`Mantiene continuidad`, `Maintains continuity`);
  T(`Hace seguimiento administrativo de sesiones pendientes y no-shows.`, `Follows up administratively on pending sessions and no-shows.`);
  T(`Clínica de fisioterapia con tratamiento manual`, `Physiotherapy clinic with manual treatment`);
  T(`primeras respuestas fuera de horario`, `first replies outside business hours`);
  T(`agenda, pacientes y seguimiento`, `schedule, patients and follow-up`);
  T(`Cuánto tiempo consume tu recepción?`, `How much time does your reception consume?`);
  T(`Estima el impacto de automatizar primera respuesta, cambios de cita, bonos y recordatorios.`, `Estimate the impact of automating first response, appointment changes, packages and reminders.`);
  T(`Consultas administrativas automatizables`, `Automatable administrative inquiries`);
  T(`NOVAIX no diagnostica ni prescribe. Agenda, informa y deriva cualquier consulta clínica al equipo.`, `NOVAIX does not diagnose or prescribe. It schedules, informs and routes any clinical inquiry to the team.`);
  T(`Un piloto prudente para agenda y continuidad del paciente`, `A prudent pilot for scheduling and patient continuity`);
  T(`Empezamos por primeras visitas, cambios, recordatorios, bonos y derivación de dudas clínicas.`, `We start with first visits, changes, reminders, packages and escalation of clinical questions.`);
  T(`Auditoría de canales: WhatsApp, teléfono, formularios, agenda y CRM.`, `Channel audit: WhatsApp, phone, forms, schedule and CRM.`);
  T(`Mapa de servicios, duraciones, bonos, reglas de agenda y límites clínicos.`, `Map of services, durations, packages, scheduling rules and clinical limits.`);
  T(`Automatización de primera visita, cambio, recordatorio, bono y seguimiento administrativo.`, `Automation for first visit, change, reminder, package and administrative follow-up.`);
  T(`Panel con citas, pacientes potenciales, ausencias, reactivaciones y derivaciones.`, `Dashboard with appointments, potential patients, no-shows, reactivations and handoffs.`);
  T(`Agenda clínica`, `Clinical schedule`);
  T(`Formularios`, `Forms`);
  T(`CRM o hoja de pacientes`, `CRM or patient sheet`);
  T(`Preguntas normales antes de automatizar fisioterapia`, `Common questions before automating physiotherapy`);
  T(`Puede responder dudas clínicas?`, `Can it answer clinical questions?`);
  T(`No sustituye al fisioterapeuta. Puede recoger la duda y derivarla con contexto.`, `It does not replace the physiotherapist. It can collect the question and route it with context.`);
  T(`Puede agendar primeras visitas?`, `Can it book first visits?`);
  T(`Sí. Propone huecos según duración, profesional y disponibilidad.`, `Yes. It suggests slots by duration, professional and availability.`);
  T(`Puede gestionar bonos?`, `Can it handle packages?`);
  T(`Puede explicar precios y bonos aprobados, sin recomendar frecuencia de tratamiento.`, `It can explain approved prices and packages without recommending treatment frequency.`);
  T(`Cumple con datos sensibles?`, `Does it comply with sensitive data requirements?`);
  T(`El piloto se diseña con minimización de datos y reglas para no recoger información clínica innecesaria.`, `The pilot is designed with data minimization and rules to avoid collecting unnecessary clinical information.`);
  T(`Quieres ver qué automatizaríamos en tu clínica de fisioterapia?`, `Want to see what we would automate in your physiotherapy clinic?`);
  T(`En 30 minutos revisamos tus canales, agenda, servicios y límites clínicos. Sales con un mapa de automatización prudente y medible.`, `In 30 minutes we review your channels, schedule, services and clinical limits. You leave with a prudent and measurable automation map.`);

  T(`Landing de NOVAIX para gimnasios: recepción IA 24/7, reservas de clases, seguimiento de leads y automatización por WhatsApp, llamadas y email.`, `NOVAIX landing page for gyms: 24/7 AI reception, class bookings, lead follow-up and automation via WhatsApp, calls and email.`);
  T(`NOVAIX Gimnasios · Recepción IA 24/7`, `NOVAIX Gyms · 24/7 AI Reception`);
  T(`Automatiza atención, reservas y seguimiento comercial para gimnasios con IA multicanal.`, `Automate service, bookings and commercial follow-up for gyms with multichannel AI.`);
  T(`Gimnasios`, `Gyms`);
  T(`IA para gimnasios y boxes`, `AI for gyms and training boxes`);
  T(`para gimnasios que no pueden perder leads`, `for gyms that cannot afford to lose leads`);
  T(`NOVAIX atiende WhatsApp, llamadas y email, reserva clases de prueba, reactiva indecisos y deriva a tu equipo solo lo que necesita trato humano. El cliente recibe respuesta inmediata y tu recepción deja de vivir apagando fuegos.`, `NOVAIX handles WhatsApp, calls and email, books trial classes, reactivates undecided prospects and routes only what needs human treatment to your team. Customers get immediate answers and reception stops constantly putting out fires.`);
  T(`primera respuesta a nuevos leads`, `first response to new leads`);
  T(`reservas, dudas y recordatorios`, `bookings, questions and reminders`);
  T(`tiempo administrativo recuperable cada semana`, `administrative time recoverable every week`);
  T(`Panel de ejemplo de la recepción IA`, `Example AI reception panel`);
  T(`Gym Ops AI`, `Gym Ops AI`);
  T(`leads atendidos hoy`, `leads handled today`);
  T(`pruebas reservadas`, `trial classes booked`);
  T(`Alta nueva`, `New signup`);
  T(`Reserva de clase`, `Class booking`);
  T(`Hola, quiero apuntarme al gimnasio pero no sé qué plan elegir.`, `Hi, I want to join the gym but I do not know which plan to choose.`);
  T(`Te ayudo. Qué objetivo tienes: fuerza, pérdida de grasa, clases dirigidas o entrenar por libre?`, `I can help. What is your goal: strength, fat loss, guided classes or training on your own?`);
  T(`Quiero empezar con clases y entrenar 3 días.`, `I want to start with classes and train 3 days.`);
  T(`Perfecto. Te recomiendo probar una clase y ver el plan mensual. Puedo reservarte hoy 19:30 o mañana 18:00.`, `Perfect. I recommend trying a class and reviewing the monthly plan. I can book you today at 19:30 or tomorrow at 18:00.`);
  T(`Hay hueco para funcional esta semana?`, `Is there a functional training slot this week?`);
  T(`Sí. Tienes martes 19:30 o jueves 20:15. La clase dura 50 min y solo necesitas ropa cómoda.`, `Yes. You have Tuesday at 19:30 or Thursday at 20:15. The class lasts 50 minutes and you only need comfortable clothes.`);
  T(`Jueves me va bien.`, `Thursday works for me.`);
  T(`Reservado. Te envío ubicación, qué traer y recordatorio 24 h antes.`, `Booked. I will send location, what to bring and a reminder 24 hours before.`);
  T(`Cuánto cuesta entrenar? Hay matrícula?`, `How much does training cost? Is there an enrollment fee?`);
  T(`Los planes empiezan desde 49 euros/mes. Depende de clases, acceso y seguimiento. Te puedo pasar opciones o reservar una visita.`, `Plans start from 49 euros/month. It depends on classes, access and follow-up. I can send options or book a visit.`);
  T(`Prefiero que me expliquen las opciones.`, `I prefer someone to explain the options.`);
  T(`Genial. Tengo hueco para una llamada de 10 min hoy 17:30 o mañana 12:00.`, `Great. I have a 10-minute call slot today at 17:30 or tomorrow at 12:00.`);
  T(`No es un chatbot decorativo. Es una capa de recepción, ventas y reservas conectada a tu gimnasio`, `It is not a decorative chatbot. It is a reception, sales and booking layer connected to your gym`);
  T(`La aproximación de Claude iba bien orientada: atacar el cuello de botella real de un gimnasio, la atención constante. La mejora aquí es hacerla más concreta, con flujos visibles, calculadora y una propuesta de piloto accionable.`, `Claude's approach was well oriented: attacking the real bottleneck in a gym, constant reception work. The improvement here is to make it more concrete, with visible flows, a calculator and an actionable pilot proposal.`);
  T(`Responde dudas de horarios, tarifas, ubicación, permanencia y servicios por WhatsApp, llamada o email con tono de marca.`, `Answers questions about hours, rates, location, commitment and services by WhatsApp, call or email in your brand voice.`);
  T(`Reservas sin fricción`, `Frictionless bookings`);
  T(`Agenda clases de prueba, sesiones de valoración o visitas al centro y envía recordatorios automáticos para reducir ausencias.`, `Books trial classes, assessment sessions or center visits and sends automatic reminders to reduce no-shows.`);
  T(`Lead scoring comercial`, `Commercial lead scoring`);
  T(`Clasifica intención, urgencia, zona, objetivo y presupuesto para que tu equipo priorice oportunidades reales.`, `Classifies intent, urgency, area, goal and budget so your team can prioritize real opportunities.`);
  T(`Recuperación de indecisos`, `Recovery of undecided leads`);
  T(`Activa secuencias de seguimiento para quien preguntó precio, no vino a la prueba o dejó una conversación a medias.`, `Activates follow-up sequences for people who asked for prices, missed a trial or left a conversation unfinished.`);
  T(`Derivación humana clara`, `Clear human escalation`);
  T(`Cuando hay baja, incidencia sensible o negociación, la IA resume el caso y lo pasa al responsable correcto.`, `When there is a cancellation, sensitive incident or negotiation, AI summarizes the case and routes it to the right person.`);
  T(`Informes de operativa`, `Operational reports`);
  T(`Detecta picos de demanda, preguntas repetidas, canales que convierten y huecos donde se pierden reservas.`, `Detects demand peaks, repeated questions, converting channels and points where bookings are lost.`);
  T(`Del primer mensaje a la clase reservada, sin perseguir al cliente`, `From first message to booked class, without chasing the customer`);
  T(`El sistema no sustituye tu criterio comercial. Quita ruido, contesta lo repetitivo y prepara cada oportunidad para que llegue ordenada.`, `The system does not replace your commercial judgment. It removes noise, answers repetitive questions and prepares each opportunity so it arrives organized.`);
  T(`Captura el contacto`, `Captures the contact`);
  T(`Detecta origen del lead, canal, horario, objetivo y contexto de la consulta.`, `Detects lead source, channel, timing, goal and inquiry context.`);
  T(`Resuelve o agenda`, `Resolves or books`);
  T(`Contesta preguntas frecuentes y propone huecos disponibles para prueba, visita o valoración.`, `Answers FAQs and suggests available slots for trial, visit or assessment.`);
  T(`Hace seguimiento`, `Follows up`);
  T(`Envía recordatorios, recupera no-shows y reactiva conversaciones sin saturar al usuario.`, `Sends reminders, recovers no-shows and reactivates conversations without overwhelming the user.`);
  T(`Entrega contexto al equipo`, `Hands context to the team`);
  T(`Registra resumen, etiquetas y siguiente acción para recepción, ventas o dirección.`, `Records summary, tags and next action for reception, sales or management.`);
  T(`Entrenamiento funcional en gimnasio`, `Functional training in a gym`);
  T(`más citas atendidas fuera de horario`, `more appointments handled outside business hours`);
  T(`menos ausencias a clase de prueba`, `fewer no-shows for trial classes`);
  T(`para leads, agenda y seguimiento`, `for leads, scheduling and follow-up`);
  T(`Calcula el tiempo que tu equipo puede dejar de perder en mensajes repetidos`, `Calculate the time your team can stop losing on repeated messages`);
  T(`Es una estimación conservadora para orientar el diagnóstico. En la llamada revisamos tus canales, horarios, equipo y conversión actual.`, `It is a conservative estimate to guide the diagnosis. On the call we review your channels, hours, team and current conversion.`);
  T(`Leads y consultas al mes`, `Leads and inquiries per month`);
  T(`Leads que sé quédan sin seguimiento`, `Leads left without follow-up`);
  T(`NOVAIX suele automatizar la primera respuesta, preguntas frecuentes, reservas, recordatorios y reactivaciones. El resultado final depende de tus procesos y volumen real.`, `NOVAIX usually automates first response, FAQs, bookings, reminders and reactivations. Final results depend on your processes and real volume.`);
  T(`leads que podrían recibir seguimiento automático`, `leads that could receive automatic follow-up`);
  T(`menos carga semanal para recepción y ventas`, `less weekly workload for reception and sales`);
  T(`Un piloto enfocado a conversión, no a tener otra herramienta más`, `A pilot focused on conversion, not on adding another tool`);
  T(`Empezamos por un flujo medible: leads entrantes, reserva de prueba, recordatorio y seguimiento posterior. Si eso no mueve la aguja, no escalamos.`, `We start with a measurable flow: incoming leads, trial booking, reminder and post-visit follow-up. If that does not move the needle, we do not scale.`);
  T(`Mapa de conversaciones frecuentes con tono, objeciones y derivaciones humanas.`, `Map of frequent conversations with tone, objections and human handoffs.`);
  T(`Automatización del flujo de clase de prueba: captación, reserva, recordatorio y post-visita.`, `Trial-class workflow automation: acquisition, booking, reminder and post-visit follow-up.`);
  T(`Panel de seguimiento con volumen, respuestas, reservas, no-shows y oportunidades recuperadas.`, `Tracking dashboard with volume, replies, bookings, no-shows and recovered opportunities.`);
  T(`Google Calendar o agenda interna`, `Google Calendar or internal schedule`);
  T(`CRM, hojas de calculo o formulario web`, `CRM, spreadsheets or web form`);
  T(`Email, llamadas y analitica`, `Email, calls and analytics`);
  T(`Preguntas normales antes de automatizar un gimnasio`, `Common questions before automating a gym`);
  T(`La IA puede responder precios y promociones?`, `Can AI answer prices and promotions?`);
  T(`Sí, con reglas claras. Puede explicar planes, condiciones y promociones activas, y derivar a una persona cuando haya negociación, baja, incidencia o caso sensible.`, `Yes, with clear rules. It can explain plans, conditions and active promotions, and route to a person when there is negotiation, cancellation, incident or sensitive case.`);
  T(`Sirve si ya usamos WhatsApp Business?`, `Does it help if we already use WhatsApp Business?`);
  T(`Sí. La idea es mantener el canal que el cliente ya usa y añadir automatización, seguimiento y registro para que no dependas de revisar conversaciones a mano.`, `Yes. The idea is to keep the channel customers already use and add automation, follow-up and logging so you do not depend on manual conversation checks.`);
  T(`Puede reservar clases en nuestra agenda?`, `Can it book classes in our schedule?`);
  T(`Depende de la herramienta de agenda, pero normalmente se puede conectar mediante Calendly, Google Calendar, CRM, formularios o integraciones a medida.`, `It depends on the scheduling tool, but it can usually connect through Calendly, Google Calendar, CRM, forms or custom integrations.`);
  T(`Qué pasa con datos personales y RGPD?`, `What about personal data and GDPR?`);
  T(`El piloto se plantea con minimización de datos, permisos por canal, documentación de proveedores y derivación humana para información sensible.`, `The pilot is planned with data minimization, channel permissions, provider documentation and human escalation for sensitive information.`);
  T(`Quieres ver qué automatizaríamos en tu gimnasio?`, `Want to see what we would automate in your gym?`);
  T(`En 30 minutos revisamos tus canales, volumen de consultas, reservas y seguimiento comercial. Sales con un mapa claro de lo que merece la pena automatizar primero.`, `In 30 minutes we review your channels, inquiry volume, bookings and sales follow-up. You leave with a clear map of what is worth automating first.`);

  T(`Landing de NOVAIX para inmobiliarias: recepción IA 24/7, cualificación de compradores, captación de propietarios y visitas.`, `NOVAIX landing page for real estate agencies: 24/7 AI reception, buyer qualification, owner acquisition and viewings.`);
  T(`NOVAIX Inmobiliarias · Recepción IA 24/7`, `NOVAIX Real Estate · 24/7 AI Reception`);
  T(`Automatiza atención, cualificación, visitas y seguimiento para inmobiliarias.`, `Automate service, qualification, viewings and follow-up for real estate agencies.`);
  T(`Inmobiliarias`, `Real estate agencies`);
  T(`IA para inmobiliarias`, `AI for real estate agencies`);
  T(`Recepción IA 24/7 para inmobiliarias que no pueden perder compradores ni propietarios`, `24/7 AI reception for real estate agencies that cannot afford to lose buyers or owners`);
  T(`NOVAIX atiende portales, WhatsApp, llamadas y formularios, cualifica compradores, agenda visitas y detecta propietarios interesados en vender. Tu equipo recibe oportunidades ordenadas, no ruido.`, `NOVAIX handles portals, WhatsApp, calls and forms, qualifies buyers, books viewings and detects owners interested in selling. Your team receives organized opportunities, not noise.`);
  T(`respuesta a leads de portales`, `response to portal leads`);
  T(`visitas, dudas y captación`, `viewings, questions and acquisition`);
  T(`seguimiento recuperable al mes`, `follow-up recoverable per month`);
  T(`Real Estate Flow AI`, `Real Estate Flow AI`);
  T(`visitas propuestas`, `viewings proposed`);
  T(`leads cualificados`, `qualified leads`);
  T(`Lead comprador`, `Buyer lead`);
  T(`Captación propietario`, `Owner acquisition`);
  T(`Precio y financiación`, `Price and financing`);
  T(`Comprador`, `Buyer`);
  T(`Hola, me interesa el piso de 3 habitaciones en Centro. Sigue disponible?`, `Hi, I am interested in the 3-bedroom apartment downtown. Is it still available?`);
  T(`Sí, está disponible. Para coordinar visita: buscas compra o alquiler y qué disponibilidad tienes?`, `Yes, it is available. To coordinate a viewing: are you looking to buy or rent and what availability do you have?`);
  T(`Compra. Puedo mañana tarde.`, `Buy. I can tomorrow afternoon.`);
  T(`Perfecto. Hay visita mañana 18:30 o jueves 10:00. Te confirmo dirección exacta y asesor asignado.`, `Perfect. There is a viewing tomorrow at 18:30 or Thursday at 10:00. I will confirm the exact address and assigned advisor.`);
  T(`Propietario`, `Owner`);
  T(`Quiero saber cuánto podría valer mi piso.`, `I want to know how much my apartment could be worth.`);
  T(`Te ayudo a preparar una valoración. Dime zona, metros, habitaciones y estado aproximado.`, `I can help prepare an appraisal. Tell me area, square meters, rooms and approximate condition.`);
  T(`Zona Norte, 92 m2, 3 habitaciones, reformado.`, `North area, 92 sqm, 3 bedrooms, renovated.`);
  T(`Gracias. Te puedo reservar llamada de valoración hoy 17:00 o mañana 12:30 con un asesor.`, `Thanks. I can book an appraisal call today at 17:00 or tomorrow at 12:30 with an advisor.`);
  T(`El precio es negociable? Y se puede financiar?`, `Is the price negotiable? And can it be financed?`);
  T(`Puedo recoger tu situacion y pasarlo al asesor. Tienes financiación preaprobada o necesitas orientacion?`, `I can collect your situation and pass it to the advisor. Do you have pre-approved financing or need guidance?`);
  T(`Necesito orientacion.`, `I need guidance.`);
  T(`Perfecto. Te agendo llamada de 10 min para revisar presupuesto, entrada y proximos pasos.`, `Perfect. I will book a 10-minute call to review budget, down payment and next steps.`);
  T(`Una recepción que separa curiosos de oportunidades reales`, `A reception system that separates curious contacts from real opportunities`);
  T(`En inmobiliaria, responder rápido es importante, pero cualificar bien evita visitas perdidas y seguimiento sin foco.`, `In real estate, replying fast matters, but good qualification prevents wasted viewings and unfocused follow-up.`);
  T(`Respuesta a portales y WhatsApp`, `Portal and WhatsApp response`);
  T(`Contesta disponibilidad, ubicación aproximada, condiciones, horarios y siguientes pasos.`, `Answers availability, approximate location, terms, schedules and next steps.`);
  T(`Visitas coordinadas`, `Coordinated viewings`);
  T(`Propone huecos, confirma asistencia y reduce no-shows con recordatorios.`, `Suggests slots, confirms attendance and reduces no-shows with reminders.`);
  T(`Cualificación comercial`, `Commercial qualification`);
  T(`Recoge presupuesto, financiación, urgencia, zona, motivo de compra o venta y disponibilidad.`, `Collects budget, financing, urgency, area, reason for buying or selling and availability.`);
  T(`Captación de propietarios`, `Owner acquisition`);
  T(`Detecta propietarios que quieren valorar, vender o alquilar y agenda llamada con el asesor.`, `Detects owners who want to value, sell or rent and books a call with the advisor.`);
  T(`Seguimiento automático`, `Automatic follow-up`);
  T(`Reactiva leads que preguntaron, no contestaron o no acudieron a visita.`, `Reactivates leads who asked, did not reply or missed a viewing.`);
  T(`Pipeline medible`, `Measurable pipeline`);
  T(`Ordena leads, visitas, propietarios y derivaciones en una vista operativa.`, `Organizes leads, viewings, owners and handoffs in an operational view.`);
  T(`Del lead de portal a la visita o valoración, sin perder contexto`, `From portal lead to viewing or appraisal without losing context`);
  T(`La IA cualifica y agenda sin inventar condiciones ni sustituir al asesor.`, `AI qualifies and schedules without inventing terms or replacing the advisor.`);
  T(`Captura origen`, `Captures source`);
  T(`Portal, WhatsApp, llamada, formulario, anuncio o recomendacion.`, `Portal, WhatsApp, call, form, ad or recommendation.`);
  T(`Cualifica intención`, `Qualifies intent`);
  T(`Compra, alquiler, venta, presupuesto, financiación, zona y urgencia.`, `Purchase, rental, sale, budget, financing, area and urgency.`);
  T(`Agenda siguiente paso`, `Books next step`);
  T(`Visita, llamada, valoración o envío de información aprobada.`, `Viewing, call, appraisal or sending approved information.`);
  T(`Escala al asesor`, `Escalates to advisor`);
  T(`Negociación, documentación, oferta o decision comercial pasan al equipo.`, `Negotiation, documentation, offer or commercial decision go to the team.`);
  T(`Agente inmobiliario mostrando una vivienda`, `Real estate agent showing a property`);
  T(`leads respondidos fuera de horario`, `leads answered outside business hours`);
  T(`visitas improductivas`, `unproductive viewings`);
  T(`leads, visitas y propietarios`, `leads, viewings and owners`);
  T(`Cuánto seguimiento se queda sin atender?`, `How much follow-up goes unattended?`);
  T(`Estima el impacto de automatizar primera respuesta, cualificación, visitas y reactivación.`, `Estimate the impact of automating first response, qualification, viewings and reactivation.`);
  T(`Leads mensuales`, `Monthly leads`);
  T(`Minutos medios por lead`, `Average minutes per lead`);
  T(`Leads cualificables automáticamente`, `Automatically qualifiable leads`);
  T(`NOVAIX no negocia ni sustituye al asesor. Ordena, cualifica, agenda y deriva lo importante.`, `NOVAIX does not negotiate or replace the advisor. It organizes, qualifies, schedules and routes what matters.`);
  T(`Un piloto para convertir más leads en visitas y valoraciones`, `A pilot to convert more leads into viewings and appraisals`);
  T(`Empezamos por compradores, propietarios, visitas, recordatorios y seguimiento post-contacto.`, `We start with buyers, owners, viewings, reminders and post-contact follow-up.`);
  T(`Auditoría de portales, WhatsApp, teléfono, formularios y CRM.`, `Audit of portals, WhatsApp, phone, forms and CRM.`);
  T(`Mapa de inmuebles, reglas de disponibilidad, preguntas frecuentes y criterios de cualificación.`, `Map of properties, availability rules, FAQs and qualification criteria.`);
  T(`Automatización de lead comprador, captación propietario, visita y seguimiento.`, `Automation of buyer lead, owner acquisition, viewing and follow-up.`);
  T(`Panel con leads, visitas, propietarios, conversiones y derivaciones.`, `Dashboard with leads, viewings, owners, conversions and handoffs.`);
  T(`Portales`, `Portals`);
  T(`CRM inmobiliario`, `Real estate CRM`);
  T(`Calendario`, `Calendar`);
  T(`Preguntas normales antes de automatizar una inmobiliaria`, `Common questions before automating a real estate agency`);
  T(`Puede responder por cada inmueble?`, `Can it answer for each property?`);
  T(`Sí. Trabaja con información aprobada por inmueble y deriva cuando falta dato o hay negociación.`, `Yes. It works with approved information per property and escalates when data is missing or there is negotiation.`);
  T(`Puede cualificar compradores?`, `Can it qualify buyers?`);
  T(`Sí. Recoge presupuesto, financiación, zona, urgencia y disponibilidad para priorizar.`, `Yes. It collects budget, financing, area, urgency and availability to prioritize.`);
  T(`Puede captar propietarios?`, `Can it acquire owners?`);
  T(`Sí. Detecta solicitudes de valoración y agenda llamada con el asesor.`, `Yes. It detects valuation requests and books a call with the advisor.`);
  T(`Puede negociar precios?`, `Can it negotiate prices?`);
  T(`No. Puede recoger la intención y pasarla al asesor con contexto.`, `No. It can collect the intent and pass it to the advisor with context.`);
  T(`Quieres ver qué automatizaríamos en tu inmobiliaria?`, `Want to see what we would automate in your real estate agency?`);
  T(`En 30 minutos revisamos tus canales, portales, CRM y seguimiento. Sales con un mapa de automatización orientado a visitas y captación.`, `In 30 minutes we review your channels, portals, CRM and follow-up. You leave with an automation map focused on viewings and acquisition.`);

  T(`Landings sectoriales de NOVAIX para ver cómo aplicamos agentes de IA en gimnasios, clínicas, peluquerías, talleres, inmobiliarias, belleza y fisioterapia.`, `NOVAIX sector landing pages showing how we apply AI agents in gyms, clinics, hair salons, workshops, real estate, beauty and physiotherapy.`);
  T(`NOVAIX · Experiencia por negocios`, `NOVAIX · Experience by Business`);
  T(`Explora ejemplos de automatización con IA para diferentes sectores y modelos de negocio.`, `Explore AI automation examples for different sectors and business models.`);
  T(`Experiencia por negocios`, `Experience by business`);
  T(`Sectores`, `Sectors`);
  T(`Landings por sector`, `Sector landing pages`);
  T(`Experiencia aplicada a negocios reales`, `Experience applied to real businesses`);
  T(`Cada sector tiene objeciones, ritmos y canales distintos. Aquí puedes ver cómo aterrizamos la automatización con IA en gimnasios, clínicas, peluquerías, talleres, inmobiliarias, belleza y fisioterapia.`, `Each sector has different objections, rhythms and channels. Here you can see how we apply AI automation in gyms, clinics, hair salons, workshops, real estate, beauty and physiotherapy.`);
  T(`Ver sectores`, `View sectors`);
  T(`Ver landing general`, `View general landing`);
  T(`Casos por negocio`, `Use cases by business`);
  T(`Elige el sector que más se parece a tu operación`, `Choose the sector most similar to your operation`);
  T(`Las páginas no son demos genéricas: muestran flujos, mensajes, estimadores y pilotos pensados para cada tipo de negocio.`, `These pages are not generic demos: they show workflows, messages, estimators and pilots designed for each business type.`);
  T(`Altas nuevas, reservas de clase, precios y seguimiento de leads.`, `New signups, class bookings, prices and lead follow-up.`);
  T(`Ver landing`, `View landing`);
  T(`Valoraciones, reservas, dudas de precios y derivación clínica.`, `Assessments, bookings, price questions and clinical escalation.`);
  T(`Peluquerías`, `Hair salons`);
  T(`Reservas, cambios, precios orientativos y recordatorios.`, `Bookings, changes, indicative prices and reminders.`);
  T(`Talleres`, `Workshops`);
  T(`Citas, revisiones, presupuestos iniciales y seguimiento.`, `Appointments, checkups, initial quotes and follow-up.`);
  T(`Compradores, propietarios, visitas y valoración inicial.`, `Buyers, owners, viewings and initial appraisal.`);
  T(`Reservas, bonos regalo, tratamientos y reprogramaciones.`, `Bookings, gift vouchers, treatments and rescheduling.`);
  T(`Primeras visitas, cambios de sesión, bonos y derivación profesional.`, `First visits, session changes, packages and professional escalation.`);
  T(`Landing general`, `General landing`);
  T(`Captación, atención, agenda y CRM para campañas de tráfico.`, `Acquisition, service, scheduling and CRM for traffic campaigns.`);
  T(`¿Quieres adaptar una de estas ideas a tu negocio?`, `Want to adapt one of these ideas to your business?`);
  T(`Vuelve a la web principal o agenda un diagnóstico desde cualquiera de las landings para revisar canales, volumen y automatizaciones prioritarias.`, `Return to the main website or book a diagnosis from any landing to review channels, volume and priority automations.`);
  T(`Hablar con NOVAIX`, `Talk to NOVAIX`);

  T(`Landing de NOVAIX para peluquerías: recepción IA 24/7, reservas, cambios de cita, precios y seguimiento por WhatsApp.`, `NOVAIX landing page for hair salons: 24/7 AI reception, bookings, appointment changes, prices and WhatsApp follow-up.`);
  T(`NOVAIX Peluquerías · Recepción IA 24/7`, `NOVAIX Hair Salons · 24/7 AI Reception`);
  T(`Automatiza reservas, cambios de hora, consultas de precios y recordatorios para peluquerías.`, `Automate bookings, time changes, price inquiries and reminders for hair salons.`);
  T(`IA para peluquerías y salónes`, `AI for hair salons`);
  T(`Recepción IA 24/7 para peluquerías que no pueden perder citas`, `24/7 AI reception for hair salons that cannot afford to miss appointments`);
  T(`NOVAIX responde WhatsApp, llamadas, formularios e Instagram, reserva huecos, reorganiza agenda y reactiva clientes que preguntaron precio. Tu equipo sigue cortando, peinando y vendiendo servicios sin vivir pegado al teléfono.`, `NOVAIX answers WhatsApp, calls, forms and Instagram, books slots, reorganizes the schedule and reactivates clients who asked for prices. Your team keeps cutting, styling and selling services without living attached to the phone.`);
  T(`primera respuesta a nuevos clientes`, `first response to new clients`);
  T(`reservas, cambios y recordatorios`, `bookings, changes and reminders`);
  T(`Salón Desk AI`, `Salon Desk AI`);
  T(`Cambio de hora`, `Time change`);
  T(`Hola, quería corte y color esta semana. Tenéis hueco?`, `Hi, I wanted cut and color this week. Do you have availability?`);
  T(`Sí. Tengo jueves 17:30 o sábado 10:00. Para color necesito confirmar largo y si es primera vez.`, `Yes. I have Thursday at 17:30 or Saturday at 10:00. For color I need to confirm length and whether it is your first time.`);
  T(`Jueves me va bien. Es media melena.`, `Thursday works. It is medium-length hair.`);
  T(`Perfecto, te dejo pre-reservado jueves 17:30. Te envío dirección, precio orientativo y recordatorio 24 h antes.`, `Perfect, I will pre-book Thursday at 17:30. I will send address, indicative price and a reminder 24 hours before.`);
  T(`No puedo ir mañana a las 12:00. Se puede cambiar?`, `I cannot go tomorrow at 12:00. Can it be changed?`);
  T(`Claro. Hay hueco mañana 18:15 o viernes 11:30 con el mismo servicio.`, `Sure. There is availability tomorrow at 18:15 or Friday at 11:30 for the same service.`);
  T(`Viernes 11:30 mejor.`, `Friday 11:30 is better.`);
  T(`Cambio realizado. Tu cita queda viernes 11:30 y te envío el nuevo recordatorio.`, `Change made. Your appointment is Friday at 11:30 and I will send the new reminder.`);
  T(`Cuánto cuesta balayage? Tengo el pelo largo.`, `How much is balayage? I have long hair.`);
  T(`El precio depende de largo, cantidad y matiz. Te puedo dar rango orientativo o reservar diagnóstico express.`, `The price depends on length, volume and toner. I can give an indicative range or book an express consultation.`);
  T(`Prefiero diagnóstico.`, `I prefer a consultation.`);
  T(`Genial. Tengo videollamada de 10 min hoy 19:00 o cita presencial viernes 12:00.`, `Great. I have a 10-minute video call today at 19:00 or an in-person appointment Friday at 12:00.`);
  T(`Una recepción que protege agenda, ticket medio y experiencia del cliente`, `A reception system that protects schedule, average ticket and customer experience`);
  T(`En una peluquería, contestar tarde significa huecos perdidos, cambios desordenados y clientes que se van a otro salón.`, `In a hair salon, replying late means lost slots, messy changes and clients going to another salon.`);
  T(`Responde dudas de servicios, horarios, disponibilidad, ubicación y precios orientativos por WhatsApp, llamada o Instagram.`, `Answers questions about services, hours, availability, location and indicative prices by WhatsApp, call or Instagram.`);
  T(`Agenda ordenada`, `Organized schedule`);
  T(`Reserva cortes, color, tratamientos, barbería o diagnósticos y evita solapes por duración del servicio.`, `Books cuts, color, treatments, barber services or consultations and avoids overlaps by service duration.`);
  T(`Cambios sin caos`, `Changes without chaos`);
  T(`Reprograma citas, libera huecos y avisa al equipo sin llamadas cruzadas ni mensajes perdidos.`, `Reschedules appointments, frees slots and alerts the team without crossed calls or lost messages.`);
  T(`Menos ausencias`, `Fewer no-shows`);
  T(`Envía confirmaciones y recordatorios para reducir no-shows en servicios largos o de alto valor.`, `Sends confirmations and reminders to reduce no-shows for long or high-value services.`);
  T(`Venta de bonos`, `Voucher sales`);
  T(`Detecta interés en tarjetas regalo, packs, tratamientos y promociones aprobadas por el salón.`, `Detects interest in gift cards, packages, treatments and salon-approved promotions.`);
  T(`Seguimiento comercial`, `Commercial follow-up`);
  T(`Recupera clientes que preguntaron precio, no reservaron o llevan semanas sin volver.`, `Recovers clients who asked for prices, did not book or have not returned for weeks.`);
  T(`Del primer mensaje al hueco confirmado, con la agenda bajo control`, `From first message to confirmed slot, with the schedule under control`);
  T(`La IA pregunta lo justo para proponer un hueco real y dejar a tu equipo solo las excepciones.`, `AI asks just enough to suggest a real slot and leave only exceptions to your team.`);
  T(`Captura el servicio`, `Captures the service`);
  T(`Identifica si es corte, color, tratamiento, barbería, recogido o diagnóstico.`, `Identifies whether it is cut, color, treatment, barber service, updo or consultation.`);
  T(`Calcula duración`, `Calculates duration`);
  T(`Aplica reglas de agenda según servicio, profesional, sede y disponibilidad.`, `Applies scheduling rules by service, professional, location and availability.`);
  T(`Confirma cita`, `Confirms appointment`);
  T(`Envía ubicación, preparación, precio orientativo y recordatorio automático.`, `Sends location, preparation notes, indicative price and automatic reminder.`);
  T(`Escala excepciones`, `Escalates exceptions`);
  T(`Pasa al equipo cambios complejos, quejas, alergias o servicios que requieren criterio profesional.`, `Passes complex changes, complaints, allergies or services requiring professional judgment to the team.`);
  T(`Salón de peluquería con equipo trabajando`, `Hair salon with team at work`);
  T(`Cuánto tiempo consume tu recepción cada mes?`, `How much time does your reception consume each month?`);
  T(`Estima el impacto de automatizar primera respuesta, reservas, cambios de cita y recordatorios.`, `Estimate the impact of automating first response, bookings, appointment changes and reminders.`);
  T(`Consultas que se pueden automatizar`, `Inquiries that can be automated`);
  T(`NOVAIX automatiza reservas, preguntas frecuentes y seguimiento sin tocar servicios que requieren criterio del salón.`, `NOVAIX automates bookings, FAQs and follow-up without touching services that require salon judgment.`);
  T(`Un piloto centrado en reservas y agenda, medible desde la primera semana`, `A pilot focused on bookings and scheduling, measurable from the first week`);
  T(`Empezamos por los flujos de mayor volumen: reserva, cambio, precio orientativo, recordatorio y recuperación.`, `We start with the highest-volume flows: booking, change, indicative price, reminder and recovery.`);
  T(`Mapa de servicios, duraciones, precios orientativos y reglas de reserva.`, `Map of services, durations, indicative prices and booking rules.`);
  T(`Automatización de reserva, cambio, confirmación, recordatorio y reactivación.`, `Automation for booking, change, confirmation, reminder and reactivation.`);
  T(`Panel con citas creadas, huecos recuperados, consultas resueltas y derivaciones humanas.`, `Dashboard with created appointments, recovered slots, resolved inquiries and human handoffs.`);
  T(`CRM o hoja de leads`, `CRM or lead sheet`);
  T(`Preguntas normales antes de automatizar una peluquería`, `Common questions before automating a hair salon`);
  T(`Puede reservar según cada servicio?`, `Can it book according to each service?`);
  T(`Sí. Se configuran duraciones, profesionales, sedes y reglas por servicio para no bloquear huecos incorrectos.`, `Yes. Durations, professionals, locations and rules are configured per service to avoid blocking incorrect slots.`);
  T(`Puede responder precios?`, `Can it answer prices?`);
  T(`Puede explicar precios orientativos y condiciones aprobadas. Si hace falta diagnóstico, agenda una valoración.`, `It can explain indicative prices and approved conditions. If a consultation is needed, it books an assessment.`);
  T(`Y si el cliente quiere algo complicado?`, `What if the client wants something complex?`);
  T(`La IA resume la conversación y la deriva al equipo para que decida.`, `AI summarizes the conversation and routes it to the team to decide.`);
  T(`Sí. Puede ordenar mensajes de Instagram, WhatsApp, formularios y llamadas para convertirlos en agenda.`, `Yes. It can organize Instagram, WhatsApp, form and call messages to convert them into bookings.`);
  T(`Quieres ver qué automatizaríamos en tu peluquería?`, `Want to see what we would automate in your hair salon?`);
  T(`En 30 minutos revisamos tus canales, servicios, agenda y volumen de consultas. Sales con un mapa claro de lo que conviene automatizar primero.`, `In 30 minutes we review your channels, services, schedule and inquiry volume. You leave with a clear map of what should be automated first.`);

  T(`Landing de NOVAIX para talleres: recepción IA 24/7, citas, presupuestos iniciales, recordatorios y seguimiento de reparaciones.`, `NOVAIX landing page for workshops: 24/7 AI reception, appointments, initial quotes, reminders and repair follow-up.`);
  T(`NOVAIX Talleres · Recepción IA 24/7`, `NOVAIX Workshops · 24/7 AI Reception`);
  T(`Automatiza recepción, citas, presupuestos iniciales y seguimiento comercial para talleres.`, `Automate reception, appointments, initial quotes and commercial follow-up for workshops.`);
  T(`IA para talleres mecanicos`, `AI for auto repair workshops`);
  T(`Recepción IA 24/7 para talleres que no pueden perder reparaciones`, `24/7 AI reception for workshops that cannot afford to miss repairs`);
  T(`NOVAIX atiende WhatsApp, llamadas y formularios, recoge síntomas del vehículo, agenda diagnosis, recuerda revisiones y mantiene al cliente informado sin interrumpir al jefe de taller.`, `NOVAIX handles WhatsApp, calls and forms, collects vehicle symptoms, books diagnosis, reminds about checkups and keeps the customer informed without interrupting the workshop manager.`);
  T(`primera respuesta a conductores`, `first response to drivers`);
  T(`averias, citas y recordatorios`, `breakdowns, appointments and reminders`);
  T(`Workshop Ops AI`, `Workshop Ops AI`);
  T(`solicitudes atendidas hoy`, `requests handled today`);
  T(`citas de taller`, `workshop appointments`);
  T(`Nueva averia`, `New breakdown`);
  T(`Revisión e ITV`, `Service and inspection`);
  T(`Presupuesto inicial`, `Initial quote`);
  T(`Hola, el coche hace ruido al frenar. Podeis verlo esta semana?`, `Hi, the car makes noise when braking. Can you see it this week?`);
  T(`Sí. Te hago unas preguntas para agendar diagnosis: modelo, matrícula y desde cuando ocurre?`, `Yes. I will ask a few questions to book diagnosis: model, license plate and since when it has been happening?`);
  T(`Seat Leon, 2018. Desde ayer.`, `Seat Leon, 2018. Since yesterday.`);
  T(`Tengo hueco mañana 09:30 o jueves 16:00. La revisión inicial dura aprox. 30 min.`, `I have a slot tomorrow at 09:30 or Thursday at 16:00. The initial check takes about 30 minutes.`);
  T(`Necesito revisión antes de pasar ITV.`, `I need a service before the vehicle inspection.`);
  T(`Perfecto. Dime kilómetros, modelo y fecha limite de ITV para proponerte hueco.`, `Perfect. Tell me mileage, model and inspection deadline so I can suggest a slot.`);
  T(`Tiene 92.000 km y la ITV vence el viernes.`, `It has 92,000 km and the inspection expires on Friday.`);
  T(`Te puedo reservar miércoles 08:30. Te envío checklist y recordatorio.`, `I can book Wednesday at 08:30. I will send a checklist and reminder.`);
  T(`Cuánto cuesta cambiar pastillas de freno?`, `How much does it cost to change brake pads?`);
  T(`Depende del modelo y eje. Te puedo dar rango orientativo y reservar revisión para cerrar presupuesto.`, `It depends on the model and axle. I can give an indicative range and book a check to close the quote.`);
  T(`Es un Golf 2019, delanteras.`, `It is a 2019 Golf, front pads.`);
  T(`Recojo el dato. El equipo confirma precio final tras revisar referencia y disponibilidad de recambio.`, `I will collect that. The team confirms final price after checking reference and parts availability.`);
  T(`Una recepción que filtra urgencias, agenda diagnosis y reduce llamadas repetidas`, `A reception system that filters urgency, books diagnosis and reduces repeated calls`);
  T(`En un taller, cada llamada interrumpe trabajo técnico. La IA ordena la entrada y deja al equipo las decisiones mecanicas.`, `In a workshop, every call interrupts technical work. AI organizes intake and leaves mechanical decisions to the team.`);
  T(`Entrada multicanal`, `Multichannel intake`);
  T(`Atiende WhatsApp, llamadas, formularios y email con datos mínimos del vehículo y motivo de visita.`, `Handles WhatsApp, calls, forms and email with minimum vehicle data and visit reason.`);
  T(`Agenda diagnosis, revisión, ITV, mantenimiento o entrega según disponibilidad y reglas del taller.`, `Books diagnosis, service, inspection, maintenance or delivery based on availability and workshop rules.`);
  T(`Cualificación de averias`, `Breakdown qualification`);
  T(`Recoge síntomas, urgencia, modelo, matrícula y kilómetros sin diagnosticar ni prometer reparaciones.`, `Collects symptoms, urgency, model, license plate and mileage without diagnosing or promising repairs.`);
  T(`Recambios y presupuestos`, `Parts and quotes`);
  T(`Identifica solicitudes de precio y deriva cuando hace falta referencia, stock o criterio técnico.`, `Identifies price requests and escalates when a reference, stock or technical judgment is needed.`);
  T(`Recuerda citas, recogidas, revisiones periodicas y vencimientos de ITV.`, `Reminds about appointments, pickups, periodic services and inspection deadlines.`);
  T(`Seguimiento al cliente`, `Customer follow-up`);
  T(`Responde estados administrativos y escala al taller cuando hay decision tecnica.`, `Answers administrative statuses and escalates to the workshop when there is a technical decision.`);
  T(`Del aviso de averia a la cita de diagnosis, sin bloquear al taller`, `From breakdown notice to diagnosis appointment without blocking the workshop`);
  T(`La IA recoge datos útiles y agenda el siguiente paso sin sustituir criterio mecánico.`, `AI collects useful data and books the next step without replacing mechanical judgment.`);
  T(`Identifica vehículo`, `Identifies vehicle`);
  T(`Modelo, matrícula, kilómetros y disponibilidad del cliente.`, `Model, license plate, mileage and customer availability.`);
  T(`Clasifica motivo`, `Classifies reason`);
  T(`Averia, mantenimiento, ITV, presupuesto, recambio o entrega.`, `Breakdown, maintenance, inspection, quote, part or pickup.`);
  T(`Agenda hueco`, `Books slot`);
  T(`Propone diagnosis o revisión según capacidad, tiempos y urgencia.`, `Suggests diagnosis or service by capacity, times and urgency.`);
  T(`Escala lo técnico`, `Escalates technical matters`);
  T(`Deriva presupuestos cerrados, averias complejas o decisiones de reparacion.`, `Routes final quotes, complex breakdowns or repair decisions.`);
  T(`Taller mecánico con vehículo en reparacion`, `Auto repair workshop with vehicle under repair`);
  T(`solicitudes ordenadas fuera de horario`, `requests organized outside business hours`);
  T(`llamadas repetidas`, `repeated calls`);
  T(`citas, vehículos y seguimiento`, `appointments, vehicles and follow-up`);
  T(`Cuantas horas pierde tu taller atendiendo entrada?`, `How many hours does your workshop lose handling intake?`);
  T(`Estima el impacto de automatizar primera respuesta, datos del vehículo, citas y recordatorios.`, `Estimate the impact of automating first response, vehicle data, appointments and reminders.`);
  T(`Solicitudes mensuales`, `Monthly requests`);
  T(`Minutos medios por solicitud`, `Average minutes per request`);
  T(`Entrada automatizable`, `Automatable intake`);
  T(`NOVAIX no diagnostica averias. Ordena la información, agenda y escala al equipo técnico cuando corresponde.`, `NOVAIX does not diagnose breakdowns. It organizes information, schedules and escalates to the technical team when appropriate.`);
  T(`Un piloto para ordenar entrada, agenda y seguimiento del cliente`, `A pilot to organize intake, scheduling and customer follow-up`);
  T(`Arrancamos con diagnosis, revisión, ITV, presupuesto inicial, recordatorios y reactivación.`, `We start with diagnosis, service, inspection, initial quote, reminders and reactivation.`);
  T(`Auditoría de canales: teléfono, WhatsApp, formularios, email y agenda.`, `Channel audit: phone, WhatsApp, forms, email and schedule.`);
  T(`Mapa de servicios, tiempos de taller, reglas de urgencia y datos mínimos por vehículo.`, `Map of services, workshop times, urgency rules and minimum data per vehicle.`);
  T(`Flujos de cita, diagnosis, presupuesto inicial, recordatorio y recogida.`, `Flows for appointment, diagnosis, initial quote, reminder and pickup.`);
  T(`Panel con citas, solicitudes, vehículos, tiempos recuperados y derivaciones.`, `Dashboard with appointments, requests, vehicles, recovered time and handoffs.`);
  T(`Agenda de taller`, `Workshop schedule`);
  T(`CRM o DMS`, `CRM or DMS`);
  T(`Preguntas normales antes de automatizar un taller`, `Common questions before automating a workshop`);
  T(`Puede diagnosticar averias?`, `Can it diagnose breakdowns?`);
  T(`No. Recoge síntomas y datos útiles, pero el diagnóstico lo hace el equipo técnico.`, `No. It collects symptoms and useful data, but diagnosis is done by the technical team.`);
  T(`Puede dar presupuestos?`, `Can it provide quotes?`);
  T(`Puede dar rangos o condiciones aprobadas. El presupuesto cerrado se deriva si depende de recambio, referencia o revisión.`, `It can provide approved ranges or conditions. A final quote is escalated if it depends on parts, reference or inspection.`);
  T(`Sirve para llamadas?`, `Does it work for calls?`);
  T(`Sí. Puede recoger llamadas y convertirlas en solicitud ordenada o cita.`, `Yes. It can take calls and turn them into an organized request or appointment.`);
  T(`Puede recordar ITV y revisiones?`, `Can it remind about inspections and services?`);
  T(`Sí. Activa recordatorios y seguimientos según fechas o kilometraje si el dato está disponible.`, `Yes. It activates reminders and follow-ups by dates or mileage if the data is available.`);
  T(`Quieres ver qué automatizaríamos en tu taller?`, `Want to see what we would automate in your workshop?`);
  T(`En 30 minutos revisamos tus canales, agenda, volumen de llamadas y procesos de diagnosis. Sales con un mapa claro de automatización viable.`, `In 30 minutes we review your channels, schedule, call volume and diagnosis processes. You leave with a clear map of viable automation.`);

  const common = [
    [`Saltar al contenido`, `Skip to content`],
    [`Navegación principal`, `Main navigation`],
    [`Volver a NOVAIX`, `Back to NOVAIX`],
    [`Abrir menú`, `Open menu`],
    [`Sistema`, `System`],
    [`Operativa`, `Operations`],
    [`Impacto`, `Impact`],
    [`Piloto`, `Pilot`],
    [`Diagnóstico`, `Diagnosis`],
    [`Ver diagnóstico gratuito`, `View free diagnosis`],
    [`Calcular impacto`, `Calculate impact`],
    [`Métricas clave`, `Key metrics`],
    [`Panel de ejemplo de recepción IA`, `Example AI reception panel`],
    [`Online`, `Online`],
    [`Ejemplos de conversaciones de WhatsApp automatizadas`, `Examples of automated WhatsApp conversations`],
    [`WhatsApp Business`, `WhatsApp Business`],
    [`Flujos de WhatsApp`, `WhatsApp flows`],
    [`NOVAIX`, `NOVAIX`],
    [`WhatsApp + agenda + CRM sincronizados`, `WhatsApp + schedule + CRM synchronized`],
    [`Cómo trabaja`, `How it works`],
    [`consultas atendidas fuera de horario`, `inquiries handled outside business hours`],
    [`citas sin confirmar`, `unconfirmed appointments`],
    [`1 vista`, `1 view`],
    [`Estimador rápido`, `Quick estimator`],
    [`Consultas mensuales`, `Monthly inquiries`],
    [`Minutos medios por consulta`, `Average minutes per inquiry`],
    [`min`, `min`],
    [`Horas recuperables al mes`, `Recoverable hours per month`],
    [`por semana`, `per week`],
    [`consultas ordenadas`, `organized inquiries`],
    [`Piloto NOVAIX`, `NOVAIX pilot`],
    [`Auditoría de canales actuales: WhatsApp, teléfono, Instagram, formularios y agenda.`, `Audit of current channels: WhatsApp, phone, Instagram, forms and schedule.`],
    [`Conectores habituales`, `Common connectors`],
    [`Instagram`, `Instagram`],
    [`Agenda online`, `Online schedule`],
    [`FAQ`, `FAQ`],
    [`Otros negocios`, `Other businesses`],
    [`¿Quieres saber nuestra experiencia con otros negocios?`, `Want to see our experience with other businesses?`],
    [`Hemos agrupado las landings por sector para que puedas ver cómo cambia la automatización según el tipo de cliente, agenda y canal de entrada.`, `We have grouped the landing pages by sector so you can see how automation changes depending on customer type, schedule and inbound channel.`],
    [`Ver todos los negocios`, `View all businesses`],
    [`Agendar diagnóstico`, `Book diagnosis`],
    [`NOVAIX. Automatización e IA para operaciones, ventas y atención.`, `NOVAIX. Automation and AI for operations, sales and customer service.`],
    [`info@novaix.es`, `info@novaix.es`],
    [`Web principal`, `Main website`],
    [`Agenda con NOVAIX`, `Book with NOVAIX`],
    [`Cerrar agenda`, `Close calendar`],
    [`Aviso de cookies`, `Cookie notice`],
    [`Usamos cookies técnicas. Calendly se carga solo cuando abres la agenda para gestionar la cita.`, `We use technical cookies. Calendly loads only when you open the calendar to manage the appointment.`],
    [`Cerrar`, `Close`],
    [`Entendido`, `Understood`],
    [`Aceptar`, `Accept`],
    [`Rechazar`, `Reject`],
    [`Llamadas`, `Calls`],
    [`Cambios de cita`, `Appointment changes`],
    [`Citas de taller`, `Workshop appointments`],
    [`consultas resueltas sin espera`, `questions answered without waiting`],
    [`Al reservar aceptas nuestra`, `By booking, you accept our`],
    [`Política de Privacidad`, `Privacy Policy`],
    [`Responsable:`, `Controller:`],
    [`Finalidad:`, `Purpose:`],
    [`Base legal:`, `Legal basis:`],
    [`Herramientas externas:`, `External tools:`],
    [`Derechos:`, `Rights:`],
    [`Aviso Legal`, `Legal Notice`],
    [`Cookies`, `Cookies`],
    [`Seleccionar idioma`, `Select language`]
  ];
  common.forEach(([source, en]) => T(source, en));

  function injectSwitcher() {
    if (document.getElementById("language-select")) return;
    const host = document.querySelector(".nav-mini") || document.querySelector(".nav") || document.querySelector(".nav-links");
    if (!host) return;
    const label = document.createElement("label");
    label.className = "landing-language-switcher";
    label.setAttribute("aria-label", "Seleccionar idioma");
    label.innerHTML = `
      <span class="visually-hidden">Seleccionar idioma</span>
      <i class="fa-solid fa-globe" aria-hidden="true"></i>
      <select id="language-select" aria-label="Seleccionar idioma">
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    `;
    if (host.classList.contains("nav-mini")) {
      const cta = host.querySelector("button, .btn");
      if (cta && cta.parentElement === host) host.insertBefore(label, cta);
      else host.appendChild(label);
    } else if (host.classList.contains("nav")) {
      const toggle = host.querySelector(".nav-toggle, .menu-toggle");
      if (toggle && toggle.parentElement === host) host.insertBefore(label, toggle);
      else host.appendChild(label);
    } else {
      const cta = host.querySelector("button, .btn");
      if (cta && cta.parentElement === host) host.insertBefore(label, cta);
      else host.appendChild(label);
    }
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    const storedLang = localStorage.getItem("novaix_language");
    const lang = ["es", "en"].includes(urlLang) ? urlLang : (["es", "en"].includes(storedLang) ? storedLang : "es");
    label.querySelector("select").value = lang;
  }

  function injectStyles() {
    if (document.getElementById("landing-language-styles")) return;
    const style = document.createElement("style");
    style.id = "landing-language-styles";
    style.textContent = `
      .landing-language-switcher {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        min-height: 42px;
        padding: 8px 10px;
        border-radius: 12px;
        color: inherit;
        border: 1px solid rgba(255,255,255,0.14);
        background: rgba(255,255,255,0.055);
        cursor: pointer;
      }
      .landing-language-switcher select {
        width: 46px;
        border: 0;
        outline: 0;
        appearance: none;
        color: inherit;
        background: transparent;
        font: inherit;
        font-weight: 900;
        letter-spacing: 0.04em;
        cursor: pointer;
      }
      .landing-language-switcher select option {
        color: #07101b;
        background: #f8fafc;
      }
      .landing-language-switcher .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      @media (max-width: 820px) {
        .nav-links .landing-language-switcher {
          width: 100%;
          order: -1;
        }
        .nav > .landing-language-switcher {
          margin-left: auto;
        }
      }
    `;
    document.head.appendChild(style);
  }

  window.novaixExtraTranslations = (window.novaixExtraTranslations || []).concat(translations);
  if (typeof window.novaixRegisterTranslations === "function") {
    window.novaixRegisterTranslations(translations);
  }

  injectStyles();
  injectSwitcher();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      injectStyles();
      injectSwitcher();
    });
  }
})();
