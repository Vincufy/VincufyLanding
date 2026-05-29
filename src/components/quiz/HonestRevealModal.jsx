import { useEffect, useRef, useState } from "react";
import styles from "./HonestRevealModal.module.css";
import { eventosFunnel } from "../../funnels/eventos/config";

const HonestRevealModal = ({ tier, onClose, onSubmit }) => {
  const { reveal } = eventosFunnel;
  const [email, setEmail] = useState("");
  const [eventText, setEventText] = useState("");
  const [submitting, setSubmitting] = useState(false);
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
    if (!email || !email.includes("@")) {
      setError("Necesitamos un mail válido");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      await onSubmit({ email, eventText });
    } catch (err) {
      setError("Algo falló. ¿Probás otra vez?");
      setSubmitting(false);
    }
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
        <p className={styles.launchLine}>{reveal.launchLine}</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label} htmlFor="email">
            {reveal.emailLabel}
          </label>
          <input
            id="email"
            ref={emailRef}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={reveal.emailPlaceholder}
            className={`${styles.input} ph-no-capture`}
            autoComplete="email"
          />

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
          />

          {error && <div className={styles.error}>{error}</div>}

          <button
            type="submit"
            disabled={submitting}
            className={styles.submit}
          >
            {submitting ? "Enviando…" : reveal.submitLabel}
          </button>
        </form>

        <p className={styles.footerNote}>{reveal.footerNote}</p>
      </div>
    </div>
  );
};

export default HonestRevealModal;
