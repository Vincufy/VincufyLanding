import s from "./mockup.module.css";
import MockupShell from "./MockupShell";
import LandingRealReplica from "./LandingRealReplica";

/**
 * RÉPLICA DE LO ACTUAL — la que corrió en la campaña #2
 *
 * No es una propuesta: es el punto de comparación y el registro. Reproduce la landing y
 * el onboarding tal como los vio la gente entre el 02 y el 03/09/2026, para poder
 * mostrarla al lado de las otras dos sin entrar a la landing real y ensuciar métricas.
 *
 * Cada pantalla lleva anotado el dato medido de esa campaña, que es lo que convierte
 * esto en argumento y no en opinión.
 */
const PasoActual = ({ n, titulo, children }) => (
  <div className={s.pag}>
    <div className={s.topbar}><span className={s.logo}>vincufy</span></div>
    <div style={{ padding: "18px 20px 0" }}>
      <div className={s.mini} style={{ fontWeight: 700, marginBottom: 8 }}>Paso {n} de 5</div>
      <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} style={{ flex: 1, height: 3, borderRadius: 99,
            background: i <= n ? "#8810c7" : "#2a2a33" }} />
        ))}
      </div>
      <h2 className={s.h2}>{titulo}</h2>
      {children}
      <button className={s.cta} style={{ marginTop: 8 }}>Continuar →</button>
    </div>
  </div>
);

