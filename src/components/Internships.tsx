import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, X, Briefcase, MapPin, Calendar } from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

interface Internship {
  title: string;
  organization: string;
  location: string;
  duration: string;
  mode: string;
  overview: string;
  icon: 'briefcase' | 'rocket';
  details: {
    roles: string[];
    skills: string[];
    learnings: string;
    certification: string;
  };
}

const Internships = () => {
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);

  useEffect(() => {
    // Section header animation
    gsap.from('.internships-header', {
      scrollTrigger: {
        trigger: '.internships-section',
        start: 'top center',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    });

    // Internship cards stagger animation
    gsap.from('.internship-card', {
      scrollTrigger: {
        trigger: '.internships-section',
        start: 'top 60%',
      },
      opacity: 0,
      x: -50,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }, []);

  const internships: Internship[] = [
    {
      title: 'Career Internship – Educine: The Career 5.0',
      organization: 'Wisdom Education Foundation of India (WEFI)',
      location: 'Palakkad, Kerala',
      duration: '9th & 10th August 2025',
      mode: 'On-site',
      icon: 'briefcase',
      overview: 'Hands-on exposure to career guidance initiatives and educational event management at a large-scale career expo. Assisted professional counsellors, guided students in exploring academic pathways, and contributed to the coordination of sessions and activities.',
      details: {
        roles: [
          'Assisted professional career counsellors across multiple career hubs',
          'Guided students and visitors in exploring academic pathways and career options',
          'Supported attendees by clarifying course structures and higher-education prospects',
          'Coordinated sessions, interactions, and activities during the expo',
          'Maintained organized documentation and information flow'
        ],
        skills: [
          'Career guidance and academic counseling exposure',
          'Professional communication and public interaction',
          'Event coordination and teamwork',
          'Organizational and documentation skills',
          'Understanding of education and career ecosystems'
        ],
        learnings: 'This internship strengthened my ability to work in professional, people-centric environments, enhanced my communication confidence, and provided real-world insight into career counseling processes and educational outreach programs.',
        certification: 'Certified by the Wisdom Education Foundation of India (WEFI), Kerala, recognizing contribution, writing skills, and attention to detail during the event.'
      }
    },
    {
      title: 'Winter Technical Internship – India Space Lab',
      organization: 'India Space Lab (AICTE Approved)',
      location: 'Online',
      duration: '45 Days',
      mode: 'Viksit Bharat @2047 Program',
      icon: 'rocket',
      overview: 'Structured training program focused on emerging space and aerospace technologies under the Viksit Bharat @2047 initiative. Covered advanced drone technology, satellite systems (CanSat & CubeSat), rocketry fundamentals, remote sensing & GIS, and disaster management applications.',
      details: {
        roles: [
          'Participated in structured technical sessions by domain experts',
          'Studied real-world applications of space technology in national development',
          'Completed project-oriented assignments on analysis and design concepts',
          'Applied theoretical concepts to practical aerospace scenarios',
          'Engaged in assessments, discussions, and guided learning modules'
        ],
        skills: [
          'Advanced Drone Technology fundamentals',
          'CanSat & CubeSat satellite systems and mission planning',
          'Rocketry principles and propulsion basics',
          'Remote Sensing & GIS for geospatial analysis',
          'Disaster management using space technology'
        ],
        learnings: 'This internship enhanced my understanding of space engineering fundamentals, emerging aerospace technologies, and their applications in national development initiatives. It strengthened my technical foundation and reinforced the importance of innovation in achieving the Viksit Bharat @2047 vision.',
        certification: 'Awarded an Internship Completion Certificate by India Space Lab, recognizing successful participation and completion of the technical training program.'
      }
    }
  ];

  return (
    <>
      <section id="internship" className="internships-section py-32 relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 grid-bg opacity-20" />

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="internships-header text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Professional Experience
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              <span className="text-foreground">Industrial </span>
              <span className="neon-text">Internships</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Hands-on industry exposure bridging academic knowledge with real-world applications
            </p>
          </div>

          {/* Internships Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
              <div 
                key={index}
                className="internship-card group glass-panel p-8 rounded-3xl hover:scale-[1.02] transition-transform duration-500"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <Briefcase 
                    size={32} 
                    weight="light" 
                    className="text-primary group-hover:text-background transition-colors" 
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
                  {internship.title}
                </h3>

                {/* Organization */}
                <p className="text-accent font-medium mb-4">{internship.organization}</p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} weight="light" />
                    <span>{internship.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} weight="light" />
                    <span>{internship.duration}</span>
                  </div>
                </div>

                {/* Mode Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-medium mb-4">
                  {internship.mode}
                </div>

                {/* Overview */}
                <p className="text-foreground/70 leading-relaxed mb-6 line-clamp-3">
                  {internship.overview}
                </p>

                {/* View Button */}
                <button 
                  onClick={() => setSelectedInternship(internship)}
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
            ))}
          </div>
        </div>
      </section>

      {/* Internship Detail Modal */}
      {selectedInternship && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
          onClick={() => setSelectedInternship(null)}
        >
          <div 
            className="glass-panel max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedInternship(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-background transition-all duration-300"
            >
              <X size={24} weight="bold" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h3 className="text-2xl font-bold tracking-tight neon-text mb-2">
                  {selectedInternship.title}
                </h3>
                <p className="text-accent font-medium text-lg">{selectedInternship.organization}</p>
                
                {/* Meta */}
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} weight="light" />
                    <span>{selectedInternship.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} weight="light" />
                    <span>{selectedInternship.duration}</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-medium">
                    {selectedInternship.mode}
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className="glass-panel p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-foreground mb-3">Overview</h4>
                <p className="text-foreground/80">{selectedInternship.overview}</p>
              </div>

              {/* Roles & Responsibilities */}
              <div className="glass-panel p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-primary mb-3">Roles & Responsibilities</h4>
                <ul className="space-y-2">
                  {selectedInternship.details.roles.map((role, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/80">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Gained */}
              <div className="glass-panel p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-accent mb-3">Skills & Competencies</h4>
                <ul className="space-y-2">
                  {selectedInternship.details.skills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/80">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learning Outcomes */}
              <div className="glass-panel p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5">
                <h4 className="text-lg font-bold text-foreground mb-3">Learning Outcomes</h4>
                <p className="text-foreground/80 italic">{selectedInternship.details.learnings}</p>
              </div>

              {/* Certification */}
              <div className="glass-panel p-6 rounded-2xl border-2 border-primary/30">
                <h4 className="text-lg font-bold text-primary mb-3">Certification</h4>
                <p className="text-foreground/80">{selectedInternship.details.certification}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Internships;
