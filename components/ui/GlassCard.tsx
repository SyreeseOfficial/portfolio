import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  onClick,
  hoverEffect = true 
}) => {
  return (
    <motion.div 
      className={`
        backdrop-blur-xl 
        bg-white/[0.03] 
        border border-white/[0.08] 
        rounded-2xl 
        overflow-hidden
        relative
        ${className}
      `}
      whileHover={hoverEffect ? { 
        y: -4,
        backgroundColor: "rgba(255, 255, 255, 0.07)",
        borderColor: "rgba(255, 255, 255, 0.2)"
      } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
    >
      <div className="relative z-10 h-full">
        {children}
      </div>
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />
    </motion.div>
  );
};