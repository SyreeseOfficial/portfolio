import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { Marked } from 'marked';

export type Entry = {
  slug: string;
  title: string;
  summary: string;
  time: number;
  date: string;
  read: string;
  body: string;
};

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function firstParagraph(body: string) {
  const plain = (body.split(/\n\s*\n/).find((p) => !/^\s*(#|-|\*|>|```|\d+\.)/.test(p)) || '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .trim();
  return plain.length > 120 ? plain.slice(0, 117).trimEnd() + '...' : plain;
}

function load(dir: string): Entry[] {
  const root = path.join(process.cwd(), 'content', dir);
  return fs
    .readdirSync(root)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(root, file), 'utf8'));
      // gray-matter parses YYYY-MM-DD as UTC, so read UTC parts to avoid a timezone shift.
      const d = new Date(data.date);
      const day = String(d.getUTCDate()).padStart(2, '0');
      const month = MONTHS[d.getUTCMonth()];
      const year = d.getUTCFullYear();
      const words = content.split(/\s+/).filter(Boolean).length;
      return {
        slug: file.replace(/\.md$/, ''),
        title: String(data.title),
        summary: data.summary ? String(data.summary) : firstParagraph(content),
        time: d.getTime(),
        date: `${day} ${month} ${year}`,
        read: `${Math.max(1, Math.round(words / 220))} MIN READ`,
        body: content,
      };
    })
    .sort((a, b) => b.time - a.time);
}

export const getPosts = () => load('posts');
export const getChangelog = () => load('changelog');

const md = new Marked({
  renderer: {
    // Raw HTML in markdown is dropped, and links open in a new tab.
    html: () => '',
    link({ href, tokens }) {
      return `<a data-prose href="${href}" target="_blank" rel="noopener">${this.parser.parseInline(tokens)}</a>`;
    },
  },
});

export const renderMarkdown = (body: string) => md.parse(body, { async: false });
