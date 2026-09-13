"use client";

import { useState } from 'react';
import Image from 'next/image';
import { 
  Mail, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  MapPin,
  Phone,
  Linkedin
} from 'lucide-react';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { useReveal } from '@/hooks/use-reveal';

const INTEREST_OPTIONS = [
  'AI Automation',
  'Business Reengineering',
  'Resource Augmentation',
  'RCM Services',
  'SaaS Development',
  'Partnership',
  'Careers',
  'Other'
];

export default function ContactPage() {
  useReveal();
  const [selectedInterest, setSelectedInterest] = useState('AI Automation');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-[#F8FAFD] min-h-screen">
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════════
          1. DARK HERO 
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[560px] lg:min-h-[600px] bg-[#060D14] overflow-hidden flex items-center pt-28 pb-18 lg:pt-32 lg:pb-22 border-b border-[#1A6FA8]/20">
        
        {/* Background Image & Overlays */}
        <div
          className="absolute inset-0 z-0 bg-[url('/images/contact-hero.jpg')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        />
        <div className="absolute inset-0 z-0 bg-[#060D14]/30" aria-hidden="true" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#060D14] via-[#060D14]/80 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#060D14] via-transparent to-[#060D14]/40" aria-hidden="true" />

        {/* Tech Ambient Glows */}
        <div
          className="pointer-events-none absolute -top-10 left-10 h-[400px] w-[400px] rounded-full bg-[#1A6FA8]/20 blur-[130px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#29A8E0]/15 blur-[120px]"
          aria-hidden="true"
        />

        {/* Content Container */}
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & CTAs */}
            <div className="reveal lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8FD6F5] animate-pulse" />
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#8FD6F5] font-ui font-bold">
                  NO SALES PRESSURE
                </span>
              </div>

              <h1 className="mt-4 sm:mt-5 text-[2.2rem]/[1.15] sm:text-5xl lg:text-[3.5rem]/[1.12] xl:text-[3.9rem]/[1.12] font-bold tracking-tight text-white font-heading drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
                Let&apos;s Talk
              </h1>

              <p className="mt-3.5 sm:mt-4 max-w-xl text-base sm:text-[17px] leading-relaxed text-slate-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-sans font-normal">
                Whether you&apos;re ready to automate or just exploring what&apos;s possible, we&apos;re here to help. Just an honest conversation about what AI can do for your operations.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a 
                  href="#booking-form"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#29A8E0] px-8 py-3.5 text-sm font-bold text-ink shadow-md shadow-[#29A8E0]/20 hover:bg-[#209FD6] hover:shadow-[0_6px_20px_rgba(41,168,224,0.38)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 font-ui cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

            </div>

            {/* Right Column: Contact Details Cards */}
            <div className="reveal lg:col-span-5 relative space-y-4">
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-6 font-heading">Contact Information</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Mail className="w-4 h-4 text-[#8FD6F5]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/50 uppercase tracking-widest font-ui mb-0.5">Email</div>
                      <a href="mailto:hello@myersystems.ai" className="hover:text-white transition-colors">hello@myersystems.ai</a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Phone className="w-4 h-4 text-[#8FD6F5]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/50 uppercase tracking-widest font-ui mb-0.5">Phone</div>
                      <a href="tel:+18000000000" className="hover:text-white transition-colors">+1 (800) 000-0000</a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Linkedin className="w-4 h-4 text-[#8FD6F5]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/50 uppercase tracking-widest font-ui mb-0.5">LinkedIn</div>
                      <a href="https://linkedin.com/company/myer-systems/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">linkedin.com/company/myer-systems/</a>
                    </div>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          2. OFFICES & BOOKING FORM
      ══════════════════════════════════════════════════════════════════ */}
      <section id="booking-form" className="py-20 lg:py-28 bg-[#F8FAFD] relative overflow-hidden scroll-mt-24">
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ── Left Rail: Offices & Discovery Call ── */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="reveal">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-ink font-heading mb-4">
                  Book a Discovery Call
                </h2>
                <p className="text-[17px] text-slate-600 font-sans leading-relaxed">
                  Not sure where to start? Book a free discovery call. We&apos;ll walk through your operations and show you where AI automation can make the biggest difference.
                </p>
                <a 
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-white px-6 py-3 text-sm font-bold text-ink hover:bg-[#F0FAFF] hover:border-[#29A8E0]/40 transition-all shadow-sm"
                >
                  <Globe className="w-4 h-4 text-[#29A8E0]" />
                  Open Calendly Booking
                </a>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-[#1A6FA8]/20 to-transparent" />

              <div className="reveal">
                <h3 className="text-xl font-bold tracking-tight text-ink font-heading mb-6">
                  Our Offices
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#E0F4FC] border border-[#29A8E0]/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#1A6FA8]" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-[#1A6FA8] uppercase tracking-widest font-ui mb-1">United States — Headquarters</div>
                      <div className="text-lg font-bold text-ink font-sans">Dallas, Texas, USA</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#E0F4FC] border border-[#29A8E0]/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#1A6FA8]" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-[#1A6FA8] uppercase tracking-widest font-ui mb-1">Pakistan — Delivery Hub</div>
                      <div className="text-lg font-bold text-ink font-sans">Lahore, Punjab, Pakistan</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ── Right Column: Contact Form ── */}
            <div className="lg:col-span-7">
              <div className="rounded-[2.5rem] bg-white border border-[#1A6FA8]/15 p-8 sm:p-12 shadow-[0_20px_50px_rgba(26,111,168,0.08)] relative">
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold tracking-tight text-ink font-heading">
                    Send a Message
                  </h3>
                  <p className="text-sm text-slate-500 mt-2">Fill out the form below and our team will get back to you promptly.</p>
                </div>

                {submitted ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#F0FAFF] border border-[#29A8E0]/40 flex items-center justify-center mx-auto text-[#29A8E0]">
                      <CheckCircle2 className="w-8 h-8 text-[#29A8E0]" />
                    </div>
                    <h3 className="text-2xl font-bold text-ink font-heading">Message Sent Successfully</h3>
                    <p className="text-base text-slate-600 font-sans max-w-md mx-auto">
                      Thank you for reaching out. We will review your message and contact you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-[#F0FAFF] px-6 py-2.5 text-xs font-bold text-[#1A6FA8] font-ui hover:bg-[#29A8E0] hover:text-ink transition-all mt-4 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-6"
                  >
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="full-name" className="text-[11px] font-bold uppercase tracking-wider text-ink font-ui">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="full-name"
                          required
                          placeholder="John Doe"
                          className="w-full rounded-xl bg-[#F8FAFD] border border-[#1A6FA8]/20 px-4 py-3.5 text-sm text-ink placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#29A8E0] focus:ring-2 focus:ring-[#29A8E0]/20 transition-all font-sans"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-ink font-ui">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="john@company.com"
                          className="w-full rounded-xl bg-[#F8FAFD] border border-[#1A6FA8]/20 px-4 py-3.5 text-sm text-ink placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#29A8E0] focus:ring-2 focus:ring-[#29A8E0]/20 transition-all font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-[11px] font-bold uppercase tracking-wider text-ink font-ui">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          required
                          placeholder="Your Company"
                          className="w-full rounded-xl bg-[#F8FAFD] border border-[#1A6FA8]/20 px-4 py-3.5 text-sm text-ink placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#29A8E0] focus:ring-2 focus:ring-[#29A8E0]/20 transition-all font-sans"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-wider text-ink font-ui">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="+1 (555) 000-0000"
                          className="w-full rounded-xl bg-[#F8FAFD] border border-[#1A6FA8]/20 px-4 py-3.5 text-sm text-ink placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#29A8E0] focus:ring-2 focus:ring-[#29A8E0]/20 transition-all font-sans"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="interest" className="text-[11px] font-bold uppercase tracking-wider text-ink font-ui">
                        What are you interested in?
                      </label>
                      <select
                        id="interest"
                        value={selectedInterest}
                        onChange={(e) => setSelectedInterest(e.target.value)}
                        className="w-full rounded-xl bg-[#F8FAFD] border border-[#1A6FA8]/20 px-4 py-3.5 text-sm text-ink focus:bg-white focus:outline-none focus:border-[#29A8E0] focus:ring-2 focus:ring-[#29A8E0]/20 transition-all font-sans"
                      >
                        {INTEREST_OPTIONS.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-ink font-ui">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="How can we help you?"
                        className="w-full rounded-xl bg-[#F8FAFD] border border-[#1A6FA8]/20 px-4 py-3.5 text-sm text-ink placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#29A8E0] focus:ring-2 focus:ring-[#29A8E0]/20 transition-all resize-none font-sans"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#29A8E0] px-8 py-4 text-sm sm:text-base font-bold text-ink shadow-[0_4px_18px_rgba(41,168,224,0.28)] hover:bg-[#209FD6] hover:shadow-[0_6px_24px_rgba(41,168,224,0.42)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 font-ui cursor-pointer"
                      >
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
