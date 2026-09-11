import os
import glob
import re

def update_eyebrows(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # We want to replace the outer div classes of the eyebrow to be the solid blue one.
    # The old ones have border-slate-200 bg-white or border-[#29A8E0]/20 bg-white
    # Let's use regex to find eyebrows. They usually start with:
    # <div className="inline-flex w-fit items-center gap-2 rounded-full ...
    
    # Let's replace the outer div
    content = re.sub(
        r'<div className="inline-flex w-fit items-center gap-2 rounded-full[^>]+bg-white[^>]+px-4 py-1\.5[^>]+>',
        r'<div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-[#29A8E0] px-4 py-1.5 mb-6 shadow-md shadow-[#29A8E0]/20">',
        content
    )
    
    # Replace the inner dot (make it white instead of blue)
    content = re.sub(
        r'<span className="h-1\.5 w-1\.5 rounded-full bg-\[#29A8E0\] animate-pulse" />',
        r'<span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />',
        content
    )
    
    # Replace the text span (make text-white instead of text-[#29A8E0], and font-bold)
    content = re.sub(
        r'<span className="text-\[11px\] font-(normal|bold) uppercase tracking-\[0\.18em\] text-\[#29A8E0\] font-ui">',
        r'<span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white font-ui">',
        content
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for filepath in glob.glob('components/site/*.tsx'):
    update_eyebrows(filepath)
