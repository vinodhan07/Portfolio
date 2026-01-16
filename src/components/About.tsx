import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal } from "lucide-react";
import profileImg from "@/assets/profile.png";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">About Me</h2>
          <p className="text-muted-foreground">Get to know me better.</p>
          <div className="w-16 h-1 bg-primary mt-4" />
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Text content */}
            <div className="flex-1 space-y-6">
              <p className="text-muted-foreground italic leading-relaxed">
                I'm a Software Developer from Salem, India, crafting scalable, secure, and user-centric digital experiences.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I specialize in building system architectures that perform under real-world load—whether it's distributed backends, cloud-native apps, or intelligent tools powered by AI.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I thrive at the intersection of engineering, problem-solving, and <span className="text-primary">product thinking</span>. Every project I build is driven by clarity, precision, and a relentless commitment to grow beyond yesterday's limits.
              </p>

              {/* Quote */}
              <div className="border-l-4 border-primary pl-4 py-2">
                <p className="text-foreground font-medium">
                  "Turning ideas into systems. Turning systems into impact."
                </p>
              </div>

              {/* Terminal style text */}
              <div className="flex items-center gap-2 text-sm">
                <Terminal size={16} className="text-muted-foreground" />
                <span className="text-primary">CODE.</span>
                <span className="text-primary">SCALE.</span>
                <span className="text-primary">SECURE.</span>
                <span className="text-primary">REPEAT.</span>
              </div>
            </div>

            {/* Avatar */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="flex-shrink-0"
            >
              <img 
                src={profileImg} 
                alt="Vinodhan - Full Stack Developer" 
                className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
