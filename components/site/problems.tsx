'use client';

import { Layers, EyeOff, TrendingUp, Clock } from 'lucide-react';

const PROBLEMS = [
  {
    title: 'Disconnected Tools',
    icon: Layers,
    description: 'Data gets stuck between systems, forcing teams to waste hours on repetitive manual entry.',
  },
  {
    title: 'Unclear Visibility',
    icon: EyeOff,
    description: 'Leadership chases updates instead of seeing live operational performance and real bottlenecks.',
  },
  {
    title: 'High Overhead',
    icon: TrendingUp,
    description: 'Scaling meant hiring more people for repetitive tasks, driving up operating costs every quarter.',
  },
  {
    title: 'Reactive Work',
    icon: Clock,
    description: 'Teams spend their day fixing errors after they happen instead of preventing them upfront.',
  },
];

export function Problems() {
  return (
    <section
      id="what-we-solve"
      className="relative scroll-mt-32 bg-white pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-28 overflow-hidden border-b border-slate-100"
    >
      {/* Subtle radial ambient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(41,168,224,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-[#29A8E0] px-4 py-1.5 mb-6 shadow-md shadow-[#29A8E0]/20">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white font-ui">
              WHAT WE SOLVE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem]/[1.1] font-semibold tracking-tight text-[#101820]">
            Stop letting manual work slow down your growth.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((p, idx) => {
            const Icon = p.icon;
            const isBrand = idx === 0 || idx === 2;

            // Brand cards: solid Light Sky background
            // Non-brand cards: White background with subtle dots
            const baseClass = isBrand
              ? "bg-[#8FD6F5] border-[#29A8E0]/30 hover:bg-[#101820]"
              : "bg-white border-slate-200 hover:bg-[#101820]";
              
            // Dots overlay for non-brand cards
            const dotsOverlay = !isBrand 
              ? <div className="absolute inset-0 opacity-[0.12] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#29A8E0 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              : null;

            return (
              <div
                key={p.title}
                className={`group relative rounded-2xl p-7 sm:p-8 overflow-hidden cursor-default transition-colors duration-500 border shadow-sm hover:border-transparent hover:shadow-[0_20px_60px_rgba(16,24,32,0.15)] ${baseClass}`}
              >
                {dotsOverlay}
                
                {/* Icon */}
                <div className={`relative z-10 h-14 w-14 rounded-xl flex items-center justify-center mb-7 transition-all duration-500 shadow-sm ${
                  isBrand 
                    ? "bg-white border-white text-[#1A6FA8] group-hover:bg-[#8FD6F5] group-hover:text-[#101820] group-hover:border-[#8FD6F5]" 
                    : "bg-[#E0F4FC] border-[#29A8E0]/20 text-[#1A6FA8] group-hover:bg-[#8FD6F5] group-hover:text-[#101820] group-hover:border-[#8FD6F5]"
                }`}>
                  <Icon className="h-[26px] w-[26px]" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl font-extrabold tracking-tight font-heading leading-snug mb-3 text-[#101820] group-hover:text-white transition-colors duration-500">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-[15px] leading-relaxed text-slate-700 group-hover:text-slate-300 transition-colors duration-500">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
