import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import antigravityLogo from "@/assets/antigravity-logo.png";
import { ParallaxSection, TextReveal, TiltCard } from "./animations";



const techIcons = [
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "n8n", logo: "https://n8n.io/favicon.ico" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Colab", logo: "https://colab.research.google.com/img/colab_favicon_256px.png" },
  { name: "Cursor", logo: "https://www.cursor.com/favicon.ico" },
  { name: "Ollama", logo: "https://cdn.simpleicons.org/ollama" },
  { name: "Antigravity", logo: antigravityLogo },
  { name: "Qdrant", logo: "https://cdn.simpleicons.org/qdrant" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "LangChain", logo: "https://cdn.simpleicons.org/langchain" },
  { name: "Numpy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
];

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
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.8,
              }
            }
          }}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="flex flex-wrap justify-center gap-6 p-10 bg-card/10 backdrop-blur-sm rounded-3xl border border-border/20"
        >
          {techIcons.map((tech) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { opacity: 0, scale: 0.5, y: 20 },
                show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200 } }
              }}
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
