import { Certifications } from "@/components/Certifications";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary">CloudOps</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#certifications" className="text-muted-foreground hover:text-primary transition-colors">Certifications</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary pt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Rimandeep Singh
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Cloud & DevOps Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about building resilient cloud platforms and simplifying DevOps with intelligent automation, AI, and a deep understanding of networking.
          </p>

          <div className="flex gap-4 items-center justify-center mb-12">
            <a href="https://github.com/rimansingh?tab=repositories" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground text-xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rimandeep-singh/" target="_blank" rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground text-xl">
              <FaLinkedin />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:shadow-lg inline-block">
              View My Work
            </a>
            <a href="#contact"
              className="text-muted-foreground hover:text-foreground border border-border hover:border-primary/20 px-6 py-3 rounded-lg transition-all duration-200 inline-block">
              Get in Touch
            </a>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a cloud and DevOps engineer passionate about building scalable, reliable systems. I specialize in cloud infrastructure, networking, and the integration of LLM technologies to enhance automation, system intelligence, and developer productivity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My workflow includes cloud platforms, CI/CD pipelines, container orchestration, and network architecture — now enhanced with AI-driven tools that accelerate code generation, testing, monitoring, and deployment. This allows me to deliver high-quality solutions faster and more efficiently.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in creating future-ready infrastructure by combining traditional engineering practices with modern AI capabilities, driving innovation across both development and operations.
              </p>
            </div>
            
            <div className="bg-muted/50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">What I Focus On</h3>
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
                  <span>LLM Development & Integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Container Orchestration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work in cloud infrastructure, DevOps automation, and AI integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Infrastructure Automation",
                description: "Terraform-based multi-cloud infrastructure provisioning with automated scaling and monitoring across AWS, Azure, and GCP.",
                tech: ["Terraform", "AWS", "Docker", "Kubernetes"]
              },
              {
                title: "AI-Powered DevOps Pipeline",
                description: "Intelligent CI/CD pipeline that uses machine learning to optimize deployment strategies and predict potential failures.",
                tech: ["Jenkins", "Python", "TensorFlow", "GitHub Actions"]
              },
              {
                title: "Network Security Dashboard",
                description: "Real-time network monitoring and threat detection system with automated response capabilities and comprehensive analytics.",
                tech: ["React", "Node.js", "Elasticsearch", "Grafana"]
              },
              {
                title: "LLM Model Deployment Platform",
                description: "Scalable platform for deploying and managing large language models with optimized inference and vector database integration.",
                tech: ["FastAPI", "Docker", "Pinecone", "OpenAI"]
              },
              {
                title: "Microservices Orchestration",
                description: "Complete microservices architecture with service mesh, observability, and automated canary deployments.",
                tech: ["Kubernetes", "Istio", "Prometheus", "Jaeger"]
              },
              {
                title: "Cloud Cost Optimizer",
                description: "ML-driven cost optimization tool that analyzes cloud usage patterns and provides automated cost reduction recommendations.",
                tech: ["Python", "AWS Lambda", "Data Science", "Streamlit"]
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-lg font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
                    GitHub →
                  </a>
                  <a 
                    href="https://demo.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
                    Live Demo →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for modern cloud infrastructure and intelligent systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Platforms",
                skills: ["AWS", "Azure", "Google Cloud", "Cloudflare"]
              },
              {
                title: "DevOps & CI/CD",
                skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "GitLab CI", "Terraform"]
              },
              {
                title: "Networking",
                skills: ["Cisco", "VPC", "Load Balancers", "DNS", "CDN", "VPN"]
              },
              {
                title: "AI & LLMs",
                skills: ["OpenAI", "LangChain", "Vector DBs", "Hugging Face", "TensorFlow", "PyTorch"]
              },
              {
                title: "Monitoring & Observability",
                skills: ["Prometheus", "Grafana"]
              },
              {
                title: "Programming & Scripting",
                skills: ["Python", "C#", "Bash", "TypeScript", "SQL", "YAML"]
              }
            ].map((category, index) => (
              <div 
                key={index}
                className="bg-background rounded-2xl p-8 shadow-lg border border-border"
              >
                <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <Certifications />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate on your next cloud infrastructure project or discuss emerging technologies? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a 
              href="mailto:er.rimansingh@gmail.com"
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">Rimandeep Singh</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/rimandeep-singh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-muted-foreground text-sm">Connect with me</p>
            </a>

            <a 
              href="https://github.com/rimansingh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-muted-foreground text-sm">View my code</p>
            </a>

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Resume</h3>
              <p className="text-muted-foreground text-sm">Download PDF</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-4">Rimandeep Singh</h3>
            <p className="text-muted-foreground">Cloud & DevOps Engineer</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:er.rimansingh@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/rimandeep-singh/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/rimansingh"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Rimandeep Singh. Built with 💻 by Rimandeep Singh.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
