import os

def create_svg(initials, name):
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <rect width="200" height="200" fill="#F0FAFF" />
    <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="sans-serif" font-size="80" font-weight="bold" fill="#1A6FA8">
      {initials}
    </text>
  </svg>"""
    with open(f"public/images/{name}.svg", "w") as f:
        f.write(svg)

create_svg('TA', 'tasbhia-akbar')
create_svg('VF', 'vaneeza-fatima')
create_svg('HM', 'hasnain-muavia')
