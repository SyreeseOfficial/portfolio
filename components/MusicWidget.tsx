import React, { useState, useEffect } from 'react';
import { Music } from 'lucide-react';
import { MUSIC_PLAYLIST } from '../data';

const MusicWidget: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSongIndex((prev) => (prev + 1) % MUSIC_PLAYLIST.length);
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 font-mono text-xs text-grey">
      <Music size={14} className="text-electricBlue animate-pulse" />
      <span>Listening to:</span>
      <span className="text-white ml-1 transition-opacity duration-500">
        {MUSIC_PLAYLIST[currentSongIndex]}
      </span>
    </div>
  );
};

export default MusicWidget;