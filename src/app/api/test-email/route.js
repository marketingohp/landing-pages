// app/api/test-email/route.js (for debugging)
import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function GET() {
  try {
    console.log("Testing email configuration...");

    // Check environment variables
    const envCheck = {
      SMTP_HOST: "smtp.titan.email" ? "Set" : "Missing",
      SMTP_USER: "leads@openhomegroup.com" ? "Set" : "Missing",
      SMTP_PASS: "Le@Ds_123" ? "Set" : "Missing",
      SMTP_PORT: "465" || "Not set (will use 587)",
      SMTP_FROM:
        "Open Home Properties <leads@openhomegroup.com>" ||
        "Not set (will use SMTP_USER)",
      SMTP_TO: "marketing@ohp-abudhabi.com" || "Not set (will use default)",
    };

    console.log("Environment variables:", envCheck);

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      return NextResponse.json(
        {
          status: "error",
          message: "SMTP environment variables not configured",
          envCheck,
        },
        { status: 500 },
      );
    }

    // Test transporter creation
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      connectionTimeout: 10000,
      greetingTimeout: 5000,
      socketTimeout: 10000,
    });

    // Test connection
    await transporter.verify();

    return NextResponse.json({
      status: "success",
      message: "Email configuration is working correctly",
      envCheck,
    });
  } catch (error) {
    console.error("Email test error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: `Email configuration test failed: ${error.message}`,
        error: {
          name: error.name,
          message: error.message,
          code: error.code,
        },
      },
      { status: 500 },
    );
  }
}
