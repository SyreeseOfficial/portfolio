import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 animate-fade-in">
      <span className="font-mono text-xs text-electricBlue uppercase tracking-widest mb-8 block">error_404</span>

      <h1 className="font-serif text-8xl md:text-9xl text-white mb-6 leading-none">404</h1>

      <p className="font-mono text-sm text-grey mb-2">
        I'm still building this part.
      </p>
      <p className="font-mono text-xs text-white/20 mb-16">
        (Put on your hard hat and go back home.)
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 font-mono text-xs text-grey hover:text-electricBlue transition-colors"
      >
        <ArrowLeft size={14} />
        BACK TO SAFETY
      </Link>
    </div>
  );
};

export default NotFound;
