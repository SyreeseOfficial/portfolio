'use client';

import { useEffect } from 'react';

// Subpage reveal: anything starting below the fold fades up as it enters.
export default function Reveal() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const hidden = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal],[data-row]')).filter((el) => el.getBoundingClientRect().top > innerHeight * 0.9);
    hidden.forEach((el) => (el.style.opacity = '0'));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en, i) => {
          if (!en.isIntersecting) return;
          io.unobserve(en.target);
          const el = en.target as HTMLElement;
          el.animate([{ opacity: 0, translate: '0 16px' }, { opacity: 1, translate: '0 0' }], { duration: 500, delay: Math.min(i, 6) * 55, easing: 'ease-out', fill: 'backwards' });
          el.style.opacity = '';
        }),
      { threshold: 0.05 },
    );
    hidden.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      hidden.forEach((el) => (el.style.opacity = ''));
    };
  }, []);

  return null;
}
