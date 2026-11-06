'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type Card = { slug: string; title: string; cat: string; blurb: string; stack: string; thumb: string; pos: string };

const slugOf = (label: string) => label.toLowerCase().replace(/\s+/g, '-');

export default function ArchiveGrid({ cards }: { cards: Card[] }) {
  const filters = ['ALL', ...new Set(cards.map((c) => c.cat))];
  const [cat, setCat] = useState('ALL');

  useEffect(() => {
    const fromHash = () => setCat(filters.find((f) => `#${slugOf(f)}` === location.hash) || 'ALL');
    fromHash();
    addEventListener('hashchange', fromHash);
    return () => removeEventListener('hashchange', fromHash);
  }, []);

  const pick = (f: string) => {
    history.replaceState(null, '', f === 'ALL' ? location.pathname : `#${slugOf(f)}`);
    setCat(f);
  };

  const shown = cards.filter((c) => cat === 'ALL' || c.cat === cat).length;

  return (
    <>
      <div role="group" aria-label="Filter projects by category" className="filters">
        {filters.map((f) => (
          <button key={f} type="button" aria-pressed={f === cat} className={f === cat ? 'active' : undefined} onClick={() => pick(f)}>
            {f}
          </button>
        ))}
      </div>

      <p role="status" aria-live="polite" className="sr-status">
        {shown ? `Showing ${shown} ${shown === 1 ? 'project' : 'projects'}${cat === 'ALL' ? '' : ` in ${cat}`}` : `No projects in ${cat}`}
      </p>
      {!shown && <p className="filter-empty">No projects in this category yet.</p>}

      <div className="archive-grid">
        {cards.map((c) => (
          <Link key={c.slug} href={`/project/${c.slug}`} data-reveal className="card archive-card" style={{ display: cat === 'ALL' || c.cat === cat ? undefined : 'none' }}>
            <div className="card-img">
              <img loading="lazy" decoding="async" src={c.thumb} alt={`${c.title} project screenshot`} style={{ objectPosition: c.pos || 'center' }} />
              <span className="card-overlay view-case">View case study</span>
            </div>
            <div className="archive-text">
              <h3>{c.title}</h3>
              <p>{c.blurb}</p>
              <div className="stack">{c.stack}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
