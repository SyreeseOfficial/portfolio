import React from 'react';
import { Youtube, Instagram, Mail, Github, Twitter, Linkedin } from 'lucide-react';
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
          <a href="#" className="text-grey hover:text-electricBlue transition-colors">
            <Youtube size={20} />
            <span className="sr-only">YouTube</span>
          </a>
          <a href="#" className="text-grey hover:text-electricBlue transition-colors">
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-grey hover:text-electricBlue transition-colors">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-grey hover:text-electricBlue transition-colors">
            <Twitter size={20} />
            <span className="sr-only">X (Twitter)</span>
          </a>
          <a href="#" className="text-grey hover:text-electricBlue transition-colors">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:user@example.com" className="text-grey hover:text-electricBlue transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;