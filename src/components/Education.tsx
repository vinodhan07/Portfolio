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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground mb-2"
        >
          My academic journey.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-primary rounded-full mb-8"
        />

        {/* Education Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          {/* Bachelor's Degree Card */}
          <div className="bg-card/30 backdrop-blur-sm p-6 rounded-2xl border border-border/50 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Bachelor of Computer Science and Engineering</h3>
                  <p className="text-primary">Knowledge Institute of Technology</p>
                  <p className="text-muted-foreground text-sm mt-1">CGPA: 7.7 (Till 5th Sem)</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 ml-14 md:ml-0">
                <span className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full text-sm text-muted-foreground">
                  <Calendar size={14} />
                  2023 – 2027
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full text-sm text-muted-foreground">
                  <MapPin size={14} />
                  Salem, India
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Education Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card/30 backdrop-blur-sm p-5 rounded-2xl border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">Higher Secondary Education (12th)</h4>
                  <p className="text-primary text-sm">Jayarani Matric Hr. Sec. School</p>
                  <p className="text-muted-foreground text-sm">66%</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-card/50 border border-border rounded-full text-xs text-muted-foreground">
                      <Calendar size={12} />
                      2023
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-card/50 border border-border rounded-full text-xs text-muted-foreground">
                      <MapPin size={12} />
                      Salem, India
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-card/30 backdrop-blur-sm p-5 rounded-2xl border border-border/50"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">Secondary Education (10th)</h4>
                  <p className="text-primary text-sm">Sri Vidya Mandir Hr. Sec. School</p>
                  <p className="text-muted-foreground text-sm">75%</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-card/50 border border-border rounded-full text-xs text-muted-foreground">
                      <Calendar size={12} />
                      2021
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-card/50 border border-border rounded-full text-xs text-muted-foreground">
                      <MapPin size={12} />
                      Salem, India
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
