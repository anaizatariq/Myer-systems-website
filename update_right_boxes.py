import sys

file_path = r"d:\myer-systems-website\app\services\page.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Change all bg-[#E0F4FC] to bg-[#8FD6F5] which is the Light Sky Blue color from palette matching screenshot
content = content.replace('bg-[#E0F4FC]', 'bg-[#8FD6F5]')

# For service 1:
s1_old = """<ul className="space-y-4 text-slate-700 text-[16px] font-medium">
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Custom AI agents trained on your specific business processes</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Workflow automation from trigger to completion</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Intelligent document processing and data extraction</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Predictive analytics and operational insights</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Full audit logging and decision traceability</li>
                </ul>"""
s1_new = """<div>
                  <h4 className="text-[22px] font-bold text-ink font-heading mb-3 tracking-tight">Built for Accountability</h4>
                  <p className="text-[17px] text-slate-800 leading-[1.7] font-sans">Every AI system we build includes full audit trails, explainable outputs, and human-in-the-loop checkpoints. You stay in control of every automated decision.</p>
                </div>"""
content = content.replace(s1_old, s1_new)

# For service 2:
s2_old = """<div>
                  <strong className="text-[#1A6FA8] font-bold block mb-2 font-ui uppercase tracking-[0.15em] text-[11px]">Flagship Product</strong>
                  <strong className="text-ink font-bold text-[18px] block mb-2 font-heading">MedSynthea</strong>
                  <p className="text-[16px] text-slate-700 leading-relaxed font-sans">A healthcare-focused AI platform designed to synthesise medical data and streamline both clinical and administrative workflows for healthcare providers.</p>
                </div>"""
s2_new = """<div>
                  <h4 className="text-[22px] font-bold text-ink font-heading mb-3 tracking-tight">Flagship Product: MedSynthea</h4>
                  <p className="text-[17px] text-slate-800 leading-[1.7] font-sans">A healthcare-focused AI platform designed to synthesise medical data and streamline both clinical and administrative workflows for healthcare providers.</p>
                </div>"""
content = content.replace(s2_old, s2_new)

# For service 3:
s3_old = """<ul className="space-y-4 text-slate-700 text-[16px] text-[16px] font-medium">
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Full operational audit and bottleneck analysis</li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Workflow redesign optimised for AI automation</li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Elimination of redundant steps and approvals</li>
                  <li className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Rebuilding operations for data-driven performance</li>
                </ul>"""
s3_new = """<div>
                  <h4 className="text-[22px] font-bold text-ink font-heading mb-3 tracking-tight">Data-Driven Optimization</h4>
                  <p className="text-[17px] text-slate-800 leading-[1.7] font-sans">We don't just automate blindly. We map your entire operational lifecycle, identifying bottlenecks and redundant handoffs, to ensure every AI deployment directly improves your bottom line.</p>
                </div>"""
content = content.replace(s3_old, s3_new)
content = content.replace(s3_old.replace('text-[16px] text-[16px]', 'text-[16px]'), s3_new)


# For service 4:
s4_old = """<ul className="space-y-4 text-slate-700 text-[16px] font-medium">
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Dedicated AI agents paired with skilled human operators</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Flexible scaling, ramp up or down based on demand</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Quality-controlled output with human oversight</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Cost-efficient alternative to traditional in-house staffing</li>
                </ul>"""
s4_new = """<div>
                  <h4 className="text-[22px] font-bold text-ink font-heading mb-3 tracking-tight">The Best of Both Worlds</h4>
                  <p className="text-[17px] text-slate-800 leading-[1.7] font-sans">Dedicated AI agents handle the high-volume, routine tasks, while skilled human operators provide critical oversight and handle complex judgment calls. You get extreme scalability without compromising on quality.</p>
                </div>"""
content = content.replace(s4_old, s4_new)

# For service 5:
s5_old = """<ul className="grid xl:grid-cols-2 gap-4 text-slate-700 text-[15px] font-medium">
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Patient access & eligibility</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> AI-assisted coding & billing</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Claims submission & denials</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Collections & payment</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Reporting & compliance</li>
                  <li className="flex items-start gap-3"><Check className="w-5 h-5 text-[#29A8E0] shrink-0 mt-0.5" /> Offshore medical coding</li>
                </ul>"""
s5_new = """<div>
                  <h4 className="text-[22px] font-bold text-ink font-heading mb-3 tracking-tight">End-to-End Coverage</h4>
                  <p className="text-[17px] text-slate-800 leading-[1.7] font-sans">From patient access and eligibility to coding, claims submission, and final collections, our RCM solutions plug revenue leaks and accelerate your cash flow using intelligent automation.</p>
                </div>"""
content = content.replace(s5_old, s5_new)


with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
