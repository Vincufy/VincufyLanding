import { useEffect, useRef } from "react";
import { analyticEvent } from "../../lib/posthog";

/**
 * Mide DOS cosas por sección, no una:
 *
 * - `section_viewed`: se disparó una vez, cuando la sección entró en pantalla. Dice
 *   QUÉ vieron y, por ausencia, dónde dejaron de bajar.
 * - `section_dwell`: cuántos segundos estuvo visible. Es lo que distingue una sección
 *   que pasó de largo en el scroll de una que efectivamente leyeron, y sin eso
 *   "la vieron" y "les interesó" son el mismo número.
 *
 * El dwell se acumula entre entradas y salidas del viewport (alguien puede volver a
 * subir) y se emite al salir de la sección o al abandonar la página, para no perder
 * el tramo de la última sección mirada, que suele ser justo donde se cae la gente.
 *
 * @param {object} options
 * @param {string} options.section - nombre estable de la sección
 * @param {object} [options.extra] - propiedades adicionales para ambos eventos
 * @param {number} [options.threshold=0.12]
 */
const useInViewTrack = ({ section, extra, threshold = 0.12 }) => {
  const ref = useRef(null);
  const firedRef = useRef(false);
  const desdeRef = useRef(null);
  const acumRef = useRef(0);
  // Por ref para que cambiar el objeto `extra` en cada render no reprograme el
  // observer ni pierda el tiempo acumulado.
  const extraRef = useRef(extra);
  extraRef.current = extra;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cerrarTramo = () => {
      if (desdeRef.current == null) return;
      acumRef.current += (Date.now() - desdeRef.current) / 1000;
      desdeRef.current = null;
    };

    const emitirDwell = () => {
      cerrarTramo();
      const segundos = Math.round(acumRef.current * 10) / 10;
      if (segundos <= 0) return;
      acumRef.current = 0;
      analyticEvent("section_dwell", {
        section,
        seconds: segundos,
        ...(extraRef.current || {}),
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!firedRef.current) {
            firedRef.current = true;
            analyticEvent("section_viewed", {
              section,
              ...(extraRef.current || {}),
            });
          }
          desdeRef.current = Date.now();
        } else {
          emitirDwell();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);

    // Al irse de la página se cierra el tramo abierto: si no, la última sección
    // —la que suele explicar el abandono— nunca reporta su tiempo.
    const alSalir = () => emitirDwell();
    window.addEventListener("pagehide", alSalir);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") emitirDwell();
    });

    return () => {
      emitirDwell();
      observer.disconnect();
      window.removeEventListener("pagehide", alSalir);
    };
  }, [section, threshold]);

  return ref;
};

export default useInViewTrack;
