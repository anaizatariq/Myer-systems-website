'use client';

import Link from 'next/link';
import { 
  ArrowUpRight, 
  ExternalLink,
  Check,
  FileText,
  Sparkles,
  Database,
  Search
} from 'lucide-react';
import { LiveSignalBeacon } from '@/components/ui/live-signal-beacon';

export function FlagshipPlatform() {
  return (
    <section 
      id="flagship" 
      className="relative scroll-mt-24 border-t border-border/70 bg-background py-14 sm:py-18 lg:py-20 overflow-hidden"
    >
      {/* ── Ambient Background Depth ── */}
      <div 
        className="pointer-events-none absolute top-1/4 right-0 h-[450px] w-[450px] rounded-full bg-[#29A8E0]/7 blur-[140px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-10 left-10 h-[450px] w-[450px] rounded-full bg-[#1A6FA8]/6 blur-[130px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ── 2-Column Showcase ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* ════════ LEFT COLUMN: Narrative + Actions ════════ */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Eyebrow Chip */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-[#29A8E0] px-4 py-1.5 mb-6 shadow-md shadow-[#29A8E0]/20">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white font-ui">
              FLAGSHIP PLATFORM
            </span>
          </div>

            {/* Display Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem]/[1.15] font-semibold tracking-tight text-[#101820] font-sans">
              MedSynthea: Smarter data for healthcare teams.
            </h2>

            {/* Subhead */}
            <p className="text-base sm:text-[17px] leading-relaxed text-slate-600 font-sans max-w-lg">
              Developed by Myer Systems, MedSynthea is an AI platform designed to bring medical data together and simplify clinical and administrative workflows for healthcare providers.
            </p>

            {/* 3 Core Points */}
            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-lg bg-[#29A8E0]/15 flex items-center justify-center text-[#1A6FA8] shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#101820]">Unified Medical Data</h3>
                  <p className="text-xs sm:text-[13px] text-slate-600">Connects scattered clinical, billing, and operational records into one clear view.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-lg bg-[#29A8E0]/15 flex items-center justify-center text-[#1A6FA8] shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#101820]">Less Administrative Burden</h3>
                  <p className="text-xs sm:text-[13px] text-slate-600">Automates repetitive documentation and routine lookups so staff spend less time on paperwork.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-lg bg-[#29A8E0]/15 flex items-center justify-center text-[#1A6FA8] shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#101820]">Faster Answers</h3>
                  <p className="text-xs sm:text-[13px] text-slate-600">Helps teams find critical information instantly, improving daily turnaround times.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
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
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full border border-border/80 bg-white/80 px-6 py-3 text-xs sm:text-sm font-semibold text-ink shadow-xs backdrop-blur-md transition-all duration-200 hover:bg-white hover:border-[#29A8E0]/40 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] font-ui cursor-pointer"
              >
                <span>Request Platform Demo</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

          </div>

          {/* ════════ RIGHT COLUMN: Product Cockpit Visual ════════ */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-[#1A6FA8]/30 bg-[#0B141D] p-2 sm:p-2.5 shadow-2xl shadow-[#1A6FA8]/15 overflow-hidden group">
              
              {/* Window Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-slate-900/90 rounded-t-[22px]">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex gap-1.5 shrink-0">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-2 text-[10.5px] sm:text-[11px] font-mono text-slate-300 font-bold tracking-wide truncate">
                    MedSynthea™ · Clinical Intelligence Platform
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9.5px] font-mono text-emerald-400 border border-emerald-500/20 font-bold">
                    <LiveSignalBeacon color="emerald" size="sm" />
                    Active Runtime
                  </span>
                </div>
              </div>

              {/* Product Body: Clean, High-Contrast Capabilities */}
              <div className="p-4 sm:p-6 space-y-3.5 text-slate-300">
                
                {/* 1. Intake Step */}
                <div className="flex items-center justify-between gap-2 p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-[#29A8E0]/15 border border-[#29A8E0]/30 flex items-center justify-center text-[#29A8E0] shrink-0">
                      <Database className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white font-sans">
                        Medical Data Ingestion
                      </div>
                      <div className="text-[11px] text-slate-400 font-sans">
                        Clinical encounters, EHR records &amp; billing inputs
                      </div>
                    </div>
                  </div>
                  <span className="text-[9.5px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 font-bold flex items-center gap-1 shrink-0">
                    <Check className="h-3 w-3" /> Ingested
                  </span>
                </div>

                {/* 2. Synthesis Step */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#1A6FA8]/20 via-[#29A8E0]/15 to-transparent border border-[#29A8E0]/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-[#29A8E0]" />
                      <span className="text-xs font-bold text-white font-sans">
                        Intelligent Workflow Synthesis
                      </span>
                    </div>
                    <span className="text-[9.5px] font-mono text-[#8FD6F5] bg-[#29A8E0]/20 px-2 py-0.5 rounded font-bold">
                      Structured
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-sans">
                    <div className="bg-[#0B141D]/90 rounded-xl p-2.5 border border-white/10">
                      <span className="text-slate-400 block text-[10px] font-medium">Documentation:</span>
                      <span className="text-white font-bold text-xs mt-0.5 block">Automated Summary</span>
                    </div>
                    <div className="bg-[#0B141D]/90 rounded-xl p-2.5 border border-white/10">
                      <span className="text-slate-400 block text-[10px] font-medium">Administrative Flow:</span>
                      <span className="text-emerald-400 font-bold text-xs mt-0.5 block">Ready for Review</span>
                    </div>
                  </div>
                </div>

                {/* 3. Output Capabilities */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl bg-white/[0.04] p-2.5 border border-white/5">
                    <span className="text-xs font-bold text-emerald-400 block font-sans">
                      Structured
                    </span>
                    <span className="text-[10px] text-slate-400 block font-sans mt-0.5">
                      Clinical Records
                    </span>
                  </div>
                  <div className="rounded-xl bg-white/[0.04] p-2.5 border border-white/5">
                    <span className="text-xs font-bold text-[#8FD6F5] block font-sans">
                      Automated
                    </span>
                    <span className="text-[10px] text-slate-400 block font-sans mt-0.5">
                      Routine Lookups
                    </span>
                  </div>
                  <div className="rounded-xl bg-white/[0.04] p-2.5 border border-white/5">
                    <span className="text-xs font-bold text-white block font-sans">
                      Audit-Ready
                    </span>
                    <span className="text-[10px] text-slate-400 block font-sans mt-0.5">
                      Traceable Actions
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
