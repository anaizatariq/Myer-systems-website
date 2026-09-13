"use client";

import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { useReveal } from '@/hooks/use-reveal';
import { Scale } from 'lucide-react';

export default function TermsPage() {
  useReveal();

  return (
    <div className="bg-[#F8FAFD] min-h-screen">
      <Navbar />

      {/* Hero Header */}
      <section className="relative w-full min-h-[40vh] lg:min-h-[50vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-[#060D14]">
        
        {/* Abstract Premium Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.02] mix-blend-screen">
          <Scale className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] text-white rotate-12 translate-x-1/4 sm:translate-x-1/3" strokeWidth={0.5} />
        </div>
        
        {/* Background Grid Mesh */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)',
              backgroundSize: '120px 120px',
              maskImage: 'radial-gradient(circle at center, black 10%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 10%, transparent 80%)'
            }}
          />
        </div>

        {/* Tech Ambient Glows */}
        <div
          className="pointer-events-none absolute -top-10 left-10 h-[400px] w-[400px] rounded-full bg-[#1A6FA8]/20 blur-[130px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#29A8E0]/15 blur-[120px]"
          aria-hidden="true"
        />
        
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="reveal-up flex flex-col items-start max-w-4xl">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8FD6F5] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#8FD6F5] font-ui font-bold">
                LEGAL POLICIES
              </span>
            </div>
            
            <h1 className="mt-4 sm:mt-5 text-[2.2rem]/[1.15] sm:text-5xl lg:text-[3.5rem]/[1.12] xl:text-[3.9rem]/[1.12] font-bold tracking-tight text-white font-heading drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              Terms of Service
            </h1>
            <p className="mt-3.5 sm:mt-4 max-w-xl text-base sm:text-[17px] leading-relaxed text-slate-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-sans font-normal">
              Last Updated: September 13, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="py-16 lg:py-24 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <article className="reveal-up max-w-4xl">
          
          <p className="text-[17px] text-slate-600 leading-relaxed font-sans mb-12">
            These Terms of Service (&quot;Terms&quot;) govern your use of the Myer Systems website (<strong>myersystems.ai</strong>) and any services provided by Myer Systems. By accessing our website or engaging our services, you agree to these Terms.
          </p>

          <h2 className="text-2xl font-bold text-ink font-heading mb-6">Services</h2>
          <p className="text-[17px] text-slate-600 leading-relaxed font-sans mb-12">
            Myer Systems provides enterprise AI automation services including, but not limited to, AI system development, workflow automation, business reengineering, resource augmentation, industry SaaS products, and revenue cycle management. Specific service terms are governed by individual client agreements.
          </p>

          <h2 className="text-2xl font-bold text-ink font-heading mb-6">Use of Website</h2>
          <p className="text-[17px] text-slate-600 leading-relaxed font-sans mb-12">
            You agree to use our website for lawful purposes only. You may not attempt to gain unauthorised access to our systems, interfere with website functionality, or use our content without permission.
          </p>

          <h2 className="text-2xl font-bold text-ink font-heading mb-6">Intellectual Property</h2>
          <p className="text-[17px] text-slate-600 leading-relaxed font-sans mb-12">
            All content, software, designs, and materials on <strong>myersystems.ai</strong> are the property of Myer Systems and are protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our written consent.
          </p>

          <h2 className="text-2xl font-bold text-ink font-heading mb-6">Limitation of Liability</h2>
          <p className="text-[17px] text-slate-600 leading-relaxed font-sans mb-12">
            Myer Systems shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services. Our total liability is limited to the amount paid for the specific service in question.
          </p>

          <h2 className="text-2xl font-bold text-ink font-heading mb-6">Governing Law</h2>
          <p className="text-[17px] text-slate-600 leading-relaxed font-sans mb-12">
            These Terms are governed by the laws of the State of Texas, USA. Any disputes shall be resolved in the courts of Dallas County, Texas.
          </p>

          <h2 className="text-2xl font-bold text-ink font-heading mb-6">Changes to Terms</h2>
          <p className="text-[17px] text-slate-600 leading-relaxed font-sans mb-12">
            We may update these Terms at any time. Continued use of our website after changes are posted constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-bold text-ink font-heading mb-6">Contact</h2>
          <p className="text-[17px] text-slate-600 leading-relaxed font-sans mb-12">
            For questions about these Terms, contact us through our website at <strong>myersystems.ai</strong> or write to our registered office in Dallas, Texas, USA.
          </p>

          <div className="p-6 bg-white/70 rounded-2xl border border-[#1A6FA8]/10 mt-8 backdrop-blur-sm">
            <p className="text-sm text-slate-500 font-sans m-0">
              <strong>Note:</strong> Have this reviewed by a legal professional before publishing. Update the &apos;Last Updated&apos; date at publication time.
            </p>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
