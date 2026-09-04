import s from "./mockup.module.css";
import MockupShell from "./MockupShell";

/**
 * PROPUESTA A — "Gratis primero"
 *
 * Estrategia: no mostrar precios en la landing. Llevar lo más rápido posible a crear el
 * evento, y que el costo aparezca recién al elegir el cupo, cuando ya hay algo hecho.
 *
 * Lo que la habilita es una verdad del producto que la landing hoy no usa: una
 * productora nueva recibe 25 entradas de regalo, un evento gratis se publica SIN
 * conectar Mercado Pago, y los eventos son privados por link. O sea que "creá tu evento
 * gratis" no es una promesa de marketing: es lo que pasa.
 *
 * Por eso esto no contradice la regla de "poné siempre el precio": el precio de entrada
 * es CERO, y se dice desde el primer renglón.
 *
 * TODO ESTE FLUJO VIVE EN EL PRODUCTO, no en una landing aparte. El ad entra directo acá
 * y la persona no cambia de sitio en ningún momento. Hoy salta de vincufy.com a
 * vincufy.com.ar justo en el instante de máxima intención: ese salto corta la sesión,
 * cambia el dominio a la vista y obliga a re-explicar todo del otro lado. La pantalla 1
 * es la de persuasión y las siguientes son el onboarding: una sola aplicación.
 */
const Landing = () => (
  <div className={s.pag}>
    <div className={s.topbar}><span className={s.logo}>vincufy</span></div>
    <div className={s.hero}>
      <h1 className={s.h1}>Creá la página de tu fiesta en 2 minutos. Gratis.</h1>
      <p className={s.sub}>
        Privada: sólo la ve quien recibe tu link. Sin comisión, sin costo de servicio,
        y cobrás al instante.
      </p>
      <button className={s.cta}>Crear mi evento</button>
      <p className={s.micro}>Gratis · sin tarjeta · tus primeras 25 entradas incluidas</p>
    </div>

    <div className={s.sec}>
      <div className={s.card}>
        <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5 }}>
          <strong>Tu primer evento no sale nada.</strong> Creás la página, la compartís
          por WhatsApp y ya estás vendiendo. Recién pagás si necesitás más de 25 entradas.
        </p>
      </div>
    </div>

    <div className={s.sec}>
      <h2 className={s.h2}>Con lo que usás hoy</h2>
      <p className={s.dolor}><span>💸</span><span>La ticketera te retiene la plata hasta después del evento.</span></p>
      <p className={s.dolor}><span>🔁</span><span>Cada fecha convocás de cero, como si fuera la primera.</span></p>
      <p className={s.dolor}><span>❓</span><span>No sabés quién fue ni podés volver a contactarlo.</span></p>
      <button className={s.cta} style={{ marginTop: 16 }}>Crear mi evento gratis</button>
      <p className={s.micro}>Tardás menos que en armar el flyer</p>
    </div>

    <div className={s.sec}>
      <h2 className={s.h2}>Cómo funciona</h2>
      {[
        ["Creás la página", "Nombre, fecha y cuántas entradas. Nada más."],
        ["Compartís el link", "Por WhatsApp o historia. Privado: sólo lo ve quien lo recibe."],
        ["Cobrás al instante", "La plata te llega cuando venden, no después del evento."],
      ].map(([t, d], i) => (
        <div className={s.paso} key={t}>
          <div className={s.pasoNum}>{i + 1}</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14.5 }}>{t}</div>
            <div className={s.mini}>{d}</div>
          </div>
        </div>
      ))}
    </div>

    <div className={s.sec}>
      <div className={s.card}>
        <div style={{ display: "flex", gap: 11, alignItems: "center" }}>
          <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#2a2a33",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🙂</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14 }}>Sugus · productora</div>
            <div className={s.mini}>+1.500 eventos gestionados con Vincufy</div>
          </div>
        </div>
      </div>
      <button className={s.cta} style={{ marginTop: 14 }}>Crear mi evento gratis</button>
      <p className={s.micro}>Sin tarjeta. Si no te sirve, no pagaste nada.</p>
    </div>
  </div>
);

const Paso = ({ n, de, titulo, children, cta = "Continuar", micro }) => (
  <div className={s.pag}>
    <div className={s.topbar}><span className={s.logo}>vincufy</span></div>
    <div style={{ padding: "18px 20px 0" }}>
      <div className={s.barra}><div className={s.barraFill} style={{ width: `${(n / de) * 100}%` }} /></div>
      <div className={s.mini} style={{ marginBottom: 14 }}>Paso {n} de {de} · tu evento se guarda solo</div>
      <h2 className={s.h2}>{titulo}</h2>
      {children}
      <button className={s.cta} style={{ marginTop: 8 }}>{cta}</button>
      {micro && <p className={s.micro}>{micro}</p>}
    </div>
  </div>
);

