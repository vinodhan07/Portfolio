export interface Project {
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  demoUrl?: string;
  image?: string;
  featured?: boolean;
}

export const staticProjects: Project[] = [
  {
    title: "AI Virtual Voice Assistant",
    description: "An intelligent voice-activated assistant powered by AI for seamless voice interactions and task automation.",
    tech: ["Python", "AI/ML", "Speech Recognition", "NLP"],
    repoUrl: "https://github.com/vinodhan07/AI_Virutal_VOICE_ASSIT",
    featured: true,
  },
  {
    title: "Gen AI Model",
    description: "A generative AI model implementation showcasing advanced machine learning capabilities and model training.",
    tech: ["Python", "TensorFlow", "Machine Learning", "AI"],
    repoUrl: "https://github.com/vinodhan07/Gen-AI-Model",
    featured: true,
  },
  {
    title: "FinAI HackOps",
    description: "Financial AI automation platform with intelligent data processing and analytics capabilities.",
    tech: ["TypeScript", "PLpgSQL", "AI/ML", "Financial Tech"],
    repoUrl: "https://github.com/vinodhan07/finai-hackops",
    featured: true,
  },
  {
    title: "n8n AI Automation Agents",
    description: "Automated workflow agents built with n8n for intelligent task orchestration and process automation.",
    tech: ["JavaScript", "n8n", "Automation", "AI"],
    repoUrl: "https://github.com/vinodhan07/n8n-AI-Automation-Agents",
    featured: false,
  },
  {
    title: "Translator-Model",
    description: "A language translation model leveraging NLP techniques for accurate multilingual text conversion and real-time translation.",
    tech: ["HTML", "CSS", "JavaScript", "NLP"],
    repoUrl: "https://github.com/vinodhan07/Translator-Model",
    featured: false,
  },
  {
    title: "AI Agents Intensive Course",
    description: "Comprehensive course materials on building AI agents, covering architecture, prompts, and agent design patterns.",
    tech: ["Jupyter Notebook", "Python", "AI/ML", "Education"],
    repoUrl: "https://github.com/vinodhan07/AI_Agents_Intensive_Course_with_Google",
    featured: false,
  },
];
