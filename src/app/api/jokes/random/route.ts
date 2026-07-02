import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const joke = await response.json();

    return NextResponse.json(
      {
        setup: joke.setup || "Why did the developer go broke?",
        punchline: joke.punchline || "Because they lost their cache!",
        type: joke.type || "programming",
        id: joke.id || 0,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching joke:", error);
    return NextResponse.json(
      {
        setup: "Why did the developer go broke?",
        punchline: "Because they lost their cache!",
        type: "programming",
        id: 0,
      },
      { status: 200 }
    );
  }
}
