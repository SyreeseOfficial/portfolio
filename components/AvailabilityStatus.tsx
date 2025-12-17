import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';

// ------------------------------------------------------------------
// STATUS CONFIGURATION
// Toggle this variable to: 'available' | 'limited' | 'full'
// ------------------------------------------------------------------
type Status = 'available' | 'limited' | 'full';
const CURRENT_STATUS: Status = 'available';

export const AvailabilityStatus: React.FC = () => {
  
  const statuses = [
    {
      id: 'available',
      label: "OPERATIONAL // ACCEPTING NEW CLIENTS",
      // Gradient for the dot
      color: "bg-gradient-to-r from-blue-400 to-pink-400",
      // Gradient text effect similar to the gallery link
      textColor: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 font-bold",
      glowColor: "shadow-[0_0_15px_rgba(59,130,246,0.5)]"
    },
    {
      id: 'limited',
      label: "HIGH TRAFFIC // 1 SLOT REMAINING",
      color: "bg-amber-500",
      textColor: "text-amber-400",
      glowColor: "shadow-[0_0_10px_rgba(245,158,11,0.5)]"
    },
    {
      id: 'full',
      label: "CAPACITY REACHED // WAITLIST ACTIVE",
      color: "bg-red-500",
      textColor: "text-red-400",
      glowColor: "shadow-[0_0_10px_rgba(239,68,68,0.5)]"
    }
  ];

  return (
    // Updated container to match ContactCard width (max-w-2xl mx-auto)
    <div className="mb-24 max-w-2xl mx-auto w-full">
      <GlassCard className="p-0 relative overflow-hidden group w-full">
        
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/5 bg-white/[0.02]">
           <div className="flex items-center gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
             <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
               Syreese's Availability
             </span>
           </div>
           <span className="font-mono text-[10px] text-white/10 pl-8">
             V2.0.4
           </span>
        </div>

        {/* Status List */}
        <div className="p-5 flex flex-col gap-3">
          {statuses.map((status) => {
            const isActive = CURRENT_STATUS === status.id;
            
            return (
              <div 
                key={status.id}
                className={`
                  flex items-center gap-3 transition-all duration-500
                  ${isActive ? 'opacity-100' : 'opacity-30 grayscale hover:opacity-50'}
                `}
              >
                {/* Indicator */}
                <div className="relative flex h-2 w-2 flex-shrink-0 items-center justify-center">
                  {isActive && (
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status.color}`}></span>
                  )}
                  <span 
                    className={`
                      relative inline-flex rounded-full h-2 w-2 transition-colors duration-300
                      ${isActive ? status.color : 'bg-white/20'}
                      ${isActive ? status.glowColor : ''}
                    `}
                  ></span>
                </div>

                {/* Text */}
                <span className={`
                  font-mono text-xs tracking-wider font-medium whitespace-nowrap transition-colors duration-300
                  ${isActive ? status.textColor : 'text-white/60'}
                `}>
                  {status.label}
                </span>

                {/* Active Cursor Decoration - Color matches the first color of gradient if active, or current text color */}
                {isActive && (
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-1 w-1.5 h-3 bg-blue-400 opacity-50 block"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Subtle Scanline Texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(transparent 50%, rgba(255,255,255,0.1) 50%)',
            backgroundSize: '100% 4px'
          }}
        />
      </GlassCard>
    </div>
  );
};