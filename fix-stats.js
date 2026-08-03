const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Reduce spacing
content = content.replace(
    '<div className="grid grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">',
    '<div className="grid grid-cols-2 lg:grid-cols-4 gap-lg mb-12">'
);

// 2. Animate the numbers
content = content.replace(
    '<div className="font-stat-value text-stat-value text-primary mb-xs">25+</div>',
    '<div className="font-stat-value text-stat-value text-primary mb-xs"><AnimatedStat value={25} suffix="+" /></div>'
);

content = content.replace(
    '<div className="font-stat-value text-stat-value text-primary mb-xs">50+</div>',
    '<div className="font-stat-value text-stat-value text-primary mb-xs"><AnimatedStat value={50} suffix="+" /></div>'
);

content = content.replace(
    '<div className="font-stat-value text-stat-value text-primary mb-xs">500+</div>',
    '<div className="font-stat-value text-stat-value text-primary mb-xs"><AnimatedStat value={500} suffix="+" /></div>'
);

content = content.replace(
    '<div className="font-stat-value text-stat-value text-primary mb-xs">10k+</div>',
    '<div className="font-stat-value text-stat-value text-primary mb-xs"><AnimatedStat value={10} suffix="k+" /></div>'
);

// 3. Make certification badges animated
const oldBadge = '<div className="interactive-element px-md py-sm bg-surface-container border border-outline-variant/30 font-bold text-on-surface">';
const newBadge = '<div className="interactive-element px-md py-sm bg-surface-container border border-outline-variant/30 font-bold text-on-surface hover:scale-110 hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer shadow-sm hover:shadow-lg">';

content = content.replaceAll(oldBadge, newBadge);

fs.writeFileSync('src/app/page.tsx', content);
console.log('Statistics & Trust section updated successfully.');
