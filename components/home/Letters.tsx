'use client';

import { useEffect, useRef } from 'react';

export default function Letters({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const p = ref.current!;
    const chars = Array.from(p.querySelectorAll<HTMLElement>('[data-char]'));
    const n = chars.length;
    const update = () => {
      const top = p.getBoundingClientRect().top;
      const vh = innerHeight;
      const prog = Math.min(1, Math.max(0, (vh * 0.92 - top) / (vh * 0.5)));
      chars.forEach((s, i) => {
        const a = Math.min(1, Math.max(0, prog * (n + 14) - i) / 14);
        s.style.opacity = (0.08 + 0.92 * a).toFixed(3);
        s.style.filter = `blur(${((1 - a) * 8).toFixed(2)}px)`;
      });
    };
    update();
    addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    return () => {
      removeEventListener('scroll', update);
      removeEventListener('resize', update);
    };
  }, []);

  return (
    <p ref={ref} className="letters" aria-label={text}>
      {text.split(' ').map((word, w) => (
        <span key={w}>
          <span className="word">
            {[...word].map((c, i) => (
              <span key={i} data-char aria-hidden="true">
                {c}
              </span>
            ))}
          </span>{' '}
        </span>
      ))}
    </p>
  );
}
