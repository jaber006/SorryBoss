import Link from "next/link";
import { ArrowRight, Check, Clock, Shield, Phone, Zap, Lock } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between bg-[#FDF8EE]/85 backdrop-blur-xl border-b border-black/5">
        <Link href="/" className="flex items-center gap-2 text-[#1A1A1A] no-underline" style={{ fontFamily: "'Instrument Serif', serif" }}>
          <span className="w-2.5 h-2.5 bg-[#E8B931] rounded-full" />
          <span className="text-2xl md:text-[28px]">SorryBoss</span>
        </Link>
        <Link 
          href="/book" 
          className="bg-[#1A1A1A] text-[#FDF8EE] px-5 md:px-7 py-3 rounded-full text-sm md:text-[15px] font-semibold tracking-tight hover:bg-[#E8B931] hover:text-[#1A1A1A] hover:-translate-y-0.5 transition-all duration-300"
        >
          Get Your Cert →
        </Link>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-36 pb-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(232,185,49,0.12)_0%,transparent_70%),radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(61,139,55,0.06)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="animate-fade-up inline-flex items-center gap-2 bg-white border border-black/8 px-4 py-2 rounded-full text-sm font-medium text-[#6B6560] mb-8 shadow-sm">
          <span className="w-2 h-2 bg-[#3D8B37] rounded-full animate-pulse-dot" />
          AHPRA Registered Pharmacist
        </div>

        <h1 
          className="animate-fade-up animate-fade-up-1 text-5xl md:text-7xl lg:text-[96px] font-normal leading-[1.02] tracking-tight max-w-4xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Too sick for the<br />waiting room<em className="text-[#E8B931]">?</em>
        </h1>

        <p className="animate-fade-up animate-fade-up-2 text-lg md:text-xl text-[#6B6560] max-w-xl leading-relaxed mt-6">
          Get an Absence from Work Certificate from an Australian registered pharmacist. Phone consult from your bed. Certificate emailed in minutes.
        </p>

        <div className="animate-fade-up animate-fade-up-3 flex flex-wrap justify-center gap-4 mt-12">
          <Link 
            href="/book" 
            className="inline-flex items-center gap-2.5 bg-[#1A1A1A] text-[#FDF8EE] px-8 py-4 rounded-full text-lg font-semibold tracking-tight hover:bg-[#E8B931] hover:text-[#1A1A1A] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(232,185,49,0.3)] transition-all duration-300"
          >
            Get Your Cert
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a 
            href="#how" 
            className="px-8 py-4 rounded-full text-lg font-medium border-[1.5px] border-black/15 hover:border-black hover:bg-white transition-all duration-300"
          >
            How It Works
          </a>
        </div>

        <div className="animate-fade-up animate-fade-up-4 flex flex-wrap justify-center items-center gap-6 mt-14">
          {[
            "Fair Work Act 2009",
            "No cert, no charge",
            "Certificate in minutes"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              {i > 0 && <div className="w-px h-4 bg-black/12 hidden sm:block" />}
              <span className="flex items-center gap-1.5 text-sm text-[#6B6560]">
                <Check className="w-4 h-4 text-[#3D8B37]" />
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-y border-black/6 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-12">
          {[
            { icon: "🏥", text: "AHPRA Registered" },
            { icon: "📋", text: "Fair Work Compliant" },
            { icon: "📱", text: "Phone Consult From Bed" },
            { icon: "⚡", text: "Cert Emailed Instantly" },
            { icon: "🔒", text: "Private & Confidential" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-[15px] font-medium text-[#6B6560]">
              <div className="w-10 h-10 bg-[#E8B931]/10 rounded-xl flex items-center justify-center text-xl">
                {item.icon}
              </div>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <section id="how" className="py-24 px-6 max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#E8B931] mb-4">How It Works</p>
        <h2 
          className="text-4xl md:text-5xl font-normal leading-tight tracking-tight max-w-lg"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Three steps. Still in your pyjamas.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            {
              num: "01",
              title: "Fill in your details",
              desc: "Tell us your name, symptoms, and when you started feeling unwell. Pick a time for your pharmacist to call you back.",
              time: "2 minutes"
            },
            {
              num: "02",
              title: "Quick phone call",
              desc: "Our pharmacist calls you for a brief assessment. No video needed — stay in bed, no need to look presentable.",
              time: "3–5 minutes"
            },
            {
              num: "03",
              title: "Certificate emailed",
              desc: "If our pharmacist assesses you as unfit for work, your Absence from Work Certificate is emailed to you immediately.",
              time: "Instant"
            },
          ].map((step, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-black/6 hover:-translate-y-1 hover:shadow-xl hover:border-black/10 transition-all duration-300">
              <div className="text-6xl font-normal text-[#E8B931]/20 leading-none mb-5" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {step.num}
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-3">{step.title}</h3>
              <p className="text-[15px] text-[#6B6560] leading-relaxed">{step.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3D8B37] mt-5 bg-[#3D8B37]/10 px-3 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                {step.time}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-[#1A1A1A] text-[#FDF8EE] py-24 px-6 relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-20%] w-[60%] h-[200%] bg-[radial-gradient(ellipse,rgba(232,185,49,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#E8B931] mb-4">Pricing</p>
            <h2 
              className="text-4xl md:text-5xl font-normal leading-tight tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Skip the queue. Keep your cash.
            </h2>

            <div className="mt-10 flex flex-col gap-4">
              {[
                { label: "Emergency GP visit", price: "$80–120", crossed: true },
                { label: "After-hours doctor", price: "$60–95", crossed: true },
                { label: "Telehealth GP consult", price: "$40–60", crossed: true },
                { label: "SorryBoss", price: "$9.95", crossed: false },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-white/10">
                  <span className="text-white/60">{row.label}</span>
                  <span 
                    className={`text-2xl ${row.crossed ? 'line-through text-white/30' : 'text-[#E8B931]'}`}
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {row.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center backdrop-blur-sm">
            <div className="text-7xl font-normal text-[#E8B931]" style={{ fontFamily: "'Instrument Serif', serif" }}>
              $24<span className="text-4xl">.95</span>
            </div>
            <p className="text-[15px] text-white/50 mt-2">Only charged if a certificate is issued</p>
            <p className="text-white/70 mt-6 leading-relaxed">
              One flat fee. No hidden costs. If our pharmacist can&apos;t issue you a certificate, you pay nothing.
            </p>

            <div className="text-left mt-8 flex flex-col gap-3">
              {[
                "Phone assessment by registered pharmacist",
                "Certificate emailed immediately",
                "Valid under the Fair Work Act 2009",
                "Personal leave & carer's leave",
                "No cert, no charge — guaranteed",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[15px] text-white/70">
                  <Check className="w-4 h-4 text-[#E8B931] flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>

            <Link 
              href="/book"
              className="w-full mt-8 inline-flex justify-center items-center gap-2.5 bg-[#E8B931] text-[#1A1A1A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-300"
            >
              Get Your Cert Now →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#E8B931] mb-4">Questions</p>
        <h2 
          className="text-4xl md:text-5xl font-normal leading-tight tracking-tight max-w-lg"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Everything your boss would ask.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {[
            {
              q: "Is this actually legit?",
              a: "Yes. Under the Fair Work Act 2009, registered pharmacists are authorised to issue Absence from Work Certificates as valid evidence of illness for personal leave and carer's leave. Our certificates comply with section 107(3) of the Act."
            },
            {
              q: "Will my employer accept it?",
              a: "Most employers accept pharmacist certificates — they're legally recognised under Fair Work. We recommend confirming with your employer beforehand. The certificate includes the pharmacist's AHPRA registration number for verification."
            },
            {
              q: "How long can the certificate cover?",
              a: "Pharmacist certificates typically cover 1–2 days for minor ailments like colds, headaches, gastro, and similar conditions. For longer absences or serious conditions, we'll refer you to a GP."
            },
            {
              q: "What if I'm too sick to talk?",
              a: "The phone call is brief — usually 3 to 5 minutes. If you can text, you can take the call. We just need to ask a few questions about your symptoms to make a proper assessment."
            },
            {
              q: "Can I get a cert for carer's leave?",
              a: "Yes. If you need to care for a sick family or household member, we can issue a carer's leave certificate. The unwell person should ideally be available to speak briefly during the call."
            },
            {
              q: "What can't you certify?",
              a: "We can't issue certificates for pregnancy-related leave, compassionate leave, workers' compensation, or conditions outside a pharmacist's scope. We also can't backdate certificates. In these cases, we'll guide you to the right service."
            },
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-black/6">
              <h4 className="text-lg font-semibold tracking-tight mb-3">{faq.q}</h4>
              <p className="text-[15px] text-[#6B6560] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="get-cert" className="py-28 px-6 text-center relative">
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-[#E8B931]/6 to-transparent pointer-events-none" />
        
        <p className="text-sm font-semibold uppercase tracking-widest text-[#E8B931] mb-4">Ready?</p>
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight max-w-2xl mx-auto"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Feeling crook<em className="text-[#E8B931]">?</em><br />Sorted in 10 minutes.
        </h2>
        <p className="text-lg md:text-xl text-[#6B6560] max-w-xl mx-auto leading-relaxed mt-5">
          Fill in your details, take a quick call, and get your certificate emailed. All from bed.
        </p>
        <Link 
          href="/book"
          className="inline-flex items-center gap-2.5 bg-[#1A1A1A] text-[#FDF8EE] px-8 py-4 rounded-full text-lg font-semibold tracking-tight hover:bg-[#E8B931] hover:text-[#1A1A1A] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(232,185,49,0.3)] transition-all duration-300 mt-10"
        >
          Get Your Cert
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
            <span className="w-2 h-2 bg-[#E8B931] rounded-full" />
            <span className="text-lg">SorryBoss</span>
          </div>
          <p className="text-xs text-[#6B6560]/60 max-w-xl leading-relaxed">
            SorryBoss is a service operated by AHPRA-registered pharmacists. Certificates are issued in accordance with the Fair Work Act 2009 (s107). A pharmacist consultation is not a substitute for medical advice. If your symptoms persist or worsen, please see your doctor.
          </p>
        </div>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-sm text-[#6B6560] hover:text-[#1A1A1A] transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-sm text-[#6B6560] hover:text-[#1A1A1A] transition-colors">Terms</Link>
          <Link href="/contact" className="text-sm text-[#6B6560] hover:text-[#1A1A1A] transition-colors">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
