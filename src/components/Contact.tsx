import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { icon: Github, href: "https://github.com/vinodhan07", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vavinodhan/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:vinovb21@gmail.com", label: "Email" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const mailtoLink = `mailto:vinovb21@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
      name.trim()
    )}&body=${encodeURIComponent(message.trim())}%0A%0AFrom: ${encodeURIComponent(email.trim())}`;

    window.location.href = mailtoLink;

    toast({
      title: "Opening email client",
      description: "Your default email client will open with the message pre-filled.",
    });

    setIsSubmitting(false);
    form.reset();
  };

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Get in</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Touch</h2>
            
            <p className="text-muted-foreground mb-12 max-w-lg">
              Have a question or just want to say hi? I'm always open to discussing new opportunities, creative ideas, or just connecting.
            </p>

            <div className="mb-8">
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
            </div>

            <div className="flex gap-3">
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
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-card/50 p-6 rounded-2xl border border-border space-y-4">
              <Input
                name="name"
                type="text"
                required
                placeholder="Your Name"
                maxLength={100}
                className="w-full bg-background/50 border-border rounded-xl h-12 placeholder:text-muted-foreground/50"
              />

              <Input
                name="email"
                type="email"
                required
                placeholder="Your Email"
                maxLength={255}
                className="w-full bg-background/50 border-border rounded-xl h-12 placeholder:text-muted-foreground/50"
              />

              <Textarea
                name="message"
                required
                placeholder="Message"
                maxLength={1000}
                rows={5}
                className="w-full bg-background/50 border-border rounded-xl resize-none placeholder:text-muted-foreground/50"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-xl h-12 text-base font-medium"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2" size={18} />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
