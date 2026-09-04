import { useEffect } from "react";
import { silenciarAnalytics } from "../lib/posthog";
import LandingRealReplica from "./LandingRealReplica";

/**
 * La landing real, sola y sin el andamio del mockup.
 *
 * Existe para que el mockup la meta en un <iframe> de 390 px de ancho. Los estilos de la
 * landing usan media queries contra el VIEWPORT (`min-width: 600px` y varias mas), no
 * contra el contenedor: metida directo en un marco de 390 px dentro de una ventana de
 * 1280, se seguia viendo con el diseño de escritorio.
 *
 * Un iframe tiene su propio viewport, asi que a 390 px de ancho las media queries
 * resuelven igual que en un celular de verdad. Es la unica forma de conseguir la vista
 * movil real sin tocar el CSS de la landing, que tiene que quedar intacto.
 */
const LandingRealBare = () => {
  useEffect(() => { silenciarAnalytics(); }, []);
  silenciarAnalytics(); // también en el primer render, antes de que monte nada
  return <LandingRealReplica segment="productores" />;
};

export default LandingRealBare;
