import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    // Using official Joke API - No authentication required
    const response = await fetch("https://official-joke-api.appspot.com/random_joke", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const joke = await response.json();

    return NextResponse.json(
      {
        setup: joke.setup,
        punchline: joke.punchline,
        type: joke.type,
        id: joke.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching joke:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch joke",
        fallback: {
          setup: "Why did the AI go to school?",
          punchline: "To improve its training data!",
          type: "general",
        },
      },
      { status: 500 }
    );
  }
}

export async function POST() {
  // POST endpoint also returns random joke
  return GET();
}
