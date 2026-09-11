import sys

file_path = r"d:\myer-systems-website\app\services\page.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

start_marker = "{/* ─── INDUSTRIES WE SERVE ────────────────────────────────── */}"
end_marker = "{/* ─── WHO WE WORK WITH ────────────────────────────────────── */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Could not find markers")
    sys.exit(1)

new_industries = """{/* ─── INDUSTRIES WE SERVE ────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F0FAFF]">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-8 space-y-10 lg:space-y-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink font-heading tracking-tight mb-6">Industries We Serve</h2>
            <p className="text-[17px] text-slate-700 font-sans leading-relaxed">
              Myer Systems serves organisations across healthcare and commercial markets. Our AI systems and automation solutions are built around the real workflows, compliance requirements, and operational challenges of each industry.
            </p>
          </div>

          <div className="reveal-up w-full flex flex-col md:flex-row border border-[#1A6FA8]/15 rounded-[2rem] bg-white group hover:bg-[#E0F4FC] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(26,111,168,0.12)] border-l-[6px] border-l-[#29A8E0] overflow-hidden">
            
            {/* Industry 1: Healthcare */}
            <div className="w-full md:w-1/2 p-6 lg:p-14 relative z-10 flex flex-col justify-center transition-transform duration-700 group-hover:translate-x-2 overflow-hidden">
              <Activity className="absolute -right-10 -bottom-10 w-64 h-64 text-[#1A6FA8] opacity-[0.03] rotate-12 transition-transform duration-700 group-hover:scale-110 pointer-events-none" />
              <div className="relative z-10">
                <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-4 transition-colors group-hover:text-[#29A8E0]">Industry 01</span>
                <h3 className="text-3xl lg:text-4xl font-bold text-ink font-heading mb-4 tracking-tight">Healthcare & Life Sciences</h3>
                <p className="text-[17px] text-slate-800 leading-[1.7] font-sans">
                  Healthcare is where Myer Systems has its deepest operational footprint. Through our flagship platform MedSynthea and our RCM services, we help healthcare providers automate clinical and administrative workflows, from patient access to claims management to compliance reporting.
                </p>
              </div>
            </div>
            
            {/* Industry 2: Commercial */}
            <div className="w-full md:w-1/2 p-6 lg:p-14 bg-[#8FD6F5] rounded-b-[2rem] md:rounded-b-none md:rounded-l-[2.5rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#29A8E0 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <Building2 className="absolute -right-10 -bottom-10 w-64 h-64 text-[#1A6FA8] opacity-[0.05] -rotate-12 transition-transform duration-700 group-hover:scale-110 pointer-events-none" />
              <div className="relative z-10">
                <span className="text-[#1A6FA8]/80 font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-4">Industry 02</span>
                <h4 className="text-3xl lg:text-4xl font-bold text-ink font-heading mb-4 tracking-tight">Commercial & Enterprise</h4>
                <p className="text-[17px] text-slate-800 leading-[1.7] font-sans">
                  Beyond healthcare, we work with commercial organisations that are weighed down by manual, repetitive processes. Our enterprise AI solutions and business reengineering services help these organisations automate workflows, process documents intelligently, and build data-driven operations.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      """

new_content = content[:start_idx] + new_industries + content[end_idx:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)
