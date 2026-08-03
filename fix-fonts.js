const fs = require('fs');
let content = fs.readFileSync('src/app/contact/page.tsx', 'utf8');

// Remove custom font classes
content = content.replace(/font-display-lg /g, '');
content = content.replace(/font-body-lg /g, '');

// Standardize paragraph font sizes
content = content.replace(/<p className=\"([^\"]*)text-sm([^\"]*)\">/g, '<p className=\"$1text-base$2\">');

fs.writeFileSync('src/app/contact/page.tsx', content);
console.log('Fixed fonts!');
