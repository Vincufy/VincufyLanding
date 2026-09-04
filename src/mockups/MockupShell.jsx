import { useState } from "react";
import styles from "./mockup.module.css";

/**
 * Andamio compartido de los mockups.
 *
 * Tres reglas que lo definen:
 *
 * 1. **No emite un solo evento de analytics.** Los mockups viven en el mismo dominio
 *    que la landing real, así que si tocaran PostHog contaminarían las métricas de la
 *    campaña, que es justo lo que estos mockups existen para no hacer.
 * 2. **No tocan nada de lo que ya está.** La landing y el onboarding reales quedan
 *    exactamente como corrieron en la campaña #2: son el punto de comparación.
 * 3. **Cada propuesta llega hasta el pago**, recreando también las pantallas del
 *    producto. El onboarding es donde se cae la gente, así que un mockup que termine
 *    en el click de "Comprar" no sirve para nada.
 */
const MockupShell = ({ nombre, resumen, pantallas }) => {
  const [i, setI] = useState(0);
  const total = pantallas.length;
  const actual = pantallas[i];

  return (
    <div className={styles.root}>
      <div className={styles.aviso}>
        MOCKUP · {nombre} · no es el producto real y no registra métricas
      </div>

      <div className={styles.marco}>
        <div className={styles.telefono}>
          <div className={styles.pantalla}>{actual.render()}</div>
        </div>
      </div>

      <div className={styles.controles}>
        <button
          className={styles.navBtn}
          onClick={() => setI((n) => Math.max(0, n - 1))}
          disabled={i === 0}
        >
          ← Anterior
        </button>
        <div className={styles.pasoInfo}>
          <strong>{i + 1}/{total}</strong> · {actual.titulo}
        </div>
        <button
          className={styles.navBtn}
          onClick={() => setI((n) => Math.min(total - 1, n + 1))}
          disabled={i === total - 1}
        >
          Siguiente →
        </button>
      </div>

      <div className={styles.notaPantalla}>
        {actual.nota && <p className={styles.nota}>{actual.nota}</p>}
      </div>

      <details className={styles.resumen}>
        <summary>Qué propone esta versión y por qué</summary>
        <div className={styles.resumenCuerpo}>{resumen}</div>
      </details>

      <div className={styles.saltos}>
        {pantallas.map((p, n) => (
          <button
            key={p.titulo}
            className={n === i ? styles.saltoActivo : styles.salto}
            onClick={() => setI(n)}
          >
            {n + 1}. {p.titulo}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MockupShell;
