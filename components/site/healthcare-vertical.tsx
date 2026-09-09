'use client';

import Link from 'next/link';
import {
  Activity,
  ShieldCheck,
  FileSpreadsheet,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const HEALTHCARE_SOLUTIONS = [
  {
    stepNum: '01',
    title: 'Revenue Cycle Management (RCM)',
    icon: Activity,
    tagline: 'End-to-end financial operations',
    description: 'Complete lifecycle management covering patient registration, eligibility verification, charge capture, claim submission, and accounts receivable follow-up.',
    points: [
      'Comprehensive patient intake & eligibility verification',
      'Continuous accounts receivable (A/R) tracking',
      'Transparent cash-flow reporting and revenue visibility',
    ],
  },
  {
    stepNum: '02',
    title: 'Medical Billing & Certified Coding',
    icon: FileSpreadsheet,
    tagline: 'Precision coding for US healthcare',
    description: 'Dedicated billing specialists and certified coders ensuring every encounter is documented accurately, submitted promptly, and paid correctly.',
    points: [
      'Trained and certified medical coding specialists',
      'Accurate medical coding and documentation verification',
      'Faster claim submission cycles and payer compliance',
    ],
  },
  {
    stepNum: '03',
    title: 'Denial Prevention & Mitigation',
    icon: ShieldCheck,
    tagline: 'Protecting cash flow before submission',
    description: 'We identify documentation gaps and billing discrepancies before claims reach payers, reducing costly denials, appeals, and write-offs.',
    points: [
      'Pre-submission claim validation and discrepancy scrubbers',
      'Root-cause analysis on payer denial trends',
      'Structured appeals workflows to recover disputed revenue',
    ],
  },
];

export function HealthcareVertical() {
  return (
    <section
      id="healthcare-vertical"
      className="relative scroll-mt-24 border-t border-border/80 bg-white py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* ── Ambient Background Depth ── */}
      <div
        className="pointer-events-none absolute top-10 right-10 h-[450px] w-[450px] rounded-full bg-[#29A8E0]/10 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-10 h-[450px] w-[450px] rounded-full bg-[#1A6FA8]/8 blur-[140px]"
        aria-hidden="true"
      />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ── Left Side: Header ── */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-[#29A8E0] px-4 py-1.5 mb-6 shadow-md shadow-[#29A8E0]/20">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white font-ui">
              HEALTHCARE FOCUS
            </span>
          </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem]/[1.1] font-extrabold tracking-tight text-[#101820] font-sans">
              Protecting revenue and reducing paperwork.
            </h2>
          </div>

          {/* ── Right Side: Connected Feature Boxes ── */}
          <div className="lg:col-span-7 flex flex-col lg:pl-4">
            <div className="flex flex-col rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
              {HEALTHCARE_SOLUTIONS.map((item, index) => {
                const Icon = item.icon;
                const isMiddle = index === 1;
                const isLast = index === HEALTHCARE_SOLUTIONS.length - 1;
                
                // Dynamic styling based on position
                const bgClass = isMiddle ? "bg-[#8FD6F5]" : "bg-white hover:bg-slate-50";
                
                // Pipeline is static. Color changes on hover.
                const lineClass = isMiddle 
                  ? "bg-[#101820] group-hover:bg-white" 
                  : "bg-[#8FD6F5] group-hover:bg-[#101820]";
                
                const iconBgClass = isMiddle ? "bg-[#101820] text-[#8FD6F5]" : "bg-[#E0F4FC] text-[#1A6FA8]";
                const textClass = isMiddle ? "text-[#101820]/90" : "text-slate-600";
                const checkClass = isMiddle ? "text-[#101820]" : "text-[#29A8E0]";

                return (
                  <div 
                    key={item.stepNum} 
                    className={`relative flex flex-col sm:flex-row items-start gap-5 sm:gap-6 p-7 sm:p-9 transition-colors duration-300 cursor-default group ${bgClass} ${!isLast ? 'border-b border-slate-200/80' : ''}`}
                  >
                    {/* Vertical Pipeline / Accent Line (Static width/scale, color changes on hover) */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-colors duration-500 ${lineClass}`} />
                    
                    {/* Icon */}
                    <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center shadow-sm ${iconBgClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#101820] mb-3 font-heading">
                        {item.title}
                      </h3>
                      
                      <ul className="space-y-2.5">
                        {item.points.map((pt, idx) => (
                          <li key={idx} className={`flex items-start gap-2.5 text-[14.5px] font-sans font-medium ${textClass}`}>
                            <CheckCircle2 className={`w-[18px] h-[18px] shrink-0 mt-0.5 ${checkClass}`} />
                            <span className="leading-snug">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
