'use client';

import { useEffect, useRef, useState } from 'react';
import { ARROW_UP, Icon } from '@/components/Icons';
import ThemeToggle from '@/components/ThemeToggle';

const PILLS = [
  ['About', '#about'],
  ['Projects', '#work'],
  ['Photos', '#photos'],
  ['Blog', '#writing'],
  ['Contact', '#contact'],
];
const DOTS = ['hero', 'about', 'work', 'buried', 'rules', 'photos', 'skills', 'daily', 'writing', 'faq', 'changelog', 'contact'];

export default function HomeChrome() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');
  const [showTop, setShowTop] = useState(false);
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const key = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', key);
    return () => document.removeEventListener('keydown', key);
  }, []);

  useEffect(() => {
    const bar = progress.current!;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
    let raf = 0;
    const update = () => {
      raf = 0;
      let current = sections[0].id;
      sections.forEach((s) => {
        if (s.getBoundingClientRect().top <= innerHeight * 0.4) current = s.id;
      });
      setActive(current === 'intro' ? 'hero' : current);
      setShowTop(scrollY > 900);
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max).toFixed(4) : 0})`;
    };
    const onScroll = () => {
      raf ||= requestAnimationFrame(update);
    };
    update();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    return () => {
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={progress} className="progress" />

      <header className="site-header">
        <a href="#hero" aria-label="Home" className="logo">
          <span>SD</span>
        </a>
        <div className="header-actions">
          <ThemeToggle swap />
          <button type="button" className={`icon-btn menu-btn${open ? ' open' : ''}`} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(!open)}>
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`scrim${open ? ' open' : ''}`} onClick={() => setOpen(false)} />
      <nav id="site-menu" aria-label="Sections" className={`menu${open ? ' open' : ''}`} inert={!open}>
        {PILLS.map(([label, href], i) => (
          <a key={href} href={href} className="pill" style={{ transitionDelay: `${open ? (PILLS.length - 1 - i) * 45 : i * 25}ms` }} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <div className="dots">
        {DOTS.map((id) => (
          <a key={id} href={`#${id}`} aria-label={`Go to ${id}`} className={id === active ? 'active' : undefined} />
        ))}
      </div>

      <button type="button" className={`to-top${showTop ? ' show' : ''}`} onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>
        <Icon d={ARROW_UP} />
        TOP
      </button>
    </>
  );
}
