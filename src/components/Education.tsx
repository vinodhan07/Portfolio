import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

interface EducationItem {
  title: string;
  institution: string;
  grade: string;
  duration: string;
  location: string;
  isMajor?: boolean;
}

const educationItems: EducationItem[] = [
  {
    title: "Bachelor of Computer Science and Engineering",
    institution: "Knowledge Institute of Technology",
    grade: "CGPA: 7.5 (Till 4th Sem)",
    duration: "2023 – 2027",
    location: "Salem, India",
    isMajor: true,
  },
  {
    title: "Higher Secondary Education (12th)",
    institution: "Jayarani Matric Hr. Sec. School",
    grade: "66%",
    duration: "2023",
    location: "Salem, India",
  },
  {
    title: "Secondary Education (10th)",
    institution: "Sri Vidya Mandir Hr. Sec. School",
    grade: "75%",
    duration: "2021",
    location: "Salem, India",
  },
];

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
          Formal academics focusing on core computing foundations.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 60 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-primary rounded-full mb-12"
        />

        {/* Decorative floating circles */}
        <div className="relative">
          <div className="absolute top-4 left-1/2 w-3 h-3 rounded-full bg-primary" />
          <div className="absolute top-8 left-[55%] w-4 h-4 rounded-full border-2 border-muted-foreground/30" />
        </div>

        {/* Bachelor's Degree - Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 mb-8"
        >
          <div className="bg-card/30 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">{educationItems[0].title}</h3>
                  <p className="text-primary">{educationItems[0].institution}</p>
                  <p className="text-muted-foreground text-sm mt-1">{educationItems[0].grade}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 ml-14 md:ml-0">
                <span className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full text-sm text-muted-foreground">
                  <Calendar size={14} />
                  {educationItems[0].duration}
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full text-sm text-muted-foreground">
                  <MapPin size={14} />
                  {educationItems[0].location}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Education Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {educationItems.slice(1).map((edu, index) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
            >
              <div className="bg-card/30 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors h-full">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="text-primary" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">{edu.title}</h3>
                    <p className="text-primary text-sm">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm mt-1">{edu.grade}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 bg-card/50 border border-border rounded-full text-xs text-muted-foreground">
                        <Calendar size={12} />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1.5 bg-card/50 border border-border rounded-full text-xs text-muted-foreground">
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
