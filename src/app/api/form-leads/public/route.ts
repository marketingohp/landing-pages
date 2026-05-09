import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.abudhabi-properties.net/api";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Proxy the request to Laravel API
    const response = await fetch(`${API_BASE_URL}/form-leads/public`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: data.error || data.message || "Failed to submit form",
          details: data.details,
        },
        { status: response.status },
      );
    }

    return NextResponse.json({
      success: true,
      message: data.message || "Form submitted successfully",
      data: data.data,
    });
  } catch (error) {
    console.error("API Proxy Error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Network error. Please try again.",
      },
      { status: 500 },
    );
  }
}
