import sys

file_path = r"d:\myer-systems-website\app\services\page.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

start_marker = "{/* ─── 5 SERVICE PILLARS"
end_marker = "{/* ─── INDUSTRIES WE SERVE ────────────────────────────────── */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Markers not found!")
    sys.exit(1)

new_section = """{/* ─── 5 SERVICE PILLARS (HORIZONTAL ROWS STYLED) ─────────────────────── */}
      <section className="pb-20 lg:pb-32 pt-4 bg-[#FAFAFA]">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-8 space-y-10 lg:space-y-12">
          
          {/* Service 1 */}
          <div className="reveal-up w-full flex flex-col md:flex-row border border-[#1A6FA8]/15 rounded-[2rem] bg-white group hover:bg-[#E0F4FC] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(26,111,168,0.12)] border-l-[6px] border-l-[#29A8E0] overflow-hidden">
            
            <div className="w-full md:w-1/2 p-8 lg:p-14 relative z-10 flex flex-col justify-center transition-transform duration-700 group-hover:translate-x-2">
              <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-4 transition-colors group-hover:text-[#29A8E0]">Service 01</span>
              <h3 className="text-3xl lg:text-4xl font-bold text-ink font-heading mb-4 tracking-tight">Enterprise-Grade AI Solutions</h3>
              <p className="font-semibold text-slate-800 text-[17px] mb-3">Advanced AI systems engineered for accountability, scalability, and control.</p>
              <p className="text-slate-600 text-[15.5px] leading-relaxed max-w-xl">We design and build custom AI systems for enterprise environments, systems that automate repetitive workflows, process unstructured data, and deliver actionable insights at scale.</p>
            </div>
            
            <div className="w-full md:w-1/2 p-8 lg:p-14 bg-[#29A8E0] md:rounded-l-[3rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <ul className="space-y-4 text-white/95 text-[15.5px] font-medium">
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" /> Custom AI agents trained on your specific business processes</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" /> Workflow automation from trigger to completion</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" /> Intelligent document processing and data extraction</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" /> Predictive analytics and operational insights</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" /> Full audit logging and decision traceability</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Service 2 */}
          <div className="reveal-up w-full flex flex-col md:flex-row border border-[#1A6FA8]/15 rounded-[2rem] bg-white group hover:bg-[#E0F4FC] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(26,111,168,0.12)] border-l-[6px] border-l-[#29A8E0] overflow-hidden">
            
            <div className="w-full md:w-1/2 p-8 lg:p-14 relative z-10 flex flex-col justify-center transition-transform duration-700 group-hover:translate-x-2">
              <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-4 transition-colors group-hover:text-[#29A8E0]">Service 02</span>
              <h3 className="text-3xl lg:text-4xl font-bold text-ink font-heading mb-4 tracking-tight">Industry SaaS</h3>
              <p className="font-semibold text-slate-800 text-[17px] mb-3">Scalable, vertically-focused software-as-a-service products.</p>
              <p className="text-slate-600 text-[15.5px] leading-relaxed max-w-xl">We build SaaS products tailored to specific industries, not generic tools that require months of customisation. Built around real operational workflows and designed to scale.</p>
            </div>
            
            <div className="w-full md:w-1/2 p-8 lg:p-14 bg-[#29A8E0] md:rounded-l-[3rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-md transform transition-transform duration-500 group-hover:scale-[1.02]">
                  <strong className="text-[#1A6FA8] font-bold block mb-2 font-ui uppercase tracking-[0.15em] text-[11px]">Flagship Product</strong>
                  <strong className="text-ink font-bold text-[18px] block mb-2 font-heading">MedSynthea</strong>
                  <p className="text-[14.5px] text-slate-700 leading-relaxed font-sans">A healthcare-focused AI platform designed to synthesise medical data and streamline both clinical and administrative workflows for healthcare providers.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Service 3 */}
          <div className="reveal-up w-full flex flex-col md:flex-row border border-[#1A6FA8]/15 rounded-[2rem] bg-white group hover:bg-[#E0F4FC] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(26,111,168,0.12)] border-l-[6px] border-l-[#29A8E0] overflow-hidden">
            
            <div className="w-full md:w-1/2 p-8 lg:p-14 relative z-10 flex flex-col justify-center transition-transform duration-700 group-hover:translate-x-2">
              <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-4 transition-colors group-hover:text-[#29A8E0]">Service 03</span>
              <h3 className="text-3xl lg:text-4xl font-bold text-ink font-heading mb-4 tracking-tight">Business Reengineering</h3>
              <p className="font-semibold text-slate-800 text-[17px] mb-3">Eliminating workflow inefficiencies and rebuilding smarter processes.</p>
              <p className="text-slate-600 text-[15.5px] leading-relaxed max-w-xl">Before we automate anything, we audit your operations to find the real bottlenecks, the redundant steps, and manual handoffs that slow your business down.</p>
            </div>
            
            <div className="w-full md:w-1/2 p-8 lg:p-14 bg-[#29A8E0] md:rounded-l-[3rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <ul className="space-y-4 text-white/95 text-[15.5px] font-medium">
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-white shrink-0 mt-0.5" /> Full operational audit and bottleneck analysis</li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-white shrink-0 mt-0.5" /> Workflow redesign optimised for AI automation</li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-white shrink-0 mt-0.5" /> Elimination of redundant steps and approvals</li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-white shrink-0 mt-0.5" /> Rebuilding operations for data-driven performance</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Service 4 */}
          <div className="reveal-up w-full flex flex-col md:flex-row border border-[#1A6FA8]/15 rounded-[2rem] bg-white group hover:bg-[#E0F4FC] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(26,111,168,0.12)] border-l-[6px] border-l-[#29A8E0] overflow-hidden">
            
            <div className="w-full md:w-1/2 p-8 lg:p-14 relative z-10 flex flex-col justify-center transition-transform duration-700 group-hover:translate-x-2">
              <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-4 transition-colors group-hover:text-[#29A8E0]">Service 04</span>
              <h3 className="text-3xl lg:text-4xl font-bold text-ink font-heading mb-4 tracking-tight">Resource Augmentation</h3>
              <p className="font-semibold text-slate-800 text-[17px] mb-3">Combining AI agents with skilled human expertise to scale operations.</p>
              <p className="text-slate-600 text-[15.5px] leading-relaxed max-w-xl">We pair AI agents with trained human operators to create hybrid teams that handle your workload without the overhead of traditional hiring. AI handles the volume and routine tasks. Humans handle the judgment calls. You get both, without compromising quality.</p>
            </div>
            
            <div className="w-full md:w-1/2 p-8 lg:p-14 bg-[#29A8E0] md:rounded-l-[3rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <ul className="space-y-4 text-white/95 text-[15.5px] font-medium">
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" /> Dedicated AI agents paired with skilled human operators</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" /> Flexible scaling, ramp up or down based on demand</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" /> Quality-controlled output with human oversight</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" /> Cost-efficient alternative to traditional in-house staffing</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Service 5 */}
          <div className="reveal-up w-full flex flex-col md:flex-row border border-[#1A6FA8]/15 rounded-[2rem] bg-white group hover:bg-[#E0F4FC] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(26,111,168,0.12)] border-l-[6px] border-l-[#29A8E0] overflow-hidden">
            
            <div className="w-full md:w-1/2 p-8 lg:p-14 relative z-10 flex flex-col justify-center transition-transform duration-700 group-hover:translate-x-2">
              <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-4 transition-colors group-hover:text-[#29A8E0]">Service 05</span>
              <h3 className="text-3xl lg:text-4xl font-bold text-ink font-heading mb-4 tracking-tight">Revenue Cycle Management (RCM)</h3>
              <p className="font-semibold text-slate-800 text-[17px] mb-3">End-to-end AI-powered RCM for healthcare organisations.</p>
              <p className="text-slate-600 text-[15.5px] leading-relaxed max-w-xl">We deliver comprehensive, AI-powered revenue cycle management covering patient access, coding, billing, collections, and reporting, specifically built for US-based healthcare organisations looking to reduce errors, speed up reimbursements, and improve cash-flow visibility.</p>
            </div>
            
            <div className="w-full md:w-1/2 p-8 lg:p-14 bg-[#29A8E0] md:rounded-l-[3rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <ul className="grid xl:grid-cols-2 gap-4 text-white/95 text-[14.5px] font-medium">
                  <li className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm"><Check className="w-4 h-4 text-white shrink-0" /> Patient access & eligibility</li>
                  <li className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm"><Check className="w-4 h-4 text-white shrink-0" /> AI-assisted coding & billing</li>
                  <li className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm"><Check className="w-4 h-4 text-white shrink-0" /> Claims submission & denials</li>
                  <li className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm"><Check className="w-4 h-4 text-white shrink-0" /> Collections & payment</li>
                  <li className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm"><Check className="w-4 h-4 text-white shrink-0" /> Reporting & compliance</li>
                  <li className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl border border-white/10 backdrop-blur-sm"><Check className="w-4 h-4 text-white shrink-0" /> Offshore medical coding</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>
"""

new_content = content[:start_idx] + new_section + "\n      " + content[end_idx:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)
