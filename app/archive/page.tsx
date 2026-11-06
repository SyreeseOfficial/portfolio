import type { Metadata } from 'next';
import Link from 'next/link';
import ArchiveGrid from '@/components/ArchiveGrid';
import { ARROW_LEFT, Icon } from '@/components/Icons';
import Reveal from '@/components/Reveal';
import SubHeader from '@/components/SubHeader';
import { projects } from '@/data/projects';
import { pageMeta } from '@/lib/meta';

export const metadata: Metadata = pageMeta('Archive — Syreese', 'Everything Syreese has shipped: SaaS, mobile apps, internal tools, CLI tools and Skool projects.', '/archive');

export default function Archive() {
  const cards = projects.map(({ slug, title, cat, blurb, stack, thumb, pos }) => ({ slug, title, cat, blurb, stack, thumb, pos }));

  return (
    <div className="page">
      <SubHeader active="Archive" />
      <main className="sub-main wide">
        <div data-reveal className="page-head archive-head">
          <Link href="/" className="back-link">
            <Icon d={ARROW_LEFT} />
            HOME
          </Link>
          <h1>Archive</h1>
          <p>Everything I have shipped, plus a few things still cooking. Built mostly at night, and still growing.</p>
        </div>
        <ArchiveGrid cards={cards} />
      </main>
      <Reveal />
    </div>
  );
}
