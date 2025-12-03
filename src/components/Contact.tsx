import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  EnvelopeSimple, 
  Phone, 
  MapPin, 
  PaperPlaneTilt,
  WhatsappLogo
} from '@phosphor-icons/react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import SocialLinks from './SocialLinks';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (formData.message.length < 10) {
      toast.error('Message must be at least 10 characters');
      return;
    }

    setIsSubmitting(true);

    // Button animation
    gsap.to('.submit-btn', {
      scale: 0.98,
      duration: 0.12,
      yoyo: true,
      repeat: 1
    });

    try {
      const { data, error } = await supabase.functions.invoke('send-email', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim()
        }
      });

      if (error) throw error;

      // Success animation
      setShowSuccess(true);
      gsap.fromTo('.success-holo', 
        { scale: 0.9, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again or contact via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="contact-form relative">
            {/* Success Hologram */}
            {showSuccess && (
              <div className="success-holo absolute inset-0 z-20 flex items-center justify-center rounded-3xl bg-background/90 backdrop-blur-sm">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                    <PaperPlaneTilt size={40} weight="light" className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 neon-text">Message Sent!</h3>
                  <p className="text-foreground/70 mb-6">Thanks for reaching out. I'll respond soon.</p>
                  <a
                    href="https://wa.me/919207228579?text=Hi%20Sinan%2C%20I%20just%20sent%20you%20a%20message%20through%20your%20portfolio."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
                  >
                    <WhatsappLogo size={20} weight="fill" />
                    Continue on WhatsApp
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-3xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                  placeholder="Your name"
                  maxLength={100}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                  placeholder="your.email@example.com"
                  maxLength={255}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground/80">
                  Subject (optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                  placeholder="Subject of your message"
                  maxLength={200}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none text-foreground"
                  placeholder="Tell me about your project or inquiry..."
                  maxLength={1000}
                  minLength={10}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn w-full group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-background font-semibold hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ boxShadow: 'var(--glow-cyan)' }}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <PaperPlaneTilt 
                  size={20} 
                  weight="bold" 
                  className={`transition-transform ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`}
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
              <SocialLinks variant="contact" />
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919207228579?text=Hi%20Sinan%2C%20I%27d%20like%20to%20connect%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-2xl flex items-center gap-4 group hover:bg-green-500/10 hover:border-green-500/30 transition-all duration-300 block"
            >
              <div className="p-3 rounded-xl bg-green-500/20 border border-green-500/30 group-hover:bg-green-500/30 transition-colors">
                <WhatsappLogo size={28} weight="fill" className="text-green-500" />
              </div>
              <div className="flex-1">
                <span className="text-foreground font-medium group-hover:text-green-400 transition-colors">Chat on WhatsApp</span>
                <p className="text-sm text-foreground/60">Quick response guaranteed</p>
              </div>
            </a>

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
