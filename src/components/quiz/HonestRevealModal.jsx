import { useEffect, useRef, useState } from "react";
import styles from "./HonestRevealModal.module.css";
import { eventosFunnel } from "../../funnels/eventos/config";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Inject a ripple span into the clicked button */
const createRipple = (e) => {
  const button = e.currentTarget;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
  button.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
};

/**
 * Submit button state machine: idle | loading | success
 * Loading shows for at minimum 350ms before resolving.
 */
const MIN_LOADING_MS = 350;

const HonestRevealModal = ({ onClose, onSubmit }) => {
  const { reveal } = eventosFunnel;
  const [email, setEmail] = useState("");
  const [eventText, setEventText] = useState("");
  // "idle" | "loading" | "success"
  const [submitState, setSubmitState] = useState("idle");
  const [error, setError] = useState(null);
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !EMAIL_REGEX.test(email)) {
      setError("Necesitamos un mail válido");
      return;
    }
    setSubmitState("loading");
    setError(null);
    try {
      // Enforce minimum visible loading time
      await Promise.all([
        onSubmit({ email, eventText }),
        new Promise((res) => setTimeout(res, MIN_LOADING_MS)),
      ]);
      setSubmitState("success");
      // Navigation is handled by parent (onSubmit calls navigate)
    } catch {
      setError("Algo falló. ¿Probás otra vez?");
      setSubmitState("idle");
    }
  };

  const isSubmitting = submitState === "loading";
  const isSuccess = submitState === "success";

  const renderButtonContent = () => {
    if (isSuccess) {
      return (
        <>
          <span className={styles.successCheck} aria-hidden="true">✓</span>
          {reveal.submitLabel}
        </>
      );
    }
    if (isSubmitting) {
      return (
        <>
          <span className={styles.spinner} aria-hidden="true" />
          Enviando…
        </>
      );
    }
    return reveal.submitLabel;
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        <h2 className={styles.title}>{reveal.title}</h2>
        {reveal.paragraphs.map((p, i) => (
          <p key={i} className={styles.paragraph}>
            {p}
          </p>
        ))}
        <ul className={styles.benefits}>
          {reveal.benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        {reveal.launchLine && (
          <p className={styles.launchLine}>{reveal.launchLine}</p>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Floating-label email field */}
          <div className={styles.fieldWrapper}>
            <input
              id="email"
              ref={emailRef}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={reveal.emailPlaceholder}
              className={`${styles.input} ${error ? styles.inputError : ""} ph-no-capture`}
              autoComplete="email"
              aria-label={reveal.emailLabel}
            />
            <label className={styles.floatingLabel} htmlFor="email">
              {reveal.emailLabel}
            </label>
          </div>

          {/* Textarea with regular label (floating doesn't work well on textarea) */}
          <div>
            <label className={styles.label} htmlFor="eventText">
              {reveal.eventTextLabel}{" "}
              <span className={styles.optional}>({reveal.eventTextHint})</span>
            </label>
            <textarea
              id="eventText"
              rows={2}
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
              className={`${styles.textarea} ph-no-capture`}
              aria-label={reveal.eventTextLabel}
            />
          </div>

          {error && <div className={styles.error} role="alert">{error}</div>}

          <button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className={styles.submit}
            onClick={isSubmitting || isSuccess ? undefined : createRipple}
          >
            {renderButtonContent()}
          </button>
        </form>

        <p className={styles.footerNote}>{reveal.footerNote}</p>
      </div>
    </div>
  );
};

export default HonestRevealModal;
