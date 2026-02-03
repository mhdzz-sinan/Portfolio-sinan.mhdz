import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Gear, Cube, GitBranch } from '@phosphor-icons/react';
import SocialLinks from './SocialLinks';
const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      delay: 3.5
    });
    tl.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    }).from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5').from('.hero-badge', {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    }, '-=0.4').from('.hero-button', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3').from('.hero-social', {
      opacity: 0,
      x: 50,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.4');

    // Floating particles
    gsap.to('.floating-particle', {
      y: -30,
      duration: 3,
      stagger: 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Rotating gears
    gsap.to('.gear-icon', {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
    });
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Gradient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse" style={{
      animationDelay: '1s'
    }} />

      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 floating-particle">
        <div className="w-2 h-2 bg-primary rounded-full" style={{
        boxShadow: 'var(--glow-cyan)'
      }} />
      </div>
      <div className="absolute top-1/3 right-1/3 floating-particle" style={{
      animationDelay: '1s'
    }}>
        <div className="w-3 h-3 bg-accent rounded-full" style={{
        boxShadow: 'var(--glow-purple)'
      }} />
      </div>
      <div className="absolute bottom-1/3 left-1/3 floating-particle" style={{
      animationDelay: '2s'
    }}>
        <div className="w-2 h-2 bg-secondary rounded-full" style={{
        boxShadow: 'var(--glow-blue)'
      }} />
      </div>

      {/* Floating Gears */}
      <div className="absolute top-20 right-20 gear-icon opacity-10">
        <Gear size={64} weight="light" className="text-primary" />
      </div>
      <div className="absolute bottom-40 left-20 gear-icon opacity-10" style={{
      animationDirection: 'reverse'
    }}>
        <Gear size={48} weight="light" className="text-accent" />
      </div>

      {/* Social Links - Right Side */}
      <div className="hero-social absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <SocialLinks variant="hero" showLabels />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="hero-title text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="neon-text">Sinan</span>
          </h1>

          {/* Subtitle */}
          <div className="hero-subtitle mb-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground/90 mb-4">
              ​Mech Design Innovator      
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 font-light tracking-wide">
              Passionate about Mechanical Design, Innovation & Intelligent Systems
            </p>
          </div>

          {/* Info Badges */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <div className="hero-badge glass-panel px-6 py-3 rounded-full flex items-center gap-3">
              <Cube size={20} weight="light" className="text-primary" />
              <span className="text-sm font-medium">Mechanical Engineering Student</span>
            </div>
            <div className="hero-badge glass-panel px-6 py-3 rounded-full flex items-center gap-3">
              <GitBranch size={20} weight="light" className="text-accent" />
              <span className="text-sm font-medium">TKM College of Engineering</span>
            </div>
          </div>

          {/* Skill Tags */}
          <div className="hero-badge flex flex-wrap gap-3 justify-center mb-12">
            {['Design', 'Innovation', 'WEB DEV', 'CAD', 'Simulation', 'Automation'].map(skill => <span key={skill} className="px-4 py-2 rounded-lg bg-muted/50 border border-primary/20 text-sm font-medium text-primary hover:bg-primary/10 transition-colors cursor-default">
                {skill}
              </span>)}
          </div>

          {/* CTA Button */}
          <button onClick={() => scrollToSection('contact')} className="hero-button group relative px-8 py-4 rounded-full bg-primary text-background font-semibold text-lg overflow-hidden hover:scale-105 transition-transform duration-300" style={{
          boxShadow: 'var(--glow-cyan)'
        }}>
            <span className="relative z-10 flex items-center gap-3">
              Hire Me
              <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>;
};
export default Hero;