'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Workflow, 
  ShieldCheck, 
  RefreshCw, 
  FileSpreadsheet, 
  Database, 
  Globe2, 
  ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProblemCategory {
  id: string;
  stepNum: string;
  tileTitle: string;
  icon: typeof Workflow;
  headline: string;
  description: string;
  solutions: string[];
  href: string;
}

const CATEGORIES: ProblemCategory[] = [
  {
    id: 'manual-work',
    stepNum: '01',
    tileTitle: 'Manual Work',
    icon: Workflow,
    headline: 'Repetitive Typing & Data Bottlenecks',
    description: 'Teams spend hours retyping and moving information between spreadsheets and separate software tools, causing avoidable mistakes and delayed work.',
    solutions: [
      'Automated Data Reading & Entry',
      'Fewer Human Errors',
      'Direct Tool Integration',
      'Faster Team Handoffs',
      'Real-Time Status Tracking',
      'Instant Bottleneck Alerts',
    ],
    href: '/services#ai-solutions',
  },
  {
    id: 'unreliable-ai',
    stepNum: '02',
    tileTitle: 'Unreliable AI',
    icon: ShieldCheck,
    headline: 'Unpredictable AI & Wrong Answers',
    description: 'Generic AI tools make up facts, break business rules, and cannot be audited, making leadership hesitant to trust them in daily work.',
    solutions: [
      'Strict Accuracy Rules',
      'Human Verification Gates',
      'Complete Audit Trails',
      'Zero AI Hallucinations',
      'Data Privacy Safeguards',
      'Predictable, Safe Execution',
    ],
    href: '/services#ai-solutions',
  },
  {
    id: 'system-silos',
    stepNum: '03',
    tileTitle: 'System Silos',
    icon: RefreshCw,
    headline: 'Disconnected Tools & Lost Updates',
    description: 'Different departments use separate software tools that do not talk to each other, resulting in lost messages, duplicate tasks, and confusion.',
    solutions: [
      'Connected Team Workflows',
      'Single Source of Truth',
      'Clear Responsibility Trails',
      'Automated Task Handoffs',
      'Fewer Missed Deadlines',
      'Live Operational Visibility',
    ],
    href: '/services#saas',
  },
  {
    id: 'medical-billing',
    stepNum: '04',
    tileTitle: 'Medical Billing',
    icon: FileSpreadsheet,
    headline: 'Claim Denials & Billing Delays',
    description: 'Complex insurance guidelines and missing clinical details lead to rejected claims, slow payments, and hours of administrative follow-up.',
    solutions: [
      'Pre-Submission Error Checks',
      'Faster Payer Reimbursements',
      'Organized Clinical Notes',
      'Fewer Avoidable Denials',
      'Clear Revenue Tracking',
      'HIPAA-Compliant Security',
    ],
    href: '/services#rcm',
  },
  {
    id: 'legacy-software',
    stepNum: '05',
    tileTitle: 'Legacy Software',
    icon: Database,
    headline: 'Old Databases Trapped in Silos',
    description: 'Valuable company records are locked inside outdated systems that cannot easily connect with modern cloud tools and applications.',
    solutions: [
      'Real-Time Data Connections',
      'Modern Cloud Bridges',
      'Clean, Unified Records',
      'No Manual Exporting',
      'Secure Data Synchronization',
      'Zero System Downtime',
    ],
    href: '/services#ai-solutions',
  },
  {
    id: 'team-overload',
    stepNum: '06',
    tileTitle: 'Team Overload',
    icon: Globe2,
    headline: 'Hiring Constraints & Overloaded Teams',
    description: 'Hiring skilled in-house specialists takes months and costs a fortune, making it difficult to handle sudden spikes in business volume.',
    solutions: [
      'Ready-to-Deploy Specialists',
      'US Management + Global Hub',
      'Faster Project Delivery',
      'Flexible Capacity On Demand',
      'AI-Assisted Productivity',
      'No Lengthy Hiring Delays',
    ],
    href: '/services#resource-augmentation',
  },
];

