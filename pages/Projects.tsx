import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

const Projects: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-offWhite px-6 py-20 md:py-32">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 md:mb-20">
                    <Link to="/" className="inline-flex items-center text-grey hover:text-white transition-colors duration-200 mb-8 group">
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-serif italic text-white mb-6">
                        Project Archive
                    </h1>
                    <p className="text-lg text-grey max-w-xl">
                        A complete directory of selected works, experiments, and tools built over the years.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {PROJECTS.map((project, index) => (
                        <Link
                            key={project.id}
                            to={`/project/${project.id}`}
                            state={{ from: 'archive' }}
                            className="group block"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-video overflow-hidden rounded-lg mb-6 bg-white/5 border border-white/5">
                                <img
                                    src={project.videoUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                            </div>

                            {/* Content */}
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
    );
};

export default Projects;
