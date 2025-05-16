import styles from "./Differentiator.module.css";

const Differentiator = () => {
  const steps = [
    {
      title: "Red social",
      subtitle:
        "A través de la entrada/invitación, logramos que tus invitados estén dentro de la sala virtual y tengan una experiencia única. Conocerán el resto de los participantes y podrán vincularse antes, durante y después de tu evento.",
    },
    {
      title: "Comunidad",
      subtitle:
        "Buscamos que no pierdas a tu público, para ello creamos tu comunidad privada, un lugar donde todos los participantes de tus eventos estarán juntos. Además, podrás enviarle notificaciones directas a sus celulares y asi dar una segunda vida útil.",
    },
  ];
  return (
    <>
      <h1 className={styles.sectionTitle}>¿Por qué somos distintos?</h1>
      <div className={styles.container}>
        {steps.map((step) => (
          <div className={styles.textDiv}>
            <h2>{step.title}</h2>
            <p>{step.subtitle}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Differentiator;
