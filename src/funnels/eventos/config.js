export const eventosFunnel = {
  slug: "eventos",
  launchDate: "septiembre 2026",
  questions: [
    {
      id: "organizerType",
      text: "¿Qué tipo de organizador sos?",
      options: [
        { value: "boliche", label: "Boliche" },
        { value: "productor", label: "Productor" },
        { value: "otro", label: "Otro" },
      ],
    },
    {
      id: "frequency",
      text: "¿Cada cuánto organizás eventos?",
      options: [
        { value: "weekly", label: "Semanal" },
        { value: "monthly", label: "Mensual" },
        { value: "quarterly", label: "Trimestral" },
        { value: "yearly", label: "Anual" },
      ],
    },
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
  ],
  pricing: {
    headline: "Conocé nuestros planes",
    subheadline: "Comprá tu paquete de entradas y usalas cuando quieras.",
    tiers: [
      {
        id: "starter",
        name: "Pequeños eventos",
        tickets: 20,
        pricePerTicket: 649,
        total: 12980,
        discountPercent: 0,
      },
      {
        id: "pro",
        name: "Más popular",
        tickets: 300,
        pricePerTicket: 599,
        total: 179700,
        discountPercent: 8,
      },
      {
        id: "business",
        name: "Mejor costo",
        tickets: 1000,
        pricePerTicket: 549,
        total: 549000,
        discountPercent: 15,
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
      "Acceso prioritario apenas se abran nuevos cupos.",
    ],
    launchLine: "",
    emailLabel: "Tu email",
    emailPlaceholder: "tu@email.com",
    phoneLabel: "Tu teléfono",
    phonePlaceholder: "+54 9 11 1234 5678",
    eventTextLabel: "¿Qué evento estás armando ahora?",
    eventTextHint: "Opcional",
    submitLabel: "Sumarme",
    footerNote: "Sin spam, sin compromiso.",
  },
};
