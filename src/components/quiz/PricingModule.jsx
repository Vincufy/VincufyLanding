import styles from "./PricingModule.module.css";
import { eventosFunnel } from "../../funnels/eventos/config";

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

const PricingModule = ({ highlightedTierId, onTierClick }) => {
  const { headline, subheadline, tiers } = eventosFunnel.pricing;

  return (
    <section className={styles.container}>
      <h2 className={styles.headline}>{headline}</h2>
      <p className={styles.subheadline}>{subheadline}</p>

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
              {isHighlighted && (
                <div className={styles.badge}>RECOMENDADO PARA VOS</div>
              )}
              <div className={styles.tierName}>{tier.name}</div>
              <div className={styles.ticketsLine}>
                {formatArs(tier.tickets)} entradas
              </div>
              <div className={styles.pricePerTicket}>
                ARS {formatArs(tier.pricePerTicket)} c/u
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
                  onTierClick(tier);
                }}
              >
                Registrarme y comprar
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingModule;
