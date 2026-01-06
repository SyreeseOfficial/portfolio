import React from 'react';
import { Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 text-center relative">
      <div className="max-w-4xl space-y-8 animate-fade-in-up flex-grow flex flex-col justify-center">
        
        <div>
          {/* Reduced font size from 5xl/7xl/8xl to 4xl/6xl/7xl */}
          <h1 className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Hard work, <br className="hidden md:block" />
            translated to the web.
          </h1>

          <p className="font-sans text-grey text-lg md:text-xl max-w-2xl mx-auto mb-8">
            A digital builder with a blue-collar backbone.
          </p>
          
          <div className="pt-4">
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center gap-2 bg-electricBlue text-white font-sans font-medium px-8 py-3 rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 animate-bounce text-grey">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;