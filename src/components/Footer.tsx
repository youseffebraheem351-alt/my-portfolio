import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-24">
      <div className="container mx-auto px-6 pb-10">
        <div className="glass-card rounded-2xl px-6 py-8 md:px-10 md:py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-display text-xl font-bold">
                Let&apos;s build something <span className="text-gradient">clean</span>.
              </div>
              <div className="text-muted-foreground mt-2 max-w-xl">
                Available for frontend work — modern UI, smooth UX, and performance-focused builds.
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                className="glass hover-glow rounded-full p-3 text-muted-foreground hover:text-primary transition-colors"
                href="mailto:youssefebraheem351@gmail.com"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                className="glass hover-glow rounded-full p-3 text-muted-foreground hover:text-primary transition-colors"
                href="https://github.com/youseffebraheem351-alt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                className="glass hover-glow rounded-full p-3 text-muted-foreground hover:text-primary transition-colors"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-muted-foreground">
              © {year} Youssef Ebraheem. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground">
              Dark mode ready • Tailwind • Vite
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

