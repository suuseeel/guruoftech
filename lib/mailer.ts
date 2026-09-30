import nodemailer, { type Transporter } from "nodemailer";

/*
 * Hostinger's SMTP (smtp.hostinger.com) works on either port — 465 with
 * implicit TLS, or 587 with STARTTLS. Both are exposed via env so the same
 * code works against any SMTP provider, not just Hostinger.
 */
function readEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

let cached: Transporter | null = null;

export function getMailer(): Transporter {
  if (cached) return cached;

  const host = readEnv("SMTP_HOST");
  const port = Number(process.env.SMTP_PORT ?? "465");
  const secure = (process.env.SMTP_SECURE ?? (port === 465 ? "true" : "false")) === "true";
  const user = readEnv("SMTP_USER");
  const pass = readEnv("SMTP_PASS");

  cached = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
  return cached;
}

export function mailFrom(): string {
  return process.env.MAIL_FROM || readEnv("SMTP_USER");
}
