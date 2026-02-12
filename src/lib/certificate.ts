import { jsPDF } from "jspdf";

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
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;

  // Colors
  const dark = "#1A1A1A";
  const gray = "#6B6560";
  const mustard = "#E8B931";

  // Header
  doc.setFontSize(24);
  doc.setTextColor(dark);
  doc.text("● SorryBoss", margin, 25);

  doc.setFontSize(10);
  doc.setTextColor(gray);
  doc.text("Absence from Work Certificate", margin, 32);

  // Verification code box (right side)
  doc.setFillColor(245, 245, 245);
  doc.rect(pageWidth - margin - 50, 15, 50, 20, "F");
  doc.setFontSize(8);
  doc.setTextColor(gray);
  doc.text("Verification Code", pageWidth - margin - 48, 22);
  doc.setFontSize(12);
  doc.setTextColor(dark);
  doc.setFont("courier", "bold");
  doc.text(data.verificationCode, pageWidth - margin - 48, 30);
  doc.setFont("helvetica", "normal");

  // Yellow line
  doc.setFillColor(232, 185, 49);
  doc.rect(margin, 40, contentWidth, 1, "F");

  // Title
  const title = data.leaveType === "carer" ? "CARER'S LEAVE CERTIFICATE" : "ABSENCE FROM WORK CERTIFICATE";
  doc.setFontSize(18);
  doc.setTextColor(dark);
  doc.text(title, pageWidth / 2, 55, { align: "center" });

  let yPos = 70;

  // Patient/Carer Details Section
  doc.setFontSize(10);
  doc.setTextColor(gray);
  doc.text(data.leaveType === "carer" ? "CARER DETAILS" : "PATIENT DETAILS", margin, yPos);
  yPos += 8;

  // Name
  doc.setFontSize(11);
  doc.setTextColor(gray);
  doc.text("Full Name:", margin, yPos);
  doc.setTextColor(dark);
  doc.text(data.patientName, margin + 50, yPos);
  yPos += 7;

  // DOB
  doc.setTextColor(gray);
  doc.text("Date of Birth:", margin, yPos);
  doc.setTextColor(dark);
  doc.text(formatDate(data.dateOfBirth), margin + 50, yPos);
  yPos += 12;

  // Care recipient (for carer's leave)
  if (data.leaveType === "carer" && data.careRecipientName) {
    doc.setFontSize(10);
    doc.setTextColor(gray);
    doc.text("PERSON REQUIRING CARE", margin, yPos);
    yPos += 8;

    doc.setFontSize(11);
    doc.setTextColor(gray);
    doc.text("Name:", margin, yPos);
    doc.setTextColor(dark);
    doc.text(data.careRecipientName, margin + 50, yPos);
    yPos += 7;

    doc.setTextColor(gray);
    doc.text("Relationship:", margin, yPos);
    doc.setTextColor(dark);
    doc.text(data.careRelationship || "", margin + 50, yPos);
    yPos += 12;
  }

  // Certificate Period
  doc.setFontSize(10);
  doc.setTextColor(gray);
  doc.text("CERTIFICATE PERIOD", margin, yPos);
  yPos += 8;

  doc.setFontSize(11);
  doc.setTextColor(gray);
  doc.text("From:", margin, yPos);
  doc.setTextColor(dark);
  doc.text(formatDate(data.unfitFrom), margin + 50, yPos);
  yPos += 7;

  doc.setTextColor(gray);
  doc.text("To:", margin, yPos);
  doc.setTextColor(dark);
  doc.text(formatDate(data.unfitTo), margin + 50, yPos);
  yPos += 7;

  doc.setTextColor(gray);
  doc.text("Total Days:", margin, yPos);
  doc.setTextColor(dark);
  doc.text(`${data.daysUnfit} day${data.daysUnfit > 1 ? "s" : ""}`, margin + 50, yPos);
  yPos += 15;

  // Certification statement box
  doc.setFillColor(253, 248, 238);
  doc.rect(margin, yPos, contentWidth, 30, "F");
  doc.setFillColor(232, 185, 49);
  doc.rect(margin, yPos, 1.5, 30, "F");

  const certText = data.leaveType === "carer"
    ? `I certify that ${data.patientName} is required to provide care or support to ${data.careRecipientName} (${data.careRelationship}) due to illness, and is therefore unfit for work for the period stated above.`
    : `I certify that ${data.patientName} is suffering from a medical condition and is therefore unfit for work for the period stated above.`;

  doc.setFontSize(11);
  doc.setTextColor(dark);
  const lines = doc.splitTextToSize(certText, contentWidth - 10);
  doc.text(lines, margin + 5, yPos + 10);

  // Footer section
  yPos = 220;

  // Line above footer
  doc.setDrawColor(224, 224, 224);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 10;

  // Pharmacist details
  doc.setFontSize(12);
  doc.setTextColor(dark);
  doc.text(data.pharmacistName, margin, yPos);
  yPos += 6;

  doc.setFontSize(10);
  doc.setTextColor(gray);
  doc.text(`AHPRA Registration: ${data.pharmacistAhpra}`, margin, yPos);
  yPos += 6;
  doc.text(`Issued: ${formatDate(data.issuedAt)}`, margin, yPos);
  yPos += 10;

  // Verification URL
  doc.setFontSize(9);
  doc.setTextColor(61, 139, 55);
  doc.text(`Verify this certificate: sorryboss.com.au/verify/${data.verificationCode}`, margin, yPos);
  yPos += 10;

  // Disclaimer
  doc.setFontSize(8);
  doc.setTextColor(153, 153, 153);
  const disclaimer = "This certificate is issued in accordance with the Fair Work Act 2009 (Cth) section 107(3). Registered pharmacists are authorised to provide evidence of illness for the purposes of personal leave and carer's leave. This certificate does not constitute medical advice. If symptoms persist or worsen, please consult a doctor.";
  const disclaimerLines = doc.splitTextToSize(disclaimer, contentWidth);
  doc.text(disclaimerLines, margin, yPos);

  // Convert to Buffer
  const pdfArrayBuffer = doc.output("arraybuffer");
  return Buffer.from(pdfArrayBuffer);
}
