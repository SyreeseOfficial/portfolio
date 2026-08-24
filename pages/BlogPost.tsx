import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { useBlogPosts } from '../hooks/useBlogPosts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { posts, loading: postsLoading } = useBlogPosts();
  const [content, setContent] = useState<string | null>(null);
  const [contentLoading, setContentLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const post = posts.find(p => p.slug === slug);
  const currentIndex = posts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  useEffect(() => {
    if (!postsLoading && !post) navigate('/404');
  }, [postsLoading, post, navigate]);

  useEffect(() => {
    if (!post) return;
    setContentLoading(true);
    fetch(post.downloadUrl)
      .then(r => {
        if (!r.ok) throw new Error('Failed to load post');
        return r.text();
      })
      .then(text => { setContent(text); setContentLoading(false); })
      .catch(err => { setFetchError(err.message); setContentLoading(false); });
  }, [post?.downloadUrl]);

  const readingTime = content ? Math.ceil(content.split(/\s+/).length / 200) : null;

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tweetPost = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post?.title || '');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  if (postsLoading || contentLoading) {
    return (
      <div className="py-24 px-6 md:px-12 max-w-2xl mx-auto animate-pulse">
        <div className="h-3 bg-white/10 rounded w-12 mb-10" />
        <div className="h-8 bg-white/10 rounded w-2/3 mb-4" />
        <div className="h-3 bg-white/5 rounded w-32 mb-12" />
        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-4 bg-white/5 rounded" style={{ width: `${60 + (i % 3) * 15}%` }} />
          ))}
        </div>
      </div>
    );
  }

  if (!post) return null;

  return (
    <article className="py-24 px-6 md:px-12 max-w-2xl mx-auto">
      <Link
        to="/blog"
        className="font-mono text-xs text-grey hover:text-electricBlue transition-colors duration-200 mb-10 inline-block"
      >
        ← Blog
      </Link>

      <header className="mb-8">
        <h1 className="font-serif italic text-3xl md:text-4xl text-white mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 font-mono text-xs text-grey">
          {post.date && <span>{post.date}</span>}
          {readingTime && <span>{readingTime} min read</span>}
        </div>
      </header>

      <div className="font-mono text-grey/40 text-center mb-10 tracking-[0.5em]">* * *</div>

      {fetchError ? (
        <div className="border border-red-500/20 bg-red-500/5 rounded-md p-6">
          <p className="font-mono text-sm text-red-400">Couldn't load post content. Try refreshing.</p>
        </div>
      ) : (
        <div className="
          font-sans text-[18px] leading-relaxed text-grey/90
          [&_h1]:font-serif [&_h1]:italic [&_h1]:text-2xl [&_h1]:md:text-3xl [&_h1]:text-white [&_h1]:mt-10 [&_h1]:mb-4 [&_h1]:leading-tight
          [&_h2]:font-serif [&_h2]:italic [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:leading-tight
          [&_h3]:font-mono [&_h3]:text-sm [&_h3]:text-white [&_h3]:uppercase [&_h3]:tracking-wider [&_h3]:mt-6 [&_h3]:mb-2
          [&_p]:mb-5 [&_p]:leading-relaxed
          [&_strong]:text-white [&_strong]:font-medium
          [&_em]:italic
          [&_a]:text-electricBlue [&_a]:underline [&_a]:hover:text-white [&_a]:transition-colors
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ul]:space-y-1
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_ol]:space-y-1
          [&_li]:leading-relaxed
          [&_blockquote]:border-l-2 [&_blockquote]:border-electricBlue/30 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-grey/70 [&_blockquote]:my-6
          [&_hr]:border-white/10 [&_hr]:my-10
          [&_code]:font-mono [&_code]:text-electricBlue [&_code]:bg-white/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[15px]
          [&_pre]:bg-white/5 [&_pre]:rounded-md [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:my-6
          [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-[14px] [&_pre_code]:text-inherit
        ">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {content || ''}
          </ReactMarkdown>
        </div>
      )}

      <div className="mt-16 text-right">
        <a href="#" className="font-mono text-xs text-grey hover:text-electricBlue transition-colors duration-200">
          ↑ Back to top
        </a>
      </div>

      <div className="mt-6 flex items-center gap-6 font-mono text-xs text-grey">
        <button onClick={copyLink} className="hover:text-electricBlue transition-colors duration-200">
          {copied ? 'Copied!' : 'Copy link'}
        </button>
        <button onClick={tweetPost} className="hover:text-electricBlue transition-colors duration-200">
          Share on X
        </button>
      </div>

      {(prevPost || nextPost) && (
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between gap-8">
          {prevPost ? (
            <Link to={`/blog/${prevPost.slug}`} className="group flex-1">
              <div className="font-mono text-xs text-grey mb-1">← Newer</div>
              <div className="font-sans text-sm text-white group-hover:text-electricBlue group-hover:underline transition-colors duration-200">
                {prevPost.title}
              </div>
            </Link>
          ) : <div className="flex-1" />}
          {nextPost ? (
            <Link to={`/blog/${nextPost.slug}`} className="group flex-1 text-right">
              <div className="font-mono text-xs text-grey mb-1">Older →</div>
              <div className="font-sans text-sm text-white group-hover:text-electricBlue group-hover:underline transition-colors duration-200">
                {nextPost.title}
              </div>
            </Link>
          ) : <div className="flex-1" />}
        </div>
      )}
    </article>
  );
};

export default BlogPost;
