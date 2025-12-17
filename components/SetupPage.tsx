import React from 'react';
import { motion } from 'framer-motion';
import { Background } from './Layout/Background';
import { Link } from 'react-router-dom';

export const SetupPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white p-8 font-sans selection:bg-red-500/30">
            <Background />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header / Logo */}
                <div className="mb-12">
                    <Link to="/" className="inline-block group">
                        <h1 className="text-xl font-bold tracking-tight group-hover:text-white/80 transition-colors">
                            Syreese Delos Santos
                        </h1>
                        <div className="h-0.5 w-full bg-gradient-to-r from-red-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                </div>

                {/* Terminal Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#050505] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                >
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="text-xs font-mono text-white/30">
                    //syreese/inventory/list_all.sh
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-10 font-mono text-sm space-y-6">

                        {/* Items Grid */}
                        <div className="grid grid-cols-1 gap-y-4">
                            <SetupItem label="monitor" value='samsung 49" monitor oddysey g9' />
                            <SetupItem label="light_bar" value="quntis light bar" />
                            <SetupItem label="face_cam_light" value="logitech litra glow" />
                            <SetupItem label="microphone" value="fifine k688" />
                            <SetupItem label="amplifier" value="fiio k7 dac" />
                            <SetupItem label="speakers" value="kanto yu2" />
                            <SetupItem label="monitor_arm" value="heavy duty monitor arm" />
                            <SetupItem label="desk_mat" value="super ultra wide black fnatic desk mat" />
                            <SetupItem label="mouse" value="anker vertial ergonomic mouse" />
                            <SetupItem label="keyboard" value="black nuphy air75 v3" />
                            <SetupItem label="webcam" value="emeet 4k webcam" />
                            <SetupItem label="table_top" value='Ikea Oak 80" solid wood countertop' />
                            <SetupItem label="feet_for_table" value="2x white ikea alex drawers" />
                            <SetupItem label="inside_drawers" value="amazon ikea alex drawer organizers" />

                            <div className="h-px bg-white/10 my-4" />

                            <SetupItem label="headphones.work" value="bose quiet comfort ultras gen 2" />
                            <SetupItem label="headphones.music" value="hifiman sundaras" />
                            <SetupItem label="headphones.bass" value="skullcandy crusher evos" />
                            <SetupItem label="headphones.general" value="sennheisher hd380 pros" />

                            <div className="h-px bg-white/10 my-4" />

                            <SetupItem label="security.primary" value="glock 43x (9mm) w/ laser, flash, trijicon sights" />
                            <SetupItem label="security.backup" value="ruger lcp 2 (22lr)" />
                        </div>

                        <div className="mt-8 pt-4 border-t border-white/5">
                            <div className="text-[#ffbd59] mb-4 text-xs uppercase tracking-wider">// Tools & Misc</div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-white/50">
                                <div>• soldering kit</div>
                                <div>• precision knife kit</div>
                                <div>• strebito 150 piece mini screwdriver kit</div>
                                <div>• ipod nano 3rd gen 8gb (blue)</div>
                                <div>• gun cleaning kit</div>
                                <div>• luminix dmc tz4 digital cam (vintage)</div>
                                <div>• label maker</div>
                                <div>• multi tool</div>
                                <div>• reusable batteries + charger</div>
                            </div>
                        </div>

                        <div className="flex mt-8">
                            <span className="text-green-500 mr-2">➜</span>
                            <span className="animate-pulse">_</span>
                        </div>

                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const SetupItem = ({ label, value }: { label: string, value: string }) => (
    <div className="flex flex-col md:flex-row md:items-baseline hover:bg-white/[0.02] -mx-2 px-2 py-1 rounded transition-colors">
        <span className="text-[#ffbd59] md:min-w-[200px] shrink-0 select-none pb-1 md:pb-0">{label} = </span>
        <span className="text-white/80">{value};</span>
    </div>
);
