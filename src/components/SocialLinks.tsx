import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { 
  GithubLogo, 
  LinkedinLogo,
  InstagramLogo,
  WhatsappLogo
} from '@phosphor-icons/react';

interface SocialLinksProps {
  variant?: 'hero' | 'contact' | 'footer';
  showLabels?: boolean;
}

const socialLinks = [
  { 
    icon: LinkedinLogo, 
    href: 'https://www.linkedin.com/in/mohammed-sinan-b9b840334', 
    label: 'LinkedIn',
    hoverLabel: 'Connect'
  },
  { 
    icon: GithubLogo, 
    href: 'https://github.com/sinanmhdz', 
    label: 'GitHub',
    hoverLabel: 'View Code'
  },
  { 
    icon: InstagramLogo, 
    href: 'https://www.instagram.com/sinanmhdz_', 
    label: 'Instagram',
    hoverLabel: 'Follow Journey'
  },
  { 
    icon: WhatsappLogo, 
    href: 'https://wa.me/919207228579?text=Hi%20Sinan%2C%20I%27d%20like%20to%20connect%20about%20a%20project.', 
    label: 'WhatsApp',
    hoverLabel: 'Chat Now'
  },
];

const SocialLinks = ({ variant = 'contact', showLabels = false }: SocialLinksProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const icons = containerRef.current.querySelectorAll('.social-icon');
    
    icons.forEach((icon) => {
      const iconEl = icon as HTMLElement;
      
      // Magnetic effect
      iconEl.addEventListener('mouseenter', () => {
        gsap.to(iconEl, {
          scale: 1.1,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(iconEl.querySelector('.icon-glow'), {
          opacity: 1,
          scale: 1.2,
          duration: 0.3
        });
      });

      iconEl.addEventListener('mouseleave', () => {
        gsap.to(iconEl, {
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(iconEl.querySelector('.icon-glow'), {
          opacity: 0,
          scale: 1,
          duration: 0.3
        });
      });

      iconEl.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = iconEl.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(iconEl, {
          x: x * 0.2,
          y: y * 0.2,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  }, []);

  const getContainerClasses = () => {
    switch (variant) {
      case 'hero':
        return 'flex flex-col gap-4';
      case 'footer':
        return 'flex gap-4 justify-center';
      default:
        return 'flex gap-4';
    }
  };

  const getIconSize = () => {
    switch (variant) {
      case 'hero':
        return 24;
      case 'footer':
        return 24;
      default:
        return 28;
    }
  };

  return (
    <div ref={containerRef} className={getContainerClasses()}>
      {socialLinks.map((social, index) => (
        <div key={index} className="relative">
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`social-icon relative block p-4 rounded-xl bg-muted/50 border border-primary/20 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group ${
              variant === 'hero' ? 'p-3' : ''
            }`}
          >
            {/* Glow effect */}
            <div 
              className="icon-glow absolute inset-0 rounded-xl opacity-0 pointer-events-none"
              style={{ 
                background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
                filter: 'blur(10px)'
              }}
            />
            
            {/* Icon */}
            <social.icon 
              size={getIconSize()} 
              weight="light" 
              className="text-primary relative z-10 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))] transition-all duration-300" 
            />

            {/* Particle burst on hover */}
            {hoveredIndex === index && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
                    style={{
                      left: `${50 + (Math.random() - 0.5) * 60}%`,
                      top: `${50 + (Math.random() - 0.5) * 60}%`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '0.6s'
                    }}
                  />
                ))}
              </div>
            )}
          </a>

          {/* Label chip on hover */}
          {showLabels && hoveredIndex === index && (
            <div 
              className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 whitespace-nowrap animate-fade-in"
              style={{ boxShadow: 'var(--glow-cyan)' }}
            >
              <span className="text-xs font-medium text-primary">
                {social.label} – {social.hoverLabel}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
