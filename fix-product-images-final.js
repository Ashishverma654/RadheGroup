const fs = require('fs');

const file = 'C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app\\\\products\\\\page.tsx';
let content = fs.readFileSync(file, 'utf-8');

const replacementMap = {
  'CAD Drawing': '/images/products/gate-valve.png',
  'Globe Valve CAD': '/images/products/globe-valve.png',
  'Pressure Testing Background': '/images/stitch/forging-press.jpg',
  'Technical Blueprint': '/images/products/bearing-housing.png',
  'Quality Assurance 1': '/images/stitch/technocast.jpg',
  'Quality Assurance 2': '/images/stitch/infra-cnc.jpg'
};

for (const [alt, src] of Object.entries(replacementMap)) {
  const regex = new RegExp(`alt="${alt}"\\s+className="([^"]+)"\\s+src="[^"]+"`, 'g');
  content = content.replace(regex, `alt="${alt}" className="$1" src="${src}"`);
}

fs.writeFileSync(file, content);
console.log('Product images updated with correct visuals!');
