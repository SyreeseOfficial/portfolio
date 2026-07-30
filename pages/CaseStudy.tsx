import React, { useEffect } from 'react';
import { useParams, Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data';

const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const isFromArchive = location.state?.from === 'archive' ||
    (!location.state && document.referrer.includes('/projects'));
  const projectIndex = PROJECTS.findIndex((p) => p.id === id);
  const project = PROJECTS[projectIndex];

  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];

  useEffect(() => {
    if (!project) return;
    document.title = `${project.title} — Syreese Delos Santos`;
    const canonical = document.getElementById('canonical') as HTMLLinkElement | null;
    if (canonical) canonical.href = `https://syreese.com/project/${id}`;
    return () => {
      document.title = 'Syreese Delos Santos — Creative Builder';
      if (canonical) canonical.href = 'https://syreese.com';
    };
  }, [project?.title, id]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') navigate(`/project/${nextProject.id}`, { state: location.state });
      if (e.key === 'ArrowLeft') navigate(`/project/${prevProject.id}`, { state: location.state });
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [nextProject.id, prevProject.id, navigate, location.state]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 animate-fade-in">
      {/* Back Nav */}
      <Link
        to={isFromArchive ? "/projects" : "/"}
        className="inline-flex items-center gap-2 font-mono text-xs text-grey hover:text-electricBlue mb-12 transition-colors"
      >
        <ArrowLeft size={14} />
        {isFromArchive ? "BACK TO ARCHIVE" : "BACK TO WORK"}
      </Link>

      {/* Header */}
      <header className="mb-16">
        <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 leading-tight">
          {project.title}
        </h1>
        <p className="font-sans text-xl text-grey mb-8">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          {project.caseStudy.links ? (
            project.caseStudy.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black font-sans font-medium px-6 py-2 rounded-md hover:bg-electricBlueDark hover:text-white transition-colors"
              >
                {link.label} <ExternalLink size={16} />
              </a>
            ))
          ) : project.caseStudy.liveLink ? (
            <a
              href={project.caseStudy.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black font-sans font-medium px-6 py-2 rounded-md hover:bg-electricBlueDark hover:text-white transition-colors"
            >
              {project.caseStudy.ctaLabel || 'Visit Live Site'} <ExternalLink size={16} />
            </a>
          ) : null}


        </div>
      </header>

      {/* Narrative */}
      <div className="space-y-24">

        {/* Section 1: Problem */}
        <section className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="font-mono text-electricBlue text-sm uppercase tracking-widest mb-4">The Problem</h2>
          </div>
          <div className="md:col-span-8">
            <p className="font-sans text-lg md:text-xl text-offWhite leading-relaxed">
              {project.caseStudy.problem}
            </p>
          </div>
        </section>

        {/* Media 1 */}
        {project.caseStudy.images?.[0] && (
          <div className="aspect-video rounded-md overflow-hidden border border-white/10 shimmer">
            <img src={project.caseStudy.images[0]} alt={`${project.title} — problem context screenshot`} loading="lazy" className="w-full h-full object-cover" />
          </div>
        )}

        {/* Section 2: Solution */}
        <section className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="font-mono text-electricBlue text-sm uppercase tracking-widest mb-4">The Solution</h2>
          </div>
          <div className="md:col-span-8">
            <p className="font-sans text-lg md:text-xl text-offWhite leading-relaxed">
              {project.caseStudy.solution}
            </p>
          </div>
        </section>

        {/* Media 2 */}
        {project.caseStudy.images?.[1] && (
          <div className="aspect-video rounded-md overflow-hidden border border-white/10 shimmer">
            <img src={project.caseStudy.images[1]} alt={`${project.title} — solution screenshot`} loading="lazy" className="w-full h-full object-cover" />
          </div>
        )}

        {/* Section 3: Result */}
        <section className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="font-mono text-electricBlue text-sm uppercase tracking-widest mb-4">The Result</h2>
          </div>
          <div className="md:col-span-8">
            <p className="font-sans text-lg md:text-xl text-offWhite leading-relaxed">
              {project.caseStudy.result}
            </p>
          </div>
        </section>

      </div>

      {/* Footer Nav */}
      <div className="mt-32 pt-12 border-t border-white/10 flex justify-end">
        <Link
          to={`/project/${nextProject.id}`}
          state={location.state}
          className="group text-right"
        >
          <span className="font-mono text-xs text-grey block mb-2 group-hover:text-electricBlue transition-colors">Next Project</span>
          <div className="flex items-center gap-3">
            <span className="font-serif italic text-3xl text-white group-hover:underline">
              {nextProject.title}
            </span>
            <ArrowRight className="text-white group-hover:translate-x-2 transition-transform" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CaseStudy;