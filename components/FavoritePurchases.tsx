import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Keyboard, Headphones, Monitor } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

const PURCHASES = [
  {
    id: "1",
    name: "Nuphy Air75 V3",
    type: "Keyboard",
    date: "Nov 2024",
    icon: <Keyboard className="w-24 h-24 stroke-[1px]" />,
    gradient: "from-[#ff3131] to-[#ffbd59]",
    description: "Low profile wireless mech keyboard. Ultimate productivity.",
    url: "https://nuphy.com/products/air75?srsltid=AfmBOor_R_ZA--OP2CsH74t8XbVNN7JrDG7pFdcyszNZifF5X5_ySbx1"
  },
  {
    id: "2",
    name: "Bose QC Ultra 2s",
    type: "Headphones",
    date: "Jan 2025",
    icon: <Headphones className="w-24 h-24 stroke-[1px]" />,
    gradient: "from-[#ffbd59] to-[#ff3131]",
    description: "Block out any and all noises for ultimate focus.",
    url: "https://www.bose.com/p/headphones/bose-quietcomfort-ultra-headphones-2nd-gen/QCUH2-HEADPHONEARN.html?srsltid=AfmBOorAsUwRLlTBKyoHnGwaiDouCwq_-zBSQFL_-ixIZnXvHSO5Dgq0"
  },
  {
    id: "3",
    name: "Samsung 49\" Ultra Wide",
    type: "Monitor",
    date: "Aug 2023",
    icon: <Monitor className="w-24 h-24 stroke-[1px]" />,
    gradient: "from-[#ff3131] to-[#ffbd59]",
    description: "Never switch tabs again. 5 windows on 1 screen.",
    url: "https://www.samsung.com/africa_en/monitors/gaming/odyssey-crg9-49-inch-120hz-freesync-curved-lc49rg90ssrxen/"
  }
];

export const FavoritePurchases: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const activeItem = PURCHASES.find(p => p.id === hoveredId);

  return (
    <section className="mb-10">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white/90">Top 3 Purchases</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <GlassCard className="p-0 overflow-hidden flex flex-col" hoverEffect={false}>
            <div className="hidden md:grid grid-cols-[2fr_1fr_1fr] gap-4 px-6 py-4 border-b border-white/5 bg-white/[0.02]">
              <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Item</div>
              <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Type</div>
              <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest text-right">Acquired</div>
            </div>

            <div className="flex flex-col">
              {PURCHASES.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] gap-4 px-6 py-8 border-b border-white/5 last:border-0 cursor-pointer transition-all duration-300 no-underline"
                >
                  <div className={`absolute inset-0 bg-white/[0.04] transition-opacity duration-300 ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'}`} />
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.gradient} transition-opacity duration-300 ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'}`} />

                  <div className="text-lg font-bold text-white group-hover:text-white transition-colors relative z-10 truncate">
                    {item.name}
                  </div>

                  <div className="flex items-center relative z-10">
                    <span className="relative group/tag px-3 py-1.5 rounded bg-white/5 border border-white/5 text-[10px] font-medium text-white/50 group-hover:text-white/80 transition-colors overflow-hidden">
                      {item.type}
                      {/* Tag Hover Border Gradient */}
                      <div className="absolute inset-0 rounded pointer-events-none opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300 border border-transparent"
                        style={{
                          background: 'linear-gradient(90deg, #ff3131, #ffbd59) border-box',
                          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude'
                        }}
                      />
                    </span>
                  </div>

                  <div className="text-right text-xs flex items-center justify-end relative z-10">
                    <span className="font-bold text-white/30 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ff3131] group-hover:to-[#ffbd59] transition-all duration-300">
                      {item.date}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="hidden lg:block w-[400px] shrink-0">
          <GlassCard className="h-full p-10 flex flex-col items-center justify-center text-center relative overflow-hidden" hoverEffect={false}>
            <AnimatePresence mode="wait">
              {activeItem ? (
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative z-10 flex flex-col items-center justify-center h-full"
                >
                  <div className="mb-8 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${activeItem.gradient} blur-[60px] opacity-30 rounded-full`} />
                    <div className="relative text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      {React.cloneElement(activeItem.icon as React.ReactElement, { className: "w-24 h-24 stroke-[1px]" })}
                    </div>
                  </div>

                  <p className="text-lg text-white/80 font-medium leading-relaxed max-w-[300px]">
                    {activeItem.description}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-white/20 h-full"
                >
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-white/10 mb-6 animate-spin-slow flex-shrink-0" />
                  <span className="text-sm font-medium tracking-widest uppercase">Select an item</span>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};