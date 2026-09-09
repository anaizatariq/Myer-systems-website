'use client';

import { Building2, Globe2, ShieldCheck, Clock, Users, ArrowRight } from 'lucide-react';

const HUBS = [
  {
    city: 'Dallas, Texas',
    country: 'United States',
    role: 'GLOBAL HEADQUARTERS & GOVERNANCE',
    icon: Building2,
    description: 'Executive leadership, client strategy, solution architecture, account management, and US regulatory oversight operating during North American business hours.',
    highlights: [
      'Direct US legal entity & contracts',
      'Client strategy & solution architecture',
      'Regular executive updates & oversight',
    ],
  },
  {
    city: 'Lahore, Pakistan',
    country: 'Pakistan',
    role: 'ENGINEERING & DELIVERY HUB',
    icon: Globe2,
    description: 'A specialized technology center housing software engineers, AI developers, medical billing experts, and dedicated operational pods delivering continuous execution.',
    highlights: [
      'High-capacity software & AI engineering',
      'Certified medical billing & coding teams',
      'Scalable operational pods on demand',
    ],
  },
];

export function GlobalDelivery() {
  return (
    <section 
      id="global-delivery" 
      className="relative scroll-mt-24 border-t border-border/80 bg-white py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* ── Ambient Background Depth ── */}
      <div 
        className="pointer-events-none absolute top-10 left-1/3 h-[450px] w-[450px] rounded-full bg-[#29A8E0]/6 blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-[#29A8E0] px-4 py-1.5 mb-6 shadow-md shadow-[#29A8E0]/20">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white font-ui">
              GLOBAL PRESENCE
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem]/[1.15] font-semibold tracking-tight text-[#101820] font-sans">
            US accountability. Global delivery scale.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            We combine local, US-based leadership with dedicated technical and delivery centers to give you direct accountability paired with high-capacity execution.
          </p>
        </div>

        {/* ── Dual Hub Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {HUBS.map((hub) => {
            const Icon = hub.icon;

            return (
              <div
                key={hub.city}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#F8FAFC] p-7 sm:p-9 shadow-xs hover:shadow-xl hover:shadow-[#1A6FA8]/10 hover:border-[#29A8E0]/50 hover:bg-white hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-slate-200/70 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-[#101820] text-[#29A8E0] flex items-center justify-center shadow-xs">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-[#101820] font-heading">
                          {hub.city}
                        </h3>
                        <span className="text-xs text-slate-500 font-sans">
                          {hub.country}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-[#1A6FA8]/10 text-[#1A6FA8] border border-[#1A6FA8]/20">
                      Active Hub
                    </span>
                  </div>

                  {/* Role & Description */}
                  <div className="mt-5">
                    <span className="text-[10.5px] font-bold font-mono uppercase tracking-wider text-[#1A6FA8] block">
                      {hub.role}
                    </span>
                    <p className="mt-2.5 text-sm text-slate-600 font-sans leading-relaxed">
                      {hub.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="mt-6 pt-5 border-t border-slate-200/60 space-y-2.5">
                    {hub.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-sans">
                        <span className="text-[#1A6FA8] font-bold mt-0.5">✓</span>
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Trust Chip */}
                <div className="mt-8 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#1A6FA8]" />
                    Synchronized Execution
                  </span>
                  <span className="text-[#101820] font-bold">Myer Systems</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
