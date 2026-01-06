import React from 'react';
import { Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 text-center relative">
      <div className="max-w-4xl space-y-8 flex-grow flex flex-col justify-center">

        <div>
          {/* Reduced font size from 5xl/7xl/8xl to 4xl/6xl/7xl */}

          <h1
            className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-fade-in-up opacity-0"
            style={{ animationDelay: "500ms" }}
          >
            Hard work, <br className="hidden md:block" />
            translated to the web.
          </h1>

          <p
            className="font-sans text-grey text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up opacity-0"
            style={{ animationDelay: "1000ms" }}
          >
            A digital{" "}
            <span className="inline-block">
              {"builder".split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0"
                  style={{
                    animation: `builder-rise 0.4s ease-out forwards`,
                    animationDelay: `${index * 0.05 + 1.5}s`, // Stagger effect starting after text fade in (1000ms + 0.5s duration)
                  }}
                >
                  {char}
                </span>
              ))}
            </span>{" "}
            with a blue-collar backbone.
          </p>

          <div
            className="pt-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: "1500ms" }}
          >
            <a
              href="/Syreese_Resume.pdf"
              className="inline-flex items-center gap-2 bg-electricBlue text-white font-sans font-medium px-8 py-3 rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>

      </div>

      <div
        className="absolute bottom-8 animate-fade-in-up opacity-0"
        style={{ animationDelay: "2000ms" }}
      >
        <div className="animate-bounce text-grey">
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;