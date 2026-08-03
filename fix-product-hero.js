const fs = require('fs');
let content = fs.readFileSync('src/app/products/page.tsx', 'utf8');

// 1. Fix Hero Section
const oldHero = `<div className="max-w-[1280px] mx-auto px-md relative z-10">
<div className="reveal inline-block px-sm py-xs border-l-4 border-primary-container bg-primary-container/10 mb-md">
<span className="text-primary-container font-label-caps uppercase">Engineering Standard V.2024</span>
</div>
<h1 className="reveal font-display-lg text-display-lg text-white mb-sm">Technical Product Catalog</h1>
<div className="reveal w-32 h-1 bg-primary-container mb-lg"></div>
<p className="reveal text-white/70 font-body-lg max-w-[42rem]">
            Explore our comprehensive range of high-precision industrial components. From ASME standard valves to advanced metallurgical alloys, engineered for extreme environments.
        </p>
</div>`;

const newHero = `<div className="max-w-[1280px] mx-auto px-md relative z-10 flex flex-col md:flex-row items-center justify-between gap-xl">
<div className="md:w-1/2">
<div className="reveal inline-block px-sm py-xs border-l-4 border-primary-container bg-primary-container/10 mb-md">
<span className="text-primary-container font-label-caps uppercase">Engineering Standard V.2024</span>
</div>
<h1 className="reveal font-display-lg text-display-lg text-white mb-sm">Technical Product Catalog</h1>
<div className="reveal w-32 h-1 bg-primary-container mb-lg"></div>
<p className="reveal text-white/70 font-body-lg max-w-[42rem]">
            Explore our comprehensive range of high-precision industrial components. From ASME standard valves to advanced metallurgical alloys, engineered for extreme environments.
        </p>
</div>
<div className="md:w-1/2 mt-lg md:mt-0 reveal">
<img src="/images/stitch/valves.jpg" alt="Flow Marshal Valve" className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/5 object-cover aspect-video" />
</div>
</div>`;

content = content.replace(oldHero, newHero);

// 2. Fix Tabs
const tabsToReplace = [
    {
        search: `<button className="tab-btn active-tab flex flex-col items-center justify-center py-lg transition-all duration-300 border-r border-white/5" >\n<span className="material-symbols-outlined mb-xs text-3xl">precision_manufacturing</span>\n<span className="font-label-caps">Radhe Technocast</span>\n</button>`,
        img: '/images/stitch/technocast.jpg'
    },
    {
        search: `<button className="tab-btn bg-transparent text-white/60 hover:text-white hover:bg-white dark:bg-[#1a2332] dark:border-gray-800/5 flex flex-col items-center justify-center py-lg transition-all duration-300 border-r border-white/5" >\n<span className="material-symbols-outlined mb-xs text-3xl">settings_input_component</span>\n<span className="font-label-caps">Flow Marshal Valves</span>\n</button>`,
        img: '/images/stitch/valves.jpg'
    },
    {
        search: `<button className="tab-btn bg-transparent text-white/60 hover:text-white hover:bg-white dark:bg-[#1a2332] dark:border-gray-800/5 flex flex-col items-center justify-center py-lg transition-all duration-300 border-r border-white/5" >\n<span className="material-symbols-outlined mb-xs text-3xl">factory</span>\n<span className="font-label-caps">Radhe Industries</span>\n</button>`,
        img: '/images/stitch/foundry-ladle.jpg'
    },
    {
        search: `<button className="tab-btn bg-transparent text-white/60 hover:text-white hover:bg-white dark:bg-[#1a2332] dark:border-gray-800/5 flex flex-col items-center justify-center py-lg transition-all duration-300" >\n<span className="material-symbols-outlined mb-xs text-3xl">biotech</span>\n<span className="font-label-caps">Radhe Alloys</span>\n</button>`,
        img: '/images/products/hero-alloys.png'
    }
];

