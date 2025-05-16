import styles from "./WhatsappButton.module.css";

const WhatsappButton = ({ info }) => {
  const phoneNumber = "5492214773939";
  const message = info?.message;
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className={styles.container}>
      <p>{info?.title}</p>
      <button onClick={handleClick}>Ir a WhatsApp</button>
    </div>
  );
};

export default WhatsappButton;
