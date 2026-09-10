'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {  
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center overflow-hidden bg-ink pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 lg:pb-20"
    >
      {/* ── 1. Pure Background Video (No grids, no artificial effects) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="h-full w-full object-cover object-[75%_center] lg:object-[82%_center]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Soft dark gradient on the left only for text readability — zero grid, zero clutter */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#101820] via-[#101820]/85 via-42% to-transparent z-10 pointer-events-none" 
          aria-hidden="true" 
        />
      </div>

      {/* ── 2. Foreground Content Container ─────────────────── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">

          {/* Left Column: Authentic Myer Systems Narrative */}
          <div className="lg:col-span-8 z-10">
            
            {/* Top Eyebrow Chip */}
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-ink/75 px-3.5 py-1.5 shadow-sm backdrop-blur-md">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand animate-pulse shadow-[0_0_8px_#29A8E0]" />
              <span className="text-[10px] xs:text-[11px] sm:text-[11.5px] font-bold tracking-[0.14em] sm:tracking-[0.18em] uppercase text-brand-light font-ui truncate">
                AUTONOMOUS ENTERPRISE AI &amp; WORKFLOW SYSTEMS
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="mt-4 sm:mt-5 text-[2.2rem]/[1.15] sm:text-5xl lg:text-[3.5rem]/[1.12] xl:text-[3.9rem]/[1.12] font-bold tracking-tight text-white font-heading drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              AI Systems Built for <br className="hidden sm:inline" />
              Accountability
              , Scale &amp; Control.
            </h1>

            {/* Concise Subtext */}
            <p className="mt-3.5 sm:mt-4 max-w-xl text-base sm:text-[17px] leading-relaxed text-slate-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-sans">
              Myer Systems engineers enterprise AI platforms, industry software, and scalable delivery teams designed for organizations where governance, precision, and accountability matter.
            </p>

            {/* Dual CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-[14px] font-bold text-ink shadow-[0_0_24px_rgba(41,168,224,0.45)] transition-all duration-200 hover:bg-[#209FD6] hover:shadow-[0_0_35px_rgba(41,168,224,0.65)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] font-ui"
              >
                <span>Schedule Consultation</span>
                <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </Link>
              
              <a
                href="#disciplines"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-[14px] font-semibold text-white shadow-xs backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] font-ui"
              >
                <span>Explore Solutions</span>
                <span className="text-xs text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>

          </div>

          {/* Right Column: Clear view of video */}
          <div className="hidden lg:block lg:col-span-4" />

        </div>
      </div>

      {/* ── 3. Bottom-Right Interactive Live Feed & Playback Controls ── */}
      <div className="absolute bottom-5 right-6 z-30 hidden sm:flex items-center gap-2.5 rounded-full border border-white/15 bg-ink/80 px-3.5 py-1.5 backdrop-blur-xl shadow-lg">
        <div className="flex items-center gap-2 pr-2 border-r border-white/15">
          <span className="h-2 w-2 rounded-full bg-[#29A8E0] animate-ping" />
          <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-300 font-ui">
            LIVE SYSTEM FEED
          </span>
        </div>
        <button
          onClick={togglePlay}
          className="p-1 rounded-full text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
        >
          {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
        </button>
        <button
          onClick={toggleMute}
          className="p-1 rounded-full text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
        </button>
      </div>

    </section>
  );
}
