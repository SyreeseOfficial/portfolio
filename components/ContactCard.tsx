import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { Instagram, Mail, ArrowUpRight, User } from 'lucide-react';

const XIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const ContactCard: React.FC = () => {
  return (
    <section className="mb-6 max-w-2xl mx-auto">
      <GlassCard className="p-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          
          {/* Left Side Group (Avatar + Identity) */}
          <div className="flex flex-col items-start gap-4">
             {/* Avatar */}
             <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <User className="w-6 h-6 text-white/40" />
             </div>
             
             {/* Info */}
             <div className="flex flex-col gap-0.5">
               <h3 className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">Builder</h3>
               <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Syreese Delos Santos</h2>
               <a 
                 href="https://orthostar.org" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-1 text-white/60 hover:text-blue-400 transition-colors group text-sm font-medium"
               >
                 orthostar
                 <ArrowUpRight className="w-3 h-3 text-white/40 group-hover:text-blue-400 transition-colors" />
               </a>
             </div>
          </div>

          {/* Right Side Group (Socials + CTA) */}
          {/* justify-between ensures Socials stick to top and Button sticks to bottom */}
          <div className="flex flex-col items-start md:items-end justify-between gap-4">
             {/* Socials */}
             <div className="flex flex-col gap-2 pt-1">
                <a href="https://twitter.com/hisyre" target="_blank" rel="noopener noreferrer" className="flex items-center md:justify-end gap-3 text-white/50 hover:text-white transition-colors group text-sm">
                   <XIcon className="w-4 h-4" />
                   <span className="font-medium group-hover:text-white transition-colors">@hisyre</span>
                </a>
                <a href="https://instagram.com/SyreeseFit" target="_blank" rel="noopener noreferrer" className="flex items-center md:justify-end gap-3 text-white/50 hover:text-white transition-colors group text-sm">
                   <Instagram className="w-4 h-4" />
                   <span className="font-medium group-hover:text-pink-400 transition-colors">@SyreeseFit</span>
                </a>
             </div>

             {/* Button */}
             <a 
               href="mailto:contact@orthostar.org" 
               className="
                 w-full md:w-auto
                 flex items-center justify-center gap-2
                 bg-white text-black 
                 px-5 py-2
                 rounded-lg 
                 text-sm
                 font-semibold 
                 hover:bg-gray-200 
                 transition-transform 
                 active:scale-95
               "
             >
               <Mail className="w-4 h-4" />
               Contact Me
             </a>
          </div>

        </div>
      </GlassCard>
    </section>
  );
};