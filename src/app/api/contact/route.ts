// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { isRateLimited } from "@/lib/rateLimiter";

const sanitize = (str: string) =>
  str
    .replace(/[<>"'\/]/g, "")
    .trim()
    .substring(0, 1000); // basic sanitization

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const { fullname, email, subject, message, captchaAnswer, website } = await req.json();

  // Honeypot field check for spam bots
  if (website && website.trim() !== "") {
    return NextResponse.json({ error: "Bot detected" }, { status: 400 });
  }

  // Basic field validation
  if (!fullname || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Email format validation
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
  }

  // Captcha validation
  if (typeof captchaAnswer !== "string" || !/^\d+$/.test(captchaAnswer)) {
    return NextResponse.json({ error: "Invalid anti-spam input" }, { status: 400 });
  }

  // Setup Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.astructcom.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${sanitize(fullname)}" <${sanitize(email)}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Message from ${sanitize(fullname)}`,
      text: `
Name: ${sanitize(fullname)}
Subject: ${sanitize(subject)}
Email: ${sanitize(email)}

Message:
${sanitize(message)}
      `,
      html: `
        <p><strong>Name:</strong> ${sanitize(fullname)}</p>
        <p><strong>Subject:</strong> ${sanitize(subject)}</p>
        <p><strong>Email:</strong> ${sanitize(email)}</p>
        <p><strong>Message:</strong><br/>${sanitize(message)}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent", redirect: "/thank-you" });
  } catch (error: any) {
    console.error("Email error:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}