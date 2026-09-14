'use client';

export function FlagshipPlatform() {
  return (
    <section 
      id="flagship" 
      className="relative scroll-mt-24 bg-[#F0FAFF] py-16 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* ── Ambient Background Depth ── */}
      <div 
        className="pointer-events-none absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-[#29A8E0]/10 blur-[150px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-10 left-10 h-[500px] w-[500px] rounded-full bg-[#1A6FA8]/10 blur-[150px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full mx-auto">
          
          {/* ════════ LEFT COLUMN: Uncropped Natural Image (col-span-6) ════════ */}
          <div className="order-2 lg:order-1 lg:col-span-6 relative w-full group">
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(26,111,168,0.25)] border border-[#29A8E0]/20 bg-white p-1.5 sm:p-2">
              <img 
                src="/capabilities/workflow-automation.png" 
                alt="MedSynthea Workflow Automation"
                className="w-full h-auto rounded-[1.5rem] object-contain group-hover:scale-[1.015] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1A6FA8]/5 to-transparent pointer-events-none rounded-[2rem]" />
            </div>
            
            {/* Subtle decorative glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#29A8E0]/20 to-[#1A6FA8]/20 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* ════════ RIGHT COLUMN: Upscaled Content (col-span-6) ════════ */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col items-start text-left space-y-6 lg:pl-10">
            
            {/* Eyebrow Chip */}
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8] animate-pulse" />
              <span className="text-[12px] uppercase tracking-[0.2em] text-[#1A6FA8] font-ui font-normal">
                OUR FLAGSHIP PRODUCT
              </span>
            </div>

            {/* Display Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-semibold tracking-tight text-ink font-sans leading-[1.05]">
              MedSynthea
            </h2>

            {/* Subhead (Using font-ui to prevent serif fallbacks) */}
            <p className="text-lg sm:text-xl lg:text-[1.25rem] leading-[1.7] text-slate-600 font-sans font-normal max-w-2xl mt-4">
              A healthcare-focused AI platform developed by Myer Systems, designed to synthesise medical data and streamline both clinical and administrative workflows for healthcare providers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
