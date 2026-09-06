export interface PartnershipEnquiryEmailData {
  fullName: string;
  companyName: string;
  email: string;
  phoneNumber?: string;
  jobTitle?: string;
  platformType?: string;
  pickupLocation?: string;
  message?: string;
}

export function renderPartnershipEnquiryEmail(data: PartnershipEnquiryEmailData): string {
  const {
    fullName,
    companyName,
    email,
    phoneNumber,
    jobTitle,
    platformType,
    pickupLocation,
    message,
  } = data;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Partnership Enquiry</title>
</head>
<body style="margin:0; padding:0; background-color:#F4F8FA; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#0B1D2A;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#F4F8FA; padding: 40px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; background-color:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 6px 20px rgba(7, 26, 41, 0.08); border: 1px solid #E2E8F0;">
          
          <!-- Header -->
          <tr>
            <td style="background-color:#071A29; padding: 32px 40px; text-align: left;">
              <span style="background-color:rgba(0, 184, 169, 0.15); border: 1px solid #00B8A9; color:#00B8A9; font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:0.12em; padding: 4px 10px; border-radius:12px;">eSpatch Website</span>
              <h1 style="color:#ffffff; font-size:22px; font-weight:600; margin:14px 0 4px 0; padding:0;">New Partnership Enquiry</h1>
              <p style="color:#94A3B8; font-size:13px; margin:0;">Received via eSpatch Contact Form</p>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px 40px;">
              <h2 style="font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:#00B8A9; margin:0 0 16px 0; border-bottom: 2px solid #F1F5F9; padding-bottom: 8px;">Contact Details</h2>

              <!-- Details Grid -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px;">
                <tr>
                  <td width="50%" valign="top" style="padding-right: 8px; padding-bottom: 12px;">
                    <div style="background-color:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px 14px;">
                      <div style="font-size:10px; font-weight:600; color:#64748B; text-transform:uppercase; margin-bottom:4px;">Full Name</div>
                      <div style="font-size:13px; font-weight:600; color:#0B1D2A;">${fullName}</div>
                    </div>
                  </td>
                  <td width="50%" valign="top" style="padding-left: 8px; padding-bottom: 12px;">
                    <div style="background-color:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px 14px;">
                      <div style="font-size:10px; font-weight:600; color:#64748B; text-transform:uppercase; margin-bottom:4px;">Company Name</div>
                      <div style="font-size:13px; font-weight:600; color:#0B1D2A;">${companyName}</div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="50%" valign="top" style="padding-right: 8px; padding-bottom: 12px;">
                    <div style="background-color:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px 14px;">
                      <div style="font-size:10px; font-weight:600; color:#64748B; text-transform:uppercase; margin-bottom:4px;">Email Address</div>
                      <div style="font-size:13px; font-weight:600; color:#00B8A9;"><a href="mailto:${email}" style="color:#00B8A9; text-decoration:none;">${email}</a></div>
                    </div>
                  </td>
                  <td width="50%" valign="top" style="padding-left: 8px; padding-bottom: 12px;">
                    <div style="background-color:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px 14px;">
                      <div style="font-size:10px; font-weight:600; color:#64748B; text-transform:uppercase; margin-bottom:4px;">Phone Number</div>
                      <div style="font-size:13px; font-weight:600; color:#0B1D2A;">${phoneNumber || "N/A"}</div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td width="50%" valign="top" style="padding-right: 8px; padding-bottom: 12px;">
                    <div style="background-color:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px 14px;">
                      <div style="font-size:10px; font-weight:600; color:#64748B; text-transform:uppercase; margin-bottom:4px;">Job Title</div>
                      <div style="font-size:13px; font-weight:600; color:#0B1D2A;">${jobTitle || "N/A"}</div>
                    </div>
                  </td>
                  <td width="50%" valign="top" style="padding-left: 8px; padding-bottom: 12px;">
                    <div style="background-color:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px 14px;">
                      <div style="font-size:10px; font-weight:600; color:#64748B; text-transform:uppercase; margin-bottom:4px;">Platform Type</div>
                      <div style="font-size:13px; font-weight:600; color:#0B1D2A;">${platformType || "N/A"}</div>
                    </div>
                  </td>
                </tr>

                ${pickupLocation ? `
                <tr>
                  <td colspan="2" valign="top" style="padding-bottom: 12px;">
                    <div style="background-color:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px 14px;">
                      <div style="font-size:10px; font-weight:600; color:#64748B; text-transform:uppercase; margin-bottom:4px;">Pickup Location</div>
                      <div style="font-size:13px; font-weight:600; color:#0B1D2A;">${pickupLocation}</div>
                    </div>
                  </td>
                </tr>
                ` : ""}
              </table>

              <!-- Message Section -->
              <h2 style="font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:#00B8A9; margin:0 0 12px 0; border-bottom: 2px solid #F1F5F9; padding-bottom: 8px;">Message</h2>
              <div style="background-color:#F8FAFC; border-left: 4px solid #00B8A9; border-radius:0 8px 8px 0; padding:16px 18px; font-size:13px; line-height:1.6; color:#334155; white-space: pre-wrap;">
                ${message ? message : "<em style='color:#94A3B8;'>No additional message provided.</em>"}
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#071A29; padding:20px 40px; text-align:center; border-top:1px solid #1E293B;">
              <p style="font-size:11px; color:#94A3B8; margin:0; line-height:1.5;">
                This notification was sent automatically from the eSpatch website contact form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
