import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Background } from './components/Layout/Background';
import { Hero } from './components/Hero';
import { HeaderBento } from './components/HeaderBento';
import { Philosophy } from './components/Philosophy';
import { DeskSetup } from './components/DeskSetup';
import { Tools } from './components/Tools';
import { Bookshelf } from './components/Bookshelf';
import { MyBets } from './components/MyBets';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';
import { SetupPage } from './components/SetupPage';
import { ContentDiet } from './components/ContentDiet';
import { FavoritePurchases } from './components/FavoritePurchases';
import { PhotosPreview } from './components/PhotosPreview';
import { Changelog } from './components/Changelog';

const LandingPage = () => {
    return (
        <div className="relative min-h-screen text-white selection:bg-red-500/30">
            <Background />
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:px-12 md:py-20 space-y-32">
                <Hero />
                <HeaderBento />
                <Philosophy />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <DeskSetup />
                    <PhotosPreview />
                </div>
                <Tools />
                <ContentDiet />
                <FavoritePurchases />
                <Bookshelf />
                <MyBets />
                <Roadmap />
                <Changelog />
                <Footer />
            </div>
        </div>
    );
};

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/setup" element={<SetupPage />} />
            </Routes>
        </Router>
    );
}
