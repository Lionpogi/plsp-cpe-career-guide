"use client";

import React from 'react';
import { 
  FileText, 
  Briefcase, 
  Search, 
  CheckCircle2, 
  ArrowLeft,
  Download,
  GraduationCap
} from 'lucide-react';

export default function JobPrep() {
  const jobSteps = [
    {
      title: "1. The Engineering Resume",
      icon: FileText,
      points: [
        "Use a clean, single-column format.",
        "Highlight your Internship (e.g., Kinpo Electronics automation work).",
        "List technical skills clearly (Arduino, PLC, Next.js, SQL).",
        "Include your PLSP degree and expected graduation (2028)."
      ]
    },
    {
      title: "2. The Technical Portfolio",
      icon: Briefcase,
      points: [
        "Host your Career Guide project on GitHub or Vercel.",
        "Document your hardware projects (Skinner Box, RFID Parking).",
        "Include circuit diagrams and code snippets.",
        "Write a brief 'Why I built this' for each project."
      ]
    },
    {
      title: "3. Interview Mastery",
      icon: Search,
      points: [
        "Practice 'STAR' method for behavioral questions.",
        "Be ready to explain your PLC/Automation logic.",
        "Review Data Structures and Basic Circuit Analysis.",
        "Prepare questions about the company's tech stack."
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-[#3b82f6]/30">
      {/* Standard Header */}
      <header className="py-12 px-6 text-center bg-[#1e293b] border-b border-slate-700 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-500 uppercase tracking-wider mb-2">
          CAREER READINESS PORTAL
        </h1>
        <p className="text-slate-400 text-sm md:text-base font-medium">
          Essential steps to land your first Engineering role.
        </p>
      </header>

      {/* Standard Content Grid */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-8">
        {jobSteps.map((step, i) => (
          <div key={i} className="bg-[#1e293b] rounded-2xl border border-slate-700 p-8 shadow-md transition-all hover:border-blue-500/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <step.icon size={28} className="text-blue-400" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                {step.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {step.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 mt-1 shrink-0" size={18} />
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Action Card */}
        <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl border border-blue-500/20 p-10 text-center shadow-lg">
          <GraduationCap size={48} className="text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Ready to start?</h3>
          <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
            Download our PLSP-specific resume template designed for Computer Engineering students.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-bold text-sm transition-all flex items-center gap-2 mx-auto shadow-lg shadow-blue-900/20 active:scale-95">
            <Download size={18} /> Download Template (PDF)
          </button>
        </div>
      </section>

      {/* Standard Footer */}
      <footer className="max-w-5xl mx-auto py-12 px-6 border-t border-slate-800 flex justify-between items-center">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-slate-400 hover:text-blue-400 font-bold text-sm transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Return to Portal
        </button>
        <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">
          PLSP-CPE 2026
        </span>
      </footer>
    </main>
  );
}