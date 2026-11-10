import type { Metadata } from 'next';
import Link from 'next/link';
import BuriedShelf from '@/components/home/BuriedShelf';
import { ContactActions } from '@/components/home/Contact';
import Faq from '@/components/home/Faq';
import HomeChrome from '@/components/home/HomeChrome';
import HomeEffects from '@/components/home/HomeEffects';
import Letters from '@/components/home/Letters';
import Portrait from '@/components/home/Portrait';
import ProjectPicker from '@/components/home/ProjectPicker';
import Shelves from '@/components/home/Shelves';
import Ticker from '@/components/home/Ticker';
import Timeline from '@/components/home/Timeline';
import Typer from '@/components/home/Typer';
import { ARROW_DOWN, ARROW_RIGHT, DOWNLOAD, Icon, NOTE } from '@/components/Icons';
import ScrambleRow from '@/components/ScrambleRow';
import VideoLoop from '@/components/VideoLoop';
import { BUILD_TOOLS, FEATURED, PHOTOS, RULES, SOCIALS } from '@/data/home';
import { projects } from '@/data/projects';
import { getChangelog, getPosts } from '@/lib/content';
import { pageMeta } from '@/lib/meta';

export const metadata: Metadata = pageMeta('Syreese — Portfolio', 'Syreese — portfolio of shipped products, tools and writing.', '/');

const INSTAGRAM = SOCIALS[4];

function clip(text: string, max = 80) {
  return text.length <= max ? text : text.slice(0, max).replace(/\s+\S*$/, '').replace(/[.,;:]$/, '') + '...';
}

