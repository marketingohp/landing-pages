// app/api/sendEmail/route.js (for App Router)
import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req) {
  try {
    const body = await req.json();
    // Support both old format and new format from PropertySearchForm
    const {
      firstName,
      lastName,
      email,
      phone,
      phoneNumber,
      message,
      interest,
      countryCode,
      phoneCountryCode,
      hearAboutUs,
      unitType,
      bedrooms,
      budget,
      formName,
      pointName,
      formType,
      ...otherFields
    } = body;

    console.log("Received form data:", {
      firstName,
      lastName,
      email,
      phone,
      phoneNumber,
      message,
      interest,
      countryCode,
      phoneCountryCode,
    });

    // Validate required fields
    if (!firstName || !lastName || !email) {
      console.log("Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Format phone number - support both formats
    let formattedPhone = "";
    if (phoneNumber) {
      // phoneNumber might already include country code (from PropertySearchForm)
      formattedPhone = phoneNumber;
    } else if (phone) {
      // Legacy format: phone + countryCode/phoneCountryCode
      const code = countryCode || phoneCountryCode || "";
      formattedPhone = code ? `${code} ${phone}` : phone;
    }

    // Check if environment variables are set
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      console.log("SMTP environment variables not configured");
      return NextResponse.json(
        {
          error:
            "Email service not configured. Please set SMTP environment variables.",
        },
        { status: 500 },
      );
    }

    // Create transporter with timeout settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Add timeout settings to prevent hanging
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 5000, // 5 seconds
      socketTimeout: 10000, // 10 seconds
    });

    // Create HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color:rgb(213, 182, 77); color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Open Home Properties</p>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border: 1px solid #e9ecef;">
          <h2 style="color: #2c3e50; margin-top: 0;">Contact Information</h2>
          
          <div style="margin-bottom: 15px;">
            <strong>Name:</strong> ${firstName} ${lastName}
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong>Email:</strong> ${email}
          </div>
          
          ${
            formattedPhone
              ? `
          <div style="margin-bottom: 15px;">
            <strong>Phone:</strong> ${formattedPhone}
          </div>
          `
              : ""
          }
          
          ${
            hearAboutUs
              ? `
          <div style="margin-bottom: 15px;">
            <strong>How did you hear about us:</strong> ${hearAboutUs}
          </div>
          `
              : ""
          }
          
          ${
            unitType
              ? `
          <div style="margin-bottom: 15px;">
            <strong>Unit Type:</strong> ${unitType}
          </div>
          `
              : ""
          }
          
          ${
            bedrooms
              ? `
          <div style="margin-bottom: 15px;">
            <strong>Bedrooms:</strong> ${bedrooms}
          </div>
          `
              : ""
          }
          
          ${
            budget
              ? `
          <div style="margin-bottom: 15px;">
            <strong>Budget:</strong> ${budget}
          </div>
          `
              : ""
          }
          
          ${
            interest
              ? `
          <div style="margin-bottom: 15px;">
            <strong>Interest:</strong> ${interest}
          </div>
          `
              : ""
          }
          
          ${
            formName
              ? `
          <div style="margin-bottom: 15px;">
            <strong>Form Name:</strong> ${formName}
          </div>
          `
              : ""
          }
          
          ${
            pointName
              ? `
          <div style="margin-bottom: 15px;">
            <strong>Point Name:</strong> ${pointName}
          </div>
          `
              : ""
          }
          
          ${
            formType
              ? `
          <div style="margin-bottom: 15px;">
            <strong>Form Type:</strong> ${formType}
          </div>
          `
              : ""
          }
          
          ${
            message
              ? `
          <div style="margin-bottom: 15px;">
            <strong>Message:</strong>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 5px; border: 1px solid #dee2e6;">
              ${message}
            </div>
          </div>
          `
              : ""
          }
        </div>
        
        <div style="background-color: #e9ecef; padding: 15px; text-align: center; font-size: 12px; color: #6c757d; border-radius: 0 0 8px 8px;">
          This email was sent from the Open Home Properties contact form.
        </div>
      </div>
    `;

    // Create plain text version
    const textContent = `
New Contact Form Submission - Open Home Properties

Contact Information:
Name: ${firstName} ${lastName}
Email: ${email}
${formattedPhone ? `Phone: ${formattedPhone}` : ""}
${hearAboutUs ? `How did you hear about us: ${hearAboutUs}` : ""}
${unitType ? `Unit Type: ${unitType}` : ""}
${bedrooms ? `Bedrooms: ${bedrooms}` : ""}
${budget ? `Budget: ${budget}` : ""}
${interest ? `Interest: ${interest}` : ""}
${formName ? `Form Name: ${formName}` : ""}
${pointName ? `Point Name: ${pointName}` : ""}
${formType ? `Form Type: ${formType}` : ""}
${message ? `Message: ${message}` : ""}

This email was sent from the Open Home Properties contact form.
    `;

    // Send email
    console.log("Attempting to send email...");
    const info = await transporter.sendMail({
      from:
        process.env.SMTP_FROM ||
        process.env.SMTP_USER ||
        "Open Home Properties <info@openhomegroup.com>",
      to: process.env.SMTP_TO || "leads@openhomegroup.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: textContent,
      html: htmlContent,
    });

    console.log("Email sent successfully:", info.messageId);
    return NextResponse.json(
      { message: "Email sent successfully", messageId: info.messageId },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: `Failed to send email: ${error.message}` },
      { status: 500 },
    );
  }
}
