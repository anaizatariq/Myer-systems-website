'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Technology / Platform', href: '/technology' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className="fixed top-3.5 sm:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300">
      <nav
        className="pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-slate-200/90 bg-white px-4 py-2 sm:px-6 sm:py-2.5 shadow-[0_6px_24px_rgba(16,24,32,0.12)] transition-all duration-300"
      >
        {/* ── Logo ─────────────────────────────────────── */}
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Myer Systems home">
          <Image
            src="/myers-mark.png"
            alt="Myer Systems"
            width={36}
            height={36}
            className="h-7 w-7 sm:h-8 sm:w-8 object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="flex flex-col">
            <span className="text-[16px] sm:text-[17px] font-bold tracking-tight text-ink font-heading leading-tight">
              Myer Systems
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav Links (Center) ──────────────── */}
        <div className="hidden items-center gap-7 lg:gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-[16.5px] font-semibold tracking-normal transition-colors font-ui duration-200',
                isActive(link.href)
                  ? 'text-[#1A6FA8] font-bold'
                  : 'text-ink/75 hover:text-ink'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── Desktop CTA Pill (Right) ────────────────── */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-1.5 rounded-full bg-brand px-6 py-2.5 text-[14px] font-bold text-ink shadow-[0_2px_12px_rgba(41,168,224,0.25)] transition-all duration-200 hover:bg-[#209FD6] hover:shadow-[0_4px_16px_rgba(41,168,224,0.38)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] font-ui"
          >
            <span>Contact Us</span>
            <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>
        </div>

        {/* ── Mobile & Tablet Menu Toggle Button ────────────────── */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink hover:bg-slate-100 transition-colors lg:hidden cursor-pointer"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* ── Mobile Overlay ── */}
      <div 
        className={cn(
          'fixed inset-0 bg-ink/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden pointer-events-auto',
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Mobile & Tablet Menu Left Slide ─────────────────────── */}
      <div
        className={cn(
          'pointer-events-auto fixed inset-y-0 left-0 w-64 sm:w-80 bg-white z-50 flex flex-col p-6 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <Image src="/myers-mark.png" alt="Myer Systems" width={32} height={32} className="object-contain" />
            <span className="text-[17px] font-bold text-ink font-heading">Myer Systems</span>
          </Link>
          <button onClick={() => setMobileOpen(false)} className="p-2 -mr-2 text-slate-400 hover:text-ink transition-colors rounded-full hover:bg-slate-100">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col flex-1 space-y-1.5 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'rounded-xl px-4 py-3.5 text-[16px] transition-colors font-ui',
                isActive(link.href)
                  ? 'bg-[#E0F4FC] text-[#1A6FA8] font-bold'
                  : 'text-ink/80 font-semibold hover:bg-slate-50 hover:text-ink'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="pt-6 border-t border-slate-100 mt-auto">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#29A8E0] py-3.5 text-[15px] font-normal text-ink transition-all hover:bg-[#209FD6] font-ui shadow-[0_4px_14px_rgba(41,168,224,0.3)] active:scale-[0.98]"
          >
            <span>Contact Us</span>
            <span>↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
