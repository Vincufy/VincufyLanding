import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// Mockups internos para llevar propuestas al equipo. Van en rutas largas y no
// adivinables a proposito: comparten dominio con la landing real y NO deben caerle
// encima a nadie que no tenga el link. No emiten un solo evento de analytics.
import MockupActual from "./mockups/MockupActual";
import MockupA from "./mockups/MockupA";
import MockupB from "./mockups/MockupB";
import LandingRealBare from "./mockups/LandingRealBare";
import Home from "./pages/Home";
import QuizLander from "./pages/QuizLander";
import OfferPage from "./pages/OfferPage";
import ThankYou from "./pages/ThankYou";
import { pixelPageView } from "./lib/metaPixel";
import "./App.css";

const PixelRouteTracker = () => {
  const location = useLocation();
  const isFirst = useRef(true);
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    pixelPageView();
  }, [location.pathname]);
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <PixelRouteTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/q/eventos" element={<QuizLander />} />
        <Route path="/q/eventos/r/:segment" element={<OfferPage />} />
        <Route path="/q/eventos/gracias" element={<ThankYou />} />
        <Route path="/lab-k7x92m/actual" element={<MockupActual />} />
        {/* La landing real sola, para que el mockup la muestre en un iframe de 390 px
            y las media queries resuelvan como en un celular. */}
        <Route path="/lab-k7x92m/_r/landing" element={<LandingRealBare />} />
        <Route path="/lab-k7x92m/a-gratis-primero" element={<MockupA />} />
        <Route path="/lab-k7x92m/b-plata-retenida" element={<MockupB />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
