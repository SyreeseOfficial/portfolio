'use client';

import { useRef, type MouseEvent } from 'react';

export default function Portrait() {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  const tilt = (e: MouseEvent) => {
    const card = ref.current!;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      card.style.transform = `rotateY(${(px * 16).toFixed(2)}deg) rotateX(${(-py * 16).toFixed(2)}deg) scale(1.02)`;
    });
  };
  const enter = (e: MouseEvent) => {
    const card = ref.current!;
    card.style.transition = 'transform .12s ease-out, box-shadow .4s ease';
    card.style.boxShadow = '0 30px 60px -28px rgba(0,0,0,.45)';
    tilt(e);
  };
  const leave = () => {
    const card = ref.current!;
    cancelAnimationFrame(raf.current);
    card.style.transition = 'transform .6s cubic-bezier(.22,.61,.36,1), box-shadow .5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
    card.style.boxShadow = 'none';
  };

  return (
    <div data-parallax className="portrait-wrap">
      <div ref={ref} className="portrait" onMouseEnter={enter} onMouseMove={tilt} onMouseLeave={leave}>
        <img src="/uploads/pfp.webp" alt="Portrait" />
      </div>
    </div>
  );
}
