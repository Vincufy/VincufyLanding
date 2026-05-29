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
        tickets: 20,
        pricePerTicket: 320,
        total: 6400,
        discountPercent: 0,
      },
      {
        id: "pro",
        name: "Pro",
        tickets: 300,
        pricePerTicket: 256,
        total: 76800,
        discountPercent: 20,
        originalPricePerTicket: 320,
      },
      {
        id: "business",
        name: "Business",
        tickets: 1000,
        pricePerTicket: 192,
        total: 192000,
        discountPercent: 40,
        originalPricePerTicket: 320,
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
    title: "Estamos sumando organizadores cada semana.",
    paragraphs: [
      "Sumamos clientes paulatinamente. Dejá tu mail y te contactamos para que seas uno de los próximos.",
    ],
    benefits: [
      "Te contactamos personalmente.",
      "Acceso prioritario apenas se abra tu lugar.",
    ],
    launchLine: "",
    emailLabel: "Tu email",
    emailPlaceholder: "tu@email.com",
    eventTextLabel: "¿Qué evento estás armando ahora?",
    eventTextHint: "Opcional",
    submitLabel: "Sumarme",
    footerNote: "Sin spam, sin compromiso.",
  },
};
