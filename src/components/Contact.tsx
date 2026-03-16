import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, Loader2, MapPin, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MagneticButton, TextReveal, TiltCard, ParallaxSection } from "./animations";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const EMAIL = "vinovb21@gmail.com";

const socialLinks = [
  { Icon: Github, href: "https://github.com/vinodhan07", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/vavinodhan/", label: "LinkedIn" },
  { Icon: Mail, href: `mailto:${EMAIL}`, label: "Email" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      setIsSubmitting(false);
      return;
    }

    if (!WEB3FORMS_KEY) {
      window.location.href = `mailto:${EMAIL}?subject=Portfolio Contact from ${encodeURIComponent(data.name)}&body=${encodeURIComponent(data.message)}%0A%0AFrom: ${encodeURIComponent(data.email)}`;
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...data, subject: `Portfolio Contact from ${data.name}` }),
      });
      const result = await res.json();
      if (result.success) {
        toast({ title: "Message sent! ✨", description: "I'll get back to you soon!" });
        form.reset();
      } else throw new Error(result.message);
    } catch (err) {
      toast({ title: "Failed to send", description: err instanceof Error ? err.message : "Try again later", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full bg-background/50 border-border/40 rounded-xl px-5 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/40";

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      <ParallaxSection speed={0.15} className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="mb-4">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            <TextReveal variant="slide">Get In Touch</TextReveal>
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground mb-4 text-lg"
        >
          Let's discuss how we can build something incredible together.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
          className="h-1.5 bg-primary rounded-full mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/0 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <div className="relative p-10 bg-card/20 backdrop-blur-xl rounded-2xl border border-border/40 shadow-2xl">
                <h3 className="text-3xl font-black text-foreground mb-4 leading-tight">
                  <span className="text-primary">Ready</span> to start your next project?
                </h3>
                <p className="text-muted-foreground text-lg mb-10">
                  I'm currently available for freelance work and internship opportunities.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">Email Me</p>
                      <a href={`mailto:${EMAIL}`} className="text-foreground font-bold hover:text-primary transition-colors">{EMAIL}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">Location</p>
                      <p className="text-foreground font-bold">Salem, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 mb-4 px-1">Connect with me</p>
                  <div className="flex gap-4">
                    {socialLinks.map(({ Icon, href, label }) => (
                      <MagneticButton key={label} strength={0.4}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 rounded-2xl bg-secondary/30 flex items-center justify-center text-foreground hover:text-primary hover:bg-primary/20 border border-border/40 transition-all duration-300"
                          aria-label={label}
                        >
                          <Icon size={24} />
                        </a>
                      </MagneticButton>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <TiltCard tiltStrength={2}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-card/20 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-border/40 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Send size={120} />
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 px-1">Full Name</label>
                    <Input name="name" required placeholder="John Doe" maxLength={100} disabled={isSubmitting} className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 px-1">Email Address</label>
                    <Input name="email" type="email" required placeholder="john@example.com" maxLength={255} disabled={isSubmitting} className={inputClass} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 px-1">Message</label>
                  <Textarea name="message" required placeholder="Tell me about your project..." maxLength={1000} rows={5} disabled={isSubmitting}
                    className="w-full bg-background/50 border-border/40 rounded-xl p-5 resize-none placeholder:text-muted-foreground/40 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                </div>
                
                <MagneticButton strength={0.2} className="w-full">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-16 rounded-xl text-lg font-black flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_-10px_rgba(var(--primary-rgb),0.5)]"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="animate-spin" size={24} /> SENDING...</>
                    ) : (
                      <>SEND MESSAGE <Send size={20} /></>
                    )}
                  </Button>
                </MagneticButton>
              </form>
            </motion.div>
          </TiltCard>
        </div>
      </ParallaxSection>
    </section>
  );
}
