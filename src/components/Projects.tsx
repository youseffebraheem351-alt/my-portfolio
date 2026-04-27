import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectShopping from "@/assets/project-shopping.jpg";
import projectGames from "@/assets/project-games.jpg";
import projectWeather from "@/assets/project-weather.jpg";

const projects = [
  {
    title: "E-Commerce App",
    description: "Full-featured e-commerce platform with product listings, cart functionality, and user authentication.",
    image: projectEcommerce,
    liveUrl: "https://ecommerce-app-azure-rho.vercel.app/login",
    githubUrl: "https://github.com/youseffebraheem351-alt/ecommerce-app",
    tags: ["Angular", "TypeScript", "Bootstrap"],
  },
  {
    title: "Online Shopping",
    description: "Modern shopping platform with sleek UI, product categories, and seamless checkout experience.",
    image: projectShopping,
    liveUrl: "https://online-shopping-two-lilac.vercel.app/login",
    githubUrl: "https://github.com/youseffebraheem351-alt/Online-Shopping",
    tags: ["Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Games Portal",
    description: "Gaming platform featuring MMORPG games catalog with category filtering and game details.",
    image: projectGames,
    liveUrl: "https://games-app-kappa.vercel.app/mmorpg",
    githubUrl: "https://github.com/youseffebraheem351-alt/games-app",
    tags: ["Angular", "TypeScript","Tailwind CSS"],
  },
  {
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts and beautiful UI visualizations.",
    image: projectWeather,
    liveUrl: "https://weather-app-six-orcin-52.vercel.app/",
    githubUrl: "https://github.com/youseffebraheem351-alt/weather-app",
    tags: ["Angular", "Weather API", "TypeScript"],
  },
  {
    title: "DCineVault",
    description: "Cinema-style hub for movies & TV: trending picks, fast search, and a clean watchlist experience.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80",
    liveUrl: "https://my-stream-list.vercel.app/Home",
    githubUrl: "https://github.com/youseffebraheem351-alt/MyStreamList",
    tags: ["Angular", "TypeScript", "Tailwind CSS", "Dark/Light Mode"],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div
        onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
        className="block cursor-pointer"
      >
        <div className="glass-card rounded-2xl overflow-hidden card-3d">
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            
            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <span className="glass px-4 py-2 rounded-full text-foreground font-medium flex items-center gap-2">
                <ExternalLink size={18} /> View Live
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={22} />
              </a>
            </div>

            <p className="text-muted-foreground mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in frontend development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/youseffebraheem351-alt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass px-8 py-4 rounded-full font-semibold hover-glow transition-all group"
          >
            <Github size={20} className="group-hover:rotate-12 transition-transform" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
