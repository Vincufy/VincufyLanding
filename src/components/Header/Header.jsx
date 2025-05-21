import styles from "./Header.module.css";
import vincufyLogo from "../../assets/Logo/logoHeaderVincufy.png";

const Header = () => {
  const goToWebApp = () => {
    window.open("https://vincufy.com.ar/", "_blank");
  };
  return (
    <header className={styles.header}>
      <img
        src={vincufyLogo}
        alt="Vincufy Logo"
        className={styles.vincufyLogo}
      />
      <button onClick={goToWebApp} className={styles.login}>
        Iniciar sesión
      </button>
    </header>
  );
};

export default Header;
