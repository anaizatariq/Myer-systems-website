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
  Zap,
  Database,
  FileText,
  Lock,
  ArrowRight,
  AlertTriangle,
  FileCheck,
  Gauge
} from 'lucide-react';

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

  // Real-time scroll listener and IntersectionObserver for silky-smooth active state tracking
  useEffect(() => {
    const handleScroll = () => {
      const navOffset = 220;
      let closestIdx = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Check if card has entered upper viewport area
        if (rect.top <= window.innerHeight * 0.65) {
          const dist = Math.abs(rect.top - navOffset);
          if (dist < minDistance) {
            minDistance = dist;
            closestIdx = idx;
          }
        }
      });

      setActiveIdx(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth jump to card on left-item click with ample scroll margin
  const scrollToCard = (idx: number) => {
    const el = cardRefs.current[idx];
    if (el) {
      const navOffset = 150;
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ══════════════════════════════════════════════════════════════════
            1. SECTION HEADER (Exact Cerebrium Split in Normal Document Flow)
        ══════════════════════════════════════════════════════════════════ */}
        <div className="pt-14 sm:pt-20 lg:pt-24 pb-10 sm:pb-16 border-b border-slate-200/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            
            {/* Left Subtitle */}
            <div className="lg:col-span-5">
              <p className="text-base sm:text-lg sm:text-[1.2rem] text-slate-700 font-normal leading-relaxed max-w-md font-sans">
                From autonomous enterprise AI to mission-critical operations, Myer Systems combines deterministic engineering and specialized talent to build dependable, scalable ways of working.
              </p>
            </div>

            {/* Right Heading with Gradient Accent */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-4xl lg:text-[2.85rem]/[1.15] font-semibold tracking-tight text-[#101820] font-sans">
                Built for scale,<br className="hidden sm:inline" />{' '}
                <span className="font-quote italic font-normal text-brand-steel inline-block pr-1">
                  governed by design.
                </span>
              </h2>
            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            2. TWO-COLUMN LAYOUT (CEREBRIUM NATURAL FLOAT SCROLL)
            Left: Sticky at top-32 with 4 pure titles.
            Right: Vertically stacked cards that float past smoothly.
        ══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-10 sm:pt-16 pb-16 sm:pb-24 lg:pb-28 items-start">
          
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
          <div className="lg:col-span-7 space-y-20 sm:space-y-28 lg:space-y-36 pb-20 sm:pb-28">
            
            {/* ══════════════════════════════════════════════════════
                CARD 01: Custom Enterprise AI Systems
                Visual: Horizontal Neural Agent Flow & Pulsing Center Core
            ══════════════════════════════════════════════════════ */}
            <div 
              ref={(el) => (cardRefs.current[0] = el)}
              className="scroll-mt-44 space-y-6"
            >
              <div className="group relative rounded-3xl border border-slate-800/90 bg-[#0B141D] p-4 sm:p-7 shadow-2xl shadow-[#101820]/30 overflow-hidden text-white transition-all duration-300 hover:border-[#29A8E0]/40 min-h-[360px] sm:h-[400px] flex flex-col justify-between">
                
                {/* Ambient Glow */}
                <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[#29A8E0]/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#1A6FA8]/20 blur-3xl" />

                {/* Top Header Badge */}
                <div className="relative flex flex-wrap items-center justify-between gap-2 z-10">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-widest text-slate-300 uppercase">
                      MULTI-AGENT NEURAL PIPELINE
                    </span>
                  </div>
                  <span className="text-[9.5px] sm:text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#29A8E0]/10 text-[#29A8E0] border border-[#29A8E0]/25 font-bold">
                    AUTONOMOUS RUNTIME
                  </span>
                </div>

                {/* Main Dynamic Visual: 3 Interconnected Nodes with Pulsing Center Core */}
                <div className="relative my-auto py-4">
                  {/* Horizontal Connection Beam with Traveling Laser Packet */}
                  <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-[2px] bg-gradient-to-r from-slate-800 via-[#29A8E0]/40 to-slate-800 overflow-hidden">
                    <div className="h-full w-24 bg-gradient-to-r from-transparent via-[#29A8E0] to-transparent animate-beam-travel" />
                  </div>

                  <div className="relative grid grid-cols-3 gap-2 sm:gap-4 items-center z-10">
                    
                    {/* Node 1: Input Streams */}
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="h-14 w-14 rounded-2xl bg-white/[0.04] border border-amber-400/30 flex items-center justify-center shadow-lg relative group-hover:border-amber-400/50 transition-all">
                        <Database className="h-6 w-6 text-amber-400" />
                        <span className="absolute -top-1.5 -right-1.5 h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-white">Data Streams</div>
                        <span className="text-[10px] font-mono text-slate-400">PDFs · ERP · SQL</span>
                      </div>
                    </div>

                    {/* Node 2 (Hero Center): Pulsing AI Core */}
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full flex items-center justify-center">
                        {/* Spinning Radar Ring */}
                        <div className="absolute inset-0 rounded-full border border-dashed border-[#29A8E0]/40 animate-orbit-spin" />
                        {/* Expanding Pulse Ring */}
                        <div className="absolute inset-2 rounded-full border border-[#29A8E0]/30 animate-pulse-radar" />
                        {/* Center Core */}
                        <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-[#1A6FA8] to-[#29A8E0] flex items-center justify-center shadow-[0_0_25px_rgba(41,168,224,0.5)]">
                          <Bot className="h-7 w-7 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-[#29A8E0]">AI Agent Pods</div>
                        <span className="text-[10px] font-mono text-emerald-400 font-semibold">99.6% Confidence</span>
                      </div>
                    </div>

                    {/* Node 3: Governed Enterprise Action */}
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="h-14 w-14 rounded-2xl bg-white/[0.04] border border-emerald-400/30 flex items-center justify-center shadow-lg relative group-hover:border-emerald-400/50 transition-all">
                        <ShieldCheck className="h-6 w-6 text-emerald-400" />
                        <span className="absolute -top-1.5 -right-1.5 h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-white">Governed Sync</div>
                        <span className="text-[10px] font-mono text-emerald-400">Zero Drift Gate</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Bottom Status Chip */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-white/5">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#29A8E0]" />
                    Autonomous Execution with Human Guardrails
                  </span>
                  <span className="text-emerald-400 font-semibold">● ACTIVE</span>
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
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1A6FA8] hover:text-[#1A6FA8] transition-colors group"
                  >
                    <span>Explore Custom Enterprise AI</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════
                CARD 02: Business Process Reengineering
                Visual: Kinetic Velocity Tunnel (Chaos -> 3.2x Velocity)
            ══════════════════════════════════════════════════════ */}
            <div 
              ref={(el) => (cardRefs.current[1] = el)}
              className="scroll-mt-44 space-y-6"
            >
              <div className="group relative rounded-3xl border border-slate-800/90 bg-[#0B141D] p-4 sm:p-7 shadow-2xl shadow-[#101820]/30 overflow-hidden text-white transition-all duration-300 hover:border-[#29A8E0]/40 min-h-[360px] sm:h-[400px] flex flex-col justify-between">
                
                {/* Ambient Glow */}
                <div className="pointer-events-none absolute top-0 right-0 h-56 w-56 rounded-full bg-[#29A8E0]/15 blur-3xl" />

                {/* Top Header */}
                <div className="relative flex flex-wrap items-center justify-between gap-2 z-10">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#29A8E0]" />
                    <span className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-wider text-slate-300 uppercase">
                      PROCESS VELOCITY ENGINE
                    </span>
                  </div>
                  <span className="text-[9.5px] sm:text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 font-bold">
                    BOTTLENECKS ELIMINATED
                  </span>
                </div>

                {/* Main Dynamic Visual: Kinetic Velocity Acceleration */}
                <div className="relative my-auto py-2 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center z-10">
                  
                  {/* Left: Legacy Friction (Dimmed Red) */}
                  <div className="sm:col-span-5 rounded-2xl bg-white/[0.03] border border-rose-500/25 p-4 space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-rose-400">
                      <span>LEGACY STATE</span>
                      <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300">FLAGGED</span>
                    </div>
                    <div className="text-sm font-bold text-slate-300">14 Manual Touchpoints</div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Fragmented department handoffs &amp; spreadsheet queues.
                    </p>
                    <div className="h-1.5 w-full bg-rose-500/20 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500 w-[35%]" />
                    </div>
                  </div>

                  {/* Middle: Kinetic Speed Bars Tunnel */}
                  <div className="sm:col-span-2 flex flex-col items-center justify-center py-2">
                    <div className="flex items-end gap-1 h-12">
                      <div className="w-1.5 bg-[#29A8E0] rounded-full animate-bar-1" />
                      <div className="w-1.5 bg-[#29A8E0] rounded-full animate-bar-2" />
                      <div className="w-1.5 bg-emerald-400 rounded-full animate-bar-3" />
                      <div className="w-1.5 bg-[#29A8E0] rounded-full animate-bar-4" />
                      <div className="w-1.5 bg-emerald-400 rounded-full animate-bar-5" />
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 mt-1 uppercase">Acceleration</span>
                  </div>

                  {/* Right: Modern Velocity Gain (Glowing Cyan/Emerald) */}
                  <div className="sm:col-span-5 rounded-2xl bg-gradient-to-br from-[#1A6FA8]/25 to-emerald-500/10 border border-emerald-500/40 p-4 space-y-2 shadow-lg shadow-emerald-500/10">
                    <div className="flex items-center justify-between text-[10px] font-mono text-emerald-400">
                      <span>STREAMLINED FLOW</span>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">PEAK VELOCITY</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">3.2x</span>
                      <span className="text-xs font-mono text-emerald-300 font-semibold">Faster Cycle Time</span>
                    </div>
                    <p className="text-[11px] text-slate-200 leading-snug">
                      Automated routing &amp; unified digital Standard Operating Procedures.
                    </p>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#29A8E0] to-emerald-400 rounded-full w-[96%]" />
                    </div>
                  </div>

                </div>

                {/* Bottom Status Chip */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-white/5">
                  <span className="flex items-center gap-1.5">
                    <Workflow className="h-3.5 w-3.5 text-[#29A8E0]" />
                    Predictable Throughput · Zero Process Drift
                  </span>
                  <span className="text-emerald-400 font-semibold">-68% LATENCY</span>
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
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1A6FA8] hover:text-[#1A6FA8] transition-colors group"
                  >
                    <span>Explore Process Reengineering</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════
                CARD 03: Healthcare Technology & Medical Billing
                Visual: Clinical Cardiogram Pulse & Clean Claim Seal
            ══════════════════════════════════════════════════════ */}
            <div 
              ref={(el) => (cardRefs.current[2] = el)}
              className="scroll-mt-44 space-y-6"
            >
              <div className="group relative rounded-3xl border border-slate-800/90 bg-[#0B141D] p-4 sm:p-7 shadow-2xl shadow-[#101820]/30 overflow-hidden text-white transition-all duration-300 hover:border-[#29A8E0]/40 min-h-[360px] sm:h-[400px] flex flex-col justify-between">
                
                {/* Ambient Glow */}
                <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#1A6FA8]/15 blur-3xl" />

                {/* Top Header */}
                <div className="relative flex flex-wrap items-center justify-between gap-2 z-10">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-widest text-slate-300 uppercase">
                      MEDSYNTHEA RCM · CLINICAL-TO-CASH
                    </span>
                  </div>
                  <span className="text-[9.5px] sm:text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 font-bold flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3 text-emerald-400" />
                    HIPAA &amp; BAA CERTIFIED
                  </span>
                </div>

                {/* Main Visual: Neon Cardiogram ECG Line with Expanding Ripple Seal */}
                <div className="relative my-auto py-2 z-10 flex flex-col items-center text-center">
                  
                  {/* SVG ECG Cardiogram Line flowing horizontally */}
                  <div className="w-full max-w-md h-12 relative overflow-hidden flex items-center justify-center">
                    <svg viewBox="0 0 400 60" className="w-full h-full stroke-emerald-400 fill-none stroke-[2.5] opacity-90 animate-ecg">
                      <path d="M0,30 L90,30 L105,10 L120,50 L135,15 L145,38 L155,30 L230,30 L245,10 L260,50 L275,15 L285,38 L295,30 L400,30" />
                    </svg>
                  </div>

                  {/* Floating Verification Seal */}
                  <div className="mt-2 relative flex flex-col items-center">
                    <div className="relative h-16 w-16 rounded-full flex items-center justify-center mb-2">
                      <div className="absolute inset-0 rounded-full border border-emerald-400/40 animate-pulse-radar" />
                      <div className="h-12 w-12 rounded-full bg-emerald-500/20 border border-emerald-400/60 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                        <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-white font-sans">
                      99.1% First-Pass Clean Claim
                    </div>
                    <p className="text-xs text-slate-300 max-w-sm mt-1">
                      Automated pre-filing denial scrubber checks 2,400+ payer guidelines with AAPC certified review.
                    </p>
                  </div>

                </div>

                {/* Bottom Status Chip */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-white/5">
                  <span className="flex items-center gap-1.5">
                    <Activity className="h-3.5 w-3.5 text-[#29A8E0]" />
                    Dallas HQ Governance ⇄ Lahore AAPC Hub
                  </span>
                  <span className="text-[#29A8E0] font-semibold">&lt; 28 DAYS IN A/R</span>
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
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1A6FA8] hover:text-[#1A6FA8] transition-colors group"
                  >
                    <span>Explore Healthcare &amp; Medical Billing</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════
                CARD 04: Intelligent Resource Augmentation
                Visual: Global Dual-Hub Synchrony Orbit (Dallas <-> Lahore)
            ══════════════════════════════════════════════════════ */}
            <div 
              ref={(el) => (cardRefs.current[3] = el)}
              className="scroll-mt-44 space-y-6"
            >
              <div className="group relative rounded-3xl border border-slate-800/90 bg-[#0B141D] p-4 sm:p-7 shadow-2xl shadow-[#101820]/30 overflow-hidden text-white transition-all duration-300 hover:border-[#29A8E0]/40 min-h-[360px] sm:h-[400px] flex flex-col justify-between">
                
                {/* Ambient Glow */}
                <div className="pointer-events-none absolute -top-20 right-10 h-56 w-56 rounded-full bg-[#29A8E0]/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-[#1A6FA8]/20 blur-3xl" />

                {/* Top Header */}
                <div className="relative flex flex-wrap items-center justify-between gap-2 z-10">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#29A8E0] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#29A8E0]" />
                    </span>
                    <span className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-widest text-slate-300 uppercase">
                      GLOBAL DUAL-HUB SYNCHRONY
                    </span>
                  </div>
                  <span className="text-[9.5px] sm:text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#1A6FA8]/20 text-[#29A8E0] border border-[#29A8E0]/30 font-bold flex items-center gap-1">
                    <Globe2 className="h-3 w-3 text-[#29A8E0]" />
                    EMBEDDED PODS
                  </span>
                </div>

                {/* Main Visual: Two Planetary Hubs connected by Orbiting AI Agent Satellite */}
                <div className="relative my-auto py-2 z-10">
                  
                  {/* Connecting Orbital Arc */}
                  <div className="absolute top-1/2 left-16 right-16 -translate-y-1/2 h-[1px] bg-gradient-to-r from-[#29A8E0]/40 via-emerald-400/40 to-[#29A8E0]/40" />

                  <div className="grid grid-cols-1 sm:grid-cols-11 gap-3 items-center">
                    
                    {/* Hub 1: Dallas HQ */}
                    <div className="sm:col-span-4 rounded-2xl bg-white/[0.04] border border-[#29A8E0]/30 p-4 space-y-1.5 text-left shadow-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#29A8E0]">US HQ</span>
                        <Building2 className="h-4 w-4 text-[#29A8E0]" />
                      </div>
                      <div className="text-sm font-bold text-white">Dallas, Texas</div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        Executive governance, US contracts &amp; SLA accountability.
                      </p>
                    </div>

                    {/* Orbiting Satellite Center */}
                    <div className="sm:col-span-3 flex flex-col items-center justify-center py-2 relative">
                      <div className="relative h-14 w-14 rounded-full flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-dashed border-[#29A8E0]/50 animate-orbit-spin" />
                        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#1A6FA8] to-[#29A8E0] flex items-center justify-center shadow-[0_0_15px_rgba(41,168,224,0.6)]">
                          <Bot className="h-5 w-5 text-white animate-pulse" />
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#29A8E0] font-bold mt-1 uppercase tracking-wider">
                        AI Leverage
                      </span>
                    </div>

                    {/* Hub 2: Lahore Global Hub */}
                    <div className="sm:col-span-4 rounded-2xl bg-gradient-to-br from-white/[0.03] to-emerald-500/10 border border-emerald-500/30 p-4 space-y-1.5 text-left shadow-lg">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-emerald-400">DELIVERY HUB</span>
                        <Globe2 className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div className="text-sm font-bold text-white">Lahore Hub</div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        AAPC certified specialists, software pods &amp; dedicated QA.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Bottom Status Chip */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-white/5">
                  <span className="flex items-center gap-1.5">
                    <UserCheck className="h-3.5 w-3.5 text-emerald-400" />
                    Scale Without Overhead Bloat
                  </span>
                  <span className="text-emerald-400 font-semibold">72H RAPID DEPLOY</span>
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
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1A6FA8] hover:text-[#1A6FA8] transition-colors group"
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

