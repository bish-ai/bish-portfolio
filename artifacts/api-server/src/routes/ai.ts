import { Router } from "express";
import Anthropic from "@anthropic-ai/sdk";

const router = Router();

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const MAX_MESSAGE_LENGTH = 2000;
const MAX_QUERY_LENGTH = 2000;
const MAX_JOB_DESCRIPTION_LENGTH = 5000;

const systemPrompt = `You are an AI assistant for Bishal Mondal's portfolio website.
Your role is to help visitors understand Bishal's skills, experience, and projects.
Provide helpful, accurate, and friendly responses.
Always maintain a professional tone while being approachable.
If you don't have specific information, suggest exploring relevant portfolio sections.`;

// POST /api/ai/chat — stateless: each request is independent, no shared history
router.post("/ai/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return res
        .status(400)
        .json({ error: `Message must be under ${MAX_MESSAGE_LENGTH} characters` });
    }

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: "user", content: message }],
    });

    const assistantMessage =
      response.content[0]?.type === "text" ? response.content[0].text : "";

    return res.json({ response: assistantMessage });
  } catch (error) {
    req.log.error({ err: error }, "Error in chat endpoint");
    return res.status(500).json({ error: "Failed to process message" });
  }
});

// POST /api/ai/insights
router.post("/ai/insights", async (req, res) => {
  try {
    const { query } = req.body;

    if (!query || typeof query !== "string") {
      return res.status(400).json({ error: "Query is required" });
    }

    if (query.length > MAX_QUERY_LENGTH) {
      return res
        .status(400)
        .json({ error: `Query must be under ${MAX_QUERY_LENGTH} characters` });
    }

    const insightSystemPrompt = `You are an intelligent AI assistant for Bishal Mondal's portfolio. 
You have knowledge about:
- His AI/ML expertise and projects
- His full-stack development experience
- His skills in Python, JavaScript, TypeScript, React, Next.js
- His work with Deep Learning, NLP, Computer Vision
- His internship experience at Codexa Indotech, Bluestock Fintech, FlyRank AI, and Ravex Technologies

Provide helpful, concise, and professional responses about his portfolio and capabilities.`;

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system: insightSystemPrompt,
      messages: [{ role: "user", content: query }],
    });

    const insights =
      response.content[0]?.type === "text" ? response.content[0].text : "";

    return res.json({ insights });
  } catch (error) {
    req.log.error({ err: error }, "Error in insights endpoint");
    return res.status(500).json({ error: "Failed to generate insights" });
  }
});

// GET /api/ai/recommendations
router.get("/ai/recommendations", async (_req, res) => {
  try {
    const recSystemPrompt = `You are analyzing a portfolio of AI/ML and Full Stack projects. 
Generate 3 specific, actionable recommendations for next projects based on industry trends and skill gaps.`;

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system: recSystemPrompt,
      messages: [
        {
          role: "user",
          content:
            "Based on my current projects and skills, what AI/ML projects should I build next to stay competitive in the job market?",
        },
      ],
    });

    const recommendations =
      response.content[0]?.type === "text" ? response.content[0].text : "";

    return res.json({ recommendations });
  } catch (error) {
    _req.log.error({ err: error }, "Error in recommendations endpoint");
    return res.status(500).json({ error: "Failed to generate recommendations" });
  }
});

// POST /api/ai/analyze-job
router.post("/ai/analyze-job", async (req, res) => {
  try {
    const { jobDescription } = req.body;

    if (!jobDescription || typeof jobDescription !== "string") {
      return res.status(400).json({ error: "Job description is required" });
    }

    if (jobDescription.length > MAX_JOB_DESCRIPTION_LENGTH) {
      return res
        .status(400)
        .json({ error: `Job description must be under ${MAX_JOB_DESCRIPTION_LENGTH} characters` });
    }

    const jobSystemPrompt = `You are an expert career coach analyzing job descriptions for an AI Engineer.
Provide a brief analysis of:
1. Required skills match
2. Missing skills (if any)
3. Interview preparation tips
4. Salary expectation range for this role

Be concise and actionable.`;

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system: jobSystemPrompt,
      messages: [
        {
          role: "user",
          content: `Analyze this job description for me:\n\n${jobDescription}`,
        },
      ],
    });

    const analysis =
      response.content[0]?.type === "text" ? response.content[0].text : "";

    return res.json({ analysis });
  } catch (error) {
    req.log.error({ err: error }, "Error in job analysis endpoint");
    return res.status(500).json({ error: "Failed to analyze job description" });
  }
});

export default router;
