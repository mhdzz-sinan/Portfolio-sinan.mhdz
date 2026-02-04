import SocialLinks from './SocialLinks';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Let's Connect Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Get in Touch
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            <span className="text-foreground">Let's </span>
            <span className="neon-text">Connect</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-10">
            Ready to collaborate on innovative engineering solutions? Let's build something extraordinary together.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center">
            <SocialLinks variant="hero" />
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-foreground/50">
          <span>© SINAN – Building the future, one innovation at a time</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
