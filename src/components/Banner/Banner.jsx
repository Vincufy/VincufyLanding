import { useState } from "react";
import styles from "./Banner.module.css";
import iphone from "../../assets/Banner/iphone.png";
import demoButton from "../../assets/Banner/demoButton1.png";
import backgroundVideo from "../../assets/Banner/backgroundVideo.mp4";

const Banner = ({ setOpenModal, setOrigin }) => {
  const [openDemo, setOpenDemo] = useState(false);

  return (
    <>
      {openDemo && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={() => setOpenDemo(false)}
            >
              ×
            </button>
            <iframe
              style={{
                border: "1px solid grey",
                backgroundColor: "black",
                borderRadius: "8px",
              }}
              width="300"
              height="400"
              src="https://embed.figma.com/proto/TUjA3Mf2VNBBc6Eq8StVVd/Dise%C3%B1o-prototipo-para-Landing?node-id=1-280&scaling=scale-down&content-scaling=responsive&page-id=0%3A1&starting-point-node-id=1%3A21&hotspot-hints=0&embed-host=share"
              allowFullScreen
            />
          </div>
        </div>
      )}
      <video className={styles.backgroundVideo} autoPlay muted loop playsInline>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className={styles.container}>
        <div className={styles.textAndButton}>
          <div className={styles.titlesContainer}>
            <h1 className={styles.title}>Más que una simple ticketera</h1>
            <h2 className={styles.subtitle}>
              Vinculamos gente en eventos y creamos comunidades
            </h2>
          </div>
          <div className={styles.btnContainer}>
            <button
              className={styles.createEventBtn}
              onClick={() => {
                setOpenModal(true);
                setOrigin("CreateEvent");
              }}
            >
              Crear evento
            </button>
          </div>
        </div>

        <div className={styles.imageWrapper} onClick={() => setOpenDemo(true)}>
          <img
            src={iphone}
            alt="iPhone device"
            className={styles.iphoneImage}
          />
          <img
            src={demoButton}
            alt="Botón demo"
            className={styles.demoButton}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
