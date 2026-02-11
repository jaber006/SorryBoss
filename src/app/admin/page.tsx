"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Clock, Phone, User, Users, CheckCircle, XCircle, RefreshCw, Search, Lock, Download } from "lucide-react";

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
  preferredCallTime: string;
  status: string;
  paymentStatus: string;
  careRecipientName: string | null;
  careRelationship: string | null;
  certificate?: {
    id: string;
    verificationCode: string;
  } | null;
};

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        const { token } = await res.json();
        localStorage.setItem("adminToken", token);
        onLogin();
      } else {
        setError("Invalid password");
      }
    } catch {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl border border-gray-200 p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#1A1A1A] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-[#E8B931]" />
          </div>
          <h1 className="text-2xl font-semibold">Admin Login</h1>
          <p className="text-gray-500 mt-2">Enter your admin password</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1A1A1A] focus:ring-2 focus:ring-[#1A1A1A]/10 outline-none mb-4"
            autoFocus
          />
          {error && (
            <p className="text-red-600 text-sm mb-4">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3 rounded-xl bg-[#1A1A1A] text-white font-semibold hover:bg-[#E8B931] hover:text-[#1A1A1A] transition-colors disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "pending" | "scheduled" | "completed">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchDob, setSearchDob] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Check auth on mount
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsAuthenticated(!!token);
  }, []);

  const fetchConsultations = async () => {
    setLoading(true);
    setIsSearching(false);
    try {
      const res = await fetch(`/api/admin/consultations?status=${filter}`);
      const data = await res.json();
      setConsultations(data.consultations || []);
    } catch (error) {
      console.error("Failed to fetch consultations:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery && !searchDob) {
      fetchConsultations();
      return;
    }

    setLoading(true);
    setIsSearching(true);
    try {
      const params = new URLSearchParams();
      if (searchQuery) params.set("q", searchQuery);
      if (searchDob) params.set("dob", searchDob);

      const res = await fetch(`/api/admin/search?${params}`);
      const data = await res.json();
      setConsultations(data.consultations || []);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchDob("");
    setIsSearching(false);
    fetchConsultations();
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchConsultations();
    }
  }, [filter, isAuthenticated]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAuthenticated(false);
  };

  const formatDateTime = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-AU", {
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-AU", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">Pending</span>;
      case "scheduled":
        return <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">Scheduled</span>;
      case "in_progress":
        return <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">In Progress</span>;
      case "completed":
        return <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">Completed</span>;
      case "declined":
        return <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">Declined</span>;
      default:
        return <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">{status}</span>;
    }
  };

  const parseSymptoms = (symptomsJson: string) => {
    try {
      return JSON.parse(symptomsJson).join(", ");
    } catch {
      return symptomsJson;
    }
  };

  // Show nothing while checking auth
  if (isAuthenticated === null) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </main>
    );
  }

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return <LoginForm onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Nav */}
      <nav className="bg-[#1A1A1A] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-white no-underline" style={{ fontFamily: "'Instrument Serif', serif" }}>
            <span className="w-2.5 h-2.5 bg-[#E8B931] rounded-full" />
            <span className="text-xl">SorryBoss</span>
          </Link>
          <span className="text-white/50 ml-2">Admin Dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchConsultations}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500/30 transition-colors"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Search className="w-5 h-5" />
            Search Consultations
          </h3>
          <div className="flex gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Name, email, or phone..."
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1A1A1A] focus:ring-2 focus:ring-[#1A1A1A]/10 outline-none"
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-500">DOB:</label>
              <input
                type="date"
                value={searchDob}
                onChange={(e) => setSearchDob(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1A1A1A] focus:ring-2 focus:ring-[#1A1A1A]/10 outline-none"
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-6 py-3 rounded-xl bg-[#1A1A1A] text-white font-medium hover:bg-[#E8B931] hover:text-[#1A1A1A] transition-colors"
            >
              Search
            </button>
            {isSearching && (
              <button
                onClick={clearSearch}
                className="px-6 py-3 rounded-xl border border-gray-200 font-medium hover:bg-gray-50 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Bookings", value: consultations.length, icon: Clock, color: "blue" },
            { label: "Pending", value: consultations.filter(c => c.status === "pending" || c.status === "scheduled").length, icon: Phone, color: "yellow" },
            { label: "Completed", value: consultations.filter(c => c.status === "completed").length, icon: CheckCircle, color: "green" },
            { label: "Declined", value: consultations.filter(c => c.status === "declined").length, icon: XCircle, color: "red" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-3xl font-semibold mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${stat.color}-100`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        {!isSearching && (
          <div className="flex gap-2 mb-6">
            {[
              { key: "all", label: "All" },
              { key: "pending", label: "Pending" },
              { key: "scheduled", label: "Scheduled" },
              { key: "completed", label: "Completed" },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key as typeof filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === f.key
                    ? 'bg-[#1A1A1A] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}

        {isSearching && (
          <div className="mb-6 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg inline-block">
            Search results for: {searchQuery || `DOB ${searchDob}`}
          </div>
        )}

        {/* Consultations List */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Consultations</h2>
          </div>

          {loading ? (
            <div className="p-12 text-center text-gray-500">
              Loading consultations...
            </div>
          ) : consultations.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              No consultations found
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {consultations.map((consultation) => (
                <div key={consultation.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        consultation.leaveType === "carer" ? 'bg-purple-100' : 'bg-blue-100'
                      }`}>
                        {consultation.leaveType === "carer" ? (
                          <Users className={`w-6 h-6 text-purple-600`} />
                        ) : (
                          <User className={`w-6 h-6 text-blue-600`} />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold">
                            {consultation.firstName} {consultation.lastName}
                          </h3>
                          {getStatusBadge(consultation.status)}
                          <span className="text-xs text-gray-400 uppercase">
                            {consultation.leaveType === "carer" ? "Carer's Leave" : "Personal Leave"}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {consultation.email} • {consultation.phone}
                        </p>
                        <p className="text-sm text-gray-500">
                          DOB: {formatDate(consultation.dateOfBirth)}
                        </p>
                        {consultation.careRecipientName && (
                          <p className="text-sm text-purple-600 mt-1">
                            Caring for: {consultation.careRecipientName} ({consultation.careRelationship})
                          </p>
                        )}
                        <p className="text-sm text-gray-500 mt-2">
                          <strong>Symptoms:</strong> {parseSymptoms(consultation.symptoms)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{formatDateTime(consultation.preferredCallTime)}</p>
                      <div className="flex gap-2 mt-3 justify-end">
                        <Link
                          href={`/admin/consultation/${consultation.id}`}
                          className="px-4 py-2 rounded-lg text-sm font-medium bg-[#1A1A1A] text-white hover:bg-[#E8B931] hover:text-[#1A1A1A] transition-colors"
                        >
                          View Details
                        </Link>
                        {consultation.certificate && (
                          <a
                            href={`/api/admin/consultation/${consultation.id}/certificate`}
                            className="px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors flex items-center gap-2"
                          >
                            <Download className="w-4 h-4" />
                            Certificate
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
