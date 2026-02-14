import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { success: false, error: "URL is required" },
        { status: 400 }
      );
    }

    // Backend configuration
    const backendUrl = process.env.BACKEND_URL || "http://localhost:6478";
    const backendApiKey = process.env.BACKEND_API_KEY;

    console.log(`[PROXY] Forwarding image analysis request to backend: ${url}`);

    // Forward request to backend
    const response = await fetch(`${backendUrl}/api/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": backendApiKey || "",
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(`[PROXY] Backend error:`, data);
      return NextResponse.json(
        {
          success: false,
          error: data.error || "Failed to analyze website",
        },
        { status: response.status }
      );
    }

    console.log(`[PROXY] Analysis completed successfully for: ${url}`);

    // Return success response (data already has the right structure)
    return NextResponse.json({
      success: true,
      data: data.data,
    });
  } catch (error: any) {
    console.error("[PROXY] Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "An error occurred",
      },
      { status: 500 }
    );
  }
}
