import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  EnvelopeSimple, 
  Phone, 
  MapPin, 
  GithubLogo, 
  LinkedinLogo,
  InstagramLogo,
  PaperPlaneTilt
} from '@phosphor-icons/react';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    gsap.from('.contact-form', {
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top center',
      },
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.contact-info', {
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top center',
      },
      opacity: 0,
      x: 50,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success('Message sent successfully! I\'ll get back to you soon.', {
      duration: 5000,
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const contactDetails = [
    {
      icon: EnvelopeSimple,
      label: 'Email',
      value: 'hafizsinan12321@gmail.com',
      href: 'mailto:hafizsinan12321@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9207228579',
      href: 'tel:+919207228579'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kalathingal House, Vilayil PO, Cheriyaparamb, Cheekode, Malappuram, Kerala – 673645',
      href: null
    },
  ];

  const socialLinks = [
    { icon: GithubLogo, href: '#', label: 'GitHub' },
    { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
    { icon: InstagramLogo, href: '#', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="contact-section py-32 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Get In Touch
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
            <span className="text-foreground">Let's </span>
            <span className="neon-text">Connect</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? Drop me a message!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-3xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none text-foreground"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-background font-semibold hover:scale-105 transition-transform duration-300"
                style={{ boxShadow: 'var(--glow-cyan)' }}
              >
                <span>Send Message</span>
                <PaperPlaneTilt 
                  size={20} 
                  weight="bold" 
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" 
                />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info space-y-6">
            {/* Contact Details */}
            <div className="glass-panel p-8 rounded-3xl space-y-6">
              {contactDetails.map((detail, index) => (
                <div key={index} className="group flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                    <detail.icon size={24} weight="light" className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground/60 mb-1">{detail.label}</div>
                    {detail.href ? (
                      <a 
                        href={detail.href}
                        className="text-foreground hover:text-primary transition-colors break-words"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-foreground break-words">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6">Connect on Social</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-4 rounded-xl bg-muted/50 border border-primary/20 hover:bg-primary/10 hover:border-primary/50 hover:scale-110 transition-all duration-300 group"
                  >
                    <social.icon size={28} weight="light" className="text-primary group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="glass-panel p-6 rounded-2xl flex items-center gap-4">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping" />
              </div>
              <span className="text-foreground/80">Available for freelance projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
