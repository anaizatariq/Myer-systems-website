"use client";

import { useState } from 'react';
import Image from 'next/image';
import { 
  Mail, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ChevronDown,
  Layers,
  Cpu,
  Stethoscope,
  BadgeCheck,
  Building2,
  Clock,
  HelpCircle
} from 'lucide-react';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { useReveal } from '@/hooks/use-reveal';

const CONSULTATION_TOPICS = [
  'Enterprise AI Solutions',
  'Healthcare Technology & RCM',
  'MedSynthea',
  'Business Process Reengineering',
  'Intelligent Resource Augmentation',
  'General Consultation'
];

const CONSULTATION_TRACKS = [
  {
    icon: Cpu,
    title: "Enterprise AI Solutions",
    target: "Enterprise Technology & Leadership",
    description: "Discuss your AI goals, system requirements, automation opportunities, and the right approach for building or improving enterprise AI solutions.",
    deliverable: "Discussion Summary & Recommended Next Steps",
    timeline: "Focused Consultation · Recommended Next Steps",
    focusTopic: "Enterprise AI Solutions"
  },
  {
    icon: Stethoscope,
    title: "Healthcare Technology & RCM",
    target: "Healthcare Providers & Billing Teams",
    description: "Discuss healthcare technology, revenue cycle management, medical billing, and how AI can support complex healthcare operations.",
    deliverable: "Healthcare Operations & Solution Roadmap",
    timeline: "Focused Consultation · Recommended Next Steps",
    focusTopic: "Healthcare Technology & RCM"
  },
  {
    icon: Layers,
    title: "Intelligent Resource Augmentation",
    target: "Engineering & Operations Leaders",
    description: "Explore how Myer Systems can extend your operational or technical capacity through specialised expertise and intelligent hybrid delivery.",
    deliverable: "Resource & Delivery Approach",
    timeline: "Focused Consultation · Recommended Next Steps",
    focusTopic: "Intelligent Resource Augmentation"
  }
];

const FAQS = [
  {
    question: "Who will I speak with during the consultation?",
    answer: "The Myer Systems team member or specialist best suited to your area of interest will join the conversation."
  },
  {
    question: "What should I prepare before the consultation?",
    answer: "A brief overview of your organisation, current challenges, goals, and any relevant technology or operational requirements is helpful."
  },
  {
    question: "Is there a fee for the initial consultation?",
    answer: "Our initial exploratory consultation is an introductory discussion to understand your requirements, explore potential solutions, and see how we can help."
  },
  {
    question: "What happens after the consultation?",
    answer: "Based on your requirements, we'll discuss the appropriate solution, delivery approach, and next steps."
  }
];

