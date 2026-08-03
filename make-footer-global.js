const fs = require('fs');
const path = require('path');

// 1. Read the homepage to extract the footer
const homepagePath = 'src/app/page.tsx';
let homepageContent = fs.readFileSync(homepagePath, 'utf8');

// The footer starts at {/* Animated Footer */} and goes up to the end of Floating Widgets before </>.
// We can just use a regex to grab it.
const footerRegex = /{\/\* Animated Footer \*\/}[\s\S]*?<\/div>(\s*)<\/div>(\s*)<\/div>(\s*)<\/div>(\s*)<\/div>(\s*)<\/div>/; // Wait, it's safer to just extract it based on known lines.
// Actually, let's just write the exact footer JSX from the homepage since I have it from the view_file.

const globalFooterJSX = `import React from 'react';

export function Footer() {
  return (
    <>
      {/* Animated Footer */}
      <footer className="animated-footer-bg text-surface-variant/70 w-full py-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-md px-md max-w-[1280px] mx-auto">
          <div className="md:col-span-1">
            <h3 className="font-headline-sm text-headline-sm text-white mb-md">RadheGroup</h3>
            <p className="font-body-md text-body-md mb-md text-white/80">Engineering Excellence for Global Infrastructure.</p>
            <div className="flex gap-sm">
              <a className="text-white/60 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
              <a className="text-white/60 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">contact_mail</span></a>
            </div>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps text-primary-container mb-md">Quick Links</h4>
            <ul className="space-y-sm">
              <li><a className="text-white/70 hover:text-white transition-colors" href="/products">Industrial Units</a></li>
              <li><a className="text-white/70 hover:text-white transition-colors" href="#">Technical Papers</a></li>
              <li><a className="text-white/70 hover:text-white transition-colors" href="/about">Media Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps text-primary-container mb-md">Compliance</h4>
            <ul className="space-y-sm">
              <li><a className="text-white/70 hover:text-white transition-colors" href="#">ISO Certifications</a></li>
              <li><a className="text-white/70 hover:text-white transition-colors" href="#">Environmental Policy</a></li>
              <li><a className="text-white/70 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-label-caps text-primary-container mb-md">Headquarters</h4>
            <p className="font-body-md text-white/80 leading-relaxed">
              Plot No. 124, GIDC Estate,<br/>
              Phase-II, Metoda,<br/>
              Rajkot - 360021, Gujarat.
            </p>
            <p className="mt-sm font-bold text-white">T: +91 2827 2872XX</p>
          </div>
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-md pt-xl mt-xl border-t border-white/10 text-center font-label-caps text-[10px] text-white/40">
          © 2024 RadheGroup Industrial Holdings. Precision Engineering & Global Logistics.
        </div>
      </footer>
      
      {/* Floating Widgets */}
      <div className="fixed bottom-md right-md flex flex-col gap-sm z-40 items-end">
        <a className="interactive-element w-14 h-14 bg-[#22c55e] rounded-full flex items-center justify-center text-white shadow-lg" href="https://wa.me/#">
          <span className="material-symbols-outlined">chat</span>
        </a>
        <a className="interactive-element w-14 h-14 bg-[#3b82f6] rounded-full flex items-center justify-center text-white shadow-lg" href="tel:+#">
          <span className="material-symbols-outlined">call</span>
        </a>
      </div>
    </>
  );
}
`;

// 2. Overwrite src/components/layout/footer.tsx
fs.writeFileSync('src/components/layout/footer.tsx', globalFooterJSX);

// 3. Add <Footer /> to layout.tsx
let layoutContent = fs.readFileSync('src/app/layout.tsx', 'utf8');
if (!layoutContent.includes('<Footer />')) {
  layoutContent = layoutContent.replace(
    /<\/main>/,
    '</main>\n          <Footer />'
  );
  fs.writeFileSync('src/app/layout.tsx', layoutContent);
}

// 4. Remove all hardcoded footers from all pages.
// A regex to match <footer ...> ... </footer>
const footerRemover = /<footer[\s\S]*?<\/footer>/gi;
// Also remove floating widgets if present
const widgetsRemover = /{\/\* Floating Widgets \*\/}[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;

const pages = [
  'src/app/page.tsx',
  'src/app/industries/page.tsx',
  'src/app/products/page.tsx',
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx'
];

pages.forEach(page => {
  if (fs.existsSync(page)) {
    let content = fs.readFileSync(page, 'utf8');
    
    // Specifically for homepage, remove its footer and widgets
    if (page === 'src/app/page.tsx') {
      content = content.replace(/{\/\* Animated Footer \*\/}[\s\S]*?<\/footer>/, '');
      content = content.replace(/{\/\* Floating Widgets \*\/}[\s\S]*?<\/div>(\s*)<\/div>(\s*)<\/div>(\s*)<\/div>(\s*)<\/div>(\s*)<\/div>/, ''); // The widgets block in page.tsx is a bit messy, let's just use string slicing or a more specific regex.
      // Let's just find "Floating Widgets" and delete till end of file minus closing tags
      const widgetIndex = content.indexOf('{/* Floating Widgets */}');
      if (widgetIndex !== -1) {
          const closingTags = content.substring(content.lastIndexOf('</>'));
          content = content.substring(0, widgetIndex) + closingTags;
      }
    } else {
      content = content.replace(footerRemover, '');
    }
    
    fs.writeFileSync(page, content);
    console.log("Cleaned up " + page);
  }
});

console.log("Global footer applied successfully.");
