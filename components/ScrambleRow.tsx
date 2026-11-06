'use client';

import Link from 'next/link';
import type { MouseEvent, ReactNode } from 'react';

const CH = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function scramble(e: MouseEvent<HTMLElement>) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  e.currentTarget.querySelectorAll<HTMLElement>('[data-scramble]').forEach((el) => {
    const final = (el.dataset.final ||= el.textContent || '');
    const t0 = performance.now();
    const step = () => {
      const p = Math.min(1, (performance.now() - t0) / 400);
      el.textContent = final
        .split('')
        .map((c, i) => (c === ' ' || i < p * final.length ? c : CH[Math.floor(Math.random() * CH.length)]))
        .join('');
      if (p < 1) setTimeout(step, 40);
      else el.textContent = final;
    };
    step();
  });
}

export default function ScrambleRow({ href, className, children }: { href?: string; className: string; children: ReactNode }) {
  return href ? (
    <Link href={href} data-row className={className} onMouseEnter={scramble}>
      {children}
    </Link>
  ) : (
    <div data-row className={className} onMouseEnter={scramble}>
      {children}
    </div>
  );
}
