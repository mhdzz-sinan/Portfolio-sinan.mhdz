import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImage from '@/assets/profile.png';
import { 
  Code, 
  Cube, 
  Gear, 
  Lightning, 
  ChartLine, 
  Database,
  Cpu,
  Wrench
} from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.from('.about-image', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top center',
      },
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.about-content', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top center',
      },
      opacity: 0,
      x: 50,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.stat-card', {
      scrollTrigger: {
        trigger: '.stats-grid',
        start: 'top center',
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    });

    gsap.from('.skill-icon', {
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top center',
      },
      opacity: 0,
      scale: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: 'back.out(1.7)'
    });
  }, []);

  const stats = [
    { label: 'Engineering Projects', value: '2+' },
    { label: 'CAD Prototyping', value: 'Active' },
    { label: 'Workshop - NIT Calicut', value: 'Power BI' },
    { label: 'Robotics & Design', value: 'Enthusiast' },
  ];

  const skills = [
    { name: 'CAD', icon: Cube, color: 'text-neon-cyan' },
    { name: 'SolidWorks', icon: Wrench, color: 'text-neon-blue' },
    { name: 'Sensors', icon: Cpu, color: 'text-neon-purple' },
    { name: 'Microcontrollers', icon: Lightning, color: 'text-neon-violet' },
    { name: 'GSAP', icon: ChartLine, color: 'text-neon-cyan' },
    { name: 'React', icon: Code, color: 'text-neon-blue' },
    { name: 'Database', icon: Database, color: 'text-neon-purple' },
    { name: 'CAM', icon: Gear, color: 'text-neon-violet' },
  ];

  return (
    <section id="about" className="about-section py-32 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side */}
          <div className="about-image relative">
            {/* Hologram Capsule Frame */}
            <div className="relative max-w-md mx-auto">
              {/* Rotating Ring */}
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
              <div className="absolute -inset-8 border border-accent/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden glass-panel p-2">
                <img 
                  src={profileImage} 
                  alt="Mohammed Sinan" 
                  className="w-full h-auto rounded-2xl"
                />
                {/* Scan Line Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent scan-line" />
              </div>

              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />
            </div>
          </div>

          {/* Content Side */}
          <div className="about-content">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              About Me
            </div>

            <h2 className="text-5xl font-bold tracking-tighter mb-6">
              <span className="text-foreground">Building the </span>
              <span className="neon-text">Future</span>
            </h2>

            <div className="glass-panel p-6 rounded-2xl space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I'm <span className="text-primary font-semibold">Mohammed Sinan</span>, a B.Tech Mechanical Engineering Student 
                from <span className="text-accent font-semibold">TKM College of Engineering</span>, passionate about Robotics, 
                CAD, CAM, Mechanical Design, and high-tech vehicle systems.
              </p>
              <p>
                I also craft <span className="text-primary font-semibold">immersive web experiences</span> using modern 
                technologies, bridging the gap between engineering precision and digital innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card glass-panel p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold neon-text mb-2">{stat.value}</div>
              <div className="text-sm text-foreground/70">{stat.label}</div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-3xl font-bold tracking-tighter mb-8 text-center">
            <span className="text-foreground">Tech </span>
            <span className="neon-text">Arsenal</span>
          </h3>

          <div className="skills-grid grid grid-cols-4 md:grid-cols-8 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-icon group flex flex-col items-center gap-3 p-4 rounded-xl glass-panel hover:scale-110 transition-transform duration-300 cursor-default"
              >
                <skill.icon 
                  size={40} 
                  weight="light" 
                  className={`${skill.color} group-hover:rotate-12 transition-transform duration-300`}
                />
                <span className="text-xs font-medium text-foreground/70 text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
