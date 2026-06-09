import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t, dir } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-start" style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}>
            <span className="font-display font-bold text-xl mb-2">{t.footer.title}</span>
            <p className="text-sm text-muted-foreground text-center md:text-start" style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}>
              {t.footer.subtitle}
            </p>
          </div>
          
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="https://github.com/solihahambal-afk" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors group">
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/solih-hambal-28933929a" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors group">
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:solihahambal@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors group">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="sr-only">Email</span>
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground font-medium flex flex-row-reverse rtl:flex-row gap-1" dir="ltr">
             <span>&copy; {currentYear !== 2026 ? "2026 - " + currentYear : "2026"}</span>
             <span>{t.footer.rights}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
