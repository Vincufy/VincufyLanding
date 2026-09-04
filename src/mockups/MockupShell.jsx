import { useState, useEffect } from "react";
import { silenciarAnalytics } from "../lib/posthog";
import styles from "./mockup.module.css";

/**
 * Andamio compartido de los mockups.
 *
 * 1. **Silencia analytics apenas monta.** Los mockups viven en el mismo dominio que la
 *    landing real y la replica del actual renderiza los componentes REALES, asi que sin
 *    esto emitirian eventos y contaminarian las metricas de la campana — justo lo que
 *    estos mockups existen para evitar.
 * 2. **No tocan la landing ni el onboarding reales**, que quedan como corrieron en la
 *    campana #2 para poder comparar.
 * 3. **Cada pantalla lleva su justificacion al costado**: que decision se tomo y de que
 *    principio de landing/marketing/ventas sale. Un mockup sin el porque es una opinion
 *    linda; con el porque es una discusion que se puede tener.
 */
const MockupShell = ({ nombre, resumen, pantallas }) => {
  const [i, setI] = useState(0);
  useEffect(() => { silenciarAnalytics(); }, []);

  const total = pantallas.length;
  const actual = pantallas[i];

  return (
    <div className={styles.root}>
      <div className={styles.aviso}>
        MOCKUP · {nombre} · no es el producto real y no registra métricas
      </div>

      <div className={styles.escenario}>
        <div className={styles.columnaTel}>
          <div className={styles.telefono}>
            <div className={styles.pantalla}>{actual.render()}</div>
          </div>
          <div className={styles.controles}>
            <button className={styles.navBtn} onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0}>
              ← Anterior
            </button>
            <div className={styles.pasoInfo}><strong>{i + 1}/{total}</strong> · {actual.titulo}</div>
            <button className={styles.navBtn} onClick={() => setI((n) => Math.min(total - 1, n + 1))} disabled={i === total - 1}>
              Siguiente →
            </button>
          </div>
        </div>

        <aside className={styles.panel}>
          <div className={styles.panelTitulo}>Por qué esta pantalla es así</div>
          <div className={styles.panelSub}>{actual.titulo}</div>

          {(actual.decisiones || []).map((d) => (
            <div className={styles.item} key={d.que}>
              <div className={styles.itemQue}>{d.que}</div>
              <div className={styles.itemPorque}>{d.porque}</div>
              {d.fuente && <div className={styles.itemFuente}>{d.fuente}</div>}
            </div>
          ))}

          {actual.dato && (
            <div className={styles.datoMedido}>
              <div className={styles.datoTitulo}>Dato medido en la campaña #2</div>
              <div>{actual.dato}</div>
            </div>
          )}
        </aside>
      </div>

      <details className={styles.resumen}>
        <summary>Qué propone esta versión y por qué</summary>
        <div className={styles.resumenCuerpo}>{resumen}</div>
      </details>

      <div className={styles.saltos}>
        {pantallas.map((p, n) => (
          <button key={p.titulo} className={n === i ? styles.saltoActivo : styles.salto} onClick={() => setI(n)}>
            {n + 1}. {p.titulo}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MockupShell;
