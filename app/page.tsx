"use client";

import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

export default function HeroAuthPage() {
  const [studentId, setStudentId] = useState('');
  const [securityKey, setSecurityKey] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Validates the precise XX-XXXXX layout constraint
  const validateStudentId = (id: string) => {
    const plspRegex = /^\d{2}-\d{5}$/;
    return plspRegex.test(id.trim());
  };

  // Automatically applies the dash as the student types digits
  const handleIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value.replace(/\D/g, ''); // Extract digits only
    
    let formattedValue = rawInput;
    if (rawInput.length > 2) {
      formattedValue = `${rawInput.slice(0, 2)}-${rawInput.slice(2, 7)}`;
    }
    
    setStudentId(formattedValue);
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanId = studentId.trim();
    const cleanKey = securityKey.trim();

    // 1. Structural Layout Form Input Validations
    if (!cleanId || !cleanKey) {
      setError("Transmission failed: All authorization vectors required.");
      return;
    }

    if (!validateStudentId(cleanId)) {
      setError("Invalid Protocol: Student ID must conform to 'XX-XXXXX' format (e.g., 23-15157).");
      return;
    }

    if (cleanKey.length < 6) {
      setError("Access Denied: Security keys must meet minimum 6-character length.");
      return;
    }

    // 2. LIVE FETCH PAYLOAD: Send login parameters straight to PostgreSQL API Node
    setLoading(true);
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'login',
          studentId: cleanId,
          securityKey: cleanKey
        })
      });

      const data = await response.json();

      if (!response.ok) {
        // Render exact targeted validation errors passed back from SQL database checks
        setError(data.error || "An unknown network vector error occurred.");
        setLoading(false);
        return;
      }

      // Native browser window routing redirection bypasses next/navigation compile rules
      window.location.href = '/dashboard';

    } catch (err) {
      setError("Transmission Failure: Could not establish connection node with the database API.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#1e3a8a] text-white font-sans flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
      
      {/* RESPONSIVE BRANDING BAR */}
      <aside className="w-full md:w-[120px] bg-[#f97316] flex flex-row md:flex-col items-center justify-between md:justify-start py-4 md:py-12 px-6 md:px-0 border-b-4 md:border-b-0 md:border-r-[10px] border-[#162e70] shrink-0 z-20">
        <div className="md:rotate-[-90deg] md:origin-center md:whitespace-nowrap md:mt-32">
          <h1 className="text-xl sm:text-2xl md:text-5xl font-black uppercase tracking-tighter text-[#1e3a8a]">
            PLSP <span className="text-white">CPE</span>
          </h1>
        </div>
        <div className="md:mt-auto text-[#1e3a8a]">
          <ShieldCheck size={28} className="md:w-8 md:h-8" />
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-grow flex flex-col items-center justify-center relative p-4 sm:p-6 md:p-12 pt-16 md:pt-12 overflow-y-auto">
        
        {/* Top Accent Bar */}
        <div className="absolute top-0 left-0 w-full h-[40px] bg-[#f97316] flex items-center justify-center z-10">
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#1e3a8a] px-4 text-center truncate">
            #1 PLSP Engineering Career Resource
          </span>
        </div>

        {/* Hero Section Content */}
        <div className="max-w-4xl w-full text-center space-y-6 md:space-y-8 mt-8 md:mt-16 mb-8 md:mb-12">
          <div className="space-y-1 md:space-y-2">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">
              WORK SMART.
            </h2>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic text-[#f97316]">
              ENGINEER BETTER.
            </h2>
          </div>

          <p className="max-w-xl md:max-w-2xl mx-auto text-blue-100/80 font-bold text-xs sm:text-sm md:text-base leading-relaxed px-2">
            The comprehensive career portal designed for <span className="text-white">PLSP Computer Engineering</span> students. Master your tech stack, track your academic progress, and conquer your career goals.
          </p>

          {/* AUTH CARD INTEGRATION */}
          <div className="max-w-sm sm:max-w-md mx-auto bg-[#162e70] p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[3rem] border-4 sm:border-[6px] border-[#f97316] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <h3 className="text-xl sm:text-2xl font-black uppercase italic tracking-tight mb-4 sm:mb-6">
              Initialize Session
            </h3>
            
            <form onSubmit={handleAuth} className="space-y-4 text-left">
              {/* Dynamic Error Feedback UI Node */}
              {error && (
                <div className="bg-red-500/20 border-2 border-red-500 rounded-xl p-4 flex items-start gap-3 text-red-200 text-xs font-bold leading-normal">
                  <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-400" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="text-[9px] font-black uppercase tracking-widest text-blue-300 block mb-1.5 ml-2">University Matrix ID</label>
                <input 
                  type="text" 
                  value={studentId}
                  onChange={handleIdInput}
                  maxLength={8}
                  disabled={loading}
                  placeholder="23-15157"
                  className="w-full bg-[#1e3a8a] border-2 sm:border-4 border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 font-bold focus:border-[#f97316] outline-none transition-all placeholder:text-white/20 text-xs sm:text-sm tracking-widest disabled:opacity-50"
                />
              </div>

              <div>
                <label className="text-[9px] font-black uppercase tracking-widest text-blue-300 block mb-1.5 ml-2">Security Credential Token</label>
                <input 
                  type="password" 
                  value={securityKey}
                  onChange={(e) => setSecurityKey(e.target.value)}
                  disabled={loading}
                  placeholder="••••••••"
                  className="w-full bg-[#1e3a8a] border-2 sm:border-4 border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 font-bold focus:border-[#f97316] outline-none transition-all placeholder:text-white/20 text-xs sm:text-sm disabled:opacity-50"
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#f97316] text-[#1e3a8a] py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 sm:gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl mt-2 text-xs sm:text-sm disabled:opacity-50"
              >
                {loading ? 'PROCESSING VECTOR...' : 'BEGIN EXPLORING'} <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM STATS BOX */}
        <div className="w-full max-w-3xl bg-[#f97316] rounded-[1.5rem] sm:rounded-[2.5rem] p-4 sm:p-8 flex flex-row flex-wrap justify-around items-center gap-4 sm:gap-6 shadow-2xl border-b-[6px] sm:border-b-[8px] border-[#162e70]">
          <div className="text-center min-w-[80px]">
            <p className="text-2xl sm:text-4xl font-black text-[#1e3a8a]">2028</p>
            <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-white mt-0.5">Target Graduation</p>
          </div>
          <div className="h-12 w-[2px] bg-[#1e3a8a]/20 hidden sm:block" />
          <div className="text-center min-w-[80px]">
            <p className="text-2xl sm:text-4xl font-black text-[#1e3a8a]">100%</p>
            <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-white mt-0.5">CpE Focused</p>
          </div>
          <div className="h-12 w-[2px] bg-[#1e3a8a]/20 hidden sm:block" />
          <div className="text-center min-w-[80px]">
            <p className="text-2xl sm:text-4xl font-black text-[#1e3a8a]">SQL+</p>
            <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-white mt-0.5">Database Ready</p>
          </div>
        </div>

        {/* Quote Footer */}
        <div className="w-full mt-8 md:mt-12 py-4 sm:py-6 border-t-2 sm:border-t-[4px] border-white/10 text-center">
          <p className="italic font-bold text-blue-200/60 text-xs sm:text-sm px-4">
            "Ang Pag-asa ng Bayan ay nasa Galing ng Inhinyero."
          </p>
        </div>
      </div>
    </main>
  );
}