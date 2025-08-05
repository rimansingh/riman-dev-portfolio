const Projects = () => {
  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Terraform-based multi-cloud infrastructure provisioning with automated scaling and monitoring across AWS, Azure, and GCP.",
      tech: ["Terraform", "AWS", "Docker", "Kubernetes"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "AI-Powered DevOps Pipeline",
      description: "Intelligent CI/CD pipeline that uses machine learning to optimize deployment strategies and predict potential failures.",
      tech: ["Jenkins", "Python", "TensorFlow", "GitHub Actions"],
      github: "https://github.com",
      demo: null
    },
    {
      title: "Network Security Dashboard",
      description: "Real-time network monitoring and threat detection system with automated response capabilities and comprehensive analytics.",
      tech: ["React", "Node.js", "Elasticsearch", "Grafana"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "LLM Model Deployment Platform",
      description: "Scalable platform for deploying and managing large language models with optimized inference and vector database integration.",
      tech: ["FastAPI", "Docker", "Pinecone", "OpenAI"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Microservices Orchestration",
      description: "Complete microservices architecture with service mesh, observability, and automated canary deployments.",
      tech: ["Kubernetes", "Istio", "Prometheus", "Jaeger"],
      github: "https://github.com",
      demo: null
    },
    {
      title: "Cloud Cost Optimizer",
      description: "ML-driven cost optimization tool that analyzes cloud usage patterns and provides automated cost reduction recommendations.",
      tech: ["Python", "AWS Lambda", "Data Science", "Streamlit"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in cloud infrastructure, DevOps automation, and AI integration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  GitHub →
                </a>
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;