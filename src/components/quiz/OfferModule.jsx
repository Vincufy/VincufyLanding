import styles from "./OfferModule.module.css";
import useInViewReveal from "./useInViewReveal";

const Hero = ({ data, onCtaBuy, highlightedTier }) => (
  <section className={styles.hero}>
    <h1 className={styles.heroTitle}>{data.title}</h1>
    <p className={styles.heroSubtitle}>{data.subtitle}</p>
    <div className={styles.heroCtas}>
      <button
        type="button"
        className={styles.ctaPrimary}
        onClick={() => onCtaBuy(highlightedTier)}
      >
        Registrarme y comprar
      </button>
      {data.ctaSecondary && (
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
    {data.microcopy && (
      <p className={styles.heroMicrocopy}>{data.microcopy}</p>
    )}
  </section>
);

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

const HowItWorks = ({ data, onCtaBuy, highlightedTier }) => (
  <section className={styles.section} id={data.anchor}>
    <h2 className={styles.h2}>{data.title}</h2>
    <ol className={styles.steps}>
      {data.steps.map((s) => (
        <li key={s.n} className={styles.step}>
          <div className={styles.stepNumber}>{s.n}</div>
          <div className={styles.stepContent}>
            <h3 className={styles.h3}>{s.title}</h3>
            <p className={styles.stepBody}>{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
    {data.cta && (
      <div className={styles.inlineCtaWrap}>
        <button
          type="button"
          className={styles.ctaPrimary}
          onClick={() => onCtaBuy(highlightedTier)}
        >
          Registrarme y comprar
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

const Offer = ({ data, onCtaBuy, highlightedTier }) => (
  <section className={styles.section}>
    <h2 className={styles.h2}>{data.title}</h2>
    <p className={styles.body}>{data.body}</p>
    <div className={styles.inlineCtaWrap}>
      <button
        type="button"
        className={styles.ctaPrimary}
        onClick={() => onCtaBuy(highlightedTier)}
      >
        Registrarme y comprar
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

const FinalClose = ({ data, onCtaBuy, highlightedTier }) => (
  <section className={styles.section}>
    <h2 className={styles.h2}>{data.title}</h2>
    <p className={styles.body}>{data.body}</p>
    {data.cta && (
      <div className={styles.inlineCtaWrap}>
        <button
          type="button"
          className={styles.ctaPrimary}
          onClick={() => onCtaBuy(highlightedTier)}
        >
          Registrarme y comprar
        </button>
      </div>
    )}
  </section>
);

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
