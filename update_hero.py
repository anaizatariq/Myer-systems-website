import sys

file_path = r"d:\myer-systems-website\app\services\page.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

start_marker = "{/* ══════════════════════════════════════════════════════════════════\n          1. HERO SECTION"
end_marker = "      </section>\n\n\n      {/* ─── SERVICES INTRO"

start_idx = content.find(start_marker)
end_idx = content.find("      </section>\n\n\n      {/* ─── SERVICES INTRO")

if start_idx == -1 or end_idx == -1:
    print("Could not find markers")
    sys.exit(1)

new_hero = """{/* ══════════════════════════════════════════════════════════════════
          1. HERO SECTION (Premium Background Image)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden bg-[#060D14]">
        
        {/* Background Image & Overlays */}
        <div 
          className="absolute inset-0 z-0 bg-[url('/services-hero-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-50 mix-blend-luminosity"
          aria-hidden="true" 
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#060D14] via-[#060D14]/90 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#060D14] via-transparent to-[#060D14]/30" aria-hidden="true" />
        <div className="absolute inset-0 z-0 bg-[#060D14]/20" aria-hidden="true" />

        {/* Ambient Subtle Glow */}
        <div
          className="pointer-events-none absolute -bottom-24 left-10 h-[450px] w-[450px] rounded-full bg-[#29A8E0]/15 blur-[120px]"
          aria-hidden="true"
        />

        {/* Content Container */}
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* ════════ LEFT COLUMN: Editorial Headline & Subtext ════════ */}
            <div className="reveal lg:col-span-8 xl:col-span-7 space-y-6">

              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 shadow-2xs backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8FD6F5] animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8FD6F5] font-ui">
                  CAPABILITIES &amp; SERVICES
                </span>
              </div>

              {/* 1. HERO H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.15] font-bold tracking-tight text-white font-heading pt-1">
                Systems built to make complex operations{' '}
                <span className="text-[#8FD6F5]">more predictable.</span>
              </h1>

              {/* 1. HERO SUBTEXT */}
              <p className="text-lg sm:text-xl leading-relaxed text-[#8FD6F5]/80 font-sans max-w-xl">
                Myer Systems combines enterprise AI, healthcare technology, operational transformation, and specialised expertise to help organisations reduce friction, improve visibility, and scale with greater control.
              </p>

              {/* Strategic CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-ink shadow-[0_2px_12px_rgba(41,168,224,0.25)] hover:bg-[#209FD6] hover:shadow-[0_6px_20px_rgba(41,168,224,0.38)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 font-ui cursor-pointer"
                >
                  <span>Schedule Technical Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#capabilities"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white shadow-2xs backdrop-blur-md hover:bg-white/10 hover:border-white/30 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-200 font-ui"
                >
                  <span>Explore Capabilities</span>
                  <ChevronRight className="w-4 h-4 text-[#8FD6F5]/70 group-hover:text-[#8FD6F5] transition-colors" />
                </a>
              </div>

            </div>

          </div>
        </div>"""

new_content = content[:start_idx] + new_hero + content[end_idx:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)
