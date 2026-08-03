const fs = require('fs');

const files = [
  'src/app/industries/page.tsx',
  'src/app/products/page.tsx',
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
  'src/components/layout/header.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // Add basic dark mode support by replacing common hardcoded backgrounds and text colors
    // Only if not already replaced
    content = content.replace(/className="([^"]*)bg-white([^"]*)"/g, 'className="$1bg-white dark:bg-[#1a2332] dark:border-gray-800$2"');
    content = content.replace(/className="([^"]*)bg-\[\#f8fafc\]([^"]*)"/g, 'className="$1bg-[#f8fafc] dark:bg-[#131b2c] dark:border-gray-800$2"');
    content = content.replace(/className="([^"]*)bg-gray-50([^"]*)"/g, 'className="$1bg-gray-50 dark:bg-[#131b2c]$2"');
    
    // Text colors
    content = content.replace(/className="([^"]*)text-\[\#0f1d30\]([^"]*)"/g, 'className="$1text-[#0f1d30] dark:text-gray-100$2"');
    content = content.replace(/className="([^"]*)text-gray-600([^"]*)"/g, 'className="$1text-gray-600 dark:text-gray-300$2"');
    content = content.replace(/className="([^"]*)text-gray-500([^"]*)"/g, 'className="$1text-gray-500 dark:text-gray-400$2"');
    
    // Header specific
    content = content.replace(/className="([^"]*)bg-\[\#0f1d30\]([^"]*)"/g, 'className="$1bg-[#0f1d30] dark:bg-[#0a1220]$2"');
    
    fs.writeFileSync(file, content);
    console.log(`Added dark mode classes to ${file}`);
  }
});
