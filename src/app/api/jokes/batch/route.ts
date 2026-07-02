import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch multiple jokes from the API
    const response = await fetch(
      "https://official-joke-api.appspot.com/jokes/ten",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const jokes = await response.json();

    return NextResponse.json(
      {
        jokes: jokes.map(
          (joke: { setup: string; punchline: string; type: string; id: number }) => ({
            setup: joke.setup,
            punchline: joke.punchline,
            type: joke.type,
            id: joke.id,
          })
        ),
        count: jokes.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching jokes:", error);
    return NextResponse.json(
      { error: "Failed to fetch jokes" },
      { status: 500 }
    );
  }
}
