import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const getPageName = (pathname: string): string | null => {
  if (pathname === '/') return null;
  if (pathname === '/projects') return 'Projects';
  if (pathname.startsWith('/project/')) return 'Case Study';
  return null;
};

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const pageName = getPageName(pathname);

  return (
    <header className="absolute top-0 left-0 right-0 z-10 w-full py-8 px-6 md:px-12 flex justify-center">
      <div className="flex flex-col items-center gap-1">
        <Link to="/" className="flex flex-wrap justify-center items-baseline gap-x-3 gap-y-1 group text-center animate-fade-in-up opacity-0" style={{ animationDelay: "0ms" }}>
          <span className="font-mono text-sm md:text-base text-white font-medium group-hover:text-electricBlue transition-colors duration-200 whitespace-nowrap">
            Syreese Delos Santos
          </span>
          <span className="font-mono text-[10px] text-grey tracking-widest uppercase group-hover:text-electricBlue/80 transition-colors duration-200 whitespace-nowrap">
            Creative Builder • Seattle, WA
          </span>
        </Link>
        {pageName ? (
          <span className="font-mono text-[10px] text-electricBlue tracking-widest uppercase flex items-center gap-1">
            <span>●</span>{pageName}
          </span>
        ) : (
          <span className="font-mono text-[10px] text-electricBlue tracking-widest uppercase flex items-center gap-1 animate-fade-in-up opacity-0" style={{ animationDelay: "200ms" }}>
            <span>●</span> Open to work
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
