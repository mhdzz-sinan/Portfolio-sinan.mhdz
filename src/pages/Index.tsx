import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Internships from '@/components/Internships';
import Workshops from '@/components/Workshops';
import Contact from '@/components/Contact';
import CTASection from '@/components/CTASection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // Small delay to ensure smooth transition
      requestAnimationFrame(() => {
        setShowContent(true);
      });
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Main Content - Always rendered but hidden initially */}
      <div 
        className={`transition-opacity duration-300 ${showContent ? 'opacity-100' : 'opacity-0'}`}
        style={{ visibility: isLoading ? 'hidden' : 'visible' }}
      >
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Internships />
          <Workshops />
          <Contact />
          <CTASection />
        </main>
      </div>

      {/* Loader - On top */}
      {isLoading && <Loader onLoadComplete={handleLoadComplete} />}
    </div>
  );
};

export default Index;
