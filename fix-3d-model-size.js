const fs = require('fs');
let content = fs.readFileSync('src/app/products/page.tsx', 'utf8');

// 1. Revert container size to 500px
content = content.replace(
    '<div className="lg:col-span-6 relative h-[350px] flex items-center justify-center">',
    '<div className="lg:col-span-6 relative h-[500px] flex items-center justify-center">'
);
content = content.replace(
    '<div className="w-full h-[350px] bg-transparent cursor-grab active:cursor-grabbing" style={{display: \'block\'}}>',
    '<div className="w-full h-[500px] bg-transparent cursor-grab active:cursor-grabbing" style={{display: \'block\'}}>'
);

// 2. Decrease 3D model size (valveGroup.scale)
content = content.replace(
    'valveGroup.scale.set(1.5, 1.5, 1.5);',
    'valveGroup.scale.set(1.0, 1.0, 1.0);'
);

fs.writeFileSync('src/app/products/page.tsx', content);
console.log('3D viewer container reverted and 3D model scale decreased.');
