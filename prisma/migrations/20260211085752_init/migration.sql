-- CreateTable
CREATE TABLE "Consultation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "leaveType" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL,
    "careRecipientName" TEXT,
    "careRelationship" TEXT,
    "symptoms" TEXT NOT NULL,
    "symptomDetails" TEXT,
    "symptomStartDate" DATETIME NOT NULL,
    "daysRequested" INTEGER NOT NULL DEFAULT 1,
    "preferredCallTime" DATETIME NOT NULL,
    "timezone" TEXT NOT NULL DEFAULT 'Australia/Sydney',
    "status" TEXT NOT NULL DEFAULT 'pending',
    "stripePaymentIntentId" TEXT,
    "paymentStatus" TEXT NOT NULL DEFAULT 'pending',
    "amountCents" INTEGER NOT NULL DEFAULT 2495,
    "pharmacistId" TEXT,
    "pharmacistNotes" TEXT,
    "declineReason" TEXT,
    "certificateId" TEXT,
    "callStartedAt" DATETIME,
    "callEndedAt" DATETIME,
    "callNotes" TEXT,
    "termsAcceptedAt" DATETIME NOT NULL,
    "termsVersion" TEXT NOT NULL DEFAULT '1.0'
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "verificationCode" TEXT NOT NULL,
    "consultationId" TEXT NOT NULL,
    "leaveType" TEXT NOT NULL,
    "patientName" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL,
    "careRecipientName" TEXT,
    "careRelationship" TEXT,
    "unfitFrom" DATETIME NOT NULL,
    "unfitTo" DATETIME NOT NULL,
    "daysUnfit" INTEGER NOT NULL,
    "pharmacistName" TEXT NOT NULL,
    "pharmacistAhpra" TEXT NOT NULL,
    "pdfUrl" TEXT,
    "pdfGeneratedAt" DATETIME,
    "emailedAt" DATETIME,
    "emailedTo" TEXT,
    CONSTRAINT "Certificate_consultationId_fkey" FOREIGN KEY ("consultationId") REFERENCES "Consultation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pharmacist" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ahpraNumber" TEXT NOT NULL,
    "phone" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "passwordHash" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "action" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "performedBy" TEXT,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "details" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Consultation_certificateId_key" ON "Consultation"("certificateId");

-- CreateIndex
CREATE INDEX "Consultation_status_idx" ON "Consultation"("status");

-- CreateIndex
CREATE INDEX "Consultation_email_idx" ON "Consultation"("email");

-- CreateIndex
CREATE INDEX "Consultation_phone_idx" ON "Consultation"("phone");

-- CreateIndex
CREATE INDEX "Consultation_createdAt_idx" ON "Consultation"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_verificationCode_key" ON "Certificate"("verificationCode");

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_consultationId_key" ON "Certificate"("consultationId");

-- CreateIndex
CREATE INDEX "Certificate_verificationCode_idx" ON "Certificate"("verificationCode");

-- CreateIndex
CREATE UNIQUE INDEX "Pharmacist_email_key" ON "Pharmacist"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pharmacist_ahpraNumber_key" ON "Pharmacist"("ahpraNumber");

-- CreateIndex
CREATE INDEX "Pharmacist_email_idx" ON "Pharmacist"("email");

-- CreateIndex
CREATE INDEX "AuditLog_entityType_entityId_idx" ON "AuditLog"("entityType", "entityId");

-- CreateIndex
CREATE INDEX "AuditLog_createdAt_idx" ON "AuditLog"("createdAt");
