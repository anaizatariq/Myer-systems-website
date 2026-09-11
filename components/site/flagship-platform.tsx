'use client';


export function FlagshipPlatform() {
  return (
    <section 
      id="flagship" 
      className="relative scroll-mt-24 bg-[#F0FAFF] pt-10 pb-14 sm:pt-14 sm:pb-18 py-4 lg:py-6 overflow-hidden"
    >
      {/* ── Ambient Background Depth ── */}
      <div 
        className="pointer-events-none absolute top-1/4 right-0 h-[450px] w-[450px] rounded-full bg-[#29A8E0]/7 blur-[140px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-10 left-10 h-[450px] w-[450px] rounded-full bg-[#1A6FA8]/6 blur-[130px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full max-w-7xl mx-auto mt-6 sm:mt-10">
          
          {/* ════════ LEFT COLUMN: Image Placeholder ════════ */}
          <div className="order-2 lg:order-1 relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square rounded-[2rem] bg-white border border-[#29A8E0]/15 shadow-2xl shadow-[#1A6FA8]/5 overflow-hidden flex flex-col items-center justify-center group">
            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E0F4FC]/80 via-white to-white" />
            <div className="absolute -inset-x-20 -bottom-20 h-40 bg-[#29A8E0]/10 blur-3xl rounded-full" />
            
            {/* Placeholder UI */}
            <div className="relative flex flex-col items-center justify-center space-y-3">
              <div className="h-12 w-12 rounded-2xl bg-[#29A8E0]/10 flex items-center justify-center text-[#29A8E0]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-slate-400 font-ui font-medium text-xs tracking-widest uppercase flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
                Image Space Reserved
              </div>
            </div>
          </div>

          {/* ════════ RIGHT COLUMN: Content ════════ */}
          <div className="order-1 lg:order-2 flex flex-col items-start text-left space-y-5 lg:pr-8">
            
            {/* Eyebrow Chip */}
            <div className="flex items-center gap-2">
  <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8] animate-pulse" />
  <span className="text-[11px] uppercase tracking-[0.18em] text-[#1A6FA8] font-ui font-bold">
    OUR FLAGSHIP PRODUCT
  </span>
</div>

            {/* Display Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem]/[1.12] font-bold tracking-tight text-ink font-heading mt-2">
              MedSynthea
            </h2>

            {/* Subhead */}
            <p className="text-base sm:text-[1.1rem] leading-relaxed text-slate-600 font-sans font-normal max-w-xl mt-2">
              A healthcare-focused AI platform developed by Myer Systems, designed to synthesise medical data and streamline both clinical and administrative workflows for healthcare providers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
