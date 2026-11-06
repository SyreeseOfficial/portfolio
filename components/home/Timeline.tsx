'use client';

import { useEffect, useRef } from 'react';

type Entry = { title: string; summary: string; date: string };

export default function Timeline({ entries }: { entries: Entry[] }) {
  const gridRef = useRef<HTMLDivElement>(null);
  const moverRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const grid = gridRef.current!;
    const mover = moverRef.current!;
    const cards = Array.from(grid.querySelectorAll<HTMLElement>('[data-log]'));
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let cur = 0,
      hover = false,
      px = 0,
      py = 0;

    const pos = (i: number) => {
      const g = grid.getBoundingClientRect();
      const r = cards[i].querySelector('[data-log-dot]')!.getBoundingClientRect();
      return [r.left - g.left, r.top - g.top];
    };
    const T = (x: number, y: number, extra = '') => `translate(${x}px,${y}px)${extra}`;
    const clear = () => mover.getAnimations().forEach((an) => an.cancel());

    const snap = (i: number) => {
      cur = i;
      [px, py] = pos(i);
      clear();
      mover.style.transform = T(px, py);
    };
    const jump = (i: number) => {
      cur = i;
      const [x, y] = pos(i);
      const m = mover.getBoundingClientRect();
      const g = grid.getBoundingClientRect();
      const from = T(m.left + m.width / 2 - g.left - 5.5, m.top + m.height / 2 - g.top - 5.5);
      clear();
      mover.animate([{ transform: from }, { transform: T(x, y) }], { duration: 650, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards' });
      px = x;
      py = y;
    };
    const travel = (i: number) => {
      cur = i;
      const [x, y] = pos(i);
      const dx = x - px,
        dy = y - py,
        dist = Math.hypot(dx, dy);
      if (dist < 1) return;
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
      const stretch = Math.min(1 + dist / 260, 2.2);
      clear();
      mover.animate(
        [
          { transform: T(px, py), boxShadow: '0 0 0 4px var(--accent-soft)' },
          { transform: T(px + dx * 0.5, py + dy * 0.5, ` rotate(${angle}deg) scale(${stretch},.82)`), boxShadow: '0 0 0 7px var(--accent-soft)', offset: 0.5 },
          { transform: T(x, y, ' scale(1)'), boxShadow: '0 0 0 4px var(--accent-soft)' },
        ],
        { duration: 1100, easing: 'cubic-bezier(.65,0,.25,1)', fill: 'forwards' },
      );
      px = x;
      py = y;
    };

    const leaves = cards.map((c, i) => {
      const enter = () => {
        hover = true;
        if (reduce) snap(i);
        else jump(i);
      };
      const leave = () => {
        hover = false;
      };
      c.addEventListener('mouseenter', enter);
      c.addEventListener('mouseleave', leave);
      return () => {
        c.removeEventListener('mouseenter', enter);
        c.removeEventListener('mouseleave', leave);
      };
    });
    const resize = () => snap(cur);
    snap(0);
    addEventListener('resize', resize);
    const iv = setInterval(() => {
      if (!hover && !reduce) travel((cur + 1) % cards.length);
    }, 2600);
    return () => {
      leaves.forEach((f) => f());
      removeEventListener('resize', resize);
      clearInterval(iv);
    };
  }, []);

  return (
    <div ref={gridRef} className="log-grid">
      <span ref={moverRef} className="log-mover" />
      {entries.map((e) => (
        <div key={e.title} data-log className="log">
          <div className="log-track">
            <span data-log-dot />
            <span />
          </div>
          <div className="log-copy">
            <h3>{e.title}</h3>
            <p>{e.summary}</p>
            <span>{e.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
