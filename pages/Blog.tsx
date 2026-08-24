import React, { useState } from 'react';
import { useBlogPosts } from '../hooks/useBlogPosts';
import ScrollReveal from '../components/ScrollReveal';

const PostSkeleton: React.FC = () => (
  <div className="animate-pulse space-y-1">
    {[1, 2, 3, 4, 5].map(i => (
      <div key={i} className="flex items-baseline justify-between py-4 border-b border-white/5">
        <div className="h-4 bg-white/10 rounded" style={{ width: `${20 + i * 10}%` }} />
        <div className="h-3 bg-white/5 rounded w-16" />
      </div>
    ))}
  </div>
);

const Blog: React.FC = () => {
  const { posts, loading, error } = useBlogPosts();
  const [query, setQuery] = useState('');

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="py-24 px-6 md:px-12 max-w-2xl mx-auto">
      <ScrollReveal>
        <div className="mb-12">
          <div className="flex items-baseline gap-4 mb-6">
            <h1 className="font-mono text-electricBlue text-sm uppercase tracking-wider">Blog</h1>
            {!loading && !error && (
              <span className="font-mono text-xs text-grey">{posts.length} posts</span>
            )}
          </div>

          <p className="font-sans text-grey text-sm leading-relaxed mb-8">
            A mix of personal thoughts, creative writing, and technical notes.
            I write to think — these are things that felt worth saying out loud.
          </p>

          <input
            type="text"
            placeholder="Search posts..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-transparent border-b border-white/10 pb-2 font-mono text-sm text-white placeholder:text-grey/40 focus:outline-none focus:border-electricBlue transition-colors duration-200"
          />
        </div>
      </ScrollReveal>

      {loading ? (
        <PostSkeleton />
      ) : error ? (
        <div className="border border-red-500/20 bg-red-500/5 rounded-md p-6">
          <p className="font-mono text-sm text-red-400">Couldn't load posts. Try refreshing.</p>
          <p className="font-mono text-xs text-grey/60 mt-1">{error}</p>
        </div>
      ) : filtered.length === 0 ? (
        <p className="font-mono text-sm text-grey py-4">
          {query ? `No posts matching "${query}"` : 'No posts yet.'}
        </p>
      ) : (
        <div>
          {filtered.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 40}>
              <a
                href={`/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline justify-between py-4 border-b border-white/5 group"
              >
                <span className="font-sans text-white group-hover:text-electricBlue group-hover:underline transition-colors duration-200">
                  {post.title}
                </span>
                {post.date && (
                  <span className="font-mono text-xs text-grey shrink-0 ml-6">{post.date}</span>
                )}
              </a>
            </ScrollReveal>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
