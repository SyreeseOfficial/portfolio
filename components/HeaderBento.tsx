import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { ArrowUpRight, Instagram, Mail, Music, Activity, Calendar } from 'lucide-react';
import { ARTISTS } from '../constants';

// --- Listening Logic ---
const useListening = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ARTISTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return ARTISTS[index];
};

const XIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const HeaderBento: React.FC = () => {
  const currentArtist = useListening();

  // Availability Configuration
  const statuses = [
    { id: 'open', label: 'Accepting' },
    { id: 'limited', label: '1 Slot Left' },
    { id: 'full', label: 'Waitlist' }
  ];
  const activeStatus = 'limited';

  return (
    <section className="mb-32">
      <h2 className="text-3xl font-bold mb-10 text-white/90">Welcome</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* 1. LISTENING TO (1x1) */}
        <div className="md:col-span-1 min-h-[240px]">
          <a
            href="https://music.apple.com/profile/syreeseofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <GlassCard className="h-full p-8 flex flex-col justify-between relative group overflow-hidden bg-black/40">
              {/* Dynamic Background - Peach Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#ffbd59]/10 blur-[60px] rounded-full group-hover:bg-[#ffbd59]/20 transition-colors duration-500" />

              {/* Header: Icon Top Left */}
              <div className="relative z-10 flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
                  <Music className="w-5 h-5 text-[#ffbd59]" />
                </div>
              </div>

              {/* Content: Artist Name & Visualizer */}
              <div className="relative z-10 mt-auto pt-6">
                <h3 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-4">
                  Currently Listening To
                </h3>

                <div className="relative overflow-hidden mb-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentArtist}
                      initial={{ y: 10, opacity: 0, filter: 'blur(5px)' }}
                      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                      exit={{ y: -10, opacity: 0, filter: 'blur(5px)' }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <span className="text-2xl font-bold text-white leading-tight block tracking-tight">
                        {currentArtist}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Visualizer - Bottom Left */}
                <div className="flex gap-1 h-5 items-end">
                  {[1, 2, 3, 4].map(i => (
                    <motion.div
                      key={i}
                      className="w-1.5 bg-gradient-to-t from-[#ff3131] to-[#ffbd59] rounded-full opacity-80"
                      animate={{ height: [6, 20, 8, 16, 6] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                    />
                  ))}
                </div>
              </div>
            </GlassCard>
          </a>
        </div>

        {/* 2. CONTACT CARD (1x2) */}
        <div className="md:col-span-2 min-h-[240px]">
          <GlassCard className="h-full p-0 relative overflow-hidden flex flex-col justify-center group bg-black/40">
            {/* Dynamic Background - Red Blob */}
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-[#ff3131]/10 blur-[80px] rounded-full group-hover:bg-[#ff3131]/20 transition-colors duration-500" />

            <div className="flex flex-col md:flex-row h-full relative z-10">

              {/* Left Section: Profile */}
              <div className="p-8 flex flex-col justify-center md:w-3/5 border-b md:border-b-0 border-white/5 bg-transparent">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 text-center sm:text-left">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-2xl backdrop-blur-sm overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <img src="/syreese.png" alt="Syreese DS" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center h-full pt-2">
                    <div className="text-xs font-bold tracking-[0.2em] text-[#ff3131] uppercase mb-2">Builder</div>
                    <h2 className="text-3xl font-bold text-white tracking-tight leading-none">Syreese DS</h2>
                  </div>
                </div>

                <a
                  href="https://orthostar.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group text-sm font-medium"
                >
                  <div className="w-2 h-2 rounded-full bg-[#ff3131] animate-pulse" />
                  orthostar.org
                  <ArrowUpRight className="w-3 h-3 text-white/30 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>

              {/* Right Section: Actions */}
              <div className="p-8 flex flex-col justify-center gap-4 md:w-2/5 bg-transparent">
                <div className="space-y-3">
                  <a href="https://twitter.com/hisyre" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all group backdrop-blur-sm">
                    <span className="text-xs font-medium text-white/60 group-hover:text-white">Twitter</span>
                    <XIcon className="w-4 h-4 text-white/40 group-hover:text-[#ffbd59]" />
                  </a>
                  <a href="https://instagram.com/SyreeseFit" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all group backdrop-blur-sm">
                    <span className="text-xs font-medium text-white/60 group-hover:text-white">Instagram</span>
                    <Instagram className="w-4 h-4 text-white/40 group-hover:text-[#ffbd59]" />
                  </a>
                </div>

                <a
                  href="mailto:contact@orthostar.org"
                  className="flex items-center justify-center gap-2 bg-white text-black px-4 py-3 rounded-lg text-sm font-bold hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-white transition-all duration-300 mt-2 active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </a>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* 3. AVAILABILITY STATUS (1x3) */}
        <div className="md:col-span-3">
          <GlassCard className="p-0 relative overflow-hidden bg-black/40 group">
            {/* Subtle gradient wash */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff3131]/5 via-transparent to-[#ffbd59]/5 opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            <div className="px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              {/* Left: Identity */}
              <div className="flex items-center gap-5 w-full md:w-auto">
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md">
                  <Activity className="w-5 h-5 text-[#ff3131]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-white tracking-tight">Availability</h3>
                  <span className="text-sm text-white/40 font-medium">Wanna work with me?</span>
                </div>
              </div>

              {/* Right: Horizontal Status List + Booking Element */}
              <div className="flex-1 w-full md:w-auto flex flex-col md:flex-row items-center justify-end gap-4">
                <div className="flex items-center gap-1 md:gap-4 bg-white/5 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
                  {statuses.map((status) => {
                    const isActive = activeStatus === status.id;
                    return (
                      <div
                        key={status.id}
                        className={`
                              relative px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300
                              ${isActive ? 'bg-white/10 shadow-lg' : 'hover:bg-white/5'}
                            `}
                      >
                        {isActive && (
                          <div className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffbd59] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffbd59]"></span>
                          </div>
                        )}
                        <span className={`
                              text-xs font-bold uppercase tracking-wider whitespace-nowrap
                              ${isActive
                            ? 'text-[#ffbd59]'
                            : 'text-white/20'}
                            `}>
                          {status.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Booking Element */}
                <a
                  href="https://calendly.com/syreeseofficial/short-chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md transition-all group/cal hover:scale-110 active:scale-95 shadow-lg"
                  title="Book a short chat"
                >
                  <Calendar className="w-5 h-5 text-white/40 group-hover/cal:text-[#ffbd59] transition-colors" />
                </a>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>
    </section>
  );
};