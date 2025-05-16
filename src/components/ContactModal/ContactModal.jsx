import { useState, useEffect } from "react";
import styles from "./ContactModal.module.css";
import background from "../../assets/Backgrounds/fondoCard.png";
import whatsappLogo from "../../assets/Logo/whatsapp.png";
import gmailLogo from "../../assets/Logo/gmail.png";
import meetLogo from "../../assets/Logo/meet2.png";
import TabContent from "./TabContent/TabContent";

const ContactModal = ({ openModal, setOpenModal, origin }) => {
  const [activeTab, setActiveTab] = useState("whatsapp");
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (openModal) {
      setShowModal(true);
    }
  }, [openModal]);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setOpenModal(false);
    }, 500);
  };

  return (
    <div className={`${styles.overlay} ${showModal ? styles.show : ""}`}>
      <div className={styles.modalWrapper}>
        <div
          className={styles.modalContainer}
          style={{ backgroundImage: `url(${background})` }}
        >
          <button className={styles.closeButton} onClick={closeModal}>
            &times;
          </button>

          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeTab === "whatsapp" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("whatsapp")}
            >
              <img
                src={whatsappLogo}
                alt="Whatsapp"
                className={styles.wsLogo}
              />
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "mail" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("mail")}
            >
              <img src={gmailLogo} alt="Gmail" className={styles.gmailLogo} />
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "meet" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("meet")}
            >
              <img
                src={meetLogo}
                alt="Google Meet"
                className={styles.meetLogo}
              />
            </button>
          </div>

          <TabContent
            activeTab={activeTab}
            origin={origin}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
