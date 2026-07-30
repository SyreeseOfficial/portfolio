import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../../data';
import { Project } from '../../types';
import ScrollReveal from '../ScrollReveal';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center justify-between">

      {/* Text Details Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left order-2 md:order-1">

        <h3 className="font-serif italic text-3xl md:text-4xl text-white mb-4 leading-tight">{project.title}</h3>



        <p className="font-sans text-grey text-base mb-8 leading-relaxed">
          {project.summary}
        </p>

        <Link
          to={`/project/${project.id}`}
          className="group inline-flex items-center gap-2 font-mono text-xs text-white hover:text-electricBlue transition-colors duration-200"
        >
          View
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Media / Video Side (Smaller now) */}
      <div className="w-full md:w-5/12 order-1 md:order-2">
        <Link to={`/project/${project.id}`} className="block relative aspect-video bg-white/5 rounded-md overflow-hidden group">
          {/* Simulated Laptop Frame/Container */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            {project.videoUrl ? (
              <img
                src={project.videoUrl}
                alt={`${project.title} Preview`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="font-serif text-4xl text-white/10">{project.title.charAt(0)}</span>
                <span className="font-mono text-white/20 text-xs uppercase tracking-widest">Coming Soon</span>
              </div>
            )}
          </div>
        </Link>
      </div>

    </div>
  );
};

const ProjectSection: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col">
        <ScrollReveal>
          <div className="flex items-baseline gap-4 mb-12">
            <h2 className="font-mono text-electricBlue text-sm uppercase tracking-wider">Projects</h2>
            <span className="font-mono text-xs text-grey">3 of {PROJECTS.length} shown</span>
          </div>
        </ScrollReveal>
        <div className="flex flex-col space-y-32">
          {PROJECTS.slice(0, 3).map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 150}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="mt-20 pt-8 flex justify-center">
        <Link
          to="/projects"
          className="group flex items-center gap-2 text-offWhite font-mono text-sm hover:text-electricBlue transition-colors duration-200"
        >
          View All Projects
          <ArrowRight size={16} className="group-hover:translate-x-1 animate-wiggle transition-transform duration-200" />
        </Link>
      </div>
    </section>
  );
};

export default ProjectSection;