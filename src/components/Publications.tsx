import { motion } from "framer-motion";
import { BookOpen, ExternalLink, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { ParallaxSection, TextReveal, TiltCard, MagneticButton } from "./animations";

const publications = [
  {
    title: "A Flexible Multi-Task Structure Contextual Modality Attention Based Emotion Recognition",
    type: "Published Research Paper",
    link: "https://ieeexplore.ieee.org/abstract/document/11167765", 
    journal: "IEEE Xplore",
  },
];

export function Publications() {
  return (
    <section id="publications" className="py-24 relative overflow-hidden">
      <ParallaxSection speed={0.06} className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-4">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            <TextReveal splitBy="words">Publications</TextReveal>
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground mb-4 text-lg"
        >
          Research work contributing to the field of AI and Machine Learning.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
          className="h-1.5 bg-primary rounded-full mb-16"
        />

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
            >
              <TiltCard tiltStrength={2}>
                <div className="relative bg-card/20 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-border/40 overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <BookOpen size={120} />
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          <FileText size={20} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-primary/70">{pub.type}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>
                      <p className="text-muted-foreground font-bold tracking-wide">{pub.journal}</p>
                    </div>
                    
                    <MagneticButton strength={0.3}>
                      <Button
                        asChild
                        className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 rounded-xl text-sm font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-[0_10px_30px_-10px_rgba(var(--primary-rgb),0.5)]"
                      >
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          View Publication
                          <ExternalLink size={18} />
                        </a>
                      </Button>
                    </MagneticButton>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </ParallaxSection>
    </section>
  );
}
