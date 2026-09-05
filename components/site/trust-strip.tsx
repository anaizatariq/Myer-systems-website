'use client';

import { AnimatedCounter } from '@/components/ui/animated-counter';

interface MetricItem {
  id: string;
  isNumeric: boolean;
  value?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  text?: string;
  title: string;
  subtitle: string;
  hasLivePulse?: boolean;
}

const METRICS: MetricItem[] = [
  {
    id: 'claims',
    isNumeric: true,
    value: 100,
    prefix: '$',
    suffix: 'M+',
    title: 'Healthcare Claims',
    subtitle: 'Audited & Ingested',
    hasLivePulse: true,
  },
  {
    id: 'accuracy',
    isNumeric: true,
    value: 99.4,
    decimals: 1,
    suffix: '%',
    title: 'Billing Accuracy',
    subtitle: 'AAPC / AHIMA SLA',
  },
  {
    id: 'growth',
    isNumeric: true,
    value: 250,
    suffix: '%',
    title: 'Operational Scale',
    subtitle: 'Year-over-Year Growth',
  },
  {
    id: 'coverage',
    isNumeric: true,
    value: 24,
    suffix: '/7',
    title: 'Dual-Hub Synchrony',
    subtitle: 'Dallas HQ + Global Hub',
  },
  {
    id: 'trust',
    isNumeric: false,
    text: 'Zero',
    title: 'Deterministic Trust',
    subtitle: 'Unaudited Black Boxes',
  },
];

export function TrustStrip() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0FAFF] via-white/80 to-white py-6 sm:py-7 lg:py-8">
      
      {/* ── Top Radiant Sky-Blue Horizon Glow Bar (Ref Image Style) ── */}
      <div 
        className="pointer-events-none absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#29A8E0]/60 to-transparent" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-14 w-full max-w-4xl bg-gradient-to-b from-[#29A8E0]/15 via-[#29A8E0]/3 to-transparent blur-xl" 
        aria-hidden="true" 
      />

      {/* ── Main Horizon Flow with Left/Right Fading Mask (Ref Image Exact Style) ── */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] sm:[mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] py-1">
          
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-y-4 gap-x-6 sm:gap-x-8 lg:gap-x-10 px-4 sm:px-8">
            
            {/* Left Vertical Hairline Anchor (Ref Image Style) */}
            <div 
              className="hidden lg:block h-8 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent shrink-0" 
              aria-hidden="true" 
            />

            {METRICS.map((item, idx) => (
              <div key={item.id} className="flex items-center gap-6 lg:gap-8 shrink-0">
                
                {/* Thin Vertical Hairline Separator between items */}
                {idx > 0 && (
                  <div 
                    className="hidden sm:block h-7 w-px bg-gradient-to-b from-transparent via-slate-300/70 to-transparent shrink-0" 
                    aria-hidden="true" 
                  />
                )}

                {/* Metric Unit - Lite, Small, Elegant (No Bold) */}
                <div className="group flex items-center gap-3 transition-colors duration-200 cursor-default">
                  
                  {/* Clean, Refined Number with Animated Counter */}
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl sm:text-[1.35rem] font-medium tracking-tight text-[#101820] font-heading leading-none group-hover:text-[#1A6FA8] transition-colors duration-200">
                      {item.isNumeric && item.value !== undefined ? (
                        <AnimatedCounter
                          value={item.value}
                          prefix={item.prefix}
                          suffix={item.suffix}
                          decimals={item.decimals}
                          duration={1400}
                          delay={idx * 90}
                        />
                      ) : (
                        <span className="text-[#1A6FA8] font-heading font-medium">
                          {item.text}
                        </span>
                      )}
                    </span>

                    {/* Live Pulse Beacon on Primary Metric */}
                    {item.hasLivePulse && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#29A8E0] opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#1A6FA8]" />
                      </span>
                    )}
                  </div>

                  {/* Clean 2-Line Stacked Micro-Label (Light weight & small font) */}
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-[12.5px] font-normal text-[#101820]/85 font-sans leading-tight whitespace-nowrap">
                      {item.title}
                    </span>
                    <span className="text-[10.5px] text-muted-foreground/75 font-sans leading-tight whitespace-nowrap mt-0.5 font-light">
                      {item.subtitle}
                    </span>
                  </div>

                </div>

              </div>
            ))}

            {/* Right Vertical Hairline Anchor (Ref Image Style) */}
            <div 
              className="hidden lg:block h-8 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent shrink-0" 
              aria-hidden="true" 
            />

          </div>

        </div>
      </div>

      {/* ── Soft Bottom Fade Edge ── */}
      <div 
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200/60 to-transparent" 
        aria-hidden="true" 
      />
    </section>
  );
}
