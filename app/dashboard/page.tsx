"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Briefcase, 
  Terminal, 
  BookOpen, 
  Info, 
  Mail, 
  HelpCircle, 
  ArrowRight, 
  LogOut,
  ChevronRight
} from 'lucide-react';

export default function Dashboard() {
  const modules = [
    { 
      title: "Career Paths", 
      icon: Briefcase, 
      href: "/career-paths", 
      tag: "PATHWAYS", 
      desc: "Explore specialized engineering tracks for CpE students." 
    },
    { 
      title: "Skills", 
      icon: Terminal, 
      href: "/skills", 
      tag: "METRICS", 
      desc: "Track proficiency in Arduino, SQL, and Next.js." 
    },
    { 
      title: "Job Prep", 
      icon: BookOpen, 
      href: "/job-prep", 
      tag: "CAREER", 
      desc: "Engineering resume builder and interview preparation." 
    },
    { 
      title: "About", 
      icon: Info, 
      href: "/about", 
      tag: "PORTAL", 
      desc: "Mission, vision, and the tech behind this platform." 
    },
    { 
      title: "Contact", 
      icon: Mail, 
      href: "/contact", 
      tag: "SUPPORT", 
      desc: "Get in touch with the development team for inquiries." 
    },
    { 
      title: "FAQs", 
      icon: HelpCircle, 
      href: "/faqs", 
      tag: "HELP", 
      desc: "Find answers to common questions about the portal." 
    }
  ];

  return (
    <main className="min-h-screen bg-[#1e3a8a] text-white font-sans flex overflow-hidden">
      
      {/* NARROW LEFT BANNER */}
      <aside className="w-[100px] md:w-[120px] bg-[#f97316] flex flex-col items-center py-12 border-r-[10px] border-[#162e70] shrink-0">
        <div className="rotate-[-90deg] origin-center whitespace-nowrap mt-32">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1e3a8a]">
            CONTROL <span className="text-white">PANEL</span>
          </h1>
        </div>
        <Link 
          href="/" 
          className="mt-auto mb-10 p-4 bg-[#162e70] rounded-2xl text-[#f97316] hover:bg-white hover:text-[#1e3a8a] transition-all border-2 border-transparent hover:border-[#f97316]"
        >
          <LogOut size={24} />
        </Link>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-grow flex flex-col h-screen overflow-y-auto">
        
        {/* Dashboard Header */}
        <header className="p-10 border-b-[10px] border-[#f97316] bg-[#162e70] flex justify-between items-center sticky top-0 z-10 shadow-2xl">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter italic">Command Center</h2>
            <p className="text-[#f97316] text-[10px] font-black uppercase tracking-[0.3em] mt-2">
              Engineering Resource Gateway // PLSP-CPE
            </p>
          </div>
          <div className="hidden sm:flex gap-4">
             <div className="bg-[#1e3a8a] px-6 py-3 border-4 border-[#f97316] rounded-2xl flex flex-col items-center shadow-lg">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#f97316]">Active Year</span>
                <span className="text-xl font-black">2026</span>
             </div>
          </div>
        </header>

        {/* 6-Option Grid */}
        <section className="p-8 md:p-12 lg:p-16 max-w-[1600px] w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {modules.map((m, i) => (
              <Link 
                key={i} 
                href={m.href} 
                className="bg-[#162e70] p-10 rounded-[3rem] border-[6px] border-white/5 hover:border-[#f97316] transition-all group shadow-2xl hover:-translate-y-2 flex flex-col justify-between min-h-[320px] relative overflow-hidden"
              >
                {/* Decorative Icon Background */}
                <m.icon className="absolute -bottom-6 -right-6 text-white/5 group-hover:text-[#f97316]/10 transition-colors" size={180} />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="bg-[#f97316] p-4 rounded-2xl shadow-lg border-4 border-[#1e3a8a] group-hover:scale-110 transition-transform">
                      <m.icon size={28} className="text-[#1e3a8a]" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest border-2 border-white/10 px-3 py-1 rounded-lg text-blue-300">
                      {m.tag}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black uppercase mb-4 tracking-tight group-hover:text-[#f97316] transition-colors leading-none">
                    {m.title}
                  </h3>
                  <p className="text-xs font-bold text-blue-100/60 leading-relaxed italic pr-4">
                    {m.desc}
                  </p>
                </div>
                
                <div className="mt-8 flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f97316] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                    Enter Module
                  </span>
                  <div className="bg-[#1e3a8a] p-3 rounded-xl border-2 border-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-colors">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer Statistics Bar */}
        <footer className="mt-auto p-10 border-t-[6px] border-white/5 bg-[#162e70]/40 flex flex-wrap justify-between items-center gap-6">
          <div className="flex gap-8">
            <div className="border-l-4 border-[#f97316] pl-4">
              <p className="text-xl font-black leading-none">2028</p>
              <p className="text-[9px] font-black uppercase tracking-widest text-blue-300 mt-1">Graduation Target</p>
            </div>
            <div className="border-l-4 border-white/20 pl-4">
              <p className="text-xl font-black leading-none text-white/40">v4.0.2</p>
              <p className="text-[9px] font-black uppercase tracking-widest text-white/20 mt-1">System Build</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#f97316] px-4 py-2 rounded-lg text-[#1e3a8a] font-black text-[10px] uppercase tracking-widest shadow-lg">
              Authorized Personnel Only
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}