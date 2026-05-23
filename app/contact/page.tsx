"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Mail, 
  MapPin, 
  Send, 
  ArrowLeft,
  MessageSquare,
  Globe,
  ExternalLink,
  Link as LinkIcon 
} from 'lucide-react';

export default function ContactPage() {
  const router = useRouter();

  const contactMethods = [
    { 
      label: "Institutional Email", 
      value: "april.mission@plsp.edu.ph", 
      link: "mailto:april.mission@plsp.edu.ph",
      icon: Mail 
    },
    { 
      label: "LinkedIn Connection", 
      value: "linkedin.com/in/april-mission", 
      link: "https://linkedin.com/in/april-mission",
      // Swapped LinkedIn icon for LinkIcon to avoid the specific Lucide-Linkedin issue
      icon: LinkIcon 
    },
    { 
      label: "Professional Location", 
      value: "San Pablo City, Laguna", 
      link: "https://www.google.com/maps/place/San+Pablo+City,+Laguna",
      icon: MapPin 
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Data transmitted to PLSP-CPE secure servers.");
  };

  return (
    <main className="min-h-screen bg-[#1e3a8a] text-white font-sans flex overflow-hidden">
      
      {/* NARROW LEFT SIDEBAR */}
      <aside className="w-[100px] md:w-[120px] bg-[#f97316] flex flex-col items-center py-12 border-r-[10px] border-[#162e70] shrink-0 z-20">
        <div className="rotate-[-90deg] origin-center whitespace-nowrap mt-32">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1e3a8a]">
            SUPPORT <span className="text-white">LINK</span>
          </h1>
        </div>
        <button 
          onClick={() => router.push('/dashboard')}
          className="mt-auto mb-10 p-4 bg-[#162e70] rounded-2xl text-[#f97316] hover:bg-white transition-all border-4 border-transparent hover:border-[#f97316] shadow-xl"
        >
          <ArrowLeft size={24} />
        </button>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-grow flex flex-col h-screen overflow-y-auto relative z-10">
        
        {/* Header */}
        <header className="p-10 border-b-[10px] border-[#f97316] bg-[#162e70] flex justify-between items-center sticky top-0 z-30 shadow-2xl">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter italic leading-none">Communication Hub</h2>
            <p className="text-[#f97316] text-[10px] font-black uppercase tracking-[0.3em] mt-2">
              Direct Access // April C. Mission[cite: 1]
            </p>
          </div>
          <div className="hidden lg:block bg-[#1e3a8a] px-6 py-2 border-4 border-[#f97316] rounded-xl text-[10px] font-black uppercase tracking-widest">
            PLSP-CPE SECURE
          </div>
        </header>

        <section className="p-8 md:p-16 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-black uppercase tracking-[0.2em] text-[#f97316]">Contact Data</h3>
              <p className="text-sm font-bold text-blue-200/60 italic leading-relaxed">
                Available for technical collaboration, engineering inquiries, and portal feedback[cite: 1, 2].
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, i) => (
                <a 
                  key={i} 
                  href={method.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block flex items-center gap-6 p-6 bg-[#162e70] rounded-3xl border-4 border-white/5 hover:border-[#f97316] transition-all group cursor-pointer shadow-lg"
                >
                  <div className="bg-[#f97316] p-3 rounded-xl border-2 border-[#1e3a8a] text-[#1e3a8a] group-hover:scale-110 transition-transform">
                    <method.icon size={20} />
                  </div>
                  <div className="flex-grow overflow-hidden">
                    <p className="text-[9px] font-black uppercase tracking-widest text-blue-300">{method.label}</p>
                    <p className="text-sm font-black truncate group-hover:text-[#f97316] transition-colors">{method.value}</p>
                  </div>
                  <ExternalLink size={14} className="text-white/20 group-hover:text-[#f97316]" />
                </a>
              ))}
            </div>

            {/* Status Badge */}
            <div className="bg-[#f97316] p-8 rounded-[2.5rem] border-b-[8px] border-[#162e70] shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-2 relative z-10">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1e3a8a]">System Status: Active</span>
              </div>
              <p className="text-[#1e3a8a] font-black text-sm uppercase relative z-10">Batch 2028 Resource[cite: 1]</p>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-3 bg-[#162e70] p-10 rounded-[3.5rem] border-[8px] border-white/5 shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <MessageSquare className="text-[#f97316]" size={28} />
              <h3 className="text-2xl font-black uppercase italic tracking-tight">Transmission Form</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-blue-200">Full Name</label>
                  <input required type="text" className="w-full bg-[#1e3a8a] border-4 border-white/10 rounded-2xl p-4 font-bold focus:border-[#f97316] outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-blue-200">Return Address</label>
                  <input required type="email" className="w-full bg-[#1e3a8a] border-4 border-white/10 rounded-2xl p-4 font-bold focus:border-[#f97316] outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-blue-200">Message Payload</label>
                <textarea required rows={4} className="w-full bg-[#1e3a8a] border-4 border-white/10 rounded-2xl p-4 font-bold focus:border-[#f97316] outline-none transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#f97316] text-[#1e3a8a] py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl">
                TRANSMIT DATA <Send size={20} />
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto p-10 bg-[#162e70]/40 flex justify-center border-t-[6px] border-white/5">
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
            San Pablo City // Alaminos // Laguna[cite: 1]
          </p>
        </footer>
      </div>
    </main>
  );
}