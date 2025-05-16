import vincufyLogo from "./assets/Logo/logoHeaderVincufy.png";
import { useState } from "react";
import {
  Banner,
  ClientsBar,
  MessageButton,
  ContactModal,
  StepByStep,
  Differentiator,
} from "./components";
import "./App.css";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [origin, setOrigin] = useState("");
  return (
    <div>
      <img
        src={vincufyLogo}
        alt="Vincufy Logo"
        style={{ height: "28px", width: "115px" }}
      />
      <Banner setOpenModal={setOpenModal} setOrigin={setOrigin} />
      <ClientsBar />
      <Differentiator />
      <StepByStep />
      <MessageButton setOpenModal={setOpenModal} setOrigin={setOrigin} />
      {openModal && (
        <ContactModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          origin={origin}
        />
      )}
    </div>
  );
}

export default App;
