import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuizLander from "./pages/QuizLander";
import OfferPage from "./pages/OfferPage";
import ThankYou from "./pages/ThankYou";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/q/eventos" element={<QuizLander />} />
        <Route path="/q/eventos/r/:segment" element={<OfferPage />} />
        <Route path="/q/eventos/gracias" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
