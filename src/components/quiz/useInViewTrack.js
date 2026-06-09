import { useEffect, useRef } from "react";
import { analyticEvent } from "../../lib/posthog";

/**
 * Fires analyticEvent("section_viewed", { section }) exactly ONCE per page load
 * when the referenced element first intersects the viewport.
 *
 * @param {object} options
 * @param {string} options.section - stable section name (used as PostHog property)
 * @param {number} [options.threshold=0.12] - IntersectionObserver threshold
 * @returns {React.RefObject} ref to attach to the section element
 */
const useInViewTrack = ({ section, threshold = 0.12 }) => {
  const ref = useRef(null);
  const firedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || firedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !firedRef.current) {
          firedRef.current = true;
          analyticEvent("section_viewed", { section });
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [section, threshold]);

  return ref;
};

export default useInViewTrack;
