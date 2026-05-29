import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import OfferModule from "../components/quiz/OfferModule";
import PricingModule from "../components/quiz/PricingModule";
import HonestRevealModal from "../components/quiz/HonestRevealModal";
import { landingsBySegment } from "../content/landings";
import { eventosFunnel } from "../funnels/eventos/config";
import { SEGMENTS } from "../lib/segments";
import {
  analyticEvent,
  analyticIdentify,
  analyticPageview,
  hashEmail,
} from "../lib/posthog";
import { submitLead } from "../lib/leadSink";
import { pixelTrack } from "../lib/metaPixel";
import styles from "./OfferPage.module.css";

const formatArs = (n) =>
  new Intl.NumberFormat("es-AR", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(n);

const OfferPage = () => {
  const { segment } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTier, setActiveTier] = useState(null);

  // Validate segment early (but after all hooks are declared)
  const isValidSegment = SEGMENTS.includes(segment);
  const landing = isValidSegment ? landingsBySegment[segment] : null;
  const highlightedTierId = isValidSegment
    ? eventosFunnel.pricing.highlightedTierBySegment[segment] ||
      landing.highlightedTier ||
      "pro"
    : "pro";

  const highlightedTier = useMemo(() => {
    const t = eventosFunnel.pricing.tiers.find((x) => x.id === highlightedTierId);
    return {
      ...t,
      priceLabel: `ARS ${formatArs(t.priceArs)}/mes`,
    };
  }, [highlightedTierId]);

  const answers = location.state?.answers;

  useEffect(() => {
    if (!isValidSegment) return;
    analyticPageview(`/q/eventos/r/${segment}`);
    analyticEvent("offer_viewed", { segment });
    pixelTrack("ViewContent", { content_category: segment });
  }, [segment, isValidSegment]);

  const handleCtaBuy = (tier) => {
    analyticEvent("cta_buy_clicked", {
      segment,
      tier: tier.id,
      tier_price_ars: tier.priceArs,
    });
    setActiveTier(tier);
    analyticEvent("reveal_shown", {
      segment,
      tier: tier.id,
    });
  };

  const handleCloseModal = () => setActiveTier(null);

  const handleSubmitLead = async ({ email, eventText }) => {
    if (!activeTier) return;
    analyticEvent("lead_email_submitted", {
      segment,
      tier: activeTier.id,
    });

    const result = await submitLead({
      email,
      segment,
      tier: activeTier.id,
      tier_price_ars: activeTier.priceArs,
      event_text: eventText,
      funnel_slug: "eventos",
    });

    const distinctId = await hashEmail(email);
    analyticIdentify(distinctId, {
      email,
      email_domain: email.split("@")[1],
      assigned_segment: segment,
      selected_tier: activeTier.id,
      has_event_text: !!eventText,
      first_touch_source: "landing_quiz_eventos",
      quiz_answers: answers || null,
    });

    analyticEvent("lead_captured", {
      segment,
      tier: activeTier.id,
      email_domain: email.split("@")[1],
      has_event_text: !!eventText,
      backend_delivered: result.delivered,
    });

    pixelTrack("Lead", {
      content_category: segment,
      value: activeTier.priceArs,
      currency: "ARS",
    });

    navigate("/q/eventos/gracias");
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

  // Get the tier object that a module's cta_buy should use
  const heroTierWithLabel = highlightedTier;

  return (
    <div className={styles.container}>
      {landing.modules.map((m, i) => {
        if (m.kind === "pricing") {
          return (
            <PricingModule
              key={i}
              highlightedTierId={highlightedTierId}
              onTierClick={(tier) =>
                handleCtaBuy({
                  ...tier,
                  priceLabel: `ARS ${formatArs(tier.priceArs)}/mes`,
                })
              }
            />
          );
        }
        return (
          <OfferModule
            key={i}
            module={m}
            onCtaBuy={handleCtaBuy}
            highlightedTier={heroTierWithLabel}
          />
        );
      })}

      {activeTier && (
        <HonestRevealModal
          tier={activeTier}
          onClose={handleCloseModal}
          onSubmit={handleSubmitLead}
        />
      )}
    </div>
  );
};

export default OfferPage;
