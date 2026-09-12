'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CapabilityPillar {
  id: string;
  num: string;
  title: string;
  href: string;
}

const PILLARS: CapabilityPillar[] = [
  {
    id: 'enterprise-ai',
    num: '01',
    title: 'Enterprise-Grade AI Solutions',
    href: '/services#ai',
  },
  {
    id: 'saas-products',
    num: '02',
    title: 'Industry SaaS Products',
    href: '/services#saas',
  },
  {
    id: 'reengineering',
    num: '03',
    title: 'Business Reengineering',
    href: '/services#reengineering',
  },
  {
    id: 'resource-augmentation',
    num: '04',
    title: 'Resource Augmentation',
    href: '/services#augmentation',
  },
  {
    id: 'rcm',
    num: '05',
    title: 'Revenue Cycle Management (RCM)',
    href: '/services#rcm',
  },
];

export function Disciplines() {
  return (
    <section 
      id="disciplines" 
      className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-100"
    >
      <div className="relative mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        
        {/* ──────────────────────────────────────────────────────────
            HEADER (Outside grid so image only matches list height)
        ────────────────────────────────────────────────────────── */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#1A6FA8] font-ui font-bold">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-ink font-heading leading-[1.1]">
            Our Services at a Glance
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          
          {/* ──────────────────────────────────────────────────────────
              LEFT COLUMN: Clean List
          ────────────────────────────────────────────────────────── */}
          <div className="w-full flex flex-col justify-center border-t border-slate-200">
            {PILLARS.map((pillar) => (
              <Link 
                key={pillar.id}
                href={pillar.href}
                className="group flex items-center justify-between py-4 sm:py-5 lg:py-6 border-b border-slate-200 hover:border-[#29A8E0] transition-colors duration-500"
              >
                <div className="flex items-center gap-5 sm:gap-8">
                  <span className="text-lg lg:text-xl font-bold text-slate-300 group-hover:text-[#29A8E0] transition-colors duration-500 font-ui tracking-widest uppercase">
                    {pillar.num}
                  </span>
                  <span className="text-lg sm:text-xl lg:text-[1.35rem] font-normal text-ink group-hover:text-[#1A6FA8] font-sans tracking-tight transition-colors duration-500">
                    {pillar.title}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-[#29A8E0] opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out" />
              </Link>
            ))}
          </div>

          {/* ──────────────────────────────────────────────────────────
              RIGHT COLUMN: Static Vibe Image
          ────────────────────────────────────────────────────────── */}
          <div className="w-full min-h-[300px] sm:min-h-[400px] lg:min-h-0 relative rounded-[2rem] overflow-hidden shadow-2xl shadow-[#1A6FA8]/10 border border-slate-100">
            {/* Process Reengineering Image */}
            <img 
              src="/capabilities/process-reengineering.png" 
              alt="Myer Systems Process Reengineering"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1A6FA8]/10 to-transparent pointer-events-none mix-blend-multiply" />
          </div>

        </div>

      </div>
    </section>
  );
}



