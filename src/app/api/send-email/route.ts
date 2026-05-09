import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formData, formName, pointName, formType } = body;

    console.log("Received form submission:", {
      formName,
      pointName,
      formType,
      fieldsCount: Object.keys(formData || {}).length,
    });

    // Validate required environment variables
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      return NextResponse.json(
        {
          error:
            "Email configuration is missing. Please check environment variables (SMTP_HOST, SMTP_USER, SMTP_PASS).",
        },
        { status: 500 },
      );
    }

    // Create transporter (matching test-email configuration)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      connectionTimeout: 10000,
      greetingTimeout: 5000,
      socketTimeout: 10000,
    });

    // Format form data for email
    const formatFieldLabel = (key: string): string => {
      return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
        .trim();
    };

    const formatFieldValue = (value: string): string => {
      return value || "Not specified";
    };

    // Build email content
    const fieldsHtml = Object.entries(formData)
      .filter(
        ([_, value]) =>
          value && typeof value === "string" && value.trim() !== "",
      )
      .map(([key, value]) => {
        const label = formatFieldLabel(key);
        return `<tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 200px;">${label}:</td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${formatFieldValue(value as string)}</td>
        </tr>`;
      })
      .join("");

    const metadataHtml = [
      formName &&
        `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Form Name:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formName}</td></tr>`,
      pointName &&
        `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Point Name:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${pointName}</td></tr>`,
      formType &&
        `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Form Type:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${formType}</td></tr>`,
    ]
      .filter(Boolean)
      .join("");

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h2 { color: #1a3a5c; border-bottom: 2px solid #1a3a5c; padding-bottom: 10px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New Property Search Form Submission</h2>
            <table>
              ${metadataHtml}
              ${fieldsHtml}
            </table>
            <div class="footer">
              <p>This email was sent from the Property Search Form.</p>
              <p>Submitted at: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const textContent = `
New Property Search Form Submission

${formName ? `Form Name: ${formName}\n` : ""}${pointName ? `Point Name: ${pointName}\n` : ""}${formType ? `Form Type: ${formType}\n` : ""}
${Object.entries(formData)
  .filter(
    ([_, value]) => value && typeof value === "string" && value.trim() !== "",
  )
  .map(
    ([key, value]) =>
      `${formatFieldLabel(key)}: ${formatFieldValue(value as string)}`,
  )
  .join("\n")}

Submitted at: ${new Date().toLocaleString()}
    `.trim();

    // Determine recipient email
    const recipientEmail = process.env.SMTP_TO || process.env.SMTP_USER;

    if (!recipientEmail) {
      return NextResponse.json(
        {
          error:
            "No recipient email configured. Please set SMTP_TO or SMTP_USER.",
        },
        { status: 500 },
      );
    }

    // Verify connection before sending
    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError);
      return NextResponse.json(
        {
          error: "SMTP connection failed",
          details:
            verifyError instanceof Error
              ? verifyError.message
              : "Unknown verification error",
        },
        { status: 500 },
      );
    }

    // Send email
    const mailOptions = {
      from:
        process.env.SMTP_FROM ||
        `"Property Search Form" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      subject: `New Property Search: ${formName || "Form Submission"}`,
      text: textContent,
      html: htmlContent,
      replyTo: process.env.SMTP_REPLY_TO || process.env.SMTP_USER,
    };

    console.log("Sending email to:", recipientEmail);
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    return NextResponse.json(
      {
        success: true,
        messageId: info.messageId,
        message: "Email sent successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
