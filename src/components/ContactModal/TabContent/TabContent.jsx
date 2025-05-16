import {
  CalendlyButton,
  MailchimpForm,
  WhatsappButton,
} from "../../ShareButtons";
import styles from "./TabContent.module.css";

const TabContent = ({ activeTab, origin }) => {
  const messages = {
    MessageButton: {
      whatsapp: {
        title: "Escribinos por Whatsapp y sacate todas las dudas!",
        message: "Hola! vengo de la web, tengo algunas dudas con...",
      },
      mail: "Dejanos tu mail y te enviaremos una presentación con más información!",
      meet: "Agendá una reunión con nosotros y sacate todas las dudas!",
    },
    CreateEvent: {
      whatsapp: {
        title: "Escribinos por Whatsapp y creamos tu evento juntos!",
        message: "Hola! vengo de la web, me gustaría crear un evento con Vincufy.",
      },
      mail: "Dejanos tu mail y te enviaremos una presentación con más información!",
      meet: "Agendá una reunión y creamos tu evento juntos!",
    },
  };
  const title = messages[origin][activeTab];

  return (
    <div className={styles.tabContent}>
      {activeTab === "whatsapp" && <WhatsappButton info={title} />}
      {activeTab === "mail" && <MailchimpForm title={title} />}
      {activeTab === "meet" && <CalendlyButton title={title} />}
    </div>
  );
};

export default TabContent;
