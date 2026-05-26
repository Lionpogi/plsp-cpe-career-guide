"use client";

import React, { useState } from 'react';
import { 
  FileText, 
  Briefcase, 
  Search, 
  CheckCircle2, 
  ArrowLeft,
  Terminal,
  Cpu,
  Database,
  ExternalLink
} from 'lucide-react';

export default function JobPrep() {
  const [activeTab, setActiveTab] = useState<'hardware' | 'software' | 'behavioral'>('hardware');

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

  const mockQuestions = {
    hardware: {
      category: "Embedded Hardware & Systems",
      icon: <Cpu size={18} />,
      question: "How do you handle precise peripheral signal timing or hardware output delivery using standard microcontrollers?",
      guide: "Explain logic structures using projects like the Skinner Box or RFID systems. Discuss configuring hardware triggers, dealing with bouncing mechanical switches, and decoupling electrical outputs from noise."
    },
    software: {
      category: "Databases & Web Integration",
      icon: <Database size={18} />,
      question: "Can you describe a scenario where you had to structure complex relationships or parse multi-table relational datasets?",
      guide: "Use your SQL and Next.js project background. Discuss sketching clean Entity-Relationship Diagrams (ERDs), drafting normalization pathways, and handling structured joins to optimize raw search query returns safely."
    },
    behavioral: {
      category: "Leadership & Collaboration",
      icon: <Terminal size={18} />,
      question: "Tell me about a time you had to present technical engineering logic to groupmates or peers who lacked deep domain experience.",
      guide: "Draw on your academic collaboration or leadership backgrounds. Explain how you break down complex code repositories or schematics into digestible visual diagrams to build team consensus."
    }
  };

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

        {/* NEW REPLACEMENT: INTERACTIVE TECHNICAL INTERVIEW SIMULATOR */}
        <div className="bg-[#1e293b] rounded-2xl border border-slate-700 p-6 md:p-8 shadow-lg space-y-6">
          <div className="border-b border-slate-700 pb-4">
            <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
              <Terminal className="text-blue-400" size={20} />
              Technical Interview Simulator
            </h3>
            <p className="text-slate-400 text-xs mt-1">
              Select an engineering vector node to preview targeted, system-specific defense questions.
            </p>
          </div>

          {/* Interactive Navigation Hub */}
          <div className="flex flex-wrap gap-2">
            {(Object.keys(mockQuestions) as Array<keyof typeof mockQuestions>).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${
                  activeTab === key 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40' 
                    : 'bg-[#0f172a] text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {mockQuestions[key].icon}
                {key}
              </button>
            ))}
          </div>

          {/* Core Simulator Console Panel */}
          <div className="bg-[#0f172a] rounded-xl border border-slate-800 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black tracking-widest text-blue-400 uppercase bg-blue-500/10 px-2.5 py-1 rounded-md">
                Active Node // {mockQuestions[activeTab].category}
              </span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                Live Preview <ExternalLink size={10} />
              </span>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm md:text-base font-bold text-white leading-snug">
                "{mockQuestions[activeTab].question}"
              </h4>
              <div className="h-px bg-slate-800/60 my-2" />
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed pl-3 border-l-2 border-blue-500/40">
                <strong className="text-slate-300 font-semibold block mb-1">Response Architecture Strategy:</strong>
                {mockQuestions[activeTab].guide}
              </p>
            </div>
          </div>
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