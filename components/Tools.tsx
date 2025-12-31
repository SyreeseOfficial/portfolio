import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { TOOLS } from '../constants';
import { ToolCategory } from '../types';

export const Tools: React.FC = () => {
  const categories = Object.values(ToolCategory);
  const [activeTab, setActiveTab] = useState<ToolCategory>(ToolCategory.PhotoEditing);

  const filteredTools = TOOLS.filter(t => t.category === activeTab);

  return (
    <section className="mb-32">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white/90">Favorite Tools</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row gap-8"
      >
        {/* Tabs - Mobile horizontal scroll / Desktop vertical list */}
        <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 lg:w-1/4 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`
                px-4 py-3 rounded-xl text-left text-sm font-medium whitespace-nowrap transition-all duration-300
                border border-transparent
                ${activeTab === category
                  ? 'bg-white/10 text-white border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]'
                  : 'text-white/40 hover:text-white/80 hover:bg-white/5'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 min-h-[300px]">
          <GlassCard className="p-5 md:p-8 h-full" hoverEffect={false}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                {filteredTools.length > 0 ? (
                  filteredTools.map((tool, idx) => (
                    <a
                      key={idx}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                         relative
                         group
                         px-5 py-3 
                         bg-black/40 
                         border border-white/10 
                         rounded-lg 
                         text-white/80 
                         transition-all duration-300
                         hover:bg-white/10
                         hover:text-white
                         hover:-translate-y-1
                       "
                    >
                      <span className="relative z-10">{tool.name}</span>
                      {/* Hover Border Gradient */}
                      <div className="absolute inset-0 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-transparent"
                        style={{
                          background: 'linear-gradient(90deg, #ff3131, #ffbd59) border-box',
                          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude'
                        }}
                      />
                      {/* Hover Shadow Gradient */}
                      <div className="absolute inset-0 rounded-lg pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg bg-gradient-to-r from-[#ff3131] to-[#ffbd59]" />
                    </a>
                  ))
                ) : (
                  <p className="text-white/40">No tools listed for this category.</p>
                )}
              </motion.div>
            </AnimatePresence>
          </GlassCard>
        </div>
      </motion.div>
    </section>
  );
};