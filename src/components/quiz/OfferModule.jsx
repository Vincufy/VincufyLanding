import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./OfferModule.module.css";
import useInViewReveal from "./useInViewReveal";

const scrollToPricing = () => {
  const el = document.getElementById("planes");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ── Existing renderers ── */

const Hero = ({ data }) => {
  const showPrimary = !!data.ctaPrimary;
  const showSecondary = !!data.ctaSecondary;
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>{data.title}</h1>
      <p className={styles.heroSubtitle}>{data.subtitle}</p>
      {(showPrimary || showSecondary) && (
        <div className={styles.heroCtas}>
          {showPrimary && (
            <button
              type="button"
              className={styles.ctaPrimary}
              onClick={scrollToPricing}
            >
              Crear evento
            </button>
          )}
          {showSecondary && (
            <button
              type="button"
              className={styles.ctaSecondary}
              onClick={() => {
                const el = document.getElementById(data.ctaSecondary.target);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {data.ctaSecondary.label}
            </button>
          )}
        </div>
      )}
      {data.microcopy && (
        <p className={styles.heroMicrocopy}>{data.microcopy}</p>
      )}
    </section>
  );
};

const SocialProof = ({ data }) => (
  <div className={styles.socialProof}>{data.text}</div>
);

const Problem = ({ data }) => (
  <section className={styles.section}>
    <h2 className={styles.h2}>{data.title}</h2>
    {data.body && <p className={styles.body}>{data.body}</p>}
    {data.bullets && (
      <ul className={styles.bullets}>
        {data.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    )}
  </section>
);

const Identification = Problem;
const Presentation = ({ data }) => (
  <section className={styles.section}>
    <h2 className={styles.h2}>{data.title}</h2>
    <p className={styles.body}>{data.body}</p>
    {data.tagline && <p className={styles.tagline}>{data.tagline}</p>}
  </section>
);

const BeforeAfter = ({ data }) => (
  <section className={styles.section}>
    <div className={styles.beforeAfter}>
      <div className={styles.column}>
        <h3 className={styles.h3}>{data.before.title}</h3>
        <ul className={styles.bullets}>
          {data.before.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </div>
      <div className={`${styles.column} ${styles.columnAfter}`}>
        <h3 className={styles.h3}>{data.after.title}</h3>
        <ul className={styles.bullets}>
          {data.after.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const WhatIs = Presentation;

const Includes = ({ data }) => (
  <section className={styles.section}>
    <h2 className={styles.h2}>{data.title}</h2>
    <ul className={styles.bullets}>
      {data.items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  </section>
);

const HowItWorks = ({ data }) => (
  <section className={styles.section} id={data.anchor}>
    <h2 className={styles.h2}>{data.title}</h2>
    <ol className={styles.steps}>
      {data.steps.map((s) => (
        <li key={s.n} className={styles.step}>
          <div className={styles.stepNumber}>{s.n}</div>
          <div className={styles.stepContent}>
            <h3 className={styles.h3}>{s.title}</h3>
            {s.body && <p className={styles.stepBody}>{s.body}</p>}
          </div>
        </li>
      ))}
    </ol>
    {data.cta && (
      <div className={styles.inlineCtaWrap}>
        <button
          type="button"
          className={styles.ctaPrimary}
          onClick={scrollToPricing}
        >
          Crear evento
        </button>
      </div>
    )}
  </section>
);

const BenefitsOrganizer = Includes;
const BenefitsAudience = Includes;

const Comparison = ({ data }) => (
  <section className={styles.section}>
    <h2 className={styles.h2}>{data.title}</h2>
    <p className={styles.body}>{data.body}</p>
    {data.tagline && <p className={styles.tagline}>{data.tagline}</p>}
  </section>
);

const UseCases = Includes;

const Offer = ({ data }) => (
  <section className={styles.section}>
    <h2 className={styles.h2}>{data.title}</h2>
    <p className={styles.body}>{data.body}</p>
    <div className={styles.inlineCtaWrap}>
      <button
        type="button"
        className={styles.ctaPrimary}
        onClick={scrollToPricing}
      >
        Crear evento
      </button>
    </div>
    {data.microcopy && (
      <p className={styles.heroMicrocopy}>{data.microcopy}</p>
    )}
  </section>
);

const RiskReduction = Presentation;

const FAQ = ({ data }) => (
  <section className={styles.section}>
    <h2 className={styles.h2}>Preguntas frecuentes</h2>
    <div className={styles.faqList}>
      {data.items.map((it, i) => (
        <details key={i} className={styles.faqItem}>
          <summary className={styles.faqQ}>{it.q}</summary>
          <p className={styles.faqA}>{it.a}</p>
        </details>
      ))}
    </div>
  </section>
);

const FinalClose = ({ data }) => (
  <section className={styles.section}>
    <h2 className={styles.h2}>{data.title}</h2>
    <p className={styles.body}>{data.body}</p>
    {data.cta && (
      <div className={styles.inlineCtaWrap}>
        <button
          type="button"
          className={styles.ctaPrimary}
          onClick={scrollToPricing}
        >
          Crear evento
        </button>
      </div>
    )}
  </section>
);

/* ── NEW renderers ── */

const HeroMockup = () => (
  <div
    className={`${styles.placeholder} ${styles.heroMockup}`}
    data-label="PLACEHOLDER — agregar video o imagen de producto"
    aria-hidden="true"
  >
    PLACEHOLDER — video/imagen de producto
    <span>1920×1080 · 16:9</span>
  </div>
);

const HeroImage = ({ data = {} }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const isSquare = data.aspect === "square";
  const wrapClass = `${styles.heroImageWrap} ${isSquare ? styles.heroImageWrapSquare : ""}`;
  const placeholderClass = `${styles.placeholder} ${isSquare ? styles.heroImagePlaceholderSquare : styles.heroImagePlaceholder}`;
  const placeholderLabel = isSquare
    ? "PLACEHOLDER — imagen cuadrada"
    : "PLACEHOLDER — imagen contextual del evento";
  const dimensionHint = isSquare ? "1200×1200 · 1:1 cuadrada" : "2100×900 · 21:9 cinematic";

  if (data.src && !imgFailed) {
    return (
      <div className={wrapClass}>
        <img
          src={data.src}
          alt={data.alt || ""}
          className={styles.heroImageImg}
          onError={() => setImgFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className={wrapClass}>
      <div className={placeholderClass} data-label={placeholderLabel} aria-hidden="true">
        {placeholderLabel}
        <span>{dimensionHint}</span>
      </div>
    </div>
  );
};

const WhatsAppHelp = ({ data }) => {
  const [open, setOpen] = useState(false);
  const phone = data.phone || "+54 9 11 0000 0000";
  const waNumber = phone.replace(/[^0-9]/g, "");
  const text = data.text || "¿Tenés alguna duda?";
  const cta = data.cta || "Escribinos por WhatsApp";

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section className={styles.whatsappHelp}>
      <p className={styles.whatsappHelpTitle}>{text}</p>
      <button
        type="button"
        className={styles.whatsappHelpBtn}
        onClick={() => setOpen(true)}
      >
        <span className={styles.whatsappHelpBtnIcon} aria-hidden="true">💬</span>
        {cta}
      </button>

      {open && createPortal(
        <div
          className={styles.whatsappOverlay}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className={styles.whatsappClose}
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
          >
            ×
          </button>
          <div
            className={styles.whatsappOverlayContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.whatsappUnicornWrap}>
              <div className={styles.whatsappUnicornHalo} aria-hidden="true" />
              <div className={styles.whatsappUnicorn} aria-hidden="true">🦄</div>
            </div>
            <p className={styles.whatsappCallout}>Lucas por aquí</p>
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappPhone}
            >
              {phone}
            </a>
            <p className={styles.whatsappHint}>Tocá para abrir WhatsApp</p>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

const HighlightBox = ({ data }) => (
  <section className={styles.highlightBox}>
    <div className={styles.highlightBoxInner}>
      <p className={styles.highlightBoxText}>{data.text}</p>
    </div>
  </section>
);

const TrustedLogo = ({ logo, hidden }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const showImg = logo.src && !imgFailed;
  return (
    <div className={styles.trustedCard} aria-hidden={hidden}>
      <div className={styles.trustedLogoBox}>
        {showImg ? (
          <img
            src={logo.src}
            alt={logo.name}
            className={styles.trustedLogoImg}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <span className={styles.trustedLogoPlaceholder}>LOGO</span>
        )}
      </div>
      <p className={styles.trustedLogoName}>{logo.name}</p>
    </div>
  );
};

const TrustedBy = ({ data }) => {
  const logos = data.logos || [];
  // Duplicamos la lista para el loop infinito visual del marquee
  const loop = [...logos, ...logos];
  const stats = data.stats || [];

  return (
    <section className={styles.trustedBy}>
      {data.title && <h2 className={styles.trustedByTitle}>{data.title}</h2>}

      <div className={styles.trustedMarquee} aria-label="Empresas que confían en Vincufy">
        <div className={styles.trustedTrack}>
          {loop.map((logo, i) => (
            <TrustedLogo key={i} logo={logo} hidden={i >= logos.length} />
          ))}
        </div>
      </div>

      {stats.length > 0 && (
        <div className={styles.trustedStats}>
          {stats.map((s, i) => (
            <div key={i} className={styles.trustedStat}>
              <p className={styles.trustedStatNumber}>{s.number}</p>
              <p className={styles.trustedStatLabel}>{s.label}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

const ProblemStat = ({ data }) => (
  <section className={styles.problemStat}>
    <p className={styles.statNumber}>{data.stat}</p>
    <p className={styles.statText}>{data.text}</p>
    {data.estimacion && (
      <p className={styles.statEstimacion}>* estimación interna · no auditada</p>
    )}
  </section>
);

const FounderVoice = ({ data }) => (
  <section className={styles.founderVoice}>
    <div className={styles.founderInner}>
      <div className={styles.founderAvatarWrap}>
        <div
          className={`${styles.placeholder} ${styles.founderAvatar}`}
          data-label="foto founder"
          aria-hidden="true"
        >
          foto
          <span>400×400</span>
        </div>
        <p className={styles.founderName}>{data.name}</p>
      </div>
      <div>
        <span className={styles.founderQuoteIcon}>"</span>
        <p className={styles.founderText}>{data.text}</p>
      </div>
    </div>
  </section>
);

const ProblemFamiliar = ({ data }) => (
  <section className={styles.problemFamiliar}>
    <h2 className={styles.problemFamiliarTitle}>{data.title}</h2>
    <div className={styles.problemCards}>
      {data.bullets.map((b, i) => {
        const emojis = Array.isArray(b.emoji) ? b.emoji : [b.emoji];
        const isMulti = emojis.length > 1;
        return (
          <div key={i} className={styles.problemCard}>
            <div
              className={`${styles.problemCardEmoji} ${isMulti ? styles.problemCardEmojiMulti : ""}`}
              aria-hidden="true"
            >
              {emojis.map((e, j) => (
                <span key={j}>{e}</span>
              ))}
            </div>
            <p className={styles.problemCardText}>{b.text}</p>
          </div>
        );
      })}
    </div>
  </section>
);

const TaglineCta = ({ data }) => {
  const showPrimary = !!data.ctaPrimary;
  const showSecondary = !!data.ctaSecondary;
  return (
    <section className={styles.taglineCta}>
      {data.text && <p className={styles.taglineText}>{data.text}</p>}
      {(showPrimary || showSecondary) && (
        <div className={styles.taglineCtas}>
          {showPrimary && (
            <button
              type="button"
              className={styles.ctaPrimary}
              onClick={scrollToPricing}
            >
              Crear evento
            </button>
          )}
          {showSecondary && (
            <button
              type="button"
              className={styles.ctaSecondary}
              onClick={() => {
                const el = document.getElementById(data.ctaSecondary.target);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {data.ctaSecondary.label}
            </button>
          )}
        </div>
      )}
    </section>
  );
};

const BeforeAfterArrow = ({ data }) => (
  <section className={styles.beforeAfterArrow}>
    {data.title && (
      <h2 className={styles.beforeAfterTitle}>{data.title}</h2>
    )}
    <div className={styles.baaGrid}>
      <div className={styles.baaCol}>
        <p className={styles.baaColTitle}>{data.before.title}</p>
        <ul className={styles.baaBullets}>
          {data.before.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </div>
      <div className={styles.baaArrow} aria-hidden="true">➔</div>
      <div className={`${styles.baaCol} ${styles.baaColAfter}`}>
        <p className={`${styles.baaColTitle} ${styles.baaColTitleAfter}`}>{data.after.title}</p>
        <ul className={styles.baaBullets}>
          {data.after.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const IncludesChecklist = ({ data }) => (
  <section className={styles.includesChecklist}>
    {data.title && (
      <h2 className={styles.includesChecklistTitle}>{data.title}</h2>
    )}
    <div className={styles.checklistItems}>
      {data.items.map((item, i) => (
        <div key={i}>
          {item.isBonus && (
            <p className={styles.bonusEyebrow}>🎁 BONO</p>
          )}
          <div
            className={`${styles.checklistRow}${item.isBonus ? ` ${styles.checklistRowBonus}` : ""}`}
          >
            <span className={styles.checklistIcon}>{item.emoji}</span>
            <div className={styles.checklistRowContent}>
              <p className={styles.checklistFeatureName}>{item.name}</p>
              <p className={styles.checklistFeatureDesc}>{item.desc}</p>
            </div>
            <div className={styles.checkmarkIcon} aria-hidden="true">✓</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const GalleryCarousel = ({ data }) => (
  <section className={styles.galleryCarousel}>
    <div className={styles.galleryCarouselInner}>
      <h2 className={styles.galleryCarouselTitle}>{data.title}</h2>
    </div>
    <div className={styles.galleryTrackWrap}>
      <div className={styles.galleryTrack} role="region" aria-label="Galería de pantallas">
        {data.cards.map((card, i) => (
          <div key={i} className={styles.galleryCard}>
            <div
              className={`${styles.placeholder} ${styles.galleryCardPlaceholder}`}
              data-label={`PLACEHOLDER — ${card.caption}`}
              aria-hidden="true"
            >
              PLACEHOLDER
              <span>{card.dimensions || "390×844 · 9:16"}</span>
            </div>
            <p className={styles.galleryCardCaption}>{card.caption}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BenefitsGridTwoCol = ({ data }) => (
  <section className={styles.benefitsGrid}>
    <h2 className={styles.benefitsGridTitle}>{data.title}</h2>
    <div className={styles.benefitsGridCols}>
      <div className={styles.benefitsCol}>
        <p className={styles.benefitsColTitle}>{data.colOrganizer.title}</p>
        <ul className={styles.benefitsList}>
          {data.colOrganizer.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
      <div className={styles.benefitsCol}>
        <p className={styles.benefitsColTitle}>{data.colAudience.title}</p>
        <ul className={styles.benefitsList}>
          {data.colAudience.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const TestimonialsCarousel = ({ data }) => (
  <section className={styles.testimonialsCarousel}>
    <div className={styles.testimonialsCarouselInner}>
      <h2 className={styles.testimonialsCarouselTitle}>{data.title}</h2>
    </div>
    <div className={styles.testimonialsTrackWrap}>
      <div className={styles.testimonialsTrack} role="region" aria-label="Testimonios">
        {data.items.map((t, i) => (
          <div key={i} className={styles.testimonialCard}>
            {t.placeholder && (
              <span className={styles.exampleBadge} aria-label="Ejemplo ilustrativo">Ejemplo</span>
            )}
            <p className={styles.testimonialStars}>★★★★★</p>
            <p className={styles.testimonialQuote}>"{t.quote}"</p>
            <div className={styles.testimonialFooter}>
              <div
                className={`${styles.placeholder} ${styles.testimonialAvatar}`}
                data-label="foto"
                aria-hidden="true"
              >
                foto
              </div>
              <div className={styles.testimonialMeta}>
                <span className={styles.testimonialName}>{t.name}</span>
                <span className={styles.testimonialRole}>{t.role}</span>
                <span className={styles.testimonialCity}>{t.city}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const computeCountdownRemaining = (targetDate) => {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
};

const UrgencyCountdown = ({ data }) => {
  const [remaining, setRemaining] = useState(() => computeCountdownRemaining(data.targetDate));

  useEffect(() => {
    const targetDate = data.targetDate;
    const id = setInterval(() => setRemaining(computeCountdownRemaining(targetDate)), 1000);
    return () => clearInterval(id);
  }, [data.targetDate]);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section className={styles.urgencyCountdown}>
      <p className={styles.countdownTitle}>{data.label || "Cierre de la lista de fundadores en:"}</p>
      <div className={styles.countdownGrid}>
        {[
          { value: pad(remaining.days), label: "días" },
          { value: pad(remaining.hours), label: "horas" },
          { value: pad(remaining.minutes), label: "min" },
          { value: pad(remaining.seconds), label: "seg" },
        ].map((cell) => (
          <div key={cell.label} className={styles.countdownCell}>
            <span className={styles.countdownDigits}>{cell.value}</span>
            <span className={styles.countdownLabel}>{cell.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const MoneyBackGuarantee = ({ data }) => (
  <section className={styles.moneyBack}>
    <div className={styles.moneyBackCard}>
      <span className={styles.moneyBackIcon} aria-hidden="true">🔒</span>
      <h2 className={styles.moneyBackHeadline}>{data.headline || "Garantía 30 días"}</h2>
      <p className={styles.moneyBackText}>{data.text}</p>
    </div>
  </section>
);

const FinalCtaCard = ({ data }) => {
  const [waOpen, setWaOpen] = useState(false);
  const wa = data.ctaWhatsapp;
  const phone = wa?.phone || "";
  const waNumber = phone.replace(/[^0-9]/g, "");

  useEffect(() => {
    if (!waOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setWaOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [waOpen]);

  return (
    <section className={styles.finalCtaCard}>
      <div className={styles.finalCtaCardInner}>
        <h2 className={styles.finalCtaHeadline}>{data.headline}</h2>
        <p className={styles.finalCtaSubline}>{data.subline}</p>
        {wa ? (
          <button
            type="button"
            className={styles.whatsappHelpBtn}
            onClick={() => setWaOpen(true)}
          >
            <span className={styles.whatsappHelpBtnIcon} aria-hidden="true">💬</span>
            {wa.label || "Escribinos por WhatsApp"}
          </button>
        ) : (
          <button
            type="button"
            className={styles.ctaPrimary}
            onClick={scrollToPricing}
          >
            Crear evento
          </button>
        )}
      </div>

      {wa && waOpen && createPortal(
        <div
          className={styles.whatsappOverlay}
          onClick={() => setWaOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className={styles.whatsappClose}
            onClick={() => setWaOpen(false)}
            aria-label="Cerrar"
          >
            ×
          </button>
          <div
            className={styles.whatsappOverlayContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.whatsappUnicornWrap}>
              <div className={styles.whatsappUnicornHalo} aria-hidden="true" />
              <div className={styles.whatsappUnicorn} aria-hidden="true">🦄</div>
            </div>
            <p className={styles.whatsappCallout}>Lucas por aquí</p>
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappPhone}
            >
              {phone}
            </a>
            <p className={styles.whatsappHint}>Tocá para abrir WhatsApp</p>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

/* ── KIND_MAP ── */
const KIND_MAP = {
  social_proof: SocialProof,
  hero: Hero,
  problem: Problem,
  identification: Identification,
  presentation: Presentation,
  before_after: BeforeAfter,
  what_is: WhatIs,
  includes: Includes,
  how_it_works: HowItWorks,
  benefits_organizer: BenefitsOrganizer,
  benefits_audience: BenefitsAudience,
  comparison: Comparison,
  use_cases: UseCases,
  offer: Offer,
  risk_reduction: RiskReduction,
  faq: FAQ,
  final_close: FinalClose,
  // New kinds
  hero_mockup: HeroMockup,
  hero_image: HeroImage,
  problem_stat: ProblemStat,
  founder_voice: FounderVoice,
  problem_familiar: ProblemFamiliar,
  before_after_arrow: BeforeAfterArrow,
  includes_checklist: IncludesChecklist,
  gallery_carousel: GalleryCarousel,
  benefits_grid_two_col: BenefitsGridTwoCol,
  testimonials_carousel: TestimonialsCarousel,
  urgency_countdown: UrgencyCountdown,
  money_back_guarantee: MoneyBackGuarantee,
  final_cta_card: FinalCtaCard,
  tagline_cta: TaglineCta,
  highlight_box: HighlightBox,
  trusted_by: TrustedBy,
  whatsapp_help: WhatsAppHelp,
};

const OfferModule = ({ module: m, onCtaBuy, highlightedTier }) => {
  const Component = KIND_MAP[m.kind];
  const [revealRef, revealed] = useInViewReveal();

  if (!Component) return null;
  return (
    <div
      ref={revealRef}
      className={styles.reveal}
      data-revealed={revealed ? "true" : "false"}
    >
      <Component data={m} onCtaBuy={onCtaBuy} highlightedTier={highlightedTier} />
    </div>
  );
};

export default OfferModule;
