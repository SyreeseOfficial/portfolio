import React from 'react';
import Hero from '../components/home/Hero';
import ProjectSection from '../components/home/ProjectSection';
import Dashboard from '../components/home/Dashboard';
import BlogSection from '../components/home/BlogSection';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <ProjectSection />
      <Dashboard />
      <BlogSection />
    </div>
  );
};

export default Home;