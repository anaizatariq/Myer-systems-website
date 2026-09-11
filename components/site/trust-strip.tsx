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
    id: 'founded',
    isNumeric: true,
    value: 2023,
    title: 'Founded',
    subtitle: 'Dallas, TX',
  },
  {
    id: 'growth',
    isNumeric: true,
    value: 250,
    suffix: '%',
    title: 'Team Growth',
    subtitle: 'Year-Over-Year',
    hasLivePulse: true,
  },
  {
    id: 'hubs',
    isNumeric: false,
    text: 'Dual Hubs',
    title: 'Dallas HQ',
    subtitle: 'Lahore Delivery Hub',
  },
  {
    id: 'clients',
    isNumeric: false,
    text: 'Global',
    title: 'Serving Clients',
    subtitle: 'North America & Beyond',
  },
];

export function TrustStrip() {
  return (
    <section className="relative overflow-hidden bg-[#0A1017] border-t border-white/5 border-b border-[#29A8E0]/10 py-8 sm:py-10">
      
      {/* ── Top Radiant Sky-Blue Horizon Glow Bar ── */}
      <div 
        className="pointer-events-none absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#29A8E0]/40 to-transparent" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-14 w-full max-w-4xl bg-gradient-to-b from-[#29A8E0]/15 via-[#29A8E0]/5 to-transparent blur-xl" 
        aria-hidden="true" 
      />

      {/* ── Main Content ── */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:flex lg:flex-nowrap items-center justify-between gap-y-8 gap-x-6 sm:gap-x-8 lg:gap-x-10 px-0 lg:px-8">
            
            {/* Left Vertical Hairline Anchor */}
            <div 
              className="hidden lg:block h-8 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent shrink-0" 
              aria-hidden="true" 
            />

            {METRICS.map((item, idx) => (
              <div key={item.id} className="flex items-center gap-4 lg:gap-8 shrink-0">
                
                {/* Thin Vertical Hairline Separator between items (desktop only) */}
                {idx > 0 && (
                  <div 
                    className="hidden lg:block h-7 w-px bg-gradient-to-b from-transparent via-slate-700/70 to-transparent shrink-0" 
                    aria-hidden="true" 
                  />
                )}

                {/* Metric Unit */}
                <div className="group flex items-center gap-3 sm:gap-4 transition-colors duration-200 cursor-default">
                  
                  {/* Number/Prefix */}
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-[1.55rem] font-medium tracking-tight text-white font-heading leading-none group-hover:text-[#29A8E0] transition-colors duration-200">
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
                        <span className="text-[#29A8E0] font-heading font-medium">
                          {item.text}
                        </span>
                      )}
                    </span>

                    {/* Live Pulse Beacon on Primary Metric */}
                    {item.hasLivePulse && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#29A8E0] opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#29A8E0]" />
                      </span>
                    )}
                  </div>

                  {/* Micro-Label */}
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-[13px] font-medium text-slate-200 font-sans leading-tight ">
                      {item.title}
                    </span>
                    <span className="text-[10.5px] sm:text-[11px] text-slate-400 font-sans leading-tight  mt-0.5">
                      {item.subtitle}
                    </span>
                  </div>

                </div>

              </div>
            ))}

            {/* Right Vertical Hairline Anchor */}
            <div 
              className="hidden lg:block h-8 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent shrink-0" 
              aria-hidden="true" 
            />

          </div>

        </div>
      </div>
    </section>
  );
}
