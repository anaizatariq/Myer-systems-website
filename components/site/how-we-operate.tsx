'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Activity, 
  ShieldCheck, 
  Building2, 
  Cpu, 
  Workflow, 
  RefreshCw, 
  ArrowUpRight 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectorCard {
  id: string;
  tag: string;
  title: string;
  icon: typeof Activity;
  frontSubtitle: string;
  backSummary: string;
  bullets: string[];
  href: string;
}

const SECTORS: SectorCard[] = [
  {
    id: 'healthcare',
    tag: 'Clinical & Healthcare',
    title: 'Healthcare & Commercial',
    icon: Activity,
    frontSubtitle: 'Clinical workflow automation & medical records',
    backSummary: 'Modern technology and AI systems designed to simplify clinical records and daily workflows for healthcare organisations.',
    bullets: [
      'Clinical record synthesis & automated triage',
      'Administrative workflow orchestration',
      'Built for high accuracy & data privacy standards'
    ],
    href: '/services#rcm',
  },
  {
    id: 'medical-billing',
    tag: 'Revenue Operations',
    title: 'Medical Billing (RCM)',
    icon: ShieldCheck,
    frontSubtitle: 'Claim verification & denial reduction',
    backSummary: 'End-to-end medical billing and revenue cycle support that minimizes claim errors and accelerates cash flow.',
    bullets: [
      'Pre-submission claim validation & scrubbers',
      'Faster reimbursements & fewer claim denials',
      'Clear, predictable visibility into cash pipelines'
    ],
    href: '/services#rcm',
  },
  {
    id: 'enterprise-ops',
    tag: 'Enterprise Systems',
    title: 'Enterprise & Operations',
    icon: Building2,
    frontSubtitle: 'Governed business automation & control',
    backSummary: 'Practical AI architectures built for organisations where transparency, human checkpoints, and compliance are essential.',
    bullets: [
      'Auditable workflows with human review checkpoints',
      'Automated document & data reconciliation',
      'Seamless integration with enterprise ERP platforms'
    ],
    href: '/services#ai-solutions',
  },
  {
    id: 'tech-engineering',
    tag: 'Engineering Delivery',
    title: 'Tech & Engineering',
    icon: Cpu,
    frontSubtitle: 'Dedicated software & AI delivery pods',
    backSummary: 'Scalable software engineering and AI system development delivered through our distributed operating model.',
    bullets: [
      'Dedicated AI and software delivery pods',
      'Enterprise API & cloud system integration',
      'Dallas advisory paired with Lahore delivery hub'
    ],
    href: '/services#resource-augmentation',
  },
  {
    id: 'supply-chain',
    tag: 'Process Flow',
    title: 'Supply Chain & Ops',
    icon: Workflow,
    frontSubtitle: 'Fulfillment tracking & vendor pipelines',
    backSummary: 'Automating multi-vendor coordination, inventory fulfillment, and tracking to eliminate operational delays.',
    bullets: [
      'Automated purchase orders & invoice processing',
      'Real-time bottleneck & shortage notifications',
      'Replaces slow, error-prone manual spreadsheets'
    ],
    href: '/services#saas',
  },
  {
    id: 'workflow-opt',
    tag: 'Business Transformation',
    title: 'Workflow Optimization',
    icon: RefreshCw,
    frontSubtitle: 'Bottleneck elimination & streamlined SOPs',
    backSummary: 'Discovering operational friction and replacing manual workarounds with smooth, dependable processes.',
    bullets: [
      'Maps workflow bottlenecks before writing code',
      'Automated cross-team approval loops & handoffs',
      'Dependable standard operating procedures that scale'
    ],
    href: '/services#saas',
  },
];

