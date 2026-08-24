import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useBlogPosts } from '../../hooks/useBlogPosts';
import ScrollReveal from '../ScrollReveal';

const BlogSection: React.FC = () => {
  const { posts, loading, error } = useBlogPosts();
  const latest = posts.slice(0, 3);

  return (
    <section className="py-24 px-6 md:px-12 max-w-2xl mx-auto border-t border-white/5">
      <ScrollReveal>
        <div className="flex items-baseline gap-4 mb-12">
          <h2 className="font-mono text-electricBlue text-sm uppercase tracking-wider">Blog</h2>
        </div>
      </ScrollReveal>

      {loading ? (
        <div className="animate-pulse space-y-1">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-baseline justify-between py-4 border-b border-white/5">
              <div className="h-4 bg-white/10 rounded" style={{ width: `${30 + i * 12}%` }} />
              <div className="h-3 bg-white/5 rounded w-16" />
            </div>
          ))}
        </div>
      ) : error ? null : (
        <div>
          {latest.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 60}>
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

      <div className="mt-12 flex justify-center">
        <a
          href="/blog"
          className="group flex items-center gap-2 text-offWhite font-mono text-sm hover:text-electricBlue transition-colors duration-200"
        >
          All Posts
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
    </section>
  );
};

export default BlogSection;
