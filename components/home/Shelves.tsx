'use client';

import { useState } from 'react';
import { Icon, PLUS } from '@/components/Icons';
import { SHELVES } from '@/data/home';

export default function Shelves() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="shelves">
      {SHELVES.map((s, i) => {
        const isOpen = i === open;
        return (
          <div key={s.label} className={`shelf${isOpen ? ' open' : ''}`}>
            <button type="button" className="shelf-head" aria-expanded={isOpen} aria-controls={`shelf-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
              <span className="shelf-label">{s.label}</span>
              <span className="shelf-teaser">{s.items.map((t) => t[0]).join(' · ')}</span>
              <span className="shelf-end">
                <span className="shelf-count">{String(s.items.length).padStart(2, '0')}</span>
                <span className="shelf-icon">
                  <Icon size={13} d={PLUS} />
                </span>
              </span>
            </button>
            <div id={`shelf-${i}`} className="shelf-body" inert={!isOpen}>
              <div>
                <div className="shelf-grid">
                {s.items.map(([name, desc, href]) => (
                  <a key={name} className="tool" href={href} target="_blank" rel="noopener noreferrer">
                    <span className="tool-name">{name}</span>
                    <span className="tool-desc">{desc}</span>
                  </a>
                ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
