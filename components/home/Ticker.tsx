'use client';

import { useEffect, useRef, useState } from 'react';

const ARTISTS = ['KANYE WEST', 'DAVE', 'KID CUDI', 'JACK HARLOW', 'NETON VEGA', 'BRENT FAIYAZ', 'KODAK BLACK', 'GRUPO FRONTERA', 'SADE', 'MAJID JORDAN', 'FUERZA REGIDA', 'FUTURE', 'JUSTIN BIEBER', 'GRUPO FIRME', 'CHANCE THE RAPPER', 'ROY WOODS', 'BRYSON TILLER', 'RINI', 'CHILDISH GAMBINO', 'RUSSELL!', 'K CAMP', 'TITO DOUBLE P'];

export default function Ticker() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current!;
    let swap: ReturnType<typeof setTimeout>;
    const iv = setInterval(() => {
      el.style.opacity = '0';
      swap = setTimeout(() => {
        setI((a) => (a + 1) % ARTISTS.length);
        el.style.opacity = '1';
      }, 400);
    }, 1800);
    return () => {
      clearInterval(iv);
      clearTimeout(swap);
    };
  }, []);

  return (
    <span ref={ref} className="artist">
      {ARTISTS[i]}
    </span>
  );
}
