'use client';

import { Star, Quote, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatarInitials: string;
  metricBadge: string;
  metricLabel: string;
  sectorTag: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'finops',
    quote: 'Myer Systems built custom AI pipelines that integrated directly into our core ERP. What used to take our operational teams four full days of manual reconciliation now completes in under 30 minutes with deterministic accuracy.',
    author: 'Marcus Vance',
    role: 'VP of Operations & Technology',
    organization: 'Enterprise Financial Services',
    avatarInitials: 'MV',
    metricBadge: '85% Faster',
    metricLabel: 'Reconciliation Time',
    sectorTag: 'ENTERPRISE AI',
  },
  {
    id: 'healthcare',
    quote: 'MedSynthea eliminated our clinical documentation backlog. Their deterministic pre-scrubbing engine pushed our first-pass clean claim rate to 99.1% within 90 days, completely transforming our revenue velocity.',
    author: 'Dr. Sarah Jenkins',
    role: 'Director of Clinical Operations',
    organization: 'Multi-Specialty Health Network',
    avatarInitials: 'SJ',
    metricBadge: '99.1%',
    metricLabel: 'First-Pass Yield',
    sectorTag: 'CLINICAL SAAS',
  },
  {
    id: 'engineering',
    quote: 'Their dual-hub pod model gave us elite engineers in Dallas and Lahore who took genuine architectural ownership. We accelerated our product release cadence by over 3x without having to scale internal recruiting.',
    author: 'Tariq Al-Mansoor',
    role: 'Head of Engineering & Systems',
    organization: 'Global Logistics Platform',
    avatarInitials: 'TM',
    metricBadge: '3.2x',
    metricLabel: 'Release Velocity',
    sectorTag: 'HYBRID PODS',
  },
];

export function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="relative scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28 overflow-hidden border-b border-border/70"
    >
      {/* ── Ambient Background Lighting ── */}
      <div 
        className="pointer-events-none absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-[#29A8E0]/6 blur-[160px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-10 right-10 h-[450px] w-[450px] rounded-full bg-[#1A6FA8]/5 blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-[#29A8E0] px-4 py-1.5 mb-6 shadow-md shadow-[#29A8E0]/20">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white font-ui">
              PROVEN OPERATIONAL IMPACT
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem]/[1.15] font-semibold tracking-tight text-[#101820] font-sans">
            Delivering measurable results where{' '}
            <span className="inline-block pr-1 font-quote italic font-normal text-brand-steel">
              precision matters.
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-lg leading-relaxed text-slate-600 font-sans max-w-2xl mx-auto">
            See how enterprise leaders scale operational throughput, eliminate administrative lag, and deploy governed AI with Myer Systems.
          </p>
        </div>

        {/* ── 3-Column Executive Testimonial Cards (2-col on tablet with span-2) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={item.id}
              className={`group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-[#F8FAFC] p-6 sm:p-8 shadow-xs transition-all duration-300 hover:border-[#29A8E0]/50 hover:bg-white hover:shadow-xl hover:shadow-[#29A8E0]/10 hover:-translate-y-1 ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Card Top: Sector Tag + Impact Metric Chip */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1A6FA8] bg-white px-2.5 py-1 rounded-md border border-[#1A6FA8]/15">
                    {item.sectorTag}
                  </span>

                  <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full text-emerald-700 text-[11px] font-mono font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{item.metricBadge}</span>
                  </div>
                </div>

                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>

                {/* Quote Body */}
                <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-slate-700 font-sans italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-5 border-t border-slate-200/70 flex items-center gap-3.5">
                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#1A6FA8] to-[#29A8E0] text-white flex items-center justify-center font-bold text-sm tracking-wide shrink-0 shadow-xs">
                  {item.avatarInitials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#101820] font-sans">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">
                    {item.role}
                  </p>
                  <p className="text-[11px] text-slate-500 font-sans">
                    {item.organization}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
