import { motion } from "motion/react";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-muted border border-border text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              <span>{t.hero.available}</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6">
              {t.hero.name.split(" ")[0]} {t.hero.name.split(" ").slice(1).join(" ")}
              <span className="block text-primary mt-2 text-3xl sm:text-4xl lg:text-5xl font-sans font-medium tracking-normal">
                {t.hero.title}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a 
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                id="view-projects-btn"
              >
                {t.hero.viewProjects}
                <ArrowRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" />
              </a>
              <a 
                href="/solihhambal_CV.pdf" 
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border bg-background hover:bg-muted transition-colors font-medium"
                id="download-cv-btn"
              >
                {t.hero.downloadCV}
                <Download className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border bg-background hover:bg-muted transition-colors font-medium"
                id="contact-me-btn"
              >
                {t.hero.contactMe}
                <Mail className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
              </a>
            </div>

            <div className="flex items-center space-x-6 rtl:space-x-reverse text-muted-foreground">
              <a href="https://github.com/solihahambal-afk" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors group">
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/solih-hambal-28933929a" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors group">
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:solihahambal@gmail.com" className="hover:text-foreground transition-colors group">
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Abstract background blobs */}
      <div className="absolute top-1/4 right-0 rtl:right-auto rtl:left-0 -z-10 translate-x-1/3 rtl:-translate-x-1/3 opacity-[0.08] dark:opacity-20 pointer-events-none blur-[100px]">
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-foreground to-foreground/50"></div>
      </div>
    </section>
  );
}
