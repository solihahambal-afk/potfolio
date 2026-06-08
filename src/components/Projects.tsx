import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Imam International Academy",
    url: "https://imaminternationalacademy.netlify.app",
    description: "A modern educational institution website designed to provide information about academic programs, admissions, school activities, and student resources.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: ["Responsive Design", "Modern User Interface", "School Information Management"]
  },
  {
    title: "Imam Market",
    url: "https://imammarket.netlify.app",
    description: "A digital marketplace platform that connects buyers and sellers through a simple and user-friendly online shopping experience.",
    technologies: ["JavaScript", "Supabase", "HTML", "CSS"],
    features: ["Authentication", "Product Listings", "User Dashboard", "Responsive Design"]
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-muted/30" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-muted/40 border border-border flex flex-col justify-between overflow-hidden rounded-3xl hover:border-primary/50 transition-all"
                id={`project-card-${index}`}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold font-display">{project.title}</h3>
                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded shadow-sm font-bold uppercase tracking-wider">
                      Live Project
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map(feature => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-foreground/50 mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-1 bg-background border border-border rounded text-muted-foreground uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 border-t border-border bg-muted/30 flex justify-end">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-medium hover:underline"
                  >
                    View Live Demo
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
