import styles from "./Footer.module.css";
import logoVincufy from "../../assets/Logo/logoHeaderVincufy.png";
import instagramIcon from "../../assets/Logo/instagramBlanco.png";
import corazonIcon from "../../assets/Logo/corazon.png";
import meetIcon from "../../assets/Logo/meetBlanco.png";
import whatsappIcon from "../../assets/Logo/whatsappBlanco.png";

const socialLinks = [
  { name: "Instagram", icon: instagramIcon, url: "https://www.instagram.com/vincufy" },
  { name: "WhatsApp", icon: whatsappIcon, url: "https://wa.me/5492214773939" },
  { name: "Meet", icon: meetIcon, url: "https://calendly.com/contacto-vincufy/30min?month=2025-05" },
];

const navigationLinks = [
  [
    { label: "Inicio", href: "#inicio" },
    { label: "Demo", onClick: true },
  ],
  [
    { label: "Diferencial", href: "#diferencial" },
    { label: "Paso a paso", href: "#paso-a-paso" },
  ],
];

const Footer = ({ setOpenDemo }) => {
  const handleDemoClick = (e) => {
    e.preventDefault();
    setOpenDemo(true);
  };

  const handleExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className={styles.container}>
      <div className={styles.firstRow}>
        <img
          src={logoVincufy}
          alt="Logo Vincufy"
          className={styles.vincufyLogo}
        />

        <nav className={styles.sectionContainer}>
          {navigationLinks.map((group, i) => (
            <div key={i} className={styles.sectionItemDiv}>
              {group.map((link) =>
                link.onClick ? (
                  <a key={link.label} href="#" onClick={handleDemoClick}>
                    {link.label}
                  </a>
                ) : (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                )
              )}
            </div>
          ))}
        </nav>

        <div className={styles.socialIconsContainer}>
          {socialLinks.map((social) => (
            <img
              key={social.name}
              src={social.icon}
              alt={social.name}
              className={styles.icon}
              onClick={() => handleExternalLink(social.url)}
            />
          ))}
        </div>
      </div>

      <div className={styles.creditsDiv}>
        <p>Creada por el equipo de Vincufy</p>
        <img src={corazonIcon} alt="Corazón" className={styles.corazonLogo} />
        <p className={styles.derechos}>Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;