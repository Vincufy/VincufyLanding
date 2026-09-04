import styles from "./PricingModule.module.css";
import { eventosFunnel } from "../../funnels/eventos/config";
import { analyticEvent } from "../../lib/posthog";
import useInViewTrack from "./useInViewTrack";

const formatArs = (n) =>
  new Intl.NumberFormat("es-AR", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(n);

/** Inject a ripple span into the clicked button */
const createRipple = (e) => {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
  `;
  button.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
};

const PricingModule = ({ highlightedTierId, onTierClick, segment }) => {
  const { headline, subheadline, tiers } = eventosFunnel.pricing;
  /**
   * Esta seccion NO reportaba que se la habia visto, y es la mas importante de la
   * pagina: sin esto no habia denominador para los clicks en Comprar. Se sabia cuanta
   * gente compraba, no cuanta llegaba a ver los precios, que son dos preguntas muy
   * distintas cuando el 56% no pasa del hero.
   */
  const trackRef = useInViewTrack({ section: "pricing", extra: { segment } });

  return (
    <section className={styles.container} id="planes" ref={trackRef}>
      {headline && <h2 className={styles.headline}>{headline}</h2>}
      {subheadline && <p className={styles.subheadline}>{subheadline}</p>}

      <div className={styles.grid}>
        {tiers.map((tier) => {
          const isHighlighted = tier.id === highlightedTierId;
          return (
            <div
              key={tier.id}
              className={`${styles.card} ${
                isHighlighted ? styles.cardHighlighted : ""
              }`}
            >
              <div className={`${styles.tierName} ${isHighlighted ? styles.tierNameHighlighted : ""}`}>
                {tier.name}
              </div>
              <div className={styles.ticketsLine}>
                {formatArs(tier.tickets)} entradas
              </div>
              <div className={styles.priceRow}>
                <span className={styles.priceCurrency}>ARS</span>
                <span className={styles.priceMain}>${formatArs(tier.pricePerTicket)}</span>
                <span className={styles.pricePer}>c/u</span>
              </div>
              {tier.discountPercent > 0 && (
                <div className={styles.discountBadge}>
                  {tier.discountPercent}% off
                </div>
              )}
              <div className={styles.totalLine}>
                Total: ARS {formatArs(tier.total)}
              </div>
              <button
                type="button"
                className={`${styles.cta} ${
                  isHighlighted ? styles.ctaHighlighted : ""
                }`}
                onClick={(e) => {
                  createRipple(e);
                  analyticEvent("comprar_clicked", {
                    tier_id: tier.id,
                    tier_name: tier.name,
                    tier_tickets: tier.tickets,
                    tier_price_per_ticket: tier.pricePerTicket,
                    tier_total_ars: tier.total,
                    tier_discount_percent: tier.discountPercent,
                    is_highlighted: isHighlighted,
                    segment,
                  });
                  onTierClick(tier);
                }}
              >
                Comprar
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingModule;
