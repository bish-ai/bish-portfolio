import { Router } from "express";

const router = Router();

// GET /api/jokes/random
router.get("/jokes/random", async (_req, res) => {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const joke = (await response.json()) as {
      setup?: string;
      punchline?: string;
      type?: string;
      id?: number;
    };

    return res.json({
      setup: joke.setup || "Why did the developer go broke?",
      punchline: joke.punchline || "Because they lost their cache!",
      type: joke.type || "programming",
      id: joke.id || 0,
    });
  } catch (error) {
    console.error("Error fetching joke:", error);
    return res.json({
      setup: "Why did the developer go broke?",
      punchline: "Because they lost their cache!",
      type: "programming",
      id: 0,
    });
  }
});

// GET /api/jokes/batch
router.get("/jokes/batch", async (_req, res) => {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/jokes/ten",
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const jokes = (await response.json()) as Array<{
      setup?: string;
      punchline?: string;
      type?: string;
      id?: number;
    }>;

    return res.json({
      jokes: Array.isArray(jokes)
        ? jokes.map((joke) => ({
            setup: joke.setup || "Why?",
            punchline: joke.punchline || "Because!",
            type: joke.type || "general",
            id: joke.id || 0,
          }))
        : [],
      count: Array.isArray(jokes) ? jokes.length : 0,
    });
  } catch (error) {
    console.error("Error fetching jokes batch:", error);
    return res.json({ jokes: [], count: 0 });
  }
});

export default router;
