import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { initPostHog } from "./lib/posthog";
import { initMetaPixel } from "./lib/metaPixel";

initPostHog();
initMetaPixel();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
