import PDFDocument from "pdfkit";

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
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: "A4",
        margin: 50,
        info: {
          Title: `SorryBoss Certificate - ${data.verificationCode}`,
          Author: "SorryBoss",
        },
      });

      const chunks: Buffer[] = [];
      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);

      // Colors
      const mustard = "#E8B931";
      const dark = "#1A1A1A";
      const gray = "#6B6560";
      const cream = "#FDF8EE";

      // Header
      doc.fontSize(28).fillColor(dark).text("● SorryBoss", 50, 50, { continued: false });
      doc.fontSize(10).fillColor(gray).text("Absence from Work Certificate", 50, 80);

      // Verification box (right side)
      doc.rect(400, 45, 145, 45).fill("#F5F5F5");
      doc.fontSize(8).fillColor(gray).text("Verification Code", 410, 52);
      doc.fontSize(14).fillColor(dark).font("Courier").text(data.verificationCode, 410, 66);
      doc.font("Helvetica");

      // Yellow line under header
      doc.rect(50, 110, 495, 2).fill(mustard);

      // Title
      const title = data.leaveType === "carer" ? "CARER'S LEAVE CERTIFICATE" : "ABSENCE FROM WORK CERTIFICATE";
      doc.fontSize(20).fillColor(dark).text(title, 50, 140, { align: "center", width: 495 });

      let yPos = 190;

      // Section: Patient/Carer Details
      doc.fontSize(10).fillColor(gray).text(
        data.leaveType === "carer" ? "CARER DETAILS" : "PATIENT DETAILS",
        50, yPos
      );
      yPos += 20;

      doc.fontSize(11).fillColor(gray).text("Full Name:", 50, yPos, { width: 140 });
      doc.fontSize(11).fillColor(dark).text(data.patientName, 190, yPos);
      yPos += 20;

      doc.fontSize(11).fillColor(gray).text("Date of Birth:", 50, yPos, { width: 140 });
      doc.fontSize(11).fillColor(dark).text(formatDate(data.dateOfBirth), 190, yPos);
      yPos += 35;

      // Care recipient (for carer's leave)
      if (data.leaveType === "carer" && data.careRecipientName) {
        doc.fontSize(10).fillColor(gray).text("PERSON REQUIRING CARE", 50, yPos);
        yPos += 20;

        doc.fontSize(11).fillColor(gray).text("Name:", 50, yPos, { width: 140 });
        doc.fontSize(11).fillColor(dark).text(data.careRecipientName, 190, yPos);
        yPos += 20;

        doc.fontSize(11).fillColor(gray).text("Relationship:", 50, yPos, { width: 140 });
        doc.fontSize(11).fillColor(dark).text(data.careRelationship || "", 190, yPos);
        yPos += 35;
      }

      // Certificate Period
      doc.fontSize(10).fillColor(gray).text("CERTIFICATE PERIOD", 50, yPos);
      yPos += 20;

      doc.fontSize(11).fillColor(gray).text("From:", 50, yPos, { width: 140 });
      doc.fontSize(11).fillColor(dark).text(formatDate(data.unfitFrom), 190, yPos);
      yPos += 20;

      doc.fontSize(11).fillColor(gray).text("To:", 50, yPos, { width: 140 });
      doc.fontSize(11).fillColor(dark).text(formatDate(data.unfitTo), 190, yPos);
      yPos += 20;

      doc.fontSize(11).fillColor(gray).text("Total Days:", 50, yPos, { width: 140 });
      doc.fontSize(11).fillColor(dark).text(`${data.daysUnfit} day${data.daysUnfit > 1 ? "s" : ""}`, 190, yPos);
      yPos += 40;

      // Certification statement box
      doc.rect(50, yPos, 495, 80).fill(cream);
      doc.rect(50, yPos, 4, 80).fill(mustard);

      const certText = data.leaveType === "carer"
        ? `I certify that ${data.patientName} is required to provide care or support to ${data.careRecipientName} (${data.careRelationship}) due to illness, and is therefore unfit for work for the period stated above.`
        : `I certify that ${data.patientName} is suffering from a medical condition and is therefore unfit for work for the period stated above.`;

      doc.fontSize(11).fillColor(dark).text(certText, 65, yPos + 20, { width: 465, lineGap: 4 });

      // Footer section
      yPos = 650;

      // Line above footer
      doc.rect(50, yPos, 495, 1).fill("#E0E0E0");
      yPos += 20;

      // Pharmacist details
      doc.fontSize(12).fillColor(dark).text(data.pharmacistName, 50, yPos);
      yPos += 15;
      doc.fontSize(10).fillColor(gray).text(`AHPRA Registration: ${data.pharmacistAhpra}`, 50, yPos);
      yPos += 15;
      doc.fontSize(10).fillColor(gray).text(`Issued: ${formatDate(data.issuedAt)}`, 50, yPos);
      yPos += 25;

      // Verification URL
      doc.fontSize(9).fillColor("#3D8B37").text(
        `Verify this certificate: sorryboss.com.au/verify/${data.verificationCode}`,
        50, yPos
      );
      yPos += 25;

      // Disclaimer
      doc.fontSize(8).fillColor("#999999").text(
        "This certificate is issued in accordance with the Fair Work Act 2009 (Cth) section 107(3). Registered pharmacists are authorised to provide evidence of illness for the purposes of personal leave and carer's leave. This certificate does not constitute medical advice. If symptoms persist or worsen, please consult a doctor.",
        50, yPos, { width: 495, lineGap: 2 }
      );

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
}
