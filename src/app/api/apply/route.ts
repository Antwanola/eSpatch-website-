import { NextResponse } from "next/server";
import { Resend } from "resend";

const ALLOWED_MIME_TYPES = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: "Resend API key is not configured on the server." },
                { status: 500 }
            );
        }

        const formData = await request.formData();

        const fullName = ((formData.get("fullName") as string | null) ?? "").trim();
        const phoneNumber = ((formData.get("phoneNumber") as string | null) ?? "").trim();
        const preferredLocation = ((formData.get("preferredLocation") as string | null) ?? "").trim();
        const experienceYears = ((formData.get("experienceYears") as string | null) ?? "").trim();
        const message = ((formData.get("message") as string | null) ?? "").trim();
        const cvEntry = formData.get("cv");

        if (!fullName || !phoneNumber) {
            return NextResponse.json(
                { error: "Full Name and Phone Number are required." },
                { status: 400 }
            );
        }

        if (!cvEntry || !(cvEntry instanceof File)) {
            return NextResponse.json(
                { error: "A CV file is required." },
                { status: 400 }
            );
        }

        const cvFile = cvEntry as File;

        if (!ALLOWED_MIME_TYPES.includes(cvFile.type)) {
            return NextResponse.json(
                { error: "CV must be a PDF or Word document (.pdf, .doc, .docx)." },
                { status: 400 }
            );
        }

        if (cvFile.size > MAX_FILE_SIZE_BYTES) {
            return NextResponse.json(
                { error: "CV file must not exceed 5 MB." },
                { status: 400 }
            );
        }

        const cvArrayBuffer = await cvFile.arrayBuffer();
        const cvBuffer = Buffer.from(cvArrayBuffer);

        const year = new Date().getFullYear();

        const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Rider Application</title>
</head>
<body style="margin:0;padding:0;background:#f4f7fa;font-family:'DM Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fa;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:#0A121C;padding:32px 40px;text-align:center;">
              <p style="margin:0;font-size:22px;font-weight:700;color:#01DECB;letter-spacing:0.04em;">eSpatch x Folti Tech</p>
              <p style="margin:8px 0 0;font-size:14px;color:#9db4c8;">New Rider Application</p>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 40px;">
              <h2 style="margin:0 0 24px;font-size:18px;color:#0A121C;">Applicant Details</h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eef0f3;color:#5B6B7A;font-size:13px;width:40%;">Full Name</td>
                  <td style="padding:10px 0;border-bottom:1px solid #eef0f3;color:#0A121C;font-size:14px;font-weight:600;">${escapeHtml(fullName)}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eef0f3;color:#5B6B7A;font-size:13px;">Phone Number</td>
                  <td style="padding:10px 0;border-bottom:1px solid #eef0f3;color:#0A121C;font-size:14px;font-weight:600;">${escapeHtml(phoneNumber)}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eef0f3;color:#5B6B7A;font-size:13px;">Preferred Location</td>
                  <td style="padding:10px 0;border-bottom:1px solid #eef0f3;color:#0A121C;font-size:14px;font-weight:600;">${escapeHtml(preferredLocation) || "Not specified"}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eef0f3;color:#5B6B7A;font-size:13px;">Experience (Years)</td>
                  <td style="padding:10px 0;border-bottom:1px solid #eef0f3;color:#0A121C;font-size:14px;font-weight:600;">${escapeHtml(experienceYears) || "Not specified"}</td>
                </tr>
                ${message ? `<tr><td colspan="2" style="padding:16px 0 0;"><p style="margin:0 0 6px;color:#5B6B7A;font-size:13px;">Message</p><p style="margin:0;color:#0A121C;font-size:14px;line-height:1.6;background:#f9fafc;border-left:3px solid #01DECB;padding:12px 16px;border-radius:0 6px 6px 0;">${escapeHtml(message)}</p></td></tr>` : ""}
              </table>
              <p style="margin:28px 0 0;font-size:13px;color:#9db4c8;">CV attached to this email. Submitted via the eSpatch Careers page.</p>
            </td>
          </tr>
          <tr>
            <td style="background:#f9fafc;padding:20px 40px;text-align:center;border-top:1px solid #eef0f3;">
              <p style="margin:0;font-size:12px;color:#9db4c8;">© ${year} Folti Technology Ltd - eSpatch</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

        const resend = new Resend(apiKey);
        const { data, error } = await resend.emails.send({
            from: "eSpatch Careers <onboarding@resend.dev>",
            to: "fa@folti.io",
            subject: `New Rider Application - ${fullName}`,
            html: htmlBody,
            attachments: [
                {
                    filename: cvFile.name,
                    content: cvBuffer,
                },
            ],
        });

        if (error) {
            console.error("Resend API Error:", error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Failed to send application.";
        console.error("Server Error processing application:", err);
        return NextResponse.json({ error: msg }, { status: 500 });
    }
}
