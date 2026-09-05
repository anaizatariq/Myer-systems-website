"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { useReveal } from '@/hooks/use-reveal';
import { CtaBanner } from '@/components/site/cta-banner';
import { ArrowRight, ChevronRight, ShieldCheck, LockKeyhole, Search, Network, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HowWeOperatePage() {
  useReveal();

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* 1. HERO SECTION (#060D14 Midnight with Architectural Geometry) */}
      <section className="relative w-full min-h-[540px] lg:min-h-[580px] bg-[#060D14] overflow-hidden flex items-center pt-32 pb-20 lg:pt-36 lg:pb-24 border-b border-[#1A6FA8]/20">
        
        {/* Background Decorative Mesh & Geometry */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          {/* Top Left Dotted Mesh */}
          <div 
            className="absolute -top-10 -left-10 w-[500px] h-[500px] opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, #29A8E0 1.5px, transparent 1.5px)',
              backgroundSize: '16px 16px',
              maskImage: 'linear-gradient(135deg, black 10%, transparent 70%)',
              WebkitMaskImage: 'linear-gradient(135deg, black 10%, transparent 70%)'
            }}
          />

          {/* Bottom Right Dotted Mesh */}
          <div 
            className="absolute -bottom-10 right-20 w-[600px] h-[400px] opacity-[0.12]"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)',
              backgroundSize: '20px 20px',
              maskImage: 'linear-gradient(to top left, black, transparent 80%)',
              WebkitMaskImage: 'linear-gradient(to top left, black, transparent 80%)'
            }}
          />

          {/* Diagonal Architectural Beams */}
          <div className="absolute -bottom-32 -right-10 w-[600px] h-[600px] opacity-15 rotate-[-35deg]">
             <div className="absolute bottom-10 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#29A8E0] to-white" />
             <div className="absolute bottom-20 right-0 w-[90%] h-1 bg-white" />
             <div className="absolute bottom-32 right-0 w-[80%] h-2 bg-[#29A8E0]" />
             <div className="absolute bottom-44 right-0 w-[70%] h-1 bg-white/70" />
             <div className="absolute bottom-56 right-0 w-[50%] h-0.5 bg-[#29A8E0]/50" />
          </div>

          {/* Precision Outline Circles */}
          <div className="absolute top-1/2 right-[10%] w-24 h-24 rounded-full border border-[#29A8E0]/20 -translate-y-1/2" />
          <div className="absolute top-[35%] right-[6%] w-16 h-16 rounded-full border border-white/10" />
          <div className="absolute bottom-16 left-[12%] w-14 h-14 rounded-full border border-[#29A8E0]/15" />

          {/* Ambient Deep Glows */}
          <div 
            className="absolute top-10 right-1/4 h-[500px] w-[500px] rounded-full bg-[#1A6FA8]/15 blur-[160px]" 
          />
          <div 
            className="absolute bottom-5 left-10 h-[450px] w-[450px] rounded-full bg-[#29A8E0]/10 blur-[140px]" 
          />
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="reveal max-w-3xl">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#29A8E0]/25 bg-[#29A8E0]/10 px-3.5 py-1.5 mb-6 shadow-2xs backdrop-blur-sm">
               <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
               <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8FD6F5] font-ui">
                 HOW WE OPERATE · STRUCTURED METHODOLOGY
               </span>
            </div>
            
            {/* Display Heading */}
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] leading-[1.15] font-heading">
              Structure isn&apos;t a formality here.{' '}
              <span className="inline-block pr-1.5 font-quote italic font-normal text-[#8FD6F5]">
                It&apos;s the whole point.
              </span>
            </h1>
            
            {/* Lead Narrative */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 font-sans max-w-2xl">
              We build and deliver enterprise AI systems, process automation, and healthcare technology around structured governance, specialised global delivery, and transparent accountability.
            </p>
            
            {/* Dual CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link 
                href="/contact" 
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#29A8E0] px-7 py-3.5 text-sm font-bold text-[#060D14] shadow-lg shadow-[#29A8E0]/20 hover:bg-[#8FD6F5] hover:scale-[1.02] transition-all duration-200 font-ui cursor-pointer"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/services" 
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all duration-200 font-ui cursor-pointer"
              >
                <span>See Our Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE GOVERNANCE FRAMEWORK (Premium Light Mode Bento Grid) */}
      <section className="py-20 lg:py-28 relative bg-white border-b border-[#1A6FA8]/15 overflow-hidden">
         <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 lg:mb-16">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-[#F0FAFF] px-3.5 py-1.5 shadow-2xs mb-4">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#29A8E0]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                    GOVERNANCE IN PRACTICE · STRUCTURE &amp; CONTROL
                  </span>
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#101820] sm:text-4xl lg:text-[2.85rem]/[1.15] font-sans">
                  What &ldquo;accountable AI&rdquo;{' '}
                  <span className="inline-block pr-1.5 font-quote italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#1A6FA8] via-[#29A8E0] to-[#1A6FA8]">
                    actually looks like
                  </span>
                </h2>
              </div>
              <div className="max-w-md">
                 <p className="text-slate-600 leading-relaxed font-sans text-base sm:text-[17px] border-l-4 border-[#29A8E0]/40 pl-5">
                   Our approach starts with understanding the operation, defining the need, and building systems that support clearer accountability, visibility, and control.
                 </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
               {[
                 {
                   num: '01',
                   title: 'Human expertise,\nsupported by AI',
                   desc: 'Trained specialists working alongside intelligent systems to maintain quality, compliance, and operational oversight.',
                   mockup: (
                     <div className="relative w-full h-full min-h-[120px] rounded-xl bg-[#F0FAFF] border border-[#1A6FA8]/15 p-4 flex flex-col justify-center gap-3 overflow-hidden group-hover:bg-[#E0F4FC]/60 transition-colors">
                       <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                           <div className="w-6 h-6 rounded-full border-2 border-[#1A6FA8] flex items-center justify-center">
                             <div className="w-2 h-2 rounded-full bg-[#29A8E0] animate-ping" />
                           </div>
                           <div className="w-12 h-2 rounded-full bg-[#1A6FA8]/40" />
                         </div>
                         <div className="px-2.5 py-1 rounded-full bg-[#1A6FA8] text-white flex items-center justify-center">
                           <span className="text-[8px] font-bold uppercase tracking-wider font-ui">Verified Review</span>
                         </div>
                       </div>
                       <div className="w-full h-px bg-[#1A6FA8]/15" />
                       <div className="w-3/4 h-2 rounded-full bg-[#29A8E0]/30" />
                       <div className="w-1/2 h-2 rounded-full bg-[#1A6FA8]/20" />
                     </div>
                   )
                 },
                 {
                   num: '02',
                   title: 'Transparent\naccountability',
                   desc: 'Clear ownership, structured workflows, and transparent visibility from initial planning through continuous execution.',
                   mockup: (
                     <div className="relative w-full h-full min-h-[120px] rounded-xl bg-[#F0FAFF] border border-[#1A6FA8]/15 p-4 flex flex-col justify-end gap-2 overflow-hidden group-hover:bg-[#E0F4FC]/60 transition-colors">
                       <div className="w-full flex items-center gap-2">
                         <span className="text-[9px] font-mono font-bold text-[#1A6FA8]">09:15</span>
                         <div className="flex-1 h-1.5 rounded-full bg-[#29A8E0]/50" />
                       </div>
                       <div className="w-full flex items-center gap-2">
                         <span className="text-[9px] font-mono font-bold text-[#1A6FA8]">11:42</span>
                         <div className="w-3/4 h-1.5 rounded-full bg-[#1A6FA8]/40" />
                       </div>
                       <div className="w-full flex items-center gap-2">
                         <span className="text-[9px] font-mono text-[#1A6FA8] font-bold">14:05</span>
                         <div className="flex-1 h-1.5 rounded-full bg-[#29A8E0]" />
                       </div>
                     </div>
                   )
                 },
                 {
                   num: '03',
                   title: 'Structured\nprocesses',
                   desc: 'Standardised operational procedures and defined workflows that reduce errors, ensure consistency, and maintain reliability.',
                   mockup: (
                     <div className="relative w-full h-full min-h-[120px] rounded-xl bg-[#F0FAFF] border border-[#1A6FA8]/15 p-4 flex items-center justify-center overflow-hidden group-hover:bg-[#E0F4FC]/60 transition-colors">
                       <div className="relative w-16 h-16 rounded-full border border-[#1A6FA8]/20 flex items-center justify-center bg-white shadow-2xs">
                          <LockKeyhole className="w-5 h-5 text-[#1A6FA8] relative z-10" />
                          <div className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white translate-x-0.5 -translate-y-0.5" />
                          <div className="absolute inset-1.5 rounded-full border border-dashed border-[#29A8E0] animate-[spin_10s_linear_infinite]" />
                       </div>
                     </div>
                   )
                 },
                 {
                   num: '04',
                   title: 'Clear business\nobjectives',
                   desc: 'Systems designed around measurable business needs, practical operational priorities, and dependable outcomes.',
                   mockup: (
                     <div className="relative w-full h-full min-h-[120px] rounded-xl bg-[#F0FAFF] border border-[#1A6FA8]/15 p-4 flex items-end justify-center gap-2.5 overflow-hidden group-hover:bg-[#E0F4FC]/60 transition-colors">
                       <div className="w-4 bg-[#1A6FA8]/40 rounded-t-sm h-[35%]" />
                       <div className="w-4 bg-[#1A6FA8]/60 rounded-t-sm h-[55%]" />
                       <div className="w-4 bg-[#29A8E0] rounded-t-sm h-[80%]" />
                       <div className="w-4 bg-[#1A6FA8] rounded-t-sm h-[95%]" />
                     </div>
                   )
                 }
               ].map((item, i) => (
                 <div 
                   key={i} 
                   className="reveal-up relative overflow-hidden p-7 sm:p-8 rounded-[2rem] bg-gradient-to-br from-[#F8FAFD] via-[#F0FAFF] to-[#E0F4FC]/70 border border-[#1A6FA8]/20 shadow-2xs hover:shadow-xl hover:shadow-[#29A8E0]/10 hover:border-[#29A8E0]/60 transition-all duration-400 hover:-translate-y-1 group flex flex-col sm:flex-row gap-6 justify-between"
                 >
                   {/* Subtle Background Watermark Number */}
                   <div className="absolute -bottom-4 -right-2 text-[90px] font-bold text-[#101820]/[0.05] group-hover:text-[#1A6FA8]/[0.08] group-hover:-translate-y-1 transition-all duration-400 pointer-events-none select-none font-heading">
                     {item.num}
                   </div>

                   {/* Text Content */}
                   <div className="relative z-10 flex-1 flex flex-col justify-center">
                     <h3 className="text-xl sm:text-2xl font-bold text-[#101820] font-heading leading-snug mb-3 whitespace-pre-line">
                       {item.title}
                     </h3>
                     <p className="text-sm sm:text-[15px] text-slate-600 font-sans leading-relaxed">
                       {item.desc}
                     </p>
                   </div>

                   {/* Mockup Container */}
                   <div className="relative z-10 w-full sm:w-1/3 sm:min-w-[150px] shrink-0">
                      {item.mockup}
                   </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. THE PROCESS, IN DEPTH */}
      <section className="py-20 lg:py-28 bg-[#F0FAFF] border-b border-[#1A6FA8]/15">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="reveal text-center max-w-3xl mx-auto mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-white px-3.5 py-1.5 shadow-2xs mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                  THE PROCESS · STRUCTURED DELIVERY
                </span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-[#101820] sm:text-4xl lg:text-[2.85rem]/[1.15] font-sans">
                How we turn operational needs into{' '}
                <span className="inline-block pr-1.5 font-quote italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#1A6FA8] via-[#29A8E0] to-[#1A6FA8]">
                  working systems
                </span>
              </h2>
            </div>

            <div className="relative max-w-5xl mx-auto">
               {/* Vertical Timeline Line */}
               <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#1A6FA8]/20 -translate-x-1/2 hidden md:block" />

               <div className="space-y-16 lg:space-y-24">
                 {[
                   {
                     step: '01',
                     title: 'Discover',
                     icon: <Search className="w-6 h-6 text-[#1A6FA8]" />,
                     focus: 'Focus: Operational needs & workflow understanding',
                     paragraph: 'We start by understanding the organisation, its workflows, and the operational challenges that need to be addressed. This gives us the context to define practical technology requirements.',
                     image: '/images/discover.jpg'
                   },
                   {
                     step: '02',
                     title: 'Design',
                     icon: <Network className="w-6 h-6 text-[#1A6FA8]" />,
                     focus: 'Focus: Solution architecture & delivery planning',
                     paragraph: 'We translate the identified needs into a practical solution approach, bringing together technology, workflow requirements, and the expertise needed for delivery.',
                     image: '/images/design.jpg'
                   },
                   {
                     step: '03',
                     title: 'Build & Deliver',
                     icon: <Layers className="w-6 h-6 text-[#1A6FA8]" />,
                     focus: 'Focus: Development, implementation & delivery',
                     paragraph: 'We develop and implement the solution with structured delivery, specialised expertise, and clear accountability across the engagement.',
                     image: '/images/deploy.jpg'
                   }
                 ].map((phase, i) => (
                   <div key={i} className={cn("reveal relative flex flex-col md:flex-row gap-8 lg:gap-16 items-center", i % 2 === 0 ? "md:flex-row-reverse" : "")}>
                      {/* Center Step Badge on Timeline */}
                      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white border-2 border-[#1A6FA8]/30 items-center justify-center z-10 shadow-md">
                         <div className="w-10 h-10 rounded-full bg-[#F0FAFF] border border-[#1A6FA8]/20 flex items-center justify-center">
                            {phase.icon}
                         </div>
                      </div>

                      {/* Content Card */}
                      <div className="md:w-1/2 w-full">
                         <div className="p-8 sm:p-10 rounded-[2rem] bg-white border border-[#1A6FA8]/20 shadow-2xs hover:shadow-xl hover:border-[#29A8E0]/60 transition-all duration-400 group relative overflow-hidden">
                            <div className="inline-flex items-center gap-2.5 mb-4">
                               <span className="text-xs font-bold uppercase tracking-wider text-[#29A8E0] font-ui bg-[#F0FAFF] px-3 py-1 rounded-full border border-[#1A6FA8]/20">
                                 Phase {phase.step}
                                </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-[#101820] font-heading mb-4">
                              {phase.step} — {phase.title}
                            </h3>

                            <p className="text-base text-slate-600 font-sans leading-relaxed mb-6">
                               {phase.paragraph}
                            </p>
                            
                            <div className="pt-5 border-t border-[#1A6FA8]/15 flex items-center gap-2">
                               <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0]" />
                               <span className="text-xs font-bold text-[#1A6FA8] font-ui">
                                 {phase.focus}
                               </span>
                            </div>
                         </div>
                      </div>
                      
                      {/* Image Stage */}
                      <div className="md:w-1/2 w-full flex items-center justify-center">
                         <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-lg border border-[#1A6FA8]/20 bg-white group">
                            <Image 
                              src={phase.image} 
                              alt={phase.title} 
                              fill
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                              sizes="(max-width: 768px) 100vw, 500px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#060D14]/40 via-transparent to-transparent opacity-60" />
                         </div>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
         </div>
      </section>

      {/* 4. THE OUTCOME (Fills previous gap with stated value proposition) */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#1A6FA8]/15 relative overflow-hidden">
        {/* Subtle Ambient Backlight Glow */}
        <div 
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[750px] rounded-full bg-[#29A8E0]/10 blur-[130px]" 
          aria-hidden="true" 
        />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center z-10">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-[#F0FAFF] px-3.5 py-1.5 shadow-2xs mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
              THE OUTCOME · PRACTICAL VALUE
            </span>
          </div>

          <h2 className="reveal text-3xl sm:text-4xl lg:text-[2.85rem]/[1.2] font-semibold tracking-tight text-[#101820] font-sans max-w-3xl mx-auto mb-6">
            Technology that improves the way the{' '}
            <span className="inline-block pr-1.5 font-quote italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#1A6FA8] via-[#29A8E0] to-[#1A6FA8]">
              operation works
            </span>.
          </h2>

          <p className="reveal-up text-base sm:text-lg lg:text-[18.5px] text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
            Our goal is not simply to deploy technology. It is to help organisations reduce manual workload, improve visibility, address operational friction, and build more scalable and resilient operations.
          </p>

          {/* Three Value Highlights */}
          <div className="reveal-up mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="bg-gradient-to-br from-[#F8FAFD] to-[#F0FAFF] rounded-2xl p-6 sm:p-7 border border-[#1A6FA8]/20 shadow-2xs hover:border-[#29A8E0]/60 transition-all duration-300">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A6FA8] font-ui block mb-2">01 · Workload</span>
              <h3 className="text-lg font-bold text-[#101820] font-heading mb-2">Reduced Manual Friction</h3>
              <p className="text-sm text-slate-600 font-sans leading-relaxed">Streamlining repetitive tasks and freeing domain teams to focus on high-value operational delivery.</p>
            </div>

            <div className="bg-gradient-to-br from-[#F8FAFD] to-[#F0FAFF] rounded-2xl p-6 sm:p-7 border border-[#1A6FA8]/20 shadow-2xs hover:border-[#29A8E0]/60 transition-all duration-300">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A6FA8] font-ui block mb-2">02 · Visibility</span>
              <h3 className="text-lg font-bold text-[#101820] font-heading mb-2">Operational Visibility</h3>
              <p className="text-sm text-slate-600 font-sans leading-relaxed">Providing clear insight and structured reporting across core enterprise, operational, and healthcare workflows.</p>
            </div>

            <div className="bg-gradient-to-br from-[#F8FAFD] to-[#F0FAFF] rounded-2xl p-6 sm:p-7 border border-[#1A6FA8]/20 shadow-2xs hover:border-[#29A8E0]/60 transition-all duration-300">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A6FA8] font-ui block mb-2">03 · Resilience</span>
              <h3 className="text-lg font-bold text-[#101820] font-heading mb-2">Scalable Operations</h3>
              <p className="text-sm text-slate-600 font-sans leading-relaxed">Building structured, dependable foundations that scale smoothly as operational demands expand.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA BANNER & FOOTER */}
      <CtaBanner />
      <Footer />
    </div>
  );
}

