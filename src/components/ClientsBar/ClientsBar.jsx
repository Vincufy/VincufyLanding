import styles from "./ClientsBar.module.css";
import cliente1 from "../../assets/Clients/LogoSiglo21.png";
import cliente2 from "../../assets/Clients/LogoSantander.png";
import cliente3 from "../../assets/Clients/LogoAsetec.png";
import cliente4 from "../../assets/Clients/LogoArteGourmet.png";
import cliente5 from "../../assets/Clients/LogoPandrah.png";

const ClientsBar = () => {
  const clients = [cliente1, cliente2, cliente3, cliente4, cliente5];
  return (
    <div className={styles.container}>
  {clients.map((client, index) => (
    <img key={index} src={client} alt={`Logo cliente ${index}`} className={styles.clientLogos}/>
  ))}
</div>

  );
};

export default ClientsBar;
