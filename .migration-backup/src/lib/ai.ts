import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

export interface AIMessage {
  role: "user" | "assistant";
  content: string;
}

export async function chat(messages: AIMessage[]): Promise<string> {
  const response = await client.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    messages: messages,
  });

  const textContent = response.content.find((block) => block.type === "text");
  if (!textContent || textContent.type !== "text") {
    throw new Error("No text content in response");
  }

  return textContent.text;
}

export async function generatePortfolioInsights(userQuery: string): Promise<string> {
  const systemPrompt = `You are an intelligent AI assistant for Bishal Mondal's portfolio. 
You have knowledge about:
- His AI/ML expertise and projects
- His full-stack development experience
- His skills in Python, JavaScript, TypeScript, React, Next.js
- His work with Deep Learning, NLP, Computer Vision
- His internship experience at Codexa Indotech, Bluestock Fintech, FlyRank AI, and Ravex Technologies

Provide helpful, concise, and professional responses about his portfolio and capabilities.
If asked about technical matters, provide expert insights. If asked about hiring, be enthusiastic but accurate.`;

  const messages: AIMessage[] = [
    {
      role: "user",
      content: userQuery,
    },
  ];

  const response = await client.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    system: systemPrompt,
    messages: messages,
  });

  const textContent = response.content.find((block) => block.type === "text");
  if (!textContent || textContent.type !== "text") {
    throw new Error("No text content in response");
  }

  return textContent.text;
}

export async function generateProjectRecommendations(): Promise<string> {
  const systemPrompt = `You are analyzing a portfolio of AI/ML and Full Stack projects. 
Generate 3 specific, actionable recommendations for next projects based on industry trends and skill gaps.`;

  const messages: AIMessage[] = [
    {
      role: "user",
      content:
        "Based on my current projects and skills, what AI/ML projects should I build next to stay competitive in the job market?",
    },
  ];

  const response = await client.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    system: systemPrompt,
    messages: messages,
  });

  const textContent = response.content.find((block) => block.type === "text");
  if (!textContent || textContent.type !== "text") {
    throw new Error("No text content in response");
  }

  return textContent.text;
}

export async function analyzeJobDescription(jobDescription: string): Promise<string> {
  const systemPrompt = `You are an expert career coach analyzing job descriptions for an AI Engineer.
Provide a brief analysis of:
1. Required skills match
2. Missing skills (if any)
3. Interview preparation tips
4. Salary expectation range for this role

Be concise and actionable.`;

  const messages: AIMessage[] = [
    {
      role: "user",
      content: `Analyze this job description for me:\n\n${jobDescription}`,
    },
  ];

  const response = await client.messages.create({
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    system: systemPrompt,
    messages: messages,
  });

  const textContent = response.content.find((block) => block.type === "text");
  if (!textContent || textContent.type !== "text") {
    throw new Error("No text content in response");
  }

  return textContent.text;
}
