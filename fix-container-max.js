const fs = require('fs');
const filesToFix = [
  'C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app\\\\page.tsx',
  'C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app\\\\products\\\\page.tsx'
];

filesToFix.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf-8');
  content = content.replace(/max-w-container-max/g, 'max-w-[1280px]');
  fs.writeFileSync(file, content);
  console.log('Fixed container max in', file);
});
