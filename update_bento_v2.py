import sys

file_path = r"d:\myer-systems-website\app\services\page.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

start_marker = "{/* ─── 5 SERVICE PILLARS (BENTO GRID) ─────────────────────── */}"
end_marker = "{/* ─── INDUSTRIES WE SERVE ────────────────────────────────── */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Markers not found!")
    sys.exit(1)

new_section = """{/* ─── 5 SERVICE PILLARS (PREMIUM 60/40 BENTO) ─────────────────────── */}
      <section className="pb-20 lg:pb-32 pt-4 bg-[#FAFAFA]">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-8 space-y-6 lg:space-y-8">
          
          {/* ROW 1: 60 / 40 */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            
            {/* Service 1: Enterprise AI (60%) */}
            <div className="reveal-up w-full lg:w-[60%] rounded-[2.5rem] bg-[#29A8E0] p-10 lg:p-14 relative overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(41,168,224,0.15)] transition-all duration-500">
               {/* Premium White Dots Mask */}
               <div className="absolute inset-0 z-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
               <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#29A8E0] via-[#29A8E0]/90 to-transparent" />
               <div className="relative z-10">
                 <span className="text-white/80 font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-5">Service 01</span>
                 <h3 className="text-3xl lg:text-4xl font-bold text-white font-heading mb-5 tracking-tight">Enterprise-Grade AI Solutions</h3>
                 <p className="text-white font-semibold text-[17px] mb-3">Advanced AI systems engineered for accountability, scalability, and control.</p>
                 <p className="text-white/90 mb-8 text-[15.5px] leading-[1.7] max-w-xl">We design and build custom AI systems for enterprise environments, systems that automate repetitive workflows, process unstructured data, and deliver actionable insights at scale.</p>
                 <ul className="space-y-3.5 text-white/95 text-[15px] max-w-xl">
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" /> Custom AI agents trained on your specific business processes</li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" /> Workflow automation from trigger to completion</li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" /> Intelligent document processing and data extraction</li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" /> Predictive analytics and operational insights</li>
                    <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" /> Full audit logging and decision traceability</li>
                 </ul>
               </div>
            </div>

            {/* Service 2: Industry SaaS (40%) */}
            <div className="reveal-up w-full lg:w-[40%] rounded-[2.5rem] bg-white border border-[#1A6FA8]/10 p-10 lg:p-14 relative overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(26,111,168,0.06)] transition-all duration-500 flex flex-col">
               <div className="relative z-10">
                 <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-5">Service 02</span>
                 <h3 className="text-3xl lg:text-4xl font-bold text-ink font-heading mb-5 tracking-tight group-hover:text-[#1A6FA8] transition-colors duration-300">Industry SaaS</h3>
                 <p className="text-ink font-semibold text-[17px] mb-3">Scalable, vertically-focused SaaS.</p>
                 <p className="text-slate-600 text-[15.5px] leading-[1.7] mb-8">We build SaaS products tailored to specific industries, not generic tools that require months of customisation. Built around real workflows.</p>
               </div>
               
               <div className="mt-auto relative z-10 bg-[#F0FAFF] rounded-2xl p-6 border border-[#29A8E0]/15 group-hover:bg-[#E0F4FC] transition-colors duration-300">
                    <strong className="text-[#1A6FA8] font-bold block mb-1.5 font-ui uppercase tracking-wider text-[11px]">Flagship Product</strong>
                    <strong className="text-ink font-bold text-[16px]">MedSynthea</strong>
                    <p className="text-[14px] text-slate-700 mt-2 leading-[1.6]">A healthcare-focused AI platform designed to synthesise medical data and streamline both clinical and administrative workflows.</p>
               </div>
            </div>

          </div>

          {/* ROW 2: 40 / 60 */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            
            {/* Service 3: Business Reengineering (40%) */}
            <div className="reveal-up w-full lg:w-[40%] rounded-[2.5rem] bg-white border border-[#1A6FA8]/10 p-10 lg:p-14 relative overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(26,111,168,0.06)] transition-all duration-500 flex flex-col justify-between">
               <div className="relative z-10">
                 <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-5">Service 03</span>
                 <h3 className="text-3xl lg:text-4xl font-bold text-ink font-heading mb-5 tracking-tight group-hover:text-[#1A6FA8] transition-colors duration-300">Business Reengineering</h3>
                 <p className="text-ink font-semibold text-[17px] mb-3">Eliminating inefficiencies.</p>
                 <p className="text-slate-600 text-[15.5px] leading-[1.7] mb-8">Before we automate anything, we audit your operations to find the real bottlenecks, the redundant steps, and manual handoffs.</p>
               </div>
               <div className="mt-auto relative z-10">
                 <ul className="space-y-3.5 text-slate-700 text-[15px] font-medium">
                    <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Full operational audit & analysis</li>
                    <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Workflow redesign for AI automation</li>
                    <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Elimination of redundant steps</li>
                    <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Operations rebuilt for scale</li>
                 </ul>
               </div>
            </div>

            {/* Service 4: Resource Augmentation (60%) */}
            <div className="reveal-up w-full lg:w-[60%] rounded-[2.5rem] bg-[#E0F4FC] p-10 lg:p-14 relative overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(26,111,168,0.06)] transition-all duration-500">
               <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-white/40 blur-3xl rounded-full" />
               <div className="relative z-10 max-w-2xl">
                 <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-5">Service 04</span>
                 <h3 className="text-3xl lg:text-4xl font-bold text-ink font-heading mb-5 tracking-tight">Resource Augmentation</h3>
                 <p className="text-ink font-semibold text-[17px] mb-3">Combining AI agents with skilled human expertise to scale operations.</p>
                 <p className="text-slate-700 text-[15.5px] leading-[1.7] mb-8">We pair AI agents with trained human operators to create hybrid teams that handle your workload without the overhead of traditional hiring. AI handles the volume and routine tasks. Humans handle the judgment calls. You get both, without compromising quality.</p>
                 
                 <div className="grid sm:grid-cols-2 gap-4">
                   <div className="flex items-center gap-3 bg-white/60 p-4 rounded-xl border border-white group-hover:bg-white transition-colors"><Check className="w-5 h-5 text-[#29A8E0] shrink-0" /> <span className="text-[14.5px] font-medium text-slate-800">Dedicated AI & human operators</span></div>
                   <div className="flex items-center gap-3 bg-white/60 p-4 rounded-xl border border-white group-hover:bg-white transition-colors"><Check className="w-5 h-5 text-[#29A8E0] shrink-0" /> <span className="text-[14.5px] font-medium text-slate-800">Flexible scaling based on demand</span></div>
                   <div className="flex items-center gap-3 bg-white/60 p-4 rounded-xl border border-white group-hover:bg-white transition-colors"><Check className="w-5 h-5 text-[#29A8E0] shrink-0" /> <span className="text-[14.5px] font-medium text-slate-800">Quality-controlled oversight</span></div>
                   <div className="flex items-center gap-3 bg-white/60 p-4 rounded-xl border border-white group-hover:bg-white transition-colors"><Check className="w-5 h-5 text-[#29A8E0] shrink-0" /> <span className="text-[14.5px] font-medium text-slate-800">Cost-efficient alternative</span></div>
                 </div>
               </div>
            </div>

          </div>

          {/* ROW 3: Full Width */}
          <div className="reveal-up w-full rounded-[2.5rem] bg-[#1A6FA8] p-10 lg:p-14 relative overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(26,111,168,0.25)] transition-all duration-500">
             <div className="absolute inset-0 z-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30" style={{ backgroundImage: 'radial-gradient(#8FD6F5 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
             <div className="absolute inset-0 z-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1A6FA8] via-[#1A6FA8]/90 to-[#1A6FA8]/40" />
             
             <div className="relative z-10 flex flex-col md:flex-row gap-10 lg:gap-16">
               <div className="flex-1 max-w-xl">
                 <span className="text-[#8FD6F5] font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-5">Service 05</span>
                 <h3 className="text-3xl lg:text-4xl font-bold text-white font-heading mb-5 tracking-tight">Revenue Cycle Management (RCM)</h3>
                 <p className="text-white font-semibold text-[17px] mb-3">End-to-end AI-powered RCM for healthcare organisations.</p>
                 <p className="text-white/80 text-[15.5px] leading-[1.7]">We deliver comprehensive, AI-powered revenue cycle management covering patient access, coding, billing, collections, and reporting, specifically built for US-based healthcare organisations looking to reduce errors, speed up reimbursements, and improve cash-flow visibility.</p>
               </div>
               
               <div className="flex-1 w-full pt-2">
                 <ul className="grid sm:grid-cols-2 gap-3.5">
                    <li className="flex items-center gap-3 bg-[#0A4B75]/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-white/95 text-[14.5px]"><Check className="w-5 h-5 text-[#8FD6F5] shrink-0" /> Patient access & eligibility</li>
                    <li className="flex items-center gap-3 bg-[#0A4B75]/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-white/95 text-[14.5px]"><Check className="w-5 h-5 text-[#8FD6F5] shrink-0" /> AI-assisted coding & billing</li>
                    <li className="flex items-center gap-3 bg-[#0A4B75]/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-white/95 text-[14.5px]"><Check className="w-5 h-5 text-[#8FD6F5] shrink-0" /> Claims submission & denials</li>
                    <li className="flex items-center gap-3 bg-[#0A4B75]/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-white/95 text-[14.5px]"><Check className="w-5 h-5 text-[#8FD6F5] shrink-0" /> Collections & payment posting</li>
                    <li className="flex items-center gap-3 bg-[#0A4B75]/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-white/95 text-[14.5px]"><Check className="w-5 h-5 text-[#8FD6F5] shrink-0" /> Reporting & compliance</li>
                    <li className="flex items-center gap-3 bg-[#0A4B75]/40 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-white/95 text-[14.5px]"><Check className="w-5 h-5 text-[#8FD6F5] shrink-0" /> Offshore medical billing/coding</li>
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
