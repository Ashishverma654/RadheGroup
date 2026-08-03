const fs = require('fs');
let content = fs.readFileSync('src/app/products/page.tsx', 'utf8');

// 1. Make the hero image clearer
content = content.replace(
    '<div className="absolute inset-0 bg-[#0f1d30]/70 dark:bg-[#0a1220]/70 z-0 technical-grid"></div>',
    '<div className="absolute inset-0 bg-[#0f1d30]/40 dark:bg-[#0a1220]/40 z-0 technical-grid"></div>'
);

// 2. Fix the blue space below the hero by letting the grid overlap the hero properly
content = content.replace(
    '<section className="bg-[#0f1d30] dark:bg-[#0a1220] -mt-1 relative z-20">',
    '<section className="relative z-20 -mt-32 pb-16">' // Removed background, added negative margin to overlap
);
content = content.replace(
    'shadow-2xl translate-y-1/2">',
    'shadow-2xl">' // Removed translate-y-1/2 because -mt-32 handles the overlap, and we don't need extra space below it
);

// 3. Make the company backgrounds clearer
// Opacity 20 -> 40, group-hover:opacity-40 -> 60 for the active tab (Technocast)
content = content.replace(
    'opacity-20 group-hover:scale-110 group-hover:opacity-40',
    'opacity-40 group-hover:scale-110 group-hover:opacity-60'
);

// Opacity 10 -> 40, group-hover:opacity-40 -> 60 for the other tabs
content = content.replaceAll(
    'opacity-10 group-hover:scale-110 group-hover:opacity-40',
    'opacity-40 group-hover:scale-110 group-hover:opacity-60'
);


fs.writeFileSync('src/app/products/page.tsx', content);
console.log('Products page UI tweaked.');
