import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, X, Certificate, Calendar, MapPin } from '@phosphor-icons/react';
import CTASection from './CTASection';

gsap.registerPlugin(ScrollTrigger);

interface Workshop {
  title: string;
  event: string;
  venue?: string;
  date: string;
  overview: string;
  color: 'cyan' | 'blue' | 'purple' | 'violet' | 'accent';
  details: {
    topics: string[];
    handsOn: string[];
    skills: string[];
    conclusion: string;
  };
}

const Workshops = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);

  useEffect(() => {
    gsap.from('.workshop-card', {
      scrollTrigger: {
        trigger: '.workshops-section',
        start: 'top center',
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }, []);

  const workshops: Workshop[] = [
    {
      title: 'Power BI Workshop',
      event: 'Tathwa\'24 Technical Fest',
      date: '2024',
      color: 'cyan',
      overview: 'Hands-on workshop focused on data visualization, business intelligence, and data-driven decision-making using Microsoft Power BI. Created interactive dashboards and reports from raw data.',
      details: {
        topics: [
          'Introduction to Business Intelligence concepts',
          'Power BI ecosystem overview (Desktop, datasets, reports)',
          'Data importing from multiple sources',
          'Data cleaning and transformation with Power Query',
          'Basics of DAX (Data Analysis Expressions)',
          'Creating interactive visualizations and KPIs'
        ],
        handsOn: [
          'Developed interactive Power BI reports using real-world datasets',
          'Applied data transformation techniques for structured analysis',
          'Created dynamic dashboards to visualize trends and patterns',
          'Learned best practices for report layout and usability'
        ],
        skills: [
          'Data analysis and visualization',
          'Power BI Desktop proficiency',
          'Basic DAX and data modeling',
          'Dashboard design and presentation'
        ],
        conclusion: 'This workshop strengthened my ability to analyze data, extract insights, and communicate results visually for business analytics and decision support.'
      }
    },
    {
      title: 'AI, ML & Introduction to Power BI',
      event: 'LEAP x ISTE Student Chapter',
      venue: 'Civil CAD Lab',
      date: '18 January',
      color: 'blue',
      overview: 'One-day hands-on session introducing fundamentals of artificial intelligence, machine learning concepts, and data visualization using Power BI, bridging theory with practical industry applications.',
      details: {
        topics: [
          'Overview of Artificial Intelligence and Machine Learning',
          'Supervised and unsupervised learning fundamentals',
          'Real-world AI & ML applications in engineering',
          'Introduction to Business Intelligence and BI concepts',
          'Power BI ecosystem and dashboard creation',
          'AI-driven insights in analytical reporting'
        ],
        handsOn: [
          'Practical exposure to Power BI interface and tools',
          'Creation of basic dashboards using sample datasets',
          'Visualization of trends, KPIs, and performance metrics',
          'Demonstrations connecting AI/ML with data analytics'
        ],
        skills: [
          'Foundational AI and ML understanding',
          'Data analytics and visualization',
          'Microsoft Power BI hands-on experience',
          'Awareness of AI-powered decision systems'
        ],
        conclusion: 'Enhanced understanding of how AI and ML integrate with data analytics platforms to support informed decision-making across industries.'
      }
    },
    {
      title: 'Placement-Oriented C Programming',
      event: 'IEEE Student Branch - ESPOIR \'25',
      date: '11 January',
      color: 'purple',
      overview: 'Workshop designed to strengthen C programming foundations with emphasis on placement readiness, logical thinking, and problem-solving skills for technical interviews and coding assessments.',
      details: {
        topics: [
          'C programming fundamentals and syntax revision',
          'Data types, operators, and control structures',
          'Functions and modular programming',
          'Arrays, strings, and pointers',
          'Memory management basics',
          'Common placement-level logical problems'
        ],
        handsOn: [
          'Solving placement-level coding problems in C',
          'Logic-building exercises and algorithmic thinking',
          'Debugging common programming errors',
          'Writing optimized and readable programs'
        ],
        skills: [
          'Strong foundation in C programming',
          'Improved logical and analytical thinking',
          'Confidence in placement coding questions',
          'Structured approach to efficient programs'
        ],
        conclusion: 'Significantly enhanced problem-solving mindset and programming confidence for technical interviews and competitive coding environments.'
      }
    },
    {
      title: '3D Printing with SolidWorks',
      event: 'ATHENA \'25 - ISTE TKMCE',
      date: '26–27 July',
      color: 'violet',
      overview: 'Comprehensive hands-on workshop on computer-aided design and additive manufacturing, covering the complete workflow from 3D modeling in SolidWorks to physical fabrication through 3D printing.',
      details: {
        topics: [
          'Fundamentals of additive manufacturing and 3D printing',
          'Overview of FDM and SLA printing technologies',
          'SolidWorks interface and modeling environment',
          'Part modeling techniques (sketches, extrusions, cuts)',
          'Design for Additive Manufacturing (DfAM) principles',
          'STL conversion and slicing basics'
        ],
        handsOn: [
          'Created 3D models using SolidWorks from basic sketches',
          'Applied design modifications to improve printability',
          'Exported and prepared models for 3D printing',
          'Analyzed printing process and output quality'
        ],
        skills: [
          'SolidWorks part modeling',
          'Design for additive manufacturing',
          'Understanding 3D printing workflows',
          'Improved spatial and design thinking'
        ],
        conclusion: 'Valuable learning experience combining design, manufacturing, and practical implementation with industry-relevant exposure to additive manufacturing.'
      }
    },
    {
      title: 'Finite Element Analysis Using ANSYS',
      event: 'SAE TKMCE',
      date: '22 January',
      color: 'accent',
      overview: 'Workshop on numerical simulation techniques using ANSYS for real-world engineering design validation. Focused on FEA fundamentals, meshing, structural analysis, and industry-standard CAE workflows.',
      details: {
        topics: [
          'Fundamentals of Finite Element Method (FEM)',
          'Introduction to ANSYS Workbench environment',
          'Pre-processing: geometry, materials, boundary conditions',
          'Meshing techniques and mesh quality considerations',
          'Structural analysis fundamentals (stress, strain)',
          'Best practices in simulation workflows'
        ],
        handsOn: [
          'Worked on sample engineering models in ANSYS',
          'Applied loads and constraints for real operating conditions',
          'Performed basic structural analysis',
          'Interpreted stress, deformation, and safety factor results'
        ],
        skills: [
          'Basic ANSYS Workbench proficiency',
          'Finite element modeling and meshing',
          'Structural behavior analysis under loads',
          'Industry-oriented CAE workflows'
        ],
        conclusion: 'Strengthened foundation in engineering analysis and simulation, providing practical insight into simulation-driven design approaches used in modern industries.'
      }
    }
  ];

  const getColorClasses = (color: Workshop['color']) => {
    switch (color) {
      case 'cyan':
        return { bg: 'bg-neon-cyan/10', border: 'border-neon-cyan/30', text: 'text-neon-cyan', dot: 'bg-neon-cyan' };
      case 'blue':
        return { bg: 'bg-neon-blue/10', border: 'border-neon-blue/30', text: 'text-neon-blue', dot: 'bg-neon-blue' };
      case 'purple':
        return { bg: 'bg-neon-purple/10', border: 'border-neon-purple/30', text: 'text-neon-purple', dot: 'bg-neon-purple' };
      case 'violet':
        return { bg: 'bg-neon-violet/10', border: 'border-neon-violet/30', text: 'text-neon-violet', dot: 'bg-neon-violet' };
      case 'accent':
        return { bg: 'bg-accent/10', border: 'border-accent/30', text: 'text-accent', dot: 'bg-accent' };
      default:
        return { bg: 'bg-primary/10', border: 'border-primary/30', text: 'text-primary', dot: 'bg-primary' };
    }
  };

  return (
    <>
      <section id="workshop" className="workshops-section py-32 relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 grid-bg opacity-20" />

        {/* Ambient Glows */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Technical Training
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
              <span className="text-foreground">Technical </span>
              <span className="neon-text">Workshops</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Hands-on technical sessions enhancing practical skills in modern engineering tools and technologies
            </p>
          </div>

          {/* Workshops Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => {
              const colors = getColorClasses(workshop.color);
              return (
                <div 
                  key={index}
                  className="workshop-card group glass-panel p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Certificate size={24} weight="light" className={colors.text} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-bold tracking-tight mb-2 group-hover:${colors.text} transition-colors duration-300`}>
                    {workshop.title}
                  </h3>

                  {/* Event */}
                  <p className={`${colors.text} text-sm font-medium mb-3`}>{workshop.event}</p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 mb-4 text-xs text-foreground/60">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} weight="light" />
                      <span>{workshop.date}</span>
                    </div>
                    {workshop.venue && (
                      <div className="flex items-center gap-1">
                        <MapPin size={14} weight="light" />
                        <span>{workshop.venue}</span>
                      </div>
                    )}
                  </div>

                  {/* Overview */}
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4 line-clamp-3">
                    {workshop.overview}
                  </p>

                  {/* View Button */}
                  <button 
                    onClick={() => setSelectedWorkshop(workshop)}
                    className={`group/btn flex items-center gap-2 px-4 py-2 rounded-full ${colors.bg} border ${colors.border} ${colors.text} text-sm font-medium hover:bg-primary hover:border-primary hover:text-background transition-all duration-300`}
                  >
                    <span>Read More</span>
                    <ArrowUpRight 
                      size={16} 
                      weight="bold" 
                      className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" 
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Workshop Detail Modal */}
      {selectedWorkshop && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
          onClick={() => setSelectedWorkshop(null)}
        >
          <div 
            className="glass-panel max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedWorkshop(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-background transition-all duration-300"
            >
              <X size={24} weight="bold" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h3 className="text-2xl font-bold tracking-tight neon-text mb-2">
                  {selectedWorkshop.title}
                </h3>
                <p className="text-accent font-medium">{selectedWorkshop.event}</p>
                
                {/* Meta */}
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} weight="light" />
                    <span>{selectedWorkshop.date}</span>
                  </div>
                  {selectedWorkshop.venue && (
                    <div className="flex items-center gap-2">
                      <MapPin size={16} weight="light" />
                      <span>{selectedWorkshop.venue}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Overview */}
              <div className="glass-panel p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-foreground mb-3">Overview</h4>
                <p className="text-foreground/80">{selectedWorkshop.overview}</p>
              </div>

              {/* Topics Covered */}
              <div className="glass-panel p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-primary mb-3">Key Topics Covered</h4>
                <ul className="space-y-2">
                  {selectedWorkshop.details.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/80">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hands-on Learning */}
              <div className="glass-panel p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-accent mb-3">Hands-on Learning</h4>
                <ul className="space-y-2">
                  {selectedWorkshop.details.handsOn.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/80">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Gained */}
              <div className="glass-panel p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-secondary mb-3">Skills Gained</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedWorkshop.details.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-lg bg-secondary/10 border border-secondary/30 text-sm text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Conclusion */}
              <div className="glass-panel p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5">
                <h4 className="text-lg font-bold text-foreground mb-3">Conclusion</h4>
                <p className="text-foreground/80 italic">{selectedWorkshop.details.conclusion}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Workshops;
