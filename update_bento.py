import sys

file_path = r"d:\myer-systems-website\app\services\page.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# The split card section starts at: {/* ─── 5 SERVICE PILLARS ─────────────────────── */}
# and ends at: {/* ─── INDUSTRIES WE SERVE ────────────────────────────────── */}

start_marker = "{/* ─── 5 SERVICE PILLARS ─────────────────────── */}"
end_marker = "{/* ─── INDUSTRIES WE SERVE ────────────────────────────────── */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Markers not found!")
    sys.exit(1)

new_section = """{/* ─── 5 SERVICE PILLARS (BENTO GRID) ─────────────────────── */}
      <section className="pb-20 lg:pb-28 pt-4 bg-[#FAFAFA]">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Service 1: Enterprise AI (col-span-2) */}
            <div className="reveal-up lg:col-span-2 rounded-[2.5rem] bg-[#29A8E0] p-10 sm:p-12 relative overflow-hidden group shadow-sm hover:shadow-[0_20px_40px_rgba(41,168,224,0.15)] transition-all duration-500">
               {/* Background visual */}
               <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 transition-opacity duration-500 group-hover:opacity-30" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
               <div className="relative z-10 max-w-xl">
                 <span className="text-white/80 font-bold text-[11px] tracking-[0.15em] uppercase font-ui block mb-4">Service 01</span>
                 <h3 className="text-3xl lg:text-[2.5rem] leading-[1.1] font-bold text-white font-heading mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-300">Enterprise-Grade AI Solutions</h3>
                 <p className="text-white font-semibold text-lg mb-2">Advanced AI systems engineered for accountability, scalability, and control.</p>
                 <p className="text-white/90 mb-6 text-[15px] leading-relaxed">We design and build custom AI systems for enterprise environments, systems that automate repetitive workflows, process unstructured data, and deliver actionable insights at scale.</p>
                 <ul className="space-y-3 mt-6 text-white text-[15px]">
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> Custom AI agents trained on your specific business processes</li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> Workflow automation from trigger to completion</li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> Intelligent document processing and data extraction</li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> Predictive analytics and operational insights</li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" /> Full audit logging and decision traceability</li>
                 </ul>
               </div>
            </div>

            {/* Service 2: Industry SaaS (col-span-1) */}
            <div className="reveal-up lg:col-span-1 rounded-[2.5rem] bg-[#E0F4FC] p-10 sm:p-12 relative overflow-hidden group shadow-sm hover:shadow-[0_20px_40px_rgba(26,111,168,0.1)] transition-all duration-500 flex flex-col justify-between">
               <div className="relative z-10">
                 <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.15em] uppercase font-ui block mb-4">Service 02</span>
                 <h3 className="text-3xl font-bold text-ink font-heading mb-4 tracking-tight group-hover:text-[#1A6FA8] transition-colors duration-300">Industry SaaS</h3>
                 <p className="text-ink font-semibold text-[15px] mb-2">Scalable, vertically-focused software-as-a-service products.</p>
                 <p className="text-slate-700 text-[14px] leading-relaxed mb-6">We build SaaS products tailored to specific industries, not generic tools that require months of customisation.</p>
               </div>
               <div className="mt-auto p-5 rounded-2xl bg-white border border-[#1A6FA8]/10 text-slate-700 relative z-10 group-hover:-translate-y-1 transition-transform duration-500 shadow-sm group-hover:shadow-md">
                    <strong className="text-[#1A6FA8] font-bold block mb-1 font-ui uppercase tracking-wider text-[10px]">Flagship Product</strong>
                    <strong className="text-ink font-bold text-[14px]">MedSynthea (medsynthea.com)</strong>
                    <p className="text-[12px] mt-1 leading-relaxed">A healthcare-focused AI platform designed to synthesise medical data and streamline workflows.</p>
               </div>
            </div>

            {/* Service 3: Business Reengineering (col-span-1) */}
            <div className="reveal-up lg:col-span-1 rounded-[2.5rem] bg-white border border-[#1A6FA8]/10 p-10 sm:p-12 relative overflow-hidden group shadow-sm hover:shadow-[0_20px_40px_rgba(26,111,168,0.08)] transition-all duration-500">
               <div className="absolute inset-0 z-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60" style={{ backgroundImage: 'radial-gradient(#8FD6F5 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
               <div className="absolute inset-0 z-0 bg-gradient-to-t from-white via-white/95 to-white/40" />
               <div className="relative z-10">
                 <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.15em] uppercase font-ui block mb-4">Service 03</span>
                 <h3 className="text-3xl font-bold text-ink font-heading mb-4 tracking-tight group-hover:text-[#1A6FA8] transition-colors duration-300">Business Reengineering</h3>
                 <p className="text-ink font-semibold text-[15px] mb-2">Eliminating workflow inefficiencies.</p>
                 <p className="text-slate-700 text-[14px] leading-relaxed mb-6">Before we automate anything, we audit your operations to find the real bottlenecks, the redundant steps, and manual handoffs.</p>
                 <ul className="space-y-3 mt-6 text-slate-700 text-[14px] font-medium">
                    <li className="flex items-start gap-2.5"><ArrowRight className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" /> Full operational audit & analysis</li>
                    <li className="flex items-start gap-2.5"><ArrowRight className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" /> Workflow redesign for AI automation</li>
                    <li className="flex items-start gap-2.5"><ArrowRight className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" /> Elimination of redundant steps</li>
                    <li className="flex items-start gap-2.5"><ArrowRight className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" /> Operations rebuilt for scale</li>
                 </ul>
               </div>
            </div>

            {/* Service 4: Resource Augmentation (col-span-2) */}
            <div className="reveal-up lg:col-span-2 rounded-[2.5rem] bg-[#1A6FA8] p-10 sm:p-12 relative overflow-hidden group shadow-sm hover:shadow-[0_20px_40px_rgba(26,111,168,0.25)] transition-all duration-500">
               <div className="absolute left-0 top-0 w-1/2 h-full opacity-10 bg-gradient-to-r from-white to-transparent" />
               <div className="relative z-10 max-w-xl ml-auto text-right">
                 <span className="text-[#8FD6F5] font-bold text-[11px] tracking-[0.15em] uppercase font-ui block mb-4">Service 04</span>
                 <h3 className="text-3xl lg:text-[2.5rem] leading-[1.1] font-bold text-white font-heading mb-4 tracking-tight group-hover:-translate-x-1 transition-transform duration-300">Resource Augmentation</h3>
                 <p className="text-white font-semibold text-lg mb-2">Combining AI agents with skilled human expertise.</p>
                 <p className="text-white/80 mb-6 text-[15px] leading-relaxed">We pair AI agents with trained human operators to create hybrid teams that handle your workload without the overhead of traditional hiring. AI handles the volume and routine tasks. Humans handle the judgment calls. You get both, without compromising quality.</p>
                 <div className="grid sm:grid-cols-2 gap-4 mt-8 text-left">
                   <div className="flex items-start gap-3 text-white/90 text-[14px]"><Check className="w-5 h-5 text-[#8FD6F5] shrink-0" /> Dedicated AI agents & human operators</div>
                   <div className="flex items-start gap-3 text-white/90 text-[14px]"><Check className="w-5 h-5 text-[#8FD6F5] shrink-0" /> Flexible scaling based on demand</div>
                   <div className="flex items-start gap-3 text-white/90 text-[14px]"><Check className="w-5 h-5 text-[#8FD6F5] shrink-0" /> Quality-controlled output oversight</div>
                   <div className="flex items-start gap-3 text-white/90 text-[14px]"><Check className="w-5 h-5 text-[#8FD6F5] shrink-0" /> Cost-efficient alternative to in-house</div>
                 </div>
               </div>
            </div>

            {/* Service 5: RCM (col-span-3) */}
            <div className="reveal-up lg:col-span-3 rounded-[2.5rem] bg-white border border-[#1A6FA8]/10 p-10 sm:p-14 relative overflow-hidden group shadow-sm hover:shadow-[0_20px_40px_rgba(41,168,224,0.08)] transition-all duration-500 flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
               <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-[#F0FAFF] blur-3xl opacity-50 rounded-full" />
               <div className="flex-1 relative z-10 max-w-xl">
                 <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.15em] uppercase font-ui block mb-4">Service 05</span>
                 <h3 className="text-3xl lg:text-[2.5rem] leading-[1.1] font-bold text-ink font-heading mb-4 tracking-tight group-hover:text-[#1A6FA8] transition-colors duration-300">Revenue Cycle Management (RCM)</h3>
                 <p className="text-ink font-semibold text-lg mb-2">End-to-end AI-powered RCM for healthcare organisations.</p>
                 <p className="text-slate-700 text-[15px] leading-relaxed">We deliver comprehensive, AI-powered revenue cycle management covering patient access, coding, billing, collections, and reporting, specifically built for US-based healthcare organisations looking to reduce errors, speed up reimbursements, and improve cash-flow visibility.</p>
               </div>
               <div className="flex-1 w-full relative z-10">
                 <ul className="grid sm:grid-cols-2 gap-3 text-slate-700 text-[14px] font-medium">
                    <li className="flex items-start gap-3 bg-[#F0FAFF] p-3.5 rounded-xl border border-[#1A6FA8]/5 hover:border-[#29A8E0]/30 hover:bg-[#E0F4FC] transition-colors cursor-default"><Check className="w-5 h-5 text-[#29A8E0] shrink-0" /> Patient access & eligibility</li>
                    <li className="flex items-start gap-3 bg-[#F0FAFF] p-3.5 rounded-xl border border-[#1A6FA8]/5 hover:border-[#29A8E0]/30 hover:bg-[#E0F4FC] transition-colors cursor-default"><Check className="w-5 h-5 text-[#29A8E0] shrink-0" /> AI-assisted coding & billing</li>
                    <li className="flex items-start gap-3 bg-[#F0FAFF] p-3.5 rounded-xl border border-[#1A6FA8]/5 hover:border-[#29A8E0]/30 hover:bg-[#E0F4FC] transition-colors cursor-default"><Check className="w-5 h-5 text-[#29A8E0] shrink-0" /> Claims submission & denials</li>
                    <li className="flex items-start gap-3 bg-[#F0FAFF] p-3.5 rounded-xl border border-[#1A6FA8]/5 hover:border-[#29A8E0]/30 hover:bg-[#E0F4FC] transition-colors cursor-default"><Check className="w-5 h-5 text-[#29A8E0] shrink-0" /> Collections & payment posting</li>
                    <li className="flex items-start gap-3 bg-[#F0FAFF] p-3.5 rounded-xl border border-[#1A6FA8]/5 hover:border-[#29A8E0]/30 hover:bg-[#E0F4FC] transition-colors cursor-default"><Check className="w-5 h-5 text-[#29A8E0] shrink-0" /> Reporting & compliance readiness</li>
                    <li className="flex items-start gap-3 bg-[#F0FAFF] p-3.5 rounded-xl border border-[#1A6FA8]/5 hover:border-[#29A8E0]/30 hover:bg-[#E0F4FC] transition-colors cursor-default"><Check className="w-5 h-5 text-[#29A8E0] shrink-0" /> Offshore medical billing/coding</li>
                 </ul>
               </div>
            </div>

          </div>
        </div>
      </section>

      """

new_content = content[:start_idx] + new_section + content[end_idx:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)
