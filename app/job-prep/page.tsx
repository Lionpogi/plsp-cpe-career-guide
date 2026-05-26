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
    <main className="min-h-screen bg-[#1e3a8a] text-white font-sans flex flex-col antialiased select-none overflow-x-hidden selection:bg-[#f97316]/30">
      
      {/* HEADER SECTION - Styled to match Command Center paneling */}
      <header className="py-12 px-6 text-center bg-[#162e70] border-b-4 border-black/10 shadow-2xl relative z-10">
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight italic text-white drop-shadow-sm mb-2">
          CAREER READINESS PORTAL
        </h1>
        <p className="text-xs font-bold tracking-[0.15em] text-orange-400 uppercase flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          SYSTEM_VECTORS // LANDING YOUR FIRST ENGINEERING ROLE
        </p>
      </header>

      {/* CORE WORKSPACE SECTION */}
      <section className="max-w-5xl mx-auto py-12 px-5 sm:px-6 space-y-8 md:space-y-12 w-full relative z-10">
        
        {/* PIPELINE BREAKPOINT SEPARATOR WIRE */}
        <div className="w-full space-y-3.5">
          <div className="text-left font-black text-[10px] tracking-[0.25em] text-orange-400">
            <span className="bg-[#162e70] px-3.5 py-1.5 rounded-lg border border-white/5 shadow-sm">
              // OPERATIONS PIPELINE
            </span>
          </div>
          <div className="h-[4px] bg-[#f97316] w-full rounded-full opacity-95 shadow-inner" />
        </div>

        {/* STEP METRIC PIPELINE CARDS */}
        {jobSteps.map((step, i) => (
          <div key={i} className="bg-gradient-to-br from-[#162e70]/95 to-[#162e70]/60 rounded-[2rem] border border-white/10 hover:border-[#f97316]/60 p-6 md:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1.5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 bg-[#f97316] rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/10 text-[#1e3a8a]">
                <step.icon size={22} />
              </div>
              <div>
                <span className="text-[9px] font-black tracking-widest text-orange-400 block opacity-80">PIPELINE_NODE // 0{i + 1}</span>
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
                  {step.title}
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {step.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 bg-[#112255]/40 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="text-[#f97316] mt-0.5 shrink-0" size={16} />
                  <p className="text-blue-200/90 text-xs md:text-sm leading-relaxed font-medium">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* REPLACEMENT: GLASSMORPHIC INTERACTIVE TECHNICAL INTERVIEW SIMULATOR */}
        <div className="bg-gradient-to-br from-[#162e70]/95 to-[#162e70]/60 rounded-[2rem] border border-white/10 p-6 md:p-8 shadow-xl space-y-6">
          <div className="border-b border-white/10 pb-4">
            <span className="text-[9px] font-black tracking-widest text-orange-400 block opacity-80">SYSTEM_CRITERIA // TRACKS</span>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white flex items-center gap-2">
              Technical Interview Simulator
            </h3>
          </div>

          {/* Interactive Navigation Hub */}
          <div className="flex flex-wrap gap-2">
            {(Object.keys(mockQuestions) as Array<keyof typeof mockQuestions>).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 rounded-xl font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-200 border ${
                  activeTab === key 
                    ? 'bg-[#f97316] text-[#1e3a8a] border-[#f97316] shadow-md shadow-orange-500/20' 
                    : 'bg-[#1e3a8a]/40 text-blue-300 border-white/5 hover:border-orange-500/40 hover:text-white'
                }`}
              >
                {mockQuestions[key].icon}
                {key}
              </button>
            ))}
          </div>

          {/* Core Simulator Console Panel */}
          <div className="bg-[#1e3a8a]/40 rounded-2xl border border-white/5 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black tracking-widest text-orange-400 uppercase bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-md">
                Active Node // {mockQuestions[activeTab].category}
              </span>
              <span className="text-[9px] text-blue-300/40 font-black uppercase tracking-wider flex items-center gap-1">
                Live Console <ExternalLink size={10} />
              </span>
            </div>

            <div className="space-y-3">
              <h4 className="text-base md:text-lg font-black text-white leading-snug uppercase tracking-tight italic">
                "{mockQuestions[activeTab].question}"
              </h4>
              <div className="h-[2px] bg-[#f97316] w-12 rounded-full opacity-60" />
              <p className="text-xs md:text-sm text-blue-200/80 leading-relaxed pt-2">
                <strong className="text-orange-400 font-black uppercase tracking-widest block text-[10px] mb-1">Response Architecture Strategy:</strong>
                {mockQuestions[activeTab].guide}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER BAR SECTION - Configured to frame the layout perfectly */}
      <footer className="max-w-5xl mx-auto py-8 px-6 mt-auto border-t border-white/10 flex justify-between items-center w-full text-[10px] font-black tracking-[0.2em] text-blue-200/40 uppercase">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-white/60 hover:text-[#f97316] font-black transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Return to Portal
        </button>
        <span className="border-l-4 border-[#f97316] pl-2.5 text-blue-300/30">
          PLSP-CPE 2026
        </span>
      </footer>
    </main>
  );
}