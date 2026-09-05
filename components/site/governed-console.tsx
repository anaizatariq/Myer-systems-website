'use client';

import { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  ShieldCheck, 
  Activity, 
  Layers, 
  Sparkles, 
  TrendingUp, 
  FileText, 
  Workflow 
} from 'lucide-react';

interface StepItem {
  id: string;
  name: string;
  sub: string;
  cardTitle: string;
  badge: string;
  stat: string;
  type: 'card' | 'chart' | 'approval';
}

const STEPS: StepItem[] = [
  {
    id: 'intake',
    name: 'Smart Intake',
    sub: 'Automated data reading',
    cardTitle: 'Multi-Source Data & Document Intake',
    badge: 'AI Automation',
    stat: 'Incoming data processed without manual typing',
    type: 'card',
  },
  {
    id: 'processing',
    name: 'Verification',
    sub: 'Structuring & error checking',
    cardTitle: 'Automated Validation & Error Detection',
    badge: 'Quality Check',
    stat: 'Records verified and discrepancies flagged',
    type: 'approval',
  },
  {
    id: 'human-review',
    name: 'Human Checkpoint',
    sub: 'Specialists in control',
    cardTitle: 'Trained Specialist Review & Approval',
    badge: 'Human + AI Agent',
    stat: 'Experienced specialists verify important decisions',
    type: 'card',
  },
  {
    id: 'telemetry',
    name: 'Live Visibility',
    sub: 'Tracking performance',
    cardTitle: 'Operational Throughput & Quality Yield',
    badge: 'Live Dashboard',
    stat: 'Continuous tracking of speed, volume, and accuracy',
    type: 'chart',
  },
];

