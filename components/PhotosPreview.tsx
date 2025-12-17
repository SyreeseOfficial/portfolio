import React from 'react';
import { motion } from 'framer-motion';

export const PhotosPreview: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-3xl font-bold text-white/90">Photos</h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="group relative flex flex-col flex-1 bg-[#050505] rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors duration-500"
      >
        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="text-xs font-mono text-white/30">
            //syreese/photos
          </div>
        </div>

        <div className="p-10 flex flex-col h-full relative z-10">
          <div className="grid grid-cols-2 gap-4 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="aspect-square bg-white/[0.02] rounded-lg overflow-hidden relative group/image cursor-pointer border border-white/5"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover/image:opacity-5 transition-opacity duration-200" />
              </div>
            ))}
          </div>
          
          <div className="mt-auto font-mono text-sm space-y-2 text-white/70">
            <p className="font-sans text-white/50 text-base leading-relaxed pt-2">
              A collection of moments and stories captured by my lens.
            </p>
            
            <div className="pt-4">
                <a href="https://instagram.com/SyreeseFit" target="_blank" rel="noopener noreferrer" className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ff3131] to-[#ffbd59] font-semibold hover:opacity-80 transition-opacity">
                [ Instagram ]
                </a>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-transparent"
             style={{
               background: 'linear-gradient(90deg, #ff3131, #ffbd59) border-box',
               WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude'
             }}
        />
      </motion.div>
    </div>
  );
};