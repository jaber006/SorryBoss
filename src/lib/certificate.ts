import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

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
  const courier = await pdfDoc.embedFont(StandardFonts.Courier);

  const { width, height } = page.getSize();
  const margin = 50;

  // Colors
  const dark = rgb(0.1, 0.1, 0.1);
  const gray = rgb(0.42, 0.40, 0.37);
  const mustard = rgb(0.91, 0.73, 0.19);
  const green = rgb(0.24, 0.55, 0.22);
  const lightGray = rgb(0.6, 0.6, 0.6);

  let yPos = height - 50;

  // Header - SorryBoss
  page.drawText("● SorryBoss", {
    x: margin,
    y: yPos,
    size: 22,
    font: helveticaBold,
    color: dark,
  });

  yPos -= 18;
  page.drawText("Absence from Work Certificate", {
    x: margin,
    y: yPos,
    size: 10,
    font: helvetica,
    color: gray,
  });

  // Verification code box (right side)
  page.drawRectangle({
    x: width - margin - 130,
    y: height - 70,
    width: 130,
    height: 45,
    color: rgb(0.96, 0.96, 0.96),
  });

  page.drawText("Verification Code", {
    x: width - margin - 125,
    y: height - 45,
    size: 8,
    font: helvetica,
    color: gray,
  });

  page.drawText(data.verificationCode, {
    x: width - margin - 125,
    y: height - 62,
    size: 14,
    font: courier,
    color: dark,
  });

  // Yellow line under header
  yPos -= 25;
  page.drawRectangle({
    x: margin,
    y: yPos,
    width: width - margin * 2,
    height: 2,
    color: mustard,
  });

  // Title
  yPos -= 35;
  const title = data.leaveType === "carer" ? "CARER'S LEAVE CERTIFICATE" : "ABSENCE FROM WORK CERTIFICATE";
  const titleWidth = helveticaBold.widthOfTextAtSize(title, 18);
  page.drawText(title, {
    x: (width - titleWidth) / 2,
    y: yPos,
    size: 18,
    font: helveticaBold,
    color: dark,
  });

  yPos -= 40;

  // Patient/Carer Details Section
  page.drawText(data.leaveType === "carer" ? "CARER DETAILS" : "PATIENT DETAILS", {
    x: margin,
    y: yPos,
    size: 10,
    font: helveticaBold,
    color: gray,
  });

  yPos -= 20;

  // Name
  page.drawText("Full Name:", {
    x: margin,
    y: yPos,
    size: 11,
    font: helvetica,
    color: gray,
  });
  page.drawText(data.patientName, {
    x: margin + 120,
    y: yPos,
    size: 11,
    font: helveticaBold,
    color: dark,
  });

  yPos -= 18;

  // DOB
  page.drawText("Date of Birth:", {
    x: margin,
    y: yPos,
    size: 11,
    font: helvetica,
    color: gray,
  });
  page.drawText(formatDate(data.dateOfBirth), {
    x: margin + 120,
    y: yPos,
    size: 11,
    font: helvetica,
    color: dark,
  });

  yPos -= 30;

  // Care recipient (for carer's leave)
  if (data.leaveType === "carer" && data.careRecipientName) {
    page.drawText("PERSON REQUIRING CARE", {
      x: margin,
      y: yPos,
      size: 10,
      font: helveticaBold,
      color: gray,
    });

    yPos -= 20;

    page.drawText("Name:", {
      x: margin,
      y: yPos,
      size: 11,
      font: helvetica,
      color: gray,
    });
    page.drawText(data.careRecipientName, {
      x: margin + 120,
      y: yPos,
      size: 11,
      font: helveticaBold,
      color: dark,
    });

    yPos -= 18;

    page.drawText("Relationship:", {
      x: margin,
      y: yPos,
      size: 11,
      font: helvetica,
      color: gray,
    });
    page.drawText(data.careRelationship || "", {
      x: margin + 120,
      y: yPos,
      size: 11,
      font: helvetica,
      color: dark,
    });

    yPos -= 30;
  }

  // Certificate Period
  page.drawText("CERTIFICATE PERIOD", {
    x: margin,
    y: yPos,
    size: 10,
    font: helveticaBold,
    color: gray,
  });

  yPos -= 20;

  page.drawText("From:", {
    x: margin,
    y: yPos,
    size: 11,
    font: helvetica,
    color: gray,
  });
  page.drawText(formatDate(data.unfitFrom), {
    x: margin + 120,
    y: yPos,
    size: 11,
    font: helveticaBold,
    color: dark,
  });

  yPos -= 18;

  page.drawText("To:", {
    x: margin,
    y: yPos,
    size: 11,
    font: helvetica,
    color: gray,
  });
  page.drawText(formatDate(data.unfitTo), {
    x: margin + 120,
    y: yPos,
    size: 11,
    font: helveticaBold,
    color: dark,
  });

  yPos -= 18;

  page.drawText("Total Days:", {
    x: margin,
    y: yPos,
    size: 11,
    font: helvetica,
    color: gray,
  });
  page.drawText(`${data.daysUnfit} day${data.daysUnfit > 1 ? "s" : ""}`, {
    x: margin + 120,
    y: yPos,
    size: 11,
    font: helveticaBold,
    color: dark,
  });

  yPos -= 35;

  // Certification statement box
  const boxHeight = 70;
  page.drawRectangle({
    x: margin,
    y: yPos - boxHeight + 15,
    width: width - margin * 2,
    height: boxHeight,
    color: rgb(0.99, 0.97, 0.93),
  });

  // Yellow left border
  page.drawRectangle({
    x: margin,
    y: yPos - boxHeight + 15,
    width: 4,
    height: boxHeight,
    color: mustard,
  });

  const certText = data.leaveType === "carer"
    ? `I certify that ${data.patientName} is required to provide care or support to ${data.careRecipientName} (${data.careRelationship}) due to illness, and is therefore unfit for work for the period stated above.`
    : `I certify that ${data.patientName} is suffering from a medical condition and is therefore unfit for work for the period stated above.`;

  // Word wrap the certification text
  const maxWidth = width - margin * 2 - 20;
  const words = certText.split(" ");
  let line = "";
  let lineY = yPos - 10;

  for (const word of words) {
    const testLine = line + (line ? " " : "") + word;
    const testWidth = helvetica.widthOfTextAtSize(testLine, 11);
    if (testWidth > maxWidth && line) {
      page.drawText(line, {
        x: margin + 12,
        y: lineY,
        size: 11,
        font: helvetica,
        color: dark,
      });
      line = word;
      lineY -= 16;
    } else {
      line = testLine;
    }
  }
  if (line) {
    page.drawText(line, {
      x: margin + 12,
      y: lineY,
      size: 11,
      font: helvetica,
      color: dark,
    });
  }

  // Footer section
  yPos = 150;

  // Line above footer
  page.drawLine({
    start: { x: margin, y: yPos },
    end: { x: width - margin, y: yPos },
    thickness: 1,
    color: rgb(0.88, 0.88, 0.88),
  });

  yPos -= 20;

  // Pharmacist details
  page.drawText(data.pharmacistName, {
    x: margin,
    y: yPos,
    size: 12,
    font: helveticaBold,
    color: dark,
  });

  yPos -= 15;

  page.drawText(`AHPRA Registration: ${data.pharmacistAhpra}`, {
    x: margin,
    y: yPos,
    size: 10,
    font: helvetica,
    color: gray,
  });

  yPos -= 15;

  page.drawText(`Issued: ${formatDate(data.issuedAt)}`, {
    x: margin,
    y: yPos,
    size: 10,
    font: helvetica,
    color: gray,
  });

  yPos -= 20;

  // Verification URL
  page.drawText(`Verify this certificate: sorryboss.com.au/verify/${data.verificationCode}`, {
    x: margin,
    y: yPos,
    size: 9,
    font: helvetica,
    color: green,
  });

  yPos -= 20;

  // Disclaimer
  const disclaimer = "This certificate is issued in accordance with the Fair Work Act 2009 (Cth) section 107(3). Registered pharmacists are authorised to provide evidence of illness for the purposes of personal leave and carer's leave. This certificate does not constitute medical advice.";
  
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
      disclaimerY -= 12;
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
