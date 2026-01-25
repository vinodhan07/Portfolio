import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

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

  const inputClass = "w-full bg-background/50 border-border rounded-xl h-12 placeholder:text-muted-foreground/50 disabled:opacity-50";

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-card/30 backdrop-blur-sm p-8 rounded-2xl border border-border/50"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-1">Get in</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Touch</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have a question or just want to say hi? I'm always open to discussing new opportunities.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                <a href={`mailto:${EMAIL}`} className="text-foreground hover:text-primary transition-colors font-medium">{EMAIL}</a>
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-card/30 backdrop-blur-sm p-6 rounded-2xl border border-border/50 space-y-4">
              <Input name="name" required placeholder="Your Name" maxLength={100} disabled={isSubmitting} className={inputClass} />
              <Input name="email" type="email" required placeholder="Your Email" maxLength={255} disabled={isSubmitting} className={inputClass} />
              <Textarea name="message" required placeholder="Message" maxLength={1000} rows={5} disabled={isSubmitting}
                className="w-full bg-background/50 border-border rounded-xl resize-none placeholder:text-muted-foreground/50 disabled:opacity-50" />
              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 rounded-xl h-12 text-base font-medium">
                {isSubmitting ? <><Loader2 className="mr-2 animate-spin" size={18} />Sending...</> : <>Send Message<Send className="ml-2" size={18} /></>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
