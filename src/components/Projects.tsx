import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import project1Image from '@/assets/project-1.png';
import project2Image from '@/assets/project-2.png';
import { ArrowUpRight } from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top center',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
  }, []);

  const projects = [
    {
      title: 'Smart Passenger Counting & Overload Alert System',
      description: 'Idea Lab Project - An intelligent IoT-based system using sensors and microcontrollers to monitor vehicle passenger count in real-time, preventing overloading and enhancing public transport safety.',
      image: project1Image,
      tags: ['Sensor System', 'Vehicle Safety', 'IoT', 'Microcontrollers'],
      year: '2024'
    },
    {
      title: 'Enhancing Agricultural Tool Performance',
      description: 'EMA Project - Material shift from Medium Carbon Steel to EN19 Alloy Steel in cultivator blades, improving durability, wear resistance, and operational efficiency in agricultural machinery.',
      image: project2Image,
      tags: ['Material Engineering', 'CAD Optimization', 'Alloy Steel Enhancement', 'Mechanical Analysis'],
      year: '2025'
    },
  ];

  return (
    <section id="projects" className="projects-section py-32 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Featured Work
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
            <span className="text-foreground">Engineering </span>
            <span className="neon-text">Projects</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Innovation-driven projects combining mechanical engineering principles with cutting-edge technology
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card group glass-panel p-6 md:p-8 rounded-3xl hover:scale-[1.02] transition-transform duration-500"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image Side */}
                <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto"
                  />
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Corner Brackets */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Side */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  {/* Year Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-medium mb-4">
                    {project.year}
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-foreground/70 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 rounded-lg bg-muted/50 border border-primary/20 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <button className="group/btn flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium hover:bg-primary hover:text-background transition-all duration-300">
                    <span>View Details</span>
                    <ArrowUpRight 
                      size={20} 
                      weight="bold" 
                      className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" 
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
