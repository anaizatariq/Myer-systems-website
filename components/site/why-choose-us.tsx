'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  ArrowUpRight, 
  Gauge, 
  FileCheck 
} from 'lucide-react';

const REASONS = [
  {
    num: '01',
    title: 'Technology + People Together',
    icon: Layers,
    description: 'We don’t just license software or write code and disappear. We build the systems and can also provide the trained operational teams to run them day in and day out.',
    benefits: [
      'Complete end-to-end implementation',
      'No gap between developers and daily operators',
      'Smooth handoffs and continuous system maintenance',
    ],
  },
  {
    num: '02',
    title: 'Tested in High-Stakes Work',
    icon: ShieldCheck,
    description: 'We operate in US healthcare billing and clinical data synthesis where errors are costly and regulations are strict. If our systems can handle that complexity, they can handle your enterprise workflows.',
    benefits: [
      'Built for zero tolerance on compliance errors',
      'Audit-ready data logs and transparent workflows',
      'Rigorous quality control across every deliverable',
    ],
  },
  {
    num: '03',
    title: 'Accountability First',
    icon: Gauge,
    description: 'We give leadership clear visibility into operational performance with live dashboards, predictable pricing, and direct communication through US-based management.',
    benefits: [
      'Clear, transparent operational reporting',
      'Direct US corporate contract & liability',
      'Dedicated managers who understand your business',
    ],
  },
];

export function WhyChooseUs() {
  return (
    <section 
      id="why-choose-us" 
      className="relative scroll-mt-24 bg-[#E0F4FC] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-border/70"
    >
      {/* ── Ambient Background Depth ── */}
      <div 
        className="pointer-events-none absolute top-10 left-1/3 h-[450px] w-[450px] rounded-full bg-[#29A8E0]/6 blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ── Left Side: Intro & Points ── */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-[#29A8E0] px-4 py-1.5 mb-6 shadow-md shadow-[#29A8E0]/20">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white font-ui">
              WHY MYER SYSTEMS
            </span>
          </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem]/[1.1] font-extrabold tracking-tight text-[#101820] font-sans">
              Built for control, accountability, and results.
            </h2>
            <p className="mt-4 mb-10 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
              We don't just deliver advice or hand over software licenses. We take genuine responsibility for how your systems run.
            </p>

            <div className="flex flex-col gap-8 w-full">
              {REASONS.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.num} className="flex gap-5">
                    <div className="flex-shrink-0 mt-1 h-12 w-12 rounded-xl bg-white border border-[#29A8E0]/20 flex items-center justify-center text-[#1A6FA8] shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-[#101820] mb-2 font-heading">
                        {reason.title}
                      </h3>
                      <p className="text-[15px] font-medium text-slate-700 leading-relaxed max-w-md">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right Side: Real Visual ── */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[2rem] overflow-hidden border-[6px] border-white/60 shadow-2xl shadow-[#1A6FA8]/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#101820]/40 to-transparent z-10 pointer-events-none mix-blend-multiply opacity-50 group-hover:opacity-30 transition-opacity duration-700" />
              <div className="aspect-[4/5] sm:aspect-square relative w-full h-full">
                <Image
                  src="/images/why-choose-us.jpg"
                  alt="Myer Systems Enterprise Team"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              
              {/* Optional UI Overlay to make it feel more "tech/enterprise" */}
              <div className="absolute bottom-6 left-6 z-20 flex justify-between items-end">
                <div className="bg-[#101820]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-mono text-white/80 uppercase tracking-widest">System Status</span>
                  </div>
                  <div className="text-white font-bold text-sm">Operational Readiness</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
