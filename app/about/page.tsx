"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { useReveal } from '@/hooks/use-reveal';
import { CtaBanner } from '@/components/site/cta-banner';
import { Linkedin, ArrowRight, ChevronRight, ShieldCheck, Zap, Users, Network } from 'lucide-react';

export default function AboutPage() {
  useReveal();

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ─── 1. HERO (Full Background with Tight Content) ───────────────── */}
      <main className="relative w-full min-h-[60vh] lg:min-h-[100vh] max-h-[700px] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-[#060D14] border-b border-[#1A6FA8]/20">

        {/* Background Image & Overlays */}
        <div
          className="absolute inset-0 z-0 bg-[url('/about-hero-office.jpg')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-0 bg-[#060D14]/30" aria-hidden="true" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#060D14] via-[#060D14]/80 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#060D14] via-transparent to-[#060D14]/40" aria-hidden="true" />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl reveal">

            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8FD6F5] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#8FD6F5] font-ui font-bold">
                ABOUT MYER SYSTEMS · FOUNDED 2023
              </span>
            </div>

            {/* Display Heading */}
            <h1 className="mt-4 sm:mt-5 text-[2.2rem]/[1.15] sm:text-5xl lg:text-[3.5rem]/[1.12] xl:text-[3.9rem]/[1.12] font-bold tracking-tight text-white font-heading drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              Engineering the future of enterprise operations.
            </h1>

            {/* Lead Narrative */}
            <p className="mt-3.5 sm:mt-4 max-w-xl text-base sm:text-[17px] leading-relaxed text-slate-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-sans font-normal">
              Combining strategic US governance with robust global execution to build systems that scale.
            </p>

            {/* Strategic CTAs */}
            <div className="pt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#29A8E0] px-7 py-3.5 text-sm font-bold text-[#060D14] shadow-[0_4px_14px_rgba(41,168,224,0.3)] hover:bg-[#8FD6F5] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 font-ui"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all duration-200 font-ui"
              >
                <span>Explore Capabilities</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </Link>
            </div>

          </div>
        </div>
      </main>

      {/* ─── 2. OUR STORY (Editorial Narrative Layout) ───────────────── */}
      <section className="py-20 lg:py-32 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left: Sticky Title */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 reveal">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8] animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                  OUR STORY
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem]/[1.1] font-bold tracking-tight text-ink font-heading pr-0 lg:pr-8">
                We believe in structure over shortcuts.
              </h2>
            </div>

            {/* Right: Narrative */}
            <div className="lg:col-span-7 text-base sm:text-[1.15rem] leading-[1.85] text-slate-700 font-sans font-normal reveal-up lg:pt-8">
              <p className="mb-6">
                <span className="font-bold text-ink text-xl mb-1 block">Myer Systems was founded in 2023 with a single conviction:</span>
                businesses shouldn&apos;t waste human talent on work that machines can do better, faster, and more reliably.
              </p>
              <p className="mb-6">
                We watched organisations hire more people to handle more volume, such as more data entry, more document processing, and more manual approvals, when the real solution was smarter systems, not bigger headcounts. Headquartered in Sugar Land, Texas with a dedicated delivery hub in Lahore, Pakistan, Myer Systems designs, builds, and deploys enterprise AI systems that automate manual work at scale.
              </p>
              <p className="mb-10">
                We operate at the intersection of enterprise AI and operational efficiency to help organisations move from reactive operations to predictable, data-driven performance.
              </p>
              <div className="border-l-[3px] border-[#29A8E0] pl-6 py-4 bg-gradient-to-r from-[#29A8E0]/10 to-transparent rounded-r-2xl">
                <p className="text-lg sm:text-[1.15rem] text-ink font-semibold leading-relaxed font-sans">
                  We&apos;re not a consultancy that hands you a slide deck and walks away. We&apos;re engineers, AI specialists, and operations experts who build working systems, deploy them inside your workflows, and stand behind the results.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3. MISSION & VISION (Dark Mode Impact) ───────────────── */}
      <section className="py-24 lg:py-32 bg-ink text-white relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#29A8E0]/15 rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#1A6FA8]/20 rounded-full blur-[160px] translate-x-1/3 translate-y-1/3" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 divide-y lg:divide-y-0 lg:divide-x divide-white/10">

            {/* Mission */}
            <div className="pb-12 lg:pb-0 lg:pr-12 reveal">
              <div className="flex items-center gap-2 mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8FD6F5] font-ui">
                  OUR MISSION
                </span>
              </div>
              <p className="text-2xl sm:text-3xl lg:text-[2.1rem]/[1.35] font-medium font-sans text-white">
                To help organisations replace fragile, manual operations with intelligent, accountable AI systems — so they can scale faster, operate leaner, and compete smarter.
              </p>
            </div>

            {/* Vision */}
            <div className="pt-12 lg:pt-0 lg:pl-12 reveal-up">
              <div className="flex items-center gap-2 mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8FD6F5] font-ui">
                  OUR VISION
                </span>
              </div>
              <p className="text-2xl sm:text-3xl lg:text-[2.1rem]/[1.35] font-medium font-sans text-slate-300">
                A world where no business wastes human potential on work a machine can do better, faster, and more reliably.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 4. COMPANY AT A GLANCE (Minimalist Data Grid) ───────────────── */}
      <section className="py-20 lg:py-28 bg-[#E0F4FC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center text-center mb-16 reveal">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                COMPANY AT A GLANCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink font-heading tracking-tight">
              By the numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: 'Founded', value: '2023' },
              { label: 'Headquarters', value: 'Sugar Land, TX' },
              { label: 'Delivery Hub', value: 'Lahore, PK' },
              { label: 'Team Size', value: '11–50' },
              { label: 'Growth (25-26)', value: '250%' },
              { label: 'Model', value: 'Distributed' },
              { label: 'Clients', value: 'Global' },
              { label: 'Website', value: 'myersystems.ai' }
            ].map((stat, i) => (
              <div key={i} className="reveal-up bg-[#8FD6F5] rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col justify-start text-left hover:-translate-y-1 hover:shadow-lg hover:shadow-[#8FD6F5]/40 transition-all duration-300 group">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui mb-2 transition-colors">
                  {stat.label}
                </span>
                <span className="text-lg sm:text-2xl lg:text-[1.7rem] font-semibold text-ink font-sans tracking-tight break-all sm:break-normal">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 5. WHAT DRIVES US (Horizontal Joined Box) ───────────────── */}
      <section className="pt-12 pb-20 lg:pt-16 lg:pb-28 bg-white overflow-hidden">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 relative">

          <div className="max-w-2xl mb-12 lg:mb-16 reveal">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                WHAT DRIVES US
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink font-heading tracking-tight">
              Our Guiding Principles
            </h2>
          </div>

          <div className="reveal-up rounded-[10px] overflow-hidden border border-[#1A6FA8]/15 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col lg:flex-row bg-white">

            {/* Column 1: Sky Blue */}
            <div className="lg:w-1/4 p-8 sm:p-10 bg-[#29A8E0] relative border-b lg:border-b-0 lg:border-r border-[#1A6FA8]/20">
              <div className="w-12 h-12 rounded-[10px] bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading mb-3 leading-snug">Accountability First</h3>
              <p className="text-[14.5px] text-white/90 font-sans leading-relaxed">
                Every AI system we build is auditable, explainable, and transparent. We don&apos;t ship black boxes.
              </p>
            </div>

            {/* Column 2: Dots */}
            <div
              className="lg:w-1/4 p-8 sm:p-10 relative bg-white border-b lg:border-b-0 lg:border-r border-[#1A6FA8]/15"
              style={{ backgroundImage: 'radial-gradient(rgba(143,214,245,0.4) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
            >
              <div className="w-12 h-12 rounded-[10px] bg-[#F0FAFF] border border-[#1A6FA8]/15 flex items-center justify-center text-[#1A6FA8] mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-ink font-heading mb-3 leading-snug">Execution Over Theory</h3>
              <p className="text-[14.5px] text-slate-600 font-sans leading-relaxed">
                We deliver working systems — deployed, tested, and producing measurable results.
              </p>
            </div>

            {/* Column 3: Sky Blue */}
            <div className="lg:w-1/4 p-8 sm:p-10 bg-[#29A8E0] relative border-b lg:border-b-0 lg:border-r border-[#1A6FA8]/20">
              <div className="w-12 h-12 rounded-[10px] bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-heading mb-3 leading-snug">Human + AI Collaboration</h3>
              <p className="text-[14.5px] text-white/90 font-sans leading-relaxed">
                The best outcomes come from pairing intelligent automation with skilled human oversight.
              </p>
            </div>

            {/* Column 4: Dots */}
            <div
              className="lg:w-1/4 p-8 sm:p-10 relative bg-white"
              style={{ backgroundImage: 'radial-gradient(rgba(143,214,245,0.4) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
            >
              <div className="w-12 h-12 rounded-[10px] bg-[#F0FAFF] border border-[#1A6FA8]/15 flex items-center justify-center text-[#1A6FA8] mb-6">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-ink font-heading mb-3 leading-snug">Scale Without Compromise</h3>
              <p className="text-[14.5px] text-slate-600 font-sans leading-relaxed">
                Our systems handle enterprise volume without sacrificing accuracy, speed, or compliance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 6. LEADERSHIP (Executive Deep Dives) ───────────────── */}
      <section className="py-16 lg:py-24 bg-[#E0F4FC]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16 lg:mb-20 reveal">
            <div className="flex justify-center items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                EXECUTIVE LEADERSHIP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink font-heading tracking-tight">
              Our Leadership
            </h2>
          </div>

          <div className="space-y-10 lg:space-y-12">

            {/* Leader 1: Yassir */}
            <div className="reveal-up group flex flex-col md:flex-row items-stretch rounded-3xl md:rounded-[2.5rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.15)] transition-shadow duration-500 overflow-hidden border border-[#1A6FA8]/5">

              {/* Image Box (Side) */}
              <div
                className="w-full md:w-[320px] lg:w-[380px] shrink-0 relative aspect-square md:aspect-auto overflow-hidden bg-transparent"
                style={{ backgroundImage: 'radial-gradient(rgba(26,111,168,0.08) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
              >
                <Image src="/rajayassir.png" alt="Yassir Humayun" fill className="object-contain object-bottom transition-transform duration-700 group-hover:scale-105" />
              </div>

              {/* Text Box (Skyblue Bg + Dots) */}
              <div className="flex-1 relative bg-[#8FD6F5] px-6 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-8 overflow-hidden">
                <div
                  className="absolute inset-0 z-0 opacity-5 transition-opacity duration-500 group-hover:opacity-10"
                  style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }}
                />

                <div className="relative z-10 text-left">
                  <span className="text-slate-700 font-bold text-[11px] tracking-[0.15em] uppercase font-ui block mb-3">Founder & Chairman</span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink font-heading mb-6 tracking-tight">Yassir Humayun <span className="text-slate-700 font-medium text-xl lg:text-2xl ml-1">(Raja Yasir)</span></h3>
                  <div className="space-y-4 text-[15px] sm:text-[1.05rem] font-sans leading-[1.7] max-w-2xl text-slate-800">
                    <p className="text-slate-800"><strong className="text-ink font-semibold">Based in Lahore, Pakistan. BSc Computer Engineering, University of Florida.</strong></p>
                    <p className="text-slate-800">An experienced entrepreneur and founding board member with a demonstrated history in business innovation, leadership, and strategic planning.</p>
                    <p className="text-slate-800">Yassir founded Myer Systems with the vision to deliver accountable, scalable AI systems for enterprise and commercial markets. He brings expertise in conflict resolution, management, and enterprise strategy.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leader 2: Osman */}
            <div className="reveal-up group flex flex-col md:flex-row-reverse items-stretch rounded-3xl md:rounded-[2.5rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.15)] transition-shadow duration-500 overflow-hidden border border-[#1A6FA8]/5">

              {/* Image Box (Side) */}
              <div
                className="w-full md:w-[320px] lg:w-[380px] shrink-0 relative aspect-square md:aspect-auto overflow-hidden bg-transparent"
                style={{ backgroundImage: 'radial-gradient(rgba(26,111,168,0.08) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
              >
                <Image src="/osman-akram.png" alt="Osman Akram" fill className="object-contain object-bottom transition-transform duration-700 group-hover:scale-105" />
              </div>

              {/* Text Box (Skyblue Bg + Dots) */}
              <div className="flex-1 relative bg-[#8FD6F5] px-6 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-8 overflow-hidden">
                <div
                  className="absolute inset-0 z-0 opacity-5 transition-opacity duration-500 group-hover:opacity-10"
                  style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }}
                />

                <div className="relative z-10 text-left">
                  <span className="text-slate-700 font-bold text-[11px] tracking-[0.15em] uppercase font-ui block mb-3">Chief Executive Officer</span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink font-heading mb-6 tracking-tight">Osman Akram</h3>
                  <div className="space-y-4 text-[15px] sm:text-[1.05rem] font-sans leading-[1.7] max-w-2xl text-slate-800">
                    <p className="text-slate-800">Osman leads day-to-day operations, business development, and organisational execution at Myer Systems.</p>
                    <p className="text-slate-800">He is responsible for driving the company&apos;s growth strategy, building key partnerships, and delivering on the mission set by the Founder and Chairman.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leader 3: Ali hamza*/}
            <div className="reveal-up group flex flex-col md:flex-row items-stretch rounded-3xl md:rounded-[2.5rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.15)] transition-shadow duration-500 overflow-hidden border border-[#1A6FA8]/5">

              {/* Image Box (Side) */}
              <div
                className="w-full md:w-[320px] lg:w-[380px] shrink-0 relative aspect-square md:aspect-auto overflow-hidden bg-transparent"
                style={{ backgroundImage: 'radial-gradient(rgba(26,111,168,0.08) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
              >
                <Image src="/alihamza.png" alt="Ali Hamza" fill className="object-contain object-bottom transition-transform duration-700 group-hover:scale-105" />
              </div>

              {/* Text Box (Skyblue Bg + Dots) */}
              <div className="flex-1 relative bg-[#8FD6F5] px-6 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-8 overflow-hidden">
                <div
                  className="absolute inset-0 z-0 opacity-5 transition-opacity duration-500 group-hover:opacity-10"
                  style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }}
                />

                <div className="relative z-10 text-left">
                  <span className="text-slate-700 font-bold text-[11px] tracking-[0.15em] uppercase font-ui block mb-3">Chief Technology Officer</span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink font-heading mb-6 tracking-tight">Ali Hamza</h3>
                  <div className="space-y-4 text-[15px] sm:text-[1.05rem] font-sans leading-[1.7] max-w-2xl text-slate-800">
                    <p className="text-slate-800">Ali drives the technical architecture and AI development strategy at Myer Systems.</p>
                    <p className="text-slate-800">He oversees engineering, AI systems development, and product innovation — ensuring the company&apos;s technology stack remains enterprise-ready, secure, and scalable.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 7. KEY TEAM MEMBERS (Elegant Roster) ───────────────── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8] animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                  CORE TEAM
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink font-heading tracking-tight">Key Team Members</h2>
            </div>
            <div className="h-px bg-[#1A6FA8]/15 flex-1 ml-0 md:ml-12 mb-2" />
          </div>

          <div className="reveal-up max-w-5xl mx-auto rounded-3xl md:rounded-[2rem] border border-[#1A6FA8]/10 bg-white shadow-sm flex flex-col md:flex-row overflow-hidden">
            {[
              { id: 'tasbhia-akbar', name: 'Tasbhia Akbar', role: 'Business & Operations Lead, Myer Systems' },
              { id: 'vaneeza-fatima', name: 'Vaneeza Fatima', role: 'Operations Manager, MedSynthea' },
              { id: 'hasnain-muavia', name: 'Hasnain Muavia', role: 'Senior Software Engineer (AI/ML, DevOps, Agents)' }
            ].map((member, i) => (
              <div
                key={i}
                className={`flex-1 p-8 sm:p-10 flex flex-col items-center text-center group relative overflow-hidden transition-all duration-300 bg-white ${i !== 0 ? 'border-t-[4px] md:border-t-0 md:border-l-[6px] border-[#8FD6F5]' : ''
                  }`}
              >
                {/* Slide Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#E0F4FC] to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />

                {/* Square Profile Image */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 relative z-10 mb-6 rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-500">
                  <Image
                    src={`/images/${member.id}.svg`}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle color overlay on hover */}
                  <div className="absolute inset-0 bg-[#29A8E0]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Text Content */}
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                  <h4 className="text-xl sm:text-[1.4rem] font-bold text-ink font-heading mb-2 tracking-tight group-hover:text-[#1A6FA8] transition-colors">
                    {member.name}
                  </h4>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#29A8E0] font-ui uppercase tracking-[0.15em] leading-[1.6] max-w-[200px] mx-auto block">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 8. FINAL CTA & FOOTER ────────────────────────────── */}
      <CtaBanner />
      <Footer />
    </div>
  );
}

