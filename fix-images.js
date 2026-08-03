const fs = require('fs');
const path = require('path');

const filesToFix = [
  'C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app\\\\page.tsx',
  'C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app\\\\products\\\\page.tsx'
];

const fallbackImage = '/images/stitch/forging-press.jpg';

const imageMap = {
  'Facility': '/images/products/hero-slider-1.png',
  'Precision': '/images/products/hero-slider-2.png',
  'Logistics': '/images/products/hero-slider-3.png',
  'India': 'https://flagcdn.com/w160/in.png',
  'USA': 'https://flagcdn.com/w160/us.png',
  'Germany': 'https://flagcdn.com/w160/de.png',
  'Saudi Arabia': 'https://flagcdn.com/w160/sa.png',
  'France': 'https://flagcdn.com/w160/fr.png',
  'UAE': 'https://flagcdn.com/w160/ae.png',
  'Technocast': '/images/stitch/technocast.jpg',
  'Valves': '/images/stitch/valves.jpg',
  'Foundry': '/images/stitch/foundry-ladle.jpg',
  'Alloys': '/images/products/hero-alloys.png',
  'Industrial Motion': '/images/stitch/infra-cnc.jpg',
  'Process': '/images/stitch/infra-cnc.jpg',
  'Valve Exploded': '/images/stitch/valves.jpg',
  'Industrial Casting': '/images/stitch/hero-port.png',
  // Product Page specifics
  'CAD Blueprint': '/images/products/bearing-housing.png',
  'Technical Spec': '/images/products/casting-valve-body.png',
  'Testing': '/images/products/check-valve.png',
  'Engineering': '/images/products/gear-shaft.png'
};

filesToFix.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf-8');
  
  // Replace <img alt="XYZ" src="https://lh3..." />
  content = content.replace(/<img\s+alt="([^"]+)"[^>]+src="https:\/\/lh3\.googleusercontent\.com[^"]+"[^>]*>/gi, (match, altText) => {
    const localImg = imageMap[altText] || fallbackImage;
    return match.replace(/src="https:\/\/lh3\.googleusercontent\.com[^"]+"/, `src="${localImg}"`);
  });

  // There is also a <div ... style={{backgroundImage: "url('https://lh3...')"}}> if any, though the HTML used img mostly.
  content = content.replace(/src="https:\/\/lh3\.googleusercontent\.com[^"]+"/gi, `src="${fallbackImage}"`);

  fs.writeFileSync(file, content);
  console.log('Fixed images in', path.basename(file));
});
