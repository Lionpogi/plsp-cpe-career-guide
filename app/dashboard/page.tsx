"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Briefcase, 
  Terminal, 
  Award, 
  Info, 
  Mail, 
  HelpCircle, 
  ChevronRight, 
  LogOut, 
  Calendar 
} from 'lucide-react';

export default function Dashboard() {
  const router = useRouter();
  
  // Session parameters matching student database structures
  const [studentId] = useState("23-15157");

  // Core system navigation card arrays
  const navigationCards = [
    {
      title: "Career Paths",
      label: "PATHWAYS",
      desc: "Explore specialized engineering tracks for CpE students.",
      route: "/career-paths",
      icon: <Briefcase className="text-white" size={22} />,
    },
    {
      title: "Skills",
      label: "METRICS",
      desc: "Track proficiency in Arduino, SQL, and Next.js.",
      route: "/skills",
      icon: <Terminal className="text-white" size={22} />,
    },
    {
      title: "Job Prep",
      label: "CAREER",
      desc: "Engineering resume builder and interview preparation.",
      route: "/job-prep",
      icon: <Award className="text-white" size={22} />,
    },
    {
      title: "About",
      label: "PORTAL",
      desc: "Mission, vision, and the tech behind this platform.",
      route: "/about",
      icon: <Info className="text-white" size={22} />,
    },
    {
      title: "Contact",
      label: "SUPPORT",
      desc: "Get in touch with the development team for inquiries.",
      route: "/contact",
      icon: <Mail className="text-white" size={22} />,
    },
    {
      title: "FAQs",
      label: "HELP",
      desc: "Find answers to common questions about the portal.",
      route: "/faqs",
      icon: <HelpCircle className="text-white" size={22} />,
    }
  ];

  return (
    // Changed overflow-x-hidden to allow healthy container tracking on long vertical touch scrolls
    <main className="min-h-screen bg-[#1e3a8a] text-white font-sans flex flex-col md:flex-row antialiased select-none overflow-y-auto md:overflow-hidden">
      
      {/* 1. STRUCTURAL CONTROLLER SIDEBAR */}
      {/* Shifts layout automatically from top bar on phones to a dedicated side panel on PCs */}
      <aside className="w-full md:w-[90px] bg-[#f97316] flex md:flex-col justify-between items-center p-4 md:py-8 shrink-0 relative border-b-4 md:border-b-0 md:border-r-4 border-black/10 shadow-2xl z-20">
        
        {/* Profile/Identity Header Node for Mobile */}
        <div className="md:hidden font-black text-[10px] bg-[#162e70] px-3 py-1.5 rounded-lg border border-white/10 tracking-wider">
          ID: {studentId}
        </div>

        {/* Center alignment layout wrapper - Safely hidden on mobile, handles rotation perfectly on PC */}
        <div className="hidden md:flex flex-1 items-center justify-center w-full h-full relative">
          <h2 className="absolute text-3xl font-black uppercase tracking-[0.3em] text-[#1e3a8a] whitespace-nowrap select-none pointer-events-none transform -rotate-90 origin-center text-center">
            Control Panel
          </h2>
        </div>

        {/* Mobile alternative text banner - Visible only on mobile screens */}
        <h2 className="md:hidden text-sm font-black uppercase tracking-widest text-[#1e3a8a]">
          Control Panel
        </h2>

        {/* Operational escape handles */}
        <div className="flex md:flex-col items-center gap-3.5">
          <div className="hidden md:flex w-11 h-11 bg-[#162e70] rounded-xl items-center justify-center font-black text-xs border border-white/10 shadow-md tracking-wider" title="Operator Signature ID">
            {studentId.substring(0, 2)}
          </div>
          <button 
            onClick={() => router.push('/')}
            className="w-9 h-9 md:w-11 md:h-11 bg-[#162e70]/40 hover:bg-red-600 rounded-xl flex items-center justify-center border border-white/5 hover:border-red-500 text-white transition-all duration-200 group shadow-sm"
            title="Terminate Active Link Session"
          >
            <LogOut size={15} className="group-hover:scale-110 md:group-hover:-translate-x-0.5 transition-transform" />
          </button>
        </div>
      </aside>

      {/* 2. CORE MONITOR SYSTEM MAIN WORKSPACE */}
      <section className="flex-grow p-5 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between relative z-10 space-y-8 md:space-y-12 max-w-[1600px] mx-auto w-full overflow-y-auto">
        
        {/* PORTAL SYSTEMS MONITOR IDENTIFIER HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight italic text-white drop-shadow-sm">
              Command Center
            </h1>
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.12em] sm:tracking-[0.15em] text-orange-400 uppercase flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Engineering Resource Gateway // PLSP-CPE
            </p>
          </div>

          {/* Runtime configuration status metadata block badge */}
          <div className="bg-[#162e70] border border-white/10 rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3.5 flex items-center gap-4 shadow-xl w-full sm:w-auto justify-center backdrop-blur-md">
            <div className="p-2 bg-[#f97316] rounded-xl text-[#1e3a8a] shadow-inner">
              <Calendar size={16} />
            </div>
            <div className="text-right">
              <span className="text-[9px] font-black tracking-widest text-blue-300/60 block uppercase">System Context Time</span>
              <span className="text-base sm:text-lg font-black text-white leading-none tracking-wider">2026</span>
            </div>
          </div>
        </div>

        {/* 3. FLUID CATEGORY BREAKPOINT PIPELINE BLOCK */}
        <div className="w-full space-y-3.5">
          {/* Automatically handles text positioning based on screen size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-center sm:text-left font-black text-[9px] sm:text-[10px] tracking-[0.25em] text-orange-400">
            <div className="sm:pl-2 md:pl-4">
              <span className="bg-[#162e70] px-3 py-1 rounded-lg border border-white/5 shadow-sm inline-block">
                // PATHWAYS NODE
              </span>
            </div>
            <div className="hidden sm:block sm:pl-2 md:pl-4">
              <span className="bg-[#162e70] px-3 py-1 rounded-lg border border-white/5 shadow-sm inline-block">
                // METRICS CLUSTER
              </span>
            </div>
            <div className="hidden md:block md:pl-4">
              <span className="bg-[#162e70] px-3 py-1 rounded-lg border border-white/5 shadow-sm inline-block">
                // CAREER VECTORS
              </span>
            </div>
          </div>

          {/* Seamless horizontal alignment linear divider wire */}
          <div className="h-[4px] bg-[#f97316] w-full rounded-full opacity-95 shadow-inner" />
        </div>

        {/* 4. PREMIUM GLASSMORPHIC NAVIGATION ARCHITECTURE MATRIX GRID */}
        {/* Completely responsive grid parameters mapping perfectly across desktop and mobile screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10">
          {navigationCards.map((card, index) => (
            <div 
              key={index}
              onClick={() => router.push(card.route)}
              className="bg-gradient-to-br from-[#162e70]/95 to-[#162e70]/60 p-6 md:p-8 rounded-[2rem] border border-white/10 hover:border-[#f97316]/60 shadow-xl flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl relative overflow-hidden"
            >
              {/* Technical schema geometric background overlay print detail */}
              <div className="absolute -right-4 -bottom-6 text-white/[0.02] font-black text-8xl sm:text-9xl tracking-tighter scale-100 group-hover:scale-105 group-hover:-translate-x-2 transition-transform duration-500 pointer-events-none uppercase select-none">
                {card.label.substring(0, 3)}
              </div>

              {/* Central Information Cluster */}
              <div className="space-y-4 md:space-y-5 relative z-10">
                {/* Structural bounding icon matrix frame */}
                <div className="w-10 h-10 md:w-11 md:h-11 bg-[#f97316] rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/10 transform group-hover:scale-105 transition-transform duration-300">
                  {card.icon}
                </div>
                
                <div className="space-y-1.5">
                  <span className="text-[9px] font-black tracking-widest text-orange-400 block opacity-80">
                    SYSTEM_NODE // {card.label}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white group-hover:text-orange-400 transition-colors duration-200">
                    {card.title}
                  </h3>
                </div>
                
                <p className="text-xs font-medium text-blue-200/70 leading-relaxed max-w-[260px]">
                  {card.desc}
                </p>
              </div>

              {/* Access pathway router anchor handle node */}
              <div className="mt-6 md:mt-8 pt-4 border-t border-white/5 flex justify-end relative z-10">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#1e3a8a]/40 border border-white/5 group-hover:border-[#f97316] flex items-center justify-center text-blue-300 group-hover:text-white transition-all duration-300 group-hover:bg-[#f97316] shadow-sm">
                  <ChevronRight size={15} className="transform group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5. METRIC INFRASTRUCTURE COMPILING FOOTER BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10 text-[9px] sm:text-[10px] font-black tracking-[0.2em] text-blue-200/40 uppercase">
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-6 gap-y-2 text-center sm:text-left">
            <span className="border-l-4 border-[#f97316] pl-2.5 text-white/90">2028 Graduation Target</span>
            <span className="text-blue-300/30">v4.0.2 System Build</span>
          </div>
          <div className="bg-orange-500/10 text-[#f97316] border border-[#f97316]/20 px-4 py-1.5 rounded-md text-[8px] sm:text-[9px] font-black tracking-[0.2em] shadow-inner text-center">
            Authorized Personnel Only
          </div>
        </div>

      </section>
    </main>
  );
}