export function HowWeOperate() {
  const [flippedId, setFlippedId] = useState<string | null>(null);

  return (
    <section 
      id="how-we-operate" 
      className="relative scroll-mt-32 border-t border-border/70 bg-background py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* ── Anchor Helper for #industries ── */}
      <span id="industries" className="sr-only" aria-hidden="true" />

      {/* ── Ambient Background Lighting & Blueprint Grid ── */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1A6FA8_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.08]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute top-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-[#29A8E0]/10 blur-[150px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full bg-[#1A6FA8]/8 blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-white px-3.5 py-1.5 shadow-xs mb-3.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
              INDUSTRIES WE SERVE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem]/[1.15] font-semibold tracking-tight text-[#101820] font-sans">
            Systems built to improve{' '}
            <span className="inline-block pr-2 font-quote italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#1A6FA8] via-[#29A8E0] to-[#1A6FA8]">
              real-world operations
            </span>.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Tailored architectures engineered to deliver scale, compliance, and measurable control.
          </p>
        </div>

        {/* ── 3-Per-Row 3D Flip Cards Grid (Compact, High-Contrast & Sleek) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {SECTORS.map((sector) => {
            const Icon = sector.icon;
            const isFlipped = flippedId === sector.id;

            return (
              <div
                key={sector.id}
                className="group perspective-1000 h-[285px] cursor-pointer select-none"
                onClick={() => setFlippedId(isFlipped ? null : sector.id)}
                onMouseLeave={() => {
                  if (flippedId === sector.id) setFlippedId(null);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setFlippedId(isFlipped ? null : sector.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={sector.title}
              >
                {/* Inner Flip Wrapper */}
                <div
                  className={cn(
                    "relative h-full w-full rounded-3xl transition-transform duration-700 ease-out preserve-3d",
                    "group-hover:rotate-y-180",
                    isFlipped && "rotate-y-180"
                  )}
                  style={{ transformStyle: 'preserve-3d', WebkitTransformStyle: 'preserve-3d' }}
                >
                  {/* ════════ FRONT FACE: Crisp Pure White Elevation + Horizon Sheen ════════ */}
                  <div 
                    className="absolute inset-0 h-full w-full rounded-3xl backface-hidden bg-white border border-slate-200/90 p-6 flex flex-col justify-between items-center text-center transition-all duration-400 shadow-[0_8px_25px_-4px_rgba(16,24,32,0.06),0_3px_10px_-2px_rgba(26,111,168,0.05)] group-hover:border-[#29A8E0]/60 group-hover:shadow-[0_18px_40px_-6px_rgba(26,111,168,0.16)]"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                  >
                    {/* Top Horizon Accent Sheen */}
                    <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#29A8E0]/45 to-transparent rounded-full" />

                    {/* Top Tag Pill */}
                    <div className="w-full flex justify-center">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#1A6FA8] font-ui bg-[#F0FAFF] px-3 py-1 rounded-full border border-[#1A6FA8]/20">
                        {sector.tag}
                      </span>
                    </div>

                    {/* Center Icon & Title */}
                    <div className="flex flex-col items-center my-auto">
                      {/* Squircle Dark Icon Box */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#101820] text-[#29A8E0] shadow-md shadow-[#101820]/15 mb-3.5 group-hover:scale-105 transition-transform duration-300">
                        <Icon className="h-7 w-7" />
                      </div>

                      {/* Heading */}
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#101820] font-heading leading-snug">
                        {sector.title}
                      </h3>

                      {/* Front Subtitle in Easy Words */}
                      <p className="mt-1.5 text-xs sm:text-[13px] text-slate-600 font-sans max-w-[250px] leading-relaxed">
                        {sector.frontSubtitle}
                      </p>
                    </div>

                    {/* Bottom Empty Spacer for balanced centering */}
                    <div className="h-2 w-full" aria-hidden="true" />
                  </div>

                  {/* ════════ BACK FACE: Minimal Important Info & Bullets ════════ */}
                  <div 
                    className="absolute inset-0 h-full w-full rounded-3xl backface-hidden rotate-y-180 bg-[#101820] border border-[#29A8E0]/40 p-5 sm:p-6 flex flex-col justify-between text-white shadow-2xl shadow-[#101820]/30"
                    style={{ 
                      backfaceVisibility: 'hidden', 
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      WebkitTransform: 'rotateY(180deg)'
                    }}
                  >
                    {/* Top Horizon Cyan Sheen */}
                    <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#29A8E0] to-transparent rounded-full" />

                    {/* Header with Mini Icon & Tag */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#1A6FA8]/40 text-[#29A8E0]">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#29A8E0] font-ui">
                          {sector.tag}
                        </span>
                      </div>
                      <span className="text-[9.5px] font-mono text-white/40 uppercase tracking-wider">
                        Overview
                      </span>
                    </div>

                    {/* Sector Title & Easy Summary */}
                    <div>
                      <h4 className="text-[16px] sm:text-[17px] font-bold text-white font-heading leading-tight">
                        {sector.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-300 font-sans leading-relaxed">
                        {sector.backSummary}
                      </p>
                    </div>

                    {/* 3 Core Highlights / Bullets */}
                    <div className="space-y-1.5">
                      {sector.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-200 font-sans">
                          <span className="text-[#29A8E0] font-bold leading-none mt-0.5 select-none shrink-0 font-ui text-[11px]">
                            ✓
                          </span>
                          <span className="leading-snug text-[11.5px] sm:text-xs">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Link (No flip indicator) */}
                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between">
                      <Link
                        href={sector.href}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#29A8E0] hover:text-white transition-colors font-ui"
                      >
                        <span>Explore Sector</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>

                      <span className="text-[10px] font-mono text-white/40">
                        Myer Systems
                      </span>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>


        {/* ── Section Footer CTA ── */}
        <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
          <span className="text-sm text-slate-600 font-sans">
            Need architecture tailored for your specific operating environment?
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1A6FA8] hover:text-[#29A8E0] transition-colors font-ui"
          >
            <span>Schedule a Consultation</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

