// =============================================
// YASH SHOP — useSmoothScroll Hook
// =============================================

/**
 * Smoothly scrolls to a section by ID.
 * Usage: const scrollTo = useSmoothScroll();
 *        scrollTo('shop');
 */
export const useSmoothScroll = () => {
  const scrollTo = (sectionId, offset = 80) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };
  return scrollTo;
};
