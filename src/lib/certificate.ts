import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { SIGNATURE_BASE64 } from "./signature";

type CertificateData = {
  verificationCode: string;
  patientName: string;
  dateOfBirth: Date;
  leaveType: string;
  careRecipientName: string | null;
  careRelationship: string | null;
  unfitFrom: Date;
  unfitTo: Date;
  daysUnfit: number;
  pharmacistName: string;
  pharmacistAhpra: string;
  issuedAt: Date;
};

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export async function generateCertificatePDF(data: CertificateData): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]); // A4 size in points

  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const { width, height } = page.getSize();
  const margin = 60;

  // Colors
  const dark = rgb(0.1, 0.1, 0.1);
  const gray = rgb(0.35, 0.35, 0.35);
  const lightGray = rgb(0.55, 0.55, 0.55);
  const accentBlue = rgb(0.2, 0.3, 0.5);

  let yPos = height - 60;

  // Header - Professional title
  const title = data.leaveType === "carer" 
    ? "CARER'S LEAVE CERTIFICATE" 
    : "MEDICAL CERTIFICATE";
  const titleWidth = helveticaBold.widthOfTextAtSize(title, 22);
  page.drawText(title, {
    x: (width - titleWidth) / 2,
    y: yPos,
    size: 22,
    font: helveticaBold,
    color: dark,
  });

  yPos -= 12;

  // Subtitle
  const subtitle = "Pharmacist Certificate of Illness";
  const subtitleWidth = timesItalic.widthOfTextAtSize(subtitle, 12);
  page.drawText(subtitle, {
    x: (width - subtitleWidth) / 2,
    y: yPos,
    size: 12,
    font: timesItalic,
    color: gray,
  });

  // Decorative line under header
  yPos -= 25;
  page.drawLine({
    start: { x: margin + 100, y: yPos },
    end: { x: width - margin - 100, y: yPos },
    thickness: 1,
    color: accentBlue,
  });

  yPos -= 45;

  // Patient Details Section
  page.drawText("PATIENT DETAILS", {
    x: margin,
    y: yPos,
    size: 10,
    font: helveticaBold,
    color: accentBlue,
  });

  yPos -= 25;

  // Name
  page.drawText("Name:", {
    x: margin,
    y: yPos,
    size: 11,
    font: helvetica,
    color: gray,
  });
  page.drawText(data.patientName, {
    x: margin + 100,
    y: yPos,
    size: 11,
    font: helveticaBold,
    color: dark,
  });

  yPos -= 20;

  // DOB
  page.drawText("Date of Birth:", {
    x: margin,
    y: yPos,
    size: 11,
    font: helvetica,
    color: gray,
  });
  page.drawText(formatDate(data.dateOfBirth), {
    x: margin + 100,
    y: yPos,
    size: 11,
    font: helvetica,
    color: dark,
  });

  yPos -= 35;

  // Care recipient section (for carer's leave)
  if (data.leaveType === "carer" && data.careRecipientName) {
    page.drawText("PERSON REQUIRING CARE", {
      x: margin,
      y: yPos,
      size: 10,
      font: helveticaBold,
      color: accentBlue,
    });

    yPos -= 25;

    page.drawText("Name:", {
      x: margin,
      y: yPos,
      size: 11,
      font: helvetica,
      color: gray,
    });
    page.drawText(data.careRecipientName, {
      x: margin + 100,
      y: yPos,
      size: 11,
      font: helveticaBold,
      color: dark,
    });

    yPos -= 20;

    page.drawText("Relationship:", {
      x: margin,
      y: yPos,
      size: 11,
      font: helvetica,
      color: gray,
    });
    page.drawText(data.careRelationship || "", {
      x: margin + 100,
      y: yPos,
      size: 11,
      font: helvetica,
      color: dark,
    });

    yPos -= 35;
  }

  // Certificate Period Section
  page.drawText("CERTIFICATE PERIOD", {
    x: margin,
    y: yPos,
    size: 10,
    font: helveticaBold,
    color: accentBlue,
  });

  yPos -= 25;

  page.drawText("From:", {
    x: margin,
    y: yPos,
    size: 11,
    font: helvetica,
    color: gray,
  });
  page.drawText(formatDate(data.unfitFrom), {
    x: margin + 100,
    y: yPos,
    size: 11,
    font: helveticaBold,
    color: dark,
  });

  yPos -= 20;

  page.drawText("To:", {
    x: margin,
    y: yPos,
    size: 11,
    font: helvetica,
    color: gray,
  });
  page.drawText(formatDate(data.unfitTo), {
    x: margin + 100,
    y: yPos,
    size: 11,
    font: helveticaBold,
    color: dark,
  });

  yPos -= 20;

  page.drawText("Duration:", {
    x: margin,
    y: yPos,
    size: 11,
    font: helvetica,
    color: gray,
  });
  page.drawText(`${data.daysUnfit} day${data.daysUnfit > 1 ? "s" : ""}`, {
    x: margin + 100,
    y: yPos,
    size: 11,
    font: helveticaBold,
    color: dark,
  });

  yPos -= 45;

  // Certification Statement
  page.drawText("CERTIFICATION", {
    x: margin,
    y: yPos,
    size: 10,
    font: helveticaBold,
    color: accentBlue,
  });

  yPos -= 25;

  const certText = data.leaveType === "carer"
    ? `I, ${data.pharmacistName}, a registered pharmacist, certify that ${data.patientName} is required to provide care or support to ${data.careRecipientName} (${data.careRelationship}) due to illness, and is therefore unfit for work for the period stated above.`
    : `I, ${data.pharmacistName}, a registered pharmacist, certify that ${data.patientName} presented with symptoms consistent with illness and is therefore unfit for work for the period stated above.`;

  // Word wrap the certification text
  const maxWidth = width - margin * 2;
  const words = certText.split(" ");
  let line = "";
  let lineY = yPos;

  for (const word of words) {
    const testLine = line + (line ? " " : "") + word;
    const testWidth = timesRoman.widthOfTextAtSize(testLine, 11);
    if (testWidth > maxWidth && line) {
      page.drawText(line, {
        x: margin,
        y: lineY,
        size: 11,
        font: timesRoman,
        color: dark,
      });
      line = word;
      lineY -= 18;
    } else {
      line = testLine;
    }
  }
  if (line) {
    page.drawText(line, {
      x: margin,
      y: lineY,
      size: 11,
      font: timesRoman,
      color: dark,
    });
  }

  // Signature section
  yPos = 200;

  // Embed signature image
  const signatureBytes = Buffer.from(SIGNATURE_BASE64, "base64");
  const signatureImage = await pdfDoc.embedPng(signatureBytes);
  const sigDims = signatureImage.scale(0.25); // Scale down to fit
  
  page.drawImage(signatureImage, {
    x: margin,
    y: yPos - sigDims.height + 20,
    width: sigDims.width,
    height: sigDims.height,
  });

  yPos = 150;

  page.drawLine({
    start: { x: margin, y: yPos },
    end: { x: margin + 200, y: yPos },
    thickness: 1,
    color: dark,
  });

  yPos -= 15;

  page.drawText(data.pharmacistName, {
    x: margin,
    y: yPos,
    size: 12,
    font: helveticaBold,
    color: dark,
  });

  yPos -= 15;

  page.drawText("Registered Pharmacist", {
    x: margin,
    y: yPos,
    size: 10,
    font: helvetica,
    color: gray,
  });

  yPos -= 15;

  page.drawText(`AHPRA: ${data.pharmacistAhpra}`, {
    x: margin,
    y: yPos,
    size: 10,
    font: helvetica,
    color: gray,
  });

  // Date on right side
  page.drawText(`Date: ${formatDate(data.issuedAt)}`, {
    x: width - margin - 120,
    y: 150 - 15,
    size: 10,
    font: helvetica,
    color: gray,
  });

  // Footer disclaimer
  yPos = 60;

  const disclaimer = "This certificate is issued in accordance with the Fair Work Act 2009 (Cth) section 107(3). Registered pharmacists are authorised to provide evidence of illness for the purposes of personal leave and carer's leave.";
  
  const disclaimerWords = disclaimer.split(" ");
  let disclaimerLine = "";
  let disclaimerY = yPos;

  for (const word of disclaimerWords) {
    const testLine = disclaimerLine + (disclaimerLine ? " " : "") + word;
    const testWidth = helvetica.widthOfTextAtSize(testLine, 8);
    if (testWidth > maxWidth && disclaimerLine) {
      page.drawText(disclaimerLine, {
        x: margin,
        y: disclaimerY,
        size: 8,
        font: helvetica,
        color: lightGray,
      });
      disclaimerLine = word;
      disclaimerY -= 11;
    } else {
      disclaimerLine = testLine;
    }
  }
  if (disclaimerLine) {
    page.drawText(disclaimerLine, {
      x: margin,
      y: disclaimerY,
      size: 8,
      font: helvetica,
      color: lightGray,
    });
  }

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}
