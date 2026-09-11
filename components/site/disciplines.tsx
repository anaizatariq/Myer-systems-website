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
  image: string;
  dotColor: string;
}

const PILLARS: CapabilityPillar[] = [
  {
    id: 'enterprise-ai',
    num: '01',
    title: 'Enterprise-Grade AI Solutions',
    badge: 'AI AUTOMATION',
    headline: 'Custom AI that does the heavy lifting.',
    description: 'We build enterprise-grade AI automation systems that plug directly into your existing operations, eliminating manual data entry and repetitive workflows.',
    href: '/services#ai',
    tags: ['Workflow Automation', 'Data Extraction', 'Task Routing'],
    image: '/capabilities/enterprise-ai.jpeg',
    dotColor: 'bg-[#29A8E0]',
  },
  {
    id: 'saas-products',
    num: '02',
    title: 'Industry SaaS Products',
    badge: 'SOFTWARE PLATFORMS',
    headline: 'Ready-to-deploy platforms for complex industries.',
    description: 'Scalable software products built to solve specific industry bottlenecks, giving your business the operational capacity to grow without massive overhead.',
    href: '/services#saas',
    tags: ['Purpose-Built', 'Scalable Architecture', 'Secure Infrastructure'],
    image: '/dashboard-mockup.jpg',
    dotColor: 'bg-emerald-400',
  },
  {
    id: 'reengineering',
    num: '03',
    title: 'Business Reengineering',
    badge: 'PROCESS OPTIMIZATION',
    headline: 'Fix the process before you automate it.',
    description: 'We analyze your daily operations to find hidden friction points, rebuilding your processes so your teams move with predictable speed and perfect visibility.',
    href: '/services#reengineering',
    tags: ['Workflow Audits', 'Bottleneck Removal', 'Standardization'],
    image: '/capabilities/process-reengineering.png',
    dotColor: 'bg-amber-400',
  },
  {
    id: 'resource-augmentation',
    num: '04',
    title: 'Resource Augmentation',
    badge: 'HYBRID TEAMS',
    headline: 'Human judgment where it matters.',
    description: 'We provide highly trained human operators who work alongside AI agents, ensuring complex exceptions are handled with human precision and care.',
    href: '/services#augmentation',
    tags: ['Human-in-the-Loop', 'Expert Operators', 'Quality Assurance'],
    image: '/capabilities/scalable-teams.png',
    dotColor: 'bg-[#1A6FA8]',
  },
  {
    id: 'rcm',
    num: '05',
    title: 'Revenue Cycle Management (RCM)',
    badge: 'HEALTHCARE SPECIALTY',
    headline: 'Precision billing and denial mitigation.',
    description: 'Specialized healthcare revenue cycle management systems that reduce claim denials, accelerate payments, and ensure total compliance with AAPC standards.',
    href: '/services#rcm',
    tags: ['Claim Auditing', 'Denial Mitigation', 'Medical Billing'],
    image: '/project-health.jpg',
    dotColor: 'bg-purple-400',
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
      className="relative bg-[#F0FAFF]"
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
            <div className="flex items-center gap-2">
  <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8] animate-pulse" />
  <span className="text-[11px] uppercase tracking-[0.18em] text-[#1A6FA8] font-ui font-bold">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-10 sm:pt-16 pb-10 sm:pb-16 lg:pb-20 items-start">
          
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

            {/* CTA Button */}
            <div className="pt-10">
              <Link 
                href="/services" 
                className="group inline-flex items-center gap-2 rounded-full bg-[#29A8E0] px-6 py-3 text-[14px] font-semibold text-white shadow-md shadow-[#29A8E0]/20 hover:shadow-lg hover:bg-[#1A6FA8] hover:-translate-y-0.5 transition-all duration-300 font-sans"
              >
                Explore All Services
                <ArrowRight className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* ──────────────────────────────────────────────────────────
              RIGHT COLUMN: Vertically Stacked Feature Cards (Natural Flow)
          ────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-20 sm:space-y-28 lg:space-y-36 pb-4 sm:pb-8">
            
            {PILLARS.map((pillar, idx) => (
              <div 
                key={pillar.id}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className="scroll-mt-44 space-y-6"
              >
                <div className="group relative rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-200/80 aspect-[4/3] sm:aspect-video w-full bg-slate-100">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Subtle top-left badge overlay */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink/75 px-3 py-1.5 backdrop-blur-md shadow-sm">
                    <span className={`h-1.5 w-1.5 rounded-full ${pillar.dotColor} animate-pulse`} />
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white font-ui font-normal">
                      {pillar.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

