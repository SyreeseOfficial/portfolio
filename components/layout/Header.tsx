import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 w-full py-8 px-6 md:px-12 flex justify-center">
      <Link to="/" className="flex flex-wrap justify-center items-baseline gap-x-3 gap-y-1 group text-center">
        <span className="font-mono text-sm md:text-base text-white font-medium group-hover:text-electricBlue transition-colors duration-200 whitespace-nowrap">
          Syreese Delos Santos
        </span>
        <span className="font-mono text-[10px] text-grey tracking-widest uppercase group-hover:text-electricBlue/80 transition-colors duration-200 whitespace-nowrap">
          Creative Builder • Seattle, WA
        </span>
      </Link>
    </header>
  );
};

export default Header;