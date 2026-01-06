import React from 'react';
import { Youtube, Instagram, Mail, Github, Linkedin } from 'lucide-react';
import MusicWidget from '../MusicWidget';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left Side: Copyright + Music */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <p className="font-mono text-xs text-grey">
            Syreese Delos Santos &copy; 2026
          </p>
          <MusicWidget />
        </div>

        {/* Right Side: Icons */}
        <div className="flex items-center space-x-6">
          <a href="https://www.youtube.com/@SyreeseDelosSantos" target="_blank" rel="noopener noreferrer" className="text-grey hover:text-electricBlue transition-colors">
            <Youtube size={20} />
            <span className="sr-only">YouTube</span>
          </a>
          <a href="https://www.instagram.com/syreesefit" target="_blank" rel="noopener noreferrer" className="text-grey hover:text-electricBlue transition-colors">
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://github.com/SyreeseOfficial" target="_blank" rel="noopener noreferrer" className="text-grey hover:text-electricBlue transition-colors">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://x.com/hisyre" target="_blank" rel="noopener noreferrer" className="text-grey hover:text-electricBlue transition-colors">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-5 h-5 fill-current"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="sr-only">X (Twitter)</span>
          </a>
          <a href="https://www.linkedin.com/in/syreese/" target="_blank" rel="noopener noreferrer" className="text-grey hover:text-electricBlue transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:syreeseofficial@gmail.com" className="text-grey hover:text-electricBlue transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;