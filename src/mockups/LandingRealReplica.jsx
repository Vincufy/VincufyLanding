import OfferModule from "../components/quiz/OfferModule";
import PricingModule from "../components/quiz/PricingModule";
import { landingsBySegment } from "../content/landings/index";
import { eventosFunnel } from "../funnels/eventos/config";
import offerStyles from "../pages/OfferPage.module.css";

/**
 * La landing REAL, renderizada con sus propios componentes.
 *
 * No es una copia hecha a mano: importa `OfferModule`, `PricingModule`, el contenido de
 * `landingsBySegment` y el CSS de `OfferPage.module.css`. Cualquier diferencia entre la
 * landing de produccion y esto seria un bug, no una licencia del mockup.
 *
 * Se hizo asi a proposito: una replica escrita a mano se desactualiza el dia que alguien
 * toca la landing, y entonces la comparacion contra las propuestas nuevas deja de valer.
 *
 * Los clicks no navegan y no emiten eventos (el shell silencia analytics al montar).
 */
const LandingRealReplica = ({ segment = "productores" }) => {
  const landing = landingsBySegment[segment];
  const highlightedTierId =
    eventosFunnel.pricing.highlightedTierBySegment[segment] ||
    landing.highlightedTier ||
    "pro";

  return (
    <div className={offerStyles.container}>
      <div className={offerStyles.vignette} aria-hidden="true" />
      <div className={offerStyles.pageContent}>
        {landing.modules.map((m, i) =>
          m.kind === "pricing" ? (
            <div key={i} className={offerStyles.revealWrapper} data-revealed="true">
              <PricingModule
                highlightedTierId={highlightedTierId}
                onTierClick={() => {}}
                segment={segment}
              />
            </div>
          ) : (
            <OfferModule
              key={i}
              module={m}
              onCtaBuy={() => {}}
              highlightedTier={{}}
              segment={segment}
            />
          )
        )}
      </div>
    </div>
  );
};

export default LandingRealReplica;
