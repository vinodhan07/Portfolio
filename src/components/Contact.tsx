import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Github, href: "https://github.com/vinodhan07", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vavinodhan/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:vinovb21@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Get in</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Touch</h2>
          
          <p className="text-muted-foreground mb-12 max-w-lg">
            Have a question or just want to say hi? I'm always open to discussing new opportunities, creative ideas, or just connecting.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                <a
                  href="mailto:vinovb21@gmail.com"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  vinovb21@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-3"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
