"use client";

import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { useReveal } from '@/hooks/use-reveal';
import { CtaBanner } from '@/components/site/cta-banner';
import { 
  ArrowRight, 
  ArrowUpRight,
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  Workflow, 
  ExternalLink,
  Cpu,
  ChevronRight,
  Check
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  useReveal();

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* ══════════════════════════════════════════════════════════════════
          1. HERO SECTION (Restrained Enterprise Dual-Platform Stage)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-background border-b border-border/60">
        {/* Ambient Subtle Depth & Grid Matrix */}
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
        <div 
          className="pointer-events-none absolute -top-24 right-1/4 h-[550px] w-[550px] rounded-full bg-[#29A8E0]/10 blur-[130px]" 
          aria-hidden="true" 
        />
        <div 
          className="pointer-events-none absolute top-1/3 -right-20 h-[500px] w-[500px] rounded-full bg-[#1A6FA8]/8 blur-[140px]" 
          aria-hidden="true" 
        />
        <div 
          className="pointer-events-none absolute -bottom-24 left-10 h-[450px] w-[450px] rounded-full bg-[#29A8E0]/7 blur-[120px]" 
          aria-hidden="true" 
        />

        {/* Content Container */}
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
            
            {/* ════════ LEFT COLUMN: Editorial Headline & Subtext ════════ */}
            <div className="reveal lg:col-span-7 xl:col-span-7 space-y-6">
              
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-white/90 px-3.5 py-1.5 shadow-2xs backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                  CAPABILITIES &amp; SERVICES
                </span>
              </div>
              
              {/* 1. HERO H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.15rem] leading-[1.28] sm:leading-[1.26] lg:leading-[1.24] font-bold tracking-tight text-[#101820] font-heading max-w-2xl pt-1">
                Systems built to make complex operations{' '}
                <span className="inline-block pr-1 font-quote italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#1A6FA8] via-[#29A8E0] to-[#1A6FA8]">
                  more predictable
                </span>
              </h1>
              
              {/* 1. HERO SUBTEXT */}
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-sans max-w-xl">
                Myer Systems combines enterprise AI, healthcare technology, operational transformation, and specialised expertise to help organisations reduce friction, improve visibility, and scale with greater control.
              </p>
              
              {/* Strategic CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link 
                  href="/contact" 
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#29A8E0] px-7 py-3.5 text-sm font-bold text-[#101820] shadow-md shadow-[#29A8E0]/20 hover:bg-[#1A6FA8] hover:text-white transition-all duration-200 font-ui cursor-pointer"
                >
                  <span>Schedule Technical Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a 
                  href="#capabilities" 
                  className="group inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/25 bg-white/90 px-6 py-3.5 text-sm font-semibold text-[#101820] shadow-2xs backdrop-blur-md hover:bg-white hover:border-[#29A8E0] hover:text-[#1A6FA8] transition-all duration-200 font-ui"
                >
                  <span>Explore Capabilities</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1A6FA8] transition-colors" />
                </a>
              </div>

            </div>

            {/* ════════ RIGHT COLUMN: Restrained Dual-Hardware Visual Stage ════════ */}
            <div className="reveal-scale lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[450px] sm:max-w-[480px] lg:max-w-[490px] xl:max-w-[510px] mx-auto lg:mr-0 pt-3 pb-3">
                
                {/* Ambient Backlight Glow behind hardware */}
                <div 
                  className="pointer-events-none absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#29A8E0]/18 via-[#1A6FA8]/10 to-transparent rounded-full blur-3xl opacity-70" 
                  aria-hidden="true" 
                />

                {/* 2. HERO BADGES: Simple Capability Labels */}
                <div className="absolute -top-2 left-2 z-30 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md border border-[#1A6FA8]/20 px-3.5 py-1 shadow-md shadow-slate-900/6">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
                  <span className="text-[11px] font-medium text-[#101820] font-sans">Enterprise AI</span>
                </div>

                <div className="absolute top-1/2 -right-2 z-30 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md border border-[#1A6FA8]/20 px-3.5 py-1 shadow-md shadow-slate-900/6 -translate-y-1/2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8]" />
                  <span className="text-[11px] font-medium text-[#101820] font-sans">Healthcare Technology</span>
                </div>

                <div className="absolute -bottom-1 left-4 z-30 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md border border-[#1A6FA8]/20 px-3.5 py-1 shadow-md shadow-slate-900/6">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0]" />
                  <span className="text-[11px] font-medium text-[#101820] font-sans">Operational Transformation</span>
                </div>

                {/* Hardware Mockup Stage */}
                <div className="relative z-10 pt-3 pb-2 px-1">
                  
                  {/* DEVICE 1: Desktop Studio Display */}
                  <div className="relative w-[84%] mr-auto">
                    <div className="relative rounded-2xl p-2 bg-[#141E28] border border-slate-700/70 shadow-[0_20px_45px_-12px_rgba(16,24,32,0.22)] ring-1 ring-white/10">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-950 border border-slate-800/80">
                        <Image
                          src="/project-audit.jpg"
                          alt="Enterprise Governance & Operational Systems Architecture"
                          fill
                          className="object-cover object-top"
                          priority
                          sizes="(max-width: 768px) 75vw, 35vw"
                        />
                      </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                      <div className="w-10 sm:w-12 h-6 sm:h-7 bg-gradient-to-b from-slate-400 via-slate-300 to-slate-400 shadow-inner border-x border-slate-300/80" />
                      <div className="w-24 sm:w-30 h-2 sm:h-2.5 rounded-full bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 shadow-[0_4px_12px_rgba(16,24,32,0.15)] border-t border-white/80" />
                    </div>
                  </div>

                  {/* DEVICE 2: Modern Laptop (MedSynthea Healthcare AI) */}
                  <div className="absolute bottom-4 sm:bottom-5 right-0 z-20 w-[63%] transition-transform duration-300 hover:-translate-y-1">
                    <div className="relative rounded-t-xl p-1.5 bg-[#0A121A] border border-slate-700/80 shadow-[0_18px_35px_-8px_rgba(16,24,32,0.38)] ring-1 ring-white/10">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-md bg-white border border-slate-200">
                        <Image
                          src="/project-health.jpg"
                          alt="MedSynthea Healthcare AI Platform Interface"
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 55vw, 25vw"
                        />
                      </div>
                    </div>
                    <div className="relative w-[104%] -left-[2%] h-2.5 sm:h-3 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 rounded-b-xl border-t border-white/80 shadow-[0_10px_20px_-3px_rgba(16,24,32,0.32)] flex justify-center items-start">
                      <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-slate-400/80 rounded-b-md" />
                    </div>
                  </div>

                  <div className="w-[90%] mx-auto h-3.5 sm:h-4 bg-gradient-to-r from-transparent via-slate-900/15 to-transparent blur-md rounded-full mt-1" />

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. SIX CAPABILITIES SECTION ("One partner. Six core capabilities.")
      ══════════════════════════════════════════════════════════════════ */}
      <section id="capabilities" className="py-20 lg:py-28 bg-background scroll-mt-20">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            
            {/* 3. CAPABILITIES HEADING */}
            <div className="reveal text-center max-w-3xl mx-auto mb-16 lg:mb-24">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-card px-4 py-1.5 mb-4 shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                  CORE EXPERTISE
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[#101820] sm:text-4xl lg:text-[2.75rem] font-heading">
                One partner. Six core capabilities.
              </h2>
              <p className="mt-3.5 text-base sm:text-lg text-slate-600 font-sans">
                Each capability is engineered around accountability, operational scale, and structured executive oversight.
              </p>
            </div>

            <div className="space-y-20 lg:space-y-28">
               
               {/* ────────────────────────────────────────────────────────
                   CAPABILITY 01: Enterprise AI Solutions
               ──────────────────────────────────────────────────────── */}
               <div id="ai-solutions" className="scroll-mt-28 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                 <div className="reveal lg:col-span-7 space-y-4">
                   <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#1A6FA8] font-ui">
                     Capability 01
                   </div>
                   <h3 className="text-2xl sm:text-3xl font-bold text-[#101820] font-heading leading-tight">
                     Enterprise AI Solutions
                   </h3>
                   {/* 3. New description */}
                   <p className="text-lg font-medium text-slate-700 font-sans">
                     AI systems engineered around accountability, scale, and control.
                   </p>
                   <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                     We design and deploy purpose-built AI architectures for organizations where unverified outputs and lack of transparency are unacceptable risks. Our engineering team builds bounded agent systems with strict role-based access, comprehensive activity logging, and human-in-the-loop validation checkpoints.
                   </p>
                   
                   <div className="pt-2">
                     <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700 font-sans">
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>Bounded agent workflows &amp; retrieval systems</span>
                       </li>
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>Enforced human validation on sensitive actions</span>
                       </li>
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>Granular role-based access control (RBAC)</span>
                       </li>
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>Structured event logging for complete visibility</span>
                       </li>
                     </ul>
                   </div>

                   <div className="pt-3">
                     <Link 
                       href="/contact" 
                       className="inline-flex items-center gap-2 text-sm font-bold text-[#1A6FA8] hover:text-[#29A8E0] transition-colors font-ui uppercase tracking-wider"
                     >
                       <span>Discuss Enterprise AI Requirements</span>
                       <ArrowRight className="w-4 h-4"/>
                     </Link>
                   </div>
                 </div>

                 {/* Restrained Structural Workflow Stage */}
                 <div className="reveal-up lg:col-span-5 rounded-3xl bg-[#060D14] border border-[#1A6FA8]/30 p-6 sm:p-7 shadow-xl">
                   <div className="text-[11px] font-mono text-[#8FD6F5] uppercase tracking-wider font-bold mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                     <span>AI Architecture Pipeline</span>
                     <span className="text-emerald-400">Governed</span>
                   </div>
                   <div className="space-y-3 font-sans text-xs">
                     <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-slate-200">
                       <span className="font-medium">1. Structured Data Ingestion</span>
                       <span className="text-[10px] font-mono text-slate-400">Validated</span>
                     </div>
                     <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-slate-200">
                       <span className="font-medium">2. Bounded Execution Engine</span>
                       <span className="text-[10px] font-mono text-[#29A8E0]">Enforced</span>
                     </div>
                     <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-slate-200">
                       <span className="font-medium">3. Human-in-the-Loop Review</span>
                       <span className="text-[10px] font-mono text-emerald-400">Checkpoint</span>
                     </div>
                     <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-slate-200">
                       <span className="font-medium">4. Monitored Output Dispatch</span>
                       <span className="text-[10px] font-mono text-slate-400">Logged</span>
                     </div>
                   </div>
                 </div>
               </div>

               {/* ────────────────────────────────────────────────────────
                   CAPABILITY 02: Revenue Cycle Management (RCM)
               ──────────────────────────────────────────────────────── */}
               <div id="rcm" className="scroll-mt-28 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                 <div className="reveal lg:col-span-7 space-y-4">
                   <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#1A6FA8] font-ui">
                     Capability 02
                   </div>
                   <h3 className="text-2xl sm:text-3xl font-bold text-[#101820] font-heading leading-tight">
                     Revenue Cycle Management
                   </h3>
                   {/* 3. New description */}
                   <p className="text-lg font-medium text-slate-700 font-sans">
                     Turn complex revenue operations into more predictable workflows.
                   </p>
                   <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                     We integrate structured technology into healthcare provider revenue cycles—from front-end patient access and authorization validation to claims review, denial routing, and executive accounts receivable reporting.
                   </p>
                   
                   <div className="pt-2">
                     <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700 font-sans">
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>Eligibility &amp; pre-authorization coordination</span>
                       </li>
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>Pre-submission claim validation &amp; scrub</span>
                       </li>
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>Systematic denial analysis &amp; appeals routing</span>
                       </li>
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>AR aging analytics &amp; payer cash-flow reporting</span>
                       </li>
                     </ul>
                   </div>

                   <div className="pt-3">
                     <Link 
                       href="/contact" 
                       className="inline-flex items-center gap-2 text-sm font-bold text-[#1A6FA8] hover:text-[#29A8E0] transition-colors font-ui uppercase tracking-wider"
                     >
                       <span>Explore Revenue Cycle Solutions</span>
                       <ArrowRight className="w-4 h-4"/>
                     </Link>
                   </div>
                 </div>

                 {/* Restrained Structural Workflow Stage */}
                 <div className="reveal-up lg:col-span-5 rounded-3xl bg-[#060D14] border border-[#1A6FA8]/30 p-6 sm:p-7 shadow-xl">
                   <div className="text-[11px] font-mono text-[#8FD6F5] uppercase tracking-wider font-bold mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                     <span>RCM Workflow Stages</span>
                     <span className="text-[#29A8E0]">End-to-End</span>
                   </div>
                   <div className="space-y-3 font-sans text-xs">
                     <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200">
                       <div className="font-medium">Patient Access &amp; Coverage Verification</div>
                       <div className="text-[11px] text-slate-400 mt-0.5">Automated policy checks before service delivery</div>
                     </div>
                     <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200">
                       <div className="font-medium">Pre-Filing Rule Verification</div>
                       <div className="text-[11px] text-slate-400 mt-0.5">Scrubbing claims against current payer policy sets</div>
                     </div>
                     <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200">
                       <div className="font-medium">Remittance &amp; Denial Resolution</div>
                       <div className="text-[11px] text-slate-400 mt-0.5">Structured follow-up on outstanding receivables</div>
                     </div>
                   </div>
                 </div>
               </div>

               {/* ────────────────────────────────────────────────────────
                   CAPABILITY 03: Medical Billing & Coding
               ──────────────────────────────────────────────────────── */}
               <div id="medical-billing" className="scroll-mt-28 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                 <div className="reveal lg:col-span-7 space-y-4">
                   <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#1A6FA8] font-ui">
                     Capability 03
                   </div>
                   <h3 className="text-2xl sm:text-3xl font-bold text-[#101820] font-heading leading-tight">
                     Medical Billing &amp; Coding
                   </h3>
                   {/* 3. New description */}
                   <p className="text-lg font-medium text-slate-700 font-sans">
                     Specialised healthcare operations, delivered with structured oversight.
                   </p>
                   <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                     Designed for US healthcare providers, specialty clinics, and billing companies requiring dependable coding accuracy and accounts receivable support. Governed under US legal agreements and strict Business Associate Agreements (BAAs), our dedicated teams deliver accurate claim processing and systematic denial follow-up.
                   </p>
                   
                   <div className="pt-2">
                     <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700 font-sans">
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>CPT-4, ICD-10-CM, and HCPCS clinical coding</span>
                       </li>
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>Electronic claim batching and ERA remittance posting</span>
                       </li>
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>AAPC &amp; AHIMA credentialed coding supervision</span>
                       </li>
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>HIPAA compliant operational environments under US BAA</span>
                       </li>
                     </ul>
                   </div>

                   <div className="pt-3">
                     <Link 
                       href="/contact" 
                       className="inline-flex items-center gap-2 text-sm font-bold text-[#1A6FA8] hover:text-[#29A8E0] transition-colors font-ui uppercase tracking-wider"
                     >
                       <span>Inquire About Clinical Billing Pods</span>
                       <ArrowRight className="w-4 h-4"/>
                     </Link>
                   </div>
                 </div>

                 {/* Restrained Structural Workflow Stage */}
                 <div className="reveal-up lg:col-span-5 rounded-3xl bg-[#060D14] border border-[#1A6FA8]/30 p-6 sm:p-7 shadow-xl">
                   <div className="text-[11px] font-mono text-[#8FD6F5] uppercase tracking-wider font-bold mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                     <span>Coding &amp; Billing Protocol</span>
                     <span className="text-emerald-400">US BAA</span>
                   </div>
                   <div className="space-y-3 font-sans text-xs">
                     <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200">
                       <div className="font-semibold text-white">Clinical Data Translation</div>
                       <div className="text-[11px] text-slate-400 mt-0.5">Medical charts translated into standardized CPT &amp; ICD-10 sets</div>
                     </div>
                     <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200">
                       <div className="font-semibold text-white">Supervisory Review Gate</div>
                       <div className="text-[11px] text-slate-400 mt-0.5">Certified leads cross-check complex documentation</div>
                     </div>
                     <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200">
                       <div className="font-semibold text-white">Clearinghouse &amp; Payer Tracking</div>
                       <div className="text-[11px] text-slate-400 mt-0.5">Transmission status monitoring and prompt denial triage</div>
                     </div>
                   </div>
                 </div>
               </div>

               {/* ────────────────────────────────────────────────────────
                   CAPABILITY 04: Business Process Reengineering
               ──────────────────────────────────────────────────────── */}
               <div id="reengineering" className="scroll-mt-28 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                 <div className="reveal lg:col-span-7 space-y-4">
                   <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#1A6FA8] font-ui">
                     Capability 04
                   </div>
                   <h3 className="text-2xl sm:text-3xl font-bold text-[#101820] font-heading leading-tight">
                     Business Process Reengineering
                   </h3>
                   {/* 3. New description */}
                   <p className="text-lg font-medium text-slate-700 font-sans">
                     Fix the workflow before you automate it.
                   </p>
                   <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                     Automating a flawed process only multiplies inefficiency. We examine operational sequences to identify structural friction, eliminate redundant handoffs, and clarify operational handoffs before implementing software solutions.
                   </p>
                   
                   <div className="pt-2">
                     <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700 font-sans">
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>End-to-end workflow diagnostics &amp; bottleneck mapping</span>
                       </li>
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>Standard operating procedure (SOP) formalization</span>
                       </li>
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>Elimination of manual re-entry and fragmented tools</span>
                       </li>
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>Automation-readiness assessment and roadmap</span>
                       </li>
                     </ul>
                   </div>

                   <div className="pt-3">
                     <Link 
                       href="/contact" 
                       className="inline-flex items-center gap-2 text-sm font-bold text-[#1A6FA8] hover:text-[#29A8E0] transition-colors font-ui uppercase tracking-wider"
                     >
                       <span>Schedule Workflow Review</span>
                       <ArrowRight className="w-4 h-4"/>
                     </Link>
                   </div>
                 </div>

                 {/* Restrained Structural Workflow Stage */}
                 <div className="reveal-up lg:col-span-5 rounded-3xl bg-[#060D14] border border-[#1A6FA8]/30 p-6 sm:p-7 shadow-xl">
                   <div className="text-[11px] font-mono text-[#8FD6F5] uppercase tracking-wider font-bold mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                     <span>Reengineering Framework</span>
                     <span className="text-[#29A8E0]">Optimization</span>
                   </div>
                   <div className="space-y-3 font-sans text-xs">
                     <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200">
                       <div className="font-semibold text-white">Diagnostic Workflow Mapping</div>
                       <div className="text-[11px] text-slate-400 mt-0.5">Capturing real handoffs, tool dependencies, and latency</div>
                     </div>
                     <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200">
                       <div className="font-semibold text-white">Streamlined Redesign</div>
                       <div className="text-[11px] text-slate-400 mt-0.5">Restructuring processes for clarity and fewer touchpoints</div>
                     </div>
                     <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200">
                       <div className="font-semibold text-white">Standardized Automation Target</div>
                       <div className="text-[11px] text-slate-400 mt-0.5">Clean operational targets ready for reliable tooling</div>
                     </div>
                   </div>
                 </div>
               </div>

               {/* ────────────────────────────────────────────────────────
                   CAPABILITY 05: Intelligent Resource Augmentation
               ──────────────────────────────────────────────────────── */}
               <div id="resource-augmentation" className="scroll-mt-28 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                 <div className="reveal lg:col-span-7 space-y-4">
                   <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#1A6FA8] font-ui">
                     Capability 05
                   </div>
                   <h3 className="text-2xl sm:text-3xl font-bold text-[#101820] font-heading leading-tight">
                     Intelligent Resource Augmentation
                   </h3>
                   {/* 3. New description */}
                   <p className="text-lg font-medium text-slate-700 font-sans">
                     Your AI-native team: human expertise and custom AI agents.
                   </p>
                   <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                     We combine trained operational specialists from our global hub with custom AI agents — working side by side to help your organization scale capacity without adding payroll bloat. Governed under direct Dallas executive leadership, our embedded teams deliver speed, accuracy, and clear daily accountability.
                   </p>
                   
                   <div className="pt-2">
                     <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700 font-sans">
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>AI-fluent operators paired with custom AI agents</span>
                       </li>
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>Dallas US contractual governance &amp; single point of contact</span>
                       </li>
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>Real-time collaboration and transparent milestone tracking</span>
                       </li>
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>Instant operational scale without domestic recruitment lag</span>
                       </li>
                     </ul>
                   </div>

                   <div className="pt-3">
                     <Link 
                       href="/contact" 
                       className="inline-flex items-center gap-2 text-sm font-bold text-[#1A6FA8] hover:text-[#29A8E0] transition-colors font-ui uppercase tracking-wider"
                     >
                       <span>Explore AI-Native Teams</span>
                       <ArrowRight className="w-4 h-4"/>
                     </Link>
                   </div>
                 </div>

                 {/* Restrained Structural Workflow Stage */}
                 <div className="reveal-up lg:col-span-5 rounded-3xl bg-[#060D14] border border-[#1A6FA8]/30 p-6 sm:p-7 shadow-xl">
                   <div className="text-[11px] font-mono text-[#8FD6F5] uppercase tracking-wider font-bold mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                     <span>The Delivery Model</span>
                     <span className="text-emerald-400">Human + AI Agent</span>
                   </div>
                   <div className="space-y-3 font-sans text-xs">
                     <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200">
                        <div className="font-semibold text-white flex items-center justify-between">
                          <span>1. AI-Fluent Operators</span>
                          <span className="text-[10px] font-mono text-[#29A8E0]">Human</span>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1">Trained specialists handling context, judgment, and quality review</div>
                     </div>
                     <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200">
                       <div className="font-semibold text-white flex items-center justify-between">
                         <span>2. Trained AI Agents</span>
                         <span className="text-[10px] font-mono text-[#29A8E0]">AI</span>
                       </div>
                       <div className="text-[11px] text-slate-400 mt-1">Automated workflows executing intake, data structuring, and routine tasks</div>
                     </div>
                     <div className="p-3.5 rounded-xl bg-white/[0.04] border border-emerald-500/30 text-slate-200">
                       <div className="font-semibold text-white flex items-center justify-between">
                         <span>3. Your AI-Native Team</span>
                         <span className="text-[10px] font-mono text-emerald-400">Scale</span>
                       </div>
                       <div className="text-[11px] text-slate-300 mt-1">Embedded directly into your operations for dependable, elastic scale</div>
                     </div>
                   </div>
                 </div>
               </div>

               {/* ────────────────────────────────────────────────────────
                   CAPABILITY 06: Industry SaaS
               ──────────────────────────────────────────────────────── */}
               <div id="saas" className="scroll-mt-28 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                 <div className="reveal lg:col-span-7 space-y-4">
                   <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#1A6FA8] font-ui">
                     Capability 06
                   </div>
                   
                   <h3 className="text-2xl sm:text-3xl font-bold text-[#101820] font-heading leading-tight">
                     Industry SaaS
                   </h3>
                   
                   {/* 3. New description */}
                   <p className="text-lg font-medium text-slate-700 font-sans">
                     Purpose-built software for industry-specific needs.
                   </p>
                   <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                     We engineer proprietary, secure software solutions tailored for vertical operational challenges. Rather than forcing rigid off-the-shelf tools onto unique enterprise environments, our engineering teams design specialized applications that integrate directly into existing operational workflows.
                   </p>
                   
                   <div className="pt-2">
                     <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700 font-sans">
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>Purpose-built architectures for complex regulatory environments</span>
                       </li>
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>Direct integration with enterprise data pipelines and systems</span>
                       </li>
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>Granular administrative controls and role-based permissions</span>
                       </li>
                       <li className="flex items-start gap-2.5">
                         <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                         <span>Flagship deployment: MedSynthea healthcare AI platform</span>
                       </li>
                     </ul>
                   </div>

                   <div className="pt-3">
                     <Link 
                       href="#medsynthea-showcase" 
                       className="inline-flex items-center gap-2 text-sm font-bold text-[#1A6FA8] hover:text-[#29A8E0] transition-colors font-ui uppercase tracking-wider"
                     >
                       <span>View Flagship Platform</span>
                       <ArrowRight className="w-4 h-4"/>
                     </Link>
                   </div>
                 </div>

                 {/* Restrained Structural Workflow Stage */}
                 <div className="reveal-up lg:col-span-5 rounded-3xl bg-[#060D14] border border-[#1A6FA8]/30 p-6 sm:p-7 shadow-xl">
                   <div className="text-[11px] font-mono text-[#8FD6F5] uppercase tracking-wider font-bold mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                     <span>SaaS Architecture Standard</span>
                     <span className="text-[#29A8E0]">Enterprise Grade</span>
                   </div>
                   <div className="space-y-3 font-sans text-xs">
                     <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200">
                       <div className="font-semibold text-white">Domain-Specific Data Models</div>
                       <div className="text-[11px] text-slate-400 mt-0.5">Schemas structured around specialized vertical operations</div>
                     </div>
                     <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200">
                       <div className="font-semibold text-white">Role-Based Access Governance</div>
                       <div className="text-[11px] text-slate-400 mt-0.5">Granular permissions with complete administrative activity tracking</div>
                     </div>
                     <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200">
                       <div className="font-semibold text-white">Scalable Cloud Architecture</div>
                       <div className="text-[11px] text-slate-400 mt-0.5">High-availability deployment with end-to-end encryption</div>
                     </div>
                   </div>
                 </div>
               </div>

            </div>
         </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. VALUE / OUTCOMES SECTION (Exact 6 Company Propositions)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 relative bg-gradient-to-b from-[#F8FAFD] via-[#F0FAFF] to-[#F8FAFD] overflow-hidden border-y border-[#1A6FA8]/15">
         <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            
            <div className="reveal text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-white px-4 py-1.5 mb-3 shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                  OPERATIONAL OUTCOMES
                </span>
              </div>
              
              {/* 4. VALUE HEADING */}
              <h2 className="text-3xl font-bold tracking-tight text-[#101820] sm:text-4xl lg:text-[2.6rem] font-heading">
                Technology is only valuable when it improves the operation.
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans max-w-2xl mx-auto">
                Every Myer Systems engagement is designed around six core operational outcomes that create lasting business control.
              </p>
            </div>
            
            {/* Six core operational outcomes balancing enterprise reengineering, AI governance, and revenue integrity */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 {
                   num: '01',
                   title: 'Automated Workload Reduction',
                   desc: 'Eliminating manual errors, administrative backlogs, and repetitive data entry through governed, production-grade automation.'
                 },
                 {
                   num: '02',
                   title: 'Workflow Bottleneck Elimination',
                   desc: 'Fixing operational friction across teams, streamlining handoffs, and cutting redundant administrative cycles.'
                 },
                 {
                   num: '03',
                   title: 'Revenue Cycle & Cash-Flow Control',
                   desc: 'Real-time visibility, pre-submission validation, and systematic follow-up that safeguard billing and accelerate payment turnaround.'
                 },
                 {
                   num: '04',
                   title: 'Accountable AI Governance',
                   desc: 'Ensuring AI systems operate within explicit business rules, full activity audit trails, and strict human oversight.'
                 },
                 {
                   num: '05',
                   title: 'Enforced Compliance & Audit Readiness',
                   desc: 'Role-based access controls, complete activity logging, and deterministic data protections under US HIPAA and security standards.'
                 },
                 {
                   num: '06',
                   title: 'Scalable AI-Native Teams',
                   desc: 'Trained operational specialists paired with custom AI agents under direct Dallas executive leadership for dependable capacity.'
                 }
               ].map((item, i) => (
                 <div 
                   key={i} 
                   className="reveal-up p-7 rounded-3xl bg-white border border-[#1A6FA8]/20 shadow-[0_6px_25px_rgba(26,111,168,0.05)] hover:shadow-[0_12px_35px_rgba(26,111,168,0.1)] hover:border-[#29A8E0]/50 transition-all duration-300 flex flex-col justify-between group"
                   style={{ transitionDelay: `${i * 60}ms` }}
                 >
                   <div>
                     <div className="flex items-center justify-between border-b border-[#1A6FA8]/10 pb-3.5 mb-4">
                       <span className="text-xs font-mono font-bold text-[#1A6FA8]">OUTCOME {item.num}</span>
                       <span className="h-2 w-2 rounded-full bg-[#29A8E0]/30 group-hover:bg-[#29A8E0] transition-colors" />
                     </div>
                     <h3 className="text-lg font-bold text-[#101820] mb-2 font-heading leading-snug">{item.title}</h3>
                     <p className="text-[13.5px] text-slate-600 leading-relaxed font-sans">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. TECHNICAL / GOVERNANCE SECTION ("Built with control in mind.")
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#060D14] text-white relative overflow-hidden border-b border-[#1A6FA8]/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          <div className="reveal text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#29A8E0]/25 bg-[#29A8E0]/10 px-4 py-1.5 mb-4 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8FD6F5] font-ui">
                GOVERNANCE ARCHITECTURE
              </span>
            </div>
            
            {/* 5. HEADING & SUPPORTING COPY */}
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] font-heading">
              Built with control in mind.
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-slate-300 font-sans">
              AI should not operate as a black box inside critical workflows.
            </p>
          </div>

          {/* 5. VISUAL FLOW: AI System → Workflow → Human Oversight → Operational Outcome */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            
            {/* Step 1 */}
            <div className="rounded-3xl bg-[#0B131C] border border-[#1A6FA8]/30 p-6 flex flex-col justify-between relative group hover:border-[#29A8E0]/60 transition-colors">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <span className="text-xs font-mono font-bold text-[#8FD6F5]">STAGE 01</span>
                  <Cpu className="w-4 h-4 text-[#29A8E0]" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading mb-2">AI System</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Domain-specific models and bounded agents configured for precise task execution.
                </p>
              </div>
              <div className="pt-4 mt-auto text-[11px] font-mono text-slate-400">
                Deterministic Bounds
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-3xl bg-[#0B131C] border border-[#1A6FA8]/30 p-6 flex flex-col justify-between relative group hover:border-[#29A8E0]/60 transition-colors">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <span className="text-xs font-mono font-bold text-[#8FD6F5]">STAGE 02</span>
                  <Workflow className="w-4 h-4 text-[#29A8E0]" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading mb-2">Workflow</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Structured handoffs embedded into your core operational and software environments.
                </p>
              </div>
              <div className="pt-4 mt-auto text-[11px] font-mono text-slate-400">
                Seamless Integration
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-3xl bg-[#0B131C] border border-[#1A6FA8]/30 p-6 flex flex-col justify-between relative group hover:border-[#29A8E0]/60 transition-colors">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <span className="text-xs font-mono font-bold text-[#8FD6F5]">STAGE 03</span>
                  <ShieldCheck className="w-4 h-4 text-[#29A8E0]" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading mb-2">Human Oversight</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Credentialed specialists and domain leads validating critical actions and checkpoints.
                </p>
              </div>
              <div className="pt-4 mt-auto text-[11px] font-mono text-slate-400">
                Zero Blind Execution
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-3xl bg-[#0B131C] border border-[#1A6FA8]/30 p-6 flex flex-col justify-between relative group hover:border-[#29A8E0]/60 transition-colors">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <span className="text-xs font-mono font-bold text-[#8FD6F5]">STAGE 04</span>
                  <CheckCircle2 className="w-4 h-4 text-[#29A8E0]" />
                </div>
                <h3 className="text-lg font-bold text-white font-heading mb-2">Operational Outcome</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Measurable operational gains delivered with full auditability, clarity, and control.
                </p>
              </div>
              <div className="pt-4 mt-auto text-[11px] font-mono text-slate-400">
                Predictable Performance
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. ENGAGEMENT MODELS (Cleaner, Less Card-Heavy)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#F8FAFD] border-b border-[#1A6FA8]/15">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="reveal text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-white px-4 py-1.5 mb-3 shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                  ENGAGEMENT MODELS
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[#101820] sm:text-4xl font-heading">
                Three structured ways to partner with us
              </h2>
              <p className="mt-3 text-base text-slate-600 font-sans">
                Every model is supported by US contractual governance, transparent milestones, and dedicated delivery teams.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               
               {/* Model 01 */}
               <div className="reveal-up p-8 rounded-3xl border border-[#1A6FA8]/20 bg-white shadow-[0_6px_25px_rgba(26,111,168,0.05)] hover:shadow-[0_12px_35px_rgba(26,111,168,0.1)] transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1A6FA8] font-ui block mb-2">
                      Model 01
                    </span>
                    <h3 className="text-xl font-bold text-[#101820] mb-3 font-heading">Project-Based Delivery</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                      A defined scope, fixed milestone timeline, and dedicated delivery team that owns execution from discovery to deployment.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[#1A6FA8]/10 mt-auto">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1A6FA8] font-ui block">Best For:</span>
                    <p className="text-sm text-[#101820] font-medium mt-1 font-sans">
                      Workflow redesigns, dedicated AI architecture implementations, or specific platform builds.
                    </p>
                  </div>
               </div>
               
               {/* Model 02 */}
               <div className="reveal-up p-8 rounded-3xl border border-[#29A8E0]/40 bg-white shadow-[0_10px_30px_rgba(41,168,224,0.08)] hover:shadow-[0_16px_40px_rgba(41,168,224,0.14)] transition-all flex flex-col justify-between" style={{ transitionDelay: '100ms' }}>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1A6FA8] font-ui">
                        Model 02
                      </span>
                      <span className="px-2.5 py-0.5 bg-[#29A8E0]/15 text-[#1A6FA8] border border-[#29A8E0]/30 text-[10px] font-bold uppercase tracking-wider rounded-full font-ui">
                        Integrated
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#101820] mb-3 font-heading">Embedded Hybrid Pods</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                      Dedicated engineering or healthcare operations specialists integrated directly into your daily processes under Dallas leadership.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[#1A6FA8]/10 mt-auto">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1A6FA8] font-ui block">Best For:</span>
                    <p className="text-sm text-[#101820] font-medium mt-1 font-sans">
                      Long-term technical capacity, continuous revenue cycle operations, and ongoing engineering.
                    </p>
                  </div>
               </div>

               {/* Model 03 */}
               <div className="reveal-up p-8 rounded-3xl border border-[#1A6FA8]/20 bg-white shadow-[0_6px_25px_rgba(26,111,168,0.05)] hover:shadow-[0_12px_35px_rgba(26,111,168,0.1)] transition-all flex flex-col justify-between" style={{ transitionDelay: '200ms' }}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1A6FA8] font-ui block mb-2">
                      Model 03
                    </span>
                    <h3 className="text-xl font-bold text-[#101820] mb-3 font-heading">Operational Readiness Audit</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                      A focused assessment to map existing workflows, identify operational bottlenecks, and provide a clear technical roadmap.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-[#1A6FA8]/10 mt-auto">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1A6FA8] font-ui block">Best For:</span>
                    <p className="text-sm text-[#101820] font-medium mt-1 font-sans">
                      Organizations evaluating automation readiness, revenue cycle overhaul, or workflow friction.
                    </p>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. MEDSYNTHEA SECTION ("Our flagship healthcare AI platform.")
      ══════════════════════════════════════════════════════════════════ */}
      <section id="medsynthea-showcase" className="scroll-mt-24 py-20 lg:py-28 bg-white border-b border-[#1A6FA8]/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="rounded-3xl border border-[#1A6FA8]/25 bg-gradient-to-br from-[#F8FAFD] via-white to-[#F0FAFF] p-8 sm:p-10 lg:p-14 shadow-lg shadow-[#1A6FA8]/5 relative overflow-hidden">
            
            {/* Ambient subtle backlights */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#29A8E0]/10 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#1A6FA8]/8 blur-[90px]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Editorial & Strategic Position */}
              <div className="reveal lg:col-span-6 space-y-5">
                
                <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-white px-3.5 py-1.5 shadow-2xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                    FLAGSHIP PLATFORM · BUILT BY MYER SYSTEMS
                  </span>
                </div>

                {/* 7. HEADING */}
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#101820] font-heading leading-tight">
                  Our flagship healthcare AI platform: MedSynthea.
                </h2>

                {/* 7. SUPPORTING COPY */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
                  MedSynthea is developed by Myer Systems to synthesize multi-source medical records, automate revenue cycle workflows, and assist clinical documentation.
                </p>

                <p className="text-sm text-slate-500 leading-relaxed font-sans">
                  Built as a live demonstration of our enterprise engineering standards, MedSynthea proves how Myer Systems architects secure, production-grade AI systems for complex, regulated environments.
                </p>


                <div className="pt-2">
                  <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700 font-sans">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                      <span>Clinical data synthesis across disparate formats</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                      <span>Administrative workflow orchestration &amp; triage</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                      <span>Standardized healthcare interoperability</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" />
                      <span>Secure operational environments under US BAA</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 rounded-full bg-[#29A8E0] px-6 py-3 text-xs sm:text-sm font-bold text-[#101820] shadow-md shadow-[#29A8E0]/20 hover:bg-[#1A6FA8] hover:text-white transition-all font-ui"
                  >
                    <span>Request Platform Briefing</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a 
                    href="https://medsynthea.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-[#101820] hover:border-[#1A6FA8] hover:text-[#1A6FA8] transition-all font-ui shadow-2xs"
                  >
                    <span>Visit medsynthea.com</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>

              </div>

              {/* Right Column: Platform Visual Showcase */}
              <div className="reveal-scale lg:col-span-6">
                <div className="relative rounded-2xl p-2.5 bg-[#060D14] border border-[#1A6FA8]/30 shadow-2xl shadow-slate-950/20">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900 border border-slate-800">
                    <Image
                      src="/project-health.jpg"
                      alt="MedSynthea Healthcare AI Interface"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 90vw, 45vw"
                    />
                  </div>
                  <div className="p-3.5 flex items-center justify-between text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-slate-300">MedSynthea Core Engine</span>
                    </div>
                    <span className="text-[#8FD6F5]">Enterprise Clinical AI</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          8. DELIVERY METHODOLOGY ("How we deliver" · 4 Stages)
      ══════════════════════════════════════════════════════════════════ */}
      <section id="delivery-methodology" className="scroll-mt-24 py-20 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* 8. HEADING */}
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-card px-4 py-1.5 mb-3 shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                  OUR PROCESS
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[#101820] sm:text-4xl lg:text-[2.6rem] font-heading leading-tight">
                How we deliver
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans">
                A structured four-stage methodology engineered to eliminate uncertainty and ensure predictable implementation.
              </p>
            </div>

            <Link
              href="/how-we-operate"
              className="group inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/25 bg-white px-6 py-3 text-xs sm:text-sm font-bold text-[#101820] transition-all hover:border-[#29A8E0] hover:text-[#1A6FA8] font-ui shadow-2xs shrink-0"
            >
              <span>Explore Operating Model</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* 8. Four Clean Stages: 01 Understand, 02 Architect, 03 Build, 04 Scale */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stage: '01',
                title: 'Understand',
                desc: 'In-depth discovery to map existing workflows, identify operational bottlenecks, and define clear success criteria before engineering starts.',
                tag: 'Discovery'
              },
              {
                stage: '02',
                title: 'Architect',
                desc: 'Designing governance boundaries, access controls, integration points, and structured procedures tailored to your environment.',
                tag: 'Blueprint'
              },
              {
                stage: '03',
                title: 'Build',
                desc: 'Structured implementation pairing specialized technology with dedicated engineering talent under direct executive supervision.',
                tag: 'Execution'
              },
              {
                stage: '04',
                title: 'Scale',
                desc: 'Deployment into production with continuous operational visibility, systematic handoffs, and ongoing performance reviews.',
                tag: 'Operations'
              }
            ].map((step, i) => (
              <div 
                key={i} 
                className="reveal-up p-7 rounded-3xl bg-white border border-[#1A6FA8]/20 shadow-[0_6px_25px_rgba(26,111,168,0.05)] hover:shadow-[0_12px_35px_rgba(26,111,168,0.1)] hover:border-[#29A8E0]/40 transition-all duration-300 flex flex-col justify-between group"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#1A6FA8]/10 pb-4 mb-4">
                    <span className="text-3xl font-light text-[#1A6FA8]/40 font-heading select-none group-hover:text-[#29A8E0] transition-colors">
                      {step.stage}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#F0FAFF] text-[#1A6FA8] border border-[#1A6FA8]/20 text-[10px] font-bold uppercase font-ui tracking-wider">
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#101820] mb-2 font-heading leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Reassurance Strip */}
          <div className="mt-10 rounded-2xl border border-[#1A6FA8]/20 bg-[#F0FAFF]/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-[#101820] font-ui">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#29A8E0]" />
                Dallas US Contractual Governance
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-[#29A8E0]" />
                Strict BAA &amp; Mutual NDA Protection
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#29A8E0]" />
                Human-Supervised Operational Execution
              </span>
            </div>
            <Link
              href="/contact"
              className="text-xs font-bold text-[#1A6FA8] hover:text-[#29A8E0] inline-flex items-center gap-1 font-ui uppercase tracking-wider shrink-0"
            >
              <span>Schedule Initial Briefing</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FINAL STRATEGIC CTA BANNER
      ══════════════════════════════════════════════════════════════════ */}
      <CtaBanner />
      
      <Footer />
    </div>
  );
}
