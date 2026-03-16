import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import antigravityLogo from "@/assets/antigravity-logo.png";
import { ParallaxSection, TextReveal, TiltCard } from "./animations";

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
  const isInView = useInView(ref, { amount: 0.2, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      <ParallaxSection speed={0.05} className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-bold tracking-[0.4em] uppercase mb-4 block">
            EXPERTISE
          </span>
          <h2 className="text-5xl md:text-7xl font-black mt-2 mb-8 tracking-tighter">
            <TextReveal splitBy="chars" variant="slide">Skills.</TextReveal>
          </h2>
          <div className="max-w-4xl">
            <TextReveal variant="blur" delay={0.4} className="text-muted-foreground text-xl leading-relaxed" splitBy="words">
              As a versatile full-stack developer, I specialize in building scalable web and mobile applications using modern technologies. Proficient in HTML, CSS, JavaScript, React.js, and TypeScript for front-end development, with expertise in Python, Java, and R for back-end solutions. Experienced with AI tools including Docker, Ollama, N8n AI Agent, and Flutter for cross-platform development. I focus on delivering clean, maintainable code while ensuring seamless user experiences and robust application performance.
            </TextReveal>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {expertisePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <TiltCard tiltStrength={5} className="h-full">
                <div className="bg-card/30 backdrop-blur-md p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 h-full flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    {index + 1}
                  </div>
                  <p className="text-foreground/80 text-base leading-relaxed font-medium">{point}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-6 p-10 bg-card/10 backdrop-blur-sm rounded-3xl border border-border/20"
        >
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.04 }}
              className="group"
            >
              <TiltCard tiltStrength={15} className="w-24 h-24">
                <div className="bg-background/80 backdrop-blur-md w-full h-full rounded-2xl border border-border/40 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] transition-all group overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img src={tech.logo} alt={tech.name} className="w-10 h-10 object-contain relative z-10 filter group-hover:grayscale-0 grayscale transition-all duration-300" />
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors relative z-10">{tech.name}</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </ParallaxSection>
    </section>
  );
}
