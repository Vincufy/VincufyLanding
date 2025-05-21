import { useState } from "react";
import {
  Header,
  Banner,
  ClientsBar,
  MessageButton,
  ContactModal,
  StepByStep,
  Differentiator,
  Footer,
} from "./components";
import "./App.css";

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [origin, setOrigin] = useState("");
  const [openDemo, setOpenDemo] = useState(false);

  return (
    <div>
      <section id="inicio">
        <Header/>
        <Banner
          setOpenModal={setOpenModal}
          setOrigin={setOrigin}
          openDemo={openDemo}
          setOpenDemo={setOpenDemo}
        />
        <ClientsBar />
      </section>
      <section id="diferencial">
        <Differentiator setOpenModal={setOpenModal} setOrigin={setOrigin} />
      </section>
      <section id="paso-a-paso">
        <StepByStep setOpenModal={setOpenModal} setOrigin={setOrigin} />
      </section>
      {/* <MessageButton setOpenModal={setOpenModal} setOrigin={setOrigin} /> */}
      {openModal && (
        <ContactModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          origin={origin}
        />
      )}
      <Footer setOpenDemo={setOpenDemo} />
    </div>
  );
};

export default App;
