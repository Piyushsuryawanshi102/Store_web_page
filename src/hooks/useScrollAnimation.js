// =============================================
// YASH SHOP — useScrollAnimation Hook
// Triggers CSS animations when elements enter viewport
// =============================================
import { useEffect, useRef } from 'react';

/**
 * @param {string} animationClass - CSS class to add when visible
 * @param {number} threshold      - IntersectionObserver threshold (0–1)
 */
export const useScrollAnimation = (animationClass = 'animate-fadeInUp', threshold = 0.15) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(animationClass);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animationClass, threshold]);

  return ref;
};
