import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { List, X } from '@phosphor-icons/react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.from('.nav-item', {
      opacity: 0,
      y: -20,
      duration: 0.6,
      stagger: 0.1,
      delay: 3,
      ease: 'power2.out'
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'glass-panel backdrop-blur-2xl' : ''
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="nav-item relative">
              <div className="text-2xl font-bold tracking-tighter">
                <span className="neon-text">S</span>
                <span className="text-foreground">INAN</span>
              </div>
              <div className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-primary via-accent to-transparent" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="nav-item relative text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="nav-item px-6 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium text-sm hover:bg-primary hover:text-background transition-all duration-300 holo-pulse"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} weight="light" /> : <List size={24} weight="light" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-background/95 backdrop-blur-2xl">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {['About', 'Projects', 'Contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-3xl font-bold tracking-tighter text-foreground/80 hover:text-primary transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium hover:bg-primary hover:text-background transition-all duration-300"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
