import step1 from "../../assets/StepByStep/step1.gif";
import step2 from "../../assets/StepByStep/step2.gif";
import step3 from "../../assets/StepByStep/step3.png";
import step4 from "../../assets/StepByStep/step4.gif";
import styles from "./StepByStep.module.css";

const StepByStep = ({ setOpenModal, setOrigin }) => {
  const steps = [
    {
      title: "Entradas",
      subtitle:
        "Tus clientes ingresan a través de tu link y adquieren su entrada o invitación.",
      img: step1,
      hasBackground: false,
    },
    {
      title: "Red social",
      subtitle:
        "Los participantes de tu evento podrán vincularse antes, durante y después del mismo.",
      img: step2,
      hasBackground: true,
    },
    {
      title: "Comunidad",
      subtitle:
        "Finalizado el evento, creamos tu comunidad privada para que no pierdas a tu público.",
      img: step3,
      hasBackground: true,
    },
    {
      title: "Notificaciones",
      subtitle:
        "Comunicate con ellos de manera directa enviando notificaciones a su celular.",
      img: step4,
      hasBackground: false,
    },
  ];

  return (
    <>
      <h1 className={styles.sectionTitle}>Paso a paso</h1>
      <div className={styles.container}>
        {steps.map((step, index) => (
          <div key={index} className={styles.card}>
            {step.hasBackground && <div className={styles.background} />}

            <div className={styles.textDiv}>
              <h1>{index + 1}</h1>
              <div className={styles.titleSubtitle}>
                <h2>{step.title}</h2>
                <p>{step.subtitle}</p>
              </div>
            </div>
            <img
              src={step.img}
              alt={`paso${index + 1}`}
              className={styles.video}
            />
          </div>
        ))}
      </div>
      <button
        className={styles.callToAction}
        onClick={() => {
          setOpenModal(true);
          setOrigin("MessageButton");
        }}
      >
        Agendar una reunión
      </button>
    </>
  );
};

export default StepByStep;
