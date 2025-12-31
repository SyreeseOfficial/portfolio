import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { Crown, DollarSign, Target, HeartPulse } from 'lucide-react';

const BOOKS = [
  {
    id: "1",
    title: "10 Pillars of Wealth",
    author: "Alex Becker",
    summary: "This book showed me that I own my life. Everything that happens is my fault, and that’s a good thing! I’m the boss of my own future. If I work hard enough for long enough, I can do anything—even if I’m starting with no skills.",
    gradient: "from-[#ff3131]/20 to-orange-500/20",
    colSpan: "md:col-span-2",
    icon: <Crown className="w-6 h-6 text-[#ff3131]" />,
    url: "https://www.goodreads.com/book/show/30247915-the-10-pillars-of-wealth?from_search=true&from_srp=true&qid=rL2TletBeH&rank=1"
  },
  {
    id: "2",
    title: "The One Thing",
    author: "Gary Keller",
    summary: "If you want to win fast, you have to find the one most important job that gets you closer to your goal. Once you find it, forget everything else. Stop getting distracted and just focus on that one big thing.",
    gradient: "from-[#ffbd59]/20 to-yellow-200/20",
    colSpan: "md:col-span-1",
    icon: <Target className="w-6 h-6 text-[#ffbd59]" />,
    url: "https://www.goodreads.com/book/show/16256798-the-one-thing?from_search=true&from_srp=true&qid=NMSXZa4IIw&rank=1"
  },
  {
    id: "3",
    title: "How to Be Well",
    author: "Frank Lipman",
    summary: "I bought this on a whim 10 years ago, and it’s still one of my favorites. It’s full of sticky notes because the lessons are so good. It changed how I think about my health and how I live every day. I still follow its rules to feel my best.",
    gradient: "from-blue-400/20 to-emerald-400/20",
    colSpan: "md:col-span-1",
    icon: <HeartPulse className="w-6 h-6 text-[#ffbd59]" />,
    url: "https://www.goodreads.com/book/show/35721118-how-to-be-well?from_search=true&from_srp=true&qid=X9CrQtZJkd&rank=2"
  },
  {
    id: "4",
    title: "The Millionaire Booklet",
    author: "Grant Cardone",
    summary: "It’s only 44 pages, making it the shortest but most helpful book I’ve ever read. It explains how to build wealth in the simplest way possible. This book has helped so many people become millionaires, and I’m using its secrets to build my own future.",
    gradient: "from-purple-400/20 to-pink-400/20",
    colSpan: "md:col-span-2",
    icon: <DollarSign className="w-6 h-6 text-[#ff3131]" />,
    url: "https://www.goodreads.com/book/show/31284204-the-millionaire-booklet?from_search=true&from_srp=true&qid=GGEIUUNHGE&rank=1"
  }
];

export const Bookshelf: React.FC = () => {
  return (
    <section className="mb-10">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white/90">Bookshelf</h2>
      </div>

      {/* 
        Adjusted auto-rows to 225px to minimize bottom whitespace while fitting content.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:auto-rows-[225px] auto-rows-auto">
        {BOOKS.map((book, i) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`h-full ${book.colSpan}`}
          >
            <a href={book.url} target="_blank" rel="noopener noreferrer" className="block h-full">
              <GlassCard
                className="h-full p-8 flex flex-col group relative overflow-hidden transition-all duration-300 !border-0 bg-white/[0.02]"
                hoverEffect={false}
              >
                {/* Gradient removed */}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header: Author & Title with Icon at top right */}
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white/30 mb-2 tracking-widest uppercase">
                        {book.author}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#ffbd59] transition-colors leading-tight">
                        {book.title}
                      </h3>
                    </div>

                    {/* Icon */}
                    <div className="p-2 bg-white/5 rounded-xl border border-white/5 group-hover:border-white/20 transition-all shrink-0">
                      {book.icon}
                    </div>
                  </div>

                  {/* Separator Line - Increased margin from mb-3 to mb-4 */}
                  <div className="w-10 h-0.5 bg-white/10 mb-4 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-[#ff3131] group-hover:to-[#ffbd59] transition-all duration-700 rounded-full" />

                  {/* Summary - Removed bottom margin to eliminate empty space at card bottom */}
                  <p className="text-white/50 text-sm leading-relaxed font-sans line-clamp-4 md:line-clamp-none">
                    {book.summary}
                  </p>
                </div>
              </GlassCard>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};