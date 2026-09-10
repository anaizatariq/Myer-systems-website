'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, ExternalLink, Globe, ArrowUpRight } from 'lucide-react';

interface CompanyLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

const COMPANY_LINKS: CompanyLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'How We Operate', href: '/how-we-operate' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Contact Leadership', href: '/contact' },
];

const SERVICE_LINKS = [
  { label: 'Enterprise-Grade AI Solutions', href: '/services#ai-solutions' },
  { label: 'Autonomous Workflow Pipelines', href: '/services#ai-solutions' },
  { label: 'Business Process Reengineering', href: '/services#saas' },
  { label: 'Healthcare Systems & RCM', href: '/services#rcm' },
  { label: 'Intelligent Resource Augmentation', href: '/services#resource-augmentation' },
  { label: 'Industry SaaS Platforms', href: '/services#saas' },
];

export function Footer() {
  return (
    <footer className="relative bg-[#060D14] overflow-hidden border-t border-[#1A6FA8]/30 text-[#8FD6F5]">
      
      {/* ── Ambient Glow in Midnight ── */}
      <div 
        className="pointer-events-none absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#1A6FA8]/10 blur-[160px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1.3fr_1.3fr] lg:gap-10">
          
          {/* ════════ COLUMN 1: Brand & Official Mission ════════ */}
          <div className="max-w-sm space-y-5">
            <Link href="/" className="flex items-center gap-3" aria-label="Myer Systems home">
              <Image
                src="/myers-mark.png"
                alt="Myer Systems"
                width={40}
                height={40}
                className="h-9 w-9 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-[20px] font-bold tracking-tight text-white font-heading">
                  Myer Systems
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#8FD6F5] uppercase">
                  myersystems.ai
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#8FD6F5]/80 font-sans">
              AI Systems Built for Accountability, Scale, and Control. Bridging strategic governance with global 24/7 technical execution.
            </p>
          </div>

          {/* ════════ COLUMN 2: Company Navigation ════════ */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white font-ui">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  {l.isExternal ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[#8FD6F5]/80 transition-colors hover:text-white font-sans"
                    >
                      <span>{l.label}</span>
                      <ArrowUpRight className="h-3 w-3 text-[#29A8E0]" />
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="inline-block text-sm text-[#8FD6F5]/80 transition-colors hover:text-white font-sans"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ════════ COLUMN 3: Services (From Profile) ════════ */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white font-ui">
              Offerings
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="inline-block text-sm text-[#8FD6F5]/80 transition-colors hover:text-white font-sans"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ════════ COLUMN 4: Dual-Hub Locations ════════ */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white font-ui">
              Dual-Hub Locations
            </h3>
            <ul className="mt-5 space-y-4 text-xs sm:text-[13px] text-[#8FD6F5]/80 font-sans">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#29A8E0] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium font-ui">
                    Headquarters (US):
                  </strong>
                  42 Dorothea Ln, Sugar Land, TX 77479
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Globe className="h-4 w-4 text-[#29A8E0] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium font-ui">
                    Global Delivery Hub:
                  </strong>
                  Lahore, Punjab, Pakistan
                </div>
              </li>

              <li className="flex items-start gap-2.5 pt-2 border-t border-white/10">
                <Mail className="h-4 w-4 text-[#29A8E0] shrink-0 mt-0.5" />
                <a 
                  href="mailto:info@myersystems.ai" 
                  className="hover:text-white transition-colors text-white font-medium font-mono text-xs"
                >
                  info@myersystems.ai
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom Horizon Line & Legal ── */}
        <div className="mt-12 sm:mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center text-xs text-[#8FD6F5]/70 font-sans">
          <p>
            &copy; {new Date().getFullYear()} Myer Systems LLC. All rights reserved.
          </p>
          
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-[10.5px] sm:text-[11px] font-ui">
            <span className="text-white font-medium">Sugar Land, TX</span>
            <span>·</span>
            <span className="text-white font-medium">Enterprise AI Systems</span>
            <span>·</span>
            <span className="text-white font-medium">24/7 Global Hub</span>
            <span>·</span>
            <span className="text-[#29A8E0] font-mono">myersystems.ai</span>
          </div>
        </div>

      </div>
    </footer>
  );
}