'use client';

import Link from 'next/link';
import { 
  ArrowUpRight, 
  ExternalLink,
  Check,
  FileText,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { LiveSignalBeacon } from '@/components/ui/live-signal-beacon';

export function FlagshipPlatform() {
  return (
    <section 
      id="flagship" 
      className="relative scroll-mt-24 border-t border-border/70 bg-background py-10 sm:py-12 lg:py-14 overflow-hidden"
    >
      {/* ── Ambient Background Depth ── */}
      <div 
        className="pointer-events-none absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[140px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-10 left-10 h-[450px] w-[450px] rounded-full bg-brand-steel/5 blur-[130px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute inset-0 bg-grid opacity-20" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── 2-Column Showcase (Compact Single Viewport Fit) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ════════ LEFT COLUMN: Concise, Meaningful Narrative + CTAs ════════ */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Eyebrow Chip */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-[#F0FAFF] px-3.5 py-1.5 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                FLAGSHIP PLATFORM · MEDSYNTHEA
              </span>
            </div>

            {/* Display Headline: Shorter & Meaningful */}
            <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem]/[1.15] font-semibold tracking-tight text-[#101820] font-sans">
              Specialized Software.{' '}
              <span className="font-quote italic font-normal text-brand-steel inline-block">
                Engineered for Scale.
              </span>
            </h2>

            {/* Concise 2-Line Paragraph */}
            <p className="text-base sm:text-[17px] leading-relaxed text-slate-600 font-sans max-w-lg">
              MedSynthea is our flagship clinical AI platform built to eliminate administrative overhead, automate complex documentation, and ensure regulatory compliance in healthcare.
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
              <a
                href="https://medsynthea.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#29A8E0] px-6 py-3 text-xs sm:text-sm font-bold text-[#101820] shadow-md shadow-[#29A8E0]/20 hover:bg-[#209FD6] hover:shadow-[0_6px_20px_rgba(41,168,224,0.38)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 font-ui cursor-pointer"
              >
                <span>Visit MedSynthea Platform</span>
                <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                href="/contact"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full border border-border/80 bg-white/80 px-6 py-3 text-xs sm:text-sm font-semibold text-ink shadow-xs backdrop-blur-md transition-all duration-200 hover:bg-white hover:border-brand/50 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] font-ui cursor-pointer"
              >
                <span>Request Consultation</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

          </div>

          {/* ════════ RIGHT COLUMN: Clear, Non-Tech Friendly Product Cockpit ════════ */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-[#1A6FA8]/30 bg-[#0B141D] p-1.5 sm:p-2 shadow-2xl shadow-[#1A6FA8]/15 overflow-hidden group">
              
              {/* Subtle top laser scanning beam */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#29A8E0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />

              {/* Ambient inner glow */}
              <div className="pointer-events-none absolute top-0 right-0 h-44 w-44 rounded-full bg-[#29A8E0]/15 blur-3xl" />

              {/* Window Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-3.5 sm:px-5 py-2.5 sm:py-3 bg-slate-900/90 rounded-t-[22px]">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex gap-1.5 shrink-0">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-2 sm:ml-3 text-[10px] sm:text-[11px] font-mono text-slate-300 font-bold tracking-wide truncate">
                    MedSynthea™ · Clinical Operations Platform
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9.5px] sm:text-[10px] font-mono text-emerald-400 border border-emerald-500/20 font-bold">
                    <LiveSignalBeacon color="emerald" size="sm" />
                    Live System
                  </span>
                </div>
              </div>

              {/* Intuitive Product Body: Easy to Understand for Any Non-Tech Person */}
              <div className="p-4 sm:p-6 space-y-3.5 text-slate-300">
                
                {/* 1. Intake Step: Patient Consultation */}
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 p-3 sm:p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-[#29A8E0]/15 border border-[#29A8E0]/30 flex items-center justify-center text-[#29A8E0] shrink-0">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white font-sans">
                        Patient Consultation &amp; Telemetry
                      </div>
                      <div className="text-[10.5px] sm:text-[11px] text-slate-400 font-sans">
                        Clinical conversation &bull; EHR records ingested
                      </div>
                    </div>
                  </div>
                  <span className="self-start xs:self-auto text-[9.5px] sm:text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 font-bold flex items-center gap-1 shrink-0">
                    <Check className="h-3 w-3" /> Transcribed
                  </span>
                </div>

                {/* 2. Automated Synthesis Card */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#1A6FA8]/20 via-[#29A8E0]/15 to-transparent border border-[#29A8E0]/30 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-[#29A8E0]" />
                      <span className="text-xs font-bold text-white font-sans">
                        AI Structuring &amp; Code Verification
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#8FD6F5] bg-[#29A8E0]/20 px-2 py-0.5 rounded font-bold">
                      Zero Errors
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-sans">
                    <div className="bg-[#0B141D]/90 rounded-xl p-2.5 border border-white/10">
                      <span className="text-slate-400 block text-[10px] font-medium">Medical Codes:</span>
                      <span className="text-white font-bold text-xs mt-0.5 block">CPT 99223 &bull; Verified</span>
                    </div>
                    <div className="bg-[#0B141D]/90 rounded-xl p-2.5 border border-white/10">
                      <span className="text-slate-400 block text-[10px] font-medium">Pre-Claim Scrubbing:</span>
                      <span className="text-emerald-400 font-bold text-xs mt-0.5 block">Ready for Sign-Off</span>
                    </div>
                  </div>
                </div>

                {/* 3. Proof Metrics: Clear, Non-Technical Results */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 text-center">
                  <div className="rounded-xl bg-white/[0.04] p-2 sm:p-3 border border-white/5">
                    <span className="text-sm sm:text-lg font-bold text-emerald-400 block font-sans">
                      99.4%
                    </span>
                    <span className="text-[9.5px] sm:text-[10.5px] text-slate-400 block font-sans mt-0.5 font-medium leading-tight">
                      Clean Claims
                    </span>
                  </div>
                  <div className="rounded-xl bg-white/[0.04] p-2 sm:p-3 border border-white/5">
                    <span className="text-sm sm:text-lg font-bold text-[#8FD6F5] block font-sans">
                      40% Saved
                    </span>
                    <span className="text-[9.5px] sm:text-[10.5px] text-slate-400 block font-sans mt-0.5 font-medium leading-tight">
                      Admin Time
                    </span>
                  </div>
                  <div className="rounded-xl bg-white/[0.04] p-2 sm:p-3 border border-white/5">
                    <span className="text-sm sm:text-lg font-bold text-white block font-sans">
                      100%
                    </span>
                    <span className="text-[9.5px] sm:text-[10.5px] text-slate-400 block font-sans mt-0.5 font-medium leading-tight">
                      HIPAA Secure
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
