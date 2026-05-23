"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function HeroAuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <main className="min-h-screen bg-[#1e3a8a] text-white font-sans flex overflow-hidden">
      
      {/* NARROW LEFT SIDEBAR */}
      <aside className="w-[80px] md:w-[120px] bg-[#f97316] flex flex-col items-center py-12 border-r-[10px] border-[#162e70] shrink-0 z-20">
        <div className="rotate-[-90deg] origin-center whitespace-nowrap mt-32">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1e3a8a]">
            PLSP <span className="text-white">CPE</span>
          </h1>
        </div>
        <div className="mt-auto mb-10 text-[#1e3a8a]">
          <ShieldCheck size={32} />
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-grow flex flex-col items-center justify-center relative p-6 md:p-12 overflow-y-auto">
        
        {/* Top Accent Bar */}
        <div className="absolute top-0 left-0 w-full h-[40px] bg-[#f97316] flex items-center justify-center z-10">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1e3a8a]">
            #1 PLSP Engineering Career Resource
          </span>
        </div>

        {/* Hero Section Content */}
        <div className="max-w-4xl w-full text-center space-y-8 mt-16 mb-12">
          <div className="space-y-2">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">
              WORK SMART.
            </h2>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic text-[#f97316]">
              ENGINEER BETTER.
            </h2>
          </div>

          <p className="max-w-2xl mx-auto text-blue-100/80 font-bold text-sm md:text-base leading-relaxed">
            The comprehensive career portal designed for <span className="text-white">PLSP Computer Engineering</span> students. Master your tech stack, track your academic progress, and conquer your career goals.
          </p>

          {/* AUTH CARD INTEGRATION */}
          <div className="max-w-md mx-auto bg-[#162e70] p-8 md:p-10 rounded-[3rem] border-[6px] border-[#f97316] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <h3 className="text-2xl font-black uppercase italic tracking-tight mb-6">
              {isLogin ? 'Initialize Session' : 'Register Profile'}
            </h3>
            
            <form onSubmit={handleAuth} className="space-y-4 text-left">
              <input 
                type="text" 
                placeholder="STUDENT ID (2024-XXXXX-SP)"
                className="w-full bg-[#1e3a8a] border-4 border-white/10 rounded-2xl p-4 font-bold focus:border-[#f97316] outline-none transition-all placeholder:text-white/20 text-sm"
              />
              <input 
                type="password" 
                placeholder="SECURITY KEY"
                className="w-full bg-[#1e3a8a] border-4 border-white/10 rounded-2xl p-4 font-bold focus:border-[#f97316] outline-none transition-all placeholder:text-white/20 text-sm"
              />
              <button 
                type="submit"
                className="w-full bg-[#f97316] text-[#1e3a8a] py-4 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
              >
                BEGIN EXPLORING <ArrowRight size={20} />
              </button>
            </form>

            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="mt-6 text-[10px] font-black uppercase tracking-widest text-blue-300 hover:text-[#f97316] transition-colors"
            >
              {isLogin ? "✓ EXCLUSIVE FOR PLSP CPE STUDENTS" : "ALREADY HAVE AN ACCOUNT? LOGIN"}
            </button>
          </div>
        </div>

        {/* BOTTOM STATS BOX (From your image) */}
        <div className="w-full max-w-3xl bg-[#f97316] rounded-[2.5rem] p-8 flex flex-wrap justify-around items-center gap-6 shadow-2xl border-b-[8px] border-[#162e70]">
          <div className="text-center">
            <p className="text-4xl font-black text-[#1e3a8a]">2028</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-white mt-1">Target Graduation</p>
          </div>
          <div className="h-12 w-[4px] bg-[#1e3a8a]/20 hidden md:block" />
          <div className="text-center">
            <p className="text-4xl font-black text-[#1e3a8a]">100%</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-white mt-1">CpE Focused</p>
          </div>
          <div className="h-12 w-[4px] bg-[#1e3a8a]/20 hidden md:block" />
          <div className="text-center">
            <p className="text-4xl font-black text-[#1e3a8a]">SQL+</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-white mt-1">Database Ready</p>
          </div>
        </div>

        {/* Quote Footer */}
        <div className="w-full mt-12 py-6 border-t-[4px] border-white/10 text-center">
          <p className="italic font-bold text-blue-200/60 text-sm">
            "Ang Pag-asa ng Bayan ay nasa Galing ng Inhinyero."
          </p>
        </div>
      </div>
    </main>
  );
}