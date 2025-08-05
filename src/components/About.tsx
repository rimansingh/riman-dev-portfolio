const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Cloud & DevOps Engineer with a deep interest in cutting-edge 
              technologies that drive modern infrastructure and intelligent systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My expertise spans across cloud platforms, containerization, CI/CD pipelines, 
              and network architecture. I'm particularly excited about the intersection of 
              traditional infrastructure with AI and LLM technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in building robust, scalable solutions that not only meet today's 
              requirements but are also future-ready for the evolving tech landscape.
            </p>
          </div>
          
          <div className="slide-up">
            <div className="bg-muted/50 rounded-2xl p-8 shadow-soft">
              <h3 className="text-xl font-semibold mb-6">Core Interests</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Cloud Infrastructure & Architecture</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>DevOps & CI/CD Automation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Network Security & Optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>AI/ML Infrastructure & LLMs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Container Orchestration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;