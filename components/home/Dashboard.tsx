import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight, Instagram, Youtube } from 'lucide-react';
import { PHILOSOPHY, BOOKSHELF, GEAR, TECH_STACK, ROADMAP, INSPIRATIONS, BETS, CHANGELOG, DESK_SETUP } from '../../data';

interface DashboardModuleProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const DashboardModule: React.FC<DashboardModuleProps> = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-white/10 last:border-none">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 group focus:outline-none hover:pl-4 transition-all duration-300 ease-out rounded-sm px-0"
      >
        <h3 className="font-mono text-base text-white group-hover:text-electricBlue transition-colors">
          {title}
        </h3>
        <span className="text-grey group-hover:text-electricBlue transition-colors">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] mb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
        {children}
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [openModule, setOpenModule] = useState<string | null>("About Me");

  const toggleModule = (title: string) => {
    setOpenModule(prev => prev === title ? null : title);
  };

  return (
    <section id="dashboard" className="py-24 px-6 md:px-12 max-w-2xl mx-auto">
      <div className="flex flex-col">

        {/* 1. Module: About Me */}
        <DashboardModule
          title="About Me"
          isOpen={openModule === "About Me"}
          onToggle={() => toggleModule("About Me")}
        >
          <div className="pl-4 md:pl-0 font-sans text-sm text-grey leading-relaxed space-y-4">
            <div className="mb-4">
              <img
                src="/profile.jpg"
                alt="Syreese Delos Santos"
                className="w-24 h-24 rounded-full object-cover border-2 border-white/10"
              />
            </div>
            <p>
              I love building things and helping people win. I am a "Swiss Army Knife" who uses smart tools and AI to do the work of a whole team. I have built my own software, grown online communities from scratch, and even run my own businesses.
            </p>
            <p>
              I am obsessed with being fast and efficient so I can get more done in less time. Whether I am solving a tough problem or cheering on a client, I don’t stop until the job is finished.
            </p>
          </div>
        </DashboardModule>

        {/* 2. Module: Tech Stack (Two Columns) */}
        <DashboardModule
          title="Tech Stack"
          isOpen={openModule === "Tech Stack"}
          onToggle={() => toggleModule("Tech Stack")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-4 md:pl-0">
            {TECH_STACK.map((category, i) => (
              <div key={i}>
                <h4 className="font-mono text-xs text-white/50 mb-2 uppercase">{category.category}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, j) => (
                    <li key={j} className="font-mono text-sm text-white transform transition-transform duration-300 hover:translate-x-2">
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-electricBlue transition-colors block">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </DashboardModule>

        {/* 3. Module: Philosophy */}
        <DashboardModule
          title="Philosophy"
          isOpen={openModule === "Philosophy"}
          onToggle={() => toggleModule("Philosophy")}
        >
          <ul className="space-y-6 pl-4 md:pl-0">
            {PHILOSOPHY.map((item) => (
              <li key={item.id} className="group transform transition-transform duration-300 hover:translate-x-2 p-2 rounded-sm hover:bg-white/5">
                <span className="font-mono text-electricBlue text-xs block mb-1">{item.number}</span>
                <div className="font-sans font-medium text-white mb-1">{item.title}</div>
                <div className="font-sans text-sm text-grey group-hover:text-white transition-colors">
                  {item.description}
                </div>
              </li>
            ))}
          </ul>
        </DashboardModule>

        {/* 4. Module: Favorite Tools (Two Columns) */}
        <DashboardModule
          title="Favorite Tools"
          isOpen={openModule === "Favorite Tools"}
          onToggle={() => toggleModule("Favorite Tools")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-4 md:pl-0">
            {GEAR.map((category, i) => (
              <div key={i}>
                <h4 className="font-mono text-xs text-white/50 mb-2 uppercase">{category.category}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, j) => (
                    <li key={j} className="font-mono text-sm text-electricBlue transform transition-transform duration-300 hover:translate-x-2">
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </DashboardModule>

        {/* 5. Module: Inspirations */}
        <DashboardModule
          title="Inspirations"
          isOpen={openModule === "Inspirations"}
          onToggle={() => toggleModule("Inspirations")}
        >
          <ul className="space-y-6 pl-4 md:pl-0">
            {INSPIRATIONS.map((person, i) => (
              <li key={i} className="group transform transition-transform duration-300 hover:translate-x-2 p-2 rounded-sm hover:bg-white/5">
                <a
                  href={person.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white mb-1 inline-flex items-center gap-2 hover:text-electricBlue transition-colors"
                >
                  {person.name}
                  <Youtube size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-electricBlue" />
                </a>
                <div className="font-sans text-sm text-grey group-hover:text-white transition-colors leading-relaxed">
                  {person.description}
                </div>
              </li>
            ))}
          </ul>
        </DashboardModule>

        {/* 6. Module: Books */}
        <DashboardModule
          title="Books"
          isOpen={openModule === "Books"}
          onToggle={() => toggleModule("Books")}
        >
          <ul className="space-y-6 pl-4 md:pl-0">
            {BOOKSHELF.map((book, i) => (
              <li key={i} className="group transform transition-transform duration-300 hover:translate-x-2 p-2 rounded-sm hover:bg-white/5">
                <div className="font-medium text-white mb-1">
                  <a href={book.url} target="_blank" rel="noopener noreferrer" className="italic hover:text-electricBlue transition-colors md:inline-flex md:items-center md:gap-2">
                    {book.title}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-electricBlue hidden md:block" />
                  </a> <span className="text-white/20">—</span> {book.author}
                </div>
                <div className="font-sans text-sm text-grey group-hover:text-white transition-colors leading-relaxed">
                  {book.description}
                </div>
              </li>
            ))}
          </ul>
        </DashboardModule>

        {/* 7. Module: Desk Setup */}
        <DashboardModule
          title="Desk Setup"
          isOpen={openModule === "Desk Setup"}
          onToggle={() => toggleModule("Desk Setup")}
        >
          <div className="space-y-8 pl-4 md:pl-0">
            {DESK_SETUP.map((category, i) => (
              <div key={i}>
                <h4 className="font-mono text-xs text-white/50 mb-3 uppercase tracking-wider">{category.category}</h4>
                <ul className="space-y-3">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 group transform transition-transform duration-300 hover:translate-x-2">
                      <span className="font-mono text-sm text-electricBlue whitespace-nowrap min-w-[100px]">{item.label}</span>
                      <span className="font-sans text-sm text-grey group-hover:text-white transition-colors leading-relaxed">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </DashboardModule>

        {/* 8. Module: Photos */}
        <DashboardModule
          title="Photos"
          isOpen={openModule === "Photos"}
          onToggle={() => toggleModule("Photos")}
        >
          <div className="pl-4 md:pl-0">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-white/5 rounded-sm overflow-hidden">
                  <img
                    src={`https://picsum.photos/400/400?grayscale&random=${i}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-80 hover:opacity-100"
                    alt={`Gallery image ${i}`}
                  />
                </div>
              ))}
            </div>
            <a href="https://www.instagram.com/syreesepic" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-xs text-electricBlue hover:text-white transition-colors">
              <Instagram size={14} />
              View Instagram
            </a>
          </div>
        </DashboardModule>

        {/* 9. Module: My Bets */}
        <DashboardModule
          title="My Bets"
          isOpen={openModule === "My Bets"}
          onToggle={() => toggleModule("My Bets")}
        >
          <ul className="space-y-6 pl-4 md:pl-0">
            {BETS.map((bet, i) => (
              <li key={i} className="group transform transition-transform duration-300 hover:translate-x-2 p-2 rounded-sm hover:bg-white/5">
                <div className="font-mono text-xs text-electricBlue mb-1 uppercase tracking-wider">{bet.title}</div>
                <div className="font-sans text-sm text-grey group-hover:text-white transition-colors leading-relaxed">
                  {bet.description}
                </div>
              </li>
            ))}
          </ul>
        </DashboardModule>

        {/* 10. Module: Roadmap */}
        <DashboardModule
          title="Roadmap"
          isOpen={openModule === "Roadmap"}
          onToggle={() => toggleModule("Roadmap")}
        >
          <div className="pl-4 md:pl-0">
            <p className="font-sans text-sm text-grey mb-8">
              This roadmap outlines my goals and where I want to take my journey as a builder and creator.
            </p>
            <ul className="space-y-8">
              {ROADMAP.map((item, i) => (
                <li key={i} className="flex flex-col gap-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-medium text-white text-base">{item.title}</h4>
                    <span className="font-mono text-[10px] text-electricBlue uppercase tracking-wide whitespace-nowrap ml-4">
                      {item.timeline}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-grey">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </DashboardModule>

        {/* 11. Module: Changelog */}
        <DashboardModule
          title="Changelog"
          isOpen={openModule === "Changelog"}
          onToggle={() => toggleModule("Changelog")}
        >
          <ul className="space-y-6 border-l border-white/10 ml-2 pl-6">
            {CHANGELOG.map((log, i) => (
              <li key={i} className="relative">
                <div className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 bg-black border border-white/20 rounded-full"></div>
                <div className={`font-mono text-xs mb-1 ${log.date === "Future" ? "text-grey" : "text-electricBlue"}`}>{log.date}</div>
                {log.title && (
                  <div className="font-mono text-xs text-electricBlue font-bold mb-1 tracking-wide">{log.title}</div>
                )}
                <div className="font-sans text-sm text-white">{log.change}</div>
              </li>
            ))}
          </ul>
        </DashboardModule>

        {/* Module: Contact */}
        <div className="pt-12 mt-8 border-t border-white/5">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="font-serif italic text-xl text-white mb-4">Ready to build?</p>
            <a
              href="mailto:syreeseofficial@gmail.com"
              className="inline-flex items-center gap-2 font-mono text-sm text-electricBlue hover:text-white transition-colors"
            >
              Email Me <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Dashboard;