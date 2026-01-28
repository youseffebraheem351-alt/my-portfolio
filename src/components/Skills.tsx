import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML5", level: 95, color: "from-orange-500 to-red-500" },
  { name: "CSS3", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", level: 88, color: "from-yellow-400 to-yellow-600" },
  { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-800" },
  { name: "Angular", level: 90, color: "from-red-500 to-pink-500" },
  { name: "React", level: 80, color: "from-cyan-400 to-blue-500" },
  { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-cyan-500" },
  { name: "Bootstrap", level: 88, color: "from-purple-500 to-violet-600" },
  { name: "jQuery", level: 75, color: "from-blue-400 to-indigo-500" },
  { name: "Angular Material", level: 85, color: "from-pink-500 to-rose-500" },
  { name: "Material UI", level: 78, color: "from-blue-500 to-indigo-600" },
  { name: "Sass", level: 88, color: "from-pink-400 to-pink-600" },
  { name: "RxJS", level: 82, color: "from-purple-400 to-pink-500" },
  { name: "Git", level: 85, color: "from-orange-400 to-red-500" },
  { name: "GitHub", level: 88, color: "from-gray-400 to-gray-600" },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 skill-glow group cursor-pointer"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
          {skill.name}
        </h3>
        <span className="text-primary font-bold">{skill.level}%</span>
      </div>
      
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies I've mastered throughout my journey as a Frontend Developer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: "1+", label: "Years Experience" },
            { number: "5+", label: "Projects Completed" },
            { number: "15+", label: "Technologies" },
            { number: "100%", label: "Passion" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-6 text-center hover-glow transition-all"
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                {stat.number}
              </h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
