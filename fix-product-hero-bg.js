const fs = require('fs');
const filePath = 'src/app/products/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const oldHero = `<section className="relative pt-32 pb-24 bg-[#0f1d30] dark:bg-[#0a1220] technical-grid overflow-hidden">
<div className="max-w-[1280px] mx-auto px-md relative z-10 flex flex-col md:flex-row items-center justify-between gap-xl">
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
</div>
</section>`;

const newHero = `<section className="relative pt-40 pb-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
<img src="/images/stitch/valves.jpg" alt="Flow Marshal Valve" className="absolute inset-0 w-full h-full object-cover z-0" />
<div className="absolute inset-0 bg-[#0f1d30]/70 dark:bg-[#0a1220]/70 z-0 technical-grid"></div>
<div className="max-w-[1280px] w-full mx-auto px-md relative z-10 text-center flex flex-col items-center">
<div className="reveal inline-block px-sm py-xs border-l-4 border-primary-container bg-primary-container/20 mb-md backdrop-blur-sm shadow-sm">
<span className="text-primary-container font-label-caps uppercase drop-shadow-md text-white font-bold">Engineering Standard V.2024</span>
</div>
<h1 className="reveal font-display-lg text-display-lg text-white mb-sm drop-shadow-2xl">Technical Product Catalog</h1>
<div className="reveal w-32 h-1 bg-primary-container mb-lg drop-shadow-md"></div>
<p className="reveal text-white/90 font-body-lg max-w-[42rem] drop-shadow-md leading-relaxed">
    Explore our comprehensive range of high-precision industrial components. From ASME standard valves to advanced metallurgical alloys, engineered for extreme environments.
</p>
</div>
</section>`;

if (content.includes(oldHero)) {
    content = content.replace(oldHero, newHero);
    fs.writeFileSync(filePath, content);
    console.log('Successfully updated the Hero section to a full-bleed background image.');
} else {
    console.error('Could not find the exact Hero section block to replace. Please check the code.');
}