export function GovernedConsole() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Deterministic 3-second auto-cycle cycling cleanly: 1 -> 2 -> 3 -> 4 -> 1
  useEffect(() => {
    if (isPaused) return;

    const STEP_DURATION = 3000; // 3.0 seconds per step
    const TICK_INTERVAL = 30; // 30ms smooth updates
    let startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      
      if (elapsed >= STEP_DURATION) {
        startTime = Date.now();
        setProgress(0);
        setActiveIdx((curr) => (curr + 1) % STEPS.length);
      } else {
        const pct = Math.min((elapsed / STEP_DURATION) * 100, 100);
        setProgress(pct);
      }
    }, TICK_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, activeIdx]);

  const handleStepClick = (idx: number) => {
    setActiveIdx(idx);
    setProgress(0);
  };

  const handlePrev = () => {
    setActiveIdx((curr) => (curr - 1 + STEPS.length) % STEPS.length);
    setProgress(0);
  };

  const handleNext = () => {
    setActiveIdx((curr) => (curr + 1) % STEPS.length);
    setProgress(0);
  };

  const current = STEPS[activeIdx];

  return (
    <section 
      className="relative bg-[#F0FAFF] py-10 sm:py-12 lg:py-16 overflow-hidden border-b border-border/80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Ambient Under-Glow (Myer Sky Blue & Steel) ── */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[1000px] rounded-full bg-[#29A8E0]/15 blur-[160px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-[#1A6FA8]/15 blur-[140px]" 
        aria-hidden="true" 
      />

      {/* ── Container Matching Hero Section Margins Exactly (max-w-7xl px-6 lg:px-8) ── */}
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        
        {/* ══════════════════════════════════════════════════════════════════
            THE CINEMATIC SCREEN CONSOLE (PROPER MARGINS, ROUNDED-3XL)
        ══════════════════════════════════════════════════════════════════ */}
        <div className="relative rounded-3xl border border-[#1A6FA8]/40 bg-[#080F16] shadow-2xl shadow-[#101820]/30 overflow-hidden">
          
          {/* Subtle Top Glowing Horizon Line */}
          <div 
            className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#29A8E0] to-transparent pointer-events-none z-10" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[480px] sm:min-h-[520px] lg:min-h-[540px] items-stretch">
            
            {/* ════════ LEFT SIDEBAR: PURE MINIMALIST TYPOGRAPHY (Ref 2 Style) ════════ */}
            <div className="md:col-span-4 lg:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 bg-[#060D14]/70">
              <div className="space-y-6 sm:space-y-8">
                {STEPS.map((step, idx) => {
                  const isActive = activeIdx === idx;

                  return (
                    <button
                      key={step.id}
                      onClick={() => handleStepClick(idx)}
                      className="w-full text-left transition-all duration-300 flex items-center justify-between group focus:outline-hidden"
                    >
                      <div>
                        <div className={`text-base sm:text-lg lg:text-xl font-bold font-heading transition-colors duration-200 ${
                          isActive ? 'text-white' : 'text-white/35 group-hover:text-white/70'
                        }`}>
                          {step.name}
                        </div>

                        {isActive && (
                          <div className="text-xs sm:text-[13px] text-[#8FD6F5] font-sans mt-1 animate-fadeIn">
                            {step.sub}
                          </div>
                        )}
                      </div>

                      {/* Circular Progress Ring on Active Item (Ref 2 exact style) */}
                      {isActive ? (
                        <div className="relative h-6 w-6 shrink-0 flex items-center justify-center">
                          <svg className="h-6 w-6 -rotate-90">
                            <circle
                              cx="12"
                              cy="12"
                              r="9"
                              stroke="rgba(255,255,255,0.15)"
                              strokeWidth="2"
                              fill="none"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="9"
                              stroke="#29A8E0"
                              strokeWidth="2.2"
                              strokeDasharray={56}
                              strokeDashoffset={56 - (56 * progress) / 100}
                              strokeLinecap="round"
                              fill="none"
                              className="transition-all duration-75"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="h-1.5 w-1.5 rounded-full bg-white/10 group-hover:bg-white/30 transition-colors" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ════════ RIGHT STAGE: FLOATING DYNAMIC MOCKUP (Ref 2 Style) ════════ */}
            <div className="md:col-span-8 lg:col-span-9 p-6 sm:p-10 lg:p-14 relative flex items-center justify-center bg-[#09121B]">
              
              {/* Subtle Radial Center Glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(41,168,224,0.12)_0,transparent_70%)]" />

              {/* Left & Right Step Buttons (Ref 2 Style) */}
              <button 
                onClick={handlePrev}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors z-20"
                aria-label="Previous step"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <button 
                onClick={handleNext}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors z-20"
                aria-label="Next step"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* ── THE CENTER FLOATING STACKED CARD (Exact Ref 2 Architecture) ── */}
              <div className="relative w-full max-w-lg lg:max-w-xl">
                
                {/* Back Stack Layer 2 */}
                <div className="absolute -top-3.5 inset-x-8 h-full rounded-2xl bg-white/[0.02] border border-white/5 pointer-events-none" />
                {/* Back Stack Layer 1 */}
                <div className="absolute -top-1.5 inset-x-4 h-full rounded-2xl bg-white/[0.04] border border-white/10 pointer-events-none" />

                {/* Main Foreground Card */}
                <div className="relative rounded-2xl border border-[#1A6FA8]/40 bg-[#0F1B26] p-6 sm:p-8 shadow-2xl shadow-black/80 backdrop-blur-2xl">
                  
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
                    <div className="space-y-1">
                      <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white font-heading leading-tight">
                        {current.cardTitle}
                      </h4>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#8FD6F5]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
                        <span>{current.stat}</span>
                      </div>
                    </div>

                    <span className="shrink-0 inline-flex items-center rounded-md bg-white/5 border border-white/15 px-2.5 py-1 text-[10px] font-mono text-[#8FD6F5] uppercase tracking-wider">
                      {current.badge}
                    </span>
                  </div>

                  {/* ── DYNAMIC BODY CONTENT (Switches with 2.8s rhythm) ── */}
                  <div className="py-6 min-h-[140px] flex flex-col justify-center">
                    
                    {/* MODE: Card Data Bars / Icons (Intake & Governance) */}
                    {(current.type === 'card' || current.type === 'approval') && (
                      <div className="space-y-3.5 animate-fadeIn">
                        {/* 3 Model/System Avatar Icons + Counter */}
                        <div className="flex items-center gap-2.5">
                          <div className="flex -space-x-1.5">
                            <span className="h-7 w-7 rounded-full bg-[#1A6FA8] border-2 border-[#0F1B26] flex items-center justify-center text-[9px] text-white font-bold uppercase">
                              DATA
                            </span>
                            <span className="h-7 w-7 rounded-full bg-[#29A8E0] border-2 border-[#0F1B26] flex items-center justify-center text-[9px] text-white font-bold uppercase">
                              AI
                            </span>
                            <span className="h-7 w-7 rounded-full bg-emerald-500 border-2 border-[#0F1B26] flex items-center justify-center text-[10px] text-white font-bold">
                              <Check className="h-3.5 w-3.5 stroke-[3]" />
                            </span>
                          </div>
                          <span className="text-xs font-mono text-white/70">
                            {activeIdx === 0 && 'Documents, records & data streams processed automatically'}
                            {activeIdx === 1 && 'Data structured, errors detected, and exceptions queued'}
                            {activeIdx === 2 && 'Trained human experts verify edge cases before execution'}
                          </span>
                        </div>

                        {/* Graphic Skeletal Data Bars */}
                        <div className="space-y-2 pt-1">
                          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-[#1A6FA8] to-[#29A8E0] rounded-full transition-all duration-700" 
                              style={{ width: activeIdx === 0 ? '78%' : activeIdx === 1 ? '92%' : '85%' }}
                            />
                          </div>
                          <div className="h-2 w-3/4 rounded-full bg-white/5" />
                        </div>
                      </div>
                    )}

                    {/* MODE: Output & Quality Chart */}
                    {current.type === 'chart' && (
                      <div className="space-y-3 animate-fadeIn">
                        <div className="flex items-center justify-between text-[11px] font-mono">
                          <span className="text-[#29A8E0] font-bold flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-[#29A8E0] animate-pulse" />
                            Operational Output &amp; Accuracy
                          </span>
                          <span className="text-emerald-400 font-bold">Verified Quality</span>
                        </div>

                        {/* Glowing Chart Line Graphic */}
                        <div className="h-20 w-full relative pt-1">
                          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 70">
                            {/* Flat baseline curve */}
                            <path
                              d="M 0 55 Q 100 50, 200 48 T 300 45"
                              fill="none"
                              stroke="rgba(255,255,255,0.2)"
                              strokeWidth="2"
                            />
                            {/* Surging Myer curve */}
                            <path
                              d="M 0 60 Q 70 48, 150 30 T 250 14 T 300 8"
                              fill="none"
                              stroke="#29A8E0"
                              strokeWidth="3.5"
                              className="drop-shadow-[0_0_8px_#29A8E0]"
                            />
                            <circle cx="300" cy="8" r="4.5" fill="#FFFFFF" stroke="#29A8E0" strokeWidth="2.5" />
                          </svg>
                        </div>

                        <div className="flex justify-between text-[9px] font-mono text-white/40 pt-1 border-t border-white/10">
                          <span>Jan</span>
                          <span>Apr</span>
                          <span>Jul</span>
                          <span>Oct</span>
                          <span className="text-[#8FD6F5] font-bold">Dec (Verified)</span>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* ── Interactive Floating Bottom Action Buttons (Ref 2 Exact Style) ── */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-end gap-3">
                    <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white/80 font-ui transition-colors">
                      Request change
                    </button>
                    <button className="px-5 py-2 rounded-xl bg-[#101820] hover:bg-[#1A2530] border border-[#29A8E0]/40 text-xs font-bold text-white font-ui shadow-lg shadow-[#29A8E0]/15 flex items-center gap-1.5 transition-all">
                      <Check className="h-3.5 w-3.5 text-[#29A8E0]" />
                      <span>Approve request</span>
                    </button>
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
