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
      <section className="relative w-full pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden bg-[#060D14]">
        
        {/* Background Image & Overlays */}
        <div 
          className="absolute inset-0 z-0 bg-[url('/industries-hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true" 
        />
        <div className="absolute inset-0 z-0 bg-[#060D14]/30" aria-hidden="true" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#060D14] via-[#060D14]/80 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#060D14] via-transparent to-[#060D14]/40" aria-hidden="true" />

        {/* Ambient Subtle Glow */}
        <div
          className="pointer-events-none absolute -bottom-24 left-10 h-[450px] w-[450px] rounded-full bg-[#29A8E0]/15 blur-[120px]"
          aria-hidden="true"
        />

        {/* Content Container */}
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* ════════ LEFT COLUMN: Editorial Headline & Subtext ════════ */}
            <div className="reveal lg:col-span-8 xl:col-span-8 space-y-6 lg:space-y-8">

              {/* Eyebrow Badge */}
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8FD6F5] animate-pulse" />
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#8FD6F5] font-ui font-bold">
                  MARKETS &amp; FOCUS
                </span>
              </div>

              {/* Headline */}
              <h1 className="mt-4 sm:mt-5 text-[2.2rem]/[1.15] sm:text-5xl lg:text-[3.5rem]/[1.12] xl:text-[3.9rem]/[1.12] font-bold tracking-tight text-white font-heading drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
                Built around <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8FD6F5] to-[#29A8E0]">real workflows.</span>
              </h1>
              
              {/* Description */}
              <p className="mt-3.5 sm:mt-4 max-w-xl text-base sm:text-[17px] leading-relaxed text-slate-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-sans font-normal">
                Our AI systems and automation solutions are engineered specifically for the compliance requirements, bottlenecks, and operational realities of your industry.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. HEALTHCARE (Central Visual Layout)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pt-20 pb-12 lg:pt-28 lg:pb-16 relative bg-white overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E0F4FC]/50 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
          
          {/* Top Text (Eyebrow, Heading, Paragraph) */}
          <div className="max-w-3xl mx-auto text-center reveal-up mb-16 lg:mb-24">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#1A6FA8] font-ui">INDUSTRY 01</span>
              <div className="w-10 h-10 rounded-xl bg-[#E0F4FC] border border-[#29A8E0]/20 flex items-center justify-center shadow-sm">
                <Stethoscope className="w-5 h-5 text-[#29A8E0]" />
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-[3.25rem] leading-[1.1] font-bold text-ink font-heading tracking-tight mb-6">
              Healthcare &amp; Life Sciences
            </h2>
            <p className="text-[18px] text-slate-600 leading-[1.8] font-sans">
              Healthcare is where Myer Systems has its deepest operational footprint. Through our flagship platform MedSynthea and our RCM services, we help healthcare providers automate clinical and administrative workflows — from patient access to claims management to compliance reporting.
            </p>
          </div>

          {/* Center Visual + Surrounding Bullets */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center reveal-up relative">
            
            {/* Left Bullets (3 items) */}
            <div className="lg:col-span-4 flex flex-col gap-5 order-2 lg:order-1">
              <div className="flex items-start gap-4 bg-[#8FD6F5] border border-[#1A6FA8]/5 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.12)] hover:-translate-y-1 hover:border-[#29A8E0]/30 transition-all duration-300 group">
                <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center text-[#29A8E0] shadow-sm group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <p className="text-[17px] font-semibold text-slate-700 leading-relaxed pt-0.5">Revenue cycle management and billing automation</p>
              </div>
              
              <div className="flex items-start gap-4 bg-[#8FD6F5] border border-[#1A6FA8]/5 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.12)] hover:-translate-y-1 hover:border-[#29A8E0]/30 transition-all duration-300 group">
                <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center text-[#29A8E0] shadow-sm group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <p className="text-[17px] font-semibold text-slate-700 leading-relaxed pt-0.5">Patient access and eligibility verification</p>
              </div>

              <div className="flex items-start gap-4 bg-[#8FD6F5] border border-[#1A6FA8]/5 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.12)] hover:-translate-y-1 hover:border-[#29A8E0]/30 transition-all duration-300 group">
                <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center text-[#29A8E0] shadow-sm group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <p className="text-[17px] font-semibold text-slate-700 leading-relaxed pt-0.5">Clinical documentation and data synthesis</p>
              </div>
            </div>

            {/* Central Visual UI */}
            <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 py-10 lg:py-0">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
                
                {/* Connection lines */}
                <div className="hidden lg:block absolute top-1/2 -left-12 w-24 h-px bg-gradient-to-r from-transparent via-[#29A8E0]/50 to-[#29A8E0] -translate-y-1/2" />
                <div className="hidden lg:block absolute top-1/2 -right-12 w-24 h-px bg-gradient-to-l from-transparent via-[#29A8E0]/50 to-[#29A8E0] -translate-y-1/2" />
                
                {/* Glowing Aura */}
                <div className="absolute inset-0 bg-[#29A8E0] rounded-full blur-[80px] opacity-20 animate-pulse" />
                
                {/* Animated Rings */}
                <div className="absolute inset-4 border border-[#29A8E0]/30 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-10 border border-[#1A6FA8]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                
                {/* Core Element */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br from-[#1A6FA8] to-[#29A8E0] rounded-[2rem] flex items-center justify-center shadow-[0_0_50px_rgba(41,168,224,0.4)] relative z-10 overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('/grid-dark.svg')] opacity-30 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <Activity className="w-12 h-12 text-white relative z-10" />
                </div>
                
                {/* Floating Orbiting Nodes */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#29A8E0] rounded-full shadow-[0_0_10px_rgba(41,168,224,0.5)]" />
                <div className="absolute bottom-4 right-10 w-3 h-3 bg-[#8FD6F5] rounded-full shadow-[0_0_10px_rgba(143,214,245,0.5)]" />
                
              </div>
            </div>

            {/* Right Bullets (2 items) */}
            <div className="lg:col-span-4 flex flex-col gap-5 order-3">
              <div className="flex items-start gap-4 bg-[#8FD6F5] border border-[#1A6FA8]/5 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.12)] hover:-translate-y-1 hover:border-[#29A8E0]/30 transition-all duration-300 group">
                <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center text-[#29A8E0] shadow-sm group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <p className="text-[17px] font-semibold text-slate-700 leading-relaxed pt-0.5">Claims processing and denial management</p>
              </div>

              <div className="flex items-start gap-4 bg-[#8FD6F5] border border-[#1A6FA8]/5 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.12)] hover:-translate-y-1 hover:border-[#29A8E0]/30 transition-all duration-300 group">
                <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center text-[#29A8E0] shadow-sm group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <p className="text-[17px] font-semibold text-slate-700 leading-relaxed pt-0.5">Compliance, audit readiness, and reporting</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. COMMERCIAL & ENTERPRISE (Central Visual Layout)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pt-12 pb-20 lg:pt-16 lg:pb-28 relative bg-white overflow-hidden">
        
        {/* Subtle Ambient Background */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E0F4FC]/50 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
        
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
          
          {/* Top Text (Eyebrow, Heading, Paragraph) */}
          <div className="max-w-3xl mx-auto text-center reveal-up mb-16 lg:mb-24">
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
              Beyond healthcare, we work with commercial organisations that are weighed down by manual, repetitive processes — businesses that need to scale operations without proportionally scaling headcount. Our enterprise AI solutions and business reengineering services help these organisations automate workflows, process documents intelligently, and build data-driven operations.
            </p>
          </div>

          {/* Center Visual + Surrounding Bullets */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center reveal-up relative">
            
            {/* Left Bullets (3 items) */}
            <div className="lg:col-span-4 flex flex-col gap-5 order-2 lg:order-1">
              <div className="flex items-start gap-4 bg-[#8FD6F5] border border-[#1A6FA8]/5 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.12)] hover:-translate-y-1 hover:border-[#29A8E0]/30 transition-all duration-300 group">
                <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center text-[#29A8E0] shadow-sm group-hover:scale-110 transition-transform">
                  <Workflow className="w-6 h-6" />
                </div>
                <p className="text-[17px] font-semibold text-slate-700 leading-relaxed pt-0.5">Workflow automation for operations, finance, and back-office teams</p>
              </div>
              
              <div className="flex items-start gap-4 bg-[#8FD6F5] border border-[#1A6FA8]/5 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.12)] hover:-translate-y-1 hover:border-[#29A8E0]/30 transition-all duration-300 group">
                <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center text-[#29A8E0] shadow-sm group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <p className="text-[17px] font-semibold text-slate-700 leading-relaxed pt-0.5">Intelligent document processing and data extraction</p>
              </div>

              <div className="flex items-start gap-4 bg-[#8FD6F5] border border-[#1A6FA8]/5 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.12)] hover:-translate-y-1 hover:border-[#29A8E0]/30 transition-all duration-300 group">
                <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center text-[#29A8E0] shadow-sm group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <p className="text-[17px] font-semibold text-slate-700 leading-relaxed pt-0.5">Business process reengineering and operational efficiency</p>
              </div>
            </div>

            {/* Central Visual UI (Distinct from Healthcare) */}
            <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 py-10 lg:py-0">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
                
                {/* Connection lines */}
                <div className="hidden lg:block absolute top-1/2 -left-12 w-24 h-px bg-gradient-to-r from-transparent via-[#29A8E0]/50 to-[#29A8E0] -translate-y-1/2" />
                <div className="hidden lg:block absolute top-1/2 -right-12 w-24 h-px bg-gradient-to-l from-transparent via-[#29A8E0]/50 to-[#29A8E0] -translate-y-1/2" />
                
                {/* Geometric Glow */}
                <div className="absolute inset-0 bg-[#1A6FA8] rounded-3xl blur-[70px] opacity-20 animate-pulse" />
                
                {/* Abstract UI Elements */}
                <div className="absolute inset-8 border border-[#29A8E0]/20 rounded-2xl rotate-45 transition-transform duration-[10000ms] hover:rotate-90" />
                <div className="absolute inset-12 border border-[#1A6FA8]/20 rounded-2xl -rotate-12" />
                
                {/* Core Element */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(26,111,168,0.2)] border-4 border-[#F0FAFF] relative z-10 group">
                  <Cpu className="w-12 h-12 text-[#1A6FA8] group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 rounded-full border border-[#29A8E0]/30 animate-ping opacity-20" />
                </div>
                
                {/* Data Nodes */}
                <div className="absolute bottom-8 left-8 w-10 h-10 bg-white rounded-xl shadow-md border border-[#29A8E0]/20 flex items-center justify-center">
                  <Workflow className="w-5 h-5 text-[#29A8E0]" />
                </div>
                <div className="absolute top-10 right-10 w-8 h-8 bg-[#8FD6F5] rounded-full shadow-sm flex items-center justify-center opacity-80" />
                
              </div>
            </div>

            {/* Right Bullets (2 items) */}
            <div className="lg:col-span-4 flex flex-col gap-5 order-3">
              <div className="flex items-start gap-4 bg-[#8FD6F5] border border-[#1A6FA8]/5 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.12)] hover:-translate-y-1 hover:border-[#29A8E0]/30 transition-all duration-300 group">
                <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center text-[#29A8E0] shadow-sm group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <p className="text-[17px] font-semibold text-slate-700 leading-relaxed pt-0.5">Resource augmentation with AI + human hybrid teams</p>
              </div>

              <div className="flex items-start gap-4 bg-[#8FD6F5] border border-[#1A6FA8]/5 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.12)] hover:-translate-y-1 hover:border-[#29A8E0]/30 transition-all duration-300 group">
                <div className="w-12 h-12 shrink-0 bg-white rounded-xl flex items-center justify-center text-[#29A8E0] shadow-sm group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <p className="text-[17px] font-semibold text-slate-700 leading-relaxed pt-0.5">Custom SaaS and AI product development</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. WHO WE WORK WITH (Clean Architectural Look)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#E0F4FC] relative">
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
          
          <div className="relative w-full max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-[#101820] to-[#1A6FA8] overflow-hidden shadow-[0_20px_60px_rgba(26,111,168,0.25)] border border-[#29A8E0]/30 p-10 lg:p-16">
            
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/grid-dark.svg')] opacity-10 mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#29A8E0] rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
              
              {/* Sugar Land Hub */}
              <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start group">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md transition-colors group-hover:bg-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#8FD6F5] shadow-[0_0_8px_rgba(143,214,245,0.8)] animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white/90 font-ui">Headquarters</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight mb-2">Sugar Land, TX</h3>
                <p className="text-[#8FD6F5] font-sans font-medium">United States</p>
              </div>

              {/* Connecting Global Link */}
              <div className="flex-[1.5] w-full flex items-center justify-center relative py-8 md:py-0">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent relative">
                  <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] -translate-y-1/2" />
                  <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-[#8FD6F5] shadow-[0_0_10px_rgba(143,214,245,0.8)] -translate-y-1/2" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <Globe className="w-5 h-5 text-white/80 animate-[spin_20s_linear_infinite]" />
                </div>
              </div>

              {/* Lahore Hub */}
              <div className="flex-1 text-center md:text-right flex flex-col items-center md:items-end group">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md transition-colors group-hover:bg-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#29A8E0] shadow-[0_0_8px_rgba(41,168,224,0.8)] animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white/90 font-ui">Delivery Hub</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight mb-2">Lahore, PK</h3>
                <p className="text-[#8FD6F5] font-sans font-medium">Pakistan</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}
