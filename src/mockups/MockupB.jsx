import s from "./mockup.module.css";
import MockupShell from "./MockupShell";

/**
 * PROPUESTA B — "La plata que no te dan"
 *
 * Estrategia opuesta a la A en el gancho: en vez de liderar con "gratis" (que es una
 * característica de la oferta), lidera con el DOLOR más caro del productor, que es de
 * plata: la ticketera le retiene la recaudación hasta después del evento.
 *
 * Sigue PAS (Problema-Agitar-Solución), que segun el analisis de 12.400 landings
 * convierte ~22% mas que una lista de features. Y respeta el nivel de consciencia: el
 * trafico de un ad de Instagram es frio, asi que se abre por el problema y NUNCA por
 * el nombre del producto.
 *
 * El onboarding se comprime a UNA sola pantalla: mientras la A ordena en 3 pasos, la B
 * apuesta a que ver el formulario entero de una es menos intimidante que un "paso 1 de N".
 *
 * Igual que la A, TODO ESTE FLUJO VIVE EN EL PRODUCTO: el ad entra directo y la persona
 * nunca cambia de sitio. La pantalla 1 persuade y las siguientes crean el evento.
 */
const Landing = () => (
  <div className={s.pag}>
    <div className={s.topbar}><span className={s.logo}>vincufy</span></div>
    <div className={s.hero}>
      <h1 className={s.h1}>Tu fiesta ya se hizo. Tu plata todavía no llegó.</h1>
      <p className={s.sub}>
        Las ticketeras te retienen la recaudación hasta semanas después. Con Vincufy
        cobrás en el momento en que alguien compra.
      </p>
      <button className={s.cta}>Quiero cobrar al instante</button>
      <p className={s.micro}>Gratis para empezar · sin tarjeta · 0% de comisión</p>
    </div>

    <div className={s.sec}>
      <h2 className={s.h2}>Hacé la cuenta de tu última fecha</h2>
      <div className={s.card}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
          <span className={s.gris}>Vendiste</span><span>300 entradas × $8.000</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 14 }}>
          <span className={s.gris}>Te retuvieron</span><span className={s.tachado}>$2.400.000</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 14 }}>
          <span className={s.gris}>Lo cobraste</span><span style={{ color: "#f87171" }}>30 días después</span>
        </div>
        <hr style={{ border: 0, borderTop: "1px solid #24242c", margin: "12px 0" }} />
        <div className={s.mini}>
          Con esa plata pagabas el sonido, la seña del lugar y la próxima fecha. En vez de
          eso, la pusiste de tu bolsillo.
        </div>
      </div>
    </div>

    <div className={s.sec}>
      <h2 className={s.h2}>Y encima, cada fecha arrancás de cero</h2>
      <p className={s.dolor}><span>📣</span><span>Volvés a pagar publicidad para llegar a la misma gente que ya fue.</span></p>
      <p className={s.dolor}><span>❓</span><span>La ticketera tiene los datos de tus clientes. Vos no.</span></p>
      <p className={s.dolor}><span>🎟️</span><span>Tu público paga un costo de servicio que no ves y te encarece la entrada.</span></p>
    </div>

    <div className={s.sec} style={{ background: "#101016" }}>
      <h2 className={s.h2}>Con Vincufy</h2>
      <p className={s.check}><span className={s.verde}>✓</span><span><strong>Cobrás cuando venden</strong>, no cuando termina el evento.</span></p>
      <p className={s.check}><span className={s.verde}>✓</span><span><strong>0% de comisión.</strong> Ni a vos ni a quien compra.</span></p>
      <p className={s.check}><span className={s.verde}>✓</span><span><strong>La lista de quienes fueron es tuya</strong>, y les avisás la próxima.</span></p>
      <button className={s.cta} style={{ marginTop: 16 }}>Crear mi evento gratis</button>
      <p className={s.micro}>Tus primeras 25 entradas incluidas · sin tarjeta</p>
    </div>

    <div className={s.sec}>
      <h2 className={s.h2}>Preguntas que nos hacen</h2>
      {[
        ["¿De verdad no cobran comisión?", "No. Ni a vos ni a quien compra la entrada."],
        ["¿Entonces de qué viven?", "De los paquetes de entradas, si necesitás más de 25. Las primeras 25 son tuyas."],
        ["¿Cuándo me llega la plata?", "En el momento en que alguien compra, a tu cuenta de Mercado Pago."],
        ["¿Mi evento lo ve cualquiera?", "No. Es privado: sólo lo ve quien recibe tu link."],
        ["¿Tengo que poner tarjeta?", "No para empezar."],
      ].map(([q, a]) => (
        <div className={s.card} key={q}>
          <div style={{ fontWeight: 600, fontSize: 14 }}>{q}</div>
          <div className={s.mini} style={{ marginTop: 5 }}>{a}</div>
        </div>
      ))}
      <button className={s.cta} style={{ marginTop: 8 }}>Empezar gratis</button>
      <p className={s.micro}>Si no te sirve, no pagaste nada</p>
    </div>
  </div>
);

