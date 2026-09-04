import s from "./mockup.module.css";
import MockupShell from "./MockupShell";

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
const Landing = () => (
  <div className={s.pag}>
    <div className={s.topbar}><span className={s.logo}>vincufy</span></div>
    <div className={s.hero}>
      <h1 className={s.h1}>Las ticketeras no deberían solo vender entradas.</h1>
      <p className={s.sub}>Sino ayudarte a crear tu comunidad y hacerte crecer.</p>
      <div style={{ height: 150, background: "#17171d", borderRadius: 12,
        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
        <span className={s.mini}>[ imagen del hero ]</span>
      </div>
      <button className={s.cta}>Crear evento</button>
      <p className={s.micro}>0% de comisión · sin costo de servicio · liquidación al instante</p>
    </div>

    <div className={s.sec}>
      <h2 className={s.h2}>¿Te pasa que...?</h2>
      {[
        ["⏳", "Tu ticketera te retiene los fondos y te paga después de tu evento."],
        ["🔄", "Cada evento volvés a convocar desde cero."],
        ["📣", "Dependés de Instagram, publicidad o RRPP para llenar."],
        ["❓", "No sabés quiénes fueron ni podés contactarlos."],
        ["👥", "Llenás una fecha, pero no construís audiencia propia."],
        ["👋", "Invertís para atraer gente que después desaparece."],
      ].map(([e, t]) => (
        <p className={s.dolor} key={t}><span>{e}</span><span>{t}</span></p>
      ))}
    </div>

    <div className={s.sec}>
      <h2 className={s.h2}>¿Y si tu próximo evento fuera diferente?</h2>
      <div className={s.card}>
        <div style={{ fontWeight: 600, marginBottom: 8, fontSize: 14 }}>Con otra ticketera</div>
        {["Te liquidan los fondos después del evento", "Los asistentes pagan costo de servicio",
          "No fidelizás a tu público", "Mayor costo de adquisición"].map((t) => (
          <div className={s.mini} key={t} style={{ marginBottom: 4 }}>✗ {t}</div>
        ))}
      </div>
      <div className={s.card}>
        <div style={{ fontWeight: 600, marginBottom: 8, fontSize: 14 }}>Con Vincufy</div>
        {["Recibís la plata al instante", "Compran entradas más baratas",
          "Tu público se vincula en la plataforma", "Les mandás promociones"].map((t) => (
          <div className={s.mini} key={t} style={{ marginBottom: 4 }}>✓ {t}</div>
        ))}
      </div>
    </div>

    <div className={s.sec}>
      <h2 className={s.h2}>¿Qué es Vincufy?</h2>
      <p className={s.mini}>Una plataforma integral para la gestión de eventos.</p>
      {["🎟️ Vendés entradas", "📋 Gestionás acreditaciones", "👥 Administrás clientes",
        "📣 Comunicás directo", "📊 Métricas de cada evento", "💬 Construís comunidad"].map((t) => (
        <div className={s.card} key={t} style={{ padding: 11 }}>
          <span style={{ fontSize: 14 }}>{t}</span>
        </div>
      ))}
    </div>

    <div className={s.sec}>
      <h2 className={s.h2}>Confían en nosotros</h2>
      <div className={s.mini}>+1.500 eventos gestionados · +600.000 entradas emitidas</div>
    </div>

    <div className={s.sec}>
      <h2 className={s.h2}>Conocé nuestros planes</h2>
      <p className={s.mini} style={{ marginBottom: 14 }}>Comprá tu paquete de entradas y usalas cuando quieras.</p>
      {[["Pequeños eventos", 20, 649, "12.980", null],
        ["Más popular", 300, 599, "179.700", "8% off"],
        ["Mejor costo", 1000, 549, "549.000", "15% off"]].map(([n, t, p, tot, off]) => (
        <div className={s.card} key={n}>
          <div className={s.mini}>{n}</div>
          <div style={{ fontSize: 17, fontWeight: 700, margin: "4px 0" }}>{t} entradas</div>
          <div><span className={s.precio} style={{ fontSize: 24 }}>${p}</span>
            <span className={s.mini}> c/u</span> {off && <span className={s.chip}>{off}</span>}</div>
          <div className={s.mini} style={{ margin: "6px 0 10px" }}>Total: ARS {tot}</div>
          <button className={s.cta}>Comprar</button>
        </div>
      ))}
    </div>
  </div>
);

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
  { titulo: "Landing", render: () => <Landing />,
    nota: "MEDIDO en la campaña #2: el 100% ve el hero, el 44% llega al highlight, el 24% a '¿Te pasa que...?' y sólo el 5% al CTA final. El 56% no pasa del hero. De 201 visitas, 6 apretaron Comprar (2,99%)." },

  { titulo: "1 · Crear tu comunidad", nota: "MEDIDO: acá abandonaron 4 de 6. La persona viene de apretar 'Comprar' sobre un paquete de hasta ARS 179.700 y esta pantalla no menciona la compra, ni el precio, ni el paquete. Le pide nombrar una 'comunidad', que es vocabulario nuestro.",
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

  { titulo: "2 · Perfil del evento", nota: "MEDIDO: llegaron 2 de 6.",
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

  { titulo: "3 · Fecha y lugar", nota: "MEDIDO: 2 de 6.",
    render: () => (
      <PasoActual n={3} titulo="Fecha y lugar">
        <div className={s.label}>Inicio</div><input className={s.campo} defaultValue="2026-09-12 23:00" />
        <div className={s.label}>Fin</div><input className={s.campo} defaultValue="2026-09-13 06:00" />
        <div className={s.label}>Lugar</div><input className={s.campo} placeholder="Dirección" />
      </PasoActual>
    ) },

  { titulo: "4 · Inscripción y acceso", nota: "MEDIDO: 2 de 6.",
    render: () => (
      <PasoActual n={4} titulo="Inscripción y acceso">
        <div className={s.card}>¿El evento es pago o gratuito?</div>
        <div className={s.card}>¿Requiere aprobación manual?</div>
        <div className={s.card}>¿Control de puerta?</div>
      </PasoActual>
    ) },

  { titulo: "5 · Cupo de entradas", nota: "MEDIDO: llegaron 2 de 6 y NINGUNO completó. Acá aparece por primera vez el costo, y la calculadora de cupos es la parte más compleja del wizard.",
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

  { titulo: "Pago", nota: "MEDIDO: 1 de 6 conectó Mercado Pago. Nadie llegó a pagar.",
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
