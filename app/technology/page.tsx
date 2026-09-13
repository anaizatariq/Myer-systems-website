"use client";

import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { useReveal } from '@/hooks/use-reveal';
import { CtaBanner } from '@/components/site/cta-banner';
import { 
  BrainCircuit, 
  FileText, 
  Activity, 
  Network,
  GitMerge,
  UserCheck,
  Plug,
  ShieldCheck,
  Server
} from 'lucide-react';

const capabilities = [
  {
    icon: BrainCircuit,
    title: 'Domain-Specific Agents',
    description: 'AI agents designed for specific tasks and workflows, trained to understand your unique operational logic.'
  },
  {
    icon: FileText,
    title: 'Natural Language Processing',
    description: 'Advanced NLP for deep document understanding, unstructured data extraction, and semantic analysis.'
  },
  {
    icon: Activity,
    title: 'Machine Learning Models',
    description: 'Predictive modeling, classification, and anomaly detection to proactively flag issues before they escalate.'
  },
  {
    icon: Network,
    title: 'Multi-Agent Orchestration',
    description: 'Multiple specialized AI agents working in concert to handle multi-step, complex operational chains.'
  },
  {
    icon: GitMerge,
    title: 'Event-Driven Workflows',
    description: 'Intelligent routing, dynamic triggers, and autonomous escalation based on real-time operational events.'
  },
  {
    icon: UserCheck,
    title: 'Human-in-the-Loop',
    description: 'Built-in checkpoints for critical decisions, seamlessly passing control to human operators when needed.'
  }
];

