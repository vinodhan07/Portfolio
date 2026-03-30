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
            tech: ["Python", "OpenCLIP", "FAISS", "FastAPI", "React.js", "Web Scraping", "SQLite"],
            repoUrl: "https://github.com/vinodhan07/AI-Based-Image-Similarity-WEB-Scrapping-tool.git",
        },
        {
            title: "AutoCAD-drawings-and-generates-detailed-Bill-of-Quantities",
            description: "Developed an automated system that processes AutoCAD drawings to extract structural details and generate accurate Bills of Quantities (BOQ), reducing manual estimation effort and improving cost analysis efficiency.",
            tech: ["Python", "FastAPI", "AutoCAD API", "ODA Converter", "BOQ Generation", "Data Extraction", "Pandas", "Automation"],
            repoUrl: "https://github.com/vinodhan07/AutoCAD-drawings-and-generates-detailed-Bill-of-Quantities",
        },
        {
            title: "FinAI HackOps",
            description: "Financial AI automation platform with intelligent data processing and analytics capabilities.",
            tech: ["TypeScript", "PLpgSQL", "AI/ML", "Financial Tech"],
            repoUrl: "https://github.com/vinodhan07/finai-hackops",
        },
        {
            title: "n8n AI Automation Agents",
            description: "Automated workflow agents built with n8n for intelligent task orchestration and process automation.",
            tech: ["JavaScript", "n8n", "Automation", "AI"],
            repoUrl: "https://github.com/vinodhan07/n8n-AI-Automation-Agents",
        },
        {
            title: "Real-Time Annotation Using Videos",
            description: "Developed a real-time video annotation system that captures and labels video frames on the fly, enabling efficient labeling workflows for computer vision model training and dataset generation.",
            tech: ["Python", "OpenCV", "Real-Time Video Processing", "Computer Vision", "Machine Learning", "GUI/Visualization"],
            repoUrl: "https://github.com/vinodhan07/REAL-TIME-ANNOTATION-USING-VIDEOS.git",
        },
        {
            title: "Debuggers AI --- Enterprise Multi-Agent RAG Platform",
            description: "Enterprise-grade multi-agent RAG platform with autonomous debugging, automated testing, and intelligent code generation capabilities.",
            tech: ["Fine-tuning", "Python", "Ollama LLM", "RAG", "LangGraph", "Postgres + Redis + Celery"],
            repoUrl: "https://github.com/vinodhan07/Debugger_AI",
        },
];
