import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
