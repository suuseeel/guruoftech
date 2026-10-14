import { NextResponse } from "next/server";
import { getRequestBrand } from "@/lib/brand-server";
import { getMailer, mailFrom } from "@/lib/mailer";
import { contactNotificationEmail } from "@/lib/email-templates/contact";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message, website } = (body ?? {}) as Record<string, unknown>;

  // Honeypot: real users never see or fill this field. If it's filled, it's a bot —
  // pretend success so the bot doesn't adapt, but don't actually send anything.
  if (typeof website === "string" && website.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "name, email and message are required" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const ip = getClientIp(req);
  const rl = checkRateLimit(`contact:${ip}`, RATE_LIMIT, RATE_WINDOW_MS);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many messages sent. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSeconds) } }
    );
  }

  const brand = await getRequestBrand();
  const { subject, html, text } = contactNotificationEmail(brand, {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  });

  try {
    await getMailer().sendMail({
      from: `"${brand.name} Website" <${mailFrom()}>`,
      to: process.env.CONTACT_TO_EMAIL || brand.contactEmail,
      replyTo: email.trim(),
      subject,
      html,
      text,
    });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
