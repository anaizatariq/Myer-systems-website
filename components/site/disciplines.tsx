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
    title: 'Enterprise AI Solutions',
    badge: 'ENTERPRISE AI SOLUTIONS',
    headline: 'Practical AI Systems Built for Real Workflows',
    description: 'Custom AI systems engineered to automate complex workflows, extract data, and reduce repetitive business tasks without losing human control.',
    href: '/services#ai-solutions',
    tags: ['Smart Automation', 'Data Extraction', 'Human Guardrails'],
  },
  {
    id: 'workflow-automation',
    num: '02',
    title: 'Autonomous Workflow & Automation',
    badge: 'WORKFLOW & AUTOMATION',
    headline: 'Process Automation That Removes Bottlenecks',
    description: 'End-to-end process automation that speeds up task handoffs, eliminates repetitive data entry, and keeps operations running smoothly.',
    href: '/services#ai-solutions',
    tags: ['Zero Bottlenecks', 'Faster Handoffs', 'Consistent Quality'],
  },
  {
    id: 'reengineering',
    num: '03',
    title: 'Business Process Reengineering',
    badge: 'PROCESS REENGINEERING',
    headline: 'Fixing Inefficient Workflows Before Automating',
    description: 'We analyze your daily operations, find hidden friction points, and rebuild processes so your teams move with predictable speed.',
    href: '/services#saas',
    tags: ['Workflow Audits', 'Friction Elimination', 'Standardized Procedures'],
  },
  {
    id: 'saas-platforms',
    num: '04',
    title: 'Industry SaaS & Scalable Teams',
    badge: 'SAAS & DELIVERY TEAMS',
    headline: 'Software Platforms and Teams Built to Scale',
    description: 'Scalable software products paired with trained delivery teams to give your business the technology and operational capacity to grow.',
    href: '/services#saas',
    tags: ['Purpose-Built SaaS', 'Dedicated Delivery', 'Compliance Ready'],
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
      className="relative bg-[#E0F4FC] border-b border-[#29A8E0]/10"
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
            1. SECTION HEADER: Core Capabilities · What We Build
        ══════════════════════════════════════════════════════════════════ */}
        <div className="pt-14 sm:pt-20 lg:pt-24 pb-10 sm:pb-16 border-b border-slate-200/70">
          <div className="flex flex-col space-y-4">
            
            {/* Section Eyebrow */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-[#29A8E0] px-4 py-1.5 mb-6 shadow-md shadow-[#29A8E0]/20">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white font-ui">
              WHAT WE DO · CORE CAPABILITIES
            </span>
          </div>

            {/* H2 Section Title & Description Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pt-1">
              <div className="lg:col-span-8">
                <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem]/[1.1] font-semibold tracking-tight text-ink font-sans">
                  Technology and teams built to scale your business.
                </h2>
              </div>
              <div className="lg:col-span-4">
                <p className="text-base sm:text-[17px] text-slate-600 font-normal leading-relaxed font-sans mb-1.5">
                  We build the technology you need and provide the operational teams to run it, giving your business clarity, speed, and dependable execution.
                </p>
              </div>
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
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-slate-500 uppercase font-ui">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8]" />
              CORE CAPABILITIES
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
                    <div className={`text-xl sm:text-2xl lg:text-[1.85rem] leading-[1.3] tracking-tight font-sans transition-colors duration-300 ${
                      isActive
                        ? 'text-ink font-semibold'
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
                <span className="text-xs font-mono font-bold text-ink">
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
              <div className="group relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-200/80 aspect-[4/3] sm:aspect-video w-full bg-slate-100">
                <img 
                  src="/capabilities/enterprise-ai.jpeg" 
                  alt="Enterprise AI Solutions"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Subtle top-left badge overlay for enterprise feel */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink/75 px-3 py-1.5 backdrop-blur-md shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-white font-ui">
                    AI CAPABILITY
                  </span>
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
              <div className="group relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-200/80 aspect-[4/3] sm:aspect-video w-full bg-slate-100">
                <img 
                  src="/capabilities/workflow-automation.png" 
                  alt="Autonomous Workflow & Automation"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Subtle top-left badge overlay */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink/75 px-3 py-1.5 backdrop-blur-md shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-white font-ui">
                    AUTOMATION
                  </span>
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
              <div className="group relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-200/80 aspect-[4/3] sm:aspect-video w-full bg-slate-100">
                <img 
                  src="/capabilities/process-reengineering.png" 
                  alt="Business Process Reengineering"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Subtle top-left badge overlay */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink/75 px-3 py-1.5 backdrop-blur-md shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-white font-ui">
                    REENGINEERING
                  </span>
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
              <div className="group relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-200/80 aspect-[4/3] sm:aspect-video w-full bg-slate-100">
                <img 
                  src="/capabilities/scalable-teams.png" 
                  alt="Industry SaaS & Scalable Teams"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Subtle top-left badge overlay */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink/75 px-3 py-1.5 backdrop-blur-md shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8] animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-white font-ui">
                    SCALABLE TEAMS
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

