'use client';

import { useEffect, useRef } from 'react';

const WORDS = ['builder', 'mason', 'architect', 'inventor', 'maker', 'producer', 'originator', 'artist', 'creator', 'designer', 'engineer'];

export default function Typer() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current!;
    let w = 0,
      i = WORDS[0].length,
      deleting = false,
      timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = WORDS[w];
      if (!deleting) {
        if (i < word.length) {
          el.textContent = word.slice(0, ++i);
          timer = setTimeout(tick, 75);
        } else {
          deleting = true;
          timer = setTimeout(tick, 2000);
        }
      } else if (i > 0) {
        el.textContent = word.slice(0, --i);
        timer = setTimeout(tick, 40);
      } else {
        deleting = false;
        w = (w + 1) % WORDS.length;
        timer = setTimeout(tick, 120);
      }
    };
    timer = setTimeout(tick, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <span ref={ref} className="typed">
        {WORDS[0]}
      </span>
      <span className="caret" />
    </>
  );
}
