import styles from "./Differentiator.module.css";
import comunidad from "../../assets/Differentiator/grupo.png";
import redes from "../../assets/Differentiator/grupo2.png";

const Differentiator = ({ setOpenModal, setOrigin }) => {
  return (
    <>
      <h1 className={styles.sectionTitle}>¿Por qué somos distintos?</h1>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.textDiv}>
            <img src={redes} alt="redes" />
            <h2>Red social</h2>
            <p>
              A través de la entrada/invitación, logramos que tus invitados
              estén dentro de la sala virtual y tengan una experiencia única.
              Conocerán el resto de los participantes y podrán vincularse antes,
              durante y después de tu evento.
            </p>
             <button
        className={styles.callToAction}
        onClick={() => {
          setOpenModal(true);
          setOrigin("MessageButton");
        }}
      >
        Más información
      </button>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.textDiv}>
            <img src={comunidad} alt="comunidad" />
            <h2>Comunidad</h2>
            <p>
              Buscamos que no pierdas a tu público, para ello creamos tu
              comunidad privada, un lugar donde todos los participantes de tus
              eventos estarán juntos. Además, podrás enviarle notificaciones
              directas a sus celulares y asi dar una segunda vida útil.
            </p>
             <button
        className={styles.callToAction}
        onClick={() => {
          setOpenModal(true);
          setOrigin("MessageButton");
        }}
      >
        Más información
      </button>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Differentiator;
