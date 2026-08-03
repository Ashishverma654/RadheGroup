const fs = require('fs');
let content = fs.readFileSync('src/app/products/page.tsx', 'utf8');

// Fix colors and font sizes for the sidebar labels in 360 viewer section
content = content.replaceAll(
    'text-white/40 font-label-caps text-[10px]',
    'text-on-surface-variant dark:text-white/40 font-bold tracking-wider text-[9px] uppercase'
);
content = content.replaceAll(
    'text-white font-headline-sm text-lg',
    'text-on-surface dark:text-white font-bold text-sm mt-1'
);

// For the mobile labels
content = content.replaceAll(
    'text-white/40 font-label-caps text-[8px]',
    'text-on-surface-variant dark:text-white/40 font-bold tracking-wider text-[8px] uppercase'
);
content = content.replaceAll(
    'text-white font-bold text-xs',
    'text-on-surface dark:text-white font-bold text-xs mt-1'
);

fs.writeFileSync('src/app/products/page.tsx', content);
console.log('Sidebar labels fixed.');
