import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Loader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onLoadComplete, 500);
      }
    });

    // Animate progress bar
    tl.to({}, {
      duration: 2.5,
      onUpdate: function() {
        setProgress(Math.floor(this.progress() * 100));
      }
    });

    // Pulse logo
    tl.from('.loader-logo', {
      opacity: 0,
      scale: 0.5,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, 0);

    tl.to('.loader-logo', {
      opacity: 0,
      scale: 1.2,
      duration: 0.5,
      ease: 'power2.in'
    }, 2.5);

    tl.to('.loader-screen', {
      opacity: 0,
      duration: 0.5
    }, 3);

    return () => {
      tl.kill();
    };
  }, [onLoadComplete]);

  return (
    <div className="loader-screen fixed inset-0 z-50 flex items-center justify-center bg-background">
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
          <h1 className="text-6xl font-bold tracking-tighter neon-text">
            SINAN
          </h1>
          <div className="mt-2 text-sm font-light tracking-widest text-primary uppercase">
            Robotics & Web
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
