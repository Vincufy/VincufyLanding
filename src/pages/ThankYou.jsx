import { useEffect } from "react";
import { Link } from "react-router-dom";
import { analyticEvent, analyticPageview } from "../lib/posthog";
import { eventosFunnel } from "../funnels/eventos/config";
import styles from "./ThankYou.module.css";

const ThankYou = () => {
  const calendlyLink = import.meta.env.VITE_CALENDLY_LINK;

  useEffect(() => {
    analyticPageview("/q/eventos/gracias");
    analyticEvent("thankyou_viewed", {});
  }, []);

  const handleCalendly = () => {
    analyticEvent("calendly_link_clicked", { source: "thankyou" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.checkmark}>✓</div>
        <h1 className={styles.title}>Tu lugar está reservado.</h1>
        <p className={styles.subtitle}>
          Te llega un mail en menos de 5 minutos con todo lo que sigue.
        </p>

        <div className={styles.list}>
          <p>Qué pasa ahora:</p>
          <ol>
            <li>Te escribo cada 2-3 semanas con avances reales.</li>
            <li>
              Cuando esté listo el beta (estimo {eventosFunnel.launchDate}), te aviso primero.
            </li>
            <li>
              Si en algún momento decido no seguir adelante, te lo digo derecho.
            </li>
          </ol>
        </div>

        {calendlyLink && (
          <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.calendlyButton}
            onClick={handleCalendly}
          >
            ¿15 minutos esta semana? Agendá una charla →
          </a>
        )}

        <Link to="/" className={styles.homeLink}>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
