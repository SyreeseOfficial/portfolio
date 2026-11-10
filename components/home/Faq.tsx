import Link from 'next/link';
import type { ReactNode } from 'react';

const QA: { q: string; icon: ReactNode; a: ReactNode }[] = [
  {
    q: 'Why does this site exist?',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
      </>
    ),
    a: 'I wanted somewhere to build things, try out new tech, and keep the stuff I like from around the internet.',
  },
  {
    q: 'What stack is this built with?',
    icon: <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5" transform="translate(0 -1)" />,
    a: 'Next.js and TypeScript on Vercel. The styling is plain CSS with no animation library, and each post is a markdown file in the repo.',
  },
  {
    q: 'Did you design and build this yourself?',
    icon: <path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 013 3L8 19l-4 1zM14 7l3 3" />,
    a: "It's all vibe coded. I bring the taste.",
  },
  {
    q: 'What are you working on or learning?',
    icon: <path d="M4 5h16v14H4zM8 10l3 2-3 2M13 15h4" />,
    a: "Custom apps and PC tools that make my own life easier. Away from the screen, I'm training for a marathon. I just finished my first Spartan Beast and placed top 50 in my age group. I also box, play basketball, and lift.",
  },
  {
    q: 'How do you choose what to build next?',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
      </>
    ),
    a: 'Whatever annoys me enough to fix, or sounds fun to figure out.',
  },
  {
    q: 'Where do you find inspiration?',
    icon: <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" />,
    a: (
      <>
        Awwwards, 21st Dev, YouTube, and Reddit. I also built a tool called <Link href="/project/omniview">Omniview</Link> to save any UI I come across online that I like.
      </>
    ),
  },
  {
    q: "What's with the design?",
    icon: <path d="M12 3s6 6.2 6 10.5a6 6 0 01-12 0C6 9.2 12 3 12 3z" />,
    a: 'I went with a plain white theme and a purple accent I use sparingly. A minimal site can get boring, so I added a lot of small interactions and animations to keep it interesting.',
  },
  {
    q: 'What are you watching or reading lately?',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M10 8.5v7l5.5-3.5L10 8.5z" />
      </>
    ),
    a: "Not much reading lately. I'm working through everything Taylor Sheridan has made, and my wife and I just finished Lioness. It was great.",
  },
  {
    q: 'How can I get in touch just to chat?',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M4 8l8 5.5L20 8" />
      </>
    ),
    a: (
      <>
        <a href="#contact">Click here</a> for my socials and contact info.
      </>
    ),
  },
];

export default function Faq() {
  return (
    <section id="faq" data-section className="sec-faq">
      <div className="faq-group">
        <h2 className="center">FAQ</h2>
        <div className="faq-list">
          {QA.map(({ q, icon, a }) => (
            <details key={q} name="faq" className="faq">
              <summary>
                <span className="faq-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {icon}
                  </svg>
                </span>
                <span>{q}</span>
                <svg className="faq-plus" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 4v16M4 12h16" />
                </svg>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
