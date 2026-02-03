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
    { label: 'Advanced Engineering Projects', value: '2+' },
    { label: 'Active CAD Prototyping', value: 'CAD' },
    { label: 'Hands-on Technical Training', value: 'Workshops' },
    { label: 'Enthusiast Design & Innovation', value: 'Design' },
    { label: 'Industrial Training & Internships', value: 'Industry' },
    { label: 'Simulation & Analysis', value: 'FEA/CFD' },
    { label: 'Manufacturing & DFM', value: 'DFM' },
    { label: 'Automation & Systems', value: 'Auto' },
  ];

  const skills = [
    { name: 'CAD', icon: Cube, color: 'text-neon-cyan' },
    { name: 'Simulation', icon: ChartLine, color: 'text-neon-blue' },
    { name: 'Design', icon: Gear, color: 'text-neon-purple' },
    { name: 'Automation', icon: Cpu, color: 'text-neon-violet' },
    { name: 'Web Dev', icon: Code, color: 'text-neon-cyan' },
    { name: 'Innovation', icon: Lightning, color: 'text-neon-blue' },
    { name: 'DFM', icon: Wrench, color: 'text-neon-purple' },
    { name: 'Analysis', icon: Database, color: 'text-neon-violet' },
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
                I'm <span className="text-primary font-semibold">Mohammed Sinan</span>, a B.Tech Mechanical Engineering student 
                at <span className="text-accent font-semibold">TKM College of Engineering</span>, primarily focused on mechanical design and product development.
              </p>
              <p>
                My interests lie in <span className="text-primary font-semibold">CAD modeling, simulation-based design, and automation-oriented engineering</span>, where I work on converting ideas into optimized and manufacturable mechanical solutions. I'm particularly drawn to design innovation, system optimization, and building engineering solutions with real-world and startup applications.
              </p>
              <p>
                Alongside core mechanical engineering, I explore modern technologies and digital tools that complement design and innovation, helping bridge <span className="text-accent font-semibold">engineering precision with emerging tech ecosystems</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Section Header */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold tracking-tighter">
            <span className="neon-text">Personal</span>
          </h3>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card glass-panel p-4 rounded-2xl text-center group hover:scale-105 transition-transform duration-300 relative">
              <div className="text-xl font-bold neon-text mb-1">{stat.value}</div>
              <div className="text-xs text-foreground/70">{stat.label}</div>
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
