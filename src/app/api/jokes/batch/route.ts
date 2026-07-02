import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/jokes/ten");

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const jokes = await response.json();

    return NextResponse.json(
      {
        jokes: Array.isArray(jokes)
          ? jokes.map(
              (joke: { setup?: string; punchline?: string; type?: string; id?: number }) => ({
                setup: joke.setup || "Why?",
                punchline: joke.punchline || "Because!",
                type: joke.type || "general",
                id: joke.id || 0,
              })
            )
          : [],
        count: Array.isArray(jokes) ? jokes.length : 0,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching jokes:", error);
    return NextResponse.json(
      {
        jokes: [],
        count: 0,
      },
      { status: 200 }
    );
  }
}
