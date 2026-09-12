'use client';

import { CheckCircle2 } from 'lucide-react';

const DIFFERENTIATORS = [
  {
    stepNum: '01',
    title: 'Built for Accountability',
    description: 'Every AI system we build includes full audit trails, explainable outputs, and human-in-the-loop checkpoints. You stay in control of every automated decision.',
  },
  {
    stepNum: '02',
    title: 'Enterprise-Grade Scale',
    description: 'Our systems are engineered to handle enterprise volume, scaling with your operations without breaking, slowing down, or requiring constant oversight.',
  },
  {
    stepNum: '03',
    title: 'AI + Human Hybrid Teams',
    description: 'We combine AI agents with trained human operators to create hybrid teams that deliver quality output at scale. Pairing automation with human judgment where it matters.',
  },
];

export function WhyChooseUs() {
  return (
    <section 
      id="why-choose-us" 
      className="relative scroll-mt-24 bg-[#E0F4FC] pt-16 sm:pt-20 lg:pt-20 pb-20 sm:pb-24 lg:pb-28 overflow-hidden border-b border-slate-200"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-2">
  <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8] animate-pulse" />
  <span className="text-[11px] uppercase tracking-[0.18em] text-[#1A6FA8] font-ui font-bold">
    WHAT MAKES US DIFFERENT
  </span>
</div>

          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem]/[1.1] font-semibold tracking-tight text-ink font-sans">
            Not just another AI tool. <br className="hidden lg:block" />
            Enterprise automation built for reality.
          </h2>
        </div>

        {/* ── 3 Steps Unified Pipeline Layout ── */}
        <div className="relative rounded-[2rem] border border-[#29A8E0]/30 bg-[#8FD6F5] shadow-xl shadow-[#1A6FA8]/10 overflow-hidden flex flex-col md:flex-row">
          
          {/* Continuous Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[72px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1A6FA8]/20 to-transparent z-0" />

          {DIFFERENTIATORS.map((item, idx) => {
            const isLast = idx === DIFFERENTIATORS.length - 1;

            return (
              <div
                key={item.stepNum}
                className={`group relative flex-1 flex flex-col justify-between p-6 sm:p-8 lg:p-10 transition-colors duration-500 hover:bg-ink ${
                  !isLast ? 'border-b md:border-b-0 md:border-r border-[#1A6FA8]/10' : ''
                }`}
              >
                {/* Abstract UI Mockup */}
                <div className="relative z-10 w-[72px] h-[72px] rounded-2xl border-2 border-ink bg-white/40 shadow-sm group-hover:border-[#8FD6F5] group-hover:bg-transparent transition-all duration-500 mx-auto md:mx-0 mb-8 p-2.5 flex flex-col gap-1.5">
                  <div className="absolute -top-3 -right-3 bg-ink text-[#F0FAFF] font-mono text-[11px] font-bold px-2 py-0.5 rounded group-hover:bg-[#8FD6F5] group-hover:text-ink transition-colors duration-500 shadow-sm">
                    {item.stepNum}
                  </div>
                  
                  {item.stepNum === '01' && (
                    <div className="flex flex-col gap-1.5 w-full h-full justify-center">
                      <div className="flex gap-1.5 items-center">
                        <div className="w-2.5 h-2.5 rounded-full border border-ink group-hover:border-[#8FD6F5] transition-colors duration-500 flex items-center justify-center shrink-0">
                          <div className="w-1 h-1 rounded-full bg-ink group-hover:bg-[#8FD6F5]" />
                        </div>
                        <div className="h-1.5 flex-1 rounded bg-ink group-hover:bg-[#8FD6F5] transition-colors duration-500" />
                      </div>
                      <div className="flex gap-1.5 items-center">
                        <div className="w-2.5 h-2.5 rounded-full border border-ink group-hover:border-[#8FD6F5] transition-colors duration-500 shrink-0" />
                        <div className="h-1.5 flex-1 rounded border border-ink group-hover:border-[#8FD6F5] transition-colors duration-500" />
                      </div>
                      <div className="flex gap-1.5 items-center">
                         <div className="w-2.5 h-2.5 rounded-full border border-ink group-hover:border-[#8FD6F5] transition-colors duration-500 flex items-center justify-center shrink-0">
                          <div className="w-1 h-1 rounded-full bg-ink group-hover:bg-[#8FD6F5]" />
                        </div>
                        <div className="h-1.5 w-3/4 rounded bg-ink group-hover:bg-[#8FD6F5] transition-colors duration-500" />
                      </div>
                    </div>
                  )}
                  {item.stepNum === '02' && (
                    <div className="flex items-end gap-1.5 w-full h-full pt-3 px-1">
                       <div className="flex-1 bg-ink group-hover:bg-[#8FD6F5] rounded-t transition-colors duration-500 h-1/3" />
                       <div className="flex-1 border border-ink group-hover:border-[#8FD6F5] rounded-t transition-colors duration-500 h-2/3" />
                       <div className="flex-1 bg-ink group-hover:bg-[#8FD6F5] rounded-t transition-colors duration-500 h-full" />
                    </div>
                  )}
                  {item.stepNum === '03' && (
                    <div className="flex w-full h-full relative items-center justify-center">
                       <div className="absolute left-1.5 w-5 h-5 border-2 border-ink group-hover:border-[#8FD6F5] rounded flex items-center justify-center transition-colors duration-500 bg-white group-hover:bg-ink z-10">
                          <div className="w-1.5 h-1.5 bg-ink group-hover:bg-[#8FD6F5] rounded-full animate-pulse" />
                       </div>
                       <div className="absolute left-4 w-6 h-[2px] bg-ink group-hover:bg-[#8FD6F5] transition-colors duration-500 z-0" />
                       <div className="absolute right-1.5 w-5 h-5 border-2 border-ink group-hover:border-[#8FD6F5] rounded-full flex flex-col items-center justify-end overflow-hidden transition-colors duration-500 bg-white group-hover:bg-ink z-10">
                          <div className="w-1.5 h-1.5 border border-ink group-hover:border-[#8FD6F5] rounded-full mt-[1px] transition-colors duration-500" />
                          <div className="w-3 h-1.5 bg-ink group-hover:bg-[#8FD6F5] rounded-t-full mt-[1px] transition-colors duration-500" />
                       </div>
                    </div>
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
                  {/* Title & Tagline & Description */}
                  <div className="text-center md:text-left mt-4">
                    <h3 className="text-xl lg:text-[1.35rem] font-medium tracking-tight text-ink group-hover:text-white transition-colors duration-500 mb-1 leading-tight font-sans">
                      {item.title}
                    </h3>

                    <p className="text-[14px] lg:text-[15px] font-normal text-ink/80 group-hover:text-white/80 transition-colors duration-500 leading-relaxed max-w-[280px] mx-auto md:mx-0 font-sans">
                      {item.description}
                    </p>
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
