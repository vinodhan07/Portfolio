import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-12 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-sm font-medium text-center md:text-left tracking-wide">
          © {currentYear} <span className="text-primary hover:scale-110 transition-transform inline-block cursor-default">Vinodhan V A</span>. Crafted with passion & AI.
        </p>
        <div className="flex items-center gap-6">
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${portfolioData.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors p-2" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
