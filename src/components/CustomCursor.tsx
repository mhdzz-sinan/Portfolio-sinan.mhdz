import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    const cursorGlow = document.querySelector('.custom-cursor-glow') as HTMLElement;
    
    const moveCursor = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      gsap.to(cursorGlow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.3 });
      gsap.to(cursorGlow, { scale: 1.5, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(cursorGlow, { scale: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);
    
    // Add magnetic effect to interactive elements
    const magneticElements = document.querySelectorAll('button, a, .magnetic');
    magneticElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      magneticElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        className="custom-cursor-glow fixed w-8 h-8 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 mix-blend-screen"
        style={{ boxShadow: '0 0 20px hsl(var(--neon-cyan) / 0.5)' }}
      />
      <div 
        className="custom-cursor fixed w-2 h-2 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
        style={{ boxShadow: '0 0 10px hsl(var(--neon-cyan))' }}
      />
    </>
  );
};

export default CustomCursor;
