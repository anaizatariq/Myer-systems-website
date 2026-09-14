'use client';

import Link from 'next/link';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center overflow-hidden bg-ink pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 lg:pb-20"
    >
      {/* ── 1. Pure Background Video (No grids, no artificial effects) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-[75%_center] lg:object-[82%_center]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Soft dark gradient on the left only for text readability zero grid, zero clutter */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#101820] via-[#101820]/85 via-42% to-transparent z-10 pointer-events-none" 
          aria-hidden="true" 
        />
      </div>

      {/* ── 2. Foreground Content Container ─────────────────── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">

          {/* Left Column: Authentic Myer Systems Narrative */}
          <div className="lg:col-span-8 z-10">
            
            {/* Top Eyebrow Chip */}
            <div className="flex items-center gap-2">
  <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8] animate-pulse" />
  <span className="text-[11px] uppercase tracking-[0.18em] text-[#1A6FA8] font-ui font-bold">
    AUTONOMOUS ENTERPRISE AI &amp; WORKFLOW SYSTEMS
  </span>
</div>

            {/* Display Headline */}
            <h1 className="mt-4 sm:mt-5 text-[2.2rem]/[1.15] sm:text-5xl lg:text-[3.5rem]/[1.12] xl:text-[3.9rem]/[1.12] font-bold tracking-tight text-white font-heading drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              Stop Doing Manually <br className="hidden sm:inline" />
              What AI Can Do in Seconds.
            </h1>

            {/* Concise Subtext */}
            <p className="mt-3.5 sm:mt-4 max-w-xl text-base sm:text-[17px] leading-relaxed text-slate-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-sans font-normal">
              Myer Systems builds enterprise-grade AI systems that automate repetitive manual work, so your team can focus on decisions that actually move the business forward.
            </p>

            {/* Dual CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-[14px] font-bold text-ink shadow-[0_0_24px_rgba(41,168,224,0.45)] transition-all duration-200 hover:bg-[#209FD6] hover:shadow-[0_0_35px_rgba(41,168,224,0.65)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] font-ui"
              >
                <span>Book a Discovery Call</span>
                <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </Link>
              
              <a
                href="#disciplines"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-[14px] font-semibold text-white shadow-xs backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] font-ui"
              >
                <span>Explore Our Services</span>
                <span className="text-xs text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>

          </div>

          {/* Right Column: Clear view of video */}
          <div className="hidden lg:block lg:col-span-4" />

        </div>
      </div>



    </section>
  );
}
