import os
import glob
import re

def update_fonts(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. H1 (Hero Title) -> Sora Bold (font-heading font-bold)
    # Match <h1 className="..."> and replace font-extrabold/font-semibold/font-sans with font-heading font-bold
    def h1_repl(m):
        cls = m.group(1)
        cls = re.sub(r'\bfont-(sans|serif|ui|quote|light|normal|medium|semibold|extrabold|black)\b', '', cls)
        cls = cls.replace('  ', ' ').strip()
        if 'font-heading' not in cls:
            cls += ' font-heading'
        if 'font-bold' not in cls:
            cls += ' font-bold'
        return f'<h1 className="{cls}">'

    content = re.sub(r'<h1 className="([^"]+)">', h1_repl, content)

    # 2. H2 (Section Title) -> Inter SemiBold (font-sans font-semibold)
    def h2_repl(m):
        cls = m.group(1)
        cls = re.sub(r'\bfont-(heading|serif|ui|quote|light|normal|medium|bold|extrabold|black)\b', '', cls)
        cls = cls.replace('  ', ' ').strip()
        if 'font-sans' not in cls:
            cls += ' font-sans'
        if 'font-semibold' not in cls:
            cls += ' font-semibold'
        return f'<h2 className="{cls}">'

    content = re.sub(r'<h2 className="([^"]+)">', h2_repl, content)

    # 3. H3 (Sub-heading) -> Inter Medium (font-sans font-medium)
    def h3_repl(m):
        cls = m.group(1)
        cls = re.sub(r'\bfont-(heading|serif|ui|quote|light|normal|semibold|bold|extrabold|black)\b', '', cls)
        cls = cls.replace('  ', ' ').strip()
        if 'font-sans' not in cls:
            cls += ' font-sans'
        if 'font-medium' not in cls:
            cls += ' font-medium'
        return f'<h3 className="{cls}">'

    content = re.sub(r'<h3 className="([^"]+)">', h3_repl, content)

    # 4. Eyebrow UI Labels -> DM Sans (font-ui font-normal)
    # The eyebrow text is inside <span className="... tracking-[0.18em] ...">
    def eyebrow_repl(m):
        cls = m.group(1)
        cls = re.sub(r'\bfont-(sans|heading|serif|quote|light|medium|semibold|bold|extrabold|black)\b', '', cls)
        cls = cls.replace('  ', ' ').strip()
        if 'font-ui' not in cls:
            cls += ' font-ui'
        if 'font-normal' not in cls:
            cls += ' font-normal'
        return f'<span className="{cls}">'

    content = re.sub(r'<span className="([^"]+tracking-\[0\.18em\][^"]+)">', eyebrow_repl, content)

    # 5. Taglines (Lora Italic)
    # In why-choose-us, I used italic font-serif. Let's make all italic text use font-quote
    def italic_repl(m):
        cls = m.group(1)
        cls = re.sub(r'\bfont-(sans|heading|ui|serif|normal|medium|semibold|bold|extrabold)\b', '', cls)
        cls = cls.replace('  ', ' ').strip()
        if 'font-quote' not in cls:
            cls += ' font-quote'
        return f'className="{cls}"'

    # Only replace className if it has italic and is not a background or something else.
    # We will look for className="... italic ..."
    content = re.sub(r'className="([^"]*\bitalic\b[^"]*)"', italic_repl, content)

    # 6. Body Text -> Inter Regular (font-sans font-normal)
    # Find all <p> tags that are not italic (which means they are regular body text)
    def p_repl(m):
        cls = m.group(1)
        if 'italic' in cls:
            return m.group(0) # handled by italic_repl
        cls = re.sub(r'\bfont-(heading|ui|serif|quote|light|medium|semibold|bold|extrabold|black)\b', '', cls)
        cls = cls.replace('  ', ' ').strip()
        if 'font-sans' not in cls:
            cls += ' font-sans'
        if 'font-normal' not in cls:
            cls += ' font-normal'
        return f'<p className="{cls}">'

    content = re.sub(r'<p className="([^"]+)">', p_repl, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for filepath in glob.glob('components/site/*.tsx'):
    update_fonts(filepath)
