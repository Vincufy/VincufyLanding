// Target date: 30 days from 2026-05-29
const COUNTDOWN_TARGET = "2026-06-28T23:59:59-03:00";

export const productores = {
  segment: "productores",
  highlightedTier: "pro",
  modules: [
    {
      kind: "hero_mockup",
    },
    {
      kind: "hero",
      title: "Producís eventos seguido. Ya es hora de que dejen algo después.",
      subtitle:
        "Con Vincufy podés crear eventos, gestionar asistentes, vender entradas y mantener conectada a tu comunidad entre fecha y fecha. Menos caos operativo, más marca propia.",
      ctaPrimary: { kind: "cta_buy" },
      ctaSecondary: {
        kind: "scroll_to",
        target: "como-funciona",
        label: "Ver cómo funciona",
      },
      microcopy:
        "Para productores de fiestas, ciclos, shows, ferias, eventos culturales y experiencias recurrentes.",
    },
    {
      kind: "social_proof",
      text: "Productores independientes están dejando de organizar cada evento desde cero.",
    },
    {
      kind: "hero_image",
    },
    {
      kind: "problem_stat",
      stat: "Más del 70%",
      text: "de los productores independientes arma cada evento desde cero, sin reusar casi nada del anterior: ni la base de asistentes, ni la comunicación, ni los datos.",
      estimacion: true,
    },
    {
      kind: "founder_voice",
      name: "El founder de Vincufy",
      text: "Hice muchos eventos antes de armar Vincufy. Lo que me frustraba no era convocar gente: era que después de cada fecha, esa gente desaparecía. No tenía forma de avisarles la próxima. No tenía sus datos. No sabía quién había venido dos veces y quién una. Empecé Vincufy para que los productores puedan construir algo que dure más que una sola noche.",
    },
    {
      kind: "problem_familiar",
      title: "¿Te suena familiar?",
      bullets: [
        { emoji: "📱", text: "Vendés entradas por transferencia, Instagram y WhatsApp a la vez, y confirmás todo a mano." },
        { emoji: "🔁", text: "Cada evento empieza desde cero. Flyer, difusión, base. Como si el anterior no hubiera existido." },
        { emoji: "💬", text: "Te preguntan los datos del evento cien veces por privado aunque ya los pusiste en el flyer." },
        { emoji: "📊", text: "Terminás el evento sin saber bien cuánta gente vino, por qué canal llegó ni quién repetiría." },
        { emoji: "😮‍💨", text: "La parte operativa te come más tiempo que la parte creativa. Y producís eventos porque te gusta lo creativo." },
      ],
    },
    {
      kind: "before_after_arrow",
      title: "Antes y después de Vincufy",
      before: {
        title: "Sin Vincufy",
        items: [
          "Ventas por mensajes y transferencias",
          "Cada evento empieza desde cero",
          "Datos del público dispersos o perdidos",
          "Difusión 100% dependiente de Instagram",
          "Imagen improvisada en cada punto de contacto",
        ],
      },
      after: {
        title: "Con Vincufy",
        items: [
          "Venta de entradas centralizada y clara",
          "Base de asistentes que crece evento a evento",
          "Canal directo con tu público sin algoritmo",
          "Imagen más profesional desde el primer contacto",
          "Cada fecha alimenta la siguiente",
        ],
      },
    },
    {
      kind: "what_is",
      title: "Vincufy: la plataforma que organiza tus eventos y construye tu marca.",
      body:
        "Vincufy te permite crear eventos, gestionar asistentes y mantener una comunidad activa alrededor de tu propuesta. No necesitás una estructura enorme. Necesitás una forma más seria de organizar lo que ya hacés bien.",
      tagline: "Menos caos. Más marca. Más continuidad.",
    },
    {
      kind: "includes_checklist",
      title: "Todo lo que llevás con Vincufy",
      items: [
        {
          emoji: "🎟️",
          name: "Venta de entradas digital",
          desc: "Por link, con lotes y precios diferenciados. Sin intermediarios que te cobren de más.",
          isBonus: false,
        },
        {
          emoji: "📋",
          name: "Gestión de asistentes",
          desc: "Quién compró, quién pagó, quién confirmó. Todo en un solo lugar.",
          isBonus: false,
        },
        {
          emoji: "🚪",
          name: "Acceso y validación en puerta",
          desc: "QR por entrada. Control claro sin listas en papel ni confusión.",
          isBonus: false,
        },
        {
          emoji: "💬",
          name: "Sala y comunidad del evento",
          desc: "Tus asistentes quedan en un espacio propio del evento, no en un grupo de WhatsApp genérico.",
          isBonus: false,
        },
        {
          emoji: "📣",
          name: "Comunicación directa con tu comunidad",
          desc: "Avisá la próxima fecha sin depender de que Instagram decida mostrarte.",
          isBonus: false,
        },
        {
          emoji: "📊",
          name: "Datos de cada evento",
          desc: "Asistencia real, canales de entrada, participación. Para tomar mejores decisiones.",
          isBonus: false,
        },
        {
          emoji: "📄",
          name: "Plantilla de checklist pre-evento (PDF)",
          desc: "Todo lo que tenés que resolver antes del día del evento, ordenado en un PDF editable.",
          isBonus: true,
        },
        {
          emoji: "🤝",
          name: "Onboarding 1-on-1 con el founder en tu primer evento",
          desc: "Te acompañamos en la primera fecha para que el setup sea impecable desde el arranque.",
          isBonus: true,
        },
      ],
    },
    {
      kind: "how_it_works",
      anchor: "como-funciona",
      title: "Organizá tu próximo evento en tres pasos.",
      steps: [
        {
          n: 1,
          title: "Creás tu evento en Vincufy",
          body: "Cargás la info principal, configurás las entradas y preparás la sala para tu público.",
        },
        {
          n: 2,
          title: "Compartís el acceso con tu comunidad",
          body: "Tu público compra, confirma y tiene todo en un solo lugar. Menos preguntas por privado.",
        },
        {
          n: 3,
          title: "Seguís conectado después del evento",
          body: "Tu audiencia no desaparece cuando termina la noche. La próxima convocatoria ya tiene base.",
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
        title: "Para vos (el productor)",
        bullets: [
          "Base propia que no depende de Instagram",
          "Imagen profesional desde el primer contacto",
          "Menos trabajo manual, más tiempo para lo creativo",
          "Datos reales de cada evento para decidir mejor",
          "Cada fecha construye la siguiente",
          "Control sobre tu comunidad sin intermediarios",
        ],
      },
      colAudience: {
        title: "Para tu público",
        bullets: [
          "Entrada y acceso claros, todo en el celular",
          "Información del evento sin buscar en chats viejos",
          "Comunidad del evento para antes, durante y después",
          "Primeros en enterarse de las próximas fechas",
          "Experiencia que refleja la calidad de tu propuesta",
        ],
      },
    },
    {
      kind: "testimonials_carousel",
      title: "Lo que dicen los que lo usan",
      items: [
        {
          quote: "Por primera vez después de un evento no perdí el contacto con la gente. Me preguntaban solos cuándo era la próxima fecha.",
          name: "Camila D.",
          role: "productora de eventos culturales",
          city: "Buenos Aires, CABA",
          placeholder: true,
        },
        {
          quote: "Antes tardaba dos semanas en armar todo el operativo de un evento. Ahora lo tengo listo en un día y con menos errores.",
          name: "Nicolás V.",
          role: "productor de ciclos de música electrónica",
          city: "Córdoba capital",
          placeholder: true,
        },
        {
          quote: "La imagen que proyecta es otra. Antes parecía todo armado a los ponchazos. Ahora el público ve algo más cuidado desde que le mandás el link.",
          name: "Julieta A.",
          role: "productora de eventos universitarios",
          city: "Rosario, Santa Fe",
          placeholder: true,
        },
        {
          quote: "Mis eventos son chicos, máximo 150 personas. Pensé que Vincufy era para algo más grande. Me equivoqué.",
          name: "Santiago G.",
          role: "productor de eventos de nicho",
          city: "Mendoza capital",
          placeholder: true,
        },
        {
          quote: "Lo que más me cambió fue dejar de depender de Instagram para convocar. Ahora aviso directo y la respuesta es mucho más rápida.",
          name: "Lucía T.",
          role: "productora de ferias y mercados",
          city: "San Miguel de Tucumán",
          placeholder: true,
        },
        {
          quote: "El onboarding con el founder fue clave. En media hora entendí cómo sacarle el mejor partido a la plataforma para mis eventos.",
          name: "Ezequiel H.",
          role: "productor de after office",
          city: "Bahía Blanca, Buenos Aires",
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
          q: "¿Sirve si hago eventos chicos?",
          a: "Sí. Para eventos chicos es donde más se nota la diferencia: sin caos operativo, imagen más profesional y base propia que empieza a crecer desde el primer evento.",
        },
        {
          q: "¿Sirve si hago eventos todos los meses?",
          a: "Sí. Cuanto más seguido producís, más valor tiene tener una comunidad que no empieza de cero con cada fecha.",
        },
        {
          q: "¿Reemplaza WhatsApp o Instagram para comunicar?",
          a: "No los reemplaza. Los complementa. Instagram puede seguir siendo tu canal de difusión. Vincufy te da un canal directo con quien ya compró o asistió, sin algoritmo de por medio.",
        },
        {
          q: "¿Puedo probarlo con una sola fecha?",
          a: "Sí. Lo ideal es empezar con un evento real, medir cómo responde tu público y decidir con datos en la mano.",
        },
        {
          q: "¿Qué diferencia a Vincufy de una ticketera tradicional?",
          a: "Una ticketera resuelve la transacción. Vincufy convierte esa transacción en el inicio de una relación: comunidad, comunicación y datos propios.",
        },
      ],
    },
    {
      kind: "final_cta_card",
      headline: "Cada evento que hacés debería dejarte algo más que una noche vendida.",
      subline: "Asegurá tu precio fundador antes de que cierre la lista. Los primeros 100 pagan el precio de siempre.",
    },
  ],
};
