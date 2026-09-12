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
      <section className="relative w-full pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-[#060D14]">
        
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
        <div className="mx-auto w-full max-w-4xl px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 reveal">
            <span className="h-2 w-2 rounded-full bg-[#8FD6F5] animate-pulse shadow-[0_0_10px_#8FD6F5]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8FD6F5] font-ui drop-shadow-md">
              CORE ARCHITECTURE
            </span>
          </div>

          {/* H1 */}
          <h1 className="reveal text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] leading-[1.1] font-bold tracking-tight text-white font-heading mb-8 drop-shadow-lg">
            Our Technology
          </h1>

          {/* Subtext */}
          <p className="reveal-up text-lg sm:text-xl lg:text-[22px] leading-relaxed text-slate-300 font-sans drop-shadow-md">
            Myer Systems builds AI systems that are enterprise-ready from day one — engineered for accountability, scalability, and seamless integration with the tools and platforms your organisation already uses.
          </p>

        </div>
      </section>

      {/* ─── AI & AUTOMATION CAPABILITIES (Dark Tech Grid) ────────────── */}
      <section className="py-20 lg:py-28 bg-[#060D14] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="mb-16 reveal-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading tracking-tight mb-4">
              AI &amp; Automation Capabilities
            </h2>
            <div className="w-20 h-1 bg-[#29A8E0] rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {capabilities.map((cap, index) => (
              <div 
                key={index}
                className="reveal-up group relative p-8 rounded-[2rem] bg-[#0A121A] border border-white/10 hover:border-[#29A8E0]/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(41,168,224,0.1)] overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#29A8E0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#1A6FA8]/20 transition-colors duration-500">
                    <cap.icon className="w-7 h-7 text-[#8FD6F5]" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading mb-3 tracking-wide">{cap.title}</h3>
                  <p className="text-slate-400 font-sans leading-relaxed text-[15.5px]">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── FOUNDATION PILLARS (Light Sleek Layout) ────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#F0FAFF] relative overflow-hidden">
        
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-50" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Pillar 1: Integration */}
            <div className="reveal-up bg-white p-10 lg:p-12 rounded-[2.5rem] border border-[#1A6FA8]/10 shadow-[0_15px_40px_rgba(26,111,168,0.06)] hover:shadow-[0_20px_50px_rgba(26,111,168,0.12)] transition-shadow duration-500">
              <div className="w-14 h-14 rounded-full bg-[#E0F4FC] flex items-center justify-center mb-8 shadow-inner">
                <Plug className="w-6 h-6 text-[#1A6FA8]" />
              </div>
              <h3 className="text-2xl font-bold text-ink font-heading mb-4 tracking-tight">Integration &amp; Connectivity</h3>
              <p className="text-[16px] text-slate-700 leading-[1.7] font-sans">
                Our systems are built to connect with your existing tools and platforms through secure APIs, webhooks, and native integrations — no rip-and-replace required. We integrate seamlessly into your current tech stack.
              </p>
            </div>

            {/* Pillar 2: Security */}
            <div className="reveal-up bg-white p-10 lg:p-12 rounded-[2.5rem] border border-[#1A6FA8]/10 shadow-[0_15px_40px_rgba(26,111,168,0.06)] hover:shadow-[0_20px_50px_rgba(26,111,168,0.12)] transition-shadow duration-500 delay-100">
              <div className="w-14 h-14 rounded-full bg-[#E0F4FC] flex items-center justify-center mb-8 shadow-inner">
                <ShieldCheck className="w-6 h-6 text-[#1A6FA8]" />
              </div>
              <h3 className="text-2xl font-bold text-ink font-heading mb-4 tracking-tight">Security &amp; Compliance</h3>
              <p className="text-[16px] text-slate-700 leading-[1.7] font-sans">
                Security is built into every layer of our architecture. We implement industry-standard encryption, access controls, and secure development practices. For healthcare clients, our systems are strictly designed to meet HIPAA requirements.
              </p>
            </div>

            {/* Pillar 3: Scalability */}
            <div className="reveal-up bg-white p-10 lg:p-12 rounded-[2.5rem] border border-[#1A6FA8]/10 shadow-[0_15px_40px_rgba(26,111,168,0.06)] hover:shadow-[0_20px_50px_rgba(26,111,168,0.12)] transition-shadow duration-500 delay-200">
              <div className="w-14 h-14 rounded-full bg-[#E0F4FC] flex items-center justify-center mb-8 shadow-inner">
                <Server className="w-6 h-6 text-[#1A6FA8]" />
              </div>
              <h3 className="text-2xl font-bold text-ink font-heading mb-4 tracking-tight">Scalable Architecture</h3>
              <p className="text-[16px] text-slate-700 leading-[1.7] font-sans">
                Our systems are built on cloud-native architecture designed to scale — handling growing data volumes, increasing transaction loads, and expanding automation coverage effortlessly without requiring re-architecture.
              </p>
            </div>

          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}
