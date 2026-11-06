'use client';

import { useEffect, useState } from 'react';
import { Icon, MOON, SUN } from './Icons';

export default function ThemeToggle({ swap = false }: { swap?: boolean }) {
  const [dark, setDark] = useState(false);

  useEffect(() => setDark(document.documentElement.dataset.theme === 'dark'), []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) document.documentElement.dataset.theme = 'dark';
    else delete document.documentElement.dataset.theme;
    try {
      localStorage.setItem('sd-theme', next ? 'dark' : 'light');
    } catch {}
  };

  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
      <Icon size={17} d={swap && dark ? MOON : SUN} />
    </button>
  );
}