const pantallas = [
  { titulo: "Entrada (en el producto)", render: () => <Landing />,
    decisiones: [
      { que: "Vive en el producto, no en una landing aparte",
        porque: "El ad entra directo acá. Desaparece el salto de vincufy.com a vincufy.com.ar en el momento de máxima intención, que es donde hoy se pierde el hilo.",
        fuente: "Cada cambio de sitio cuesta contexto, sesión y confianza." },
      { que: "El titular promete el resultado, no el producto",
        porque: "'Creá la página de tu fiesta en 2 minutos. Gratis.' responde qué gana él y cuánto le cuesta, en una sola idea.",
        fuente: "Titular: 1 idea, ≤10 palabras, responde '¿qué gano yo?'." },
      { que: "Sin precios ni planes",
        porque: "La decisión de plata se mueve al momento en que ya tiene el evento armado. El costo de decir que sí baja a cero.",
        fuente: "No rompe 'poné siempre el precio': el precio de entrada ES cero y se dice en el primer renglón." },
      { que: "Microcopy bajo cada CTA",
        porque: "'Gratis · sin tarjeta · tus primeras 25 entradas incluidas' desactiva las tres objeciones de plata en la línea donde se decide.",
        fuente: "El microcopy inmediato al botón hace trabajo real de conversión." },
      { que: "Tres dolores, no seis",
        porque: "Los tres más caros: la plata retenida, convocar de cero y no tener los datos.",
        fuente: "3-5 bullets; más genera fatiga de decisión." },
      { que: "El CTA se repite tres veces",
        porque: "El 56% de la campaña #2 no pasó del primer fold.",
        fuente: "CTA por fold rinde 20-35% más." },
      { que: "Prueba social cerca del último CTA",
        porque: "Sin testimonios todavía, se usan los números del producto y una cara visible.",
        fuente: "Sustitutos válidos en pre-lanzamiento: demo, cara, números." },
    ] },

  { titulo: "Crear evento", decisiones: [
      { que: "Se entra a crear sin registrarse",
        porque: "La cuenta es la barrera más cara del flujo y hoy está al principio. Acá se pide al final, cuando ya tiene algo que perder.",
        fuente: "Reversión de riesgo: primero que reciba, después que dé." },
      { que: "Dos campos, no cinco",
        porque: "Nombre y fecha es lo mínimo para que el evento exista. Todo lo demás es configuración que puede esperar." },
      { que: "'Tu evento se guarda solo'",
        porque: "Desactiva el miedo a perder el trabajo, que es la objeción típica de un formulario largo en celular." },
      { que: "Desaparece la palabra 'comunidad'",
        porque: "Es vocabulario nuestro. Él quiere llenar su fiesta; la comunidad se crea sola por detrás." },
    ],
    render: () => (
      <Paso n={1} de={3} titulo="¿Cómo se llama tu fiesta?" micro="Podés cambiarlo después">
        <input className={s.campo} placeholder="Ej: Jueves de Previa" defaultValue="Jueves de Previa" />
        <div className={s.label}>¿Cuándo es?</div>
        <input className={s.campo} defaultValue="2026-09-12  ·  23:00" />
      </Paso>
    ) },

  { titulo: "Entradas", decisiones: [
      { que: "El precio aparece acá y sólo si pide más de 25",
        porque: "Hasta 25 el cartel dice 'incluidas'. El costo llega cuando ya invirtió tiempo y tiene el evento casi armado.",
        fuente: "La objeción de precio es la 4ª de la secuencia, no la 1ª." },
      { que: "El verde de 'incluidas' es el mensaje, no el input",
        porque: "Lo que tiene que quedar grabado es que este evento no le sale nada." },
      { que: "Se muestra qué pasaría si pide más",
        porque: "No esconde el precio de escalar: lo deja a la vista sin cobrarlo todavía.",
        fuente: "Esconder el precio le dice al escéptico que es alto." },
    ],
    render: () => (
      <Paso n={2} de={3} titulo="¿Cuántas entradas vas a vender?" cta="Continuar" micro="Podés sumar más en cualquier momento">
        <input className={s.campo} defaultValue="25" />
        <div className={s.exito} style={{ marginBottom: 12 }}>
          <div className={s.verde} style={{ fontSize: 15 }}>Tus primeras 25 entradas están incluidas</div>
          <div className={s.mini} style={{ marginTop: 4 }}>No pagás nada por este evento</div>
        </div>
        <div className={s.card}>
          <div className={s.mini}>Si ponés más de 25:</div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 7, fontSize: 14 }}>
            <span>300 entradas</span><span><strong>$599</strong> c/u</span>
          </div>
          <div className={s.mini} style={{ marginTop: 3 }}>Se paga al final, y sólo la diferencia</div>
        </div>
      </Paso>
    ) },

  { titulo: "Precio de entrada", decisiones: [
      { que: "El precio de venta va acá, no antes",
        porque: "Es su decisión de negocio y la toma cuando el evento ya existe." },
      { que: "Se calcula lo que va a recaudar",
        porque: "Convierte el 0% de comisión de eslogan en un número: $200.000, comisión $0.",
        fuente: "El beneficio abstracto no convence; el número sí." },
    ],
    render: () => (
      <Paso n={3} de={3} titulo="¿A cuánto vendés cada entrada?" cta="Crear mi evento" micro="Vincufy no se queda con nada de esto">
        <input className={s.campo} defaultValue="$ 8.000" />
        <div className={s.card}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
            <span className={s.gris}>Si vendés las 25</span><strong>$200.000</strong>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 14 }}>
            <span className={s.gris}>Comisión de Vincufy</span><span className={s.verde}>$0</span>
          </div>
        </div>
      </Paso>
    ) },

  { titulo: "Listo · compartir", decisiones: [
      { que: "El momento 'wow' llega antes de pedir la cuenta",
        porque: "Ya tiene su página y su link. La cuenta ahora protege algo que existe, en vez de ser un peaje.",
        fuente: "Acto 3: que no actuar se sienta como perder algo." },
      { que: "Compartir por WhatsApp es el botón principal",
        porque: "Es lo que realmente va a hacer, y es el momento en que el producto se difunde solo." },
      { que: "'Sólo lo ve quien recibe el link'",
        porque: "Responde la objeción de privacidad justo cuando aparece, y es verdad del producto.",
        fuente: "Las objeciones se responden tejidas en el recorrido, no en un bloque aparte." },
    ],
    render: () => (
      <div className={s.pag}>
        <div className={s.topbar}><span className={s.logo}>vincufy</span></div>
        <div style={{ padding: "26px 20px" }}>
          <div className={s.exito}>
            <div style={{ fontSize: 30 }}>🎉</div>
            <h2 className={s.h2} style={{ marginTop: 8 }}>Tu evento ya existe</h2>
            <p className={s.mini}>Jueves de Previa · 12/09 · 25 entradas a $8.000</p>
          </div>
          <div className={s.card} style={{ marginTop: 16 }}>
            <div className={s.mini}>Tu link privado</div>
            <div style={{ fontSize: 13.5, marginTop: 5, wordBreak: "break-all" }}>
              vincufy.com.ar/e/jueves-de-previa
            </div>
          </div>
          <button className={s.cta}>Compartir por WhatsApp</button>
          <p className={s.micro}>Sólo lo ve quien recibe el link</p>
          <div className={s.card} style={{ marginTop: 18 }}>
            <div className={s.label}>Guardá tu evento</div>
            <div className={s.ayuda}>Con tu mail lo recuperás y ves quién compró.</div>
            <input className={s.campo} placeholder="tumail@ejemplo.com" />
            <button className={s.ctaSec}>Guardar evento</button>
          </div>
        </div>
      </div>
    ) },

  { titulo: "Pago (sólo si escala)", decisiones: [
      { que: "Es el único checkout de todo el flujo",
        porque: "Llega recién cuando pidió más de lo incluido. Quien se queda en 25 nunca ve esta pantalla." },
      { que: "Se muestra qué ya tiene gratis antes del total",
        porque: "El total se lee como 'lo que falta', no como 'lo que cuesta'." },
    ],
    render: () => (
      <div className={s.pag}>
        <div className={s.topbar}><span className={s.logo}>vincufy</span></div>
        <div style={{ padding: "22px 20px" }}>
          <h2 className={s.h2}>Sumar 275 entradas más</h2>
          <div className={s.card}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
              <span>Ya tenés</span><span className={s.verde}>25 incluidas</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 7, fontSize: 14 }}>
              <span>Sumás</span><span>275 × $599</span>
            </div>
            <hr style={{ border: 0, borderTop: "1px solid #24242c", margin: "11px 0" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span className={s.gris}>Total</span><span className={s.precio}>$164.725</span>
            </div>
          </div>
          <button className={s.cta}>Pagar con Mercado Pago</button>
          <p className={s.micro}>Las entradas quedan disponibles al instante</p>
        </div>
      </div>
    ) },
];

