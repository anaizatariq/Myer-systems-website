"use client";

import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { useReveal } from '@/hooks/use-reveal';
import { CtaBanner } from '@/components/site/cta-banner';
import { 
  Activity, 
  Building2, 
  MapPin, 
  Globe,
  FileText,
  ShieldCheck,
  Stethoscope,
  Workflow,
  Cpu,
  Users
} from 'lucide-react';

export default function IndustriesPage() {
  useReveal();

  return (
    <div className="bg-[#F8FAFD] min-h-screen">
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════════
          1. HERO SECTION (Minimalist Typography with Premium Blue Highlights)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full pt-32 pb-16 lg:pt-44 lg:pb-20 bg-white overflow-hidden">
        
        {/* Soft Ambient Glows (Using Brand Colors) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E0F4FC] rounded-full blur-[120px] opacity-60 -translate-y-1/2 translate-x-1/4" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8FD6F5] rounded-full blur-[150px] opacity-30 translate-y-1/4 -translate-x-1/4" aria-hidden="true" />

        <div className="mx-auto w-full max-w-5xl px-6 lg:px-8 text-center reveal space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#29A8E0]/30 bg-[#F0FAFF] px-4 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
              MARKETS &amp; FOCUS
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] leading-[1.05] font-bold tracking-tight text-ink font-heading mx-auto">
            Built around <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A6FA8] to-[#29A8E0]">real workflows.</span>
          </h1>
          <p className="text-lg sm:text-[20px] leading-relaxed text-slate-600 font-sans max-w-2xl mx-auto">
            Our AI systems and automation solutions are engineered specifically for the compliance requirements, bottlenecks, and operational realities of your industry.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. HEALTHCARE (Centered Editorial + Immersive Image)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative bg-white border-t border-[#1A6FA8]/10">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          
          {/* Narrative (Centered & Beautifully Spaced) */}
          <div className="max-w-3xl mx-auto text-center reveal-up mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#1A6FA8] font-ui">INDUSTRY 01</span>
              <div className="w-10 h-10 rounded-xl bg-[#E0F4FC] border border-[#29A8E0]/20 flex items-center justify-center">
                <Activity className="w-5 h-5 text-[#29A8E0]" />
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-[3.25rem] leading-[1.1] font-bold text-ink font-heading tracking-tight mb-6">
              Healthcare &amp; Life Sciences
            </h2>
            <p className="text-[18px] text-slate-600 leading-[1.8] font-sans">
              Healthcare is where Myer Systems has its deepest operational footprint. Through our flagship platform MedSynthea and our RCM services, we help providers automate clinical and administrative workflows — from patient access to claims management to compliance reporting.
            </p>
          </div>

          {/* MASSIVE Cinematic Visual */}
          <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] lg:rounded-[2.5rem] bg-[#060D14] overflow-hidden reveal-up relative shadow-[0_20px_50px_rgba(26,111,168,0.15)] border border-[#29A8E0]/30 mb-16 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1A6FA8]/40 to-transparent mix-blend-overlay" />
            <div className="absolute inset-0 bg-[url('/grid-dark.svg')] opacity-20" />
            
            {/* Glowing Tech Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8FD6F5] rounded-full blur-[100px] opacity-20 pointer-events-none" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-[#8FD6F5]/30 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(143,214,245,0.3)]">
                <Activity className="w-8 h-8 text-[#8FD6F5]" />
              </div>
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest font-ui">Healthcare Tech Environment</span>
              <span className="text-white text-lg font-heading font-semibold mt-1">Cinematic Image Placeholder</span>
            </div>
          </div>

          {/* Feature Cards (Perfectly spaced 3-col grid using Brand Colors) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 reveal-up">
            
            <div className="bg-[#F8FAFD] border border-[#29A8E0]/20 p-8 lg:p-10 rounded-3xl hover:bg-white hover:shadow-[0_15px_40px_rgba(41,168,224,0.1)] transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#1A6FA8]/10 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-[#29A8E0]" />
              </div>
              <h3 className="text-xl font-bold text-ink font-heading mb-3">Revenue Cycle &amp; Billing</h3>
              <p className="text-[15px] text-slate-600 font-sans leading-relaxed">End-to-end automation of medical billing, reducing errors and speeding up reimbursements.</p>
            </div>

            <div className="bg-[#F8FAFD] border border-[#29A8E0]/20 p-8 lg:p-10 rounded-3xl hover:bg-white hover:shadow-[0_15px_40px_rgba(41,168,224,0.1)] transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#1A6FA8]/10 flex items-center justify-center mb-6">
                <Stethoscope className="w-6 h-6 text-[#29A8E0]" />
              </div>
              <h3 className="text-xl font-bold text-ink font-heading mb-3">Patient Access</h3>
              <p className="text-[15px] text-slate-600 font-sans leading-relaxed">Automated eligibility verification, prior authorizations, and seamless patient onboarding.</p>
            </div>

            <div className="bg-[#F8FAFD] border border-[#29A8E0]/20 p-8 lg:p-10 rounded-3xl hover:bg-white hover:shadow-[0_15px_40px_rgba(41,168,224,0.1)] transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[#1A6FA8]/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-[#29A8E0]" />
              </div>
              <h3 className="text-xl font-bold text-ink font-heading mb-3">Compliance &amp; Reporting</h3>
              <p className="text-[15px] text-slate-600 font-sans leading-relaxed">Continuous audit readiness, clinical documentation synthesis, and regulatory compliance.</p>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. COMMERCIAL (Centered Editorial + Immersive Image)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 relative bg-[#F8FAFD] border-t border-[#1A6FA8]/10 overflow-hidden">
        
        {/* Subtle Ambient Background */}
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#E0F4FC] rounded-full blur-[100px] opacity-40 pointer-events-none" />
        
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
          
          {/* Narrative (Centered & Beautifully Spaced) */}
          <div className="max-w-3xl mx-auto text-center reveal-up mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#1A6FA8] font-ui">INDUSTRY 02</span>
              <div className="w-10 h-10 rounded-xl bg-white border border-[#29A8E0]/20 flex items-center justify-center shadow-sm">
                <Building2 className="w-5 h-5 text-[#29A8E0]" />
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-[3.25rem] leading-[1.1] font-bold text-ink font-heading tracking-tight mb-6">
              Commercial &amp; Enterprise
            </h2>
            <p className="text-[18px] text-slate-600 leading-[1.8] font-sans">
              Beyond healthcare, we work with commercial organisations weighed down by manual processes — businesses needing to scale operations without proportionally scaling headcount. Our enterprise AI solutions help automate workflows, process documents intelligently, and build data-driven operations.
            </p>
          </div>

          {/* MASSIVE Cinematic Visual */}
          <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] lg:rounded-[2.5rem] bg-[#060D14] overflow-hidden reveal-up relative shadow-[0_20px_50px_rgba(26,111,168,0.15)] border border-[#29A8E0]/30 mb-16 group">
            <div className="absolute inset-0 bg-gradient-to-bl from-[#1A6FA8]/40 to-transparent mix-blend-overlay" />
            <div className="absolute inset-0 bg-[url('/grid-dark.svg')] opacity-20" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8FD6F5] rounded-full blur-[100px] opacity-20 pointer-events-none" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-[#8FD6F5]/30 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(143,214,245,0.3)]">
                <Building2 className="w-8 h-8 text-[#8FD6F5]" />
              </div>
              <span className="text-white/70 text-xs font-bold uppercase tracking-widest font-ui">Enterprise Automation Environment</span>
              <span className="text-white text-lg font-heading font-semibold mt-1">Cinematic Image Placeholder</span>
            </div>
          </div>

          {/* Feature Cards (Perfectly spaced 2x2 grid using Brand Colors) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 reveal-up max-w-5xl mx-auto">
            
            <div className="bg-white border border-[#29A8E0]/20 p-8 lg:p-10 rounded-3xl hover:shadow-[0_15px_40px_rgba(41,168,224,0.1)] transition-all duration-300">
              <div className="w-12 h-12 bg-[#F0FAFF] rounded-xl border border-[#1A6FA8]/10 flex items-center justify-center mb-6">
                <Workflow className="w-6 h-6 text-[#29A8E0]" />
              </div>
              <h3 className="text-xl font-bold text-ink font-heading mb-3">Workflow Automation</h3>
              <p className="text-[15px] text-slate-600 font-sans leading-relaxed">Streamlining operations, finance, and complex back-office workflows autonomously.</p>
            </div>

            <div className="bg-white border border-[#29A8E0]/20 p-8 lg:p-10 rounded-3xl hover:shadow-[0_15px_40px_rgba(41,168,224,0.1)] transition-all duration-300">
              <div className="w-12 h-12 bg-[#F0FAFF] rounded-xl border border-[#1A6FA8]/10 flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-[#29A8E0]" />
              </div>
              <h3 className="text-xl font-bold text-ink font-heading mb-3">Document Processing</h3>
              <p className="text-[15px] text-slate-600 font-sans leading-relaxed">Intelligent data extraction and processing for unstructured documents using NLP.</p>
            </div>

            <div className="bg-white border border-[#29A8E0]/20 p-8 lg:p-10 rounded-3xl hover:shadow-[0_15px_40px_rgba(41,168,224,0.1)] transition-all duration-300">
              <div className="w-12 h-12 bg-[#F0FAFF] rounded-xl border border-[#1A6FA8]/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#29A8E0]" />
              </div>
              <h3 className="text-xl font-bold text-ink font-heading mb-3">Resource Augmentation</h3>
              <p className="text-[15px] text-slate-600 font-sans leading-relaxed">Hybrid teams blending AI agents with expert human operators for perfect scale.</p>
            </div>

            <div className="bg-white border border-[#29A8E0]/20 p-8 lg:p-10 rounded-3xl hover:shadow-[0_15px_40px_rgba(41,168,224,0.1)] transition-all duration-300">
              <div className="w-12 h-12 bg-[#F0FAFF] rounded-xl border border-[#1A6FA8]/10 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-[#29A8E0]" />
              </div>
              <h3 className="text-xl font-bold text-ink font-heading mb-3">Custom SaaS &amp; AI</h3>
              <p className="text-[15px] text-slate-600 font-sans leading-relaxed">Bespoke product development and enterprise-grade software engineering.</p>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. WHO WE WORK WITH (Clean Architectural Look)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-white relative border-t border-[#1A6FA8]/10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center reveal-up">
          
          <div className="inline-flex items-center gap-2 rounded-full border border-[#29A8E0]/30 bg-[#F0FAFF] px-4 py-1.5 mb-6 shadow-sm">
            <Globe className="w-3.5 h-3.5 text-[#29A8E0]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
              GLOBAL REACH
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-ink font-heading tracking-tight mb-8">
            Who We Work With
          </h2>
          
          <p className="text-[17px] sm:text-[19px] text-slate-600 font-sans leading-[1.8] mb-16 max-w-3xl mx-auto">
            Our clients include healthcare providers, commercial organisations, and enterprises across North America and international markets. We operate a distributed offshore-onshore model, enabling us to deliver high-quality AI and automation services at competitive value.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-10 max-w-4xl mx-auto">
            
            <div className="w-full sm:w-1/2 bg-white border border-[#29A8E0]/20 rounded-[2rem] p-10 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-[0_20px_50px_rgba(41,168,224,0.12)] hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#F0FAFF] rounded-2xl border border-[#1A6FA8]/10 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6 text-[#29A8E0]" />
              </div>
              <div className="text-xs font-bold text-[#1A6FA8] tracking-widest uppercase font-ui mb-2">Headquarters</div>
              <div className="text-[22px] font-bold text-ink font-heading">Dallas, Texas</div>
            </div>

            <div className="w-full sm:w-1/2 bg-white border border-[#29A8E0]/20 rounded-[2rem] p-10 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-[0_20px_50px_rgba(41,168,224,0.12)] hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#F0FAFF] rounded-2xl border border-[#1A6FA8]/10 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6 text-[#29A8E0]" />
              </div>
              <div className="text-xs font-bold text-[#1A6FA8] tracking-widest uppercase font-ui mb-2">Delivery Hub</div>
              <div className="text-[22px] font-bold text-ink font-heading">Lahore, Pakistan</div>
            </div>

          </div>

        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}
