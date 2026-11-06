'use client';

import { useEffect, useRef, type MouseEvent } from 'react';

export default function PlumbBob() {
  const svgRef = useRef<SVGSVGElement>(null);
  const bobRef = useRef<SVGGElement>(null);
  const spin = useRef(0);

  useEffect(() => {
    const svg = svgRef.current!;
    const bob = bobRef.current!;
    let th = 0,
      target = 0,
      lastX: number | null = null,
      last = performance.now(),
      hasMouse = false,
      raf = 0;
    const t0 = last;

    const move = (e: globalThis.MouseEvent) => {
      const r = svg.getBoundingClientRect();
      target = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width * 0.5)) / Math.max(r.width, 300))) * 28;
      if (lastX !== null) spin.current += Math.max(-80, Math.min(80, e.clientX - lastX)) * 1.2;
      lastX = e.clientX;
      hasMouse = true;
    };
    const leave = () => {
      hasMouse = false;
      target = 0;
      lastX = null;
    };
    const step = (now: number) => {
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;
      const idle = hasMouse ? 0 : Math.sin(((now - t0) / 1000) * 1.85) * 6;
      const a = -34 * (th - target - idle) - 2.4 * spin.current;
      spin.current += a * dt;
      th = Math.max(-60, Math.min(60, th + spin.current * dt));
      bob.style.transform = `rotate(${th.toFixed(2)}deg)`;
      raf = requestAnimationFrame(step);
    };
    addEventListener('mousemove', move, { passive: true });
    document.documentElement.addEventListener('mouseleave', leave);
    raf = requestAnimationFrame(step);
    return () => {
      removeEventListener('mousemove', move);
      document.documentElement.removeEventListener('mouseleave', leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  const swing = (e: MouseEvent) => {
    const r = svgRef.current!.getBoundingClientRect();
    spin.current = (e.clientX >= r.left + r.width * 0.5 ? -1 : 1) * 320;
  };

  return (
    <svg ref={svgRef} className="plumb" viewBox="0 0 420 340" role="img" aria-label="Illustration of an unfinished stud wall with a hanging plumb bob">
      <rect x="18" y="26" width="384" height="288" rx="18" fill="var(--card)" />
      <rect x="52" y="60" width="16" height="220" rx="4" fill="var(--line)" />
      <rect x="126" y="60" width="16" height="220" rx="4" fill="var(--line)" />
      <rect x="278" y="60" width="16" height="220" rx="4" fill="var(--line)" />
      <rect x="352" y="60" width="16" height="220" rx="4" fill="var(--line)" />
      <rect x="52" y="60" width="316" height="14" rx="4" fill="var(--line)" />
      <rect x="52" y="266" width="316" height="14" rx="4" fill="var(--line)" />
      <rect x="160" y="112" width="100" height="116" rx="10" fill="var(--accent-soft)" />
      <text x="210" y="188" textAnchor="middle" className="plumb-404" fontSize="56" fontWeight="700" letterSpacing="-3" fill="var(--accent)">
        404
      </text>
      <g ref={bobRef} style={{ transformOrigin: '210px 74px' }}>
        <rect x="186" y="236" width="48" height="62" fill="transparent" data-bob-hit onClick={swing} style={{ pointerEvents: 'all', cursor: 'pointer' }} />
        <line x1="210" y1="74" x2="210" y2="252" stroke="var(--accent)" strokeWidth="2.5" />
        <path d="M210 252c9 0 15 7 15 15l-15 24-15-24c0-8 6-15 15-15Z" fill="var(--accent)" />
      </g>
      <circle cx="210" cy="74" r="6" fill="var(--accent)" />
    </svg>
  );
}
