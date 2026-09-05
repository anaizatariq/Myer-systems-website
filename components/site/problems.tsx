'use client';

import Link from 'next/link';
import { 
  HeartHandshake, 
  Database, 
  ShieldCheck, 
  Workflow, 
  Globe2, 
  TrendingUp, 
  ArrowUpRight, 
  CheckCircle2, 
  FileSpreadsheet,
  RefreshCw
} from 'lucide-react';

interface ProblemCard {
  id: string;
  category: string;
  title: string;
  description: string;
  metricBadge: string;
  icon: any;
  href: string;
}

const PROBLEMS_DATA: ProblemCard[] = [
  {
    id: 'manual-work',
    category: 'Operational Efficiency',
    title: 'Manual Work & Data Bottlenecks',
    description: 'Teams spend valuable hours manually copying information, updating spreadsheets, and chasing repetitive administrative tasks.',
    metricBadge: 'Automated Workflows',
    icon: Workflow,
    href: '/services#ai-solutions',
  },
  {
    id: 'unreliable-ai',
    category: 'Enterprise AI Solutions',
    title: 'Unpredictable AI & Black-Box Tools',
    description: 'Generic AI tools that make unverified mistakes or operate without transparent accountability and human checkpoints.',
    metricBadge: 'Human-in-the-Loop',
    icon: ShieldCheck,
    href: '/services#ai-solutions',
  },
  {
    id: 'disconnected-ops',
    category: 'Business Process Reengineering',
    title: 'Disconnected Teams & Siloed Systems',
    description: 'Departments operating in separate silos, causing slow handoffs, missed deadlines, and poor operational visibility.',
    metricBadge: 'Streamlined SOPs',
    icon: RefreshCw,
    href: '/services#saas',
  },
  {
    id: 'billing-rcm',
    category: 'Revenue Cycle Management',
    title: 'Medical Billing Errors & Claim Denials',
    description: 'Complex medical coding mistakes and payer rejections that create revenue leakage and slow down reimbursements.',
    metricBadge: 'Claim Validation',
    icon: FileSpreadsheet,
    href: '/services#rcm',
  },
  {
    id: 'clinical-backlog',
    category: 'Healthcare Technology',
    title: 'Scattered Medical Data & Paperwork',
    description: 'Clinical providers overwhelmed by fragmented patient records and administrative paperwork instead of focusing on care.',
    metricBadge: 'MedSynthea Platform',
    icon: Database,
    href: '/services#saas',
  },
  {
    id: 'talent-scaling',
    category: 'Intelligent Resource Augmentation',
    title: 'Slow Hiring & Capacity Constraints',
    description: 'Finding, training, and retaining skilled operational and technical talent takes months and inflates operating costs.',
    metricBadge: 'Hybrid Human + AI Pods',
    icon: Globe2,
    href: '/services#resource-augmentation',
  },
];

export function Problems() {
  return (
    <section id="problems" className="relative scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28 overflow-hidden border-b border-border/70">
      
      {/* ── Background Subtle Ambient Glows (Theme Colors: Steel Blue & Sky Blue) ── */}
      <div 
        className="pointer-events-none absolute top-10 left-1/3 h-[500px] w-[500px] rounded-full bg-[#29A8E0]/7 blur-[160px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-10 right-10 h-[450px] w-[450px] rounded-full bg-[#1A6FA8]/6 blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ══════════════════════════════════════════════════════════════════
            SECTION HEADER
        ══════════════════════════════════════════════════════════════════ */}
        <div className="reveal max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-[#F0FAFF] px-3.5 py-1.5 shadow-2xs mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
              PROBLEMS WE SOLVE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem]/[1.15] font-semibold tracking-tight text-[#101820] font-sans">
            Helping organisations move from reactive operations to{' '}
            <span className="font-quote italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#1A6FA8] via-[#29A8E0] to-[#1A6FA8]">
              predictable performance
            </span>.
          </h2>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            3-COLUMN CARDS GRID: Theme Color Palette
            - Default: Clean Ice-Sky Architectural Blue (#F0FAFF)
            - Hover: Dark Midnight Steel Chassis (#0B141D / #101820) with Cyan Glow
        ══════════════════════════════════════════════════════════════════ */}
        <div className="reveal mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROBLEMS_DATA.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl border border-[#1A6FA8]/15 bg-[#F0FAFF] hover:bg-[#0B141D] hover:border-[#29A8E0]/40 p-7 sm:p-8 transition-all duration-400 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#101820]/15 flex flex-col justify-between cursor-default"
              >
                <div>
                  {/* Circular Icon Badge: Sky Ice in default -> Electric Cyan Glow on hover */}
                  <div className="h-16 w-16 rounded-full bg-white border border-[#1A6FA8]/20 group-hover:bg-white/10 group-hover:border-[#29A8E0]/40 flex items-center justify-center text-[#1A6FA8] group-hover:text-[#29A8E0] mb-6 shadow-xs group-hover:scale-105 transition-all duration-400">
                    <Icon className="h-7 w-7 stroke-[1.75]" />
                  </div>

                  {/* Micro Category Tag */}
                  <div className="text-xs font-mono font-bold tracking-wider text-[#1A6FA8] group-hover:text-[#29A8E0] uppercase mb-2 transition-colors duration-300">
                    {item.category}
                  </div>

                  {/* Bold Title: Dark Steel in default -> Pure White on hover */}
                  <h3 className="text-xl sm:text-[1.35rem] font-bold text-[#101820] group-hover:text-white tracking-tight leading-snug mb-3 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* 2-Line Punchy Description: Slate in default -> Soft light slate on hover */}
                  <p className="text-sm sm:text-[15px] text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Metric Badge & Action Link */}
                <div className="mt-6 pt-4 border-t border-[#1A6FA8]/15 group-hover:border-white/10 flex items-center justify-between transition-colors duration-300">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#1A6FA8] group-hover:text-emerald-300 transition-colors duration-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#29A8E0] group-hover:text-emerald-400" />
                    {item.metricBadge}
                  </span>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1A6FA8] group-hover:text-[#29A8E0] transition-colors duration-300"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
