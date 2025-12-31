import React from 'react';
import { Twitter, Youtube, Instagram, Github, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const links = [
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/hisyre' },
    { name: 'YouTube', icon: <Youtube className="w-5 h-5" />, href: 'https://www.youtube.com/@SyreeseDelosSantos' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/Syreesefit' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/SyreeseOfficial' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:syreeseofficial@gmail.com' },
  ];

  return (
    <footer id="footer" className="py-20 border-t border-white/5 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">

        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
            >
              <span className="group-hover:text-[#ffbd59] transition-colors duration-300">
                {link.icon}
              </span>
              <span className="hidden md:inline group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ff3131] group-hover:to-[#ffbd59]">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        <div className="text-white/40 text-sm font-light">
          Syreese Delos Santos © 2025
        </div>
      </div>
    </footer>
  );
};