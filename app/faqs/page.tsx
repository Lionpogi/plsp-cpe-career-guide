"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft, 
  BookOpen, 
  ShieldCheck,
  Terminal
} from 'lucide-react';

export default function FAQPage() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the primary purpose of the PLSP-CPE Career Portal?",
      answer: "The portal serves as a centralized resource for Computer Engineering students to track academic progress, explore career specializations, and prepare for industry roles like Automation and Embedded Systems Engineering."
    },
    {
      question: "How do I access the Job Prep modules?",
      answer: "You can navigate to the 'Job Prep' section from the main Dashboard. It contains resources for building engineering-specific resumes and preparing for technical interviews[cite: 1]."
    },
    {
      question: "Is this portal accessible to students outside of Batch 2028?",
      answer: "While the current iteration focuses on the graduation target of 2028, the technical resources (SQL, Next.js, and Arduino guides) are applicable to all PLSP Computer Engineering students[cite: 1, 2]."
    },
    {
      question: "Who developed and maintains this platform?",
      answer: "The portal was developed by April C. Mission, drawing from academic training at PLSP and professional internship experience at Kinpo Electronics[cite: 1, 2]."
    },
    {
      question: "How can I report a bug or suggest a new feature?",
      answer: "Please use the 'Contact' page to send a 'System Feedback' transmission. Our technical team monitors these logs for continuous portal optimization."
    }
  ];

  return (
    <main className="min-h-screen bg-[#1e3a8a] text-white font-sans flex overflow-hidden">
      
      {/* NARROW LEFT SIDEBAR */}
      <aside className="w-[100px] md:w-[120px] bg-[#f97316] flex flex-col items-center py-12 border-r-[10px] border-[#162e70] shrink-0">
        <div className="rotate-[-90deg] origin-center whitespace-nowrap mt-32">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1e3a8a]">
            KNOWLEDGE <span className="text-white">BASE</span>
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
      <div className="flex-grow flex flex-col h-screen overflow-y-auto">
        
        {/* Header */}
        <header className="p-10 border-b-[10px] border-[#f97316] bg-[#162e70] flex justify-between items-center sticky top-0 z-10 shadow-2xl">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter italic leading-none">Frequently Asked</h2>
            <p className="text-[#f97316] text-[10px] font-black uppercase tracking-[0.3em] mt-2">
              Standard Operating Procedures // Inquiry Logs
            </p>
          </div>
          <div className="hidden sm:flex gap-4">
             <div className="bg-[#1e3a8a] px-6 py-2 border-4 border-[#f97316] rounded-xl flex items-center gap-3">
                <Terminal size={16} className="text-[#f97316]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">QUERY MODE: ACTIVE</span>
             </div>
          </div>
        </header>

        <section className="p-8 md:p-16 max-w-4xl mx-auto w-full">
          
          <div className="mb-12 flex items-center gap-6">
            <div className="bg-[#f97316] p-4 rounded-2xl shadow-lg border-4 border-[#1e3a8a]">
              <HelpCircle size={32} className="text-[#1e3a8a]" />
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tight">System Support FAQ</h3>
              <p className="text-sm font-bold text-blue-200/60 italic">Find answers to common technical and academic inquiries regarding the portal.</p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`transition-all duration-300 rounded-[2rem] border-[6px] ${
                  openIndex === i ? 'bg-[#162e70] border-[#f97316]' : 'bg-[#162e70]/40 border-white/5'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left group"
                >
                  <span className={`text-lg font-black uppercase tracking-tight transition-colors ${
                    openIndex === i ? 'text-[#f97316]' : 'text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-lg transition-all ${
                    openIndex === i ? 'bg-[#f97316] text-[#1e3a8a] rotate-180' : 'bg-white/5 text-white'
                  }`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                
                {openIndex === i && (
                  <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="h-[2px] w-full bg-white/10 mb-6" />
                    <p className="text-sm font-bold text-blue-100/70 leading-relaxed italic border-l-4 border-[#f97316] pl-6">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Support Card */}
          <div className="mt-16 bg-[#f97316] rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="flex items-center gap-6">
              <div className="bg-[#1e3a8a] p-4 rounded-2xl">
                <BookOpen size={28} className="text-white" />
              </div>
              <div className="text-[#1e3a8a]">
                <h4 className="text-xl font-black uppercase tracking-tighter">Still have questions?</h4>
                <p className="text-xs font-black uppercase opacity-70">Submit a support ticket via the contact terminal[cite: 2].</p>
              </div>
            </div>
            <button 
              onClick={() => router.push('/contact')}
              className="bg-[#1e3a8a] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              Contact Support
            </button>
          </div>

        </section>

        {/* Footer info bar */}
        <footer className="mt-auto p-10 bg-[#162e70]/40 flex justify-center border-t-[6px] border-white/5">
          <div className="flex gap-4 items-center opacity-20">
            <ShieldCheck size={16} className="text-white" />
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-white">
              Authorized Resource // PLSP-CPE // Class of 2028[cite: 1]
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}