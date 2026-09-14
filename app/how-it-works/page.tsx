"use client";

import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { useReveal } from '@/hooks/use-reveal';
import { CtaBanner } from '@/components/site/cta-banner';
import { 
  Search, 
  PenTool, 
  Rocket, 
  TrendingUp,
  MapPin,
  Globe
} from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Discovery & Audit',
    description: 'We start by understanding your business — your current operations, manual workflows, bottlenecks, and pain points. We map out where automation can have the highest impact and identify what\'s costing you the most time and money.',
    outcome: 'A clear picture of your automation opportunities, ranked by impact.',
    icon: Search,
  },
  {
    id: '02',
    title: 'Design & Architect',
    description: 'We design your AI automation system — the agents, integrations, decision logic, data pipelines, and human checkpoints. Everything is documented and reviewed with your team before development begins.',
    outcome: 'System architecture and integration plan aligned with your operations.',
    icon: PenTool,
  },
  {
    id: '03',
    title: 'Build & Deploy',
    description: 'Our engineering team builds and deploys the system directly into your existing workflows. Every system goes through testing and validation before going live, ensuring zero disruption to your operations.',
    outcome: 'A live, production-ready AI automation system integrated with your tools and processes.',
    icon: Rocket,
  },
  {
    id: '04',
    title: 'Optimise & Scale',
    description: 'Once live, we monitor performance, fine-tune AI models, and expand automation coverage as your needs evolve. As your business scales, your AI systems scale with it.',
    outcome: 'Continuous improvement, performance monitoring, and automation expansion.',
    icon: TrendingUp,
  }
];

