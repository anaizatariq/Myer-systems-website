const fs = require('fs');

const createSvg = (initials, name) => {
  const svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <rect width="200" height="200" fill="#F0FAFF" />
    <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="sans-serif" font-size="80" font-weight="bold" fill="#1A6FA8">
      
    </text>
  </svg>;
  fs.writeFileSync('public/images/' + name + '.svg', svg);
};

createSvg('TA', 'tasbhia-akbar');
createSvg('VF', 'vaneeza-fatima');
createSvg('HM', 'hasnain-muavia');
