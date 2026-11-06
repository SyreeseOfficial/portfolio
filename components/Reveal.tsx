'use client';

import { useEffect } from 'react';

// Subpage reveal: anything starting below the fold fades up as it enters.
export default function Reveal() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const hidden = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal],[data-row]')).filter((el) => el.getBoundingClientRect().top > innerHeight * 0.9);
    hidden.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
    });
    const show = (el: HTMLElement) => {
      el.style.opacity = '';
      el.style.transform = '';
    };
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en, i) => {
          if (!en.isIntersecting) return;
          io.unobserve(en.target);
          setTimeout(() => show(en.target as HTMLElement), Math.min(i, 6) * 55);
        }),
      { threshold: 0.05 },
    );
    hidden.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      hidden.forEach(show);
    };
  }, []);

  return null;
}
