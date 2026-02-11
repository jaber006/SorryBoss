"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Phone, CheckCircle, XCircle, Clock, User, Users, Calendar, FileText } from "lucide-react";

type Consultation = {
  id: string;
  createdAt: string;
  leaveType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  symptoms: string;
  symptomDetails: string | null;
  symptomStartDate: string;
  daysRequested: number;
  preferredCallTime: string;
  status: string;
  paymentStatus: string;
  careRecipientName: string | null;
  careRelationship: string | null;
  pharmacistNotes: string | null;
  callNotes: string | null;
};

export default function ConsultationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [consultation, setConsultation] = useState<Consultation | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [notes, setNotes] = useState("");
  const [declineReason, setDeclineReason] = useState("");
  const [showDeclineModal, setShowDeclineModal] = useState(false);
  const [daysToIssue, setDaysToIssue] = useState(1);

  useEffect(() => {
    fetch(`/api/admin/consultation/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setConsultation(data);
        setNotes(data.pharmacistNotes || "");
        setDaysToIssue(data.daysRequested || 1);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [params.id]);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-AU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatDateTime = (dateStr: string) => {
    return new Date(dateStr).toLocaleString("en-AU", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const parseSymptoms = (symptomsJson: string) => {
    try {
      return JSON.parse(symptomsJson);
    } catch {
      return [symptomsJson];
    }
  };

  const startCall = async () => {
    setActionLoading(true);
    try {
      await fetch(`/api/admin/consultation/${params.id}/start-call`, {
        method: "POST",
      });
      setConsultation(prev => prev ? { ...prev, status: "in_progress" } : null);
    } catch (error) {
      console.error("Failed to start call:", error);
    } finally {
      setActionLoading(false);
    }
  };

  const issueCertificate = async () => {
    setActionLoading(true);
    try {
      const res = await fetch(`/api/admin/consultation/${params.id}/issue`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes, daysToIssue }),
      });
      
      if (res.ok) {
        router.push("/admin?issued=true");
      } else {
        const data = await res.json();
        alert(data.error || "Failed to issue certificate");
      }
    } catch (error) {
      console.error("Failed to issue certificate:", error);
    } finally {
      setActionLoading(false);
    }
  };

  const declineConsultation = async () => {
    setActionLoading(true);
    try {
      await fetch(`/api/admin/consultation/${params.id}/decline`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason: declineReason, notes }),
      });
      router.push("/admin?declined=true");
    } catch (error) {
      console.error("Failed to decline:", error);
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </main>
    );
  }

  if (!consultation) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Consultation not found</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Nav */}
      <nav className="bg-[#1A1A1A] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/admin" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            consultation.status === "in_progress" ? "bg-purple-500" :
            consultation.status === "completed" ? "bg-green-500" :
            consultation.status === "declined" ? "bg-red-500" :
            "bg-blue-500"
          }`}>
            {consultation.status === "in_progress" ? "Call In Progress" : 
             consultation.status.charAt(0).toUpperCase() + consultation.status.slice(1)}
          </span>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Main Info */}
          <div className="col-span-2 space-y-6">
            {/* Patient Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                  consultation.leaveType === "carer" ? "bg-purple-100" : "bg-blue-100"
                }`}>
                  {consultation.leaveType === "carer" ? (
                    <Users className="w-8 h-8 text-purple-600" />
                  ) : (
                    <User className="w-8 h-8 text-blue-600" />
                  )}
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-semibold">
                    {consultation.firstName} {consultation.lastName}
                  </h1>
                  <p className="text-gray-500 mt-1">
                    {consultation.leaveType === "carer" ? "Carer's Leave" : "Personal Leave"} Certificate Request
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-sm">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      {consultation.phone}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      DOB: {formatDate(consultation.dateOfBirth)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Carer's Leave - Person Being Cared For */}
            {consultation.leaveType === "carer" && consultation.careRecipientName && (
              <div className="bg-purple-50 rounded-xl border border-purple-200 p-6">
                <h3 className="font-semibold text-purple-900 mb-3">Person Being Cared For</h3>
                <p className="text-lg">{consultation.careRecipientName}</p>
                <p className="text-purple-700">Relationship: {consultation.careRelationship}</p>
              </div>
            )}

            {/* Symptoms */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold mb-4">Reported Symptoms</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {parseSymptoms(consultation.symptoms).map((symptom: string, i: number) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-gray-100 text-sm">
                    {symptom}
                  </span>
                ))}
              </div>
              {consultation.symptomDetails && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 font-medium mb-1">Additional Details:</p>
                  <p className="text-sm">{consultation.symptomDetails}</p>
                </div>
              )}
              <div className="mt-4 flex items-center gap-6 text-sm text-gray-600">
                <span>
                  <strong>Started:</strong> {formatDate(consultation.symptomStartDate)}
                </span>
                <span>
                  <strong>Days Requested:</strong> {consultation.daysRequested}
                </span>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold mb-4">Pharmacist Notes</h3>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1A1A1A] focus:ring-2 focus:ring-[#1A1A1A]/10 outline-none transition-all resize-none"
                rows={4}
                placeholder="Add notes about the consultation..."
              />
            </div>
          </div>

          {/* Sidebar - Actions */}
          <div className="space-y-6">
            {/* Call Info */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Scheduled Time
              </h3>
              <p className="text-lg font-medium">{formatDateTime(consultation.preferredCallTime)}</p>
              <p className="text-sm text-gray-500 mt-2">Call: {consultation.phone}</p>
            </div>

            {/* Actions */}
            {(consultation.status === "scheduled" || consultation.status === "in_progress") && (
              <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
                <h3 className="font-semibold">Actions</h3>

                {consultation.status === "scheduled" && (
                  <button
                    onClick={startCall}
                    disabled={actionLoading}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1A1A1A] text-white font-semibold hover:bg-[#E8B931] hover:text-[#1A1A1A] transition-colors disabled:opacity-50"
                  >
                    <Phone className="w-5 h-5" />
                    Start Call
                  </button>
                )}

                {consultation.status === "in_progress" && (
                  <>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">Days to certify</label>
                      <div className="flex gap-2">
                        {[1, 2].map((d) => (
                          <button
                            key={d}
                            onClick={() => setDaysToIssue(d)}
                            className={`flex-1 px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                              daysToIssue === d
                                ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            {d} day{d > 1 ? "s" : ""}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={issueCertificate}
                      disabled={actionLoading}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#3D8B37] text-white font-semibold hover:bg-[#3D8B37]/80 transition-colors disabled:opacity-50"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Issue Certificate
                    </button>

                    <button
                      onClick={() => setShowDeclineModal(true)}
                      disabled={actionLoading}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition-colors disabled:opacity-50"
                    >
                      <XCircle className="w-5 h-5" />
                      Decline & Refund
                    </button>
                  </>
                )}
              </div>
            )}

            {/* Completed/Declined Status */}
            {consultation.status === "completed" && (
              <div className="bg-green-50 rounded-xl border border-green-200 p-6">
                <div className="flex items-center gap-3 text-green-700">
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-semibold">Certificate Issued</span>
                </div>
              </div>
            )}

            {consultation.status === "declined" && (
              <div className="bg-red-50 rounded-xl border border-red-200 p-6">
                <div className="flex items-center gap-3 text-red-700">
                  <XCircle className="w-6 h-6" />
                  <span className="font-semibold">Declined & Refunded</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decline Modal */}
      {showDeclineModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold mb-4">Decline Consultation</h3>
            <p className="text-gray-600 mb-4">
              Please provide a reason for declining. The customer will be fully refunded.
            </p>
            <textarea
              value={declineReason}
              onChange={(e) => setDeclineReason(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1A1A1A] focus:ring-2 focus:ring-[#1A1A1A]/10 outline-none resize-none"
              rows={3}
              placeholder="Reason for declining..."
            />
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowDeclineModal(false)}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={declineConsultation}
                disabled={!declineReason || actionLoading}
                className="flex-1 px-4 py-3 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 disabled:opacity-50"
              >
                Decline & Refund
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
