const fs = require('fs');

const filesToFix = [
  'C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app\\\\page.tsx',
  'C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app\\\\products\\\\page.tsx'
];

filesToFix.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf-8');
  
  // Replace max-w classes
  content = content.replace(/\bmax-w-xs\b/g, 'max-w-[20rem]');
  content = content.replace(/\bmax-w-sm\b/g, 'max-w-[24rem]');
  content = content.replace(/\bmax-w-md\b/g, 'max-w-[28rem]');
  content = content.replace(/\bmax-w-lg\b/g, 'max-w-[32rem]');
  content = content.replace(/\bmax-w-xl\b/g, 'max-w-[36rem]');
  content = content.replace(/\bmax-w-2xl\b/g, 'max-w-[42rem]');
  content = content.replace(/\bmax-w-3xl\b/g, 'max-w-[48rem]');
  content = content.replace(/\bmax-w-4xl\b/g, 'max-w-[56rem]');
  content = content.replace(/\bmax-w-5xl\b/g, 'max-w-[64rem]');
  
  fs.writeFileSync(file, content);
  console.log('Fixed max-widths in', file);
});
