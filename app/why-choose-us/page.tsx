"use client";

import Link from 'next/link';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { useReveal } from '@/hooks/use-reveal';
import { CtaBanner } from '@/components/site/cta-banner';
import { Testimonials } from '@/components/site/testimonials';
import { ArrowRight, CheckCircle2, XCircle, ShieldCheck, Activity, Search, LayoutTemplate, Shield, Settings2 } from 'lucide-react';

export default function WhyChooseUsPage() {
  useReveal();

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* 1. HERO */}
      <main className="pt-28 pb-12 lg:pt-36 lg:pb-20 overflow-hidden relative">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
        <div 
          className="pointer-events-none absolute -top-20 right-1/4 h-[500px] w-[500px] rounded-full bg-[#29A8E0]/10 blur-[140px]" 
          aria-hidden="true" 
        />
        <div 
          className="pointer-events-none absolute bottom-0 left-10 h-[400px] w-[400px] rounded-full bg-[#1A6FA8]/8 blur-[120px]" 
          aria-hidden="true" 
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
            <div className="reveal lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-white/90 px-3.5 py-1.5 mb-6 shadow-2xs backdrop-blur-md">
                 <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
                 <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                   WHY CHOOSE US · STRATEGIC DIFFERENTIATORS
                 </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[4.25rem] font-bold tracking-tight text-[#101820] font-heading leading-[1.08]">
                Control is never optional. <br/>
                <span className="inline-block pr-1 font-quote italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#1A6FA8] via-[#29A8E0] to-[#1A6FA8]">
                  That&apos;s the actual difference.
                </span>
              </h1>
            </div>
            <div className="reveal-up lg:col-span-5 lg:pb-4">
              <div className="pl-6 border-l-[3px] border-[#1A6FA8]/25">
                <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-sans">
                  We focus on building AI and operational systems around accountability, visibility, and control, so organisations can adopt technology with greater confidence.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link 
                    href="/contact" 
                    className="group inline-flex items-center gap-2 rounded-full bg-[#29A8E0] px-7 py-3.5 text-sm font-bold text-[#101820] shadow-md shadow-[#29A8E0]/20 hover:bg-[#1A6FA8] hover:text-white transition-all duration-200 font-ui cursor-pointer"
                  >
                    <span>Talk to Our Team</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link 
                    href="/how-we-operate" 
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1A6FA8]/25 bg-white/90 px-6 py-3.5 text-sm font-semibold text-[#101820] shadow-2xs backdrop-blur-md transition-all duration-200 hover:bg-white hover:border-[#29A8E0] hover:text-[#1A6FA8] font-ui cursor-pointer"
                  >
                    See How We Operate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 2. THE 6 DIFFERENTIATORS */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#F0FAFF] via-[#E0F4FC]/50 to-[#F0FAFF] border-y border-[#1A6FA8]/15 relative overflow-hidden">
        {/* Subtle Brand Grid & Lighting */}
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div 
          className="pointer-events-none absolute top-1/4 right-0 h-[550px] w-[550px] rounded-full bg-[#29A8E0]/8 blur-[150px]" 
          aria-hidden="true" 
        />
        <div 
          className="pointer-events-none absolute bottom-10 left-0 h-[500px] w-[500px] rounded-full bg-[#1A6FA8]/6 blur-[140px]" 
          aria-hidden="true" 
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          <div className="reveal text-center max-w-2xl mx-auto mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-white/90 px-4 py-1.5 mb-4 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                CORE PHILOSOPHY
              </span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#101820] sm:text-4xl font-heading">
              Six principles behind how we work.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Governed by design',
                short: 'We design our work around accountability, accuracy, compliance, and clear operational ownership.',
                practice: 'We approach AI with accountability and operational requirements in mind from the beginning.',
                icon: <ShieldCheck className="w-5 h-5 text-[#1A6FA8]" />
              },
              {
                title: 'Healthcare-grade rigor',
                short: 'Our experience across healthcare technology, RCM, and medical billing gives us a practical understanding of complex healthcare operations.',
                practice: 'We apply structured verification and continuous oversight to support high-stakes healthcare operations.',
                icon: <Activity className="w-5 h-5 text-[#1A6FA8]" />
              },
              {
                title: 'Built around your operations',
                short: 'We develop solutions around the specific operational needs, workflows, and goals of each organisation rather than relying on one-size-fits-all approaches.',
                practice: 'We begin by understanding the operational challenge before defining the technology needed to address it.',
                icon: <Search className="w-5 h-5 text-[#1A6FA8]" />
              },
              {
                title: 'Scale with the right support',
                short: 'Our AI systems, specialised expertise, and resource augmentation services help organisations expand their operational capacity as their needs evolve.',
                practice: 'We combine technology and specialised human expertise to support scalable operations.',
                icon: <LayoutTemplate className="w-5 h-5 text-[#1A6FA8]" />
              },
              {
                title: 'Accountable AI',
                short: 'We build around clear accountability, operational visibility, and responsible use of AI.',
                practice: 'Systems engineered with clear ownership, structured review, and operational control.',
                icon: <Shield className="w-5 h-5 text-[#1A6FA8]" />
              },
              {
                title: 'Built for ongoing collaboration',
                short: 'We work with organisations across technology delivery, operational transformation, and ongoing support as their needs evolve.',
                practice: 'Continuous collaboration ensuring systems adapt alongside changing operational priorities.',
                icon: <Settings2 className="w-5 h-5 text-[#1A6FA8]" />
              }
            ].map((diff, i) => (
              <div key={i} className="reveal-up relative overflow-hidden rounded-3xl bg-white border border-[#1A6FA8]/20 shadow-[0_4px_20px_rgba(26,111,168,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_12px_32px_rgba(26,111,168,0.1)] hover:border-[#29A8E0]/50 transition-all duration-500 hover:-translate-y-1 group flex flex-col h-full">
                
                {/* Large Background Number */}
                <div className="absolute -bottom-4 -right-4 text-[120px] font-bold text-[#1A6FA8]/[0.04] group-hover:text-[#29A8E0]/[0.08] transition-colors duration-500 pointer-events-none select-none leading-none font-mono">
                  0{i + 1}
                </div>
                
                <div className="p-8 pb-6 flex-1 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0FAFF] border border-[#1A6FA8]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {diff.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#101820] mb-3 group-hover:text-[#1A6FA8] transition-colors font-heading">{diff.title}</h3>
                  <p className="text-[15px] font-normal text-slate-600 leading-relaxed font-sans">
                    {diff.short}
                  </p>
                </div>
                
                {/* In Practice footer block */}
                <div className="p-6 bg-[#F0FAFF]/80 border-t border-[#1A6FA8]/15 mt-auto relative z-10">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#1A6FA8] font-ui mb-2">In Practice</span>
                  <p className="text-[13.5px] text-slate-700 font-sans leading-relaxed italic">
                    &ldquo;{diff.practice}&rdquo;
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHO WE'RE THE RIGHT FIT FOR */}
      <section className="pt-16 lg:pt-24 pb-8 lg:pb-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-white/90 px-4 py-1.5 mb-4 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                FIT MATTERS · ALIGNED COLLABORATION
              </span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#101820] sm:text-4xl font-heading">
              Who we work best with — and who we&apos;re not the right choice for
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Right Fit (Brand Dark Canvas #060D14 + Sky Blue Accents) */}
            <div className="reveal-up p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-[#060D14] via-[#0B141D] to-[#101820] border border-[#1A6FA8]/30 shadow-2xl relative overflow-hidden">
              <div 
                className="pointer-events-none absolute -top-12 -right-12 h-56 w-56 rounded-full bg-[#29A8E0]/15 blur-3xl" 
                aria-hidden="true" 
              />
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <CheckCircle2 className="w-32 h-32 text-[#29A8E0]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3 font-heading">
                <div className="w-10 h-10 rounded-xl bg-[#29A8E0]/15 border border-[#29A8E0]/30 flex items-center justify-center text-[#29A8E0]">
                  <CheckCircle2 className="w-5 h-5 text-[#29A8E0]" />
                </div>
                A strong fit if you:
              </h3>
              <ul className="space-y-6 relative z-10">
                {[
                  'Operate in complex healthcare or commercial environments where reliability, accuracy, and accountability matter.',
                  'Need technology that supports clearer accountability, operational visibility, and measurable business outcomes.',
                  'Want a technology and delivery partner that can support evolving operational needs.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#29A8E0] shrink-0" />
                    <p className="text-slate-300 leading-relaxed font-sans">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a Fit (Frosted Ice Brand Card) */}
            <div className="reveal-up p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-[#F8FAFD] via-[#F0FAFF] to-[#E0F4FC]/80 border border-[#1A6FA8]/20 shadow-[0_4px_20px_rgba(26,111,168,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.06]">
                <XCircle className="w-32 h-32 text-[#1A6FA8]" />
              </div>
              <h3 className="text-2xl font-bold text-[#101820] mb-8 relative z-10 flex items-center gap-3 font-heading">
                <div className="w-10 h-10 rounded-xl bg-[#1A6FA8]/10 border border-[#1A6FA8]/20 flex items-center justify-center text-[#1A6FA8]">
                  <XCircle className="w-5 h-5 text-[#1A6FA8]/80" />
                </div>
                You may not be the right fit for Myer if:
              </h3>
              <ul className="space-y-6 relative z-10">
                {[
                  'You are looking only for a basic, off-the-shelf automation tool.',
                  'Your priority is the lowest upfront cost rather than a broader technology or operational solution.',
                  'You are not looking to connect technology initiatives to real operational needs.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1A6FA8]/40 shrink-0" />
                    <p className="text-slate-600 leading-relaxed font-sans">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE MYER SYSTEMS APPROACH VS COMMON ALTERNATIVE */}
      <section className="py-16 lg:py-20 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
          
          <div className="reveal text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-white px-4 py-1.5 mb-4 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                THE REAL DIFFERENCE
              </span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#101820] sm:text-4xl font-heading">
              The Myer Systems approach
            </h2>
          </div>

          <div className="space-y-3">
            {[
              { 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>,
                bad: 'Technology introduced without understanding the underlying workflow', 
                good: 'Operational needs understood before solutions are designed' 
              },
              { 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>,
                bad: 'Automation without clear operational accountability', 
                good: 'Systems designed around accountability and visibility' 
              },
              { 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                bad: 'Technology that solves a narrow problem without addressing the wider operation', 
                good: 'Solutions designed around broader operational needs' 
              },
              { 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M1 6s1-1 4-1 5 2 8 2 4-1 4-1V2s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M1 12s1-1 4-1 5 2 8 2 4-1 4-1"/><path d="M1 18s1-1 4-1 5 2 8 2 4-1 4-1"/></svg>,
                bad: 'Growing operational needs require additional capacity', 
                good: 'AI systems and specialised expertise that support scalable operations' 
              },
              { 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                bad: 'Compliance and accuracy treated as afterthoughts', 
                good: 'Compliance, accuracy, and audit readiness considered as part of the solution' 
              }
            ].map((row, i) => (
              <div key={i} className="reveal-up grid md:grid-cols-2 rounded-[2rem] overflow-hidden border border-[#1A6FA8]/20 shadow-[0_4px_20px_rgba(26,111,168,0.04)] group bg-white">
                {/* The Alternative Side */}
                <div className="p-5 lg:p-6 flex items-start gap-4 bg-[#F8FAFD]/90 border-r border-[#1A6FA8]/10">
                  <div className="mt-0.5 w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-slate-400">
                    {row.icon}
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 font-ui mb-1.5">Common Alternative</span>
                    <p className="text-[14px] font-medium text-slate-600 leading-relaxed font-sans">{row.bad}</p>
                  </div>
                </div>
                
                {/* The Myer Systems Way */}
                <div className="bg-gradient-to-r from-white to-[#F0FAFF] p-5 lg:p-6 flex items-start gap-4 relative md:-ml-6 md:rounded-l-[2rem] shadow-[-10px_0_30px_rgba(26,111,168,0.08)] border-l border-[#29A8E0]/30 z-10 transition-transform duration-300 group-hover:scale-[1.01]">
                  <div className="mt-0.5 w-8 h-8 rounded-full bg-[#29A8E0]/15 border border-[#29A8E0]/30 flex items-center justify-center shrink-0 text-[#1A6FA8]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#1A6FA8] font-ui mb-1.5">The Myer Systems Way</span>
                    <p className="text-[15px] font-bold text-[#101820] font-sans leading-relaxed">{row.good}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* 5. WHAT WE BRING (Capability Proof Points) */}
      <Testimonials />

      {/* 6. FINAL CTA & FOOTER */}
      <CtaBanner />
      <Footer />
    </div>
  );
}

