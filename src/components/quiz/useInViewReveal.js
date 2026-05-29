import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, revealed].
 * When the node enters the viewport (threshold 0.12, with a small bottom margin
 * so reveal starts slightly before fully visible), sets revealed = true.
 * If the element is already intersecting on mount, reveals immediately.
 * Respects prefers-reduced-motion: skips animation and sets revealed immediately.
 */
const useInViewReveal = () => {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Respect reduced-motion: skip the observer entirely, reveal at once.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setRevealed(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return [ref, revealed];
};

export default useInViewReveal;
