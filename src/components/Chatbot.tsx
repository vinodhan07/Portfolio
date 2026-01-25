import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, FileText, Briefcase, Mail, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type Message = { role: "user" | "assistant"; content: string };

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const presets = [
  { label: "About", Icon: User, query: "Tell me about Vinodhan" },
  { label: "Projects", Icon: Briefcase, query: "What projects has Vinodhan worked on?" },
  { label: "Contact", Icon: Mail, query: "How can I contact Vinodhan?" },
  { label: "Resume", Icon: FileText, query: "How can I download the resume?" },
];

const SYSTEM_PROMPT = `You are VINODHAN V A's AI assistant. Be concise.
About: Full Stack Developer & AI enthusiast at Knowledge Institute of Technology (B.Tech IT, 2023-2027, 7.5 CGPA). Google Student Ambassador.
Skills: Python, Java, JavaScript, TypeScript, React, Node.js, TensorFlow, NLP, RAG, n8n, Docker, AWS
Projects: Translator-Model (NLP), Automated Report Generation (AI), Multi-Agent RAG System
Links (use markdown): Resume: [Download](/VInodhan FINAL 1.pdf), Email: [vinovb21@gmail.com](mailto:vinovb21@gmail.com), LinkedIn: [Profile](https://linkedin.com/in/vavinodhan), GitHub: [vinodhan07](https://github.com/vinodhan07)`;

const fallbacks: Record<string, string> = {
  about: "Vinodhan V A is a Full Stack Developer & AI enthusiast at Knowledge Institute of Technology. Google Student Ambassador with expertise in React, Node.js, Python, and AI/ML.",
  project: "Projects:\n• **Translator-Model** - NLP translation\n• **Automated Report Generation** - AI automation\n• **Multi-Agent RAG System**",
  contact: "📧 [vinovb21@gmail.com](mailto:vinovb21@gmail.com)\n💼 [LinkedIn](https://linkedin.com/in/vavinodhan)\n🐙 [GitHub](https://github.com/vinodhan07)",
  resume: "Download resume: [Click here](/VInodhan FINAL 1.pdf)",
  default: "Ask me about Vinodhan's background, projects, or contact info!",
};

const getFallback = (q: string): string => {
  const lower = q.toLowerCase();
  if (lower.includes("about") || lower.includes("who")) return fallbacks.about;
  if (lower.includes("project") || lower.includes("work")) return fallbacks.project;
  if (lower.includes("contact") || lower.includes("email")) return fallbacks.contact;
  if (lower.includes("resume") || lower.includes("cv")) return fallbacks.resume;
  return fallbacks.default;
};

const renderMarkdownLinks = (text: string) =>
  text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! 👋 Ask me about Vinodhan's skills, projects, or contact!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const handleSend = async (query: string) => {
    if (!query.trim() || isLoading) return;
    setMessages(prev => [...prev, { role: "user", content: query }]);
    setInput("");
    setIsLoading(true);

    if (!GEMINI_API_KEY) {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: "assistant", content: getFallback(query) }]);
        setIsLoading(false);
      }, 400);
      return;
    }

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: SYSTEM_PROMPT + "\n\nUser: " + query }] }],
            generationConfig: { temperature: 0.7, maxOutputTokens: 512 },
          }),
        }
      );
      const data = await res.json();
      const content = data.candidates?.[0]?.content?.parts?.[0]?.text || getFallback(query);
      setMessages(prev => [...prev, { role: "assistant", content }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: getFallback(query) }]);
      toast({ title: "Using offline mode" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4">
              <h3 className="text-white font-semibold">Chat with Vinodhan's AI</h3>
              <p className="text-white/80 text-sm">Ask me anything!</p>
            </div>

            <div className="h-[280px] overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === "user"
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-br-md"
                    : "bg-zinc-800 text-zinc-100 rounded-bl-md border border-zinc-700"
                    }`}>
                    <span className="whitespace-pre-wrap [&_a]:text-purple-400 [&_a]:underline"
                      dangerouslySetInnerHTML={{ __html: renderMarkdownLinks(msg.content) }} />
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800 p-3 rounded-2xl rounded-bl-md border border-zinc-700 flex gap-1">
                    {[0, 150, 300].map(d => <span key={d} className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />)}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="p-3 border-t border-zinc-700 bg-zinc-800/50">
              <div className="flex flex-wrap gap-2 mb-3">
                {presets.map(({ label, Icon, query }) => (
                  <button key={label} onClick={() => handleSend(query)} disabled={isLoading}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-zinc-700 hover:bg-zinc-600 text-zinc-200 rounded-full disabled:opacity-50">
                    <Icon size={12} />{label}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input value={input} onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSend(input)} placeholder="Type a message..."
                  disabled={isLoading} className="flex-1 px-4 py-2.5 rounded-full bg-zinc-700 text-zinc-100 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50" />
                <Button size="icon" onClick={() => handleSend(input)} disabled={isLoading || !input.trim()}
                  className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
                  {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
