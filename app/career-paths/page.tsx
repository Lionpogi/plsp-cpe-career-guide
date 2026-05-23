"use client";

import React, { useState } from 'react';
import { 
  Cpu, 
  Database, 
  Settings, 
  ArrowLeft, 
  ChevronRight, 
  Microchip, 
  Layers, 
  Terminal,
  Server,
  ShieldCheck,
  Code2,
  Radio,
  Zap
} from 'lucide-react';

export default function CareerPaths() {
  const [filter, setFilter] = useState('ALL');

  const jobs = [
    // --- HARDWARE TRACKS ---
    {
      role: "EMBEDDED SYSTEMS ENGINEER",
      type: "HARDWARE",
      desc: "Designing hardware-software integration for projects like your RFID Parking Thesis.",
      skills: "C++, Arduino, RTOS, PCB Design",
      salary: "₱45,000 - ₱75,000",
      icon: Microchip
    },
    {
      role: "AUTOMATION & CONTROL SPECIALIST",
      type: "HARDWARE",
      desc: "Streamlining manufacturing with sensors, building on your Kinpo Electronics internship.",
      skills: "PLC, SCADA, Robotics, Sensors",
      salary: "₱48,000 - ₱82,000",
      icon: Settings
    },
    {
      role: "HARDWARE DESIGN ENGINEER",
      type: "HARDWARE",
      desc: "Creating circuit layouts and power systems like your 12V DC Supply project.",
      skills: "LTspice, Altium, FPGA, Circuit Theory",
      salary: "₱50,000 - ₱85,000",
      icon: Zap
    },
    {
      role: "NETWORK INFRASTRUCTURE ENGINEER",
      type: "HARDWARE",
      desc: "Physical design and maintenance of large-scale server hardware and telecommunications.",
      skills: "Cisco CCNA, Fiber Optics, Routing, Switching",
      salary: "₱42,000 - ₱70,000",
      icon: Radio
    },
    {
      role: "IOT SOLUTIONS ARCHITECT",
      type: "HARDWARE",
      desc: "Developing end-to-end connected ecosystems using sensors and wireless communication.",
      skills: "ESP32, MQTT, LoRaWAN, Cloud Integration",
      salary: "₱55,000 - ₱95,000",
      icon: Cpu
    },
    // --- SOFTWARE TRACKS ---
    {
      role: "DATABASE ADMINISTRATOR (DBA)",
      type: "SOFTWARE",
      desc: "Managing complex relational databases with a focus on ERD/UML design.",
      skills: "PostgreSQL, SQL, pgAdmin4, Data Modeling",
      salary: "₱50,000 - ₱90,000",
      icon: Database
    },
    {
      role: "BACKEND WEB DEVELOPER",
      type: "SOFTWARE",
      desc: "Building scalable server-side logic and APIs using frameworks like Next.js.",
      skills: "Next.js, TypeScript, REST APIs, Prisma",
      salary: "₱52,000 - ₱98,000",
      icon: Code2
    },
    {
      role: "CYBERSECURITY ANALYST",
      type: "SOFTWARE",
      desc: "Protecting information systems through penetration testing and secure development.",
      skills: "Ethical Hacking, Linux, Cryptography",
      salary: "₱58,000 - ₱110,000",
      icon: ShieldCheck
    },
    {
      role: "SYSTEMS SOFTWARE DEVELOPER",
      type: "SOFTWARE",
      desc: "Writing low-level code for operating systems and high-performance engineering tools.",
      skills: "C, Rust, Kernel Dev, Multi-threading",
      salary: "₱60,000 - ₱105,000",
      icon: Terminal
    },
    {
      role: "CLOUD SOLUTIONS ENGINEER",
      type: "SOFTWARE",
      desc: "Architecting and managing virtualized infrastructure in cloud environments.",
      skills: "AWS, Docker, Kubernetes, DevOps",
      salary: "₱65,000 - ₱120,000",
      icon: Server
    }
  ];

  const filteredJobs = filter === 'ALL' ? jobs : jobs.filter(j => j.type === filter);

  return (
    <main className="min-h-screen bg-[#1e3a8a] font-sans selection:bg-[#f97316] flex flex-col">
      {/* Header - Standard Professional Scale */}
      <header className="bg-[#162e70] text-white py-8 px-10 border-b-8 border-[#f97316] flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-[#f97316] p-2.5 rounded-xl">
            <Layers className="text-[#1e3a8a]" size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tighter leading-none">
              CAREER <span className="text-[#f97316]">PATHS</span>
            </h1>
            <p className="text-blue-200 font-bold text-[10px] tracking-[0.2em] mt-1 uppercase">
              10 Specialized Tracks for PLSP Engineers
            </p>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="bg-[#1e3a8a] p-1 rounded-xl flex gap-1 border-2 border-white/5">
          {['ALL', 'SOFTWARE', 'HARDWARE'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-8 py-2 rounded-lg font-black text-[10px] transition-all duration-300 ${
                filter === tab 
                ? 'bg-[#f97316] text-white' 
                : 'text-white/40 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* Main Table - Optimized Sizing */}
      <section className="p-8 flex-grow">
        <div className="max-w-[1400px] mx-auto bg-[#162e70] rounded-[2.5rem] shadow-2xl overflow-hidden border-2 border-white/5">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1e3a8a]/50 text-[#f97316] border-b-2 border-white/5">
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em]">Specialization</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] hidden xl:table-cell">Primary Stack</th>
                <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-center">Opportunity</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-white/5">
              {filteredJobs.map((job, index) => (
                <tr key={index} className="group hover:bg-white/[0.02] transition-colors">
                  {/* Role Column */}
                  <td className="p-6">
                    <div className="flex items-center gap-5">
                      <div className="bg-[#1e3a8a] p-3 rounded-xl border border-white/5 group-hover:border-[#f97316]/50 transition-colors">
                        <job.icon className="text-[#f97316]" size={24} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h2 className="text-lg font-black text-white uppercase tracking-tight">
                            {job.role}
                          </h2>
                          <span className="text-[#f97316] text-[9px] font-black uppercase tracking-widest border border-[#f97316]/30 px-2 rounded">
                            {job.type}
                          </span>
                        </div>
                        <p className="text-blue-100/50 font-bold text-xs italic leading-tight">
                          {job.desc}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Skills Column */}
                  <td className="p-6 hidden xl:table-cell">
                    <div className="flex flex-wrap gap-2">
                      {job.skills.split(', ').map((skill, si) => (
                        <span key={si} className="bg-white/5 px-2 py-1 rounded text-[10px] font-bold text-blue-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Salary Column */}
                  <td className="p-6 text-center">
                    <button className="bg-white text-[#1e3a8a] hover:bg-[#f97316] hover:text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg active:scale-95 group/btn">
                      <div className="text-[9px] font-black uppercase tracking-widest opacity-60 group-hover/btn:opacity-100">Market Rate</div>
                      <span className="text-base font-black tracking-tighter">
                        {job.salary}
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer Nav */}
      <footer className="p-8 border-t-2 border-white/5 flex justify-between items-center">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-3 text-white/40 font-black uppercase tracking-widest text-[10px] hover:text-[#f97316] transition-all"
        >
          <ArrowLeft size={16} /> [ Back to Portal ]
        </button>
        <p className="text-white/10 text-[9px] font-black uppercase tracking-widest">
          Class of 2028 Academic Resource
        </p>
      </footer>
    </main>
  );
}