// Instead of string literal search which is fragile, let's just do a regex replace on the buttons
content = content.replace(
    /<button className="tab-btn active-tab flex flex-col items-center justify-center py-lg transition-all duration-300 border-r border-white\/5" >/g,
    `<button className="tab-btn active-tab flex flex-col items-center justify-center py-lg transition-all duration-300 border-r border-white/5 relative overflow-hidden group" >
<img src="/images/stitch/technocast.jpg" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500 z-0" />
<div className="relative z-10 flex flex-col items-center justify-center">`
);
content = content.replace(
    /<span className="font-label-caps">Radhe Technocast<\/span>\n<\/button>/g,
    `<span className="font-label-caps">Radhe Technocast</span>\n</div>\n</button>`
);

content = content.replace(
    /<button className="tab-btn bg-transparent text-white\/60 hover:text-white hover:bg-white dark:bg-\[#1a2332\] dark:border-gray-800\/5 flex flex-col items-center justify-center py-lg transition-all duration-300 border-r border-white\/5" >/g,
    (match, offset, string) => {
        // since there are two matching this (valves and industries), we need to replace each accordingly
        // actually let's just use string replace for each specific chunk
        return match;
    }
);

// Safer: replace chunk by chunk using a targeted regex or string replace
content = content.replace(
    `<span className="material-symbols-outlined mb-xs text-3xl">settings_input_component</span>
<span className="font-label-caps">Flow Marshal Valves</span>
</button>`,
    `<img src="/images/stitch/valves.jpg" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500 z-0" />
<div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
<span className="material-symbols-outlined mb-xs text-3xl drop-shadow-md">settings_input_component</span>
<span className="font-label-caps drop-shadow-md">Flow Marshal Valves</span>
</div>
</button>`
);

content = content.replace(
    `<span className="material-symbols-outlined mb-xs text-3xl">factory</span>
<span className="font-label-caps">Radhe Industries</span>
</button>`,
    `<img src="/images/stitch/foundry-ladle.jpg" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500 z-0" />
<div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
<span className="material-symbols-outlined mb-xs text-3xl drop-shadow-md">factory</span>
<span className="font-label-caps drop-shadow-md">Radhe Industries</span>
</div>
</button>`
);

content = content.replace(
    `<span className="material-symbols-outlined mb-xs text-3xl">biotech</span>
<span className="font-label-caps">Radhe Alloys</span>
</button>`,
    `<img src="/images/products/hero-alloys.png" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500 z-0" />
<div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
<span className="material-symbols-outlined mb-xs text-3xl drop-shadow-md">biotech</span>
<span className="font-label-caps drop-shadow-md">Radhe Alloys</span>
</div>
</button>`
);

// We need to add "relative overflow-hidden group" to those 3 buttons
content = content.replace(
    /<button className="tab-btn bg-transparent text-white\/60 hover:text-white hover:bg-white dark:bg-\[#1a2332\] dark:border-gray-800\/5 flex flex-col items-center justify-center py-lg transition-all duration-300 border-r border-white\/5" >/g,
    '<button className="tab-btn bg-transparent text-white/60 hover:text-white dark:bg-[#1a2332] dark:border-gray-800/5 flex flex-col items-center justify-center py-lg transition-all duration-300 border-r border-white/5 relative overflow-hidden group" >'
);

content = content.replace(
    /<button className="tab-btn bg-transparent text-white\/60 hover:text-white hover:bg-white dark:bg-\[#1a2332\] dark:border-gray-800\/5 flex flex-col items-center justify-center py-lg transition-all duration-300" >/g,
    '<button className="tab-btn bg-transparent text-white/60 hover:text-white dark:bg-[#1a2332] dark:border-gray-800/5 flex flex-col items-center justify-center py-lg transition-all duration-300 relative overflow-hidden group" >'
);

// Wait, the first button replacement for Radhe Technocast needs the pointer-events-none div as well to keep it consistent
content = content.replace(
    `<div className="relative z-10 flex flex-col items-center justify-center">
<span className="material-symbols-outlined mb-xs text-3xl">precision_manufacturing</span>
<span className="font-label-caps">Radhe Technocast</span>
</div>`,
    `<div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
<span className="material-symbols-outlined mb-xs text-3xl drop-shadow-md">precision_manufacturing</span>
<span className="font-label-caps drop-shadow-md">Radhe Technocast</span>
</div>`
);


fs.writeFileSync('src/app/products/page.tsx', content);
console.log('Products page updated successfully.');
