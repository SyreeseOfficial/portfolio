'use client';

import { useEffect, useRef } from 'react';

export default function VideoLoop({ src, label, drift }: { src: string; label?: string; drift?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current!;
    const io = new IntersectionObserver(([en]) => (en.isIntersecting ? v.play().catch(() => {}) : v.pause()), { rootMargin: '200px' });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video ref={ref} className="video" loop muted playsInline preload="metadata" aria-label={label} aria-hidden={label ? undefined : true} data-drift={drift ? '' : undefined}>
      <source src={`${src}.webm`} type="video/webm" />
      <source src={`${src}.mp4`} type="video/mp4" />
    </video>
  );
}
