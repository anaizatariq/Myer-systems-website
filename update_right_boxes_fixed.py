import sys

file_path = r"d:\myer-systems-website\app\services\page.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace Service 1 Right Box
s1_old = """<div className="w-full md:w-1/2 p-6 lg:p-8 bg-[#F0FAFF] rounded-b-[2rem] md:rounded-b-none md:rounded-l-[2.5rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#29A8E0 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <ul className="space-y-4 text-slate-700 text-[16px] text-[16px] font-medium">
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Custom AI agents trained on your specific business processes</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Workflow automation from trigger to completion</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Intelligent document processing and data extraction</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Predictive analytics and operational insights</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Full audit logging and decision traceability</li>
                </ul>
              </div>
            </div>"""
s1_new = """<div className="w-full md:w-1/2 p-6 lg:p-8 bg-[#8FD6F5] rounded-b-[2rem] md:rounded-b-none md:rounded-l-[2.5rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#29A8E0 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <div>
                  <h4 className="text-[22px] font-bold text-ink font-heading mb-3 tracking-tight">Built for Accountability</h4>
                  <p className="text-[17px] text-slate-800 leading-[1.7] font-sans">Every AI system we build includes full audit trails, explainable outputs, and human-in-the-loop checkpoints. You stay in control of every automated decision.</p>
                </div>
              </div>
            </div>"""
content = content.replace(s1_old, s1_new)

# Replace Service 3 Right Box
s3_old = """<div className="w-full md:w-1/2 p-6 lg:p-8 bg-[#F0FAFF] rounded-b-[2rem] md:rounded-b-none md:rounded-l-[2.5rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#29A8E0 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <ul className="space-y-4 text-slate-700 text-[16px] text-[16px] font-medium">
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Full operational audit and bottleneck analysis</li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Workflow redesign optimised for AI automation</li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Elimination of redundant steps and approvals</li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Rebuilding operations for data-driven performance</li>
                </ul>
              </div>
            </div>"""
s3_new = """<div className="w-full md:w-1/2 p-6 lg:p-8 bg-[#8FD6F5] rounded-b-[2rem] md:rounded-b-none md:rounded-l-[2.5rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#29A8E0 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <div>
                  <h4 className="text-[22px] font-bold text-ink font-heading mb-3 tracking-tight">Data-Driven Optimization</h4>
                  <p className="text-[17px] text-slate-800 leading-[1.7] font-sans">We don't just automate blindly. We map your entire operational lifecycle, identifying bottlenecks and redundant handoffs, to ensure every AI deployment directly improves your bottom line.</p>
                </div>
              </div>
            </div>"""
content = content.replace(s3_old, s3_new)

# Replace Service 4 Right Box
s4_old = """<div className="w-full md:w-1/2 p-6 lg:p-8 bg-[#F0FAFF] rounded-b-[2rem] md:rounded-b-none md:rounded-l-[2.5rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#29A8E0 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <ul className="space-y-4 text-slate-700 text-[16px] text-[16px] font-medium">
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Dedicated AI agents paired with skilled human operators</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Flexible scaling, ramp up or down based on demand</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Quality-controlled output with human oversight</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Cost-efficient alternative to traditional in-house staffing</li>
                </ul>
              </div>
            </div>"""
s4_new = """<div className="w-full md:w-1/2 p-6 lg:p-8 bg-[#8FD6F5] rounded-b-[2rem] md:rounded-b-none md:rounded-l-[2.5rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#29A8E0 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <div>
                  <h4 className="text-[22px] font-bold text-ink font-heading mb-3 tracking-tight">The Best of Both Worlds</h4>
                  <p className="text-[17px] text-slate-800 leading-[1.7] font-sans">Dedicated AI agents handle the high-volume, routine tasks, while skilled human operators provide critical oversight and handle complex judgment calls. You get extreme scalability without compromising on quality.</p>
                </div>
              </div>
            </div>"""
content = content.replace(s4_old, s4_new)

# Replace Service 5 Right Box
s5_old = """<div className="w-full md:w-1/2 p-6 lg:p-8 bg-[#F0FAFF] rounded-b-[2rem] md:rounded-b-none md:rounded-l-[2.5rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#29A8E0 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <ul className="grid sm:grid-cols-2 gap-3.5 text-slate-700 text-[15px]">
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Patient access & eligibility</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> AI-assisted coding & billing</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Claims submission & denials</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Collections & payment posting</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Reporting & compliance</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Offshore medical billing/coding</li>
                </ul>
              </div>
            </div>"""
s5_new = """<div className="w-full md:w-1/2 p-6 lg:p-8 bg-[#8FD6F5] rounded-b-[2rem] md:rounded-b-none md:rounded-l-[2.5rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#29A8E0 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10">
                <div>
                  <h4 className="text-[22px] font-bold text-ink font-heading mb-3 tracking-tight">End-to-End Coverage</h4>
                  <p className="text-[17px] text-slate-800 leading-[1.7] font-sans">From patient access and eligibility to coding, claims submission, and final collections — our RCM solutions plug revenue leaks and accelerate your cash flow using intelligent automation.</p>
                </div>
              </div>
            </div>"""
content = content.replace(s5_old, s5_new)

# Also ensure bg-[#E0F4FC] is applied to Service 1 if the replace failed earlier, wait I'm setting it to bg-[#8FD6F5] which is correct.

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
