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
      <section className="relative w-full pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden bg-[#060D14]">
        
        {/* Background Gradients & Glows */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#060D14] via-[#060D14]/95 to-[#1A6FA8]/10" aria-hidden="true" />
        
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
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#8FD6F5] animate-pulse shadow-[0_0_8px_rgba(143,214,245,0.8)]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white font-ui drop-shadow-md">
                  PROCESS &amp; METHODOLOGY
                </span>
              </div>

              {/* H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.1] font-bold tracking-tight text-white font-heading pt-2 drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
                How We Work
              </h1>

              {/* Subtext */}
              <p className="text-lg sm:text-xl lg:text-[22px] leading-relaxed text-[#F0FAFF] font-sans max-w-3xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
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
              
              {/* The Vertical Connecting Line */}
              <div className="absolute left-[27px] sm:left-[35px] top-6 bottom-16 w-[2px] bg-gradient-to-b from-[#29A8E0] via-[#1A6FA8]/20 to-transparent hidden sm:block" />

              <div className="space-y-16 lg:space-y-24 relative z-10">
                {steps.map((step, index) => (
                  <div key={step.id} className="reveal-up relative flex flex-col sm:flex-row gap-6 sm:gap-12 group">
                    
                    {/* Node / Icon Indicator */}
                    <div className="relative flex-shrink-0 hidden sm:flex">
                      <div className="w-[72px] h-[72px] rounded-full bg-white border border-[#1A6FA8]/15 shadow-md flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:border-[#29A8E0]/40 transition-all duration-500">
                        <step.icon className="w-7 h-7 text-[#1A6FA8] group-hover:text-[#29A8E0] transition-colors duration-500" />
                      </div>
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-full bg-[#8FD6F5] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 bg-white sm:bg-transparent p-6 sm:p-0 rounded-2xl sm:rounded-none border border-slate-200 sm:border-none shadow-sm sm:shadow-none">
                      
                      <div className="flex items-center gap-4 sm:hidden mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#F0FAFF] flex items-center justify-center border border-[#1A6FA8]/10">
                          <step.icon className="w-5 h-5 text-[#29A8E0]" />
                        </div>
                        <span className="text-[#1A6FA8] font-bold text-sm tracking-widest uppercase font-ui">Step {step.id}</span>
                      </div>

                      <span className="hidden sm:block text-[#1A6FA8] font-bold text-[12px] tracking-[0.2em] uppercase font-ui mb-3">Step {step.id}</span>
                      
                      <h3 className="text-2xl sm:text-3xl font-bold text-ink font-heading mb-4 tracking-tight group-hover:text-[#1A6FA8] transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="text-[16px] sm:text-[17px] text-slate-700 leading-[1.75] font-sans mb-6">
                        {step.description}
                      </p>
                      
                      {/* Outcome Highlight Box */}
                      <div className="bg-gradient-to-r from-[#F0FAFF] to-white border-l-4 border-l-[#29A8E0] p-5 sm:p-6 rounded-r-xl shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-start gap-3">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-[#1A6FA8] flex items-center justify-center mt-0.5">
                            <span className="text-white text-[10px] font-bold">✔</span>
                          </span>
                          <div>
                            <span className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A6FA8] font-ui mb-1">Deliverable</span>
                            <span className="text-slate-800 text-[15px] sm:text-[16px] font-medium leading-snug">{step.outcome}</span>
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

      {/* ─── OUR DELIVERY MODEL (Premium Wide Banner) ────────────────── */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        
        {/* Subtle Background Elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1A6FA8]/15 to-transparent" />
        <div className="absolute -left-40 top-20 w-96 h-96 bg-[#F0FAFF] rounded-full blur-3xl opacity-60" />
        <div className="absolute -right-40 bottom-10 w-96 h-96 bg-[#F0FAFF] rounded-full blur-3xl opacity-60" />

        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center reveal-up relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="h-2 w-2 rounded-full bg-[#1A6FA8] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A6FA8] font-ui">
              GLOBAL OPERATIONS
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink font-heading tracking-tight mb-10">
            Our Delivery Model
          </h2>
          
          <div className="p-10 sm:p-14 lg:p-20 rounded-[3rem] bg-gradient-to-br from-[#101820] to-[#1A6FA8] shadow-2xl shadow-[#1A6FA8]/20 border border-[#29A8E0]/20 relative overflow-hidden group">
            
            {/* Texture inside Banner */}
            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F0FAFF 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10">
              <p className="text-[17px] sm:text-xl lg:text-[22px] text-white/90 font-sans leading-[1.8] font-light mb-12 max-w-4xl mx-auto drop-shadow-md">
                Myer Systems operates a distributed offshore-onshore model. Our headquarters and client-facing operations are based in <strong className="text-white font-semibold">Dallas, Texas</strong>. Our core engineering and delivery team operates from <strong className="text-white font-semibold">Lahore, Pakistan</strong>. This structure allows us to deliver enterprise-quality AI systems at competitive value for North American and international clients.
              </p>
              
              {/* Dual-Hub Badges (Dark Mode Version) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-7 py-4 rounded-full border border-white/20 shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                  <MapPin className="w-5 h-5 text-[#8FD6F5]" />
                  <span className="font-bold text-white font-ui text-sm tracking-wide">Headquarters: Dallas, Texas</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-7 py-4 rounded-full border border-white/20 shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                  <Globe className="w-5 h-5 text-[#8FD6F5]" />
                  <span className="font-bold text-white font-ui text-sm tracking-wide">Delivery Hub: Lahore, Pakistan</span>
                </div>
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