export default function Home() {
  const featured = FEATURED.map((slug) => projects.find((p) => p.slug === slug)!);
  const posts = getPosts().slice(0, 3);
  const log = getChangelog()
    .slice(0, 4)
    .map((e) => ({ title: e.title, summary: clip(e.summary), date: e.date }));

  return (
    <div className="page home">
      <div className="intro">
        <div className="intro-mark">
          S<span>D</span>
        </div>
      </div>

      <HomeChrome />
      <HomeEffects />

      <main className="home-main">
        <section id="hero" data-section className="hero">
          <div className="hero-box">
            <h1>Syreese</h1>
            <p className="tagline">
              A digital <Typer /> with a blue-collar backbone.
            </p>
            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">
                See the work <Icon size={13} d={ARROW_RIGHT} />
              </a>
              <a href="/uploads/Syreese-Resume.pdf" download="Syreese Resume.pdf" className="btn btn-outline">
                Resume (PDF) <Icon size={13} d={DOWNLOAD} />
              </a>
            </div>
          </div>
          <a href="#intro" className="scroll-cue">
            <span className="nudge">
              <Icon size={13} d={ARROW_DOWN} fill="var(--accent)" />
            </span>
            SCROLL
          </a>
        </section>

        <section id="intro" data-section className="sec-intro">
          <div className="intro-rule">
            <Letters text="I build small, sharp software products. Usually because something at work was slow, broken, or costing somebody money." />
          </div>
        </section>

        <section id="about" data-section className="sec">
          <div className="about-grid">
            <div className="about-copy">
              <h2>Who am i</h2>
              <p className="lede lede-ink">
                I spent four years on jobsites doing drywall, logistics, cleaning, and retail. The deadlines were real. The work taught me to show up, adapt, and finish. But it only pays the bills. Every dollar costs an hour, and there's a limit to how many hours I have. So I started building after my shifts.
              </p>
              <div className="chips">
                <span className="chip">SELF TAUGHT</span>
                <span className="chip">SHIPS NIGHTS + WEEKENDS</span>
              </div>
            </div>
            <Portrait />
          </div>
        </section>

        <section id="work" data-section className="sec">
          <div className="head-row work-head">
            <h2>Some shipped projects</h2>
          </div>
          <ProjectPicker projects={featured} />
        </section>

        <section id="buried" data-section className="sec-buried">
          <div className="buried-head">
            <h2>Projects that got buried</h2>
            <p>If you already know a project isn&apos;t worth finishing, kill it. It&apos;s the cheapest decision you&apos;ll make.</p>
          </div>
          <BuriedShelf />
        </section>

        <section id="rules" data-section className="sec">
          <div className="split-head">
            <h2>Rules I live by</h2>
            <p>I try to live my life by these 3 philosophies. I feel like if I follow these ideas, everything will be alright.</p>
          </div>
          <div className="rules-grid">
            {RULES.map((r) => (
              <div key={r.title} className="rule">
                <div className="rule-media">
                  <VideoLoop src={`/uploads/${r.video}`} />
                </div>
                <h3>{r.title}</h3>
                <p className="rule-line">{r.line}</p>
                <p className="rule-body">{r.body}</p>
                <div className="rule-via">
                  via{' '}
                  <a href={r.href} target="_blank" rel="noopener">
                    {r.via}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="photos" data-section className="sec">
          <div className="split-head">
            <h2>Some flicks</h2>
            <p>Sometimes I like taking pics. Not a pro or anything, but it&apos;s fun.</p>
          </div>
          <div className="photo-grid">
            {PHOTOS.map((p) => (
              <div key={p.src} className="photo">
                <div className="photo-frame">
                  <img loading="lazy" decoding="async" src={`/uploads/${p.src}.webp`} alt={p.caption.split(' / ')[1]} />
                </div>
                <span>{p.caption}</span>
              </div>
            ))}
          </div>
          <div className="photo-foot">
            <span>SHOT ON VIVO X200 ULTRA</span>
            <a href={INSTAGRAM.href}>
              <Icon size={17} d={INSTAGRAM.icon} />
              @syreesepic
              <Icon size={13} d={ARROW_RIGHT} />
            </a>
          </div>
        </section>

        <section id="skills" data-section className="sec">
          <h2 className="center skills-title">Tools I build with</h2>
          <div className="skills-grid">
            <div className="skills-video">
              <VideoLoop src="/uploads/tools-i-build-with" />
            </div>
            <div className="skills-groups">
              {BUILD_TOOLS.map((g) => (
                <div key={g.title} className="skill-group">
                  <div className="skill-head">
                    <span>
                      <Icon size={15} d={g.icon} />
                    </span>
                    <h3>{g.title}</h3>
                  </div>
                  <div className="skill-links">
                    {g.links.map(([name, href]) => (
                      <a key={name} href={href} target="_blank" rel="noopener noreferrer">
                        {name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="daily" data-section className="sec-daily">
          <div className="split-head daily-head">
            <h2>Tools I live with</h2>
            <p>Digital &amp; analog. These are all of my favorite tools that have stayed with me through the years. I use most of these on a daily basis.</p>
          </div>
          <Shelves />
        </section>

        <section id="writing" data-section className="sec">
          <div className="head-row writing-head">
            <h2>Notes, thoughts &amp; ideas</h2>
            <Link href="/writing" className="more-link">
              ALL POSTS <Icon d={ARROW_RIGHT} />
            </Link>
          </div>
          <div className="home-posts">
            {posts.map((p) => (
              <ScrambleRow key={p.slug} href={`/writing/${p.slug}`} className="row home-row">
                <h3>{p.title}</h3>
                <div className="row-meta">
                  <span data-scramble>{p.date}</span>
                  <span data-scramble>{p.read}</span>
                </div>
              </ScrambleRow>
            ))}
            <div className="row-end" />
          </div>
        </section>

        <Faq />

        <section id="changelog" data-section className="sec-log">
          <h2 className="log-title">Changelog</h2>
          <Timeline entries={log} />
          <Link href="/changelog" className="more-link log-more">
            VIEW ALL <Icon d={ARROW_RIGHT} />
          </Link>
        </section>

        <section id="contact" data-section className="sec-contact">
          <div className="contact">
            <div className="status-pill">
              <span />
              TAKING ON NEW PROJECTS
            </div>
            <h2>My inbox is wide open.</h2>
            <p>Shoot me a message. I&apos;d love to hear from you whether it be for work, a project, a question or anything at all. It all ends up in the same inbox.</p>
            <ContactActions />
            <div className="socials">
              {SOCIALS.map((s) => (
                <a key={s.title} href={s.href} title={s.title} aria-label={s.title} target="_blank" rel="noopener noreferrer">
                  <Icon size={18} d={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <div data-footer-zone className="footer-zone">
        <footer>
          <div className="footer-row">
            <span>© 2026 SYREESE DELOS SANTOS</span>
            <span className="footer-now">
              <Icon size={14} d={NOTE} />
              <span>
                LISTENING TO <Ticker />
              </span>
            </span>
            <span className="footer-end">BUILT WHILE HOLDING MY DOG, KONA.</span>
          </div>
        </footer>
        <div className="footer-art">
          <img src="/assets/iso-footer.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