export default function HowItWorksPage() {
  useReveal();

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════════
          1. HERO SECTION (Dark Premium)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[70vh] lg:min-h-[100vh] max-h-[850px] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-[#060D14]">
        
        {/* Background Image & Overlays */}
        <div
          className="absolute inset-0 z-0 bg-[url('/why-myers-section.png')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-0 bg-[#060D14]/30" aria-hidden="true" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#060D14] via-[#060D14]/80 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#060D14] via-transparent to-[#060D14]/40" aria-hidden="true" />
        
        {/* Ambient Subtle Glow */}
        <div
          className="pointer-events-none absolute -bottom-24 left-10 h-[450px] w-[450px] rounded-full bg-[#29A8E0]/15 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/3 -right-20 h-[500px] w-[500px] rounded-full bg-[#1A6FA8]/20 blur-[140px]"
          aria-hidden="true"
        />

        {/* Content Container */}
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="reveal lg:col-span-8 xl:col-span-8 space-y-6 lg:space-y-8">
              
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8FD6F5] animate-pulse" />
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#8FD6F5] font-ui font-bold">
                  PROCESS &amp; METHODOLOGY
                </span>
              </div>

              {/* H1 */}
              <h1 className="mt-4 sm:mt-5 text-[2.2rem]/[1.15] sm:text-5xl lg:text-[3.5rem]/[1.12] xl:text-[3.9rem]/[1.12] font-bold tracking-tight text-white font-heading drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
                How We Work
              </h1>

              {/* Subtext */}
              <p className="mt-3.5 sm:mt-4 max-w-xl text-base sm:text-[17px] leading-relaxed text-slate-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-sans font-normal">
                We follow a structured, transparent process to take you from manual operations to intelligent automation. No guesswork, no black boxes — just clear steps with defined deliverables at every stage.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ─── PROCESS TIMELINE (Sticky Layout) ──────────────────────────── */}
      <section className="py-20 lg:py-32 bg-[#FAFAFA] relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Sticky Left Sidebar */}
            <div className="lg:col-span-4 relative reveal">
              <div className="lg:sticky lg:top-32 space-y-6">
                <span className="text-[#1A6FA8] font-bold text-[12px] tracking-[0.2em] uppercase font-ui block mb-4">Implementation Lifecycle</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-ink font-heading tracking-tight leading-[1.15]">
                  The path to <br className="hidden lg:block"/>intelligent automation.
                </h2>
                <p className="text-[17px] text-slate-600 leading-[1.7] font-sans border-l-2 border-[#29A8E0]/30 pl-4">
                  We engineer systems that seamlessly integrate into your current operations, delivering immediate impact while building the foundation for long-term scale.
                </p>
              </div>
            </div>

            {/* Right Scrollable Timeline */}
            <div className="lg:col-span-8 relative">
              
              {/* The Vertical Connecting Line (Visible on Mobile & Desktop) */}
              <div className="absolute left-[27px] sm:left-[35px] top-6 bottom-16 w-[2px] bg-gradient-to-b from-[#29A8E0] via-[#1A6FA8]/20 to-transparent" />

              <div className="space-y-12 sm:space-y-16 lg:space-y-24 relative z-10">
                {steps.map((step, index) => (
                  <div key={step.id} className="reveal-up relative flex gap-5 sm:gap-12 group">
                    
                    {/* Node / Icon Indicator (Visible on Mobile & Desktop) */}
                    <div className="relative flex-shrink-0 flex pt-1 sm:pt-0">
                      <div className="w-14 h-14 sm:w-[72px] sm:h-[72px] rounded-full bg-white border border-[#1A6FA8]/15 shadow-md flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:border-[#29A8E0]/40 transition-all duration-500">
                        <step.icon className="w-5 h-5 sm:w-7 sm:h-7 text-[#1A6FA8] group-hover:text-[#29A8E0] transition-colors duration-500" />
                      </div>
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-full bg-[#8FD6F5] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 bg-white sm:bg-transparent p-5 sm:p-0 rounded-2xl sm:rounded-none border border-slate-200 sm:border-none shadow-sm sm:shadow-none">
                      
                      <span className="block text-[#1A6FA8] font-bold text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-ui mb-2 sm:mb-3">Step {step.id}</span>
                      
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-ink font-heading mb-3 sm:mb-4 tracking-tight group-hover:text-[#1A6FA8] transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="text-[17px] sm:text-[1.125rem] lg:text-[17px] text-slate-700 leading-[1.7] lg:leading-[1.75] font-sans mb-5 sm:mb-6">
                        {step.description}
                      </p>
                      
                      {/* Outcome Highlight Box */}
                      <div className="bg-gradient-to-r from-[#F0FAFF] to-white border-l-4 border-l-[#29A8E0] p-4 sm:p-5 lg:p-6 rounded-r-xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-start gap-3">
                          <span className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#1A6FA8] flex items-center justify-center mt-0.5 sm:mt-1">
                            <span className="text-white text-[9px] sm:text-[10px] font-bold">✔</span>
                          </span>
                          <div>
                            <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A6FA8] font-ui mb-1">Deliverable</span>
                            <span className="text-slate-800 text-[14px] sm:text-[15px] lg:text-[16px] font-medium leading-snug">{step.outcome}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR DELIVERY MODEL (Clean Enterprise Bar) ────────────────── */}
      <section className="py-16 lg:py-24 bg-[#E0F4FC] relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center reveal-up">
          
          <h2 className="text-3xl sm:text-4xl font-bold text-ink font-heading tracking-tight mb-6">
            Global Operations
          </h2>
          
          <p className="text-[17px] text-slate-600 font-sans leading-[1.8] max-w-3xl mx-auto mb-16">
            Myer Systems operates a distributed offshore-onshore model. Our client-facing operations in the US ensure close alignment, while our core engineering team in Pakistan delivers enterprise-quality AI systems at competitive value.
          </p>

          {/* Sleek Enterprise Location Bar */}
          <div className="max-w-3xl mx-auto bg-[#060D14] rounded-2xl sm:rounded-full p-2 flex flex-col sm:flex-row items-center justify-between shadow-[0_20px_40px_-15px_rgba(26,111,168,0.3)] border border-[#1A6FA8]/20 relative group">
            
            {/* Sugar Land */}
            <div className="flex-1 flex items-center justify-center sm:justify-center gap-4 px-6 sm:px-8 py-5 w-full rounded-xl sm:rounded-full hover:bg-white/5 transition-colors">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#29A8E0] opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#29A8E0]"></span>
              </span>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8FD6F5]/80 font-ui mb-1">Headquarters</p>
                <p className="font-semibold text-white text-[17px]">Sugar Land, TX <span className="text-white/40 font-normal ml-1 hidden sm:inline">United States</span></p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full sm:w-px h-px sm:h-10 bg-white/10 my-1 sm:my-0 shrink-0" />

            {/* Lahore */}
            <div className="flex-1 flex items-center justify-center sm:justify-center gap-4 px-6 sm:px-8 py-5 w-full rounded-xl sm:rounded-full hover:bg-white/5 transition-colors">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#29A8E0] opacity-50" style={{ animationDelay: '1s' }}></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#29A8E0]"></span>
              </span>
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8FD6F5]/80 font-ui mb-1">Delivery Hub</p>
                <p className="font-semibold text-white text-[17px]">Lahore, PK <span className="text-white/40 font-normal ml-1 hidden sm:inline">Pakistan</span></p>
              </div>
            </div>

          </div>
          
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}
