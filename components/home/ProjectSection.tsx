import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../../data';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center justify-between mb-32 last:mb-0">

      {/* Text Details Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left order-2 md:order-1">
        <div className="font-mono text-electricBlue text-xs mb-3">{project.year}</div>
        <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight">{project.title}</h3>



        <p className="font-sans text-grey text-base mb-8 leading-relaxed">
          {project.summary}
        </p>

        <Link
          to={`/project/${project.id}`}
          className="group inline-flex items-center gap-2 font-mono text-xs text-white hover:text-electricBlue transition-colors duration-200"
        >
          View Case Study
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Media / Video Side (Smaller now) */}
      <div className="w-full md:w-5/12 order-1 md:order-2">
        <div className="relative aspect-video bg-white/5 rounded-sm overflow-hidden group">
          {/* Simulated Laptop Frame/Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Using Image placeholder as per constraints, in real app this would be a <video> tag with autoplay */}
            <img
              src={project.videoUrl}
              alt={`${project.title} Preview`}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

const ProjectSection: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;