export default function ContactPage() {
  useReveal();
  const [selectedTopic, setSelectedTopic] = useState('Enterprise AI Solutions');
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSelectTrack = (topic: string) => {
    setSelectedTopic(topic);
    const formElement = document.getElementById('booking-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F8FAFD] min-h-screen">
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════════
          1. DARK HERO (With Authentic Executive Consultation Visual)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[560px] lg:min-h-[600px] bg-[#060D14] overflow-hidden flex items-center pt-28 pb-18 lg:pt-32 lg:pb-22 border-b border-[#1A6FA8]/20">
        
        {/* Background Decorative Mesh & Architectural Geometry */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          {/* Top Left Dotted Mesh */}
          <div 
            className="absolute -top-10 -left-10 w-[500px] h-[500px] opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, #29A8E0 1.5px, transparent 1.5px)',
              backgroundSize: '16px 16px',
              maskImage: 'linear-gradient(135deg, black 10%, transparent 70%)',
              WebkitMaskImage: 'linear-gradient(135deg, black 10%, transparent 70%)'
            }}
          />

          {/* Bottom Right Dotted Mesh */}
          <div 
            className="absolute -bottom-10 right-20 w-[600px] h-[400px] opacity-[0.12]"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)',
              backgroundSize: '20px 20px',
              maskImage: 'linear-gradient(to top left, black, transparent 80%)',
              WebkitMaskImage: 'linear-gradient(to top left, black, transparent 80%)'
            }}
          />

          {/* Diagonal Architectural Beams */}
          <div className="absolute -bottom-32 -right-10 w-[600px] h-[600px] opacity-15 rotate-[-35deg]">
             <div className="absolute bottom-10 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#29A8E0] to-white" />
             <div className="absolute bottom-20 right-0 w-[90%] h-1 bg-white" />
             <div className="absolute bottom-32 right-0 w-[80%] h-2 bg-[#29A8E0]" />
             <div className="absolute bottom-44 right-0 w-[70%] h-1 bg-white/70" />
             <div className="absolute bottom-56 right-0 w-[50%] h-0.5 bg-[#29A8E0]/50" />
          </div>

          {/* Precision Outline Circles */}
          <div className="absolute top-1/2 right-[10%] w-24 h-24 rounded-full border border-[#29A8E0]/20 -translate-y-1/2" />
          <div className="absolute top-[35%] right-[6%] w-16 h-16 rounded-full border border-white/10" />
          <div className="absolute bottom-16 left-[12%] w-14 h-14 rounded-full border border-[#29A8E0]/15" />

          {/* Ambient Deep Glows */}
          <div 
            className="absolute top-10 right-1/4 h-[500px] w-[500px] rounded-full bg-[#1A6FA8]/15 blur-[160px]" 
          />
          <div 
            className="absolute bottom-5 left-10 h-[450px] w-[450px] rounded-full bg-[#29A8E0]/10 blur-[140px]" 
          />
        </div>

        {/* Content Container (2-Column Hero: Narrative + Consultation Visual) */}
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & CTAs */}
            <div className="reveal lg:col-span-7 space-y-6">
              
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#29A8E0]/25 bg-[#29A8E0]/10 px-3.5 py-1.5 shadow-2xs backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8FD6F5] font-ui">
                  CONNECT WITH OUR TEAM
                </span>
              </div>

              {/* Display Heading */}
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] leading-[1.16] font-heading">
                Schedule a Consultation with{' '}
                <span className="inline-block pr-1.5 font-quote italic font-normal text-[#8FD6F5]">
                  Myer Systems
                </span>
              </h1>

              {/* Short Info Paragraph */}
              <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-slate-300 font-light max-w-xl font-sans">
                Connect with the Myer Systems team to discuss your AI, healthcare technology, software, or operational needs.
              </p>

              {/* Action CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a 
                  href="#booking-form"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#29A8E0] px-8 py-3.5 text-sm font-bold text-[#101820] shadow-md shadow-[#29A8E0]/20 hover:bg-[#1A6FA8] hover:text-white transition-all duration-200 font-ui cursor-pointer"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href="#consultation-tracks"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-[#29A8E0]/40 font-ui"
                >
                  Explore Consultation Areas
                </a>
              </div>

            </div>

            {/* Right Column: High-End Consultation Visual */}
            <div className="reveal lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#29A8E0]/30 bg-[#101820] shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_40px_rgba(41,168,224,0.15)] group">
                <Image
                  src="/consultation-meeting.jpg"
                  alt="Myer Systems Consultation Discussion"
                  width={800}
                  height={450}
                  className="w-full h-auto object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Subtle Horizon Glow Line */}
                <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#29A8E0] to-transparent" />

                {/* Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D14]/85 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-3.5 inset-x-3.5 p-3 rounded-2xl bg-[#060D14]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#29A8E0] animate-pulse" />
                    <span className="text-xs font-semibold text-white font-ui">
                      Focused Advisory &amp; Review
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#8FD6F5] uppercase tracking-wider">
                    Dallas · Lahore
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════
          2. INTAKE & CONSULTATION BOOKING FORM
      ══════════════════════════════════════════════════════════════════ */}
      <section id="booking-form" className="py-20 lg:py-28 bg-[#F8FAFD] relative overflow-hidden scroll-mt-24 border-t border-[#1A6FA8]/10">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
        <div 
          className="pointer-events-none absolute top-10 right-0 h-[500px] w-[500px] rounded-full bg-[#29A8E0]/7 blur-[140px]" 
          aria-hidden="true" 
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          {/* Section Heading */}
          <div className="reveal text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-white px-4 py-1.5 mb-4 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                CONSULTATION REQUEST
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-[#101820] font-heading">
              Tell us about your project and goals
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans">
              Our team will review your submission and get back to you about the next steps.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            
            {/* ── Left Rail: What Happens Next & Direct Channels ── */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Process Steps Card */}
              <div className="rounded-3xl bg-white border border-[#1A6FA8]/20 p-7 sm:p-8 shadow-[0_12px_40px_rgba(26,111,168,0.07)] space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-[#1A6FA8]/10">
                  <div className="h-9 w-9 rounded-xl bg-[#F0FAFF] border border-[#1A6FA8]/20 flex items-center justify-center text-[#29A8E0]">
                    <Sparkles className="w-5 h-5 text-[#29A8E0]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101820] font-heading">
                    What happens next?
                  </h3>
                </div>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-3.5">
                    <div className="h-8 w-8 rounded-xl bg-[#F0FAFF] border border-[#1A6FA8]/20 flex items-center justify-center text-xs font-mono font-bold text-[#1A6FA8] shrink-0 mt-0.5">
                      01
                    </div>
                    <div>
                      <div className="text-[14.5px] font-bold text-[#101820] font-heading">Initial Review</div>
                      <p className="text-[13px] text-slate-600 leading-relaxed font-sans mt-0.5">
                        Our team reviews your requirements and identifies the right area of expertise for the conversation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="h-8 w-8 rounded-xl bg-[#F0FAFF] border border-[#1A6FA8]/20 flex items-center justify-center text-xs font-mono font-bold text-[#1A6FA8] shrink-0 mt-0.5">
                      02
                    </div>
                    <div>
                      <div className="text-[14.5px] font-bold text-[#101820] font-heading">Consultation</div>
                      <p className="text-[13px] text-slate-600 leading-relaxed font-sans mt-0.5">
                        A focused conversation with the relevant Myer Systems team members based on your needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="h-8 w-8 rounded-xl bg-[#F0FAFF] border border-[#1A6FA8]/20 flex items-center justify-center text-xs font-mono font-bold text-[#1A6FA8] shrink-0 mt-0.5">
                      03
                    </div>
                    <div>
                      <div className="text-[14.5px] font-bold text-[#101820] font-heading">Recommended Next Steps</div>
                      <p className="text-[13px] text-slate-600 leading-relaxed font-sans mt-0.5">
                        We&apos;ll discuss practical next steps, potential solutions, and the appropriate path forward for your organisation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Channels Box */}
              <div className="rounded-3xl bg-white border border-[#1A6FA8]/20 p-6 sm:p-7 shadow-[0_12px_40px_rgba(26,111,168,0.06)] space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="h-10 w-10 rounded-xl bg-[#F0FAFF] border border-[#1A6FA8]/20 flex items-center justify-center text-[#1A6FA8] shrink-0">
                    <Mail className="w-5 h-5 text-[#1A6FA8]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#1A6FA8] font-bold block">Direct Email</span>
                    <a href="mailto:hello@myersystems.ai" className="text-sm font-bold text-[#101820] hover:text-[#29A8E0] transition-colors font-sans mt-0.5 block">
                      hello@myersystems.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-[#1A6FA8]/10">
                  <div className="h-10 w-10 rounded-xl bg-[#F0FAFF] border border-[#1A6FA8]/20 flex items-center justify-center text-[#1A6FA8] shrink-0">
                    <Globe className="w-5 h-5 text-[#1A6FA8]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#1A6FA8] font-bold block">Dual-Hub Operating Model</span>
                    <span className="text-sm font-bold text-[#101820] font-sans mt-0.5 block">
                      Dallas, Texas · US Headquarters<br />
                      <span className="text-slate-600 font-normal">Lahore, Pakistan · Global Delivery Hub</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* ── Right Column: Interactive Consultation Booking Form ── */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white border border-[#1A6FA8]/20 p-8 sm:p-10 shadow-[0_16px_50px_rgba(26,111,168,0.08)] relative">
                
                {submitted ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#F0FAFF] border border-[#29A8E0]/40 flex items-center justify-center mx-auto text-[#29A8E0]">
                      <CheckCircle2 className="w-8 h-8 text-[#29A8E0]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#101820] font-heading">Consultation Request Received</h3>
                    <p className="text-base text-slate-600 font-sans max-w-md mx-auto">
                      Thank you. Our team will review your project scope and get back to you about the next steps.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-[#F0FAFF] px-6 py-2.5 text-xs font-bold text-[#1A6FA8] font-ui hover:bg-[#29A8E0] hover:text-[#101820] transition-all mt-4 cursor-pointer"
                    >
                      Submit Another Request
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
                    
                    {/* Consultation Focus Topic Selector */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-[#1A6FA8] font-ui block mb-2.5">
                        Select Consultation Focus:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {CONSULTATION_TOPICS.map((topic) => (
                          <button
                            type="button"
                            key={topic}
                            onClick={() => setSelectedTopic(topic)}
                            className={`rounded-full px-4 py-2 text-xs font-semibold font-ui transition-all duration-200 cursor-pointer ${
                              selectedTopic === topic
                                ? 'bg-[#29A8E0] text-[#101820] shadow-[0_2px_10px_rgba(41,168,224,0.3)] border border-[#29A8E0]'
                                : 'bg-[#F8FAFD] text-slate-700 border border-[#1A6FA8]/20 hover:border-[#29A8E0] hover:bg-white'
                            }`}
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                      <div className="space-y-2">
                        <label htmlFor="full-name" className="text-xs font-bold uppercase tracking-wider text-[#101820] font-ui">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="full-name"
                          required
                          placeholder="Evelyn Reed"
                          className="w-full rounded-xl bg-[#F8FAFD] border border-[#1A6FA8]/20 px-4 py-3.5 text-sm text-[#101820] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#29A8E0] focus:ring-2 focus:ring-[#29A8E0]/20 transition-all font-sans"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="work-email" className="text-xs font-bold uppercase tracking-wider text-[#101820] font-ui">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="work-email"
                          required
                          placeholder="evelyn@company.com"
                          className="w-full rounded-xl bg-[#F8FAFD] border border-[#1A6FA8]/20 px-4 py-3.5 text-sm text-[#101820] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#29A8E0] focus:ring-2 focus:ring-[#29A8E0]/20 transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* Company & Timeline */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-[#101820] font-ui">
                          Organisation / Company *
                        </label>
                        <input
                          type="text"
                          id="company"
                          required
                          placeholder="Company Name"
                          className="w-full rounded-xl bg-[#F8FAFD] border border-[#1A6FA8]/20 px-4 py-3.5 text-sm text-[#101820] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#29A8E0] focus:ring-2 focus:ring-[#29A8E0]/20 transition-all font-sans"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="timeline" className="text-xs font-bold uppercase tracking-wider text-[#101820] font-ui">
                          Expected Deployment Timeline
                        </label>
                        <select
                          id="timeline"
                          className="w-full rounded-xl bg-[#F8FAFD] border border-[#1A6FA8]/20 px-4 py-3.5 text-sm text-[#101820] focus:bg-white focus:outline-none focus:border-[#29A8E0] focus:ring-2 focus:ring-[#29A8E0]/20 transition-all font-sans"
                        >
                          <option>Immediate</option>
                          <option>1–3 Months</option>
                          <option>Exploring / Planning</option>
                        </select>
                      </div>
                    </div>

                    {/* Project Overview */}
                    <div className="space-y-2">
                      <label htmlFor="project-scope" className="text-xs font-bold uppercase tracking-wider text-[#101820] font-ui">
                        Project Scope &amp; Current Bottlenecks
                      </label>
                      <textarea
                        id="project-scope"
                        rows={4}
                        placeholder="Briefly describe your objectives, current systems, or operational needs..."
                        className="w-full rounded-xl bg-[#F8FAFD] border border-[#1A6FA8]/20 px-4 py-3.5 text-sm text-[#101820] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#29A8E0] focus:ring-2 focus:ring-[#29A8E0]/20 transition-all resize-none font-sans"
                      />
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#29A8E0] px-8 py-4 text-sm sm:text-base font-bold text-[#101820] shadow-[0_4px_18px_rgba(41,168,224,0.3)] hover:bg-[#1A6FA8] hover:text-white transition-all duration-200 font-ui cursor-pointer"
                      >
                        <span>Submit Consultation Request</span>
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

      {/* ══════════════════════════════════════════════════════════════════
          3. CONSULTATION AREAS
      ══════════════════════════════════════════════════════════════════ */}
      <section id="consultation-tracks" className="py-20 lg:py-24 bg-[#F0FAFF]/60 relative overflow-hidden border-t border-[#1A6FA8]/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          
          <div className="reveal text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-white px-4 py-1.5 mb-4 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                CONSULTATION AREAS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold tracking-tight text-[#101820] font-heading">
              Explore Consultation Areas
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans">
              Choose the area matching your operational and technical priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {CONSULTATION_TRACKS.map((track) => {
              const Icon = track.icon;
              return (
                <div 
                  key={track.title}
                  className="reveal rounded-3xl bg-white border border-[#1A6FA8]/20 p-8 shadow-[0_10px_35px_rgba(26,111,168,0.06)] hover:shadow-[0_16px_45px_rgba(26,111,168,0.12)] hover:border-[#29A8E0]/60 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-5">
                    <div className="h-12 w-12 rounded-2xl bg-[#F0FAFF] border border-[#1A6FA8]/25 flex items-center justify-center text-[#1A6FA8] group-hover:bg-[#29A8E0] group-hover:text-[#101820] transition-colors">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>

                    <div>
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1A6FA8]">
                        {track.target}
                      </div>
                      <h3 className="text-xl font-bold text-[#101820] font-heading mt-1">
                        {track.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed font-sans">
                      {track.description}
                    </p>

                    <div className="pt-3 border-t border-[#1A6FA8]/10 space-y-2">
                      <div className="text-xs text-slate-500 font-sans">
                        <span className="font-bold text-[#101820]">Session Deliverable:</span> {track.deliverable}
                      </div>
                      <div className="text-[11px] font-mono text-[#1A6FA8] font-semibold flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{track.timeline}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => handleSelectTrack(track.focusTopic)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-[#1A6FA8]/25 bg-[#F8FAFD] py-3 text-xs font-bold text-[#101820] font-ui group-hover:bg-[#29A8E0] group-hover:border-[#29A8E0] transition-all cursor-pointer"
                    >
                      <span>Explore This Area</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. FREQUENTLY ASKED QUESTIONS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#F8FAFD] relative overflow-hidden border-t border-[#1A6FA8]/15">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          
          <div className="reveal text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-white px-4 py-1.5 mb-4 shadow-2xs">
              <HelpCircle className="w-3.5 h-3.5 text-[#29A8E0]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold tracking-tight text-[#101820] font-heading">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-sans">
              Helpful information before connecting with our team.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={faq.question}
                  className="rounded-2xl bg-white border border-[#1A6FA8]/20 shadow-[0_4px_20px_rgba(26,111,168,0.04)] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-[#F0FAFF]/40 transition-colors"
                  >
                    <span className="text-base sm:text-[17px] font-bold text-[#101820] font-heading pr-4">
                      {faq.question}
                    </span>
                    <div className={`h-8 w-8 rounded-full bg-[#F0FAFF] border border-[#1A6FA8]/20 flex items-center justify-center text-[#1A6FA8] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#29A8E0] text-[#101820]' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed font-sans border-t border-[#1A6FA8]/10">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. GLOBAL OPERATING MODEL REASSURANCE BAR
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white border-t border-[#1A6FA8]/15 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="h-10 w-10 rounded-xl bg-[#F0FAFF] border border-[#1A6FA8]/20 flex items-center justify-center text-[#1A6FA8] shrink-0">
                <Building2 className="w-5 h-5 text-[#29A8E0]" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#101820] font-heading">Dallas, Texas · US Headquarters</div>
                <div className="text-[11px] text-slate-500 font-sans">Strategic leadership &amp; advisory</div>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="h-10 w-10 rounded-xl bg-[#F0FAFF] border border-[#1A6FA8]/20 flex items-center justify-center text-[#1A6FA8] shrink-0">
                <Globe className="w-5 h-5 text-[#29A8E0]" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#101820] font-heading">Lahore, Pakistan · Global Delivery Hub</div>
                <div className="text-[11px] text-slate-500 font-sans">Technical execution &amp; operational support</div>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="h-10 w-10 rounded-xl bg-[#F0FAFF] border border-[#1A6FA8]/20 flex items-center justify-center text-[#1A6FA8] shrink-0">
                <BadgeCheck className="w-5 h-5 text-[#29A8E0]" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#101820] font-heading">Enterprise AI · Healthcare Technology</div>
                <div className="text-[11px] text-slate-500 font-sans">Accountable systems built for scale and control</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

