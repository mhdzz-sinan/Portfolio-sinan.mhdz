import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, X } from '@phosphor-icons/react';
import projectIdeaLab from '@/assets/project-idea-lab.jpeg';
import projectEma from '@/assets/project-ema.jpeg';
import projectPcm from '@/assets/project-pcm.jpeg';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  subtitle: string;
  overview: string;
  image: string;
  tags: string[];
  year: string;
  details: {
    objective?: string;
    features: string[];
    applications: string[];
    learnings: string[];
    conclusion: string;
  };
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  const projects: Project[] = [
    {
      title: 'Smart Passenger Counting & Overload Alert System',
      subtitle: 'Idea Lab Project',
      overview: 'An intelligent IoT-based safety system designed to prevent passenger overloading in public transport vehicles. Using smart sensors and microcontroller-based logic, it monitors real-time occupancy and triggers instant alerts when the vehicle exceeds safe passenger limits.',
      image: projectIdeaLab,
      tags: ['IoT', 'Embedded Systems', 'Safety Automation', 'Real-time Monitoring'],
      year: '2024',
      details: {
        features: [
          'Real-time passenger counting using entry/exit sensors',
          'Automatic overload detection with instant alerts',
          'Visual and audio warning system for drivers',
          'Low-cost, energy-efficient design',
          'Auto-reset when passenger count returns to safe levels'
        ],
        applications: [
          'Auto-rickshaws and public transport vehicles',
          'School vans and private buses',
          'Ride-sharing and commercial vehicles',
          'Smart city transit systems'
        ],
        learnings: [
          'Embedded system design and sensor integration',
          'Microcontroller programming',
          'Real-time monitoring system development',
          'Problem-solving with practical social impact'
        ],
        conclusion: 'This project demonstrates how simple technology can solve real-world transportation safety issues, making it a strong foundation for smart mobility solutions.'
      }
    },
    {
      title: 'Enhancing Agricultural Tool Performance',
      subtitle: 'EMA Project',
      overview: 'A comprehensive material engineering study focused on improving cultivator blade durability by transitioning from medium carbon steel to EN19 alloy steel. The project analyzes mechanical properties to achieve better wear resistance and extended service life in harsh agricultural conditions.',
      image: projectEma,
      tags: ['Material Engineering', 'CAD Analysis', 'Alloy Steel', 'Agricultural Tech'],
      year: '2025',
      details: {
        objective: 'To analyze and implement a material change from medium carbon steel to EN19 alloy steel for improved cultivator blade performance.',
        features: [
          'Comparative analysis of material properties',
          'Enhanced wear and abrasion resistance',
          'Higher tensile strength and toughness',
          'Improved fatigue and impact strength',
          'Extended blade life and reduced maintenance'
        ],
        applications: [
          'Cultivator blades and ploughshares',
          'Tillage tools and soil-engaging components',
          'Heavy-duty farming equipment',
          'Agricultural cutting implements'
        ],
        learnings: [
          'Material selection for real-world engineering applications',
          'Correlating material properties with functional performance',
          'Industrial applications of alloy steels',
          'Comparative material analysis and decision-making'
        ],
        conclusion: 'Strategic material selection plays a crucial role in enhancing agricultural tool performance, achieving significant improvements in strength, durability, and operational efficiency.'
      }
    },
    {
      title: 'PCM Based Passive Cooling System',
      subtitle: 'Heat Transfer Project',
      overview: 'An innovative thermal management solution utilizing Phase Change Materials to passively reduce vehicle cabin temperature. By leveraging latent heat absorption, the system maintains comfortable cabin temperatures without additional energy consumption, reducing HVAC load.',
      image: projectPcm,
      tags: ['Thermal Engineering', 'PCM Technology', 'Energy Efficiency', 'Automotive'],
      year: '2025',
      details: {
        features: [
          'Passive cooling with no external power requirement',
          'Latent heat storage for temperature regulation',
          'Reduces thermal peaks inside vehicle cabins',
          'Eco-friendly and sustainable design',
          'Compatible with existing vehicle structures'
        ],
        applications: [
          'Passenger vehicles and electric vehicles',
          'Public transport cabins',
          'Parked vehicle thermal management',
          'Automotive thermal comfort systems'
        ],
        learnings: [
          'Phase change heat transfer mechanisms',
          'Latent heat storage concepts',
          'Passive thermal management systems',
          'Energy efficiency in automotive applications'
        ],
        conclusion: 'The PCM-based system demonstrates an effective and sustainable approach to vehicle thermal management, promoting energy-efficient and eco-friendly automotive solutions.'
      }
    },
  ];

  return (
    <>
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
                    {/* Year & Subtitle Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-medium">
                        {project.year}
                      </div>
                      <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium">
                        {project.subtitle}
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-foreground/70 leading-relaxed mb-6">
                      {project.overview}
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
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="group/btn flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium hover:bg-primary hover:text-background transition-all duration-300"
                    >
                      <span>Read More</span>
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

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="glass-panel max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-background transition-all duration-300"
            >
              <X size={24} weight="bold" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-medium">
                    {selectedProject.year}
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium">
                    {selectedProject.subtitle}
                  </div>
                </div>
                <h3 className="text-3xl font-bold tracking-tight neon-text mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {selectedProject.overview}
                </p>
              </div>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-auto"
                />
              </div>

              {/* Objective */}
              {selectedProject.details.objective && (
                <div className="glass-panel p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-primary mb-3">Objective</h4>
                  <p className="text-foreground/80">{selectedProject.details.objective}</p>
                </div>
              )}

              {/* Key Features */}
              <div className="glass-panel p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-primary mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.details.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/80">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="glass-panel p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-accent mb-3">Applications</h4>
                <ul className="space-y-2">
                  {selectedProject.details.applications.map((app, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/80">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learning Outcomes */}
              <div className="glass-panel p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-secondary mb-3">Learning Outcomes</h4>
                <ul className="space-y-2">
                  {selectedProject.details.learnings.map((learning, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/80">
                      <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conclusion */}
              <div className="glass-panel p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5">
                <h4 className="text-lg font-bold text-foreground mb-3">Conclusion</h4>
                <p className="text-foreground/80 italic">{selectedProject.details.conclusion}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-lg bg-muted/50 border border-primary/20 text-sm font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
