import { useEffect, useRef, useState } from "react";

/**
 * useReveal - attaches an IntersectionObserver to an element and flips
 * `visible` to true the first time it scrolls into view. Pair the returned
 * ref with the `.reveal` CSS class (see App.css) to get a fade/slide-in
 * animation, e.g.:
 *
 *   const [ref, visible] = useReveal();
 *   <div ref={ref} className={`reveal ${visible ? "reveal-visible" : ""}`}>
 */
export function useReveal(options = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px -80px 0px" } = options;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect users who prefer reduced motion — just show content.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible];
}
