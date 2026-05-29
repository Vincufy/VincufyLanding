// Target date: 30 days from 2026-05-29
const COUNTDOWN_TARGET = "2026-06-28T23:59:59-03:00";

export const boliches = {
  segment: "boliches",
  highlightedTier: "pro",
  modules: [
    {
      kind: "hero_mockup",
    },
    {
      kind: "hero",
      title: "Tu boliche llena el sábado. ¿Qué queda el domingo?",
      subtitle:
        "Con Vincufy, cada entrada que vendés también construye la comunidad de tu boliche. Vendé anticipadas, organizá asistentes y mantené a tu público activo entre fecha y fecha.",
      ctaPrimary: { kind: "cta_buy" },
      ctaSecondary: { kind: "scroll_to", target: "como-funciona", label: "Ver cómo funciona" },
      microcopy:
        "Ideal para boliches con eventos recurrentes, listas, RRPPs y anticipadas.",
    },
    {
      kind: "social_proof",
      text: "Organizadores de eventos están dejando de perder su público después de cada noche.",
    },
    {
      kind: "hero_image",
    },
    {
      kind: "problem_stat",
      stat: "8 de cada 10",
      text: "boliches no sabe exactamente quién entró el sábado pasado ni cómo volver a contactarlos la semana siguiente.",
      estimacion: true,
    },
    {
      kind: "founder_voice",
      name: "El founder de Vincufy",
      text: "Armé Vincufy porque organicé eventos por años y siempre me pasaba lo mismo: llenábamos el boliche, la gente la pasaba bien, y al finde siguiente teníamos que salir a buscar ese mismo público desde cero. Las listas se perdían, los RRPPs manejaban sus contactos por separado, y el boliche nunca quedaba con nada. Después de mil noches así, entendí que el problema no era la convocatoria: era que no existía una forma simple de que el asistente quedara vinculado al boliche después de la puerta.",
    },
    {
      kind: "problem_familiar",
      title: "¿Te suena familiar?",
      bullets: [
        { emoji: "📋", text: "Cada RRPP maneja su lista por separado y terminas con cinco Excel distintos el sábado a la noche." },
        { emoji: "💸", text: "Vendés anticipadas por transferencia, por link, por ticket físico y nunca sabés bien el total hasta que cierra la puerta." },
        { emoji: "📲", text: "Tu público queda en el grupo de WhatsApp hasta que se llena, después se arma otro y perdés el hilo." },
        { emoji: "🔄", text: "Cada fecha arrancás de cero: flyer nuevo, difusión nueva, público nuevo. Sin base acumulada." },
        { emoji: "🤷", text: "No sabés quién viene seguido, quién vino una sola vez y quién dejó de venir sin que lo notes." },
      ],
    },
    {
      kind: "before_after_arrow",
      title: "Antes y después de Vincufy",
      before: {
        title: "Sin Vincufy",
        items: [
          "Listas dispersas entre RRPPs",
          "El público se va y no queda nada",
          "Difusión solo por Instagram/WhatsApp",
          "Confirmaciones manuales sin cierre claro",
          "Cada noche empieza desde cero",
        ],
      },
      after: {
        title: "Con Vincufy",
        items: [
          "Un solo lugar para listas y asistentes",
          "Cada entrada genera vínculo con el boliche",
          "Canal directo con tu público entre fechas",
          "Acceso digital claro para cada asistente",
          "Base de público que crece con cada noche",
        ],
      },
    },
    {
      kind: "what_is",
      title: "Vincufy: más que una ticketera.",
      body:
        "Vincufy es una plataforma para vender entradas, organizar asistentes y mantener a tu público conectado con tu boliche entre fecha y fecha. No es solo una transacción. Es el primer paso para convertir asistentes en comunidad.",
      tagline: "Entrada + comunidad + comunicación directa.",
    },
    {
      kind: "includes_checklist",
      title: "Todo lo que llevás con Vincufy",
      items: [
        {
          emoji: "🎟️",
          name: "Venta de entradas digital",
          desc: "Anticipadas por link, con control de lotes y corte de precio automático.",
          isBonus: false,
        },
        {
          emoji: "📋",
          name: "Gestión de listas y RRPPs",
          desc: "Cada RRPP carga su lista en Vincufy. Vos ves el total en tiempo real.",
          isBonus: false,
        },
        {
          emoji: "🚪",
          name: "Validación en puerta",
          desc: "QR por entrada. Menos filas, menos errores, más control.",
          isBonus: false,
        },
        {
          emoji: "💬",
          name: "Sala y comunidad del evento",
          desc: "Tus asistentes quedan vinculados al boliche después de entrar.",
          isBonus: false,
        },
        {
          emoji: "📣",
          name: "Comunicación directa con el público",
          desc: "Avisá la próxima fecha sin depender de que Instagram te muestre.",
          isBonus: false,
        },
        {
          emoji: "📊",
          name: "Reporte post-evento",
          desc: "Quién vino, por qué canal entró, cuántos repiten. Sin adivinanza.",
          isBonus: false,
        },
        {
          emoji: "📄",
          name: "Plantilla de checklist pre-evento (PDF)",
          desc: "Todo lo que tenés que tener listo antes de abrir la puerta, en un PDF editable.",
          isBonus: true,
        },
        {
          emoji: "🤝",
          name: "Onboarding 1-on-1 con el founder en tu primer evento",
          desc: "Te acompañamos en la primera fecha para que el setup salga perfecto.",
          isBonus: true,
        },
      ],
    },
    {
      kind: "how_it_works",
      anchor: "como-funciona",
      title: "En tres pasos, tu boliche empieza a usar Vincufy.",
      steps: [
        {
          n: 1,
          title: "Creamos tu evento",
          body: "Cargás la info de la noche, configurás lotes de anticipadas y le das acceso a tus RRPPs.",
        },
        {
          n: 2,
          title: "Tu público compra y entra",
          body: "Cada persona recibe su entrada digital. En puerta, validación por QR. Sin caos.",
        },
        {
          n: 3,
          title: "Seguís conectado después",
          body: "Tu público queda vinculado al boliche. Podés avisar la próxima fecha sin empezar de cero.",
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
        title: "Para vos (el boliche)",
        bullets: [
          "Base de público que crece con cada fecha",
          "Control total de listas y accesos",
          "Menos trabajo manual para tu equipo",
          "Canal propio para convocar sin pagar publicidad",
          "Métricas reales de quién viene y con qué frecuencia",
          "Imagen más profesional en cada punto de contacto",
        ],
      },
      colAudience: {
        title: "Para tu público",
        bullets: [
          "Entrada digital clara, sin confusión",
          "Info del evento en un solo lugar",
          "Comunidad del boliche en el bolsillo",
          "Menos filas y más rapidez en puerta",
          "Primera enterarse de la próxima fecha",
          "Experiencia que se nota más cuidada",
        ],
      },
    },
    {
      kind: "testimonials_carousel",
      title: "Lo que dicen los que lo usan",
      items: [
        {
          quote: "Antes cada finde terminaba con cinco WhatsApp distintos de RRPPs peleándose por el total. Ahora todo cierra solo.",
          name: "Luciana M.",
          role: "organizadora de fiestas electrónicas",
          city: "Buenos Aires, CABA",
          placeholder: true,
        },
        {
          quote: "La primera vez que pude avisar una fecha nueva sin pagar pauta fue con Vincufy. Mandé una notificación y tuvimos 200 confirmaciones en horas.",
          name: "Matías R.",
          role: "productor de eventos nocturnos",
          city: "Córdoba capital",
          placeholder: true,
        },
        {
          quote: "Mis RRPPs ahora cargan sus listas solos y yo veo el total en tiempo real. Nunca más me enteré de cuánta gente había después de que cerró la puerta.",
          name: "Valentina S.",
          role: "dueña de boliche",
          city: "Rosario, Santa Fe",
          placeholder: true,
        },
        {
          quote: "El QR en puerta parece una pavada hasta que lo usás. La gente entró el doble de rápido y casi no hubo líos.",
          name: "Tomás F.",
          role: "encargado de producción",
          city: "Mendoza capital",
          placeholder: true,
        },
        {
          quote: "Lo que más me sorprendió fue que la gente quedó en la sala del evento incluso una semana después. Nos preguntaban por la próxima fecha solos.",
          name: "Sofía P.",
          role: "organizadora de fiestas universitarias",
          city: "La Plata, Buenos Aires",
          placeholder: true,
        },
        {
          quote: "Pensé que era solo para eventos grandes. Lo probé para 180 personas y funcionó perfecto. Ahora lo uso en cada fecha.",
          name: "Agustín B.",
          role: "productor independiente",
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
          q: "¿Vincufy reemplaza a mi ticketera actual?",
          a: "Puede reemplazarla o complementarla. Vincufy cubre venta de entradas y va más allá: agrega comunidad y canal de comunicación propio. Podés arrancar con un evento y evaluarlo.",
        },
        {
          q: "¿Sirve si mi boliche hace fechas todas las semanas?",
          a: "Justamente ahí es donde más sentido tiene. Mientras más seguido hacés eventos, más vale tener una base propia que no dependa de Instagram para cada convocatoria.",
        },
        {
          q: "¿Cómo se manejan los RRPPs?",
          a: "Cada RRPP puede cargar y ver su propia lista. Vos ves el total consolidado. Terminaron los WhatsApp con totales contradictorios a las 2am.",
        },
        {
          q: "¿Mi público tiene que descargar una app?",
          a: "No necesariamente. El flujo puede ser vía web. Si hay app, el onboarding con el founder te explica la mejor opción para tu caso.",
        },
        {
          q: "¿Qué pasa si ya tengo un sistema de anticipadas?",
          a: "Podés arrancar usando Vincufy en paralelo para un solo evento y comparar resultados. No tenés que cambiar todo de golpe.",
        },
      ],
    },
    {
      kind: "final_cta_card",
      headline: "Tu próximo finde puede ser el inicio de una comunidad.",
      subline: "Asegurá tu precio fundador antes de que cierre la lista. Los primeros 100 pagan el precio de siempre.",
    },
  ],
};
