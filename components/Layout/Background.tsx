import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black overflow-hidden">
      {/* 
        The Cut: Diagonal masking.
        The Texture: Grid pattern.
        Static Parallax: Fixed position ensures content scrolls over it.
      */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          // Mask to create the diagonal cut and fade out to the middle/left
          maskImage: 'linear-gradient(115deg, transparent 40%, black 100%)',
          WebkitMaskImage: 'linear-gradient(115deg, transparent 40%, black 100%)',
        }}
      />
    </div>
  );
};