import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import OfferModule from "../components/quiz/OfferModule";
import PricingModule from "../components/quiz/PricingModule";
import HonestRevealModal from "../components/quiz/HonestRevealModal";
import useInViewReveal from "../components/quiz/useInViewReveal";
import { landingsBySegment } from "../content/landings";
import { eventosFunnel } from "../funnels/eventos/config";
import { SEGMENTS } from "../lib/segments";
import {
  analyticEvent,
  analyticIdentify,
  analyticPageview,
  analyticRegister,
  hashEmail,
} from "../lib/posthog";
import { submitLead } from "../lib/leadSink";
import { pixelTrack } from "../lib/metaPixel";
import styles from "./OfferPage.module.css";
import moduleStyles from "../components/quiz/OfferModule.module.css";

const OfferPage = () => {
  const { segment } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTier, setActiveTier] = useState(null);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [pricingRevealRef, pricingRevealed] = useInViewReveal();
  const heroSentinelRef = useRef(null);
  const stickyShownRef = useRef(false);

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

  const answers = location.state?.answers;

  // Sentinel tier for custom volume link
  const customVolumeTier = {
    id: "custom",
    name: "Mayor volumen",
    source: "custom_volume_link",
    tickets: null,
    total: null,
    discountPercent: 0,
  };

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

  // IntersectionObserver: show sticky CTA when hero scrolls out of view
  useEffect(() => {
    if (!heroSentinelRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const nowVisible = !entry.isIntersecting;
        setStickyVisible(nowVisible);
        if (nowVisible && !stickyShownRef.current) {
          stickyShownRef.current = true;
          analyticEvent("sticky_mobile_cta_shown", { segment });
        }
      },
      { threshold: 0 }
    );
    observer.observe(heroSentinelRef.current);
    return () => observer.disconnect();
  }, [isValidSegment, segment]);

  const handleCtaBuy = (tier) => {
    analyticEvent("cta_buy_clicked", {
      segment,
      tier: tier.id,
      tier_total_ars: tier.total ?? null,
      tier_tickets: tier.tickets ?? null,
      tier_price_per_ticket: tier.pricePerTicket ?? null,
      source: tier.source ?? "pricing_card",
    });
    setActiveTier(tier);
    analyticEvent("reveal_shown", {
      segment,
      tier: tier.id,
    });
  };

  const handleCloseModal = () => setActiveTier(null);

  const handleSubmitLead = async ({ email, phone, eventText }) => {
    if (!activeTier) return;
    analyticEvent("lead_email_submitted", {
      segment,
      tier: activeTier.id,
      has_phone: !!phone,
    });

    // Fire-and-forget: submitLead runs in background, never blocks navigation.
    // PostHog is the real sink for round 1; backend is optional.
    const submitPromise = submitLead({
      email,
      phone,
      segment,
      tier: activeTier.id,
      tier_total_ars: activeTier.total ?? null,
      tier_tickets: activeTier.tickets ?? null,
      event_text: eventText,
      funnel_slug: "eventos",
    });

    const distinctId = await hashEmail(email);
    analyticIdentify(distinctId, {
      email,
      phone,
      email_domain: email.split("@")[1],
      assigned_segment: segment,
      selected_tier: activeTier.id,
      has_event_text: !!eventText,
      has_phone: !!phone,
      first_touch_source: "landing_quiz_eventos",
      quiz_answers: answers || null,
    });

    analyticEvent("lead_captured", {
      segment,
      tier: activeTier.id,
      email_domain: email.split("@")[1],
      has_event_text: !!eventText,
      has_phone: !!phone,
      backend_delivered: null,
    });

    pixelTrack("Lead", {
      content_category: segment,
      value: activeTier.total ?? null,
      currency: "ARS",
    });

    submitPromise.catch((err) => {
      if (!import.meta.env.PROD) {
        console.warn("[OfferPage] submitLead failed:", err);
      }
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
          if (m.kind === "hero" && !heroSentinelRef._attached) {
            heroSentinelRef._attached = true;
            return (
              <div key={i}>
                <OfferModule
                  module={m}
                  onCtaBuy={handleCtaBuy}
                  highlightedTier={highlightedTier}
                  segment={segment}
                />
                <div ref={heroSentinelRef} aria-hidden="true" style={{ height: 0 }} />
              </div>
            );
          }
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

      {/* Sticky mobile CTA — shows after hero scrolls out of view, mobile only */}
      <div
        className={moduleStyles.stickyMobileCta}
        data-visible={stickyVisible ? "true" : "false"}
        aria-hidden={!stickyVisible}
      >
        <div className={moduleStyles.stickyMobilePrice}>
          desde
          <span className={moduleStyles.stickyMobilePriceNum}>ARS 6.400</span>
        </div>
        <button
          type="button"
          className={moduleStyles.stickyMobileBtn}
          onClick={() => {
            analyticEvent("cta_clicked", {
              cta_id: "sticky-mobile",
              action: "open_modal",
              segment,
              tier_id: customVolumeTier.id,
              tier_name: customVolumeTier.name,
              source: customVolumeTier.source,
            });
            handleCtaBuy(customVolumeTier);
          }}
        >
          Sumarme
        </button>
      </div>

      {activeTier && (
        <HonestRevealModal
          onClose={handleCloseModal}
          onSubmit={handleSubmitLead}
          source="comprar_button"
          tierId={activeTier.id}
        />
      )}
    </div>
  );
};

export default OfferPage;
