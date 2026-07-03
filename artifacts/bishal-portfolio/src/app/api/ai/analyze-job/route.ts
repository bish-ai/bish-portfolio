import { NextRequest, NextResponse } from "next/server";
import { analyzeJobDescription } from "@/lib/ai";

export async function POST(request: NextRequest) {
  try {
    const { jobDescription } = await request.json();

    if (!jobDescription || typeof jobDescription !== "string") {
      return NextResponse.json(
        { error: "Job description is required" },
        { status: 400 }
      );
    }

    const analysis = await analyzeJobDescription(jobDescription);

    return NextResponse.json({ analysis }, { status: 200 });
  } catch (error) {
    console.error("Error in job analysis endpoint:", error);
    return NextResponse.json(
      { error: "Failed to analyze job description" },
      { status: 500 }
    );
  }
}