const pantallas = [
  { titulo: "Entrada (en el producto)", render: () => <Landing />,
    decisiones: [
      { que: "Vive en el producto, no en una landing aparte",
        porque: "El ad entra directo acá. Sin salto de dominio en el momento de máxima intención.",
        fuente: "Cada cambio de sitio cuesta contexto, sesión y confianza." },
      { que: "El titular es el problema, no la solución",
        porque: "'Tu fiesta ya se hizo. Tu plata todavía no llegó.' El nombre del producto no aparece hasta la mitad de la página.",
        fuente: "Schwartz: tráfico frío (nivel 1-2) abre con el deseo o el dolor, nunca con el producto." },
      { que: "La agitación es una cuenta, no un adjetivo",
        porque: "300 × $8.000 = $2.400.000 retenidos 30 días. Un número propio duele más que 'te retienen los fondos'.",
        fuente: "PAS convirtió ~22% más que una lista de features en 12.400 landings analizadas." },
      { que: "El dolor se cierra con la consecuencia",
        porque: "'Con esa plata pagabas el sonido, la seña y la próxima fecha.' El problema se vuelve concreto en su operación." },
      { que: "La solución llega recién en el tercer bloque",
        porque: "Antes hay que hacerle sentir el problema. Si la solución aparece primero, no hay nada que resolver.",
        fuente: "Acto 1 relevancia → Acto 2 creencia → Acto 3 acción." },
      { que: "FAQ con la objeción caliente primero",
        porque: "'¿De verdad no cobran comisión?' y '¿entonces de qué viven?' son las dos que deciden. La segunda desarma la sospecha de trampa.",
        fuente: "FAQ 5-6, ordenadas por objeción caliente: costo, esfuerzo, condiciones." },
    ] },

  { titulo: "Crear (una pantalla)", decisiones: [
      { que: "Todo el onboarding en una sola pantalla",
        porque: "La apuesta contra la A: ver el formulario entero es menos intimidante que un 'paso 1 de 5', que anuncia trabajo antes de empezarlo." },
      { que: "'Sin cuenta. Guardás al final.'",
        porque: "Se dice arriba de todo, antes del primer campo: es la objeción que frena a alguien que llegó de un ad." },
      { que: "El costo se anuncia sin cobrarse",
        porque: "'Las primeras 25 van incluidas. Si ponés más, te muestro el costo antes de cobrarte.' Transparencia sin fricción.",
        fuente: "Esconder el precio le dice al escéptico que es alto." },
      { que: "Cuatro campos y ninguno opcional a la vista",
        porque: "Nada que decidir de más. Imagen, descripción y control de puerta se configuran después." },
    ],
    render: () => (
      <div className={s.pag}>
        <div className={s.topbar}><span className={s.logo}>vincufy</span></div>
        <div style={{ padding: "20px 20px 0" }}>
          <h2 className={s.h2}>Tu evento, en un minuto</h2>
          <p className={s.mini} style={{ marginBottom: 16 }}>Sin cuenta. Guardás al final.</p>
          <div className={s.label}>Nombre</div>
          <input className={s.campo} defaultValue="Jueves de Previa" />
          <div className={s.label}>Fecha</div>
          <input className={s.campo} defaultValue="2026-09-12 · 23:00" />
          <div className={s.label}>Entradas</div>
          <input className={s.campo} defaultValue="25" />
          <p className={s.ayuda}><span className={s.verde}>Las primeras 25 van incluidas.</span> Si ponés más, te muestro el costo antes de cobrarte.</p>
          <div className={s.label}>Precio de cada entrada</div>
          <input className={s.campo} defaultValue="$ 8.000" />
          <p className={s.ayuda}>Vincufy no se queda con nada.</p>
          <button className={s.cta}>Crear evento</button>
          <p className={s.micro}>Gratis · sin tarjeta</p>
        </div>
      </div>
    ) },

  { titulo: "Listo · compartir", decisiones: [
      { que: "El 'wow' antes de pedir la cuenta",
        porque: "Mismo principio que la A: primero recibe, después da.",
        fuente: "Acto 3: que no actuar se sienta como perder algo." },
      { que: "Se proyecta la recaudación",
        porque: "'$200.000, te llega a medida que compran' cierra el círculo con el titular: era plata retenida, ahora es plata que entra." },
      { que: "Privacidad en el microcopy del botón de compartir",
        porque: "Es donde aparece la duda: '¿esto lo va a ver cualquiera?'." },
    ],
    render: () => (
      <div className={s.pag}>
        <div className={s.topbar}><span className={s.logo}>vincufy</span></div>
        <div style={{ padding: "26px 20px" }}>
          <div className={s.exito}>
            <div style={{ fontSize: 30 }}>🎉</div>
            <h2 className={s.h2} style={{ marginTop: 8 }}>Listo, ya podés vender</h2>
          </div>
          <div className={s.card} style={{ marginTop: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
              <span className={s.gris}>Si vendés las 25</span><strong>$200.000</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 14 }}>
              <span className={s.gris}>Te llega</span><span className={s.verde}>a medida que compran</span>
            </div>
          </div>
          <button className={s.cta} style={{ marginTop: 14 }}>Compartir por WhatsApp</button>
          <p className={s.micro}>Privado: sólo lo ve quien recibe el link</p>
          <div className={s.card} style={{ marginTop: 18 }}>
            <div className={s.label}>Guardalo con tu mail</div>
            <div className={s.ayuda}>Para volver a entrar y ver quién compró.</div>
            <input className={s.campo} placeholder="tumail@ejemplo.com" />
            <button className={s.ctaSec}>Guardar</button>
          </div>
        </div>
      </div>
    ) },

  { titulo: "Conectar cobro", decisiones: [
      { que: "Mercado Pago se conecta cuando llega la primera venta",
        porque: "No durante la creación. Antes de vender es un trámite; con alguien esperando para comprar es urgente y tiene sentido." },
      { que: "El disparador es una buena noticia",
        porque: "'Alguien quiere comprar tu entrada' convierte un paso administrativo en una recompensa." },
      { que: "'La plata va a tu cuenta, no a la nuestra'",
        porque: "Desarma la desconfianza de conectar una cuenta de cobro a un producto que recién conoce." },
    ],
    render: () => (
      <div className={s.pag}>
        <div className={s.topbar}><span className={s.logo}>vincufy</span></div>
        <div style={{ padding: "24px 20px" }}>
          <div className={s.card} style={{ borderColor: "#f59e0b" }}>
            <div style={{ fontWeight: 700, fontSize: 15 }}>Alguien quiere comprar tu entrada</div>
            <div className={s.mini} style={{ marginTop: 5 }}>
              Conectá tu Mercado Pago para que la plata te llegue directo.
            </div>
          </div>
          <button className={s.cta} style={{ marginTop: 16 }}>Conectar Mercado Pago</button>
          <p className={s.micro}>Tarda 30 segundos · la plata va a tu cuenta, no a la nuestra</p>
        </div>
      </div>
    ) },

  { titulo: "Pago (sólo si escala)", decisiones: [
      { que: "El checkout llega sólo si pidió más de 25",
        porque: "Idéntico a la A: quien se queda en el evento gratis nunca ve esta pantalla." },
      { que: "El precio se compara contra la comisión de una ticketera",
        porque: "$164.725 solo es un número. Al lado de los $220.000 que le habría cobrado una ticketera —y encima después del evento— se lee barato.",
        fuente: "El precio no se defiende con descuentos: se defiende con el costo de la alternativa." },
    ],
    render: () => (
      <div className={s.pag}>
        <div className={s.topbar}><span className={s.logo}>vincufy</span></div>
        <div style={{ padding: "22px 20px" }}>
          <h2 className={s.h2}>Sumar entradas</h2>
          <div className={s.card}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
              <span>275 entradas más</span><span>× $599</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, alignItems: "baseline" }}>
              <span className={s.gris}>Total</span><span className={s.precio}>$164.725</span>
            </div>
          </div>
          <div className={s.card}>
            <div className={s.mini}>Una ticketera con 10% de comisión sobre esas entradas
            te habría cobrado <span className={s.tachado}>$220.000</span> — y te pagaba
            después del evento.</div>
          </div>
          <button className={s.cta}>Pagar con Mercado Pago</button>
          <p className={s.micro}>Disponibles al instante</p>
        </div>
      </div>
    ) },
];

