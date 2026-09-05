"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { useReveal } from '@/hooks/use-reveal';
import { CtaBanner } from '@/components/site/cta-banner';
import { Linkedin, MapPin, Globe2, CheckCircle2, ShieldAlert, Layers, TrendingUp, Sparkles, ArrowRight, ChevronRight } from 'lucide-react';

export default function AboutPage() {
  useReveal();

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ─── 1. HERO (Exact Footer Color #060D14 with Services-Style Architectural Geometry) ───────────────── */}
      <main className="relative w-full min-h-[540px] lg:min-h-[580px] bg-[#060D14] overflow-hidden flex items-center pt-32 pb-20 lg:pt-36 lg:pb-24 border-b border-[#1A6FA8]/20">
        
        {/* Background Decorative Mesh & Geometry (Like Services Hero) */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          {/* Top Left Dotted Mesh */}
          <div 
            className="absolute -top-10 -left-10 w-[500px] h-[500px] opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, #29A8E0 1.5px, transparent 1.5px)',
              backgroundSize: '16px 16px',
              maskImage: 'linear-gradient(135deg, black 10%, transparent 70%)',
              WebkitMaskImage: 'linear-gradient(135deg, black 10%, transparent 70%)'
            }}
          />

          {/* Bottom Right Dotted Mesh */}
          <div 
            className="absolute -bottom-10 right-20 w-[600px] h-[400px] opacity-[0.12]"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)',
              backgroundSize: '20px 20px',
              maskImage: 'linear-gradient(to top left, black, transparent 80%)',
              WebkitMaskImage: 'linear-gradient(to top left, black, transparent 80%)'
            }}
          />

          {/* Diagonal Architectural Beams */}
          <div className="absolute -bottom-32 -right-10 w-[600px] h-[600px] opacity-15 rotate-[-35deg]">
             <div className="absolute bottom-10 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#29A8E0] to-white" />
             <div className="absolute bottom-20 right-0 w-[90%] h-1 bg-white" />
             <div className="absolute bottom-32 right-0 w-[80%] h-2 bg-[#29A8E0]" />
             <div className="absolute bottom-44 right-0 w-[70%] h-1 bg-white/70" />
             <div className="absolute bottom-56 right-0 w-[50%] h-0.5 bg-[#29A8E0]/50" />
          </div>

          {/* Precision Outline Circles */}
          <div className="absolute top-1/2 right-[10%] w-24 h-24 rounded-full border border-[#29A8E0]/20 -translate-y-1/2" />
          <div className="absolute top-[35%] right-[6%] w-16 h-16 rounded-full border border-white/10" />
          <div className="absolute bottom-16 left-[12%] w-14 h-14 rounded-full border border-[#29A8E0]/15" />

          {/* Ambient Deep Glows */}
          <div 
            className="absolute top-10 right-1/4 h-[500px] w-[500px] rounded-full bg-[#1A6FA8]/15 blur-[160px]" 
          />
          <div 
            className="absolute bottom-5 left-10 h-[450px] w-[450px] rounded-full bg-[#29A8E0]/10 blur-[140px]" 
          />
        </div>

        {/* Content Container */}
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl">
            {/* Eyebrow Pill */}
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-[#29A8E0]/25 bg-[#29A8E0]/10 px-3.5 py-1.5 mb-6 shadow-2xs backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8FD6F5] font-ui">
                ABOUT MYER SYSTEMS · FOUNDED 2025
              </span>
            </div>

            {/* Display Heading */}
            <h1 className="reveal text-4xl sm:text-5xl lg:text-[3.5rem]/[1.15] font-bold tracking-tight text-white mb-6 font-heading">
              AI systems built for{' '}
              <span className="inline-block pr-2 font-quote italic font-normal text-[#8FD6F5]">
                accountability, scale, and control
              </span>.
            </h1>

            {/* Lead Narrative */}
            <p className="reveal-up text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans mt-5">
              Headquartered in Dallas with our global delivery hub in Lahore, we deliver custom enterprise AI systems, business process reengineering, healthcare technology, and specialised operational support.
            </p>

            {/* Strategic CTAs */}
            <div className="reveal-up pt-8 flex flex-wrap items-center gap-4">
              <Link 
                href="/contact" 
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#29A8E0] px-7 py-3.5 text-sm font-bold text-[#060D14] shadow-lg shadow-[#29A8E0]/20 hover:bg-[#8FD6F5] hover:scale-[1.02] transition-all duration-200 font-ui cursor-pointer"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link 
                href="/services" 
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all duration-200 font-ui cursor-pointer"
              >
                <span>Explore Capabilities</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* ─── 2. OUR STORY — Premium Bento Grid ───────────────── */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#1A6FA8]/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="reveal max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-[#F0FAFF] px-3.5 py-1.5 shadow-2xs mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                OUR STORY · BUILT FOR ACCOUNTABILITY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem]/[1.15] font-semibold tracking-tight text-[#101820] font-sans">
              Founded on one standard:{' '}
              <span className="inline-block pr-1.5 font-quote italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#1A6FA8] via-[#29A8E0] to-[#1A6FA8]">
                structure over shortcuts
              </span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {/* Card 1: Big statement card (Dark Midnight) */}
            <div className="reveal md:col-span-7 bg-[#101820] rounded-[2rem] p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[340px] border border-white/10 shadow-2xl shadow-[#101820]/15 relative overflow-hidden group">
              {/* Subtle ambient glow in card */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#29A8E0]/15 blur-[90px]" />
              
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#8FD6F5] font-ui mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-[#29A8E0]" />
                  THE FOUNDATIONAL CONVICTION
                </div>

                <p className="text-2xl sm:text-3xl lg:text-[2.1rem]/[1.3] font-semibold text-white font-sans tracking-tight">
                  Myer Systems was founded on the belief that dependable technology requires{' '}
                  <span className="inline-block pr-1 font-quote italic font-normal text-[#8FD6F5]">
                    structure, accountability, and clear ownership.
                  </span>
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-12 bg-[#29A8E0] rounded-full" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-ui">
                    Structured Processes &amp; Clear Ownership
                  </span>
                </div>
                <span className="text-xs font-bold text-[#8FD6F5] font-ui bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  Transparent Accountability
                </span>
              </div>
            </div>

            {/* Card 2: High-Stakes Operations */}
            <div className="reveal-up md:col-span-5 bg-gradient-to-br from-[#F8FAFD] via-[#F0FAFF] to-[#E0F4FC]/80 border border-[#1A6FA8]/20 shadow-[0_4px_20px_rgba(26,111,168,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] rounded-[2rem] p-8 sm:p-10 lg:p-12 min-h-[340px] flex flex-col justify-between hover:border-[#29A8E0]/60 hover:shadow-[0_12px_36px_rgba(41,168,224,0.12)] hover:-translate-y-1 transition-all duration-400 ease-out group relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#1A6FA8]/25 flex items-center justify-center text-[#1A6FA8] mb-6 shadow-xs group-hover:scale-105 group-hover:border-[#29A8E0] group-hover:text-[#29A8E0] transition-all duration-300">
                  <ShieldAlert className="w-6 h-6 stroke-[1.8]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#101820] font-heading mb-3 tracking-tight">
                  High-Stakes Operational Standards
                </h3>

                <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed font-sans">
                  Mission-critical enterprise workflows and healthcare operations require systems that eliminate manual friction, reduce errors, and keep human leaders in full control.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#1A6FA8]/15 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#1A6FA8] text-xs font-bold uppercase tracking-wider font-ui">
                  <span className="h-2 w-2 rounded-full bg-[#29A8E0] animate-pulse" />
                  Operational Visibility &amp; Control
                </div>
                <span className="text-xs font-semibold text-slate-500 font-ui bg-white/80 px-3 py-1 rounded-full border border-[#1A6FA8]/15 shadow-2xs">
                  Founded · 2025
                </span>
              </div>
            </div>

            {/* Card 3: Six Core Capabilities */}
            <div className="reveal-up md:col-span-5 bg-gradient-to-br from-[#F8FAFD] via-[#F0FAFF] to-[#E0F4FC]/80 border border-[#1A6FA8]/20 shadow-[0_4px_20px_rgba(26,111,168,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] rounded-[2rem] p-8 sm:p-10 lg:p-12 min-h-[320px] flex flex-col justify-between hover:border-[#29A8E0]/60 hover:shadow-[0_12px_36px_rgba(41,168,224,0.12)] hover:-translate-y-1 transition-all duration-400 ease-out group relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#1A6FA8]/25 flex items-center justify-center text-[#1A6FA8] mb-6 shadow-xs group-hover:scale-105 group-hover:border-[#29A8E0] group-hover:text-[#29A8E0] transition-all duration-300">
                  <Layers className="w-6 h-6 stroke-[1.8]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#101820] font-heading mb-3 tracking-tight">
                  Six Core Capabilities
                </h3>

                <p className="text-base sm:text-[16.5px] text-slate-600 leading-relaxed font-sans mb-5">
                  Industry SaaS, enterprise AI solutions, Revenue Cycle Management (RCM), business process reengineering, resource augmentation, and medical billing services.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Industry SaaS',
                    'Enterprise AI Solutions',
                    'Revenue Cycle Management',
                    'Business Process Reengineering',
                    'Resource Augmentation',
                    'Medical Billing Services',
                  ].map((pill) => (
                    <span key={pill} className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-[#1A6FA8]/20 text-xs font-semibold text-[#1A6FA8] font-ui shadow-2xs">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1A6FA8]/15 flex items-center justify-between text-xs font-bold text-[#1A6FA8] font-ui">
                <span>Integrated Delivery</span>
                <span className="text-slate-500 font-normal">Structured execution &amp; operational continuity</span>
              </div>
            </div>

            {/* Card 4: Dual-Hub Distributed Delivery Model */}
            <div className="reveal-up md:col-span-7 bg-gradient-to-br from-[#F8FAFD] via-[#F0FAFF] to-[#E0F4FC]/80 border border-[#1A6FA8]/20 shadow-[0_4px_20px_rgba(26,111,168,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] rounded-[2rem] p-8 sm:p-10 lg:p-12 min-h-[320px] flex flex-col justify-between hover:border-[#29A8E0]/60 hover:shadow-[0_12px_36px_rgba(41,168,224,0.12)] hover:-translate-y-1 transition-all duration-400 ease-out group relative overflow-hidden">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#1A6FA8]/25 flex items-center justify-center text-[#1A6FA8] shadow-xs group-hover:scale-105 group-hover:border-[#29A8E0] group-hover:text-[#29A8E0] transition-all duration-300">
                    <TrendingUp className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 border border-[#1A6FA8]/20 shadow-2xs">
                    <span className="h-2 w-2 rounded-full bg-[#29A8E0] animate-pulse" />
                    <span className="text-xs font-bold text-[#101820] font-heading">+250% Growth (2025–2026)</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#101820] font-heading mb-3 tracking-tight">
                  Dual-Hub Distributed Delivery Model
                </h3>

                <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed font-sans mb-6">
                  Operating a distributed delivery model with registered headquarters in Dallas, Texas and a core engineering hub in Lahore, Pakistan — serving North American and international clients through a distributed delivery model.
                </p>

                {/* Interactive Dual-Hub Cards */}
                <div className="grid sm:grid-cols-2 gap-3 mb-2">
                  <div className="bg-white rounded-xl p-3.5 border border-[#1A6FA8]/20 flex items-center gap-3 shadow-2xs">
                    <div className="w-8 h-8 rounded-lg bg-[#F0FAFF] flex items-center justify-center text-[#1A6FA8] font-bold text-xs font-ui">
                      US
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#101820] font-heading">Dallas · US Headquarters</span>
                      <span className="text-[11px] text-slate-500 font-ui">Business Registration &amp; Client Operations</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-3.5 border border-[#1A6FA8]/20 flex items-center gap-3 shadow-2xs">
                    <div className="w-8 h-8 rounded-lg bg-[#F0FAFF] flex items-center justify-center text-[#1A6FA8] font-bold text-xs font-ui">
                      PK
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#101820] font-heading">Lahore · Global Delivery Hub</span>
                      <span className="text-[11px] text-slate-500 font-ui">Core Engineering &amp; Operations</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1A6FA8]/15 flex flex-wrap items-center justify-between text-xs font-semibold text-slate-600 font-ui gap-2">
                <span>Dallas, Texas · US Headquarters</span>
                <span className="text-[#1A6FA8] font-bold">Lahore, Pakistan · Global Delivery Hub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. MISSION STATEMENT ─────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F0FAFF] border-y border-[#1A6FA8]/15">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          
          {/* Eyebrow Pill (Matches Home) */}
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-[#F0FAFF] px-3.5 py-1.5 shadow-2xs mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
              OUR MISSION · CORPORATE PURPOSE
            </span>
          </div>

          <p className="reveal text-3xl md:text-4xl lg:text-[2.75rem]/[1.25] font-semibold leading-snug text-[#101820] font-sans tracking-tight max-w-4xl mx-auto">
            To empower healthcare and commercial enterprises to transition from reactive operations to{' '}
            <span className="inline-block pr-1.5 font-quote italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#1A6FA8] via-[#29A8E0] to-[#1A6FA8]">
              predictable, data-driven performance
            </span>
            {' '}— reducing workflow friction and building scalable, resilient operations through intelligent systems.
          </p>
        </div>
      </section>

      {/* ─── 4. LEADERSHIP ────────────────────────────────────── */}
      <section className="pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 bg-white border-b border-[#1A6FA8]/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Eyebrow Pill (Matches Home) */}
          <div className="reveal mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-[#F0FAFF] px-3.5 py-1.5 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                EXECUTIVE LEADERSHIP · GOVERNANCE
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16">
            <div className="lg:col-span-6">
              <h2 className="reveal text-3xl sm:text-4xl lg:text-[2.85rem]/[1.15] font-semibold tracking-tight text-[#101820] font-sans">
                Led with accountability and{' '}
                <span className="inline-block pr-1.5 font-quote italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#1A6FA8] via-[#29A8E0] to-[#1A6FA8]">
                  engineering precision
                </span>.
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="reveal-up text-base sm:text-lg text-slate-600 leading-relaxed font-sans border-l-4 border-[#29A8E0]/40 pl-6">
                Founded with a focus on enterprise strategy, AI systems, and operational delivery, Myer Systems unites technical execution and clinical operations under one uncompromising standard: structure over shortcuts.
              </p>
            </div>
          </div>

          {/* 3 Executive Leaders — Boxy Style Images, Name & Designation (No Bio) */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {[
              {
                role: 'Founder & Chairman',
                name: 'Yassir Humayun (Raja Yasir)',
                image: '/images/yassir-humayun.jpg',
                linkedin: 'https://www.linkedin.com/company/myer-systems/',
              },
              {
                role: 'Chief Executive Officer',
                name: 'Osman Akram',
                image: '/images/osman-akram.jpg',
                linkedin: 'https://www.linkedin.com/company/myer-systems/',
              },
              {
                role: 'Chief Technology Officer',
                name: 'Ali Hamza',
                image: '/images/ali-hamza.jpg',
                linkedin: 'https://www.linkedin.com/company/myer-systems/',
              },
            ].map((person, i) => (
              <div 
                key={i} 
                className="reveal-up group relative overflow-hidden rounded-[2rem] bg-white border border-[#1A6FA8]/20 hover:border-[#29A8E0]/60 transition-all duration-400 hover:shadow-xl hover:shadow-[#29A8E0]/10 hover:-translate-y-1.5 p-4 flex flex-col justify-between"
              >
                <div>
                  {/* Boxy Style Image Frame */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-[#F0FAFF] border border-[#1A6FA8]/15">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                      priority={i === 0}
                    />
                    
                    {/* Subtle Bottom Ambient Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Floating LinkedIn Badge */}
                    <div className="absolute top-3.5 right-3.5 z-10">
                      <a 
                        href={person.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-white/60 flex items-center justify-center text-[#101820] hover:text-[#1A6FA8] hover:bg-white hover:scale-110 transition-all shadow-md"
                        aria-label={`${person.name} on LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Leader Info: Designation & Name Only */}
                  <div className="pt-5 pb-2 px-2">
                    <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui mb-1.5">
                      {person.role}
                    </span>
                    <h3 className="text-xl sm:text-[1.35rem] font-bold text-[#101820] font-heading tracking-tight leading-snug">
                      {person.name}
                    </h3>
                  </div>
                </div>

                <div className="px-2 pt-3 pb-1 border-t border-[#1A6FA8]/15 text-[11px] font-semibold uppercase tracking-wider text-slate-500 font-ui flex items-center justify-between">
                  <span>Executive Leadership</span>
                  <span className="text-[#1A6FA8] font-bold">{person.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. GLOBAL REACH ──────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F0FAFF] border-b border-[#1A6FA8]/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Eyebrow Pill (Matches Home) */}
          <div className="reveal mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-[#F0FAFF] px-3.5 py-1.5 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                DUAL-HUB OPERATIONS · DALLAS &amp; LAHORE
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem]/[1.15] font-semibold tracking-tight text-[#101820] font-sans leading-[1.15] mb-6">
                Built for client operations, delivered through a{' '}
                <span className="inline-block pr-1.5 font-quote italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#1A6FA8] via-[#29A8E0] to-[#1A6FA8]">
                  global delivery hub
                </span>.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed mb-6">
                Business registration and client-facing operations are based in Dallas, Texas, while core engineering, RCM processing, and AI development operate from our hub in Lahore, Pakistan.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider text-[#1A6FA8] font-ui">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#29A8E0]" /> Dallas · US Headquarters
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#29A8E0]" /> Lahore · Global Delivery Hub
                </span>
              </div>
            </div>

            <div className="reveal-up space-y-4">
              {[
                { 
                  Icon: MapPin, 
                  title: 'Dallas · US Headquarters', 
                  subtitle: 'United States · Dallas, Texas',
                  desc: 'Executive leadership, strategic advisory, client-facing operations, and business registration.' 
                },
                { 
                  Icon: Globe2, 
                  title: 'Lahore · Global Delivery Hub', 
                  subtitle: 'Pakistan · Lahore, Punjab',
                  desc: 'Core AI engineering, medical billing and coding operations, AI development, and delivery support.', 
                  offset: true 
                }
              ].map(({ Icon, title, subtitle, desc, offset }, i) => (
                <div key={i} className={`flex items-start gap-6 p-7 sm:p-8 bg-white rounded-3xl border border-[#1A6FA8]/20 shadow-2xs hover:shadow-lg hover:border-[#29A8E0]/50 transition-all duration-300 group ${offset ? 'ml-0 lg:ml-8' : ''}`}>
                  <div className="w-12 h-12 rounded-2xl bg-[#F0FAFF] border border-[#1A6FA8]/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#29A8E0] transition-transform duration-300">
                    <Icon className="w-5 h-5 text-[#1A6FA8] group-hover:text-[#29A8E0]" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#1A6FA8] font-ui mb-1">{subtitle}</span>
                    <h4 className="text-xl font-bold text-[#101820] font-heading mb-1">{title}</h4>
                    <p className="text-[14px] text-slate-600 font-sans leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. VALUES & PROPOSITION — Steady Sticky Rail ───────────── */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#1A6FA8]/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Rock-solid Steady Sticky Rail */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 self-start z-10 space-y-5">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-[#F0FAFF] px-3.5 py-1.5 shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                  GUIDING PRINCIPLES · VALUE PROPOSITION
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem]/[1.15] font-semibold tracking-tight text-[#101820] font-sans leading-[1.15]">
                The principles that govern{' '}
                <span className="inline-block pr-1.5 font-quote italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#1A6FA8] via-[#29A8E0] to-[#1A6FA8]">
                  our work
                </span>.
              </h2>

              {/* Supporting Subtext */}
              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed max-w-md">
                Helping organisations transition from reactive operations to predictable, data-driven performance with greater accountability, visibility, and operational control.
              </p>
            </div>

            {/* Right Column: Flowing Value Cards */}
            <div className="lg:col-span-7 divide-y divide-[#1A6FA8]/15">
              {[
                { 
                  title: 'Structure over promises', 
                  desc: 'We begin by understanding the operational challenge, identifying workflow inefficiencies, and designing practical systems around measurable business needs.' 
                },
                { 
                  title: 'Accountability & transparent ownership', 
                  desc: 'We believe technology should be delivered with clear ownership, structured processes, and transparent accountability from planning through execution.' 
                },
                { 
                  title: 'Predictable performance & error reduction', 
                  desc: 'Reducing errors and manual workload through AI-powered automation, while improving revenue visibility and reducing payment-cycle friction.' 
                },
                { 
                  title: 'The Delivery Model: Human expertise amplified by AI', 
                  desc: 'Our mission is not to replace humans, but to empower them. We pair trained operational specialists with custom AI agents to give your organization scalable, dependable capacity.' 
                },
              ].map((value, i) => (
                <div key={i} className="reveal-up py-8 sm:py-10 grid grid-cols-[56px_1fr] gap-6 group hover:pl-1 transition-all duration-300">
                  <span className="text-4xl sm:text-5xl font-heading font-bold text-[#101820]/15 group-hover:text-[#29A8E0] transition-colors duration-300 leading-none pt-1 select-none tabular-nums">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#101820] font-heading mb-2.5 group-hover:text-[#1A6FA8] transition-colors duration-300">{value.title}</h3>
                    <p className="text-[14.5px] sm:text-[15px] text-slate-600 font-sans leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. FINAL CTA & FOOTER ────────────────────────────── */}
      <CtaBanner />
      <Footer />
    </div>
  );
}
