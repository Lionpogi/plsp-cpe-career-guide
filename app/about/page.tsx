"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Info, 
  Target, 
  Cpu, 
  Code2, 
  ShieldCheck, 
  ArrowLeft,
  ChevronRight,
  Database,
  Layers
} from 'lucide-react';

export default function AboutPage() {
  const router = useRouter();

  const techStack = [
    { name: "Next.js 14", icon: Layers, desc: "App Router Architecture" },
    { name: "TypeScript", icon: Code2, desc: "Type-Safe Development" },
    { name: "Tailwind CSS", icon: ShieldCheck, desc: "Utility-First Styling" },
    { name: "PostgreSQL", icon: Database, desc: "Relational Data Management" }
  ];

  return (
    <main className="min-h-screen bg-[#1e3a8a] text-white font-sans flex overflow-hidden">
      
      {/* NARROW LEFT SIDEBAR */}
      <aside className="w-[100px] md:w-[120px] bg-[#f97316] flex flex-col items-center py-12 border-r-[10px] border-[#162e70] shrink-0">
        <div className="rotate-[-90deg] origin-center whitespace-nowrap mt-32">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1e3a8a]">
            SYSTEM <span className="text-white">INFO</span>
          </h1>
        </div>
        <button 
          onClick={() => router.back()}
          className="mt-auto mb-10 p-4 bg-[#162e70] rounded-2xl text-[#f97316] hover:bg-white hover:text-[#1e3a8a] transition-all border-2 border-transparent hover:border-[#f97316]"
        >
          <ArrowLeft size={24} />
        </button>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-grow flex flex-col h-screen overflow-y-auto">
        
        {/* Header */}
        <header className="p-10 border-b-[10px] border-[#f97316] bg-[#162e70] flex justify-between items-center sticky top-0 z-10 shadow-2xl">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter italic">About the Portal</h2>
            <p className="text-[#f97316] text-[10px] font-black uppercase tracking-[0.3em] mt-2">
              Mission Directive & Technical Specifications
            </p>
          </div>
          <div className="hidden sm:block">
             <div className="bg-[#1e3a8a] px-6 py-2 border-4 border-[#f97316] rounded-xl text-[10px] font-black uppercase tracking-widest">
                VER 4.0.26
             </div>
          </div>
        </header>

        <section className="p-8 md:p-16 max-w-5xl mx-auto space-y-16">
          
          {/* Section 1: Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[#162e70] p-10 rounded-[3rem] border-[6px] border-white/5 shadow-2xl">
              <div className="bg-[#f97316] w-14 h-14 flex items-center justify-center rounded-2xl mb-6 shadow-lg border-4 border-[#1e3a8a]">
                <Target size={28} className="text-[#1e3a8a]" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">Mission</h3>
              <p className="text-sm font-bold text-blue-100/70 leading-relaxed italic">
                To provide PLSP Computer Engineering students with a centralized gateway for career development, academic tracking, and technical mastery. We bridge the gap between classroom theory and industry readiness.
              </p>
            </div>

            <div className="bg-[#162e70] p-10 rounded-[3rem] border-[6px] border-white/5 shadow-2xl">
              <div className="bg-[#f97316] w-14 h-14 flex items-center justify-center rounded-2xl mb-6 shadow-lg border-4 border-[#1e3a8a]">
                <Cpu size={28} className="text-[#1e3a8a]" />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">Vision</h3>
              <p className="text-sm font-bold text-blue-100/70 leading-relaxed italic">
                Empowering the Class of 2028 to lead the next generation of automation, database management, and embedded systems engineering in the Philippines.
              </p>
            </div>
          </div>

          {/* Section 2: Technical Specifications */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-[4px] w-12 bg-[#f97316]" />
              <h3 className="text-xl font-black uppercase tracking-[0.2em] text-[#f97316]">Technical Stack</h3>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((tech, i) => (
                <div key={i} className="bg-[#1e3a8a] p-6 rounded-3xl border-4 border-white/5 hover:border-[#f97316] transition-all flex flex-col items-center text-center group">
                  <tech.icon size={32} className="text-blue-300 group-hover:text-[#f97316] transition-colors mb-4" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-white">{tech.name}</p>
                  <p className="text-[8px] font-bold text-blue-200/40 uppercase mt-1 tracking-tight">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Development Team / Footer Quote */}
          <div className="bg-[#f97316] rounded-[3rem] p-12 text-[#1e3a8a] relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck size={120} />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4">Developed by GROUP 3 CPE2C</h3>
              <p className="font-bold text-sm max-w-xl opacity-80 leading-snug">
              Designed with the intent to optimize the engineering journey through modern web architecture.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] bg-[#1e3a8a] text-white px-4 py-2 rounded-lg">
                  Authorized Resource
                </span>
                <span className="text-[9px] font-black uppercase tracking-[0.4em] border-2 border-[#1e3a8a] px-4 py-2 rounded-lg">
                  Batch 2028
                </span>
              </div>
            </div>
          </div>

        </section>

        {/* System Footer */}
        <footer className="mt-auto p-10 border-t-[6px] border-white/5 bg-[#162e70]/40 flex justify-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">
            "Ang Pag-asa ng Bayan ay nasa Galing ng Inhinyero."
          </p>
        </footer>
      </div>
    </main>
  );
}