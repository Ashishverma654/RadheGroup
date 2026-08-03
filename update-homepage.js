const fs = require('fs');

let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Add imports for useState and useRouter
pageContent = pageContent.replace(
  "import React, { useEffect } from 'react';",
  "import React, { useEffect, useState } from 'react';\nimport { useRouter } from 'next/navigation';"
);

// 2. Add state and handlers to Page component
const componentStart = "export default function Page() {";
const stateToAdd = `
  const router = useRouter();
  const [searchParams, setSearchParams] = useState({
    industry: 'Oil & Gas',
    material: 'ASTM A216 WCB',
    pressure: 'Class 150'
  });

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    router.push('/products?' + params.toString());
  };
`;
pageContent = pageContent.replace(componentStart, componentStart + stateToAdd);

// 3. Fix the Marquee (flags). Find the marquee-content div and replace it.
const flagsOriginal = `<div className="marquee-content gap-md items-center">
<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="India" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://flagcdn.com/w160/in.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">INDIA (HQ)</span>
</div>
<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="USA" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://flagcdn.com/w160/us.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">UNITED STATES</span>
</div>
<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="Germany" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://flagcdn.com/w160/de.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">GERMANY</span>
</div>
<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="Saudi Arabia" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://flagcdn.com/w160/sa.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">SAUDI ARABIA</span>
</div>
<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="France" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://flagcdn.com/w160/fr.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">FRANCE</span>
</div>
<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="UAE" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://flagcdn.com/w160/ae.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">UAE</span>
</div>
</div>`;

const flagsList = [
  { name: 'INDIA (HQ)', img: 'in' },
  { name: 'UNITED STATES', img: 'us' },
  { name: 'GERMANY', img: 'de' },
  { name: 'SAUDI ARABIA', img: 'sa' },
  { name: 'FRANCE', img: 'fr' },
  { name: 'UAE', img: 'ae' }
];

let flagJSX = '';
for (const f of flagsList) {
  flagJSX += `
<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="${f.name}" className="absolute inset-0 w-full h-full object-cover transition-all duration-300" src="https://flagcdn.com/w160/${f.img}.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">${f.name}</span>
</div>`;
}

const newMarquee = `<div className="marquee-content gap-md items-center">
${flagJSX}
${flagJSX}
</div>`;

pageContent = pageContent.replace(flagsOriginal, newMarquee);

// 4. Update the Product Finder selects and button
pageContent = pageContent.replace(
  '<select className="w-full bg-white/5 border-white/20 text-white rounded p-sm focus:border-primary-container outline-none appearance-none">',
  '<select value={searchParams.industry} onChange={(e) => setSearchParams({...searchParams, industry: e.target.value})} className="w-full bg-white/5 border-white/20 text-white rounded p-sm focus:border-primary-container outline-none appearance-none cursor-pointer">'
);

pageContent = pageContent.replace(
  '<select className="w-full bg-white/5 border-white/20 text-white rounded p-sm focus:border-primary-container outline-none appearance-none">',
  '<select value={searchParams.material} onChange={(e) => setSearchParams({...searchParams, material: e.target.value})} className="w-full bg-white/5 border-white/20 text-white rounded p-sm focus:border-primary-container outline-none appearance-none cursor-pointer">'
);

pageContent = pageContent.replace(
  '<select className="w-full bg-white/5 border-white/20 text-white rounded p-sm focus:border-primary-container outline-none appearance-none">',
  '<select value={searchParams.pressure} onChange={(e) => setSearchParams({...searchParams, pressure: e.target.value})} className="w-full bg-white/5 border-white/20 text-white rounded p-sm focus:border-primary-container outline-none appearance-none cursor-pointer">'
);

pageContent = pageContent.replace(
  '<button className="bg-primary-container text-on-primary-container h-[48px] font-bold rounded hover:brightness-110 active:scale-95 transition-all">',
  '<button onClick={handleSearch} className="bg-primary-container text-on-primary-container h-[48px] font-bold rounded hover:brightness-110 active:scale-95 transition-all cursor-pointer">'
);


fs.writeFileSync('src/app/page.tsx', pageContent);
console.log('Homepage updated successfully!');
