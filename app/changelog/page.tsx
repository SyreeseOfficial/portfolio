import type { Metadata } from 'next';
import Link from 'next/link';
import { ARROW_LEFT, Icon } from '@/components/Icons';
import Reveal from '@/components/Reveal';
import ScrambleRow from '@/components/ScrambleRow';
import SubHeader from '@/components/SubHeader';
import { getChangelog } from '@/lib/content';
import { pageMeta } from '@/lib/meta';

export const metadata: Metadata = pageMeta('Changelog — Syreese', 'Changelog for the Syreese site.', '/changelog');

export default function Changelog() {
  return (
    <div className="page">
      <SubHeader active="Changelog" />
      <main className="sub-main narrow">
        <div data-reveal className="page-head">
          <Link href="/" className="back-link">
            <Icon d={ARROW_LEFT} />
            HOME
          </Link>
          <h1>Changelog</h1>
          <p>Every update, fix and small improvement that shipped. Newest first.</p>
        </div>
        <div className="list">
          {getChangelog().map((e) => (
            <ScrambleRow key={e.slug} className="row list-row">
              <div className="row-text">
                <h2>{e.title}</h2>
                {e.summary && <p>{e.summary}</p>}
              </div>
              <div className="row-meta">
                <span data-scramble>{e.date}</span>
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
