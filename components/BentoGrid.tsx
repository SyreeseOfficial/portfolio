import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { BENTO_ITEMS } from '../constants';
import { Users, MousePointer2, Dumbbell, Star, BarChart3 } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  
  const iconClass = "w-6 h-6"; // Adjusted size

  const getIcon = (type: string) => {
    switch(type) {
      case 'community': return <Users className={`${iconClass} text-white/40 group-hover:text-white/60 transition-colors`} />;
      case 'extension': return <MousePointer2 className={`${iconClass} text-white/40 group-hover:text-white/60 transition-colors`} />;
      case 'boxing': return <Dumbbell className={`${iconClass} text-white/40 group-hover:text-white/60 transition-colors`} />;
      case 'fitness': return <BarChart3 className={`${iconClass} text-white/40 group-hover:text-white/60 transition-colors`} />;
      case 'review': return <Star className={`${iconClass} text-white/40 group-hover:text-white/60 transition-colors`} />;
      default: return null;
    }
  };

  const getGridClass = (size: string) => {
    switch(size) {
      case '1x1': return 'md:col-span-1 md:row-span-1 min-h-[220px]'; 
      case '1x2': return 'md:col-span-2 md:row-span-1 min-h-[220px]'; 
      case '2x1': return 'md:col-span-1 md:row-span-2 min-h-[460px]';
      case '3x1': return 'md:col-span-3 md:row-span-1 min-h-[220px]';
      default: return 'col-span-1';
    }
  };

  return (
    <section className="mb-32">
      <h2 className="text-3xl font-bold mb-10 text-white/90">Working On</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
        {BENTO_ITEMS.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={getGridClass(item.size)}
          >
            <GlassCard className="h-full relative overflow-hidden group" hoverEffect={false}>
              {/* Inner container with padding */}
              <div className="p-6 h-full flex flex-col relative z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                   <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-white/20 transition-colors backdrop-blur-md shadow-lg">
                      {getIcon(item.type)}
                   </div>
                </div>
                
                {/* Content Group */}
                <div className="flex flex-col h-full">
                  <div className="mb-3">
                     <h3 className="text-xl font-bold text-white group-hover:text-[#ffbd59] transition-colors mb-1">
                       {item.title}
                     </h3>
                  </div>
                  
                  <div className="text-sm text-white/60 leading-relaxed mb-4 flex-grow">
                    {item.description}
                  </div>
                </div>
              </div>

              {/* Hover Border Gradient - Exactly at the edge */}
              <div 
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-transparent"
                  style={{
                    background: 'linear-gradient(90deg, #ff3131, #ffbd59) border-box',
                    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                  }}
              />

              {/* Decorative background elements */}
              {item.type === 'fitness' && (
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffbd59]/10 blur-[50px] rounded-full pointer-events-none" />
              )}
               {item.type === 'extension' && (
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff3131]/5 blur-[80px] rounded-full pointer-events-none" />
              )}
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};