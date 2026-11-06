'use client';

import { useEffect } from 'react';

type Item = { el: HTMLElement; i: number };

// Picks the reveal targets the way the design does: list children stagger, everything else rises as one block.
function collectReveals() {
  const seen = new Set<HTMLElement>();
  const items: Item[] = [];
  const visible = (el: Element) => {
    const cs = getComputedStyle(el);
    return cs.display !== 'none' && cs.position !== 'absolute' && cs.position !== 'fixed';
  };
  const add = (el: HTMLElement, i: number) => {
    if (el.hasAttribute('data-proj-panel')) el = el.parentElement!;
    if (seen.has(el)) return;
    seen.add(el);
    items.push({ el, i });
  };
  const walk = (el: HTMLElement, depth: number, idx: number) => {
    const kids = (Array.from(el.children) as HTMLElement[]).filter(visible);
    const display = getComputedStyle(el).display;
    const list = /grid|flex/.test(display) && kids.length >= 2 && kids.length <= 16;
    if (depth === 0) return kids.forEach((k, i) => walk(k, 1, i));
    if (kids.length === 1 && depth < 3) return walk(kids[0], depth + 1, idx);
    if (list && depth < 3 && (depth === 1 || display === 'grid' || kids.length >= 3)) return kids.forEach((k, i) => walk(k, depth + 1, i));
    add(el, idx);
  };
  document.querySelectorAll<HTMLElement>('main section[data-section]:not(#hero)').forEach((sec) => walk(sec, 0, 0));
  return items;
}

export default function HomeEffects() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Scroll reveals
    const items = collectReveals();
    const byEl = new Map(items.map((it) => [it.el, it]));
    items.forEach((it) => (it.el.style.opacity = '0'));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          io.unobserve(en.target);
          const { el, i } = byEl.get(en.target as HTMLElement)!;
          el.animate([{ opacity: 0, translate: '0 44px', scale: '.97', filter: 'blur(10px)' }, { opacity: 1, translate: '0 0', scale: '1', filter: 'blur(0px)' }], {
            duration: 1100,
            delay: Math.min(i, 6) * 110,
            easing: 'cubic-bezier(.16,1,.3,1)',
            fill: 'backwards',
          });
          el.style.opacity = '';
        }),
      { rootMargin: '0px 0px -8% 0px' },
    );
    items.forEach((it) => io.observe(it.el));

    // Scroll-linked motion
    const hero = document.querySelector<HTMLElement>('.hero-box')!;
    const heads = Array.from(document.querySelectorAll<HTMLElement>('main section[data-section]:not(#hero) h2'));
    const media = Array.from(document.querySelectorAll<HTMLElement>('main section[data-section] .photo-frame img, main section[data-section] [data-drift]'));
    const portrait = document.querySelector<HTMLElement>('[data-parallax]')!;
    let shift = 0;
    media.forEach((m) => (m.style.willChange = 'transform'));

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = innerHeight;
      const p = Math.min(1, scrollY / (vh * 0.8));
      hero.style.transform = `translate3d(0,${(p * 60).toFixed(1)}px,0) scale(${(1 - p * 0.06).toFixed(3)})`;
      hero.style.opacity = (1 - p * 0.9).toFixed(3);
      const offset = (r: DOMRect) => (r.top + r.height / 2 - vh / 2) / vh;
      const near = (r: DOMRect) => r.bottom >= -100 && r.top <= vh + 100;
      heads.forEach((h) => {
        const r = h.getBoundingClientRect();
        if (near(r)) h.style.transform = `translate3d(${(offset(r) * -36).toFixed(1)}px,0,0)`;
      });
      media.forEach((m) => {
        const r = m.parentElement!.getBoundingClientRect();
        if (near(r)) m.style.transform = `translate3d(0,${(offset(r) * -28).toFixed(1)}px,0) scale(1.14)`;
      });
      const r = portrait.getBoundingClientRect();
      shift = (r.top - shift + r.height / 2 - vh / 2) * 0.06;
      portrait.style.transform = `translate3d(0,${shift.toFixed(1)}px,0)`;
    };
    const onScroll = () => {
      raf ||= requestAnimationFrame(update);
    };
    update();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);

    return () => {
      io.disconnect();
      items.forEach((it) => (it.el.style.opacity = ''));
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
