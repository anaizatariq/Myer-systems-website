"use client";

import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { useReveal } from '@/hooks/use-reveal';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPage() {
  useReveal();

  return (
    <div className="bg-[#F8FAFD] min-h-screen">
      <Navbar />

      {/* Hero Header */}
      <section className="relative w-full min-h-[40vh] lg:min-h-[50vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-[#060D14]">
        
        {/* Abstract Premium Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.02] mix-blend-screen">
          <ShieldCheck className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] text-white rotate-12 translate-x-1/4 sm:translate-x-1/3" strokeWidth={0.5} />
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
        
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10 w-full text-left">
          <div className="reveal-up flex flex-col items-start">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8FD6F5] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#8FD6F5] font-ui font-bold">
                LEGAL POLICIES
              </span>
            </div>
            
            <h1 className="mt-4 sm:mt-5 text-[2.2rem]/[1.15] sm:text-5xl lg:text-[3.5rem]/[1.12] xl:text-[3.9rem]/[1.12] font-bold tracking-tight text-white font-heading drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              Privacy Policy
            </h1>
            <p className="mt-3.5 sm:mt-4 max-w-xl text-base sm:text-[17px] leading-relaxed text-slate-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-sans font-normal">
              Last Updated: September 13, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="py-16 lg:py-24 mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
        <article className="reveal-up">
          
          <p className="text-[17px] text-slate-600 leading-relaxed font-sans mb-12">
            Myer Systems (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>myersystems.ai</strong> and use our services.
          </p>

          <h2 className="text-2xl font-bold text-ink font-heading mb-6">Information We Collect</h2>
          <div className="space-y-6 mb-12">
            <div className="flex gap-4">
               <div className="w-1.5 h-1.5 rounded-full bg-[#29A8E0] mt-2.5 shrink-0" />
               <p className="text-[17px] text-slate-600 leading-relaxed font-sans m-0"><strong>Personal Information:</strong> Name, email address, phone number, company name, and job title — provided voluntarily through contact forms, booking pages, or direct communication.</p>
            </div>
            <div className="flex gap-4">
               <div className="w-1.5 h-1.5 rounded-full bg-[#29A8E0] mt-2.5 shrink-0" />
               <p className="text-[17px] text-slate-600 leading-relaxed font-sans m-0"><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages, and referring URLs — collected automatically through cookies and analytics tools.</p>
            </div>
            <div className="flex gap-4">
               <div className="w-1.5 h-1.5 rounded-full bg-[#29A8E0] mt-2.5 shrink-0" />
               <p className="text-[17px] text-slate-600 leading-relaxed font-sans m-0"><strong>Client Data:</strong> Data processed on behalf of our clients as part of our AI automation and RCM services — governed by individual client agreements and data processing addendums.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-ink font-heading mb-6">How We Use Your Information</h2>
          <ul className="space-y-4 mb-12">
            <li className="flex items-center gap-3 text-[17px] text-slate-600 font-sans"><div className="w-1.5 h-1.5 rounded-full bg-[#1A6FA8] shrink-0" />To respond to your enquiries and provide requested services</li>
            <li className="flex items-center gap-3 text-[17px] text-slate-600 font-sans"><div className="w-1.5 h-1.5 rounded-full bg-[#1A6FA8] shrink-0" />To improve our website, products, and services</li>
            <li className="flex items-center gap-3 text-[17px] text-slate-600 font-sans"><div className="w-1.5 h-1.5 rounded-full bg-[#1A6FA8] shrink-0" />To send relevant communications (with your consent)</li>
            <li className="flex items-center gap-3 text-[17px] text-slate-600 font-sans"><div className="w-1.5 h-1.5 rounded-full bg-[#1A6FA8] shrink-0" />To comply with legal obligations and enforce our terms</li>
          </ul>

          <h2 className="text-2xl font-bold text-ink font-heading mb-6">Data Security</h2>
          <p className="text-[17px] text-slate-600 leading-relaxed font-sans mb-12">
            We implement industry-standard security measures including encryption and access controls to protect your information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-ink font-heading mb-6">Third-Party Sharing</h2>
          <p className="text-[17px] text-slate-600 leading-relaxed font-sans mb-12">
            We do not sell your personal information. We may share data with trusted service providers who assist in operating our website and services, subject to confidentiality agreements. We may also disclose information when required by law.
          </p>

          <h2 className="text-2xl font-bold text-ink font-heading mb-6">Your Rights</h2>
          <p className="text-[17px] text-slate-600 leading-relaxed font-sans mb-12">
            You have the right to access, correct, or delete your personal information. To exercise these rights, contact us using the details on our Contact page.
          </p>

          <h2 className="text-2xl font-bold text-ink font-heading mb-6">Contact</h2>
          <p className="text-[17px] text-slate-600 leading-relaxed font-sans mb-12">
            For privacy-related questions, contact us through our website at <strong>myersystems.ai</strong> or write to our registered office in Dallas, Texas, USA.
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
