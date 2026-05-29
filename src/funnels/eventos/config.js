export const eventosFunnel = {
  slug: "eventos",
  launchDate: "septiembre 2026",
  questions: [
    {
      id: "participants",
      text: "¿Cuántas personas suelen ir a tus eventos?",
      options: [
        { value: "0-100", label: "0 a 100" },
        { value: "100-300", label: "100 a 300" },
        { value: "300-700", label: "300 a 700" },
        { value: "700+", label: "Más de 700" },
      ],
    },
    {
      id: "frequency",
      text: "¿Cada cuánto organizás eventos?",
      options: [
        { value: "weekly", label: "Cada semana o más" },
        { value: "monthly", label: "Cada mes" },
        { value: "bimonthly", label: "Cada 2-3 meses" },
        { value: "yearly", label: "1-2 veces al año o menos" },
      ],
    },
    {
      id: "organizerType",
      text: "¿Qué tipo de organizador sos?",
      options: [
        { value: "boliche", label: "Boliche" },
        { value: "productor", label: "Productor" },
        { value: "otro", label: "Otro" },
      ],
    },
  ],
  pricing: {
    headline: "Asegurá tu precio fundador — 50% off de por vida",
    subheadline:
      "Lanzamos septiembre 2026. Los primeros 100 fundadores fijan el precio para siempre.",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        priceArs: 9500,
        priceArsOriginal: 19000,
        description:
          "Eventos hasta 100 personas. 1 evento activo por vez. Funciones esenciales.",
      },
      {
        id: "pro",
        name: "Pro",
        priceArs: 24500,
        priceArsOriginal: 49000,
        description:
          "Eventos hasta 700 personas. Eventos ilimitados. Comunidad + comunicación.",
      },
      {
        id: "business",
        name: "Business",
        priceArs: 64500,
        priceArsOriginal: 129000,
        description:
          "Eventos +700 personas. Multi-staff, antifraude, control de aforo.",
      },
    ],
    // tier destacado por segmento (Pro en las 3 para este round)
    highlightedTierBySegment: {
      boliches: "pro",
      productores: "pro",
      casual: "pro",
    },
  },
  reveal: {
    title: "Antes de cobrarte, te debo honestidad.",
    paragraphs: [
      "Vincufy todavía no está en la calle. Estoy hablando con organizadores como vos para construir la versión que de verdad les sirva, no algo a medio cocinar.",
      "Tu click me dice algo importantísimo. Y para los primeros que reserven, vale:",
    ],
    benefits: [
      "Precio fundador: 50% off de por vida. Sí, para siempre.",
      "Acceso 30 días antes que el público general.",
      "Te llamo personalmente antes de cobrarte el primer peso.",
    ],
    launchLine: "Lanzamos en septiembre 2026.",
    emailLabel: "Tu email",
    emailPlaceholder: "tu@email.com",
    eventTextLabel: "¿Qué evento estás armando ahora?",
    eventTextHint: "Opcional",
    submitLabel: "Reservar mi lugar",
    footerNote:
      "No te cobro ahora. Si decido no construirlo, te aviso y nunca más te molesto.",
  },
};
