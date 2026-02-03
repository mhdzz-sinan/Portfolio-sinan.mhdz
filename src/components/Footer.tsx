import { Gear } from '@phosphor-icons/react';
import SocialLinks from './SocialLinks';

const Footer = () => {

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
        {/* Social Links - Centered */}
        <div className="flex justify-center mb-8">
          <SocialLinks variant="footer" />
        </div>

        {/* Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-foreground/50">
          <span>© SINAN – Building the future, one innovation at a time</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
