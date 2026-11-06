'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const Y = 'sd-home-y';
const BACK = 'sd-home-back';

const safe = (f: () => void) => {
  try {
    f();
  } catch {}
};

// Returning to home through a link lands where the visitor left off.
export default function ScrollMemory() {
  const pathname = usePathname();

  useEffect(() => {
    const isHome = () => location.pathname === '/';
    const save = () => isHome() && safe(() => sessionStorage.setItem(Y, String(scrollY)));
    const click = (e: MouseEvent) => {
      const a = (e.target as Element).closest?.('a[href]');
      if (!a || e.button) return;
      if (isHome()) save();
      else if (a.getAttribute('href') === '/') safe(() => sessionStorage.setItem(BACK, '1'));
    };
    document.addEventListener('click', click, true);
    addEventListener('pagehide', save);
    return () => {
      document.removeEventListener('click', click, true);
      removeEventListener('pagehide', save);
    };
  }, []);

  useEffect(() => {
    if (pathname !== '/' || location.hash) return;
    let y = 0;
    safe(() => {
      if (sessionStorage.getItem(BACK)) y = Number(sessionStorage.getItem(Y)) || 0;
      sessionStorage.removeItem(BACK);
    });
    if (!y) return;
    let n = 0;
    const t = setInterval(() => {
      scrollTo({ top: y, behavior: 'instant' });
      if (++n > 40 || (Math.abs(scrollY - y) < 2 && n > 5)) clearInterval(t);
    }, 60);
    return () => clearInterval(t);
  }, [pathname]);

  return null;
}
