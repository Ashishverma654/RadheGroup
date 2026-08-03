const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Fix paddings
content = content.replace(
    '<section className="py-xl bg-surface overflow-hidden reveal-on-scroll">',
    '<section className="py-12 bg-surface overflow-hidden reveal-on-scroll">'
);

content = content.replace(
    '<div className="max-w-[1280px] mx-auto px-md mb-lg">\n<span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Our Legacy</span>\n<h2 className="font-headline-md text-headline-md mt-base text-on-surface">Engineering Milestones</h2>',
    '<div className="max-w-[1280px] mx-auto px-md mb-6">\n<span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Our Legacy</span>\n<h2 className="font-headline-md text-headline-md mt-base text-on-surface">Engineering Milestones</h2>'
);

// 2. Animate the years
content = content.replace(
    '<span className="font-stat-value text-primary-container text-2xl mb-xs block group-hover:scale-110 transition-transform origin-left">1998</span>',
    '<span className="font-stat-value text-primary-container text-2xl mb-xs block group-hover:scale-110 transition-transform origin-left"><AnimatedStat value={1998} /></span>'
);

content = content.replace(
    '<span className="font-stat-value text-primary/40 text-2xl mb-xs block group-hover:text-primary-container group-hover:scale-110 transition-all origin-left">2005</span>',
    '<span className="font-stat-value text-primary/40 text-2xl mb-xs block group-hover:text-primary-container group-hover:scale-110 transition-all origin-left"><AnimatedStat value={2005} /></span>'
);

content = content.replace(
    '<span className="font-stat-value text-primary/40 text-2xl mb-xs block group-hover:text-primary-container group-hover:scale-110 transition-all origin-left">2012</span>',
    '<span className="font-stat-value text-primary/40 text-2xl mb-xs block group-hover:text-primary-container group-hover:scale-110 transition-all origin-left"><AnimatedStat value={2012} /></span>'
);

content = content.replace(
    '<span className="font-stat-value text-primary/40 text-2xl mb-xs block group-hover:text-primary-container group-hover:scale-110 transition-all origin-left">2023</span>',
    '<span className="font-stat-value text-primary/40 text-2xl mb-xs block group-hover:text-primary-container group-hover:scale-110 transition-all origin-left"><AnimatedStat value={2023} /></span>'
);

content = content.replace(
    '<span className="font-stat-value text-primary/40 text-2xl mb-xs block group-hover:text-primary-container group-hover:scale-110 transition-all origin-left">2025</span>',
    '<span className="font-stat-value text-primary/40 text-2xl mb-xs block group-hover:text-primary-container group-hover:scale-110 transition-all origin-left"><AnimatedStat value={2025} /></span>'
);

fs.writeFileSync('src/app/page.tsx', content);
console.log('Milestones fixed');
