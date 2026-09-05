'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  Activity, 
  Globe2, 
  Building2,
  Check,
  Bot,
  UserCheck,
  Sparkles,
  Workflow,
  TrendingUp,
  Layers,
  Zap
} from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';

interface CapabilityPillar {
  id: string;
  num: string;
  title: string;
  badge: string;
  headline: string;
  description: string;
  href: string;
  tags: string[];
}

const PILLARS: CapabilityPillar[] = [
  {
    id: 'enterprise-ai',
    num: '01',
    title: 'Custom Enterprise AI Systems',
    badge: 'ENTERPRISE AI',
    headline: 'Custom AI systems built for accountability and control',
    description: 'We develop custom AI systems that automate routine processes, structure messy data, and keep human leaders in full control.',
    href: '/services#ai-solutions',
    tags: ['Automated Workflows', 'Error Reduction', 'Human Checkpoints'],
  },
  {
    id: 'reengineering',
    num: '02',
    title: 'Business Process Reengineering',
    badge: 'PROCESS REENGINEERING',
    headline: 'Fixing workflow bottlenecks before automating',
    description: 'We discover operational friction across your teams, eliminate unnecessary manual steps, and rebuild smoother, more predictable processes.',
    href: '/services#saas',
    tags: ['Bottleneck Diagnostics', 'Eliminating Silos', 'Standard Operating Procedures'],
  },
  {
    id: 'healthcare-rcm',
    num: '03',
    title: 'Healthcare Technology & Medical Billing',
    badge: 'HEALTHCARE OPERATIONS',
    headline: 'Dependable medical billing and clinical workflow systems',
    description: 'End-to-end medical billing, coding, and workflow technology that reduces claim rejections and speeds up reimbursements.',
    href: '/services#rcm',
    tags: ['Pre-Filing Verification', 'Faster Reimbursements', 'Transparent Cash Flow'],
  },
  {
    id: 'resource-augmentation',
    num: '04',
    title: 'Intelligent Resource Augmentation',
    badge: 'HYBRID DELIVERY MODEL',
    headline: 'Your AI-native team: human expertise and AI agents',
    description: 'We combine trained operational specialists from our global hub with custom AI agents — working side by side to help your team scale without sacrificing quality.',
    href: '/services#resource-augmentation',
    tags: ['Trained Specialists', 'Custom AI Agents', 'Working Side by Side'],
  },
];

