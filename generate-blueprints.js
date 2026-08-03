const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'images', 'products');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Helper to wrap SVG in blueprint style
function wrapSVG(title, innerSVG) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
    <!-- Blueprint background -->
    <rect width="800" height="600" fill="#0b2240" />
    <defs>
      <!-- Grid pattern -->
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#163a66" stroke-width="1" />
        <path d="M 200 0 L 0 0 0 200" fill="none" stroke="#22558f" stroke-width="1.5" />
      </pattern>
    </defs>
    <rect width="800" height="600" fill="url(#grid)" />
    
    <!-- Outer technical frame -->
    <rect x="20" y="20" width="760" height="560" fill="none" stroke="#3377cc" stroke-width="2" stroke-dasharray="8 4" opacity="0.8" />
    <rect x="25" y="25" width="750" height="550" fill="none" stroke="#3377cc" stroke-width="1" opacity="0.5" />
    
    <!-- Title Block / Legend -->
    <g transform="translate(40, 520)" opacity="0.9">
      <rect width="720" height="45" fill="#0d2c54" stroke="#4488dd" stroke-width="1.5" />
      <line x1="240" y1="0" x2="240" y2="45" stroke="#4488dd" stroke-width="1.5" />
      <line x1="480" y1="0" x2="480" y2="45" stroke="#4488dd" stroke-width="1.5" />
      
      <text x="15" y="28" fill="#88ccff" font-family="monospace" font-size="14" font-weight="bold">RADHE GROUP TECHNICAL PLOT</text>
      <text x="255" y="28" fill="#ffffff" font-family="monospace" font-size="15" font-weight="bold">${title.toUpperCase()}</text>
      <text x="495" y="28" fill="#88ccff" font-family="monospace" font-size="12">SCALE: N.T.S. | DWG NO: RG-${Math.floor(1000 + Math.random()*9000)}</text>
    </g>
    
    <!-- Core CAD Drawing -->
    <g stroke="#66aaff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      ${innerSVG}
    </g>
  </svg>`;
}

const drawings = {
  'gate-valve': wrapSVG('Gate Valve - Bolted Bonnet', `
    <!-- Flanges -->
    <rect x="180" y="220" width="30" height="200" rx="4" stroke="#ffffff" stroke-width="3" />
    <rect x="590" y="220" width="30" height="200" rx="4" stroke="#ffffff" stroke-width="3" />
    
    <!-- Pipe body -->
    <path d="M 210,250 L 590,250 L 590,390 L 210,390 Z" />
    <path d="M 210,250 Q 400,220 590,250" stroke-dasharray="5 5" opacity="0.6" />
    <path d="M 210,390 Q 400,420 590,390" stroke-dasharray="5 5" opacity="0.6" />
    
    <!-- Valve Bonnet / Neck -->
    <path d="M 320,250 L 320,130 L 480,130 L 480,250 Z" />
    <rect x="300" y="110" width="200" height="20" rx="2" stroke="#ffffff" stroke-width="2.5" />
    
    <!-- Yoke & Stem -->
    <path d="M 350,110 L 370,30 L 430,30 L 450,110" />
    <line x1="400" y1="180" x2="400" y2="30" stroke="#ffaa66" stroke-width="4" />
    
    <!-- Handwheel -->
    <ellipse cx="400" cy="20" rx="90" ry="15" stroke="#ff6666" stroke-width="4" />
    <line x1="310" y1="20" x2="490" y2="20" />
    <line x1="400" y1="5" x2="400" y2="35" />
    
    <!-- Internal Wedge (dashed) -->
    <polygon points="360,260 440,260 420,380 380,380" stroke-dasharray="6 4" opacity="0.7" />
    
    <!-- Dimension lines -->
    <g stroke="#88ccff" stroke-width="1" opacity="0.5">
      <line x1="180" y1="440" x2="620" y2="440" />
      <line x1="180" y1="430" x2="180" y2="450" />
      <line x1="620" y1="430" x2="620" y2="450" />
      <text x="375" y="465" fill="#88ccff" font-family="monospace" font-size="12">FACE TO FACE (L)</text>
    </g>
  `),
  'pressure-seal-valve': wrapSVG('Gate Valve - Pressure Seal', `
    <!-- Main Body -->
    <path d="M 230,280 L 230,380 L 570,380 L 570,280 Z" />
    <!-- Pressure seal neck -->
    <path d="M 330,280 L 350,140 L 450,140 L 470,280 Z" />
    <rect x="340" y="125" width="120" height="15" fill="#0d2c54" stroke="#ffffff" />
    
    <!-- Stem and Yoke -->
    <line x1="400" y1="260" x2="400" y2="40" stroke="#ffaa66" stroke-width="4" />
    <path d="M 370,125 L 380,45 L 420,45 L 430,125" />
    
    <!-- Heavy Gear / Handwheel -->
    <ellipse cx="400" cy="35" rx="80" ry="12" stroke="#ff6666" stroke-width="4" />
    
    <!-- Weld ends -->
    <path d="M 230,280 L 190,290 L 190,370 L 230,380" />
    <path d="M 570,280 L 610,290 L 610,370 L 570,380" />
  `),
  'globe-valve': wrapSVG('Globe Valve - Flow Control', `
    <!-- Flanges -->
    <rect x="180" y="240" width="30" height="180" rx="4" stroke="#ffffff" stroke-width="3" />
    <rect x="590" y="240" width="30" height="180" rx="4" stroke="#ffffff" stroke-width="3" />
    
    <!-- S-curve internal port -->
    <path d="M 210,330 L 350,330 C 370,330 380,310 380,290 L 380,260 C 380,240 400,240 420,240 L 590,240" stroke-width="3" />
    <path d="M 210,260 L 310,260 C 330,260 340,280 340,300 L 340,330 C 340,350 360,350 380,350 L 590,350" stroke-width="3" />
    
    <!-- Disc & Stem -->
    <line x1="400" y1="260" x2="400" y2="60" stroke="#ffaa66" stroke-width="4" />
    <rect x="360" y="260" width="80" height="15" fill="#ffaa66" />
    
    <!-- Bonnet -->
    <path d="M 330,240 L 330,120 L 470,120 L 470,240 Z" />
    <ellipse cx="400" cy="50" rx="75" ry="14" stroke="#ff6666" stroke-width="4" />
  `),
  'check-valve': wrapSVG('Swing Check Valve - Non Return', `
    <!-- Body -->
    <rect x="180" y="240" width="30" height="180" rx="4" stroke="#ffffff" stroke-width="3" />
    <rect x="590" y="240" width="30" height="180" rx="4" stroke="#ffffff" stroke-width="3" />
    <path d="M 210,270 L 590,270 L 590,390 L 210,390 Z" />
    
    <!-- Hinge Pin & Hanger -->
    <circle cx="330" cy="220" r="10" fill="#ffaa66" />
    <path d="M 330,220 L 360,290" stroke-width="4" />
    
    <!-- Clapper / Disc -->
    <rect x="350" y="290" width="15" height="80" rx="2" fill="#ffffff" transform="rotate(-15 350 290)" />
    
    <!-- Flow Arrow -->
    <path d="M 260,330 L 420,330 M 390,310 L 420,330 L 390,350" stroke="#55ff55" stroke-width="4" />
  `),
  'pump-impeller': wrapSVG('Pump Impeller - Closed Vanes', `
    <!-- Outer Circle -->
    <circle cx="400" cy="270" r="180" stroke="#ffffff" stroke-width="4" />
    <!-- Hub center -->
    <circle cx="400" cy="270" r="45" />
    <circle cx="400" cy="270" r="15" fill="#ffffff" />
    
    <!-- Curved Vanes -->
    <path d="M 400,225 Q 350,180 260,180" stroke-width="3" />
    <path d="M 445,270 Q 450,180 490,140" stroke-width="3" />
    <path d="M 400,315 Q 450,360 540,360" stroke-width="3" />
    <path d="M 355,270 Q 350,360 310,400" stroke-width="3" />
    <path d="M 432,238 Q 490,260 520,320" stroke-width="3" />
    <path d="M 368,302 Q 310,280 280,220" stroke-width="3" />
  `),
  'gear-shaft': wrapSVG('CNC Machined Spline Shaft', `
    <!-- Main shaft cylinder -->
    <rect x="100" y="220" width="600" height="100" rx="5" />
    
    <!-- Splines / Gear teeth left side -->
    <line x1="100" y1="220" x2="220" y2="220" stroke-width="4" />
    <line x1="100" y1="240" x2="220" y2="240" stroke-width="4" />
    <line x1="100" y1="260" x2="220" y2="260" stroke-width="4" />
    <line x1="100" y1="280" x2="220" y2="280" stroke-width="4" />
    <line x1="100" y1="300" x2="220" y2="300" stroke-width="4" />
    <line x1="100" y1="320" x2="220" y2="320" stroke-width="4" />
    
    <!-- Central stepped shoulders -->
    <rect x="350" y="190" width="80" height="160" />
    <rect x="430" y="210" width="100" height="120" />
    
    <!-- Centerlines -->
    <line x1="80" y1="270" x2="720" y2="270" stroke="#ffaa66" stroke-dasharray="10 5 2 5" stroke-width="1.5" />
  `),
  'bearing-housing': wrapSVG('Heavy Plummer Block Housing', `
    <!-- Base plate -->
    <path d="M 150,420 L 650,420 L 630,370 L 170,370 Z" />
    <circle cx="210" cy="395" r="12" stroke-width="2" />
    <circle cx="590" cy="395" r="12" stroke-width="2" />
    
    <!-- Housing cap -->
    <path d="M 280,370 C 280,200 520,200 520,370 Z" />
    <circle cx="400" cy="300" r="70" />
    <circle cx="400" cy="300" r="90" stroke-dasharray="6 4" />
    
    <!-- Greasing nipple -->
    <rect x="390" y="180" width="20" height="25" />
    <circle cx="400" cy="175" r="6" />
  `),
  'casting-valve-body': wrapSVG('Raw Investment Casting Profile', `
    <!-- Raw rough boundaries -->
    <path d="M 200,240 Q 400,200 600,240 L 600,380 Q 400,420 200,380 Z" stroke-dasharray="3 3" />
    
    <!-- Finished profile inside -->
    <path d="M 215,255 L 585,255 L 585,365 L 215,365 Z" stroke="#55ff55" stroke-width="2.5" />
    
    <!-- Machining allowance shaded zone -->
    <path d="M 200,240 L 215,255 M 600,240 L 585,255 M 600,380 L 585,365 M 200,380 L 215,365" stroke-width="1" />
  `),
  'ibr-pipe-spool': wrapSVG('IBR Pipe Spool - High Temp', `
    <rect x="150" y="240" width="35" height="160" rx="3" />
    <rect x="615" y="240" width="35" height="160" rx="3" />
    
    <!-- Straight Pipe -->
    <line x1="185" y1="270" x2="615" y2="270" stroke-width="3" />
    <line x1="185" y1="370" x2="615" y2="370" stroke-width="3" />
    
    <!-- Reinforcement bands -->
    <rect x="320" y="260" width="20" height="120" stroke-dasharray="3 3" />
    <rect x="460" y="260" width="20" height="120" stroke-dasharray="3 3" />
  `),
  'ibr-flanged-tee': wrapSVG('IBR Flanged Tee Connection', `
    <!-- Main run flanges -->
    <rect x="150" y="240" width="30" height="160" rx="3" />
    <rect x="620" y="240" width="30" height="160" rx="3" />
    <!-- Branch run flange -->
    <rect x="320" y="80" width="160" height="30" rx="3" />
    
    <!-- Junction paths -->
    <path d="M 180,270 L 320,270 L 320,110 L 480,110 L 480,270 L 620,270 L 620,370 L 180,370 Z" />
  `),
  'gearbox-housing': wrapSVG('Industrial Gearbox Housing', `
    <!-- Cast outer shell -->
    <rect x="200" y="160" width="400" height="300" rx="15" />
    
    <!-- Shaft bores -->
    <circle cx="320" cy="270" r="50" />
    <circle cx="480" cy="330" r="40" />
    
    <!-- Bolt circle on bore -->
    <circle cx="320" cy="270" r="65" stroke-dasharray="5 5" />
    <circle cx="480" cy="330" r="52" stroke-dasharray="5 5" />
  `),
  'bed-plate': wrapSVG('Heavy Engine Bed Plate', `
    <rect x="150" y="320" width="500" height="120" rx="5" />
    
    <!-- Ribbing reinforcements -->
    <line x1="220" y1="320" x2="220" y2="440" />
    <line x1="350" y1="320" x2="350" y2="440" />
    <line x1="480" y1="320" x2="480" y2="440" />
    <line x1="580" y1="320" x2="580" y2="440" />
    
    <!-- Anchor bolt sleeve guides -->
    <rect x="120" y="350" width="30" height="70" />
    <rect x="650" y="350" width="30" height="70" />
  `),
  'round-bar-4140': wrapSVG('Alloy Steel Rolled Round Bar', `
    <!-- Rounded end ellipse -->
    <ellipse cx="600" cy="270" rx="40" ry="80" />
    <!-- Straight shaft -->
    <path d="M 150,190 L 600,190 M 150,350 L 600,350" stroke-width="3" />
    <!-- Left face -->
    <path d="M 150,190 A 40,80 0 0,0 150,350" stroke-width="3" />
    <path d="M 150,190 A 40,80 0 0,1 150,350" stroke-dasharray="5 5" />
  `),
  'en24-billet': wrapSVG('Heavy Forged Steel Billet', `
    <!-- Cube outline -->
    <polygon points="150,250 450,200 650,280 350,330" />
    <polygon points="150,250 350,330 350,450 150,370" />
    <polygon points="350,330 650,280 650,400 350,450" />
  `)
};

// Generate and write all files
Object.entries(drawings).forEach(([name, content]) => {
  const filePath = path.join(targetDir, `${name}.svg`);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully generated: ${filePath}`);
});

console.log('All blueprint SVGs generated successfully!');
