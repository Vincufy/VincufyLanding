// Target date: 30 days from 2026-05-29
const COUNTDOWN_TARGET = "2026-06-28T23:59:59-03:00";

export const casual = {
  segment: "casual",
  highlightedTier: "pro",
  modules: [
    {
      kind: "hero_mockup",
    },
    {
      kind: "hero",
      title: "Organizar un evento no tiene que ser un quilombo de mensajes.",
      subtitle:
        "Con Vincufy creás tu evento, compartís el acceso con tus invitados y tenés todo ordenado desde el principio. Sin chats eternos, sin planillas, sin llegar al día del evento sin saber cuántos van.",
      ctaPrimary: { kind: "cta_buy" },
      ctaSecondary: {
        kind: "scroll_to",
        target: "como-funciona",
        label: "Ver cómo funciona",
      },
      microcopy:
        "Para cumpleaños, despedidas, fiestas privadas, eventos solidarios, torneos, peñas y cualquier evento puntual.",
    },
    {
      kind: "social_proof",
      text: "Quienes organizan eventos puntuales están dejando de perder horas en WhatsApp.",
    },
    {
      kind: "hero_image",
    },
    {
      kind: "problem_stat",
      stat: "14 horas",
      text: "en promedio toma organizar un evento puntual cuando todo pasa por WhatsApp: mensajes, confirmaciones, pagos, consultas repetidas y correcciones de último momento.",
      estimacion: true,
    },
    {
      kind: "founder_voice",
      name: "El founder de Vincufy",
      text: "Organicé eventos de todo tipo antes de armar Vincufy. Y siempre el momento más frustrante era el mismo: cuando te dabas cuenta de que habías pasado más tiempo respondiendo mensajes que disfrutando la previa. Gente que confirmaba y no aparecía. Gente que no vio el mensaje con la dirección. Pagos que nunca se cerraban del todo. Armé Vincufy para que eso no pase más.",
    },
    {
      kind: "problem_familiar",
      title: "¿Te suena familiar?",
      bullets: [
        { emoji: "💬", text: "Contestás las mismas preguntas mil veces: cuánto cuesta, dónde es, qué llevar, a qué hora." },
        { emoji: "✅", text: "Alguien dice que va, después no va, y vos te enterás el día antes." },
        { emoji: "💸", text: "Los pagos llegan solos, en distintos momentos y por distintos medios. Llevar la cuenta es otro trabajo." },
        { emoji: "📋", text: "Tu lista de confirmados vive en notas, en capturas y en la memoria. Nada muy confiable." },
        { emoji: "😰", text: "El día del evento llegás con más dudas que certezas: ¿cuántos van a venir realmente?" },
      ],
    },
    {
      kind: "before_after_arrow",
      title: "Antes y después de Vincufy",
      before: {
        title: "Sin Vincufy",
        items: [
          "Toda la info del evento vive en el chat",
          "Confirmaciones que entran y salen sin control",
          "Pagos sueltos sin cierre claro",
          "Llegar al evento con dudas sobre cuántos van",
          "Horas respondiendo lo mismo por privado",
        ],
      },
      after: {
        title: "Con Vincufy",
        items: [
          "Un link con toda la info clara del evento",
          "Lista de asistentes actualizada y visible",
          "Acceso digital ordenado para cada invitado",
          "Menos consultas, más silencio en el celular",
          "Llegás al evento sabiendo bien qué te espera",
        ],
      },
    },
    {
      kind: "what_is",
      title: "Vincufy: organizá tu evento sin volverte loco en el proceso.",
      body:
        "Vincufy es una plataforma para crear eventos, ordenar asistentes y tener todo en un solo lugar. No necesitás ser productor ni hacer eventos todo el tiempo. Si vas a organizar algo, lo mejor es hacerlo con una herramienta pensada para eso.",
      tagline: "Un evento más ordenado. Menos mensajes. Menos estrés.",
    },
    {
      kind: "includes_checklist",
      title: "Todo lo que llevás con Vincufy",
      items: [
        {
          emoji: "📅",
          name: "Página del evento",
          desc: "Fecha, lugar, descripción, lo que sea necesario. Todo en un link que compartís con tus invitados.",
          isBonus: false,
        },
        {
          emoji: "🎟️",
          name: "Entrada o acceso digital",
          desc: "Cada invitado tiene su acceso claro. Sin capturas de pantalla, sin confusión.",
          isBonus: false,
        },
        {
          emoji: "📋",
          name: "Lista de asistentes",
          desc: "Ves quién confirmó, quién pagó y cuántos van a estar. Sin buscar en chats.",
          isBonus: false,
        },
        {
          emoji: "📣",
          name: "Comunicación directa con tus invitados",
          desc: "Mandás una actualización y les llega a todos. Sin grupos de WhatsApp que explotan.",
          isBonus: false,
        },
        {
          emoji: "🚪",
          name: "Validación en puerta",
          desc: "QR por acceso. Sabés exactamente quién está entrando.",
          isBonus: false,
        },
        {
          emoji: "📊",
          name: "Resumen del evento",
          desc: "Cuántos vinieron, por qué canal llegaron. Para que quede registro.",
          isBonus: false,
        },
        {
          emoji: "📄",
          name: "Plantilla de checklist pre-evento (PDF)",
          desc: "Todo lo que tenés que resolver antes del día del evento, en un PDF editable que podés reusar.",
          isBonus: true,
        },
        {
          emoji: "🤝",
          name: "Onboarding 1-on-1 con el founder en tu primer evento",
          desc: "Si tenés dudas al arrancar, te acompañamos para que el setup salga perfecto.",
          isBonus: true,
        },
      ],
    },
    {
      kind: "how_it_works",
      anchor: "como-funciona",
      title: "Organizá tu evento en tres pasos.",
      steps: [
        {
          n: 1,
          title: "Creás tu evento",
          body: "Cargás nombre, fecha, lugar y toda la info que necesitan tus invitados. En minutos.",
        },
        {
          n: 2,
          title: "Compartís el link",
          body: "Lo mandás por donde quieras: WhatsApp, Instagram, mail. Cada invitado tiene su acceso claro.",
        },
        {
          n: 3,
          title: "Llegás al evento con todo claro",
          body: "Sabés cuántos confirmaron, quiénes vienen y qué falta resolver. Sin adivinar.",
        },
      ],
      cta: { kind: "cta_buy" },
    },
    {
      kind: "gallery_carousel",
      title: "Cómo se ve Vincufy en acción",
      cards: [
        { caption: "Vista de venta de entradas", dimensions: "390×844 · 9:16" },
        { caption: "Comunidad del evento", dimensions: "390×844 · 9:16" },
        { caption: "Validación en puerta", dimensions: "390×844 · 9:16" },
        { caption: "Reporte post-evento", dimensions: "390×844 · 9:16" },
      ],
    },
    {
      kind: "benefits_grid_two_col",
      title: "Lo que ganás vos. Lo que vive tu público.",
      colOrganizer: {
        title: "Para vos (el organizador)",
        bullets: [
          "Menos mensajes repetidos en el celular",
          "Control claro de quién va y quién no",
          "Pagos y confirmaciones en un solo lugar",
          "Llegás al evento sin dudas",
          "Imagen más cuidada para tu evento",
          "Menos estrés en los días previos",
        ],
      },
      colAudience: {
        title: "Para tus invitados",
        bullets: [
          "Toda la info del evento en un solo lugar",
          "Acceso digital claro, sin buscar capturas",
          "Actualizaciones directas sin perderse nada",
          "Experiencia más prolija y organizada",
          "Menos idas y vueltas por privado",
        ],
      },
    },
    {
      kind: "testimonials_carousel",
      title: "Lo que dicen los que lo usan",
      items: [
        {
          quote: "Organicé el cumpleaños de 15 de mi hermana. Con Vincufy las consultas se cortaron a la mitad desde el primer día.",
          name: "Florencia M.",
          role: "organizadora de evento familiar",
          city: "Buenos Aires, CABA",
          placeholder: true,
        },
        {
          quote: "Para la despedida de soltera usé Vincufy y fue otro nivel. Todas tenían la info clara desde el principio y llegamos más tranquilas.",
          name: "Romina P.",
          role: "organizadora de evento privado",
          city: "Córdoba capital",
          placeholder: true,
        },
        {
          quote: "Hacemos un torneo de fútbol cada año con los del trabajo. Antes era un caos de grupos y listas. Ahora Vincufy resuelve todo.",
          name: "Hernán C.",
          role: "organizador de torneo anual",
          city: "Rosario, Santa Fe",
          placeholder: true,
        },
        {
          quote: "Para el evento solidario de la asociación era fundamental saber cuántas personas venían. Vincufy nos dio eso sin complicarnos.",
          name: "Andrea L.",
          role: "organizadora de evento solidario",
          city: "Mendoza capital",
          placeholder: true,
        },
        {
          quote: "Nunca había usado nada parecido porque pensaba que era complicado. Lo tuve listo en veinte minutos y funcionó perfecto.",
          name: "Diego S.",
          role: "organizador de evento de egresados",
          city: "La Plata, Buenos Aires",
          placeholder: true,
        },
        {
          quote: "Lo que más me alivió fue no tener que responder '¿dónde es?' veinte veces. Todo estaba en el link desde el día uno.",
          name: "Marcela R.",
          role: "organizadora de reunión de barrio",
          city: "Mar del Plata, Buenos Aires",
          placeholder: true,
        },
      ],
    },
    {
      kind: "pricing",
    },
    {
      kind: "urgency_countdown",
      label: "Cierre de la lista de fundadores en:",
      targetDate: COUNTDOWN_TARGET,
    },
    {
      kind: "money_back_guarantee",
      headline: "Garantía 30 días",
      text: "Probás Vincufy en tu primer evento. Si no te encanta, te devolvemos cada peso. Sin preguntas, sin formularios.",
    },
    {
      kind: "faq",
      items: [
        {
          q: "¿Sirve si voy a hacer un solo evento?",
          a: "Sí. Justamente está pensado para eso. No necesitás hacer eventos todo el tiempo para que te sirva.",
        },
        {
          q: "¿Necesito saber de tecnología o de producción de eventos?",
          a: "No. Si podés mandar un link por WhatsApp, podés usar Vincufy. El setup es simple desde el arranque.",
        },
        {
          q: "¿Sirve para eventos privados?",
          a: "Sí. Cumpleaños, despedidas, peñas, torneos, reuniones familiares, eventos de clubes. Todo lo que sea un evento puntual.",
        },
        {
          q: "¿Mis invitados necesitan instalarse algo?",
          a: "No necesariamente. Depende del flujo que elijas. El onboarding con el founder te orienta según tu caso.",
        },
        {
          q: "¿Me ayuda a evitar preguntas repetidas?",
          a: "Sí. Con toda la info centralizada en el link del evento, la gente consulta ahí en vez de mandarte mensajes.",
        },
      ],
    },
    {
      kind: "final_cta_card",
      headline: "Tu evento puede estar bien organizado aunque sea una sola vez.",
      subline: "Asegurá tu precio fundador antes de que cierre la lista. Los primeros 100 pagan el precio de siempre.",
    },
  ],
};
