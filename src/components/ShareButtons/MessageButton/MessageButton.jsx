import chatLogo from "../../../assets/Logo/chat.png";
import styles from "./MessageButton.module.css";

const MessageButton = ({ setOpenModal, setOrigin }) => {
  return (
    <>
      <button
        className={styles.messageButtonContainer}
        onClick={() => {
          setOpenModal(true);
          setOrigin("MessageButton");
        }}
      >
        <img
          src={chatLogo}
          alt="Contactate con nosostros"
          className={styles.messageIcon}
        />
      </button>
    </>
  );
};

export default MessageButton;
