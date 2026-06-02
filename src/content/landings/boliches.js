export const boliches = {
  segment: "boliches",
  highlightedTier: "pro",
  modules: [
    {
      kind: "hero",
      title: "Las ticketeras no deberían solo vender entradas.",
      subtitle: "Sino ayudarte a crear\ntu comunidad y hacerte crecer.",
    },
    {
      kind: "hero_image",
      aspect: "square",
      src: "/landing/hero-boliches.png",
      alt: "Vincufy para boliches",
    },
    {
      kind: "tagline_cta",
      ctaPrimary: { kind: "cta_buy" },
      ctaSecondary: { kind: "scroll_to", target: "como-funciona", label: "Ver cómo funciona" },
    },
    {
      kind: "highlight_box",
      text: "0% de comisión · sin costo de servicio · liquidación de fondos al instante",
    },
    {
      kind: "problem_familiar",
      title: "¿Te pasa que...?",
      bullets: [
        { emoji: "⏳", text: "Tu ticketera te retiene los fondos y te paga después de tu evento." },
        { emoji: "🔄", text: "Cada evento volvés a convocar desde cero." },
        { emoji: "📣", text: "Dependés de Instagram, publicidad o RRPP para llenar." },
        { emoji: "❓", text: "No sabés quiénes fueron ni podés contactarlos." },
        { emoji: "👥", text: "Llenás una fecha, pero no construís audiencia propia." },
        { emoji: "👋", text: "Invertís para atraer gente que después desaparece." },
      ],
    },
    {
      kind: "before_after_arrow",
      title: "¿Y si tu próximo evento fuera diferente?",
      before: {
        title: "Con otra ticketera",
        items: [
          "Te liquidan los fondos después del evento",
          "Los asistentes pagan costo de servicio",
          "No fidelizás a tu público",
          "No tenés un canal de comunicación directo",
          "Mayor costo de adquisición de clientes",
          "No te hacen crecer en cada evento",
        ],
      },
      after: {
        title: "Con Vincufy",
        items: [
          "Recibís la plata al instante",
          "Los asistentes compran entradas más baratas",
          "Tu público puede vincularse en la plataforma",
          "Podés mandarles promociones e invitarlos a próximos eventos",
          "No tenés que generar confianza desde cero",
        ],
      },
    },
    {
      kind: "what_is",
      title: "¿Qué es Vincufy?",
      body:
        "Una plataforma integral para la gestión de eventos. Todo lo que necesitás, en un solo lugar.",
    },
    {
      kind: "includes_checklist",
      items: [
        {
          emoji: "🎟️",
          name: "Vendés entradas",
          desc: "Anticipadas y en puerta.",
          isBonus: false,
        },
        {
          emoji: "📋",
          name: "Gestionás acreditaciones",
          desc: "RRPPs, listas e invitados en un solo lugar y en tiempo real.",
          isBonus: false,
        },
        {
          emoji: "👥",
          name: "Administrás clientes",
          desc: "Una base propia de asistentes que crece con cada evento.",
          isBonus: false,
        },
        {
          emoji: "📣",
          name: "Comunicás directo",
          desc: "Avisás próximas fechas a tus clientes.",
          isBonus: false,
        },
        {
          emoji: "📊",
          name: "Métricas de cada evento",
          desc: "Todo lo que necesitás saber para medir el éxito de la fecha.",
          isBonus: false,
        },
        {
          emoji: "💬",
          name: "Construís comunidad",
          desc: "Tu público puede vincularse antes, durante y después en Vincufy.",
          isBonus: false,
        },
      ],
    },
    {
      kind: "how_it_works",
      anchor: "como-funciona",
      title: "Pasos a seguir",
      steps: [
        { n: 1, title: "Creá tu perfil", body: "" },
        { n: 2, title: "Configurá tus eventos", body: "" },
        { n: 3, title: "Crecé con nuestras herramientas", body: "" },
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
      title: "Lo que ganás vos.\nLo que vive tu público.",
      colOrganizer: {
        title: "Para vos (tu boliche)",
        bullets: [
          "Base de datos que crece en cada fecha",
          "Control total de la trazabilidad del evento",
          "Menos trabajo manual para tu equipo",
          "Canal directo de comunicación con tu público",
          "Métricas reales de tus clientes",
          "Imagen de servicio profesional e innovador",
        ],
      },
      colAudience: {
        title: "Para tu público",
        bullets: [
          "Entrada única y de fácil acceso",
          "Información del evento en todo momento",
          "Espacio para vincularse con otros asistentes",
          "Menos espera en puerta",
          "Entradas más baratas sin costo de servicio",
          "Notificaciones con tus nuevas fechas y actividades",
        ],
      },
    },
    {
      kind: "trusted_by",
      title: "Confían en nosotros",
      logos: [
        { name: "Empresa 1", src: "/landing/logos/logo-1.png" },
        { name: "Empresa 2", src: "/landing/logos/logo-2.png" },
        { name: "Empresa 3", src: "/landing/logos/logo-3.png" },
        { name: "Empresa 4", src: "/landing/logos/logo-4.png" },
        { name: "Empresa 5", src: "/landing/logos/logo-5.png" },
        { name: "Empresa 6", src: "/landing/logos/logo-6.png" },
        { name: "Empresa 7", src: "/landing/logos/logo-7.png" },
        { name: "Empresa 8", src: "/landing/logos/logo-8.png" },
        { name: "Empresa 9", src: "/landing/logos/logo-9.png" },
        { name: "Empresa 10", src: "/landing/logos/logo-10.png" },
      ],
      stats: [
        { number: "+1.500", label: "eventos gestionados" },
        { number: "+600.000", label: "entradas emitidas" },
      ],
    },
    {
      kind: "pricing",
    },
    {
      kind: "whatsapp_help",
      text: "¿Tenés alguna duda?",
      cta: "Escribinos por WhatsApp",
      phone: "+54 9 11 0000 0000",
    },
    {
      kind: "faq",
      items: [
        {
          q: "¿Qué diferencia a Vincufy de una ticketera tradicional?",
          a: "Además de vender entradas, Vincufy te ayuda a construir una comunidad propia alrededor de tus eventos. Los asistentes pueden conocerse entre sí, mantenerse conectados y seguir vinculados a tu marca incluso después de que termina el evento.",
        },
        {
          q: "¿Cómo hago para promocionar mis próximos eventos?",
          a: "Cada evento te ayuda a construir una base propia de asistentes. En lugar de empezar desde cero en cada convocatoria, podés comunicar nuevas fechas, lanzamientos y novedades a personas que ya participaron de tus eventos.",
        },
        {
          q: "¿Sirve para eventos pequeños?",
          a: "Sí. Vincufy aporta valor tanto en eventos pequeños como masivos. De hecho, cuando estás construyendo una comunidad o una marca, generar vínculos con los asistentes suele ser aún más importante.",
        },
        {
          q: "¿Sirve para todos mis eventos?",
          a: "Justamente ahí es donde más sentido tiene. Mientras más seguido hacés eventos, más vale tener una base propia que no dependa de Instagram para cada convocatoria.",
        },
        {
          q: "¿Mi público tiene que descargar una app?",
          a: "No es necesario descargar una app para comprar entradas; todo puede hacerse desde la web. La aplicación ofrece funciones adicionales para que los asistentes se conecten entre sí, accedan a contenido exclusivo y personalicen su perfil. La descarga es opcional.",
        },
        {
          q: "¿Cuánto tiempo lleva implementarlo?",
          a: "Podés empezar con un solo evento y tener todo funcionando rápidamente. En pocos pasos ya podés comenzar a vender entradas, conectar a tus asistentes y construir una comunidad propia.",
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
