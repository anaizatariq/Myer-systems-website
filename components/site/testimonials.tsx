'use client';

import { Cpu, Activity, Users } from 'lucide-react';

const CAPABILITIES = [
  {
    title: 'Enterprise AI',
    tag: 'SYSTEM ARCHITECTURE',
    icon: Cpu,
    description: 'AI systems designed around accountability, scalability, and control.',
  },
  {
    title: 'Healthcare Operations',
    tag: 'CLINICAL & RCM',
    icon: Activity,
    description: 'Healthcare technology, RCM, and medical billing expertise for complex operational environments.',
  },
  {
    title: 'Intelligent Resource Augmentation',
    tag: 'SPECIALISED TEAMS',
    icon: Users,
    description: 'Technology and specialised expertise to help organisations expand their operational capacity.',
  },
];

export function Testimonials() {
  return (
    <section id="capabilities-overview" className="relative scroll-mt-24 bg-[#F0FAFF] py-16 lg:py-24 overflow-hidden border-t border-[#1A6FA8]/15">
      
      {/* ── Subtle Ambient Glow ── */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[#29A8E0]/10 blur-[150px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="reveal text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-white px-3.5 py-1.5 shadow-2xs mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
              WHAT WE BRING · CORE CAPABILITIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem]/[1.18] font-semibold tracking-tight text-[#101820] font-sans">
            Technology grounded in{' '}
            <span className="inline-block pr-1.5 font-quote italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#1A6FA8] via-[#29A8E0] to-[#1A6FA8]">
              real operational needs
            </span>.
          </h2>
        </div>

        {/* ── 3 Proof Point Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {CAPABILITIES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="reveal-up group relative flex flex-col justify-between rounded-3xl border border-[#1A6FA8]/20 bg-white p-7 sm:p-8 shadow-2xs transition-all duration-300 hover:border-[#29A8E0]/60 hover:shadow-xl hover:shadow-[#29A8E0]/10 hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F0FAFF] border border-[#1A6FA8]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#29A8E0] transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#1A6FA8] group-hover:text-[#29A8E0] transition-colors" />
                  </div>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui mb-2">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-bold text-[#101820] font-heading leading-snug mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-slate-600 font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
