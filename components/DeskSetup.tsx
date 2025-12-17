import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const DeskSetup: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-3xl font-bold text-white/90">Desk Setup</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true }}
        className="group relative flex flex-col flex-1 bg-[#050505] rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors duration-500"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="text-xs font-mono text-white/30">
            //syreese/workspace/config.sh
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm space-y-2 text-white/70">
          <div className="flex">
            <span className="text-[#ffbd59] mr-2">{">"}</span>
            <span>desk.style = <span className="text-[#ff3131]">minimal</span>;</span>
          </div>
          <div className="flex">
            <span className="text-[#ffbd59] mr-2">{">"}</span>
            <span>monitor.layout = <span className="text-[#ff3131]">ultra_wide</span>;</span>
          </div>
          <div className="flex">
            <span className="text-[#ffbd59] mr-2">{">"}</span>
            <span>keyboard.type = <span className="text-[#ff3131]">mechanical</span>;</span>
          </div>
          <div className="flex">
            <span className="text-[#ffbd59] mr-2">{">"}</span>
            <span>speakers.brand = <span className="text-[#ff3131]">kanto_yu2</span>;</span>
          </div>
          <div className="flex">
            <span className="text-[#ffbd59] mr-2">{">"}</span>
            <span>chair.comfiness = <span className="text-[#ff3131]">super</span>;</span>
          </div>

          <div className="h-4" /> {/* Spacer */}

          <p className="font-sans text-white/50 text-base leading-relaxed pt-2">
            My workspace is where I create and bring ideas to life. Every tool has a purpose.
          </p>

          <div className="pt-4">
            <Link to="/setup" className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ff3131] to-[#ffbd59] font-semibold hover:opacity-80 transition-opacity">
              [ Explore My Setup ]
            </Link>
          </div>
        </div>

        {/* Pulse Border Effect on Hover */}
        <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-transparent"
          style={{
            background: 'linear-gradient(90deg, #ff3131, #ffbd59) border-box',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude'
          }}
        />
      </motion.div>
    </div>
  );
};