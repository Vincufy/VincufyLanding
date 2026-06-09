import { useEffect } from "react";
import { analyticEvent, analyticPageview } from "../lib/posthog";
import styles from "./ThankYou.module.css";

const ThankYou = () => {
  const calendlyLink = import.meta.env.VITE_CALENDLY_LINK;

  useEffect(() => {
    window.scrollTo(0, 0);
    analyticPageview("/q/eventos/gracias");
    analyticEvent("thankyou_viewed", {});
  }, []);

  const handleCalendly = () => {
    analyticEvent("calendly_link_clicked", { source: "thankyou" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.card}>
        <div className={styles.checkmark}>✓</div>
        <h1 className={styles.title}>Tu lugar está reservado.</h1>
        <p className={styles.subtitle}>
          Nos comunicaremos apenas se libere un nuevo cupo.
        </p>

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
      </div>
    </div>
  );
};

export default ThankYou;
