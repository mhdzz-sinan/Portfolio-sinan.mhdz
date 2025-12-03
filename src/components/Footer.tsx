import { Gear } from '@phosphor-icons/react';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-primary/20 overflow-hidden">
      {/* Scanning Laser Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />

      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      {/* Rotating Gear Particles */}
      <div className="absolute bottom-10 left-10 rotate-gear opacity-5">
        <Gear size={48} weight="light" className="text-primary" />
      </div>
      <div className="absolute top-10 right-10 rotate-gear opacity-5" style={{ animationDirection: 'reverse' }}>
        <Gear size={64} weight="light" className="text-accent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold tracking-tighter mb-2">
              <span className="neon-text">S</span>
              <span className="text-foreground">INAN</span>
            </div>
            <p className="text-sm text-foreground/60">
              Building the future, one innovation at a time
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8">
            {['About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <SocialLinks variant="footer" />
        </div>

        {/* Separator */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-foreground/50">
          <span>© {currentYear} – Future in Progress</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
