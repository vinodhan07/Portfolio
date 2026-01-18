export interface Project {
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  demoUrl?: string;
  image?: string;
  featured?: boolean;
  year?: string;
}

export const staticProjects: Project[] = [
  {
    title: "BioKey",
    description: "BioKey is a cloud-powered biometric media access system integrating a custom fingerprint device with secure authentication. I engineered a cross-platform architecture enabling encrypted, reliable, and low-latency media retrieval with seamless plug-and-play usability and scalable cloud deployment.",
    tech: ["React Native", "React", "Node.js", "Redux", "Docker", "AWS EC2", "CI/CD", "MongoDB"],
    repoUrl: "https://github.com/vinodhan07",
    year: "2024",
    featured: true,
  },
  {
    title: "AlgoLog",
    description: "AlgoLog is a real-time coding analytics platform that aggregates student performance across multiple platforms using an automated scraping pipeline. It visualizes progress through interactive dashboards and generates insights to help institutions track outcomes at scale.",
    tech: ["React", "Node.js", "Redux", "Tailwind CSS", "Web Scraping", "Cheerio", "Chart.js", "MongoDB"],
    repoUrl: "https://github.com/vinodhan07",
    year: "2025",
    featured: true,
  },
  {
    title: "Swoosh",
    description: "Swoosh is a secure peer-to-peer file-sharing platform enabling instant QR-based device pairing. It creates isolated, encrypted transfer rooms and uses a hybrid Electron + Spring microservice backend to ensure fast, reliable, and scalable file transfers.",
    tech: ["React", "TailwindCSS", "Redux Toolkit", "Electron", "Spring Boot", "Spring Cloud", "Spring Security", "MySQL"],
    repoUrl: "https://github.com/vinodhan07",
    year: "2025",
    featured: true,
  },
  {
    title: "Vulnora AI",
    description: "Vulnora AI is an offline, LLM-driven security scanner that detects deep, context-rich vulnerabilities and hardcoded secrets. It validates findings, generates actionable fixes, and supports multi-language analysis through a modular, cross-platform architecture.",
    tech: ["Python", "FastAPI", "React", "Node.js", "Tailwind", "Ollama", "Llama 3", "Electron", "CLI"],
    repoUrl: "https://github.com/vinodhan07",
    year: "Ongoing",
    featured: true,
  },
];
