import os
import re

directories = ['app', 'components']
pattern = re.compile(r'(/images/[^"\'\s]+\.)(jpg|png)')

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = pattern.sub(r'\g<1>webp', content)
    
    # Also replace direct public ones like /tech-hero-dark.jpg
    new_content = re.sub(r'(/tech-hero-dark\.)(jpg|png)', r'\g<1>webp', new_content)
    new_content = re.sub(r'(/how-it-works-hero-bg\.)(jpg|png)', r'\g<1>webp', new_content)
    new_content = re.sub(r'(/tech-cloud-light\.)(jpg|png)', r'\g<1>webp', new_content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for d in directories:
    for root, _, files in os.walk(d):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                process_file(os.path.join(root, file))
