import sys

file_path = r"d:\myer-systems-website\app\services\page.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

start_idx = 171
end_idx = 1144

new_content = """
      {/* ─── SERVICES INTRO ────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F0FAFF]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center reveal-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1A6FA8]/20 bg-white px-4 py-1.5 mb-6 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1A6FA8] font-ui">
              CORE SERVICES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink font-heading leading-tight mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-[17px] sm:text-lg text-slate-700 font-sans leading-[1.8] max-w-3xl mx-auto">
            Myer Systems operates at the intersection of enterprise AI and operational efficiency. We deliver across five core service pillars — each designed to eliminate manual work, reduce inefficiency, and build smarter, more scalable operations.
          </p>
        </div>
      </section>

      {/* ─── 5 SERVICE PILLARS (SPLIT CARDS) ─────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16 lg:space-y-24">
          
          {/* Service 1 */}
          <div className="reveal-up group flex flex-col md:flex-row items-stretch rounded-[2.5rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.15)] transition-shadow duration-500 overflow-hidden border border-[#1A6FA8]/5">
            <div className="w-full md:w-[45%] shrink-0 relative aspect-square md:aspect-auto overflow-hidden bg-[#F0FAFF]">
              <Image src="/dashboard-mockup.jpg" alt="Enterprise AI Solutions" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex-1 relative bg-[#29A8E0] p-10 lg:p-14 overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <span className="text-white/80 font-bold text-[11px] tracking-[0.15em] uppercase font-ui block mb-4">Service 01</span>
                <h3 className="text-3xl lg:text-4xl font-bold text-white font-heading mb-6 tracking-tight">Enterprise-Grade AI Solutions</h3>
                <div className="space-y-5 text-[15px] sm:text-[1.05rem] font-sans leading-[1.7] max-w-2xl text-white/90">
                  <p className="text-white font-semibold">Advanced AI systems engineered for accountability, scalability, and control.</p>
                  <p className="text-white/90">We design and build custom AI systems for enterprise environments — systems that automate repetitive workflows, process unstructured data, and deliver actionable insights at scale. Every system includes full audit trails, explainable outputs, and human-in-the-loop checkpoints so you always stay in control.</p>
                  <ul className="space-y-3 mt-6 text-white border-t border-white/20 pt-6">
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> <span>Custom AI agents trained on your specific business processes</span></li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> <span>Workflow automation from trigger to completion</span></li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> <span>Intelligent document processing and data extraction</span></li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> <span>Predictive analytics and operational insights</span></li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> <span>Full audit logging and decision traceability</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="reveal-up group flex flex-col md:flex-row-reverse items-stretch rounded-[2.5rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.15)] transition-shadow duration-500 overflow-hidden border border-[#1A6FA8]/5">
            <div className="w-full md:w-[45%] shrink-0 relative aspect-square md:aspect-auto overflow-hidden bg-[#E0F4FC]">
              <Image src="/project-health.jpg" alt="Industry SaaS" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex-1 relative bg-white p-10 lg:p-14 overflow-hidden border-l border-[#1A6FA8]/10">
              <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60" style={{ backgroundImage: 'radial-gradient(#8FD6F5 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="absolute inset-0 z-0 bg-gradient-to-b md:bg-gradient-to-l from-white/20 via-white/95 to-white" />
              <div className="relative z-10">
                <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.15em] uppercase font-ui block mb-4">Service 02</span>
                <h3 className="text-3xl lg:text-4xl font-bold text-ink font-heading mb-6 tracking-tight">Industry SaaS</h3>
                <div className="space-y-5 text-[15px] sm:text-[1.05rem] font-sans leading-[1.7] max-w-2xl text-slate-700">
                  <p className="text-ink font-semibold">Scalable, vertically-focused software-as-a-service products.</p>
                  <p className="text-slate-700">We build SaaS products tailored to specific industries — not generic tools that require months of customisation. Our platforms are AI-native from the ground up, built around real operational workflows, and designed to scale with your business.</p>
                  <div className="mt-6 p-6 rounded-2xl bg-[#F0FAFF] border border-[#1A6FA8]/10 text-slate-700">
                    <strong className="text-[#1A6FA8] font-bold block mb-2 font-ui uppercase tracking-wider text-xs">Flagship Product</strong>
                    <strong className="text-ink font-bold">MedSynthea (medsynthea.com)</strong> — A healthcare-focused AI platform designed to synthesise medical data and streamline both clinical and administrative workflows for healthcare providers. Operations are led by Vaneeza Fatima (Operations Manager, MedSynthea).
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="reveal-up group flex flex-col md:flex-row items-stretch rounded-[2.5rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.15)] transition-shadow duration-500 overflow-hidden border border-[#1A6FA8]/5">
            <div className="w-full md:w-[45%] shrink-0 relative aspect-square md:aspect-auto overflow-hidden bg-[#F0FAFF]">
              <Image src="/project-audit.jpg" alt="Business Reengineering" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex-1 relative bg-[#29A8E0] p-10 lg:p-14 overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <span className="text-white/80 font-bold text-[11px] tracking-[0.15em] uppercase font-ui block mb-4">Service 03</span>
                <h3 className="text-3xl lg:text-4xl font-bold text-white font-heading mb-6 tracking-tight">Business Reengineering</h3>
                <div className="space-y-5 text-[15px] sm:text-[1.05rem] font-sans leading-[1.7] max-w-2xl text-white/90">
                  <p className="text-white font-semibold">Eliminating workflow inefficiencies and rebuilding smarter, more predictable processes.</p>
                  <p className="text-white/90">Before we automate anything, we audit your operations to find the real bottlenecks — the redundant steps, unnecessary approvals, and manual handoffs that slow your business down. Then we reengineer your workflows with AI-native processes that are faster, leaner, and built to scale.</p>
                  <ul className="space-y-3 mt-6 text-white border-t border-white/20 pt-6">
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> <span>Full operational audit and bottleneck analysis</span></li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> <span>Workflow redesign optimised for AI automation</span></li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> <span>Elimination of redundant steps, approvals, and manual handoffs</span></li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> <span>Rebuilding operations for predictability and data-driven performance</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="reveal-up group flex flex-col md:flex-row-reverse items-stretch rounded-[2.5rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.15)] transition-shadow duration-500 overflow-hidden border border-[#1A6FA8]/5">
            <div className="w-full md:w-[45%] shrink-0 relative aspect-square md:aspect-auto overflow-hidden bg-[#E0F4FC]">
              <Image src="/team-meeting.jpg" alt="Resource Augmentation" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex-1 relative bg-white p-10 lg:p-14 overflow-hidden border-l border-[#1A6FA8]/10">
              <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60" style={{ backgroundImage: 'radial-gradient(#8FD6F5 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="absolute inset-0 z-0 bg-gradient-to-b md:bg-gradient-to-l from-white/20 via-white/95 to-white" />
              <div className="relative z-10">
                <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.15em] uppercase font-ui block mb-4">Service 04</span>
                <h3 className="text-3xl lg:text-4xl font-bold text-ink font-heading mb-6 tracking-tight">Resource Augmentation</h3>
                <div className="space-y-5 text-[15px] sm:text-[1.05rem] font-sans leading-[1.7] max-w-2xl text-slate-700">
                  <p className="text-ink font-semibold">Combining AI agents with skilled human expertise to scale operations.</p>
                  <p className="text-slate-700">We pair AI agents with trained human operators to create hybrid teams that handle your workload without the overhead of traditional hiring. AI handles the volume and routine tasks. Humans handle the judgment calls. You get both — without compromising quality.</p>
                  <ul className="space-y-3 mt-6 text-slate-700 border-t border-[#1A6FA8]/10 pt-6 font-medium">
                    <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0" /> <span>Dedicated AI agents paired with skilled human operators</span></li>
                    <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0" /> <span>Flexible scaling — ramp up or down based on demand</span></li>
                    <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0" /> <span>Quality-controlled output with human oversight</span></li>
                    <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0" /> <span>Cost-efficient alternative to traditional in-house staffing</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Service 5 */}
          <div className="reveal-up group flex flex-col md:flex-row items-stretch rounded-[2.5rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.15)] transition-shadow duration-500 overflow-hidden border border-[#1A6FA8]/5">
            <div className="w-full md:w-[45%] shrink-0 relative aspect-square md:aspect-auto overflow-hidden bg-[#F0FAFF]">
              <Image src="/consultation-meeting.jpg" alt="Revenue Cycle Management (RCM)" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex-1 relative bg-[#29A8E0] p-10 lg:p-14 overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <span className="text-white/80 font-bold text-[11px] tracking-[0.15em] uppercase font-ui block mb-4">Service 05</span>
                <h3 className="text-3xl lg:text-4xl font-bold text-white font-heading mb-6 tracking-tight">Revenue Cycle Management (RCM)</h3>
                <div className="space-y-5 text-[15px] sm:text-[1.05rem] font-sans leading-[1.7] max-w-2xl text-white/90">
                  <p className="text-white font-semibold">End-to-end AI-powered RCM for healthcare organisations.</p>
                  <p className="text-white/90">We deliver comprehensive, AI-powered revenue cycle management covering patient access, coding, billing, collections, and reporting — specifically built for US-based healthcare organisations looking to reduce errors, speed up reimbursements, and improve cash-flow visibility.</p>
                  <ul className="space-y-3 mt-6 text-white border-t border-white/20 pt-6">
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> <span>Patient access and eligibility verification</span></li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> <span>AI-assisted coding and billing</span></li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> <span>Claims submission and denial management</span></li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> <span>Collections and payment posting</span></li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> <span>Reporting, analytics, and compliance readiness</span></li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> <span>Offshore medical billing and coding services</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── INDUSTRIES WE SERVE ────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F0FAFF]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink font-heading tracking-tight mb-6">Industries We Serve</h2>
            <p className="text-[17px] text-slate-700 font-sans leading-relaxed">
              Myer Systems serves organisations across healthcare and commercial markets. Our AI systems and automation solutions are built around the real workflows, compliance requirements, and operational challenges of each industry.
            </p>
          </div>

          <div className="reveal-up rounded-[2.5rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden border border-[#1A6FA8]/10 flex flex-col lg:flex-row">
            
            {/* Industry 1 */}
            <div className="flex-1 relative p-10 sm:p-14 lg:p-16 border-b lg:border-b-0 lg:border-r border-[#1A6FA8]/10 group">
              <div className="absolute inset-0 z-0 opacity-30 transition-opacity duration-500 group-hover:opacity-50" style={{ backgroundImage: 'radial-gradient(#8FD6F5 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="absolute inset-0 z-0 bg-gradient-to-b md:bg-gradient-to-t from-white/20 via-white/95 to-white" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-ink font-heading mb-6 group-hover:text-[#1A6FA8] transition-colors">Healthcare & Life Sciences</h3>
                <p className="text-[16px] text-slate-700 font-sans leading-relaxed mb-8">
                  Healthcare is where Myer Systems has its deepest operational footprint. Through our flagship platform MedSynthea and our RCM services, we help healthcare providers automate clinical and administrative workflows — from patient access to claims management to compliance reporting.
                </p>
                <ul className="space-y-4 text-[15px] text-slate-700 font-sans font-medium">
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0" /> <span>Revenue cycle management and billing automation</span></li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0" /> <span>Patient access and eligibility verification</span></li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0" /> <span>Clinical documentation and data synthesis</span></li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0" /> <span>Claims processing and denial management</span></li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0" /> <span>Compliance, audit readiness, and reporting</span></li>
                </ul>
              </div>
            </div>

            {/* Industry 2 */}
            <div className="flex-1 relative bg-[#E0F4FC] p-10 sm:p-14 lg:p-16 group">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-ink font-heading mb-6 group-hover:text-[#1A6FA8] transition-colors">Commercial & Enterprise</h3>
                <p className="text-[16px] text-slate-700 font-sans leading-relaxed mb-8">
                  Beyond healthcare, we work with commercial organisations that are weighed down by manual, repetitive processes — businesses that need to scale operations without proportionally scaling headcount. Our enterprise AI solutions and business reengineering services help these organisations automate workflows, process documents intelligently, and build data-driven operations.
                </p>
                <ul className="space-y-4 text-[15px] text-slate-700 font-sans font-medium">
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0" /> <span>Workflow automation for operations, finance, and back-office teams</span></li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0" /> <span>Intelligent document processing and data extraction</span></li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0" /> <span>Business process reengineering and operational efficiency</span></li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0" /> <span>Resource augmentation with AI + human hybrid teams</span></li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0" /> <span>Custom SaaS and AI product development</span></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── WHO WE WORK WITH ────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white border-t border-[#1A6FA8]/10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center reveal-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink font-heading tracking-tight mb-8">Who We Work With</h2>
          <div className="p-10 lg:p-14 rounded-[2.5rem] bg-[#E0F4FC] shadow-sm border border-[#1A6FA8]/10">
            <p className="text-lg lg:text-[1.35rem] text-slate-800 font-sans leading-[1.8]">
              Our clients include healthcare providers, commercial organisations, and enterprises across North America and international markets. We operate a distributed offshore-onshore model — with our headquarters in Dallas, Texas and our delivery hub in Lahore, Pakistan — enabling us to deliver high-quality AI and automation services at competitive value.
            </p>
          </div>
        </div>
      </section>
"""

new_lines = lines[:start_idx] + [new_content + "\n"] + lines[end_idx:]

with open(file_path, "w", encoding="utf-8") as f:
    f.writelines(new_lines)
