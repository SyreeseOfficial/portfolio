'use client';

import { useState } from 'react';
import { CLOSE, Icon } from '@/components/Icons';
import VideoLoop from '@/components/VideoLoop';
import { BURIED } from '@/data/home';

export default function BuriedShelf() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="buried-grid">
      <div className="stage">
        <div className="stage-media">
          <VideoLoop src="/uploads/projects-that-got-buried" />
        </div>
        <span className="shelf-tag" style={{ opacity: selected === null ? 1 : 0 }}>
          THE SHELF
        </span>
        {BURIED.map((b, i) => (
          <div
            key={b.name}
            className={`bur-panel${i === selected ? ' active' : ''}`}
            inert={i !== selected}
            style={{ backgroundImage: `linear-gradient(180deg,rgba(0,0,0,.72) 0%,rgba(0,0,0,.5) 35%,rgba(0,0,0,.6) 55%,rgba(0,0,0,.94) 100%),url(/uploads/${b.bg}.webp)` }}
          >
            <div className="bur-top">
              <span>
                {String(i + 1).padStart(2, '0')} / {b.status}
              </span>
              <button type="button" className="bur-close" aria-label="Close" onClick={() => setSelected(null)}>
                <Icon size={10} d={CLOSE} />
              </button>
            </div>
            <div className="bur-copy">
              <h3>{b.name}</h3>
              <p>{b.desc}</p>
              <p className="verdict">{b.verdict}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bur-side">
        <div className="bur-list">
          {BURIED.map((b, i) => (
            <button key={b.name} type="button" className={`bur-card${i === selected ? ' active' : ''}`} aria-pressed={i === selected} onClick={() => setSelected(i === selected ? null : i)}>
              <span className="bur-dot-row">
                <span className={`bur-dot${b.status === 'SHELVED' ? ' on' : ''}`} />
              </span>
              <span className="bur-name">{b.name}</span>
              <span className="bur-desc">{b.desc}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
