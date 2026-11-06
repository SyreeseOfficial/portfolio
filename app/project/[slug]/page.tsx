import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARROW_LEFT, ARROW_RIGHT, Icon, WRAP } from '@/components/Icons';
import SubHeader from '@/components/SubHeader';
import { projects } from '@/data/projects';
import { pageMeta } from '@/lib/meta';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  // Fail the build if a project points at a missing image.
  for (const p of projects)
    for (const file of [p.img, p.thumb])
      if (!fs.existsSync(path.join(process.cwd(), 'public', file))) throw new Error(`Missing image for ${p.slug}: ${file}`);
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? pageMeta(`${p.title} — Syreese`, p.blurb, `/project/${p.slug}`) : {};
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const last = i === projects.length - 1;
  const next = projects[(i + 1) % projects.length];

  const meta = [
    ['YEAR', p.year],
    ['ROLE', p.role],
    ['STATUS', p.status],
    ['STACK', p.stack],
  ].filter(([, v]) => v);
  const points = [
    ['The problem', p.problem],
    ['The solution', p.solution],
    ['The result', p.result],
  ].filter(([, v]) => v.trim());

  return (
    <div className="page">
      <SubHeader active="Archive" />
      <main className="sub-main project-main">
        <div className="project-head">
          <Link href="/archive" className="back-link">
            <Icon d={ARROW_LEFT} />
            ARCHIVE
          </Link>
          <span className="project-cat">{p.cat}</span>
          <h1>{p.title}</h1>
          <p>{p.blurb}</p>
        </div>

        <div className="meta-strip">
          {meta.map(([k, v]) => (
            <div key={k}>
              <span>{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>

        <div className="project-image">
          <img src={p.img} alt={`${p.title} project screenshot`} />
        </div>

        <div className="points">
          {points.map(([t, b], n) => (
            <div key={t} className="point">
              <span>{String(n + 1).padStart(2, '0')}</span>
              <h3>{t}</h3>
              <p>{b}</p>
            </div>
          ))}
        </div>

        {p.links.length > 0 && (
          <div className="project-links">
            {p.links.map((l) => (
              <a key={l.h} href={l.h} target="_blank" rel="noopener">
                {l.t}
                <Icon d={ARROW_RIGHT} />
              </a>
            ))}
          </div>
        )}

        <Link href={`/project/${next.slug}`} className="next-card">
          <div>
            <span>{last ? 'BACK TO THE FIRST PROJECT' : 'NEXT PROJECT'}</span>
            <span>{next.title}</span>
          </div>
          <Icon size={28} d={last ? WRAP : ARROW_RIGHT} fill="var(--accent)" />
        </Link>
      </main>
    </div>
  );
}
