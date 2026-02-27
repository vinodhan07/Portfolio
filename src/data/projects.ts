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
   title: "AI-Based Image Similarity & Web Scraping Tool",
   description: "An AI-powered image similarity system built using OpenCLIP embeddings and FAISS vector search to enable high-speed visual matching across large datasets. Includes automated web scraping pipelines, metadata processing, and a full-stack FastAPI + React implementation for real-time similarity comparison.",
   tech: ["Python", "OpenCLIP", "FAISS", "FastAPI", "React.js", "Web Scraping", "SQLite"],repoUrl: "https://github.com/vinodhan07/AI-Based-Image-Similarity-WEB-Scrapping-tool.git",
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
    title: "Real-Time Annotation Using Videos",
    description: "Developed a real-time video annotation system that captures and labels video frames on the fly, enabling efficient labeling workflows for computer vision model training and dataset generation.",
    tech: ["Python", "OpenCV", "Real-Time Video Processing", "Computer Vision", "Machine Learning", "GUI/Visualization"],
    repoUrl: "https://github.com/vinodhan07/REAL-TIME-ANNOTATION-USING-VIDEOS.git",
    featured: true,
  },
  {
    title: "AI Agents Intensive Course",
    description: "Comprehensive course materials on building AI agents, covering architecture, prompts, and agent design patterns.",
    tech: ["Jupyter Notebook", "Python", "AI/ML", "Education"],
    repoUrl: "https://github.com/vinodhan07/AI_Agents_Intensive_Course_with_Google",
    featured: false,
  },
];
