const fs = require('fs');
const pageFile = 'src/app/page.tsx';
let content = fs.readFileSync(pageFile, 'utf8');

// 1. Fix paddings
content = content.replace(
    '<section className="relative py-xl reveal-on-scroll overflow-hidden bg-surface dark:bg-[#111c2d]">',
    '<section className="relative py-12 reveal-on-scroll overflow-hidden bg-surface dark:bg-[#111c2d]">'
);

content = content.replace(
    '<section className="py-xl reveal-on-scroll">',
    '<section className="py-12 reveal-on-scroll">'
);

// 2. Replace the Industry Cards with image backgrounds
const cardsOld = [
    // Oil & Gas
    `<div className="industry-card interactive-element cursor-pointer group bg-surface-container-lowest dark:bg-[#233144] p-md border border-outline-variant/30 dark:border-white/10 rounded-xl" >
<div className="flex flex-col items-center text-center">
<span className="material-symbols-outlined text-primary text-4xl mb-sm" data-icon="oil_barrel">oil_barrel</span>
<h4 className="font-subheader text-subheader font-bold text-on-surface dark:text-white">Oil &amp; Gas</h4>
<div className="reveal-panel mt-sm text-sm text-on-surface-variant dark:text-gray-300">
<ul className="list-disc text-left ml-md space-y-1">
<li>API 6D Certified Valves</li>
<li>Subsea Castings</li>
<li>High-Pressure Flanges</li>
</ul>
</div>
</div>
</div>`,
    
    // Water Management
    `<div className="industry-card interactive-element cursor-pointer group bg-surface-container-lowest dark:bg-[#233144] p-md border border-outline-variant/30 dark:border-white/10 rounded-xl" >
<div className="flex flex-col items-center text-center">
<span className="material-symbols-outlined text-primary text-4xl mb-sm" data-icon="water_drop">water_drop</span>
<h4 className="font-subheader text-subheader font-bold text-on-surface dark:text-white">Water Management</h4>
<div className="reveal-panel mt-sm text-sm text-on-surface-variant dark:text-gray-300">
<ul className="list-disc text-left ml-md space-y-1">
<li>Desalination Plant Parts</li>
<li>Pumping System Valves</li>
<li>Corrosion-Resistant Castings</li>
</ul>
</div>
</div>
</div>`,

    // Power Generation
    `<div className="industry-card interactive-element cursor-pointer group bg-surface-container-lowest dark:bg-[#233144] p-md border border-outline-variant/30 dark:border-white/10 rounded-xl" >
<div className="flex flex-col items-center text-center">
<span className="material-symbols-outlined text-primary text-4xl mb-sm" data-icon="bolt">bolt</span>
<h4 className="font-subheader text-subheader font-bold text-on-surface dark:text-white">Power Generation</h4>
<div className="reveal-panel mt-sm text-sm text-on-surface-variant dark:text-gray-300">
<ul className="list-disc text-left ml-md space-y-1">
<li>Turbine Housings</li>
<li>High-Temp Steam Valves</li>
<li>Nuclear-Grade Forgings</li>
</ul>
</div>
</div>
</div>`,

    // Petrochemical
    `<div className="industry-card interactive-element cursor-pointer group bg-surface-container-lowest dark:bg-[#233144] p-md border border-outline-variant/30 dark:border-white/10 rounded-xl" >
<div className="flex flex-col items-center text-center">
<span className="material-symbols-outlined text-primary text-4xl mb-sm" data-icon="science">science</span>
<h4 className="font-subheader text-subheader font-bold text-on-surface dark:text-white">Petrochemical</h4>
<div className="reveal-panel mt-sm text-sm text-on-surface-variant dark:text-gray-300">
<ul className="list-disc text-left ml-md space-y-1">
<li>Chemical Process Valves</li>
<li>Specialty Alloy Castings</li>
<li>High-Tolerance Fittings</li>
</ul>
</div>
</div>
</div>`
];

const bgs = [
    '/images/stitch/valves.jpg',
    '/images/products/hero-slider-3.png',
    '/images/stitch/infra-cnc.jpg',
    '/images/products/hero-alloys.png'
];

cardsOld.forEach((oldCard, i) => {
    let newCard = oldCard.replace('bg-surface-container-lowest dark:bg-[#233144]', `relative overflow-hidden`);
    newCard = newCard.replace('<div className="flex flex-col items-center text-center">', 
        `<img src="${bgs[i]}" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500 z-0" />
         <div className="absolute inset-0 bg-[#0f1d30]/80 group-hover:bg-[#0f1d30]/60 transition-colors z-0"></div>
         <div className="relative z-10 flex flex-col items-center text-center text-white h-full justify-center">`);
    newCard = newCard.replace('text-on-surface dark:text-white', 'text-white');
    newCard = newCard.replace('text-on-surface-variant dark:text-gray-300', 'text-white/80');
    
    // Sometimes formatting varies, so let's do a strict replace
    content = content.replace(oldCard, newCard);
});

fs.writeFileSync(pageFile, content);
console.log('Industries section fixed: spacing removed and background images added.');
