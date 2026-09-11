import sys

file_path = r"d:\myer-systems-website\app\services\page.tsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Add Lucide imports
content = content.replace("Check\n}", "Check,\n  Activity,\n  Building2\n}")

# Define the old Industries section
start_marker = "{/* ─── INDUSTRIES WE SERVE ────────────────────────────────── */}"
end_marker = "{/* ─── WHO WE WORK WITH ────────────────────────────────────── */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Could not find markers")
    sys.exit(1)

new_industries = """{/* ─── INDUSTRIES WE SERVE ────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FAFAFA]">
        <div className="mx-auto max-w-[85rem] px-6 lg:px-8 space-y-10 lg:space-y-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink font-heading tracking-tight mb-6">Industries We Serve</h2>
            <p className="text-[17px] text-slate-700 font-sans leading-relaxed">
              Myer Systems serves organisations across healthcare and commercial markets. Our AI systems and automation solutions are built around the real workflows, compliance requirements, and operational challenges of each industry.
            </p>
          </div>

          {/* Industry 1 */}
          <div className="reveal-up w-full flex flex-col md:flex-row border border-[#1A6FA8]/15 rounded-[2rem] bg-white group hover:bg-[#E0F4FC] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(26,111,168,0.12)] border-l-[6px] border-l-[#29A8E0] overflow-hidden">
            
            <div className="w-full md:w-1/2 p-6 lg:p-8 relative z-10 flex flex-col justify-center transition-transform duration-700 group-hover:translate-x-2">
              <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-4 transition-colors group-hover:text-[#29A8E0]">Industry 01</span>
              <h3 className="text-3xl lg:text-4xl font-bold text-ink font-heading mb-4 tracking-tight">Healthcare & Life Sciences</h3>
              <p className="font-semibold text-slate-800 text-[17px] mb-3">Clinical and administrative automation for providers.</p>
              <p className="text-slate-600 text-[16px] leading-relaxed max-w-xl">Healthcare is where Myer Systems has its deepest operational footprint. Through our flagship platform MedSynthea and our RCM services, we help healthcare providers automate clinical and administrative workflows, from patient access to claims management to compliance reporting.</p>
            </div>
            
            <div className="w-full md:w-1/2 p-6 lg:p-8 bg-[#8FD6F5] rounded-b-[2rem] md:rounded-b-none md:rounded-l-[2.5rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center items-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden min-h-[300px]">
              <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#29A8E0 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10 p-8 bg-white/90 backdrop-blur-md rounded-[2rem] shadow-[0_20px_40px_rgba(26,111,168,0.1)] transform transition-all duration-700 group-hover:scale-105 border border-[#1A6FA8]/10 group-hover:bg-white flex flex-col items-center justify-center">
                <Activity className="w-16 h-16 text-[#1A6FA8] mb-4 stroke-[1.5]" />
                <span className="font-bold text-[#1A6FA8] font-ui tracking-wider uppercase text-sm">MedSynthea</span>
              </div>
            </div>

          </div>

          {/* Industry 2 */}
          <div className="reveal-up w-full flex flex-col md:flex-row border border-[#1A6FA8]/15 rounded-[2rem] bg-white group hover:bg-[#E0F4FC] transition-all duration-700 hover:shadow-[0_20px_40px_rgba(26,111,168,0.12)] border-l-[6px] border-l-[#29A8E0] overflow-hidden">
            
            <div className="w-full md:w-1/2 p-6 lg:p-8 relative z-10 flex flex-col justify-center transition-transform duration-700 group-hover:translate-x-2">
              <span className="text-[#1A6FA8] font-bold text-[11px] tracking-[0.2em] uppercase font-ui block mb-4 transition-colors group-hover:text-[#29A8E0]">Industry 02</span>
              <h3 className="text-3xl lg:text-4xl font-bold text-ink font-heading mb-4 tracking-tight">Commercial & Enterprise</h3>
              <p className="font-semibold text-slate-800 text-[17px] mb-3">Scale operations without scaling headcount.</p>
              <p className="text-slate-600 text-[16px] leading-relaxed max-w-xl">Beyond healthcare, we work with commercial organisations that are weighed down by manual, repetitive processes. Our enterprise AI solutions and business reengineering services help these organisations automate workflows, process documents intelligently, and build data-driven operations.</p>
            </div>
            
            <div className="w-full md:w-1/2 p-6 lg:p-8 bg-[#8FD6F5] rounded-b-[2rem] md:rounded-b-none md:rounded-l-[2.5rem] relative z-10 transition-transform duration-700 group-hover:-translate-x-2 flex flex-col justify-center items-center shadow-[-10px_0_30px_rgba(41,168,224,0.15)] overflow-hidden min-h-[300px]">
              <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#29A8E0 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10 p-8 bg-white/90 backdrop-blur-md rounded-[2rem] shadow-[0_20px_40px_rgba(26,111,168,0.1)] transform transition-all duration-700 group-hover:scale-105 border border-[#1A6FA8]/10 group-hover:bg-white flex flex-col items-center justify-center">
                <Building2 className="w-16 h-16 text-[#1A6FA8] mb-4 stroke-[1.5]" />
                <span className="font-bold text-[#1A6FA8] font-ui tracking-wider uppercase text-sm">Enterprise AI</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      """

new_content = content[:start_idx] + new_industries + content[end_idx:]

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)
