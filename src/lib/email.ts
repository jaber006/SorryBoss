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

export async function sendBookingConfirmationEmail(data: {
  to: string;
  firstName: string;
  phone: string;
  preferredCallTime: Date;
  leaveType: string;
}): Promise<void> {
  const { to, firstName, phone, preferredCallTime, leaveType } = data;

  const certificateType = leaveType === "carer" ? "Carer's Leave" : "Personal Leave";
  
  const formattedTime = preferredCallTime.toLocaleString("en-AU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Australia/Sydney",
  });

  await resend.emails.send({
    from: process.env.EMAIL_FROM || "SorryBoss <bookings@sorryboss.com.au>",
    to,
    subject: "Your SorryBoss Booking is Confirmed ✓",
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

        <h1 style="font-size: 24px; margin-bottom: 20px;">Booking Confirmed! ✓</h1>

        <p>Hi ${firstName},</p>

        <p>Your ${certificateType} consultation has been booked. Here's what happens next:</p>

        <div style="background: #FDF8EE; border-left: 4px solid #E8B931; padding: 20px; margin: 25px 0; border-radius: 4px;">
          <p style="margin: 0 0 15px 0; font-size: 14px; color: #6B6560;">Consultation Details</p>
          <p style="margin: 0 0 10px 0;"><strong>When:</strong> ${formattedTime} AEDT</p>
          <p style="margin: 0;"><strong>Phone:</strong> We'll call you at ${phone}</p>
        </div>

        <h2 style="font-size: 18px; margin-top: 30px;">What to expect</h2>
        <ol style="padding-left: 20px;">
          <li style="margin-bottom: 10px;">Our pharmacist will call you at your scheduled time</li>
          <li style="margin-bottom: 10px;">The call takes about 5 minutes</li>
          <li style="margin-bottom: 10px;">If a certificate is issued, you'll receive it by email immediately</li>
          <li>Your card is only charged if we issue a certificate</li>
        </ol>

        <div style="background: #F0FDF4; border: 1px solid #BBF7D0; padding: 15px; border-radius: 8px; margin: 25px 0;">
          <p style="margin: 0; color: #166534;">
            <strong>💳 No charge yet</strong> — Your card has been authorized but won't be charged unless we issue your certificate.
          </p>
        </div>

        <p style="color: #6B6560;">
          <strong>Please be available</strong> at your scheduled time. If you miss the call, we'll try again once. 
          If we can't reach you, your booking will be cancelled and no charge will be made.
        </p>

        <hr style="border: none; border-top: 1px solid #E0E0E0; margin: 30px 0;">

        <p style="font-size: 12px; color: #999999;">
          Questions? Reply to this email or contact support@sorryboss.com.au
        </p>

        <p style="font-size: 12px; color: #999999; margin-top: 20px;">
          © ${new Date().getFullYear()} SorryBoss. All rights reserved.
        </p>
      </body>
      </html>
    `,
  });
}

export async function sendAdminNotificationEmail(data: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  preferredCallTime: Date;
  leaveType: string;
  symptoms: string;
}): Promise<void> {
  const { firstName, lastName, phone, email, preferredCallTime, leaveType, symptoms } = data;

  const certificateType = leaveType === "carer" ? "Carer's Leave" : "Personal Leave";
  
  const formattedTime = preferredCallTime.toLocaleString("en-AU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Australia/Sydney",
  });

  // Parse symptoms
  let symptomList = symptoms;
  try {
    const parsed = JSON.parse(symptoms);
    if (Array.isArray(parsed)) {
      symptomList = parsed.join(", ");
    }
  } catch {
    // Use as-is
  }

  const adminEmail = process.env.ADMIN_EMAIL || "mohammad@sorryboss.com.au";

  await resend.emails.send({
    from: process.env.EMAIL_FROM || "SorryBoss <notifications@sorryboss.com.au>",
    to: adminEmail,
    subject: `📞 New Booking: ${firstName} ${lastName} - ${certificateType}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1A1A1A; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #E8B931; color: #1A1A1A; padding: 15px 20px; border-radius: 8px; margin-bottom: 20px;">
          <strong>📞 New ${certificateType} Booking</strong>
        </div>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; width: 140px; color: #666;">Patient</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>${firstName} ${lastName}</strong></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="tel:${phone}" style="color: #3D8B37;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Call Time</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>${formattedTime} AEDT</strong></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Symptoms</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${symptomList}</td>
          </tr>
        </table>

        <div style="margin-top: 20px;">
          <a href="https://sorryboss.com.au/admin" style="display: inline-block; background: #1A1A1A; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px;">View in Admin →</a>
        </div>

        <p style="margin-top: 30px; font-size: 12px; color: #999;">
          This is an automated notification from SorryBoss.
        </p>
      </body>
      </html>
    `,
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
