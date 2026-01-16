import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Publications } from "@/components/Publications";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Chatbot } from "@/components/Chatbot";
import { MouseFollower } from "@/components/MouseFollower";
const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <MouseFollower />
      <BackgroundEffects />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Publications />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </div>
  );
};

export default Index;
