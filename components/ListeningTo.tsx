import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music } from 'lucide-react';
import { ARTISTS } from '../constants';

export const ListeningTo: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ARTISTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-24 flex flex-col items-center w-full">
       <h3 className="text-sm font-medium tracking-[0.2em] text-white/40 mb-8 uppercase text-center">
         Currently Listening To
       </h3>
       
       <div className="
          relative
          inline-flex items-center gap-4
          bg-white/[0.03]
          border border-white/[0.08]
          backdrop-blur-xl
          rounded-full
          p-2 pr-10
          shadow-[0_0_30px_rgba(0,0,0,0.2)]
       ">
          {/* Icon Circle */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
            <Music className="w-5 h-5 md:w-6 md:h-6 text-brand-pink" />
          </div>

          {/* Text Area */}
          <div className="h-8 md:h-10 relative flex items-center min-w-[180px] md:min-w-[240px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-0 flex items-center"
              >
                <span className="text-lg md:text-xl text-white/90 font-medium whitespace-nowrap">
                  {ARTISTS[index]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
       </div>
    </div>
  );
};