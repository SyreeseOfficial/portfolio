'use client';

import { useEffect, useRef, useState } from 'react';
import { ARROW_UP_RIGHT, Icon } from '@/components/Icons';

const EMAIL = 'syreeseofficial@gmail.com';

export function ContactActions() {
  const magnet = useRef<HTMLAnchorElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = magnet.current!;
    const max = 6;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const near = Math.abs(dx) < r.width / 2 + 40 && Math.abs(dy) < r.height / 2 + 40;
      const tx = near ? Math.max(-max, Math.min(max, dx * 0.12)) : 0;
      const ty = near ? Math.max(-max, Math.min(max, dy * 0.2)) : 0;
      el.style.transform = `translate(${tx}px,${ty}px)`;
    };
    const leave = () => {
      el.style.transform = '';
    };
    addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, []);

  const copy = () =>
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });

  return (
    <div className="contact-actions">
      <a ref={magnet} href={`mailto:${EMAIL}`} className="btn-email">
        Email
        <Icon size={13} d={ARROW_UP_RIGHT} />
      </a>
      <button type="button" title="Copy email address" aria-label={copied ? 'Copied' : 'Copy email address'} className="btn-copy" onClick={copy}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      </button>
    </div>
  );
}