export function Disciplines() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Subtab switcher for Card 01
  const [benchmarkSubtab, setBenchmarkSubtab] = useState<'pipeline' | 'hash'>('pipeline');

  // Exact Cerebrium-style IntersectionObserver for scroll-driven active state
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((el, idx) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIdx(idx);
            }
          });
        },
        {
          rootMargin: '-25% 0px -40% 0px',
          threshold: 0.1,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Smooth jump to card on left-item click
  const scrollToCard = (idx: number) => {
    const el = cardRefs.current[idx];
    if (el) {
      const navOffset = 140;
      const targetPosition = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      setActiveIdx(idx);
    }
  };

  return (
    <section 
      id="disciplines" 
      className="relative bg-[#F8FAFC] border-b border-border/70"
    >
      {/* ── Background Subtle Ambient Glows ── */}
      <div 
        className="pointer-events-none absolute top-24 right-1/4 h-[550px] w-[550px] rounded-full bg-[#29A8E0]/7 blur-[160px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-36 left-10 h-[450px] w-[450px] rounded-full bg-[#1A6FA8]/6 blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ══════════════════════════════════════════════════════════════════
            1. SECTION HEADER (Exact Cerebrium Split in Normal Document Flow)
        ══════════════════════════════════════════════════════════════════ */}
        <div className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 border-b border-slate-200/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            
            {/* Left Subtitle */}
            <div className="lg:col-span-5">
              <p className="text-base sm:text-lg text-slate-500 font-medium font-ui leading-relaxed max-w-sm">
                From enterprise AI to healthcare operations, Myer Systems combines technology and specialised expertise to build more dependable, scalable ways of working.
              </p>
            </div>

            {/* Right Heading with Gradient Accent */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem]/[1.15] font-semibold tracking-tight text-[#101820] font-sans">
                Built for scale,<br className="hidden sm:inline" />{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A6FA8] via-[#29A8E0] to-[#1A6FA8]">
                  governed by design
                </span>
              </h2>
            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            2. TWO-COLUMN LAYOUT (CEREBRIUM NATURAL FLOAT SCROLL)
            Left: Sticky at top-32 with 4 pure titles (no taglines).
            Right: Vertically stacked cards that float past smoothly.
        ══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-12 sm:pt-16 items-start">
          
          {/* ──────────────────────────────────────────────────────────
              LEFT COLUMN: Sticky Navigation Sidebar
          ────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-8 z-10">
            
            {/* Monospace Eyebrow */}
            <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest text-slate-500 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8]" />
              WHY CHOOSE US
            </div>

            {/* The 4 Clean Points (Cerebrium-Style Typography) */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              {PILLARS.map((pillar, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => scrollToCard(idx)}
                    className={`group w-full text-left transition-all duration-300 ease-out block cursor-pointer select-none ${
                      isActive
                        ? 'opacity-100 translate-x-2'
                        : 'opacity-35 hover:opacity-75 hover:translate-x-1'
                    }`}
                  >
                    <div className={`text-2xl sm:text-3xl lg:text-[2.2rem] leading-[1.2] tracking-tight font-sans transition-colors duration-300 ${
                      isActive
                        ? 'text-[#101820] font-semibold'
                        : 'text-slate-400 group-hover:text-slate-600 font-normal'
                    }`}>
                      {pillar.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Stage Progress Indicator */}
            <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between max-w-xs">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-semibold text-slate-400">STAGE</span>
                <span className="text-xs font-mono font-bold text-[#101820]">
                  0{activeIdx + 1} / 0{PILLARS.length}
                </span>
                <span className="text-[10px] font-mono text-slate-400 ml-1">
                  · Scroll to explore
                </span>
              </div>

              <div className="h-1 w-24 rounded-full bg-slate-200 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#1A6FA8] to-[#29A8E0] transition-all duration-300 ease-out"
                  style={{ width: `${((activeIdx + 1) / PILLARS.length) * 100}%` }}
                />
              </div>
            </div>

          </div>

          {/* ──────────────────────────────────────────────────────────
              RIGHT COLUMN: Vertically Stacked Feature Cards (Natural Flow)
          ────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-28 sm:space-y-36 lg:space-y-44 pb-24">
            
            {/* ══════════════════════════════════════════════════════
                CARD 01: Custom Enterprise AI Systems
            ══════════════════════════════════════════════════════ */}
            <div 
              ref={(el) => (cardRefs.current[0] = el)}
              className="scroll-mt-36 space-y-6"
            >
              <div className="group relative rounded-3xl border border-slate-200/90 bg-[#0B141D] p-6 sm:p-8 shadow-2xl shadow-[#101820]/15 overflow-hidden text-white transition-all duration-300 hover:border-[#29A8E0]/40">
                
                {/* Ambient Glow */}
                <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#29A8E0]/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#1A6FA8]/25 blur-3xl" />

                {/* Top Nav Switcher */}
                <div className="relative flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
                  <div className="inline-flex rounded-xl bg-white/5 p-1 border border-white/10 backdrop-blur-md">
                    <button
                      onClick={() => setBenchmarkSubtab('pipeline')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        benchmarkSubtab === 'pipeline'
                          ? 'bg-[#1A6FA8] text-white shadow-sm font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Intelligent Pipeline
                    </button>
                    <button
                      onClick={() => setBenchmarkSubtab('hash')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        benchmarkSubtab === 'hash'
                          ? 'bg-[#1A6FA8] text-white shadow-sm font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Verification Ledger
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-emerald-300">
                      ACTIVE ENTERPRISE SYSTEM
                    </span>
                  </div>
                </div>

                {/* Benchmark Execution Bars */}
                <div className="mt-5 rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 backdrop-blur-xl space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>TASK ACCURACY &amp; RELIABILITY COMPARISON</span>
                    <span className="text-[#29A8E0]">ACCOUNTABLE EXECUTION</span>
                  </div>

                  {/* Benchmark 1 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono font-semibold text-white flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-[#29A8E0]" />
                        MYER SYSTEMS HYBRID AI ENGINE
                      </span>
                      <span className="font-mono font-bold text-[#29A8E0] text-sm">95% High Speed &amp; Verified</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#1A6FA8] to-[#29A8E0] rounded-full w-[95%] shadow-[0_0_12px_rgba(41,168,224,0.6)]" />
                    </div>
                  </div>

                  {/* Benchmark 2 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-slate-300">HUMAN-IN-THE-LOOP CHECKPOINT</span>
                      <span className="font-mono font-semibold text-slate-200">88% Specialist Approved</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-blue-400/80 rounded-full w-[88%]" />
                    </div>
                  </div>

                  {/* Benchmark 3 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-slate-400">GENERIC / UNCHECKED AI PROMPTS</span>
                      <span className="font-mono text-rose-400">35% High Error Rate &amp; Drift</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-rose-500/40 rounded-full w-[35%]" />
                    </div>
                  </div>

                  {/* Micro Footer Inside Card */}
                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>CONTROL : ROLE-BASED ACCESS &amp; SUPERVISION</span>
                    <span className="text-emerald-300">● Checkpoints Active</span>
                  </div>
                </div>

                {/* Card Bottom Status */}
                <div className="mt-5 flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                  <span>DEPLOYMENT : SECURE ENTERPRISE CLOUD</span>
                  <span className="text-[#29A8E0]">HUMAN GOVERNANCE ACTIVE</span>
                </div>
              </div>

              {/* Text & Capability Details Below Visual */}
              <div className="space-y-3 px-1">
                <div className="inline-block text-xs font-mono font-bold tracking-wider text-[#1A6FA8] uppercase">
                  • 01 {PILLARS[0].badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101820]">
                  {PILLARS[0].headline}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {PILLARS[0].description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {PILLARS[0].tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-700 shadow-2xs">
                      <Check className="h-3 w-3 text-[#1A6FA8]" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <Link 
                    href={PILLARS[0].href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1A6FA8] hover:text-[#101820] transition-colors group"
                  >
                    <span>Explore Custom Enterprise AI</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════
                CARD 02: Business Process Reengineering
            ══════════════════════════════════════════════════════ */}
            <div 
              ref={(el) => (cardRefs.current[1] = el)}
              className="scroll-mt-36 space-y-6"
            >
              <div className="group relative rounded-3xl border border-[#29A8E0]/30 bg-gradient-to-br from-white via-[#F4FAFD] to-[#EAF5FC] p-6 sm:p-8 shadow-xl shadow-[#1A6FA8]/10 overflow-hidden transition-all duration-300 hover:border-[#1A6FA8]/40">
                
                {/* Ambient Highlight */}
                <div className="pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full bg-[#29A8E0]/15 blur-2xl" />

                {/* Top Cockpit Header */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#29A8E0]" />
                    <span className="text-xs font-mono font-bold tracking-wider text-[#101820] uppercase">
                      WORKFLOW DIAGNOSTICS : PROCESS REENGINEERING
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    ● BOTTLENECKS REMOVED
                  </span>
                </div>

                {/* 3 Operational Focus Areas */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 my-5">
                  <div className="rounded-2xl bg-white p-4 border border-slate-200/80 shadow-xs text-center sm:text-left">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">DIAGNOSE</span>
                    <div className="mt-1 text-lg sm:text-xl font-bold text-[#101820] font-sans">
                      Friction
                    </div>
                    <span className="text-[11px] text-[#1A6FA8] font-semibold block mt-0.5">Identified &amp; Mapped</span>
                  </div>

                  <div className="rounded-2xl bg-white p-4 border border-slate-200/80 shadow-xs text-center sm:text-left">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">RESTRUCTURE</span>
                    <div className="mt-1 text-lg sm:text-xl font-bold text-[#1A6FA8] font-sans">
                      Streamlined
                    </div>
                    <span className="text-[11px] text-emerald-600 block mt-0.5">Zero Redundant Steps</span>
                  </div>

                  <div className="rounded-2xl bg-white p-4 border border-slate-200/80 shadow-xs text-center sm:text-left">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">VELOCITY</span>
                    <div className="mt-1 text-lg sm:text-xl font-bold text-[#101820] font-sans">
                      Predictable
                    </div>
                    <span className="text-[11px] text-slate-500 block mt-0.5">Faster Cycle Time</span>
                  </div>
                </div>

                {/* 4-Stage Modernization Pipeline */}
                <div className="rounded-2xl bg-white/90 border border-slate-200/80 p-5 space-y-3 shadow-xs">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>OPERATIONAL MODERNIZATION PIPELINE</span>
                    <span className="text-[#1A6FA8] font-semibold">LEAN EXECUTION</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-mono text-slate-400 block">STEP 01</span>
                      <span className="text-xs font-semibold text-slate-700 block mt-0.5">Process Audit</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-mono text-slate-400 block">STEP 02</span>
                      <span className="text-xs font-semibold text-slate-700 block mt-0.5">Remove Friction</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-mono text-slate-400 block">STEP 03</span>
                      <span className="text-xs font-semibold text-slate-700 block mt-0.5">Smart Routing</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
                      <span className="text-[10px] font-mono text-emerald-600 block">STEP 04</span>
                      <span className="text-xs font-bold block mt-0.5">Peak Velocity</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Footer Info */}
                <div className="mt-5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>METHODOLOGY : LEAN REENGINEERING &amp; SOPS</span>
                  <span className="text-[#1A6FA8] font-semibold">CONTINUOUS WORKFLOW AUDIT</span>
                </div>
              </div>

              {/* Text & Capability Details Below Visual */}
              <div className="space-y-3 px-1">
                <div className="inline-block text-xs font-mono font-bold tracking-wider text-[#1A6FA8] uppercase">
                  • 02 {PILLARS[1].badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101820]">
                  {PILLARS[1].headline}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {PILLARS[1].description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {PILLARS[1].tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-700 shadow-2xs">
                      <Check className="h-3 w-3 text-[#1A6FA8]" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <Link 
                    href={PILLARS[1].href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1A6FA8] hover:text-[#101820] transition-colors group"
                  >
                    <span>Explore Process Reengineering</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════
                CARD 03: Healthcare Operations & Dual-Hub Synchrony
            ══════════════════════════════════════════════════════ */}
            <div 
              ref={(el) => (cardRefs.current[2] = el)}
              className="scroll-mt-36 space-y-6"
            >
              <div className="group relative rounded-3xl border border-slate-200/90 bg-[#0B141D] p-6 sm:p-8 shadow-2xl shadow-[#101820]/15 overflow-hidden text-white transition-all duration-300 hover:border-[#29A8E0]/40">
                
                {/* Ambient Mesh */}
                <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-[#1A6FA8]/20 blur-3xl" />

                {/* Top Header */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#29A8E0]">
                      GLOBAL HEALTHCARE OPERATIONS
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    DUAL-HUB ACTIVE
                  </span>
                </div>

                {/* Dual Nodes Visual */}
                <div className="my-5 rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 backdrop-blur-md relative overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-center">
                    
                    {/* Node 1: Dallas */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5 hover:border-[#29A8E0]/50 transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#29A8E0] uppercase tracking-wider">
                          HQ JURISDICTION
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">US-CENTRAL</span>
                      </div>
                      <div className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-[#29A8E0]" />
                        Dallas, Texas HQ
                      </div>
                      <p className="text-xs text-slate-300">
                        Corporate Governance, Executive Leadership, US Compliance &amp; Texas Corporate Law.
                      </p>
                      <div className="pt-1 text-[11px] font-mono text-emerald-300">
                        ● Direct US Contractual Entity
                      </div>
                    </div>

                    {/* Node 2: Lahore */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5 hover:border-[#29A8E0]/50 transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                          PRODUCTION HUB
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">PK-PUNJAB</span>
                      </div>
                      <div className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                        <Globe2 className="h-4 w-4 text-emerald-400" />
                        Lahore Global Hub
                      </div>
                      <p className="text-xs text-slate-300">
                        AAPC/AHIMA Certified Billing Specialists, Dedicated Delivery Pods, Continuous Execution.
                      </p>
                      <div className="pt-1 text-[11px] font-mono text-[#29A8E0]">
                        ● Disciplined Reimbursement Velocity
                      </div>
                    </div>
                  </div>

                  {/* Telemetry Bridge */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Activity className="h-3.5 w-3.5 text-[#29A8E0]" />
                      COMMUNICATION : DIRECT SUPERVISION &amp; SOPS
                    </span>
                    <span className="text-emerald-400">ZERO PROCESS DRIFT</span>
                  </div>
                </div>

                {/* Bottom Strip */}
                <div className="rounded-xl bg-white/5 p-3 text-xs font-mono text-slate-300 flex flex-wrap items-center justify-between">
                  <span>OPERATIONS : DALLAS TX (US HQ) ⇄ LAHORE HUB (GLOBAL DELIVERY)</span>
                  <span className="text-emerald-400">HIPAA COMPLIANT &amp; BAA READY</span>
                </div>
              </div>

              {/* Text & Capability Details Below Visual */}
              <div className="space-y-3 px-1">
                <div className="inline-block text-xs font-mono font-bold tracking-wider text-[#1A6FA8] uppercase">
                  • 03 {PILLARS[2].badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101820]">
                  {PILLARS[2].headline}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {PILLARS[2].description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {PILLARS[2].tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-700 shadow-2xs">
                      <Check className="h-3 w-3 text-[#1A6FA8]" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <Link 
                    href={PILLARS[2].href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1A6FA8] hover:text-[#101820] transition-colors group"
                  >
                    <span>Explore Healthcare &amp; Medical Billing</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════
                CARD 04: Intelligent Resource Augmentation (Human + AI Agent)
            ══════════════════════════════════════════════════════ */}
            <div 
              ref={(el) => (cardRefs.current[3] = el)}
              className="scroll-mt-36 space-y-6"
            >
              <div className="group relative rounded-3xl border border-slate-200/90 bg-[#0B141D] p-6 sm:p-8 shadow-2xl shadow-[#101820]/15 overflow-hidden text-white transition-all duration-300 hover:border-[#29A8E0]/40">
                
                {/* Ambient Glow */}
                <div className="pointer-events-none absolute -top-20 right-10 h-64 w-64 rounded-full bg-[#29A8E0]/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-[#1A6FA8]/20 blur-3xl" />

                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono font-semibold text-slate-300 tracking-wider">
                      THE DELIVERY MODEL · EMBEDDED PODS
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-bold flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    HYBRID SYNERGY ACTIVE
                  </span>
                </div>

                {/* Visual Formula: Human + AI Agent = AI-Native Team */}
                <div className="mt-5 rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 backdrop-blur-md">
                  <div className="grid grid-cols-1 md:grid-cols-11 gap-3 sm:gap-2 items-center text-center">
                    
                    {/* Box 1: Human Specialist */}
                    <div className="md:col-span-3 rounded-xl bg-white/5 border border-white/10 p-3.5 space-y-1.5 text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#29A8E0] uppercase tracking-wider">
                          HUMAN OPERATORS
                        </span>
                        <UserCheck className="h-4 w-4 text-[#29A8E0]" />
                      </div>
                      <div className="text-sm font-bold text-white">
                        AI-Fluent Specialists
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        Trained professionals handling context, exceptions &amp; quality.
                      </p>
                    </div>

                    {/* Operator + */}
                    <div className="md:col-span-1 flex items-center justify-center py-1">
                      <div className="h-7 w-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-base text-[#29A8E0]">
                        +
                      </div>
                    </div>

                    {/* Box 2: Trained AI Agents */}
                    <div className="md:col-span-3 rounded-xl bg-white/5 border border-white/10 p-3.5 space-y-1.5 text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#29A8E0] uppercase tracking-wider">
                          AUTOMATION
                        </span>
                        <Bot className="h-4 w-4 text-[#29A8E0]" />
                      </div>
                      <div className="text-sm font-bold text-white">
                        Trained AI Agents
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        Automated intake, routine routing &amp; rapid data execution.
                      </p>
                    </div>

                    {/* Operator = */}
                    <div className="md:col-span-1 flex items-center justify-center py-1">
                      <div className="h-7 w-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-base text-emerald-400">
                        =
                      </div>
                    </div>

                    {/* Box 3: Embedded AI-Native Team */}
                    <div className="md:col-span-3 rounded-xl bg-gradient-to-br from-[#1A6FA8]/30 via-white/5 to-emerald-500/10 border border-[#29A8E0]/40 p-3.5 space-y-1.5 text-left shadow-lg shadow-[#1A6FA8]/20">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                          YOUR TEAM
                        </span>
                        <Sparkles className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div className="text-sm font-bold text-white">
                        AI-Native Scale
                      </div>
                      <p className="text-[11px] text-slate-200 leading-snug">
                        Immediate operational capacity without bloated overhead.
                      </p>
                    </div>

                  </div>

                  {/* Philosophy banner */}
                  <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center gap-2.5 text-xs text-slate-300 font-sans">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] shrink-0" />
                    <span className="italic">
                      &quot;Our mission is not to replace humans. It is to empower ambitious teams with AI leverage.&quot;
                    </span>
                  </div>
                </div>

                {/* Telemetry Stats */}
                <div className="mt-5 grid grid-cols-3 gap-3 text-center font-mono text-xs">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 block">COLLABORATION</span>
                    <span className="text-white font-bold block mt-0.5 text-sm">Instant Handoff</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 block">CAPACITY</span>
                    <span className="text-[#29A8E0] font-bold block mt-0.5 text-sm">Elastic Pods</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 block">QUALITY</span>
                    <span className="text-emerald-400 font-bold block mt-0.5 text-sm">Human Supervised</span>
                  </div>
                </div>
              </div>

              {/* Text & Capability Details Below Visual */}
              <div className="space-y-3 px-1">
                <div className="inline-block text-xs font-mono font-bold tracking-wider text-[#1A6FA8] uppercase">
                  • 04 {PILLARS[3].badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101820]">
                  {PILLARS[3].headline}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {PILLARS[3].description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {PILLARS[3].tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-700 shadow-2xs">
                      <Check className="h-3 w-3 text-[#1A6FA8]" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <Link 
                    href={PILLARS[3].href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1A6FA8] hover:text-[#101820] transition-colors group"
                  >
                    <span>Explore Resource Augmentation</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
