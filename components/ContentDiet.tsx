import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { ExternalLink } from 'lucide-react';

const INSPIRATIONS = [
  {
    name: "Alex Becker",
    description: "Minimalist software entrepreneur who breaks down building successful software companies to simple steps.",
    url: "https://www.youtube.com/@alexbeckerbusiness",
    image: "alex.png"
  },
  {
    name: "Charlie Morgan",
    description: "Young entrepreneur who uses shadow work to kill the parts of him he doesn't like in order to become a more skilled and better person.",
    url: "https://www.youtube.com/@charliemorganbusiness",
    image: "charlie.png"
  },
  {
    name: "Sam Ovens",
    description: "Completely optimizes every single aspect of his life, no matter how minute, in order to make his company, skool, better.",
    url: "https://www.skool.com/",
    image: "sam.png"
  }
];

const GRADIENT_COLORS = ["#ff3131", "#ffbd59"];

export const ContentDiet: React.FC = () => {
  return (
    <section className="mb-10">
       <h2 className="text-3xl font-bold mb-12 text-white/90">Inspirations</h2>
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSPIRATIONS.map((person, i) => (
             <a
               key={person.name}
               href={person.url}
               target="_blank"
               rel="noopener noreferrer"
               className="h-full block group"
             >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="h-full"
                >
                    <GlassCard className="h-full p-0 relative">
                        <div className="p-10 h-full flex flex-col relative z-10">
                            
                            <div className="flex items-start justify-between mb-10">
                                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-transform duration-300 shadow-inner">
                                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                                </div>
                                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ExternalLink className="w-4 h-4 text-white/40" />
                                </div>
                            </div>

                            <div className="relative z-10 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#ffbd59] transition-all duration-300">
                                    {person.name}
                                </h3>
                                <p className="text-white/50 leading-relaxed text-base group-hover:text-white/70 transition-colors duration-300">
                                    {person.description}
                                </p>
                            </div>
                        </div>

                        <div 
                            className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-transparent"
                            style={{
                                background: `linear-gradient(90deg, ${GRADIENT_COLORS[0]}, ${GRADIENT_COLORS[1]}) border-box`,
                                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude'
                            }}
                        />
                    </GlassCard>
                </motion.div>
             </a>
          ))}
       </div>
    </section>
  );
};