import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type CertificateEmailData = {
  to: string;
  firstName: string;
  verificationCode: string;
  pdfBuffer: Buffer | null;
  leaveType: string;
};

export async function sendCertificateEmail(data: CertificateEmailData): Promise<void> {
  const { to, firstName, verificationCode, pdfBuffer, leaveType } = data;

  const certificateType = leaveType === "carer" ? "Carer's Leave" : "Absence from Work";

  const attachments = pdfBuffer
    ? [
        {
          filename: `SorryBoss-Certificate-${verificationCode}.pdf`,
          content: pdfBuffer.toString("base64"),
        },
      ]
    : [];

  await resend.emails.send({
    from: process.env.EMAIL_FROM || "SorryBoss <certificates@sorryboss.com.au>",
    to,
    subject: `Your ${certificateType} Certificate - ${verificationCode}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1A1A1A; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <span style="display: inline-block; width: 12px; height: 12px; background: #E8B931; border-radius: 50%; margin-right: 8px;"></span>
          <span style="font-size: 24px; font-weight: bold;">SorryBoss</span>
        </div>

        <h1 style="font-size: 24px; margin-bottom: 20px;">Your certificate is ready! ✓</h1>

        <p>Hi ${firstName},</p>

        <p>Great news — your ${certificateType} Certificate has been issued and is attached to this email.</p>

        <div style="background: #FDF8EE; border-left: 4px solid #E8B931; padding: 20px; margin: 25px 0; border-radius: 4px;">
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #6B6560;">Verification Code</p>
          <p style="margin: 0; font-size: 24px; font-weight: bold; font-family: monospace; letter-spacing: 2px;">${verificationCode}</p>
        </div>

        <p>Your employer can verify this certificate at:</p>
        <p style="background: #F5F5F5; padding: 12px; border-radius: 4px; font-family: monospace;">
          <a href="https://sorryboss.com.au/verify/${verificationCode}" style="color: #3D8B37; text-decoration: none;">
            sorryboss.com.au/verify/${verificationCode}
          </a>
        </p>

        <h2 style="font-size: 18px; margin-top: 30px;">What to do now</h2>
        <ol style="padding-left: 20px;">
          <li>Forward this email (or the attached PDF) to your employer</li>
          <li>Keep a copy for your records</li>
          <li>Rest up and get better! 🌡️</li>
        </ol>

        <hr style="border: none; border-top: 1px solid #E0E0E0; margin: 30px 0;">

        <p style="font-size: 12px; color: #999999;">
          This certificate was issued by an AHPRA-registered pharmacist in accordance with the 
          Fair Work Act 2009 (Cth) section 107(3). If you have any questions, reply to this email 
          or contact us at support@sorryboss.com.au.
        </p>

        <p style="font-size: 12px; color: #999999; margin-top: 20px;">
          © ${new Date().getFullYear()} SorryBoss. All rights reserved.
        </p>
      </body>
      </html>
    `,
    attachments,
  });
}

export async function sendDeclineEmail(data: {
  to: string;
  firstName: string;
  reason: string;
}): Promise<void> {
  const { to, firstName, reason } = data;

  await resend.emails.send({
    from: process.env.EMAIL_FROM || "SorryBoss <support@sorryboss.com.au>",
    to,
    subject: "Your SorryBoss Consultation - Update",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1A1A1A; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <span style="display: inline-block; width: 12px; height: 12px; background: #E8B931; border-radius: 50%; margin-right: 8px;"></span>
          <span style="font-size: 24px; font-weight: bold;">SorryBoss</span>
        </div>

        <p>Hi ${firstName},</p>

        <p>Thank you for using SorryBoss. Unfortunately, our pharmacist was unable to issue a certificate for your consultation.</p>

        <div style="background: #FEE2E2; border-left: 4px solid #DC2626; padding: 20px; margin: 25px 0; border-radius: 4px;">
          <p style="margin: 0; font-weight: bold;">Reason:</p>
          <p style="margin: 10px 0 0 0;">${reason}</p>
        </div>

        <p><strong>You have not been charged.</strong> Any payment authorization has been cancelled.</p>

        <p>If you believe you need medical attention, please consult your GP or visit a medical clinic.</p>

        <p>If you have any questions about this decision, please reply to this email.</p>

        <p>Take care,<br>The SorryBoss Team</p>

        <hr style="border: none; border-top: 1px solid #E0E0E0; margin: 30px 0;">

        <p style="font-size: 12px; color: #999999;">
          © ${new Date().getFullYear()} SorryBoss. All rights reserved.
        </p>
      </body>
      </html>
    `,
  });
}
