const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Cloudflare"]
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
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic", "Jaeger"]
    },
    {
      title: "Programming & Scripting",
      skills: ["Python", "Go", "Bash", "TypeScript", "SQL", "YAML"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern cloud infrastructure and intelligent systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-8 shadow-soft border border-border/50 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
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
  );
};

export default Skills;