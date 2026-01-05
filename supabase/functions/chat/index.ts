import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received messages:", messages);

    const systemPrompt = `You are VINODHAN V A's AI assistant. Be concise and helpful.

About VINODHAN V A:
- Full Stack Developer & AI enthusiast at Sri Sairam Engineering College, Chennai (B.Tech IT, 2023-2027, 7.5 CGPA)
- Google Student Ambassador, former Rotaract Club Secretary

Skills: Python, Java, JavaScript, TypeScript, React, Node.js, Express, TensorFlow, NLP, RAG Systems, n8n Automation, Docker, AWS, Supabase, MySQL, Cursor IDE

Projects: Translator-Model (NLP), Automated Report Generation (AI), Multi-Agent RAG System

Achievements: Special Prize – AARAM'25 UX Designathon, Urban Vision Hackathon Finalist, BNKHUB Hackathon Finalist, Prompt Engineering & Java certifications

Experience: n8n AI automation workflows, Full Stack Intern at MEE Technologies, Freelance Developer

Links - always provide as markdown:
- Resume: [Download Resume](/resume.pdf)
- Email: [vinodhan.tech@gmail.com](mailto:vinodhan.tech@gmail.com)
- LinkedIn: [linkedin.com/in/vinodhan07](https://linkedin.com/in/vinodhan07)
- GitHub: [github.com/vinodhan07](https://github.com/vinodhan07)`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
