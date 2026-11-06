import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARROW_LEFT, Icon } from '@/components/Icons';
import SubHeader from '@/components/SubHeader';
import { getPosts, renderMarkdown } from '@/lib/content';
import { pageMeta } from '@/lib/meta';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export const generateStaticParams = () => getPosts().map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPosts().find((x) => x.slug === slug);
  return p ? pageMeta(`${p.title} — Syreese`, p.summary, `/writing/${p.slug}`) : {};
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const posts = getPosts();
  const i = posts.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  const post = posts[i];
  const next = posts[i + 1];
  const back = (
    <Link href="/writing" className="back-link">
      <Icon d={ARROW_LEFT} />
      ALL POSTS
    </Link>
  );

  return (
    <div className="page">
      <SubHeader active="Writing" />
      <main className="sub-main narrow">
        <article>
          <div className="post-back">{back}</div>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            {post.date} · {post.read}
          </div>
          <div className="prose" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }} />
          <nav className="post-nav" aria-label="Post">
            {back}
            {next ? (
              <Link href={`/writing/${next.slug}`} className="post-next">
                <span>NEXT POST</span>
                <span>{next.title}</span>
              </Link>
            ) : (
              <span className="post-first">YOU HAVE REACHED THE FIRST POST</span>
            )}
          </nav>
        </article>
      </main>
    </div>
  );
}
