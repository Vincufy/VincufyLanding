import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OfferModule from "../components/quiz/OfferModule";
import PricingModule from "../components/quiz/PricingModule";
import useInViewReveal from "../components/quiz/useInViewReveal";
import { landingsBySegment } from "../content/landings";
import { eventosFunnel } from "../funnels/eventos/config";
import { SEGMENTS } from "../lib/segments";
import {
  analyticEvent,
  analyticPageview,
  analyticRegister,
  getAttribution,
  getDistinctId,
} from "../lib/posthog";
import { pixelTrack, pixelTrackWithEventId } from "../lib/metaPixel";
import { makeEventId, trackConversionViaCapi } from "../lib/metaCapi";
import styles from "./OfferPage.module.css";

// Slug de la campaña activa. Sirve para que el backend del SuperAdmin
// resuelva el pixel_id correcto desde campaigns.json cuando llegan los
// eventos CAPI server-side.
const CAMPAIGN_SLUG_FOR_CAPI = "smoke-2";

// Producto (otro dominio) y punto de entrada del onboarding de creación de evento.
// Un anónimo cae en Login/Registro y el propio producto lo devuelve acá al terminar
// (loggedOriginRoute), así que se puede deep-linkear sin estar logueado.
const PRODUCT_ORIGIN = "https://www.vincufy.com.ar";
const ONBOARDING_HASH = "#/onboarding/evento";

/**
 * URL del onboarding con la atribución colgada ANTES del '#'.
 * El producto usa HashRouter y PostHog lee `location.search`: si los parámetros van
 * después del '#', no los ve nadie y se pierde la atribución entera.
 */
function buildProductOnboardingUrl(tier) {
  const qs = new URLSearchParams({
    ...getAttribution(), // utm_* + fbclid del primer load de la landing
    vinc_src: "landing_oferta",
    vinc_tier: tier?.id || "",
  });
  const aid = getDistinctId();
  if (aid) qs.set("vinc_aid", aid); // puente de identidad landing ↔ producto
  return `${PRODUCT_ORIGIN}/?${qs.toString()}${ONBOARDING_HASH}`;
}

const OfferPage = () => {
  const { segment } = useParams();
  const navigate = useNavigate();
  const [pricingRevealRef, pricingRevealed] = useInViewReveal();

  // Validate segment early (but after all hooks are declared)
  const isValidSegment = SEGMENTS.includes(segment);
  const landing = isValidSegment ? landingsBySegment[segment] : null;
  const highlightedTierId = isValidSegment
    ? eventosFunnel.pricing.highlightedTierBySegment[segment] ||
      landing.highlightedTier ||
      "pro"
    : "pro";

  const highlightedTier = (() => {
    const t = eventosFunnel.pricing.tiers.find((x) => x.id === highlightedTierId);
    return { ...t };
  })();

  // Register segment as super property so every subsequent event carries it
  useEffect(() => {
    if (!isValidSegment) return;
    analyticRegister({ segment, landing_variant: segment });
  }, [segment, isValidSegment]);

  useEffect(() => {
    if (!isValidSegment) return;
    analyticPageview(`/q/eventos/r/${segment}`);
    analyticEvent("offer_viewed", { segment });
    pixelTrack("ViewContent", { content_category: segment });
  }, [segment, isValidSegment]);

  // Scroll-depth milestones: 25 / 50 / 75 / 100
  useEffect(() => {
    if (!isValidSegment) return;
    const fired = new Set();
    const thresholds = [25, 50, 75, 100];

    const onScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const pct = (scrolled / maxScroll) * 100;
      thresholds.forEach((t) => {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          analyticEvent("scroll_depth", { percent: t, segment });
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [segment, isValidSegment]);

  const handleCtaBuy = (tier) => {
    analyticEvent("cta_buy_clicked", {
      segment,
      tier: tier.id,
      tier_total_ars: tier.total ?? null,
      tier_tickets: tier.tickets ?? null,
      tier_price_per_ticket: tier.pricePerTicket ?? null,
      source: tier.source ?? "pricing_card",
    });
    const valueUsd = tier.total ? +(tier.total / 1400).toFixed(2) : null;
    const pixelParams = {
      source: tier.source ?? "pricing_card",
      tier: tier.id,
      segment,
      tier_total_ars: tier.total ?? null,
      value: valueUsd,
      currency: "USD",
    };
    // event_id compartido entre pixel + CAPI → Meta deduplica.
    const eventID = makeEventId("ic");
    pixelTrackWithEventId("InitiateCheckout", pixelParams, eventID);
    // CAPI server-side: si el pixel se bloqueó por adblocker, este igual llega.
    // Fire-and-forget; no bloqueamos al usuario.
    trackConversionViaCapi({
      event_name: "InitiateCheckout",
      event_id: eventID,
      currency: "USD",
      value: valueUsd,
      content_category: segment,
      tier: tier.id,
      campaign_slug: CAMPAIGN_SLUG_FOR_CAPI,
      // email/phone aún no los tenemos en este momento (todavía no llenó el modal)
    });
    // Smoke #2: en vez de abrir el modal de captura (puerta falsa del smoke #1),
    // mandamos a la persona al onboarding real de creación de evento.
    window.location.href = buildProductOnboardingUrl(tier);
  };

  // Early return after all hooks are declared
  if (!isValidSegment) {
    return (
      <div className={styles.notFound}>
        <h1>Página no encontrada</h1>
        <button onClick={() => navigate("/q/eventos")}>Empezar el quiz</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.pageContent}>
        {landing.modules.map((m, i) => {
          if (m.kind === "pricing") {
            return (
              <div key={i}>
                <div
                  ref={pricingRevealRef}
                  className={styles.revealWrapper}
                  data-revealed={pricingRevealed ? "true" : "false"}
                >
                  <PricingModule
                    highlightedTierId={highlightedTierId}
                    onTierClick={(tier) => handleCtaBuy(tier)}
                    segment={segment}
                  />
                </div>
              </div>
            );
          }
          // Attach sentinel ref after the first hero module
          return (
            <OfferModule
              key={i}
              module={m}
              onCtaBuy={handleCtaBuy}
              highlightedTier={highlightedTier}
              segment={segment}
            />
          );
        })}
      </div>

    </div>
  );
};

export default OfferPage;
