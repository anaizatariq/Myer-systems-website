'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { LiveSignalBeacon } from '@/components/ui/live-signal-beacon';

interface ProjectItem {
  title: string;
  badge: string;
  tags: string[];
  description: string;
  image: string;
  isNumeric?: boolean;
  metricValue?: number;
  metricPrefix?: string;
  metricSuffix?: string;
  metricDecimals?: number;
  statusLabel?: string;
  url: string;
}

const PROJECTS: ProjectItem[] = [
  {
    title: 'Custom Enterprise AI Systems',
    badge: 'Enterprise AI',
    tags: ['Automated Workflows', 'Error Reduction', 'Human Checkpoints'],
    description: 'Custom AI systems that automate routine processes, structure messy enterprise data, and keep human leaders in full control.',
    image: '/project-audit.jpg',
    isNumeric: false,
    statusLabel: 'Production AI System',
    url: '/services#ai-solutions',
  },
  {
    title: 'MedSynthea Healthcare Platform',
    badge: 'Flagship SaaS',
    tags: ['Healthcare AI', 'Clinical Workflows', 'Data Structuring'],
    description: 'A specialized healthcare platform developed by Myer Systems that organizes medical records and reduces administrative workload for providers.',
    image: '/project-health.jpg',
    isNumeric: false,
    statusLabel: 'Clinical SaaS Deployment',
    url: '/services#saas',
  },
  {
    title: 'Intelligent Resource Augmentation',
    badge: 'Hybrid Delivery',
    tags: ['Trained Specialists', 'Custom AI Agents', 'Embedded Pods'],
    description: 'Combining dedicated operational professionals from our global hub with trained AI agents to help your company scale with speed and precision.',
    image: '/consultation-meeting.jpg',
    isNumeric: false,
    statusLabel: 'Embedded Delivery Pods',
    url: '/services#resource-augmentation',
  },
];

export function Projects() {
  return (
    <section id="work" className="relative scroll-mt-24 bg-[#101820] py-20 sm:py-24 lg:py-28 overflow-hidden">
      
      {/* ── Ambient Dark Steel Depth ── */}
      <div 
        className="pointer-events-none absolute top-10 right-1/4 h-[500px] w-[500px] rounded-full bg-[#1A6FA8]/15 blur-[150px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-10 left-10 h-[450px] w-[450px] rounded-full bg-[#29A8E0]/10 blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#29A8E0]/25 bg-[#29A8E0]/10 px-3.5 py-1.5 shadow-2xs backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8FD6F5] font-ui">
              CORE CAPABILITY AREAS
            </span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[2.85rem]/[1.15] font-semibold tracking-tight text-white font-sans">
            Solutions built around{' '}
            <span className="font-quote italic font-normal text-[#8FD6F5]">
              real operational needs
            </span>.
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#8FD6F5]/80 font-sans max-w-2xl">
            From custom enterprise AI and business process reengineering to specialized healthcare platforms, we engineer reliable systems for modern organizations.
          </p>
        </div>

        {/* ── 3-Column Systems Grid with Living Micro-Interactions ── */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div 
              key={project.title} 
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0D1B2A] p-6 sm:p-7 shadow-2xl transition-all duration-300 hover:border-[#29A8E0]/40 hover:shadow-[#29A8E0]/10 hover:-translate-y-1.5"
            >
              {/* Subtle Scanning Horizon Beam on Card Hover */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#29A8E0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />

              <div>
                {/* Image Container */}
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-transparent" />
                  
                  {/* Badge with Live Signal Beacon */}
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8FD6F5] backdrop-blur-md border border-white/10 font-ui">
                    <LiveSignalBeacon color="brand" size="sm" />
                    {project.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="rounded-md bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-[#8FD6F5] font-ui border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-4 text-xl font-bold tracking-tight text-white font-heading leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-[13.5px] leading-relaxed text-slate-300 font-sans">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Metric & Link */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-[#8FD6F5] font-mono">
                  {project.statusLabel}
                </span>

                <Link
                  href={project.url}
                  className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#29A8E0] transition-colors font-ui uppercase tracking-wider"
                >
                  <span>Explore Capability</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* ── Direct Link to Full Case Studies ── */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full bg-[#29A8E0] px-8 py-3.5 text-xs sm:text-sm font-bold text-[#101820] shadow-[0_2px_14px_rgba(41,168,224,0.3)] transition-all hover:bg-[#1A6FA8] hover:text-white font-ui"
          >
            <span>Explore All Architecture & Systems</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