const resumen = (
  <div>
    <h4>La apuesta</h4>
    <p>Sacar el precio de la landing y mover la decisión de plata al momento en que la
    persona ya tiene su evento armado. El costo de decir que sí baja a cero.</p>
    <h4>Por qué se puede</h4>
    <p>Es verdad del producto, no promesa: 25 entradas de regalo, publicar un evento
    gratis no pide Mercado Pago, y los eventos son privados por link.</p>
    <h4>Los tres cambios grandes</h4>
    <ul>
      <li><strong>Sin registro para empezar.</strong> La cuenta se pide al final, cuando ya
      tiene su link. Hoy la barrera más cara está en el primer paso.</li>
      <li><strong>Sin "comunidad" en ningún lado.</strong> Es vocabulario nuestro. El
      productor quiere llenar su fiesta.</li>
      <li><strong>De 5 pasos a 3</strong>, y el precio aparece en el paso 2 sólo si pide
      más de 25.</li>
    </ul>
    <h4>El riesgo</h4>
    <p>Atrae gente que sólo quiere lo gratis y nunca escala. Se mide fácil: cuántos de
    los que crean un evento gratis vuelven a comprar.</p>
  </div>
);

const MockupA = () => (
  <MockupShell nombre="Propuesta A — Gratis primero" resumen={resumen} pantallas={pantallas} />
);

export default MockupA;