export default function TechnologyPage() {
  useReveal();

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════════
          1. HERO SECTION (Tech Dark Premium)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[70vh] lg:min-h-[100vh] max-h-[850px] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-[#060D14]">
        
        {/* Background Image & Overlays */}
        <div
          className="absolute inset-0 z-0 bg-[url('/tech-hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-0 bg-[#060D14]/30" aria-hidden="true" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#060D14] via-[#060D14]/80 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#060D14] via-transparent to-[#060D14]/40" aria-hidden="true" />

        {/* Tech Ambient Glows */}
        <div
          className="pointer-events-none absolute -top-10 left-10 h-[400px] w-[400px] rounded-full bg-[#1A6FA8]/20 blur-[130px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#29A8E0]/15 blur-[120px]"
          aria-hidden="true"
        />

        {/* Content Container */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl reveal">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8FD6F5] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#8FD6F5] font-ui font-bold">
                CORE ARCHITECTURE
              </span>
            </div>

            {/* H1 */}
            <h1 className="mt-4 sm:mt-5 text-[2.2rem]/[1.15] sm:text-5xl lg:text-[3.5rem]/[1.12] xl:text-[3.9rem]/[1.12] font-bold tracking-tight text-white font-heading drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              Our Technology
            </h1>

            {/* Subtext */}
            <p className="mt-3.5 sm:mt-4 max-w-xl text-base sm:text-[17px] leading-relaxed text-slate-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-sans font-normal">
              Myer Systems builds AI systems that are enterprise-ready from day one — engineered for accountability, scalability, and seamless integration with the tools and platforms your organisation already uses.
            </p>

          </div>
        </div>
      </section>

      {/* ─── AI & AUTOMATION CAPABILITIES (Enterprise Light Bento) ────────────── */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 lg:mb-20 reveal-up">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#1A6FA8] font-ui">
                CORE ENGINE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink font-heading tracking-tight mb-6">
              AI &amp; Automation Capabilities
            </h2>
            <p className="text-[17px] sm:text-[19px] text-slate-600 font-sans leading-relaxed">
              Our core engine is built on advanced intelligence, designed to parse complex data, orchestrate workflows, and empower your human workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            
            {/* Box 1 (Large) - Multi-Agent */}
            <div className="lg:col-span-8 reveal-up group relative p-8 sm:p-10 rounded-[2rem]  bg-[#8FD6F5] border border-[#29A8E0]/30 hover:border-[#1A6FA8]/40 transition-all duration-500 overflow-hidden">
               <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-bl bg-[#8FD6F5] rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-700" />
               <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-8 shadow-sm group-hover:shadow-md transition-shadow relative z-10">
                  <Network className="w-6 h-6 text-[#060D14]" />
               </div>
               <h3 className="text-2xl font-bold text-ink font-heading mb-3 relative z-10">Multi-Agent Orchestration</h3>
               <p className="text-slate-600 font-sans leading-[1.7] text-[16px] max-w-md relative z-10">
                 Multiple AI agents working in concert to seamlessly handle multi-step, complex operational chains.
               </p>
            </div>


            {/* Box 2 (Small) - Domain Specific */}
            <div className="lg:col-span-4 reveal-up group relative p-8 sm:p-10 rounded-[2rem] bg-white border border-slate-200 hover:border-[#8FD6F5]/60 transition-all duration-500 overflow-hidden">
               <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none mix-blend-multiply group-hover:opacity-[0.25] transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at center, #8FD6F5 2.5px, transparent 2.5px)', backgroundSize: '24px 24px' }} />
               <div className="w-12 h-12 rounded-xl bg-[#F0FAFF] border border-[#1A6FA8]/10 flex items-center justify-center mb-6 relative z-10 group-hover:bg-white transition-colors">
                  <FileText className="w-5 h-5 text-[#060D14]" />
               </div>
               <h3 className="text-xl font-bold text-ink font-heading mb-3 relative z-10">Natural Language Processing</h3>
               <p className="text-slate-600 font-sans leading-[1.7] text-[15px] relative z-10">
                 Advanced NLP for comprehensive document understanding and data extraction.
               </p>
            </div>

            

            {/* Box 3 (Small) - NLP */}
            <div className="lg:col-span-4 reveal-up group relative p-8 sm:p-10 rounded-[2rem] bg-[#8FD6F5] border border-[#29A8E0]/30 hover:border-[#1A6FA8]/40 transition-all duration-500 overflow-hidden">
               <div className="w-12 h-12 rounded-xl bg-white/70 border border-white/50 flex items-center justify-center mb-6 backdrop-blur-sm relative z-10">
                  <BrainCircuit className="w-5 h-5 text-[#060D14]" />
               </div>
               <h3 className="text-xl font-bold text-ink font-heading mb-3 relative z-10">Domain-Specific Agents</h3>
               <p className="text-[#060D14]/80 font-medium font-sans leading-[1.7] text-[15px] relative z-10">
                 AI agents specifically designed and trained for domain-specific tasks and workflows.
               </p>
            </div>

            {/* Box 4 (Small) - ML */}
             <div className="lg:col-span-4 reveal-up group relative p-8 sm:p-10 rounded-[2rem] bg-white border border-slate-200 hover:border-[#8FD6F5]/60 transition-all duration-500 overflow-hidden">
               <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none mix-blend-multiply group-hover:opacity-[0.25] transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at center, #8FD6F5 2.5px, transparent 2.5px)', backgroundSize: '24px 24px' }} />
               <div className="w-12 h-12 rounded-xl bg-[#F0FAFF] border border-[#1A6FA8]/10 flex items-center justify-center mb-6 relative z-10 group-hover:bg-white transition-colors">
                  <GitMerge className="w-5 h-5 text-[#060D14]" />
               </div>
               <h3 className="text-xl font-bold text-ink font-heading mb-3 relative z-10">Event-Driven Workflows</h3>
               <p className="text-slate-600 font-sans leading-[1.7] text-[15px] relative z-10">
                 Event-driven workflows equipped with intelligent routing and autonomous escalation.
               </p>
            </div>

            {/* Box 5 (Small) - Event Driven */}
           <div className="lg:col-span-4 reveal-up group relative p-8 sm:p-10 rounded-[2rem] bg-[#8FD6F5] border border-[#29A8E0]/30 hover:border-[#1A6FA8]/40 transition-all duration-500 overflow-hidden">
               <div className="w-12 h-12 rounded-xl bg-white/70 border border-white/50 flex items-center justify-center mb-6 backdrop-blur-sm relative z-10">
                  <Activity className="w-5 h-5 text-[#060D14]" />
               </div>
               <h3 className="text-xl font-bold text-ink font-heading mb-3 relative z-10">Machine Learning Models</h3>
               <p className="text-[#060D14]/80 font-medium font-sans leading-[1.7] text-[15px] relative z-10">
                 Machine learning models engineered for precise prediction, classification, and anomaly detection.
               </p>
            </div>

            {/* Box 6 (Large) - Human in the loop */}
            

            <div className="lg:col-span-8 reveal-up group relative p-8 sm:p-10 rounded-[2rem] bg-white border border-slate-200 hover:border-[#8FD6F5]/60 transition-all duration-500 overflow-hidden">
               <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none mix-blend-multiply group-hover:opacity-[0.25] transition-opacity duration-500" style={{ backgroundImage: 'radial-gradient(circle at center, #8FD6F5 2.5px, transparent 2.5px)', backgroundSize: '24px 24px' }} />
               <div className="w-14 h-12 rounded-xl bg-[#F0FAFF] border border-[#1A6FA8]/10 flex items-center justify-center mb-6 relative z-10 group-hover:bg-white transition-colors">
                  <UserCheck className="w-5 h-5 text-[#060D14]" />
               </div>
               <h3 className="text-xl font-bold text-ink font-heading mb-3 relative z-10">Human-in-the-Loop</h3>
               <p className="text-slate-600 font-sans leading-[1.7] text-[15px] relative z-10">
                 Built-in human-in-the-loop checkpoints, designed specifically for critical decisions that require nuanced judgment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── FOUNDATION PILLARS (Architectural Layout) ────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#E0F4FC] relative overflow-hidden border-t border-[#8FD6F5]/30">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#29A8E0]/30 to-transparent" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 reveal-up">
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#1A6FA8] font-ui">
                CORE INFRASTRUCTURE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink font-heading tracking-tight mb-6">
              Enterprise Foundation
            </h2>
            <p className="text-[17px] sm:text-[19px] text-slate-700 font-sans leading-relaxed">
              Engineered for the demands of multinational operations, our architecture prioritizes security, boundless scale, and seamless interoperability.
            </p>
          </div>

          <div className="space-y-12 lg:space-y-16 mt-12">
            
            {/* Feature 1 - Integration (Split Card) */}
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col lg:flex-row hover:shadow-lg hover:border-[#8FD6F5]/50 transition-all duration-500 group">
               {/* Text Content */}
               <div className="reveal-up p-6 sm:p-8 lg:p-10 xl:p-12 flex-1 flex flex-col justify-center order-2 lg:order-1 relative z-10 bg-[#29A8E0]">
                  <div className="w-14 h-14 rounded-2xl bg-[#F0FAFF] flex items-center justify-center border border-[#1A6FA8]/10 mb-6 lg:mb-8 shadow-sm">
                    <Plug className="w-6 h-6 text-[#1A6FA8]" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-ink font-heading tracking-tight mb-4 lg:mb-6">Integration &amp; Connectivity</h3>
                  <p className="text-[17px] lg:text-lg text-slate-700 leading-[1.8] font-sans">
                    Our systems are built to connect with your existing tools and platforms through secure APIs, webhooks, and native integrations — no rip-and-replace required. We ensure seamless data flow across your entire tech stack.
                  </p>
               </div>
               {/* Image Container (0 Padding, Edge-to-Edge) */}
               <div className="reveal-up w-full lg:w-[55%] order-1 lg:order-2 bg-[#F4FAFD] relative overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-l border-slate-100 p-0">
                  <div className="absolute inset-0 bg-gradient-to-bl from-[#E0F4FC] to-transparent opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                  <img 
                     src="/images/tech-integration.png" 
                     alt="Integration UI" 
                     className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
               </div>
            </div>

            {/* Feature 2 - Security (Split Card) */}
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col lg:flex-row hover:shadow-lg hover:border-[#8FD6F5]/50 transition-all duration-500 group">
               {/* Image Container (0 Padding, Edge-to-Edge) */}
               <div className="reveal-up w-full lg:w-[55%] order-1 lg:order-1 bg-[#F4FAFD] relative overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100 p-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E0F4FC] to-transparent opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                  <img 
                     src="/images/tech-security.png" 
                     alt="Security UI" 
                     className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
               </div>
               {/* Text Content */}
               <div className="reveal-up p-6 sm:p-8 lg:p-10 xl:p-12 flex-1 flex flex-col justify-center order-2 lg:order-2 relative z-10 bg-[#29A8E0]">
                  <div className="w-14 h-14 rounded-2xl bg-[#F0FAFF] flex items-center justify-center border border-[#1A6FA8]/10 mb-6 lg:mb-8 shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-[#1A6FA8]" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-ink font-heading tracking-tight mb-4 lg:mb-6">Security &amp; Compliance</h3>
                  <p className="text-[17px] lg:text-lg text-slate-700 leading-[1.8] font-sans">
                    Security is built into every layer of our architecture. We implement industry-standard encryption, role-based access controls, and secure development practices to ensure your enterprise data remains fully protected.
                  </p>
               </div>
            </div>

            {/* Feature 3 - Scalability (Split Card) */}
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col lg:flex-row hover:shadow-lg hover:border-[#8FD6F5]/50 transition-all duration-500 group">
               {/* Text Content */}
               <div className="reveal-up p-6 sm:p-8 lg:p-10 xl:p-12 flex-1 flex flex-col justify-center order-2 lg:order-1 relative z-10 bg-[#29A8E0]">
                  <div className="w-14 h-14 rounded-2xl bg-[#F0FAFF] flex items-center justify-center border border-[#1A6FA8]/10 mb-6 lg:mb-8 shadow-sm">
                    <Server className="w-6 h-6 text-[#1A6FA8]" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-ink font-heading tracking-tight mb-4 lg:mb-6">Scalable Architecture</h3>
                  <p className="text-[17px] lg:text-lg text-slate-700 leading-[1.8] font-sans">
                    Our systems are built on cloud-native architecture designed to scale seamlessly. Whether you are handling growing data volumes, increasing transaction loads, or expanding automation coverage globally, we provide boundless scale.
                  </p>
               </div>
               {/* Image Container (0 Padding, Edge-to-Edge) */}
               <div className="reveal-up w-full lg:w-[55%] order-1 lg:order-2 bg-[#F4FAFD] relative overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-l border-slate-100 p-0">
                  <div className="absolute inset-0 bg-gradient-to-bl from-[#E0F4FC] to-transparent opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                  <img 
                     src="/images/tech-scalability.png" 
                     alt="Scalability UI" 
                     className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
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
