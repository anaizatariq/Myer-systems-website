import os

files = [
    "app/technology/page.tsx",
    "app/industries/page.tsx",
    "app/services/page.tsx",
    "components/site/industries.tsx",
    "app/why-choose-us/page.tsx",
    "components/site/disciplines.tsx",
    "app/how-we-operate/page.tsx"
]

for file in files:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replacements
        content = content.replace('.webp', '.jpg')
        content = content.replace('tech-hero-dark.jpg', 'tech-hero-bg.jpg')
        content = content.replace('myers-mark.jpg', 'myers-mark.png')
        content = content.replace('tech-integration.jpg', 'tech-integration.png')
        content = content.replace('tech-security.jpg', 'tech-security.png')
        content = content.replace('tech-scalability.jpg', 'tech-scalability.png')
        content = content.replace('workflow-automation.jpg', 'workflow-automation.png')
        content = content.replace('process-reengineering.jpg', 'process-reengineering.png')
        content = content.replace('how-it-works-hero-bg.jpg', 'how-it-works-hero-bg.png')
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
