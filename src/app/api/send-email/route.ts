import { NextResponse } from "next/server";
import { Resend } from "resend";
import { renderPartnershipEnquiryEmail } from "@/emails/partnership-enquiry";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Resend API key is not configured on the server." },
        { status: 500 }
      );
    }

    const payload = await request.json();
    const { companyName, fullName, email } = payload;

    if (!fullName || !companyName || !email) {
      return NextResponse.json(
        { error: "Full Name, Company Name, and Email Address are required." },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "fa@folti.io",
      subject: `Partnership Enquiry from ${fullName}`,
      html: renderPartnershipEnquiryEmail(payload),
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Server Error sending email:", err);
    return NextResponse.json(
      { error: err.message || "Failed to send email." },
      { status: 500 }
    );
  }
}
