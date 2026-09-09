'use client';

import Link from 'next/link';
import { ArrowUpRight, Calendar, Mail, Building2, Globe2, CheckCircle2 } from 'lucide-react';

export function CtaBanner() {
  return (
    <section id="contact" className="relative scroll-mt-24 bg-[#F8FAFC] pt-6 pb-16 sm:pb-20 lg:pt-8 lg:pb-24 overflow-hidden border-t border-slate-200/70">
      
      {/* ── Ambient Glows ── */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#29A8E0]/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1A6FA8] via-[#218DC4] to-[#29A8E0] px-6 py-12 sm:px-12 sm:py-16 text-center shadow-2xl shadow-[#29A8E0]/20 border border-white/20">
          
          {/* Subtle Inner Glass Highlights */}
          <div
            className="pointer-events-none absolute -left-20 top-0 h-[350px] w-[350px] rounded-full bg-white/15 blur-[90px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-20 bottom-0 h-[350px] w-[350px] rounded-full bg-white/15 blur-[90px]"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#29A8E0] px-4 py-1.5 mb-2 shadow-md shadow-[#29A8E0]/20">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white font-ui">
                GET STARTED
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem]/[1.1] font-extrabold tracking-tight text-white font-sans">
              Ready to build smarter?
            </h2>

            {/* Subhead */}
            <p className="text-base sm:text-lg leading-relaxed text-white/90 font-sans max-w-xl mx-auto">
              Schedule a briefing to discuss how our custom enterprise systems and dedicated teams can support your operations.
            </p>

            {/* Dual CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#101820] shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:bg-[#F0FAFF] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] font-ui cursor-pointer"
              >
                <Calendar className="h-4 w-4 text-[#1A6FA8]" />
                <span>Schedule a Consultation</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href="mailto:info@myersystems.ai"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/60 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] font-ui cursor-pointer"
              >
                <Mail className="h-4 w-4 text-white" />
                <span>info@myersystems.ai</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
