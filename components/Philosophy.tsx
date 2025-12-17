import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Hammer, Sparkles } from 'lucide-react';

const RULES = [
  {
    title: "I'm In Charge",
    description: "I decide how I think and feel. Every choice is my fault.",
    icon: <Crown className="w-6 h-6" />,
    color: "text-white",
    video: "/videos/ship.webm"
  },
  {
    title: "Work Wins",
    description: "I can do anything if I just work at it long enough.",
    icon: <Hammer className="w-6 h-6" />,
    color: "text-white",
    video: "/videos/brick.webm"
  },
  {
    title: "Keep It Simple",
    description: "Less is always more. Complexity is a distraction.",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-white",
    video: "/videos/clean.webm"
  }
];

export const Philosophy: React.FC = () => {
  return (
    <section className="mb-32">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white/90">Philosophy</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {RULES.map((rule, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300"
          >
            {/* Icon Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg bg-white/5 border border-white/5 ${rule.color}`}>
                {rule.icon}
              </div>
              <h3 className="text-lg font-bold text-white">
                {rule.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-white/50 text-sm leading-relaxed">
              {rule.description}
            </p>

            <div className="mt-6 rounded-lg overflow-hidden w-full relative">
              <video
                src={rule.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
              />

              {/* Gradient overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};