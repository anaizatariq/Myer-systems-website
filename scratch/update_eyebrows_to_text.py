import os
import re

COMPONENTS_DIR = "d:/myer-systems-website/components/site"

pattern = re.compile(
    r'<div className="inline-flex [^>]*?items-center gap-2 rounded-full[^>]*?">\s*'
    r'<span className="h-1\.5 w-1\.5 [^>]*?rounded-full[^>]*?" />\s*'
    r'<span className="[^>]*?uppercase[^>]*?font-ui[^>]*?">\s*'
    r'(.*?)\s*'
    r'</span>\s*'
    r'</div>',
    re.DOTALL
)

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    def replacer(match):
        inner_text = match.group(1).strip()
        return f"""<div className="flex items-center gap-2">
  <span className="h-1.5 w-1.5 rounded-full bg-[#1A6FA8] animate-pulse" />
  <span className="text-[11px] uppercase tracking-[0.18em] text-[#1A6FA8] font-ui font-bold">
    {inner_text}
  </span>
</div>"""

    new_content, count = pattern.subn(replacer, content)
    
    if count > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {count} eyebrows in {os.path.basename(filepath)}")

for filename in os.listdir(COMPONENTS_DIR):
    if filename.endswith(".tsx"):
        process_file(os.path.join(COMPONENTS_DIR, filename))

print("Done!")
