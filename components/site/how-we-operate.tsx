'use client';

import Link from 'next/link';
import { 
  Sparkles, 
  UserCheck, 
  Workflow, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck,
  Cpu
} from 'lucide-react';

const STEPS = [
  {
    stepNum: '01',
    phase: 'STEP 1',
    title: 'Simplify & Standardize',
    icon: Layers,
    tagline: 'Clean foundations before automation',
    description: 'We organize your disparate data streams, eliminate duplicate steps, and standardize your daily business processes into clear workflows.',
    benefits: [
      'Clean data pipelines & single source of truth',
      'Removal of redundant approval loops',
      'Clear, repeatable standard operating procedures',
    ],
  },
  {
    stepNum: '02',
    phase: 'STEP 2',
    title: 'Automate Routine Work',
    icon: Cpu,
    tagline: 'Fast, controlled AI task execution',
    description: 'We apply purpose-built AI agents and automation to handle high-volume, repetitive tasks with speed, structure, and deterministic rules.',
    benefits: [
      'Instant document & data processing',
      'Pre-execution error checking & validation',
      'Connected workflows between existing software',
    ],
  },
  {
    stepNum: '03',
    phase: 'STEP 3',
    title: 'Supervise & Govern',
    icon: UserCheck,
    tagline: 'Experienced human accountability',
    description: 'Trained human specialists oversee critical decision points, manage edge cases, and ensure outputs meet strict accuracy standards.',
    benefits: [
      'Human-in-the-loop checkpoints',
      'Complete audit trails & data governance',
      'Continuous process review and optimization',
    ],
  },
];

export function HowWeOperate() {
  return (
    <section 
      id="how-we-operate" 
      className="relative scroll-mt-24 bg-white pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-28 overflow-hidden"
    >
      {/* ── Ambient Background Depth ── */}
      <div 
        className="pointer-events-none absolute top-1/4 left-0 h-[450px] w-[450px] rounded-full bg-[#29A8E0]/7 blur-[140px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-10 right-0 h-[450px] w-[450px] rounded-full bg-[#1A6FA8]/6 blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-2">
  <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8] animate-pulse" />
  <span className="text-[11px] uppercase tracking-[0.18em] text-[#1A6FA8] font-ui font-bold">
    HOW WE WORK
  </span>
</div>

          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem]/[1.1] font-semibold tracking-tight text-ink font-sans">
            AI speed. Human judgment.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl font-normal">
            We don&apos;t believe in replacing people with black-box AI. We combine fast automation with experienced human oversight to ensure total accuracy and control.
          </p>
        </div>

        {/* ── 3 Steps Unified Pipeline Layout ── */}
        <div className="relative rounded-[2rem] border border-[#29A8E0]/30 bg-[#8FD6F5] shadow-xl shadow-[#1A6FA8]/10 overflow-hidden flex flex-col md:flex-row">
          
          {/* Continuous Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[72px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1A6FA8]/20 to-transparent z-0" />

          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === STEPS.length - 1;

            return (
              <div
                key={step.stepNum}
                className={`group relative flex-1 flex flex-col justify-between p-6 sm:p-8 lg:p-10 transition-colors duration-500 hover:bg-ink ${
                  !isLast ? 'border-b md:border-b-0 md:border-r border-[#1A6FA8]/10' : ''
                }`}
              >
                {/* Abstract UI Mockup */}
                <div className="relative z-10 w-[72px] h-[72px] rounded-2xl border-2 border-ink bg-white/40 shadow-sm group-hover:border-[#8FD6F5] group-hover:bg-transparent transition-all duration-500 mx-auto md:mx-0 mb-8 p-2.5 flex flex-col gap-1.5">
                  <div className="absolute -top-3 -right-3 bg-ink text-[#F0FAFF] font-mono text-[11px] font-bold px-2 py-0.5 rounded group-hover:bg-[#8FD6F5] group-hover:text-ink transition-colors duration-500 shadow-sm">
                    {step.stepNum}
                  </div>
                  
                  {step.stepNum === '01' && (
                    <>
                      <div className="w-full h-2.5 rounded border border-ink group-hover:border-[#8FD6F5] transition-colors duration-500" />
                      <div className="w-full h-2.5 rounded border border-ink group-hover:border-[#8FD6F5] transition-colors duration-500" />
                      <div className="w-4/5 h-2.5 rounded bg-ink group-hover:bg-[#8FD6F5] transition-colors duration-500" />
                    </>
                  )}
                  {step.stepNum === '02' && (
                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-7 h-7 rounded border-2 border-ink group-hover:border-[#8FD6F5] transition-colors duration-500 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-ink group-hover:bg-[#8FD6F5] transition-colors duration-500 animate-pulse" />
                      </div>
                    </div>
                  )}
                  {step.stepNum === '03' && (
                    <>
                      <div className="w-full flex gap-1.5 h-1/2">
                        <div className="flex-1 rounded bg-ink group-hover:bg-[#8FD6F5] transition-colors duration-500" />
                        <div className="w-1/3 rounded border border-ink group-hover:border-[#8FD6F5] transition-colors duration-500" />
                      </div>
                      <div className="w-full h-1/2 rounded border border-ink group-hover:border-[#8FD6F5] transition-colors duration-500" />
                    </>
                  )}
                </div>

                {/* Overlapping Arrow (Desktop) */}
                {!isLast && (
                  <div className="hidden md:flex absolute top-[72px] -right-4 -translate-y-1/2 z-20 h-8 w-8 items-center justify-center rounded-full bg-white border border-[#29A8E0]/30 shadow-sm text-[#1A6FA8] transition-all">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}

                {/* Overlapping Arrow (Mobile) */}
                {!isLast && (
                  <div className="flex md:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 h-8 w-8 items-center justify-center rounded-full bg-white border border-[#29A8E0]/30 shadow-sm text-[#1A6FA8] transition-all">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}

                <div className="flex-1 flex flex-col items-center md:items-start relative z-10">
                  {/* Title & Tagline */}
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl lg:text-3xl tracking-tight text-ink group-hover:text-white transition-colors duration-500 mb-2.5 leading-tight font-sans font-medium">
                      {step.title}
                    </h3>
                    <p className="text-sm lg:text-[15px] text-slate-600 group-hover:text-slate-400 transition-colors duration-500 mb-2 font-sans font-normal">
                      {step.tagline}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="mt-8 space-y-3.5 w-full">
                    {step.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-3 text-[14px] lg:text-[15px] text-slate-700 group-hover:text-slate-300 transition-colors duration-500 font-sans">
                        <CheckCircle2 className="h-5 w-5 text-[#29A8E0] shrink-0 mt-0.5 group-hover:text-[#8FD6F5] transition-colors" />
                        <span className="leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
