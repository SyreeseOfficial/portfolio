'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!matchMedia('(pointer:fine)').matches) return;
    const ring = ringRef.current!;
    const dot = dotRef.current!;
    let rx = -100,
      ry = -100,
      tx = -100,
      ty = -100,
      raf = 0;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      document.documentElement.dataset.cursor = '1';
      const zone = document.querySelector('[data-footer-zone]')?.getBoundingClientRect();
      const inFooter = zone && ty >= zone.top && ty <= zone.bottom;
      [ring, dot].forEach((n) => (inFooter ? n.style.setProperty('--cur', 'var(--accent-ink)') : n.style.removeProperty('--cur')));
      ring.style.opacity = '1';
      dot.style.opacity = '1';
      dot.style.transform = `translate(${tx}px,${ty}px) translate(-50%,-50%)`;
    };
    const over = (e: MouseEvent) => {
      const hot = (e.target as Element).closest?.('a,button,[data-bob-hit]');
      ring.style.width = ring.style.height = hot ? '56px' : '34px';
      ring.style.background = hot ? 'color-mix(in oklab, var(--cur,var(--accent)) 14%, transparent)' : 'transparent';
    };
    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.transform = `translate(${rx.toFixed(1)}px,${ry.toFixed(1)}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', over, { passive: true });
    loop();
    return () => {
      removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
