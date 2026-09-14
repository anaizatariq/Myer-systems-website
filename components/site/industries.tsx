'use client';

import Link from 'next/link';
import { 
  Building2, 
  Workflow, 
  Activity, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

const INDUSTRIES = [
  {
    monogram: 'CE',
    tag: 'ENTERPRISE & OPERATIONS',
    title: 'Commercial Enterprises',
    description: 'Helping growing businesses automate routine operations, integrate legacy systems, and scale back-office capacity with dependable technology.',
    icon: Building2,
    capabilities: [
      'Automated back-office workflows & approvals',
      'Integration bridges for legacy database systems',
      'Scalable hybrid operational support pods',
    ],
    href: '/services#ai-solutions',
  },
  {
    monogram: 'DI',
    tag: 'DOCUMENT & TRANSACTION PIPELINES',
    title: 'Data-Intensive Businesses',
    description: 'Providing automated processing tools and specialized operational teams for companies managing high volumes of documents and complex records.',
    icon: Workflow,
    capabilities: [
      'Automated invoice, contract & records ingestion',
      'High-speed validation and discrepancy checking',
      'Clear, auditable logs across every transaction',
    ],
    href: '/services#saas',
  },
  {
    monogram: 'HC',
    tag: 'HEALTHCARE & CLINICAL PROVIDERS',
    title: 'Healthcare Organizations',
    description: 'Delivering specialized revenue cycle management, medical billing, and clinical AI tools engineered for strict accuracy and regulatory compliance.',
    icon: Activity,
    capabilities: [
      'End-to-end revenue cycle management (RCM)',
      'Certified US medical billing & coding teams',
      'Data synthesis through our MedSynthea platform',
    ],
    href: '#healthcare-vertical',
  },
];

export function Industries() {
  return (
    <section 
      id="industries" 
      className="relative scroll-mt-24 border-t border-[#29A8E0]/10 bg-[#E0F4FC] py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* ── Ambient Background Lighting ── */}
      <div 
        className="pointer-events-none absolute top-1/2 left-0 h-[450px] w-[450px] rounded-full bg-[#29A8E0]/5 blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── Left Side: Reverse Triangle Boxes ── */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6 lg:order-1 order-2">
            {/* Top Row: 2 Boxes */}
            <div className="flex gap-5 sm:gap-6">
              {[INDUSTRIES[0], INDUSTRIES[1]].map((ind) => (
                <div key={ind.title} className="group flex flex-col items-center justify-center p-6 bg-[#8FD6F5] rounded-[10px] w-36 h-36 sm:w-48 sm:h-48 text-center shadow-md hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1A6FA8]/10 transition-all duration-500 border border-[#29A8E0]/30 cursor-default">
                  <ind.icon className="h-10 w-10 sm:h-12 sm:w-12 text-ink mb-3 sm:mb-5 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-ink text-sm sm:text-base leading-tight font-sans font-medium">{ind.title}</h3>
                </div>
              ))}
            </div>
            {/* Bottom Row: 1 Box */}
            <div className="flex justify-center">
              <div className="group flex flex-col items-center justify-center p-6 bg-[#8FD6F5] rounded-[10px] w-36 h-36 sm:w-48 sm:h-48 text-center shadow-md hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1A6FA8]/10 transition-all duration-500 border border-[#29A8E0]/30 cursor-default">
                {(() => {
                  const ind = INDUSTRIES[2];
                  return (
                    <>
                      <ind.icon className="h-10 w-10 sm:h-12 sm:w-12 text-ink mb-3 sm:mb-5 group-hover:scale-110 transition-transform duration-500" />
                      <h3 className="text-ink text-sm sm:text-base leading-tight font-sans font-medium">{ind.title}</h3>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>

          {/* ── Right Side: Text & Info ── */}
          <div className="lg:col-span-7 flex flex-col items-center md:items-start text-center md:text-left lg:order-2 order-1 lg:pl-4 xl:pl-8">
            <div className="flex items-center gap-2">
  <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8] animate-pulse" />
  <span className="text-[11px] uppercase tracking-[0.18em] text-[#1A6FA8] font-ui font-normal">
    WHO WE SERVE
  </span>
</div>

            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem]/[1.1] tracking-tight text-ink font-sans mb-6 font-semibold">
              Solutions built for demanding industries.
            </h2>
            
            <p className="text-[17px] sm:text-[1.125rem] text-slate-700 font-sans leading-relaxed mb-8 max-w-xl font-normal">
              We work with organizations where efficiency, data accuracy, and reliable operations directly impact revenue and day-to-day performance. Our platforms are designed to handle complex workflows and high-volume data streams across critical sectors.
            </p>
            
            <Link 
              href="/services" 
              className="group relative inline-flex items-center gap-1.5 rounded-full bg-[#29A8E0] px-6 py-3 text-[14px] font-normal text-ink shadow-[0_2px_12px_rgba(41,168,224,0.25)] transition-all duration-200 hover:bg-[#209FD6] hover:shadow-[0_4px_16px_rgba(41,168,224,0.38)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] font-ui"
            >
              <span>Explore Our Solutions</span>
              <span className="text-[10px] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
