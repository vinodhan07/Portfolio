import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Education</h2>
          <p className="text-muted-foreground">Formal academics focusing on core computing foundations.</p>
          <div className="w-16 h-1 bg-primary mt-4" />
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg mt-1">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Bachelor of Engineering in Computer Science
                </h3>
                <p className="text-primary font-medium mt-1">
                  Knowledge Institute of Technology
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  CGPA: 7.5 (Till 4th Sem)
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 md:flex-col md:items-end">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-full border border-border text-sm text-muted-foreground">
                <Calendar size={14} />
                <span>2023 – 2027</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-full border border-border text-sm text-muted-foreground">
                <MapPin size={14} />
                <span>Salem, India</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
