import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import antigravityLogo from "@/assets/antigravity-logo.png";

const expertisePoints = [
  "Proficient in building interactive, user-friendly web and mobile applications using modern frameworks and libraries.",
  "Expert at integrating APIs and developing back-end solutions to support dynamic and scalable applications.",
  "Focused on crafting clean, maintainable code to ensure long-term app performance and reliability.",
  "Proficient in using version control systems like Git and deploying applications to cloud platforms, ensuring efficient collaboration and scalable, reliable delivery.",
  "Strong understanding of UI/UX principles to deliver visually appealing, functional designs that align with user needs."
];

const techIcons = [
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "n8n", logo: "https://n8n.io/favicon.ico" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Colab", logo: "https://colab.research.google.com/img/colab_favicon_256px.png" },
  { name: "Cursor", logo: "https://www.cursor.com/favicon.ico" },
  { name: "Antigravity", logo: antigravityLogo },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-gray-400 text-sm font-light tracking-[0.3em] uppercase">
            EXPERTISE
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-2 mb-8">SKILLS.</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-5xl">
            As a versatile full-stack developer, I specialize in building scalable web and mobile applications using modern technologies. Proficient in HTML, CSS, JavaScript, React.js, and TypeScript for front-end development, with expertise in Python, Java, and R for back-end solutions. Experienced with AI tools including Docker, Ollama, N8n AI Agent, and Flutter for cross-platform development. I focus on delivering clean, maintainable code while ensuring seamless user experiences and robust application performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {expertisePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover:border-primary/50 hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.15)] transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">•</span>
                <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
              whileHover={{ scale: 1.15, y: -8 }}
              className="bg-card/50 backdrop-blur-sm w-20 h-20 rounded-2xl border border-border/50 flex flex-col items-center justify-center gap-2 hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] transition-all group"
              title={tech.name}
            >
              <img src={tech.logo} alt={tech.name} className="w-10 h-10 object-contain" />
              <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
