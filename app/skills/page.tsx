"use client";

import React, { useEffect, useState } from 'react';
import { 
  Cpu, 
  Database, 
  CheckCircle2, 
  ArrowLeft, 
  Award,
  Zap
} from 'lucide-react';

export default function SkillVault() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Triggers the "loading" animation of the bars when the page loads
    setAnimated(true);
  }, []);

  const skillGroups = [
    {
      title: "Hardware & Embedded",
      icon: Cpu,
      skills: [
        { name: "C / C++ (Embedded Systems)", level: 85 },
        { name: "Arduino & ESP32 Prototyping", level: 92 },
        { name: "PCB Design (Altium / EasyEDA)", level: 70 },
        { name: "PLC & Industrial Automation", level: 78 }
      ]
    },
    {
      title: "Software & Data",
      icon: Database,
      skills: [
        { name: "PostgreSQL & pgAdmin4", level: 88 },
        { name: "Next.js & React Framework", level: 82 },
        { name: "ERD & UML System Design", level: 95 },
        { name: "Numerical Methods", level: 75 }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#1e3a8a] text-white font-sans selection:bg-[#f97316]">
      {/* Header */}
      <header className="py-12 px-8 bg-[#162e70] border-b-8 border-[#f97316] shadow-2xl">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter italic">
              SKILL <span className="text-[#f97316]">VAULT</span>
            </h1>
            <p className="text-blue-200 text-[10px] font-black uppercase tracking-[0.3em] mt-1"> Proficiency Metrics </p>
          </div>
          <Award className="text-[#f97316]" size={40} />
        </div>
      </header>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillGroups.map((group, i) => (
          <div key={i} className="bg-[#162e70] p-10 rounded-[3rem] border-2 border-white/5 shadow-xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-[#f97316] p-3 rounded-2xl shadow-lg">
                <group.icon className="text-[#1e3a8a]" size={28} />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-widest">{group.title}</h2>
            </div>

            <div className="space-y-8">
              {group.skills.map((skill, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-black uppercase tracking-tight text-blue-100/80">
                      {skill.name}
                    </span>
                    <span className="text-[#f97316] text-lg font-black italic">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar Container */}
                  <div className="h-4 bg-[#12255a] rounded-full overflow-hidden border border-white/5 shadow-inner">
                    <div 
                      className="h-full bg-gradient-to-r from-[#f97316] to-[#ea580c] transition-all duration-[2000ms] ease-out rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                      style={{ 
                        width: animated ? `${skill.level}%` : '0%' 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Status Callout */}
      <div className="max-w-6xl mx-auto px-8 pb-12">
        <div className="bg-[#f97316] p-6 rounded-2xl flex items-center gap-4 shadow-2xl">
          <Zap className="text-white animate-pulse" size={24} />
          <p className="text-[#1e3a8a] font-black uppercase text-xs tracking-widest">
            Leveling Up: Focus on Cloud Deployment and Advanced Mechatronics for 2026.
          </p>
        </div>
      </div>
      
      <footer className="max-w-6xl mx-auto p-8 border-t border-white/10 flex justify-between items-center">
        <button 
          onClick={() => window.history.back()} 
          className="flex items-center gap-3 text-white/40 hover:text-[#f97316] font-black text-xs uppercase transition-all"
        >
          <ArrowLeft size={18} /> Return to Dashboard
        </button>
        <span className="text-white/10 text-[9px] font-black uppercase tracking-widest">
          PLSP-CPE Performance Tracker
        </span>
      </footer>
    </main>
  );
}