const resumen = (
  <div>
    <h4>La apuesta</h4>
    <p>Abrir por el dolor más caro y más concreto —la plata retenida— en vez de por la
    oferta. El tráfico del ad es frío: no sabe que hay una alternativa, así que primero
    hay que hacerle sentir el problema.</p>
    <h4>Diferencias con la A</h4>
    <ul>
      <li><strong>Gancho:</strong> A lidera con "gratis" (la oferta), B con "no te dan tu
      plata" (el problema).</li>
      <li><strong>Onboarding:</strong> A lo parte en 3 pasos, B lo pone TODO en una
      pantalla. Un "paso 1 de N" anuncia trabajo antes de empezarlo.</li>
      <li><strong>Mercado Pago:</strong> se conecta cuando llega la primera venta, no
      durante la creación.</li>
      <li><strong>Precio:</strong> cuando aparece, se compara contra la comisión que le
      habría cobrado una ticketera.</li>
    </ul>
    <h4>El riesgo</h4>
    <p>PAS mal calibrado suena a queja. Si la agitación se pasa de larga, el productor se
    siente retado en vez de entendido.</p>
  </div>
);

const MockupB = () => (
  <MockupShell nombre="Propuesta B — La plata que no te dan" resumen={resumen} pantallas={pantallas} />
);

export default MockupB;
