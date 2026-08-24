import { useState, useEffect } from 'react';

export interface BlogPost {
  slug: string;
  title: string;
  date: string | null;
  dateRaw: string | null;
  downloadUrl: string;
}

const GITHUB_API = 'https://api.github.com/repos/SyreeseOfficial/portfolio/contents/posts';

function parseFilename(filename: string): Omit<BlogPost, 'downloadUrl'> {
  const name = filename.replace(/\.md$/, '');
  const dateMatch = name.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);

  if (dateMatch) {
    const [, dateRaw, rest] = dateMatch;
    const date = new Date(dateRaw + 'T12:00:00').toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
    });
    const title = rest.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    return { slug: name, title, date, dateRaw };
  }

  const title = name.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return { slug: name, title, date: null, dateRaw: null };
}

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(GITHUB_API)
      .then(r => {
        if (!r.ok) throw new Error(`GitHub API error: ${r.status}`);
        return r.json();
      })
      .then((files: Array<{ name: string; download_url: string }>) => {
        const parsed = files
          .filter(f => f.name.endsWith('.md'))
          .map(f => ({ ...parseFilename(f.name), downloadUrl: f.download_url }))
          .sort((a, b) => {
            if (a.dateRaw && b.dateRaw) return b.dateRaw.localeCompare(a.dateRaw);
            if (a.dateRaw) return -1;
            if (b.dateRaw) return 1;
            return a.title.localeCompare(b.title);
          });
        setPosts(parsed);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { posts, loading, error };
}
