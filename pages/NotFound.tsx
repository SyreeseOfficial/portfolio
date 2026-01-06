import React from 'react';
import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <Construction size={64} className="text-electricBlue mb-8" />
      
      <h1 className="font-serif text-6xl text-white mb-4">404</h1>
      
      <p className="font-mono text-xl text-white mb-2">
        I'm still building this part.
      </p>
      
      <p className="font-sans text-grey mb-12">
        (Put on your hard hat and go back home)
      </p>
      
      <Link 
        to="/" 
        className="bg-electricBlue text-white font-sans font-medium px-8 py-3 rounded-md hover:bg-blue-600 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;