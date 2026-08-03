const fs = require('fs');

const files = [
  'src/app/page.tsx',
  'src/app/products/page.tsx',
  'src/app/about/page.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    // For page.tsx and products/page.tsx
    content = content.replace(
      /<a className="[^"]*" href="#">Global Presence<\/a>/g,
      match => match.replace('href="#"', 'href="/contact"')
    );
    // For about/page.tsx
    content = content.replace(
      /<a className="[^"]*" href="#">Global Presence<\/a>/g,
      match => match.replace('href="#"', 'href="/contact"')
    );
    // Wait, the screenshot shows the Contact page is linked from 'Global Presence', but what about other links?
    // Let's just fix Global Presence.
    fs.writeFileSync(file, content);
  }
});
console.log('Global Presence links updated to /contact');
