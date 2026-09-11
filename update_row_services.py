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

new_section = """{/* ─── 5 SERVICE PILLARS (HORIZONTAL ROWS) ─────────────────────── */}
      <section className="pb-20 lg:pb-28 pt-4 bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-8">
          
          {/* Service 1 */}
          <div className="w-full flex flex-col md:flex-row border border-[#1A6FA8]/10 rounded-2xl overflow-hidden bg-white shadow-sm">
            <div className="w-full md:w-1/2 p-8 lg:p-12">
              <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.15em] uppercase font-ui block mb-4">Service 01</span>
              <h3 className="text-3xl font-bold text-ink font-heading mb-4">Enterprise-Grade AI Solutions</h3>
              <p className="font-semibold text-slate-800 text-[16px] mb-3">Advanced AI systems engineered for accountability, scalability, and control.</p>
              <p className="text-slate-600 text-[15px] leading-relaxed">We design and build custom AI systems for enterprise environments, systems that automate repetitive workflows, process unstructured data, and deliver actionable insights at scale.</p>
            </div>
            <div className="w-full md:w-1/2 p-8 lg:p-12 bg-slate-50 border-t md:border-t-0 md:border-l border-[#1A6FA8]/10 flex flex-col justify-center">
              <ul className="space-y-3.5 text-slate-700 text-[15px]">
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Custom AI agents trained on your specific business processes</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Workflow automation from trigger to completion</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Intelligent document processing and data extraction</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Predictive analytics and operational insights</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Full audit logging and decision traceability</li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="w-full flex flex-col md:flex-row border border-[#1A6FA8]/10 rounded-2xl overflow-hidden bg-white shadow-sm">
            <div className="w-full md:w-1/2 p-8 lg:p-12">
              <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.15em] uppercase font-ui block mb-4">Service 02</span>
              <h3 className="text-3xl font-bold text-ink font-heading mb-4">Industry SaaS</h3>
              <p className="font-semibold text-slate-800 text-[16px] mb-3">Scalable, vertically-focused software-as-a-service products.</p>
              <p className="text-slate-600 text-[15px] leading-relaxed">We build SaaS products tailored to specific industries, not generic tools that require months of customisation. Built around real operational workflows and designed to scale.</p>
            </div>
            <div className="w-full md:w-1/2 p-8 lg:p-12 bg-slate-50 border-t md:border-t-0 md:border-l border-[#1A6FA8]/10 flex flex-col justify-center">
              <div className="bg-white border border-[#1A6FA8]/10 rounded-xl p-5 shadow-sm">
                <strong className="text-[#1A6FA8] font-bold block mb-1 font-ui uppercase tracking-wider text-[11px]">Flagship Product</strong>
                <strong className="text-ink font-bold text-[15px] block mb-2">MedSynthea (medsynthea.com)</strong>
                <p className="text-[14px] text-slate-700 leading-relaxed">A healthcare-focused AI platform designed to synthesise medical data and streamline both clinical and administrative workflows for healthcare providers.</p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="w-full flex flex-col md:flex-row border border-[#1A6FA8]/10 rounded-2xl overflow-hidden bg-white shadow-sm">
            <div className="w-full md:w-1/2 p-8 lg:p-12">
              <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.15em] uppercase font-ui block mb-4">Service 03</span>
              <h3 className="text-3xl font-bold text-ink font-heading mb-4">Business Reengineering</h3>
              <p className="font-semibold text-slate-800 text-[16px] mb-3">Eliminating workflow inefficiencies and rebuilding smarter processes.</p>
              <p className="text-slate-600 text-[15px] leading-relaxed">Before we automate anything, we audit your operations to find the real bottlenecks, the redundant steps, and manual handoffs that slow your business down.</p>
            </div>
            <div className="w-full md:w-1/2 p-8 lg:p-12 bg-slate-50 border-t md:border-t-0 md:border-l border-[#1A6FA8]/10 flex flex-col justify-center">
              <ul className="space-y-3.5 text-slate-700 text-[15px]">
                <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" /> Full operational audit and bottleneck analysis</li>
                <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" /> Workflow redesign optimised for AI automation</li>
                <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" /> Elimination of redundant steps and approvals</li>
                <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" /> Rebuilding operations for data-driven performance</li>
              </ul>
            </div>
          </div>

          {/* Service 4 */}
          <div className="w-full flex flex-col md:flex-row border border-[#1A6FA8]/10 rounded-2xl overflow-hidden bg-white shadow-sm">
            <div className="w-full md:w-1/2 p-8 lg:p-12">
              <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.15em] uppercase font-ui block mb-4">Service 04</span>
              <h3 className="text-3xl font-bold text-ink font-heading mb-4">Resource Augmentation</h3>
              <p className="font-semibold text-slate-800 text-[16px] mb-3">Combining AI agents with skilled human expertise to scale operations.</p>
              <p className="text-slate-600 text-[15px] leading-relaxed">We pair AI agents with trained human operators to create hybrid teams that handle your workload without the overhead of traditional hiring. AI handles the volume and routine tasks. Humans handle the judgment calls. You get both, without compromising quality.</p>
            </div>
            <div className="w-full md:w-1/2 p-8 lg:p-12 bg-slate-50 border-t md:border-t-0 md:border-l border-[#1A6FA8]/10 flex flex-col justify-center">
              <ul className="space-y-3.5 text-slate-700 text-[15px]">
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Dedicated AI agents paired with skilled human operators</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Flexible scaling, ramp up or down based on demand</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Quality-controlled output with human oversight</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Cost-efficient alternative to traditional in-house staffing</li>
              </ul>
            </div>
          </div>

          {/* Service 5 */}
          <div className="w-full flex flex-col md:flex-row border border-[#1A6FA8]/10 rounded-2xl overflow-hidden bg-white shadow-sm">
            <div className="w-full md:w-1/2 p-8 lg:p-12">
              <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.15em] uppercase font-ui block mb-4">Service 05</span>
              <h3 className="text-3xl font-bold text-ink font-heading mb-4">Revenue Cycle Management (RCM)</h3>
              <p className="font-semibold text-slate-800 text-[16px] mb-3">End-to-end AI-powered RCM for healthcare organisations.</p>
              <p className="text-slate-600 text-[15px] leading-relaxed">We deliver comprehensive, AI-powered revenue cycle management covering patient access, coding, billing, collections, and reporting, specifically built for US-based healthcare organisations looking to reduce errors, speed up reimbursements, and improve cash-flow visibility.</p>
            </div>
            <div className="w-full md:w-1/2 p-8 lg:p-12 bg-slate-50 border-t md:border-t-0 md:border-l border-[#1A6FA8]/10 flex flex-col justify-center">
              <ul className="grid sm:grid-cols-2 gap-3.5 text-slate-700 text-[14px]">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" /> Patient access & eligibility</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" /> AI-assisted coding & billing</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" /> Claims submission & denials</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" /> Collections & payment posting</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" /> Reporting & compliance</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-[#29A8E0] shrink-0 mt-0.5" /> Offshore medical billing/coding</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
"""

new_content = content[:start_idx] + new_section + "\n      " + content[end_idx:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)
