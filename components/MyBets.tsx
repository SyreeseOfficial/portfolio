import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { TrendingUp, Gamepad2, HeartPulse } from 'lucide-react';

const BETS = [
  {
    id: "01",
    title: "Crypto Boom",
    description: "I think crypto is about to go crazy again, just like in 2020. People will move money from meme coins into useful stuff like AI and Real World projects first. After that, gaming coins will blow up.",
    icon: <TrendingUp className="w-6 h-6" />,
    gradientColors: ["#ff3131", "#ffbd59"]
  },
  {
    id: "02",
    title: "Instant Video Games",
    description: "Soon, you'll be able to make a whole video game just by typing one sentence. Want to play as a robot dinosaur with machine guns? Just ask AI, and it will build it for you instantly.",
    icon: <Gamepad2 className="w-6 h-6" />,
    gradientColors: ["#ffbd59", "#ff3131"]
  },
  {
    id: "03",
    title: "Living to 120",
    description: "Thanks to people like Bryan Johnson, I bet living to 120 will be normal soon. Medicine is changing from 'fixing sick people' to 'stopping aging' within the next 20 to 30 years.",
    icon: <HeartPulse className="w-6 h-6" />,
    gradientColors: ["#ff3131", "#ffbd59"]
  }
];

export const MyBets: React.FC = () => {
  return (
    <section className="mb-10">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white/90">My Bets</h2>
      </div>

      <div className="flex flex-col gap-6">
        {BETS.map((bet, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="p-0 group relative overflow-hidden !bg-white/[0.02]">
               <div className="flex flex-col md:flex-row items-start md:items-center relative z-10 p-10 md:p-12 gap-8 md:gap-12">
                  <div className="flex-shrink-0">
                    <span className="text-5xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#ff3131] to-[#ffbd59] opacity-80 group-hover:opacity-100 transition-opacity">
                      {bet.id}
                    </span>
                  </div>

                  <div className="hidden md:block w-px h-20 bg-white/10 group-hover:bg-white/20 transition-colors" />

                  <div className="flex-1">
                     <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ffbd59] transition-colors">
                        {bet.title}
                     </h3>
                     <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-4xl">
                       {bet.description}
                     </p>
                  </div>

                  <div className="mt-4 md:mt-0 md:ml-auto self-start md:self-center">
                     <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-white/40 group-hover:text-white group-hover:border-white/20 transition-all duration-300 group-hover:scale-110 shadow-lg">
                        {bet.icon}
                     </div>
                  </div>
               </div>

               {/* Hover Border Gradient - Ensure no blue is present */}
               <div 
                   className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-transparent"
                   style={{
                     background: `linear-gradient(90deg, ${bet.gradientColors[0]}, ${bet.gradientColors[1]}) border-box`,
                     WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                     WebkitMaskComposite: 'xor',
                     maskComposite: 'exclude'
                   }}
               />
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};