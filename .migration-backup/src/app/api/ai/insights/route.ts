import { NextRequest, NextResponse } from "next/server";
import { generatePortfolioInsights } from "@/lib/ai";

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { error: "Query is required and must be a string" },
        { status: 400 }
      );
    }

    const insights = await generatePortfolioInsights(query);

    return NextResponse.json({ insights }, { status: 200 });
  } catch (error) {
    console.error("Error in AI insights endpoint:", error);
    return NextResponse.json(
      { error: "Failed to generate insights" },
      { status: 500 }
    );
  }
}