export function Problems() {
  const [activeId, setActiveId] = useState<string>(CATEGORIES[0].id);
  const active = CATEGORIES.find((c) => c.id === activeId) || CATEGORIES[0];

  return (
    <section 
      id="problems" 
      className="relative scroll-mt-32 bg-white py-14 sm:py-16 lg:py-20 overflow-hidden border-b border-border/70"
    >
      {/* ── Subtle Ambient Lighting ── */}
      <div 
        className="pointer-events-none absolute top-10 left-1/4 h-[500px] w-[500px] rounded-full bg-[#29A8E0]/6 blur-[150px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-10 right-1/4 h-[450px] w-[450px] rounded-full bg-[#1A6FA8]/5 blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── Clean & Confident Section Headline (No top pill clash with navbar) ── */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem]/[1.15] font-semibold tracking-tight text-[#101820] font-sans">
            Everyday operational bottlenecks{' '}
            <span className="font-quote italic font-normal text-brand-steel inline-block pr-1">
              we solve for your business.
            </span>
          </h2>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            2-COLUMN INTERACTIVE SHOWCASE (HARMONIOUS, SPACIOUS & PROPORTIONATE)
            Left: 3x2 Grid of App-Like Tiles
            Right: Large, Readable Detail Panel with Proper Typography
        ══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* ── LEFT COLUMN: 3x2 Grid of App-Like Tiles ── */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-2.5 sm:gap-3.5">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeId;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  onMouseEnter={() => setActiveId(cat.id)}
                  className={cn(
                    "relative flex flex-col items-center justify-center p-2 sm:p-4 rounded-2xl sm:rounded-3xl text-center transition-all duration-300 cursor-pointer aspect-square focus:outline-hidden",
                    isActive
                      ? "bg-[#101820] text-white shadow-xl shadow-[#101820]/25 border-2 border-[#29A8E0] scale-[1.03] z-10"
                      : "bg-[#F0FAFF] hover:bg-[#E3F4FC] text-[#101820] border border-[#1A6FA8]/15 hover:border-[#29A8E0]/40 shadow-xs hover:shadow-md hover:-translate-y-0.5"
                  )}
                  aria-label={cat.tileTitle}
                >
                  {/* Subtle top indicator on active */}
                  {isActive && (
                    <div className="absolute top-2 sm:top-2.5 h-1 w-5 sm:w-6 rounded-full bg-[#29A8E0] animate-pulse" />
                  )}

                  {/* Squircle Icon Box */}
                  <div 
                    className={cn(
                      "h-9 w-9 sm:h-11 sm:w-11 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 mb-1.5 sm:mb-2",
                      isActive
                        ? "bg-[#1A6FA8] text-white shadow-md shadow-[#29A8E0]/20"
                        : "bg-[#101820] text-[#29A8E0] shadow-xs"
                    )}
                  >
                    <Icon className="h-4.5 w-4.5 sm:h-5.5 sm:w-5.5" />
                  </div>

                  {/* Tile Title */}
                  <span 
                    className={cn(
                      "text-[11px] xs:text-[12px] sm:text-[12.5px] font-bold tracking-tight leading-tight font-heading",
                      isActive ? "text-white" : "text-[#101820]"
                    )}
                  >
                    {cat.tileTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── RIGHT COLUMN: Prominent, Highly-Readable Solution Panel ── */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:pl-4">
            
            {/* Elegant Pill Eyebrow (Replacing the small plain text) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-[#F0FAFF] px-3.5 py-1.5 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
              <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#1A6FA8] font-ui">
                PROBLEM {active.stepNum} · {active.tileTitle}
              </span>
            </div>

            {/* Display Headline: Bold, Confident & Proper Size */}
            <h3 className="text-xl sm:text-3xl lg:text-[2rem]/[1.2] font-bold tracking-tight text-[#101820] font-sans">
              {active.headline}
            </h3>

            {/* Clear, Highly-Readable 2-Line Explanation */}
            <p className="text-sm sm:text-[17px] leading-relaxed text-slate-700 font-sans max-w-2xl">
              {active.description}
            </p>

            {/* 2-Column Solution Bullets with Proper Size & Spacing */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 sm:gap-y-3.5">
              {active.solutions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#1A6FA8] font-bold text-sm leading-none mt-1 shrink-0 select-none">
                    ➤
                  </span>
                  <span className="text-[13.5px] sm:text-[15px] font-semibold text-slate-800 font-sans leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Action CTA Button */}
            <div className="pt-3">
              <Link
                href={active.href}
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#29A8E0] px-7 py-3 text-sm font-bold text-[#101820] shadow-md shadow-[#29A8E0]/20 hover:bg-[#209FD6] hover:shadow-[0_6px_20px_rgba(41,168,224,0.38)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 font-ui cursor-pointer"
              >
                <span>Explore Our Solutions</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
