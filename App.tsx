import React from 'react';
import { Background } from './components/Layout/Background';
import { Hero } from './components/Hero';
import { HeaderBento } from './components/HeaderBento';
import { BentoGrid } from './components/BentoGrid';
import { Tools } from './components/Tools';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';
import { DeskSetup } from './components/DeskSetup';
import { PhotosPreview } from './components/PhotosPreview';
import { Philosophy } from './components/Philosophy';
import { ContentDiet } from './components/ContentDiet';
import { MyBets } from './components/MyBets';
import { Bookshelf } from './components/Bookshelf';
import { FavoritePurchases } from './components/FavoritePurchases';
import { Changelog } from './components/Changelog';

function App() {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-[#ff3131]/30 selection:text-[#ffbd59]">
      <Background />
      
      <main className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col">
        
        <Hero />
        
        <div className="mb-80">
          <HeaderBento />
        </div>
        
        <div className="mb-80">
          <BentoGrid />
        </div>

        <div className="mb-80">
          <Philosophy />
        </div>
        
        <div className="mb-80">
          <Tools />
        </div>

        <div className="mb-80">
          <ContentDiet />
        </div>
        
        <section className="mb-80 grid grid-cols-1 md:grid-cols-2 gap-6">
          <DeskSetup />
          <PhotosPreview />
        </section>
        
        <div className="mb-80">
          <MyBets />
        </div>

        <div className="mb-80">
          <Bookshelf />
        </div>

        <div className="mb-80">
          <FavoritePurchases />
        </div>

        <div className="mb-80">
          <Changelog />
        </div>

        <div className="mb-80">
          <Roadmap />
        </div>
        
        <Footer />
      </main>
      
      <div className="fixed top-8 left-6 md:left-12 z-50 mix-blend-difference">
         <span className="font-bold text-sm tracking-widest uppercase opacity-50">Syreese Delos Santos</span>
      </div>
    </div>
  );
}

export default App;