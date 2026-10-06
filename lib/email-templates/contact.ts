import type { Brand } from "@/lib/brand";

export type ContactSubmission = {
  name: string;
  email: string;
  message: string;
};

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Notification email sent to the company inbox when the contact form is submitted. */
export function contactNotificationEmail(brand: Brand, submission: ContactSubmission) {
  const name = escapeHtml(submission.name);
  const email = escapeHtml(submission.email);
  const message = escapeHtml(submission.message).replace(/\n/g, "<br/>");

  const subject = `New project inquiry from ${submission.name}`;

  const html = `
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f4f6fb;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e6e9f2;">
            <tr>
              <td style="background:linear-gradient(135deg, ${brand.accentFrom}, ${brand.accentTo});padding:24px 32px;">
                <span style="color:#ffffff;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.85;">New Contact Form Submission</span>
                <h1 style="margin:6px 0 0;color:#ffffff;font-size:20px;font-weight:600;">${brand.name}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#1a1d29;">
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;width:88px;vertical-align:top;">Name</td>
                    <td style="padding:8px 0;font-weight:600;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#6b7280;vertical-align:top;">Email</td>
                    <td style="padding:8px 0;"><a href="mailto:${email}" style="color:${brand.accentFrom};text-decoration:none;">${email}</a></td>
                  </tr>
                </table>
                <div style="margin-top:16px;padding:16px;background:#f7f8fc;border-radius:12px;font-size:14px;line-height:1.6;color:#1a1d29;">
                  ${message}
                </div>
                <p style="margin:24px 0 0;font-size:12px;color:#9099ab;">
                  Sent from the contact form on ${brand.domain}. Reply to this email to respond directly to ${name}.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`.trim();

  const text = `New project inquiry from ${submission.name}

Name: ${submission.name}
Email: ${submission.email}

${submission.message}

— Sent from the contact form on ${brand.domain}`;

  return { subject, html, text };
}
