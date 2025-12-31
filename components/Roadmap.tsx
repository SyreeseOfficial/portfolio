import React from 'react';
import { motion } from 'framer-motion';
import { ROADMAP } from '../constants';

export const Roadmap: React.FC = () => {
  return (
    <section className="mb-10 relative pt-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Roadmap</h2>
        <p className="text-white/40 max-w-lg mx-auto text-base md:text-lg">
          This roadmap outlines my goals and where I want to take my journey as a builder and creator.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* The Vertical Line Container */}
        <div className="absolute left-[3px] md:left-[3px] top-0 bottom-0 w-[2px] bg-white/[0.05] overflow-hidden rounded-full">
          {/* Beam Animation */}
          <motion.div
            className="w-full h-[100px] bg-gradient-to-b from-transparent via-[#ff3131] to-transparent box-shadow-[0_0_20px_rgba(255,49,49,0.5)]"
            animate={{ top: ['-20%', '120%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="space-y-16 pl-12 relative">
          {ROADMAP.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-49px] md:left-[-49px] top-2 z-10">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-[#ff3131] rounded-full shadow-[0_0_12px_rgba(255,49,49,0.5)] group-hover:scale-150 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[#ff3131]/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 duration-1000" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#ffbd59] transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-base mt-2 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="flex-shrink-0 pt-1.5">
                  <span className={`text-sm font-mono uppercase tracking-wider transition-colors duration-300 ${item.date === "Current"
                      ? "font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff3131] to-[#ffbd59]"
                      : "text-white/30 group-hover:text-white/60"
                    }`}>
                    {item.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
