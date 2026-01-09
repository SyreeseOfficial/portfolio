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

                <div className="border-t border-darkGrey">
                    {PROJECTS.map((project, index) => (
                        <Link
                            key={project.id}
                            to={`/project/${project.id}`}
                            state={{ from: 'archive' }}
                            className="group block border-b border-darkGrey py-8 transition-colors duration-300 px-4 -mx-4 rounded-lg"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-serif text-white group-hover:text-electricBlue transition-colors duration-300 flex items-center gap-2">
                                        {project.title}
                                        <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-electricBlue" />
                                    </h3>
                                    <p className="text-grey mt-1">{project.summary}</p>
                                </div>
                                <div className="text-grey font-mono text-sm md:text-base whitespace-nowrap">
                                    {project.year}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
