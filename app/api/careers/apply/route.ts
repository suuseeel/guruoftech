import { NextResponse } from "next/server";
import { getRequestBrand } from "@/lib/brand-server";
import { getMailer, mailFrom } from "@/lib/mailer";
import { applicationNotificationEmail } from "@/lib/email-templates/application";

const MAX_CV_BYTES = 5 * 1024 * 1024; // 5MB
const ALLOWED_CV_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form submission" }, { status: 400 });
  }

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const role = String(form.get("role") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();
  const cv = form.get("cv");

  if (!name || !email || !role) {
    return NextResponse.json({ error: "Name, email and position are required" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  let attachment: { filename: string; content: Buffer; contentType: string } | undefined;

  if (cv instanceof File && cv.size > 0) {
    if (cv.size > MAX_CV_BYTES) {
      return NextResponse.json({ error: "CV must be under 5MB" }, { status: 400 });
    }
    if (!ALLOWED_CV_TYPES.has(cv.type)) {
      return NextResponse.json({ error: "CV must be a PDF or Word document" }, { status: 400 });
    }
    const buffer = Buffer.from(await cv.arrayBuffer());
    attachment = { filename: cv.name, content: buffer, contentType: cv.type };
  }

  const brand = await getRequestBrand();
  const { subject, html, text } = applicationNotificationEmail(brand, {
    name,
    email,
    phone,
    role,
    message,
    cvFilename: attachment?.filename,
  });

  try {
    await getMailer().sendMail({
      from: `"${brand.name} Website" <${mailFrom()}>`,
      to: process.env.CAREERS_TO_EMAIL || process.env.CONTACT_TO_EMAIL || brand.contactEmail,
      replyTo: email,
      subject,
      html,
      text,
      attachments: attachment ? [attachment] : undefined,
    });
  } catch (err) {
    console.error("Failed to send application email:", err);
    return NextResponse.json({ error: "Failed to send your application. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
