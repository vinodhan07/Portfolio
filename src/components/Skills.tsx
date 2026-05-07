import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import antigravityLogo from "@/assets/antigravity-logo.png";
import { ParallaxSection, TextReveal } from "./animations";

const techIcons = [
  { name: "HTML5",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "React",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },

  { name: "Java",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Numpy",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Pandas",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },

  { name: "FastAPI",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "MySQL",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB",    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Supabase",   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },

  { name: "OpenCV",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "YOLOv8",     logo: "https://avatars.githubusercontent.com/u/26833451?s=200&v=4" },

  { name: "OpenAI",     logo: "https://avatars.githubusercontent.com/u/14957082?s=200&v=4" },
  { name: "Anthropic",     logo: "https://avatars.githubusercontent.com/u/76263028?s=200&v=4" },
  { name: "Gemini",     logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Google-gemini-icon.svg" },
  { name: "Ollama",     logo: "https://avatars.githubusercontent.com/u/151674099?s=200&v=4" },
  { name: "Langgraph", logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/langgraph-color.png"},
  { name: "Qdrant",     logo: "https://avatars.githubusercontent.com/u/73504361?s=200&v=4" },
  { name: "n8n",        logo: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4" },

  { name: "Git",          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invertDark: true },
  { name: "Postman",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-plain.svg" },
  { name: "Docker",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Colab",        logo: "https://colab.research.google.com/img/colab_favicon_256px.png" },
  { name: "Cursor",       logo: "https://www.cursor.com/favicon.ico" },
  { name: "Antigravity",  logo: antigravityLogo, invertDark: true },
];

function SkillCard({ tech }: { tech: typeof techIcons[number] }) {
  const [sweepKey, setSweepKey] = useState(0);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.5, y: 20 },
        show:   { opacity: 1, scale: 1,   y: 0,  transition: { type: "spring", stiffness: 200 } },
      }}
      className="group"
    >
      <motion.div
        className="w-24 h-24 relative rounded-2xl"
        whileHover={{
          boxShadow: "0 0 0 1px rgba(var(--primary-rgb), 0.4), 0 6px 32px -4px rgba(var(--primary-rgb), 0.45)",
        }}
        transition={{ duration: 0.22 }}
        onHoverStart={() => setSweepKey((k) => k + 1)}
      >
        <div className="bg-background/80 backdrop-blur-md w-full h-full rounded-2xl border border-border/40 group-hover:border-primary/60 flex flex-col items-center justify-center gap-3 transition-colors duration-300 overflow-hidden relative">

          {/* Hover tint */}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* One-shot light sweep per hover-enter */}
          <AnimatePresence>
            <motion.div key={sweepKey} className="absolute inset-0 pointer-events-none z-10 overflow-hidden rounded-2xl">
              <motion.div
                className="absolute top-0 h-full w-[60%]"
                style={{
                  background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.22) 50%, transparent 80%)",
                  filter: "blur(3px)",
                }}
                initial={{ left: "-65%" }}
                animate={{ left: "150%" }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              />
            </motion.div>
          </AnimatePresence>

          <img
            src={tech.logo}
            alt={tech.name}
            className={`w-10 h-10 object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all duration-300 ${tech.invertDark ? "dark:invert" : ""}`}
          />
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors duration-300 relative z-10">
            {tech.name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mt-2 mb-8 tracking-tighter">
            <TextReveal splitBy="chars" variant="slide">Skills.</TextReveal>
          </h2>
          <div className="max-w-4xl">
            <TextReveal variant="blur" delay={0.4} className="text-muted-foreground text-xl leading-relaxed" splitBy="words">
              As a versatile full-stack developer, I specialize in building scalable web and mobile applications using modern technologies. Proficient in HTML, CSS, JavaScript, React.js, and TypeScript for front-end development, with expertise in Python, Java, and R for back-end solutions. Experienced with AI tools including Docker, Ollama, N8n AI Agent, and Flutter for cross-platform development. I focus on delivering clean, maintainable code while ensuring seamless user experiences and robust application performance.
            </TextReveal>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.05, delayChildren: 0.8 },
            },
          }}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-wrap justify-center gap-6 p-10 bg-card/10 backdrop-blur-sm rounded-3xl border border-border/20"
        >
          {techIcons.map((tech) => (
            <SkillCard key={tech.name} tech={tech} />
          ))}
        </motion.div>
      </ParallaxSection>
    </section>
  );
}
