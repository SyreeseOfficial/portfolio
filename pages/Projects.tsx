import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data';
import { ProjectTag } from '../types';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

const TAGS: ProjectTag[] = ['SaaS', 'CLI / Tools', 'Mobile', 'Community'];

const Projects: React.FC = () => {
    const [activeTag, setActiveTag] = useState<ProjectTag | null>(null);
    const filtered = activeTag ? PROJECTS.filter(p => p.tag === activeTag) : PROJECTS;

    return (
        <div className="min-h-screen bg-black text-offWhite px-6 py-20 md:py-32 animate-fade-in">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12 md:mb-20">
                    <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs text-grey hover:text-electricBlue transition-colors mb-8">
                        <ArrowLeft size={14} />
                        BACK TO HOME
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-serif italic text-white mb-6">
                        Project Archive
                    </h1>
                    <p className="text-lg text-grey max-w-xl">
                        A complete directory of selected works, experiments, and tools built over the years.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Sidebar filter */}
                    <aside className="md:w-32 shrink-0">
                        <div className="flex flex-row md:flex-col gap-4 md:gap-3 flex-wrap">
                            <button
                                onClick={() => setActiveTag(null)}
                                className={`text-left font-mono text-xs uppercase tracking-widest transition-colors ${!activeTag ? 'text-white' : 'text-grey hover:text-white'}`}
                            >
                                All
                            </button>
                            {TAGS.map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => setActiveTag(tag)}
                                    className={`text-left font-mono text-xs uppercase tracking-widest transition-colors ${activeTag === tag ? 'text-white' : 'text-grey hover:text-white'}`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Project grid */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                        {filtered.map((project) => (
                            <Link
                                key={project.id}
                                to={`/project/${project.id}`}
                                state={{ from: 'archive' }}
                                className="group block"
                            >
                                <div className={`relative aspect-video overflow-hidden rounded-md mb-6 border border-white/5 ${project.coverUrl ? 'shimmer' : 'bg-white/5'}`}>
                                    {project.coverUrl ? (
                                        <img
                                            src={project.coverUrl}
                                            alt={project.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="font-mono text-white/20 text-xs uppercase tracking-widest">Coming Soon</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                                </div>

                                <div>
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <h3 className="text-3xl md:text-4xl font-serif italic text-white group-hover:text-electricBlue transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-3">
                                            <span className="font-mono text-sm text-grey pt-2">{project.year}</span>
                                            <ArrowUpRight size={24} className="text-grey group-hover:text-electricBlue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                        </div>
                                    </div>
                                    <p className="text-grey text-lg leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.summary}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
