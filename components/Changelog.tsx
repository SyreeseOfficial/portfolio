import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { GitCommit, Terminal, Sparkles, Rocket } from 'lucide-react';

const LOGS = [
  {
    date: "12-12-25",
    text: "Had idea to update portfolio site",
    type: "event",
    isFuture: false
  },
  {
    date: "12-17-25",
    text: "Finished v1 of new site",
    type: "milestone",
    isFuture: false
  },
  {
    date: "12-18-25",
    text: "Deployed using GitHub and Vercel",
    type: "deployment",
    isFuture: false
  },
  {
    date: "Future",
    text: "Add a \"Killed Projects\" section",
    type: "roadmap",
    isFuture: true
  },
  {
    date: "Future",
    text: "Add \"Bucket List\" section",
    type: "roadmap",
    isFuture: true
  },
  {
    date: "Future",
    text: "Add live stats section that shares my health tracking stats live: steps, cal burned, sleep, etc",
    type: "roadmap",
    isFuture: true
  },
];

export const Changelog: React.FC = () => {
  return (
    <section className="mb-10">
      <div className="mb-12 flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-white/90">Changelog</h2>
        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
          <div className="w-1.5 h-1.5 rounded-full bg-[#ff3131] animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Live Logs</span>
        </div>
      </div>

      <GlassCard className="p-0 overflow-hidden" hoverEffect={true}>
        {/* Header bar */}
        <div className="px-6 py-3 border-b border-white/5 bg-white/[0.02] flex items-center gap-2">
          <Terminal className="w-4 h-4 text-white/20" />
          <span className="font-mono text-xs text-white/20 uppercase tracking-tighter">system_logs/portfolio.v2</span>
        </div>

        <div className="p-6 space-y-4">
          {LOGS.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.02)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 group p-4 -mx-4 rounded-xl transition-all"
            >
              {/* Vertical line and dot logic */}
              <div className="flex flex-col items-center">
                <div className={`
                  w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300
                  ${log.isFuture
                    ? 'bg-white/5 border-white/5 text-white/20'
                    : 'bg-gradient-to-br from-white/10 to-white/5 border-white/10 text-[#ffbd59] shadow-[0_0_15px_rgba(255,189,89,0.1)] group-hover:scale-110'}
                `}>
                  {log.isFuture ? <Sparkles className="w-5 h-5" /> : (log.type === 'deployment' ? <Rocket className="w-5 h-5" /> : <GitCommit className="w-5 h-5" />)}
                </div>
                {i !== LOGS.length - 1 && (
                  <div className="w-px h-full bg-gradient-to-b from-white/10 to-transparent my-2" />
                )}
              </div>

              <div className="pt-1.5 flex flex-col gap-1 pb-2">
                <div className="flex items-center gap-3">
                  <span className={`
                    font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded
                    ${log.isFuture
                      ? 'text-white/20 border border-white/5'
                      : 'text-[#ff3131] bg-[#ff3131]/10'}
                  `}>
                    {log.date}
                  </span>
                  {!log.isFuture && (
                    <div className="w-1 h-1 rounded-full bg-white/10" />
                  )}
                  {log.type === 'deployment' && (
                    <span className="text-[10px] font-mono text-[#ffbd59] animate-pulse">DEPLOYED</span>
                  )}
                </div>
                <p className={`
                  text-base md:text-lg font-medium leading-relaxed transition-colors duration-300
                  ${log.isFuture ? 'text-white/30' : 'text-white/80 group-hover:text-white'}
                `}>
                  {log.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer decoration */}
        <div className="p-4 bg-white/[0.01] border-t border-white/5 flex justify-end">
          <span className="font-mono text-[10px] text-white/10 italic">
            -- end of log transmission --
          </span>
        </div>
      </GlassCard>
    </section>
  );
};