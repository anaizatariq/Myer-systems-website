'use client';

import Link from 'next/link';
import { 
  ArrowUpRight, 
  ExternalLink,
  CheckCircle2,
  Activity
} from 'lucide-react';
import { LiveSignalBeacon } from '@/components/ui/live-signal-beacon';

export function FlagshipPlatform() {
  return (
    <section id="flagship" className="relative scroll-mt-32 border-t border-border/70 bg-background py-16 sm:py-20 lg:py-24 overflow-hidden">
      
      {/* ── Ambient Background Depth ── */}
      <div 
        className="pointer-events-none absolute top-1/4 right-0 h-[650px] w-[650px] rounded-full bg-brand/5 blur-[150px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-10 left-10 h-[500px] w-[500px] rounded-full bg-brand-steel/5 blur-[140px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute inset-0 bg-grid opacity-25" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ── Editorial 2-Column Showcase ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ════════ LEFT COLUMN: High-Vibe Executive Platform Showcase ════════ */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow Chip */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-[#F0FAFF] px-3.5 py-1.5 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                FLAGSHIP PRODUCT · BUILT BY MYER SYSTEMS
              </span>
            </div>

            {/* Display Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem]/[1.15] font-semibold tracking-tight text-[#101820] font-sans">
              How our engineering powers{' '}
              <span className="font-quote italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#1A6FA8] via-[#29A8E0] to-[#1A6FA8]">
                specialized industry platforms
              </span>.
            </h2>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-sans">
              Developed by Myer Systems, MedSynthea demonstrates our enterprise AI and software engineering capabilities applied to one of the most demanding regulated sectors—healthcare.
            </p>

            {/* 3 Outcome Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
              <div className="rounded-2xl border border-[#1A6FA8]/15 bg-white p-4 shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1A6FA8] block mb-1">
                    Card 01
                  </span>
                  <div className="text-sm sm:text-base font-bold text-[#101820] font-sans leading-snug">
                    Organizing Data
                  </div>
                  <p className="text-xs text-slate-600 font-sans mt-1 leading-relaxed">
                    Brings scattered notes, records, and data into one clear view.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#1A6FA8]/15 bg-white p-4 shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#29A8E0] block mb-1">
                    Card 02
                  </span>
                  <div className="text-sm sm:text-base font-bold text-[#101820] font-sans leading-snug">
                    Automating Work
                  </div>
                  <p className="text-xs text-slate-600 font-sans mt-1 leading-relaxed">
                    Reduces routine paperwork so teams focus on high-value tasks.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#1A6FA8]/15 bg-white p-4 shadow-2xs flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                    Card 03
                  </span>
                  <div className="text-sm sm:text-base font-bold text-[#101820] font-sans leading-snug">
                    Accuracy &amp; Control
                  </div>
                  <p className="text-xs text-slate-600 font-sans mt-1 leading-relaxed">
                    Structured with strict privacy standards and human review checks.
                  </p>
                </div>
              </div>
            </div>

            {/* Inline Feature Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-slate-700">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#F0FAFF] px-3 py-1.5 border border-[#1A6FA8]/15 font-semibold">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#29A8E0]" />
                Strict Privacy Guardrails
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#F0FAFF] px-3 py-1.5 border border-[#1A6FA8]/15 font-semibold">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#29A8E0]" />
                Human Oversight Checkpoints
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#F0FAFF] px-3 py-1.5 border border-[#1A6FA8]/15 font-semibold">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#29A8E0]" />
                Seamless System Integration
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="https://medsynthea.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#29A8E0] px-6 py-3 text-xs sm:text-sm font-bold text-[#101820] shadow-md shadow-[#29A8E0]/20 hover:bg-[#1A6FA8] hover:text-white transition-all font-ui cursor-pointer"
              >
                <span>Visit MedSynthea Platform</span>
                <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-6 py-3 text-xs sm:text-sm font-semibold text-ink shadow-xs backdrop-blur-md transition-all duration-200 hover:bg-white hover:border-brand/40 hover:text-brand-steel font-ui cursor-pointer"
              >
                <span>Request Consultation</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

          </div>

          {/* ════════ RIGHT COLUMN: Enterprise Glassmorphic MedSynthea Platform Interface ════════ */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-[#1A6FA8]/30 bg-[#0B141D] p-1.5 sm:p-2 shadow-2xl shadow-[#1A6FA8]/15 overflow-hidden group">
              
              {/* Subtle top laser scanning beam */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#29A8E0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />

              {/* Ambient inner glow */}
              <div className="pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full bg-[#29A8E0]/15 blur-3xl" />

              {/* Window Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-slate-900/90 rounded-t-[22px]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-3 text-[11px] font-mono text-slate-400 font-semibold tracking-wide">
                    MedSynthea™ · Healthcare AI Platform
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-500/20 font-bold">
                    <LiveSignalBeacon color="emerald" size="sm" />
                    HIPAA Compliant
                  </span>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-5 sm:p-6 space-y-4 text-slate-300">
                
                {/* Active Patient Encounter Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3.5">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                      Active Consultation Stream
                    </span>
                    <span className="text-sm font-bold text-white font-mono mt-0.5 block">
                      Encounter #MS-9821 · Clinical Consultation Review
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#8FD6F5] bg-[#29A8E0]/15 border border-[#29A8E0]/30 px-2.5 py-1 rounded-lg font-bold">
                    Status: Active Stream
                  </span>
                </div>

                {/* Real-time Audio / Clinical Synthesis Waveform */}
                <div className="rounded-2xl bg-slate-900/90 border border-white/10 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Activity className="h-3.5 w-3.5 text-[#29A8E0]" />
                      Conversational Voice Processing
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1.5 text-[11px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Structuring...
                    </span>
                  </div>

                  {/* Pulsing Audio Waveform Bars */}
                  <div className="flex items-center gap-1.5 h-8 px-2 bg-slate-950/80 rounded-xl border border-white/5 overflow-hidden">
                    {[35, 60, 20, 85, 45, 95, 70, 40, 80, 55, 30, 90, 65, 45, 75, 100, 50, 80, 40, 60, 85, 30, 70, 90, 45, 65, 80, 40].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-[#29A8E0] rounded-full transition-all duration-300 animate-pulse" 
                        style={{ 
                          height: `${h}%`, 
                          animationDelay: `${(i % 6) * 140}ms`,
                          animationDuration: `${1.2 + (i % 4) * 0.3}s` 
                        }} 
                      />
                    ))}
                  </div>
                </div>

                {/* Generated Extraction Feed */}
                <div className="rounded-2xl bg-slate-900/90 border border-white/10 p-4 space-y-2 font-mono text-xs relative overflow-hidden">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                    Structured Extraction &amp; Verification:
                  </span>
                  <div className="text-slate-200 leading-relaxed text-[11px] sm:text-xs space-y-1.5 pt-0.5">
                    <div>&gt; <span className="text-emerald-400 font-semibold">Clinical Note:</span> Patient telemetry review complete.</div>
                    <div>&gt; <span className="text-[#8FD6F5] font-semibold">Coding Check:</span> CPT 99223 verified against clinical records.</div>
                    <div>&gt; <span className="text-amber-300 font-semibold">Diagnosis Mapping:</span> Cross-referenced with standard diagnostic codes.</div>
                    <div className="flex items-center gap-1.5">
                      &gt; <span className="text-slate-400">Quality Check:</span> 0 Discrepancies · Ready for specialist approval.
                      <span className="inline-block h-3 w-1.5 bg-[#29A8E0] animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Bottom Proof Metrics Strip */}
                <div className="grid grid-cols-3 gap-2.5 pt-1 text-center font-mono">
                  <div className="rounded-xl bg-white/5 p-2.5 border border-white/5">
                    <span className="text-[9.5px] text-slate-400 block uppercase font-bold">Processed</span>
                    <span className="text-sm font-bold text-white mt-0.5 block">
                      48 Records
                    </span>
                  </div>
                  <div className="rounded-xl bg-white/5 p-2.5 border border-white/5">
                    <span className="text-[9.5px] text-slate-400 block uppercase font-bold">Accuracy</span>
                    <span className="text-sm font-bold text-emerald-400 mt-0.5 block">
                      99.4% Verified
                    </span>
                  </div>
                  <div className="rounded-xl bg-white/5 p-2.5 border border-white/5">
                    <span className="text-[9.5px] text-slate-400 block uppercase font-bold">Admin Time</span>
                    <span className="text-sm font-bold text-[#8FD6F5] mt-0.5 block">
                      -40% Saved
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
