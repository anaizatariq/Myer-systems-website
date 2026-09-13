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
  Check,
  Activity,
  Building2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  useReveal();

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════════
          1. HERO SECTION 
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-[#060D14]">

        {/* Background Image & Overlays */}
        <div
          className="absolute inset-0 z-0 bg-[url('/services-hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
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
                  CAPABILITIES &amp; SERVICES
                </span>
              </div>

              {/* 1. HERO H1 */}
              <h1 className="mt-4 sm:mt-5 text-[2.2rem]/[1.15] sm:text-5xl lg:text-[3.5rem]/[1.12] xl:text-[3.9rem]/[1.12] font-bold tracking-tight text-white font-heading drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
                Making complex operations predictable.
              </h1>

              {/* 1. HERO SUBTEXT */}
              <p className="mt-3.5 sm:mt-4 max-w-xl text-base sm:text-[17px] leading-relaxed text-slate-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-sans font-normal">
                Enterprise AI and automation solutions designed to reduce friction and scale your operations with total control.
              </p>

              {/* Strategic CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-ink shadow-[0_2px_12px_rgba(41,168,224,0.25)] hover:bg-[#209FD6] hover:shadow-[0_6px_20px_rgba(41,168,224,0.38)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 font-ui cursor-pointer"
                >
                  <span>Schedule Technical Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#capabilities"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white shadow-2xs backdrop-blur-md hover:bg-white/10 hover:border-white/30 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 font-ui"
                >
                  <span>Explore Capabilities</span>
                  <ChevronRight className="w-4 h-4 text-[#8FD6F5]/70 group-hover:text-[#8FD6F5] transition-colors" />
                </a>
              </div>

            </div>

          </div>
        </div>      </section>


      {/* ─── SERVICES INTRO ────────────────────────────────────── */}
      <section className="pt-20 lg:pt-28 pb-10 lg:pb-16 bg-[#FAFAFA]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center reveal-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
              CORE SERVICES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink font-heading leading-tight mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-[17px] sm:text-lg text-slate-700 font-sans leading-[1.8] max-w-3xl mx-auto">
            Myer Systems operates at the intersection of enterprise AI and operational efficiency. We deliver across five core service pillars, each designed to eliminate manual work, reduce inefficiency, and build smarter, more scalable operations.
          </p>
        </div>
      </section>

      {/* ─── 5 SERVICE PILLARS (HORIZONTAL ROWS STYLED) ─────────────────────── */}
      <section className="pb-14 sm:pb-20 lg:pb-32 pt-2 bg-[#FAFAFA]">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-8 space-y-5 sm:space-y-8 lg:space-y-10">

          {/* Service 1 */}
          <div id="ai" className="scroll-mt-24 reveal-up w-full flex flex-col md:flex-row border border-[#1A6FA8]/15 rounded-[2rem] bg-white group hover:bg-[#E0F4FC] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(26,111,168,0.12)] border-l-[6px] border-l-[#29A8E0] overflow-hidden">

            <div className="w-full md:w-1/2 p-5 sm:p-6 lg:p-8 relative z-10 flex flex-col justify-center transition-transform duration-700 group-hover:translate-x-2">
              <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-4 transition-colors group-hover:text-[#29A8E0]">Service 01</span>
              <h3 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-ink font-heading mb-4 tracking-tight">Enterprise-Grade AI Solutions</h3>
              <p className="font-semibold text-slate-800 text-base sm:text-[17px] mb-3">Advanced AI systems engineered for accountability, scalability, and control.</p>
              <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed max-w-xl">We design and build custom AI systems for enterprise environments, systems that automate repetitive workflows, process unstructured data, and deliver actionable insights at scale.</p>
            </div>

            <div className="w-full md:w-1/2 p-5 sm:p-6 lg:p-8 bg-[#060D14] rounded-b-[2rem] md:rounded-b-none md:rounded-l-[2.5rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/images/service_enterprise_ai.jpg')" }} />
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#060D14]/90 to-[#060D14]/40 transition-opacity duration-700 group-hover:opacity-90" />
              <div className="relative z-10">
                <div>
                  <h4 className="text-xl sm:text-[22px] font-bold text-white font-heading mb-3 tracking-tight drop-shadow-md">Built for Accountability</h4>
                  <p className="text-[17px] text-white/90 leading-[1.7] font-sans drop-shadow-sm">Every AI system we build includes full audit trails, explainable outputs, and human-in-the-loop checkpoints. You stay in control of every automated decision.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Service 2 */}
          <div id="saas" className="scroll-mt-24 reveal-up w-full flex flex-col md:flex-row border border-[#1A6FA8]/15 rounded-[2rem] bg-white group hover:bg-[#E0F4FC] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(26,111,168,0.12)] border-l-[6px] border-l-[#29A8E0] overflow-hidden">

            <div className="w-full md:w-1/2 p-5 sm:p-6 lg:p-8 relative z-10 flex flex-col justify-center transition-transform duration-700 group-hover:translate-x-2">
              <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-4 transition-colors group-hover:text-[#29A8E0]">Service 02</span>
              <h3 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-ink font-heading mb-4 tracking-tight">Industry SaaS</h3>
              <p className="font-semibold text-slate-800 text-base sm:text-[17px] mb-3">Scalable, vertically-focused software-as-a-service products.</p>
              <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed max-w-xl">We build SaaS products tailored to specific industries, not generic tools that require months of customisation. Built around real operational workflows and designed to scale.</p>
            </div>

            <div className="w-full md:w-1/2 p-5 sm:p-6 lg:p-8 bg-[#060D14] rounded-b-[2rem] md:rounded-b-none md:rounded-l-[2.5rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/images/service_industry_saas.jpg')" }} />
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#060D14]/90 to-[#060D14]/40 transition-opacity duration-700 group-hover:opacity-90" />
              <div className="relative z-10">
                <div>
                  <h4 className="text-xl sm:text-[22px] font-bold text-white font-heading mb-3 tracking-tight drop-shadow-md">Flagship Product: MedSynthea</h4>
                  <p className="text-[17px] text-white/90 leading-[1.7] font-sans drop-shadow-sm">A healthcare-focused AI platform designed to synthesise medical data and streamline both clinical and administrative workflows for healthcare providers.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Service 3 */}
          <div id="reengineering" className="scroll-mt-24 reveal-up w-full flex flex-col md:flex-row border border-[#1A6FA8]/15 rounded-[2rem] bg-white group hover:bg-[#E0F4FC] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(26,111,168,0.12)] border-l-[6px] border-l-[#29A8E0] overflow-hidden">

            <div className="w-full md:w-1/2 p-5 sm:p-6 lg:p-8 relative z-10 flex flex-col justify-center transition-transform duration-700 group-hover:translate-x-2">
              <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-4 transition-colors group-hover:text-[#29A8E0]">Service 03</span>
              <h3 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-ink font-heading mb-4 tracking-tight">Business Reengineering</h3>
              <p className="font-semibold text-slate-800 text-base sm:text-[17px] mb-3">Eliminating workflow inefficiencies and rebuilding smarter processes.</p>
              <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed max-w-xl">Before we automate anything, we audit your operations to find the real bottlenecks, the redundant steps, and manual handoffs that slow your business down.</p>
            </div>

            <div className="w-full md:w-1/2 p-5 sm:p-6 lg:p-8 bg-[#060D14] rounded-b-[2rem] md:rounded-b-none md:rounded-l-[2.5rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/images/discover.jpg')" }} />
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#060D14]/90 to-[#060D14]/40 transition-opacity duration-700 group-hover:opacity-90" />
              <div className="relative z-10">
                <div>
                  <h4 className="text-xl sm:text-[22px] font-bold text-white font-heading mb-3 tracking-tight drop-shadow-md">Data-Driven Optimization</h4>
                  <p className="text-[17px] text-white/90 leading-[1.7] font-sans drop-shadow-sm">We don&apos;t just automate blindly. We map your entire operational lifecycle, identifying bottlenecks and redundant handoffs, to ensure every AI deployment directly improves your bottom line.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Service 4 */}
          <div id="augmentation" className="scroll-mt-24 reveal-up w-full flex flex-col md:flex-row border border-[#1A6FA8]/15 rounded-[2rem] bg-white group hover:bg-[#E0F4FC] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(26,111,168,0.12)] border-l-[6px] border-l-[#29A8E0] overflow-hidden">

            <div className="w-full md:w-1/2 p-5 sm:p-6 lg:p-8 relative z-10 flex flex-col justify-center transition-transform duration-700 group-hover:translate-x-2">
              <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-4 transition-colors group-hover:text-[#29A8E0]">Service 04</span>
              <h3 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-ink font-heading mb-4 tracking-tight">Resource Augmentation</h3>
              <p className="font-semibold text-slate-800 text-base sm:text-[17px] mb-3">Combining AI agents with skilled human expertise to scale operations.</p>
              <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed max-w-xl">We pair AI agents with trained human operators to create hybrid teams that handle your workload without the overhead of traditional hiring. AI handles the volume and routine tasks. Humans handle the judgment calls. You get both, without compromising quality.</p>
            </div>

            <div className="w-full md:w-1/2 p-5 sm:p-6 lg:p-8 bg-[#060D14] rounded-b-[2rem] md:rounded-b-none md:rounded-l-[2.5rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/images/service_augmentation.jpg')" }} />
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#060D14]/90 to-[#060D14]/40 transition-opacity duration-700 group-hover:opacity-90" />
              <div className="relative z-10">
                <div>
                  <h4 className="text-xl sm:text-[22px] font-bold text-white font-heading mb-3 tracking-tight drop-shadow-md">The Best of Both Worlds</h4>
                  <p className="text-[17px] text-white/90 leading-[1.7] font-sans drop-shadow-sm">Dedicated AI agents handle the high-volume, routine tasks, while skilled human operators provide critical oversight and handle complex judgment calls. You get extreme scalability without compromising on quality.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Service 5 */}
          <div id="rcm" className="scroll-mt-24 reveal-up w-full flex flex-col md:flex-row border border-[#1A6FA8]/15 rounded-[2rem] bg-white group hover:bg-[#E0F4FC] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(26,111,168,0.12)] border-l-[6px] border-l-[#29A8E0] overflow-hidden">

            <div className="w-full md:w-1/2 p-5 sm:p-6 lg:p-8 relative z-10 flex flex-col justify-center transition-transform duration-700 group-hover:translate-x-2">
              <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-4 transition-colors group-hover:text-[#29A8E0]">Service 05</span>
              <h3 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-ink font-heading mb-4 tracking-tight">Revenue Cycle Management (RCM)</h3>
              <p className="font-semibold text-slate-800 text-base sm:text-[17px] mb-3">End-to-end AI-powered RCM for healthcare organisations.</p>
              <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed max-w-xl">We deliver comprehensive, AI-powered revenue cycle management covering patient access, coding, billing, collections, and reporting, specifically built for US-based healthcare organisations looking to reduce errors, speed up reimbursements, and improve cash-flow visibility.</p>
            </div>

            <div className="w-full md:w-1/2 p-5 sm:p-6 lg:p-8 bg-[#060D14] rounded-b-[2rem] md:rounded-b-none md:rounded-l-[2.5rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: "url('/images/design.jpg')" }} />
              <div className="absolute inset-0 z-0 bg-[#060D14]/70 transition-opacity duration-700 group-hover:opacity-90" />
              <div className="relative z-10">
                <ul className="grid xl:grid-cols-2 gap-4 text-white/90 text-[15px] font-medium">
                  <li className="flex items-center gap-2.5 bg-white/10 p-3.5 rounded-xl border border-white/10 backdrop-blur-sm"><Check className="w-4 h-4 text-[#8FD6F5] shrink-0" /> Patient access & eligibility</li>
                  <li className="flex items-center gap-2.5 bg-white/10 p-3.5 rounded-xl border border-white/10 backdrop-blur-sm"><Check className="w-4 h-4 text-[#8FD6F5] shrink-0" /> AI-assisted coding & billing</li>
                  <li className="flex items-center gap-2.5 bg-white/10 p-3.5 rounded-xl border border-white/10 backdrop-blur-sm"><Check className="w-4 h-4 text-[#8FD6F5] shrink-0" /> Claims submission & denials</li>
                  <li className="flex items-center gap-2.5 bg-white/10 p-3.5 rounded-xl border border-white/10 backdrop-blur-sm"><Check className="w-4 h-4 text-[#8FD6F5] shrink-0" /> Collections & payment</li>
                  <li className="flex items-center gap-2.5 bg-white/10 p-3.5 rounded-xl border border-white/10 backdrop-blur-sm"><Check className="w-4 h-4 text-[#8FD6F5] shrink-0" /> Reporting & compliance</li>
                  <li className="flex items-center gap-2.5 bg-white/10 p-3.5 rounded-xl border border-white/10 backdrop-blur-sm"><Check className="w-4 h-4 text-[#8FD6F5] shrink-0" /> Offshore medical coding</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── INDUSTRIES WE SERVE ────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F0FAFF]">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-8 space-y-10 lg:space-y-12">

          <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink font-heading tracking-tight mb-6">Industries We Serve</h2>
            <p className="text-[17px] text-slate-700 font-sans leading-relaxed">
              Myer Systems serves organisations across healthcare and commercial markets. Our AI systems and automation solutions are built around the real workflows, compliance requirements, and operational challenges of each industry.
            </p>
          </div>

          <div className="reveal-up w-full flex flex-col md:flex-row border border-[#1A6FA8]/15 rounded-[2rem] bg-white group hover:bg-[#E0F4FC] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(26,111,168,0.12)] border-l-[6px] border-l-[#29A8E0] overflow-hidden">

            {/* Industry 1: Healthcare */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-12 relative z-10 flex flex-col justify-center transition-transform duration-700 group-hover:translate-x-2 overflow-hidden">
              <Activity className="absolute -right-10 -bottom-10 w-64 h-64 text-[#1A6FA8] opacity-[0.03] rotate-12 transition-transform duration-700 group-hover:scale-110 pointer-events-none" />
              <div className="relative z-10">
                <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-4 transition-colors group-hover:text-[#29A8E0]">Industry 01</span>
                <h3 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-ink font-heading mb-4 tracking-tight">Healthcare & Life Sciences</h3>
                <p className="text-[17px] text-slate-800 leading-[1.7] font-sans">
                  Healthcare is where Myer Systems has its deepest operational footprint. Through our flagship platform MedSynthea and our RCM services, we help healthcare providers automate clinical and administrative workflows, from patient access to claims management to compliance reporting.
                </p>
              </div>
            </div>

            {/* Industry 2: Commercial */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-12 bg-[#8FD6F5] rounded-b-[2rem] md:rounded-b-none md:rounded-l-[2.5rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#29A8E0 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <Building2 className="absolute -right-10 -bottom-10 w-64 h-64 text-[#1A6FA8] opacity-[0.05] -rotate-12 transition-transform duration-700 group-hover:scale-110 pointer-events-none" />
              <div className="relative z-10">
                <span className="text-[#1A6FA8]/80 font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-4">Industry 02</span>
                <h4 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-ink font-heading mb-4 tracking-tight">Commercial & Enterprise</h4>
                <p className="text-[17px] text-slate-800 leading-[1.7] font-sans">
                  Beyond healthcare, we work with commercial organisations that are weighed down by manual, repetitive processes. Our enterprise AI solutions and business reengineering services help these organisations automate workflows, process documents intelligently, and build data-driven operations.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── WHO WE WORK WITH ────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white border-t border-[#1A6FA8]/10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center reveal-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink font-heading tracking-tight mb-8 pb-2 leading-normal">Who We Work With</h2>
          <div className="p-10 lg:p-14 rounded-[2.5rem] bg-[#8FD6F5] shadow-sm border border-[#1A6FA8]/10">
            <p className="text-lg lg:text-[1.35rem] text-slate-800 font-sans leading-[1.8]">
              Our clients include healthcare providers, commercial organisations, and enterprises across North America and international markets. We operate a distributed offshore-onshore model, with our headquarters in Dallas, Texas and our delivery hub in Lahore, Pakistan, enabling us to deliver high-quality AI and automation services at competitive value.
            </p>
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
