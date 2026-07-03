import { NextRequest, NextResponse } from "next/server";

const systemPrompt = `You are an AI assistant for Bishal Mondal's portfolio website.
Your role is to help visitors understand Bishal's skills, experience, and projects.
Provide helpful, accurate, and friendly responses.
Always maintain a professional tone while being approachable.
If you don't have specific information, suggest exploring relevant portfolio sections.`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

let conversationHistory: Message[] = [];

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Add user message to history
    conversationHistory.push({
      role: "user",
      content: message,
    });

    // Call Claude API
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1024,
        system: systemPrompt,
        messages: conversationHistory,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    const assistantMessage =
      data.content[0]?.type === "text" ? data.content[0].text : "";

    // Add assistant response to history
    conversationHistory.push({
      role: "assistant",
      content: assistantMessage,
    });

    // Keep only last 10 messages to manage token usage
    if (conversationHistory.length > 10) {
      conversationHistory = conversationHistory.slice(-10);
    }

    return NextResponse.json({ response: assistantMessage }, { status: 200 });
  } catch (error) {
    console.error("Error in chat endpoint:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: "Chat API is running" });
}
