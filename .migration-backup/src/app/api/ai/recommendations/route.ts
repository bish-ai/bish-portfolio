import { NextRequest, NextResponse } from "next/server";
import { generateProjectRecommendations } from "@/lib/ai";

export async function GET(request: NextRequest) {
  try {
    const recommendations = await generateProjectRecommendations();

    return NextResponse.json({ recommendations }, { status: 200 });
  } catch (error) {
    console.error("Error in project recommendations endpoint:", error);
    return NextResponse.json(
      { error: "Failed to generate recommendations" },
      { status: 500 }
    );
  }
}
