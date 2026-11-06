import type { Metadata } from 'next';
import Link from 'next/link';
import { ARROW_LEFT, Icon } from '@/components/Icons';
import Reveal from '@/components/Reveal';
import ScrambleRow from '@/components/ScrambleRow';
import SubHeader from '@/components/SubHeader';
import { getPosts } from '@/lib/content';
import { pageMeta } from '@/lib/meta';

export const metadata: Metadata = pageMeta('Writing — Syreese', 'Notes on building things after hours.', '/writing');

export default function Writing() {
  return (
    <div className="page">
      <SubHeader active="Writing" />
      <main className="sub-main narrow">
        <div data-reveal className="page-head">
          <Link href="/" className="back-link">
            <Icon d={ARROW_LEFT} />
            HOME
          </Link>
          <h1>Writing</h1>
          <p>Notes on building things after hours. No hustle porn, just what worked and what did not.</p>
        </div>
        <div className="list">
          {getPosts().map((p) => (
            <ScrambleRow key={p.slug} href={`/writing/${p.slug}`} className="row list-row">
              <div className="row-text">
                <h2>{p.title}</h2>
                {p.summary && <p>{p.summary}</p>}
              </div>
              <div className="row-meta">
                <span data-scramble>{p.date}</span>
                <span data-scramble>{p.read}</span>
              </div>
            </ScrambleRow>
          ))}
          <div className="row-end" />
        </div>
      </main>
      <Reveal />
    </div>
  );
}
