import styles from "./CalendlyButton.module.css";

const CalendlyButton = ({ title }) => {
  return (
    <div className={styles.container}>
      <p>{title}</p>
      <button
        onClick={() =>
          window.open(
            "https://calendly.com/contacto-vincufy/30min?month=2025-05",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        Seleccionar fecha
      </button>
    </div>
  );
};

export default CalendlyButton;
