const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto text-center fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Rimandeep Singh
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
          Cloud & DevOps Engineer
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Building scalable cloud infrastructure and streamlining DevOps workflows 
          with expertise in LLM, networking, and modern deployment strategies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="btn-hero inline-block">
            View My Work
          </a>
          <a href="#contact" className="btn-ghost inline-block">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;