const pantallas = [
  { titulo: "Landing", render: () => <LandingRealReplica segment="productores" />,
    dato: "El 100% ve el hero · 44% llega al highlight · 24% a '¿Te pasa que...?' · 5% al CTA final. El 56% no pasa del hero. De 201 visitas, 6 apretaron Comprar (2,99%).",
    decisiones: [
      { que: "Es la landing REAL, no una copia",
        porque: "Renderiza OfferModule, PricingModule y el contenido de landingsBySegment con su propio CSS. Cualquier diferencia contra producción sería un bug, no una licencia del mockup.",
        fuente: "Una réplica a mano se desactualiza el día que alguien toca la landing, y ahí la comparación deja de valer." },
      { que: "El titular habla de la categoría, no del visitante",
        porque: "'Las ticketeras no deberían solo vender entradas' es nuestra tesis sobre el rubro. El tráfico de un ad de Instagram es frío: no sabe que tiene alternativa, así que hay que abrir por su problema o su deseo.",
        fuente: "Niveles de consciencia (Schwartz): a nivel 1-2 nunca se abre con el nombre ni la categoría del producto." },
      { que: "El dolor está enterrado",
        porque: "'¿Te pasa que...?' es la sección que más se parece a una conversación con él, y llega detrás de tres bloques de producto. La ve 1 de cada 4.",
        fuente: "PAS (Problema-Agitar-Solución) convirtió ~22% más que una lista de features en un análisis de 12.400 landings." },
      { que: "Seis dolores seguidos",
        porque: "Más de 3-5 ítems genera fatiga de decisión y ninguno queda grabado.",
        fuente: "Regla numérica: 3 bullets, máximo 3-7." },
      { que: "Un solo CTA arriba y el resto al final",
        porque: "El 56% se va antes del segundo. Repetir el CTA por cada fold rinde 20-35% más.",
        fuente: "Regla de CTA por fold." },
    ] },

  { titulo: "1 · Crear tu comunidad",
    dato: "Acá abandonaron 4 de 6. Es el único punto del embudo que pierde más de la mitad.",
    decisiones: [
      { que: "La compra desaparece",
        porque: "Viene de apretar Comprar sobre un paquete de hasta ARS 179.700 y esta pantalla no menciona ni la compra, ni el precio, ni el paquete. Para él, apretar Comprar lo llevó a otra cosa.",
        fuente: "Message match: si el ad y el paso siguiente no hablan de lo mismo, la persona cree que se equivocó de lugar." },
      { que: "'Comunidad' es vocabulario nuestro",
        porque: "Él quiere llenar su fiesta. 'Comunidad' es el concepto más abstracto del producto y es lo primero que se le pide nombrar.",
        fuente: "Hablarle en su idioma, no en el del producto." },
      { que: "'Paso 1 de 5' anuncia trabajo",
        porque: "El número aparece antes que cualquier beneficio: lo primero que sabe es que le faltan cinco pantallas.",
        fuente: "Reversión de riesgo: el costo percibido de decir que sí tiene que ser el mínimo posible." },
      { que: "Se le pide crear algo antes de recibir nada",
        porque: "No hay ningún momento 'wow' previo. Da antes de recibir.",
        fuente: "Acto 1 = puro imán, cero barreras." },
    ],
    render: () => (
      <PasoActual n={1} titulo="Crear tu comunidad">
        <p className={s.ayuda} style={{ marginTop: -4 }}>
          Donde se agruparán tus eventos y se mantendrán los participantes de cada uno
          para mantenerte conectado a ellos.
        </p>
        <div className={s.label}>Nombre *</div>
        <input className={s.campo} placeholder="Ej: Sugus Producciones" />
        <div className={s.label}>Descripción <span className={s.chip}>opcional</span></div>
        <textarea className={s.campo} rows={3} placeholder="Contá de qué se trata tu comunidad..." />
      </PasoActual>
    ) },

  { titulo: "2 · Perfil del evento",
    dato: "Llegaron 2 de 6.",
    decisiones: [
      { que: "Recién acá aparece el evento",
        porque: "Es lo que la persona vino a hacer, y es la segunda pantalla. Lo urgente para ella quedó detrás de lo conceptual para nosotros." },
      { que: "Imagen y descripción opcionales, pero visibles",
        porque: "Ocupan lugar y suman decisiones en una pantalla donde lo único obligatorio es el nombre." },
    ],
    render: () => (
      <PasoActual n={2} titulo="Perfil del evento">
        <div className={s.label}>Nombre *</div>
        <input className={s.campo} placeholder="Ej: Fiesta de Verano 2026" />
        <div className={s.label}>Descripción <span className={s.chip}>opcional</span></div>
        <textarea className={s.campo} rows={3} />
        <div className={s.label}>Imagen <span className={s.chip}>opcional</span></div>
        <div className={s.card} style={{ textAlign: "center" }}>＋ Agregar imagen</div>
      </PasoActual>
    ) },

  { titulo: "3 · Fecha y lugar",
    dato: "2 de 6.",
    decisiones: [
      { que: "Tres campos de fecha en una pantalla propia",
        porque: "Inicio, fin y lugar podrían convivir con el nombre del evento. Cada pantalla extra es una oportunidad más de abandonar." },
    ],
    render: () => (
      <PasoActual n={3} titulo="Fecha y lugar">
        <div className={s.label}>Inicio</div><input className={s.campo} defaultValue="2026-09-12 23:00" />
        <div className={s.label}>Fin</div><input className={s.campo} defaultValue="2026-09-13 06:00" />
        <div className={s.label}>Lugar</div><input className={s.campo} placeholder="Dirección" />
      </PasoActual>
    ) },

  { titulo: "4 · Inscripción y acceso",
    dato: "2 de 6.",
    decisiones: [
      { que: "Tres decisiones de configuración antes de existir",
        porque: "Aprobación manual y control de puerta son decisiones de operación que se pueden tomar después de tener el evento creado y compartido." },
      { que: "Es la pantalla más prescindible del flujo",
        porque: "Todo lo que pide tiene un valor por defecto razonable." },
    ],
    render: () => (
      <PasoActual n={4} titulo="Inscripción y acceso">
        <div className={s.card}>¿El evento es pago o gratuito?</div>
        <div className={s.card}>¿Requiere aprobación manual?</div>
        <div className={s.card}>¿Control de puerta?</div>
      </PasoActual>
    ) },

  { titulo: "5 · Cupo de entradas",
    dato: "Llegaron 2 de 6 y NINGUNO completó. El segundo cuello del embudo está acá.",
    decisiones: [
      { que: "El costo aparece por primera vez en la última pantalla",
        porque: "Después de cuatro pantallas de trabajo. Quien eligió un paquete de ARS 179.700 en la landing no volvió a ver ese número hasta acá." },
      { que: "La calculadora pide entender tres conceptos a la vez",
        porque: "Asignás, prepagos, comprás y costo son cuatro líneas que la persona tiene que reconciliar sola." },
      { que: "Los 25 cupos de regalo no se anuncian",
        porque: "El producto los da al crear la comunidad, pero la pantalla no dice que el primer evento puede salir cero." },
    ],
    render: () => (
      <PasoActual n={5} titulo="Cupo de entradas">
        <div className={s.card}>
          <div className={s.label}>Tipo 1</div>
          <input className={s.campo} placeholder="Ej: General" />
          <div className={s.label}>Cantidad</div>
          <input className={s.campo} defaultValue="100" />
        </div>
        <div className={s.card}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
            <span className={s.gris}>Tickets que asignás en total</span><span>100</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 14 }}>
            <span className={s.gris}>Tus tickets prepagos</span><span>25</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 14 }}>
            <span className={s.gris}>Comprás</span><span>75</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 14 }}>
            <span className={s.gris}>Costo</span><strong>$48.675</strong>
          </div>
        </div>
      </PasoActual>
    ) },

  { titulo: "Pago",
    dato: "1 de 6 conectó Mercado Pago. Nadie llegó a pagar.",
    decisiones: [
      { que: "El checkout es la sexta pantalla",
        porque: "Entre el 'Comprar' de la landing y este botón hay cinco pantallas de configuración." },
    ],
    render: () => (
      <div className={s.pag}>
        <div className={s.topbar}><span className={s.logo}>vincufy</span></div>
        <div style={{ padding: "22px 20px" }}>
          <h2 className={s.h2}>Comprar cupos</h2>
          <div className={s.card}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span className={s.gris}>75 entradas</span><span className={s.precio}>$48.675</span>
            </div>
          </div>
          <button className={s.cta}>Comprar cupos</button>
        </div>
      </div>
    ) },
];

const resumen = (
  <div>
    <h4>Qué es esto</h4>
    <p>La landing y el onboarding tal como corrieron en la campaña #2 (02–03/09/2026).
    No es una propuesta: es el punto de comparación y el registro.</p>
    <h4>Los números que dejó</h4>
    <ul>
      <li>5.422 impresiones → 179 clicks → <strong>201 visitas</strong></li>
      <li><strong>6 clicks en Comprar</strong> (2,99%, dentro del umbral GO de 3-4%)</li>
      <li>3 de esos 6 eligieron el paquete de <strong>ARS 179.700</strong></li>
      <li>6 entraron al onboarding, <strong>4 abandonaron en el paso 1</strong></li>
      <li>2 llegaron al último paso, 1 conectó Mercado Pago, <strong>0 completaron</strong></li>
      <li>$43,52 gastados en 30 horas</li>
    </ul>
    <h4>La lectura</h4>
    <p>La oferta valida y el producto no la recibe. Son dos cuellos: el paso 1 pierde dos
    tercios, y los que pasan recorren el wizard entero sin completar.</p>
  </div>
);

const MockupActual = () => (
  <MockupShell nombre="Actual — la que corrió en la campaña #2" resumen={resumen} pantallas={pantallas} />
);

export default MockupActual;
