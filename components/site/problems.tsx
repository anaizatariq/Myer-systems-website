'use client';

export function Problems() {
  return (
    <section
      id="what-we-do"
      className="relative scroll-mt-32 bg-white pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 overflow-hidden border-b border-slate-100"
    >
      <div className="relative mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
  <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8] animate-pulse" />
  <span className="text-[11px] uppercase tracking-[0.18em] text-[#1A6FA8] font-ui font-normal">
    WHAT WE DO IN 30 SECONDS
  </span>
</div>

        {/* Massive Statement (Problem) */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]/[1.15] tracking-tight text-ink text-balance font-sans font-semibold">
          Most companies waste thousands of hours every year on tasks that don&apos;t need a human. <br className="hidden md:block" /> 
          <span className="text-slate-400 font-medium tracking-normal mt-2 md:mt-0 inline-block">Data entry, document processing, report generation, manual approvals, repetitive workflows.</span>
        </h2>

        {/* Bold Separator */}
        <div className="mt-12 sm:mt-16 w-20 h-1.5 bg-[#29A8E0] rounded-full opacity-80" />

        {/* Massive Statement (Solution) */}
        <p className="mt-12 sm:mt-16 text-xl sm:text-2xl md:text-3xl lg:text-[2rem]/[1.35] text-slate-800  text-balance font-sans font-normal">
          Myer Systems eliminates that waste. We design, build, and deploy enterprise-grade AI automation systems that plug directly into your existing operations. <span className="text-[#1A6FA8]">Our systems are built for accountability, scalability, and control. Not black-box guesswork.</span>
        </p>

      </div>
    </section>
  );
}
