import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { writeFileSync, readFileSync } from "fs";

const SIGNATURE_BASE64 = readFileSync("./src/assets/signature-base64.txt", "utf-8").trim();

const formatDate = (date) => {
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

async function generateCertificatePDF(data) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]);

  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const { width, height } = page.getSize();
  const margin = 60;

  const dark = rgb(0.1, 0.1, 0.1);
  const gray = rgb(0.35, 0.35, 0.35);
  const lightGray = rgb(0.55, 0.55, 0.55);
  const accentBlue = rgb(0.2, 0.3, 0.5);

  let yPos = height - 60;

  // Header
  const title = "MEDICAL CERTIFICATE";
  const titleWidth = helveticaBold.widthOfTextAtSize(title, 22);
  page.drawText(title, { x: (width - titleWidth) / 2, y: yPos, size: 22, font: helveticaBold, color: dark });

  yPos -= 12;
  const subtitle = "Pharmacist Certificate of Illness";
  const subtitleWidth = timesItalic.widthOfTextAtSize(subtitle, 12);
  page.drawText(subtitle, { x: (width - subtitleWidth) / 2, y: yPos, size: 12, font: timesItalic, color: gray });

  yPos -= 25;
  page.drawLine({ start: { x: margin + 100, y: yPos }, end: { x: width - margin - 100, y: yPos }, thickness: 1, color: accentBlue });

  yPos -= 45;
  page.drawText("PATIENT DETAILS", { x: margin, y: yPos, size: 10, font: helveticaBold, color: accentBlue });

  yPos -= 25;
  page.drawText("Name:", { x: margin, y: yPos, size: 11, font: helvetica, color: gray });
  page.drawText(data.patientName, { x: margin + 100, y: yPos, size: 11, font: helveticaBold, color: dark });

  yPos -= 20;
  page.drawText("Date of Birth:", { x: margin, y: yPos, size: 11, font: helvetica, color: gray });
  page.drawText(formatDate(data.dateOfBirth), { x: margin + 100, y: yPos, size: 11, font: helvetica, color: dark });

  yPos -= 35;
  page.drawText("CERTIFICATE PERIOD", { x: margin, y: yPos, size: 10, font: helveticaBold, color: accentBlue });

  yPos -= 25;
  page.drawText("From:", { x: margin, y: yPos, size: 11, font: helvetica, color: gray });
  page.drawText(formatDate(data.unfitFrom), { x: margin + 100, y: yPos, size: 11, font: helveticaBold, color: dark });

  yPos -= 20;
  page.drawText("To:", { x: margin, y: yPos, size: 11, font: helvetica, color: gray });
  page.drawText(formatDate(data.unfitTo), { x: margin + 100, y: yPos, size: 11, font: helveticaBold, color: dark });

  yPos -= 20;
  page.drawText("Duration:", { x: margin, y: yPos, size: 11, font: helvetica, color: gray });
  page.drawText(`${data.daysUnfit} days`, { x: margin + 100, y: yPos, size: 11, font: helveticaBold, color: dark });

  yPos -= 45;
  page.drawText("CERTIFICATION", { x: margin, y: yPos, size: 10, font: helveticaBold, color: accentBlue });

  yPos -= 25;
  const certText = `I, ${data.pharmacistName}, a registered pharmacist, certify that ${data.patientName} presented with symptoms consistent with illness and is therefore unfit for work for the period stated above.`;
  
  const maxWidth = width - margin * 2;
  const words = certText.split(" ");
  let line = "";
  let lineY = yPos;

  for (const word of words) {
    const testLine = line + (line ? " " : "") + word;
    const testWidth = timesRoman.widthOfTextAtSize(testLine, 11);
    if (testWidth > maxWidth && line) {
      page.drawText(line, { x: margin, y: lineY, size: 11, font: timesRoman, color: dark });
      line = word;
      lineY -= 18;
    } else {
      line = testLine;
    }
  }
  if (line) {
    page.drawText(line, { x: margin, y: lineY, size: 11, font: timesRoman, color: dark });
  }

  // Signature
  yPos = 200;
  const signatureBytes = Buffer.from(SIGNATURE_BASE64, "base64");
  const signatureImage = await pdfDoc.embedPng(signatureBytes);
  const sigDims = signatureImage.scale(0.25);
  page.drawImage(signatureImage, { x: margin, y: yPos - sigDims.height + 20, width: sigDims.width, height: sigDims.height });

  yPos = 150;
  page.drawLine({ start: { x: margin, y: yPos }, end: { x: margin + 200, y: yPos }, thickness: 1, color: dark });

  yPos -= 15;
  page.drawText(data.pharmacistName, { x: margin, y: yPos, size: 12, font: helveticaBold, color: dark });
  yPos -= 15;
  page.drawText("Registered Pharmacist", { x: margin, y: yPos, size: 10, font: helvetica, color: gray });
  yPos -= 15;
  page.drawText(`AHPRA: ${data.pharmacistAhpra}`, { x: margin, y: yPos, size: 10, font: helvetica, color: gray });
  yPos -= 15;
  page.drawText("Contact: 0429 664 266", { x: margin, y: yPos, size: 10, font: helvetica, color: gray });
  page.drawText(`Date: ${formatDate(data.issuedAt)}`, { x: width - margin - 120, y: 150 - 15, size: 10, font: helvetica, color: gray });

  // Disclaimer
  yPos = 60;
  const disclaimer = "This certificate is issued in accordance with the Fair Work Act 2009 (Cth) section 107(3). Registered pharmacists are authorised to provide evidence of illness for the purposes of personal leave and carer's leave.";
  const disclaimerWords = disclaimer.split(" ");
  let disclaimerLine = "";
  let disclaimerY = yPos;

  for (const word of disclaimerWords) {
    const testLine = disclaimerLine + (disclaimerLine ? " " : "") + word;
    const testWidth = helvetica.widthOfTextAtSize(testLine, 8);
    if (testWidth > maxWidth && disclaimerLine) {
      page.drawText(disclaimerLine, { x: margin, y: disclaimerY, size: 8, font: helvetica, color: lightGray });
      disclaimerLine = word;
      disclaimerY -= 11;
    } else {
      disclaimerLine = testLine;
    }
  }
  if (disclaimerLine) {
    page.drawText(disclaimerLine, { x: margin, y: disclaimerY, size: 8, font: helvetica, color: lightGray });
  }

  return await pdfDoc.save();
}

const pdf = await generateCertificatePDF({
  patientName: "John Smith",
  dateOfBirth: new Date("1990-05-15"),
  unfitFrom: new Date("2026-02-12"),
  unfitTo: new Date("2026-02-13"),
  daysUnfit: 2,
  pharmacistName: "Mohammad Jaber",
  pharmacistAhpra: "PHA0002147134",
  issuedAt: new Date(),
});

writeFileSync("C:/Users/MJ/clawd/test-certificate.pdf", pdf);
console.log("Generated: C:/Users/MJ/clawd/test-certificate.pdf");
