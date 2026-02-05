import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Loader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Pre-load the main content by triggering completion earlier
    const tl = gsap.timeline({
      onComplete: () => {
        onLoadComplete();
      }
    });

    // Animate progress bar
    tl.to({}, {
      duration: 1.2,
      onUpdate: function() {
        setProgress(Math.floor(this.progress() * 100));
      }
    });

    // Pulse logo
    tl.from('.loader-logo', {
      opacity: 0,
      scale: 0.5,
      duration: 0.4,
      ease: 'back.out(1.7)'
    }, 0);

    tl.to('.loader-logo', {
      opacity: 0,
      scale: 1.2,
      duration: 0.2,
      ease: 'power2.in'
    }, 1.2);

    tl.to('.loader-screen', {
      opacity: 0,
      pointerEvents: 'none',
      duration: 0.2
    }, 1.2);

    return () => {
      tl.kill();
    };
  }, [onLoadComplete]);

  return (
    <div className="loader-screen fixed inset-0 z-50 flex items-center justify-center bg-background will-change-transform">
      {/* Holographic Scan Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="scan-line absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-neon-cyan to-transparent" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Particle Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-neon-cyan/20 blur-3xl" />
      </div>

      {/* Logo & Text */}
      <div className="loader-logo relative z-10 text-center">
        <div className="mb-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter neon-text">
            MOHAMMED SINAN
          </h1>
          <div className="mt-2 text-xs md:text-sm font-light tracking-widest text-primary uppercase">
            Mechanical Designer & Web Developer
          </div>
        </div>

        {/* Holographic Ring */}
        <div className="absolute -inset-8 rounded-full border border-primary/30 animate-spin" style={{ animationDuration: '8s' }} />
        <div className="absolute -inset-12 rounded-full border border-accent/20 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }} />

        {/* Progress Bar */}
        <div className="mt-16 w-64 mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple relative"
              style={{ width: `${progress}%`, transition: 'width 0.1s ease-out' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse" />
            </div>
          </div>
          <div className="mt-4 text-sm font-mono text-primary">{progress}%</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
