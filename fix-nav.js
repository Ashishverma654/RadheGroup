const fs = require('fs');

// 1. Fix link in page.tsx
let homeContent = fs.readFileSync('src/app/page.tsx', 'utf-8');
homeContent = homeContent.replace(
  /<a className="font-subheader text-subheader text-on-surface-variant hover:text-primary transition-colors" href="#">About Us<\/a>/g,
  '<a className="font-subheader text-subheader text-on-surface-variant hover:text-primary transition-colors" href="/about">About Us</a>'
);
fs.writeFileSync('src/app/page.tsx', homeContent);

// 2. Fix link in products/page.tsx
let prodContent = fs.readFileSync('src/app/products/page.tsx', 'utf-8');
prodContent = prodContent.replace(
  /<a className="font-subheader text-subheader text-on-surface-variant hover:text-primary transition-colors" href="#">About Us<\/a>/g,
  '<a className="font-subheader text-subheader text-on-surface-variant hover:text-primary transition-colors" href="/about">About Us</a>'
);
fs.writeFileSync('src/app/products/page.tsx', prodContent);

// 3. Add Nav Bar to about/page.tsx
let aboutContent = fs.readFileSync('src/app/about/page.tsx', 'utf-8');

const navBarHtml = `
      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-lg py-sm max-w-[1280px] mx-auto bg-white/90 dark:bg-[#0f1d30]/90 backdrop-blur-md border-b border-outline-variant/20 shadow-md">
        <a href="/" className="font-headline-sm text-headline-sm font-bold text-primary-container tracking-tight">RADHE GROUP</a>
        <div className="hidden md:flex items-center gap-md">
          <a className="font-subheader text-subheader text-on-surface-variant hover:text-primary transition-colors duration-300" href="/">Home</a>
          <a className="font-subheader text-subheader text-on-surface-variant hover:text-primary transition-colors duration-300" href="/products">Products</a>
          <a className="font-subheader text-subheader text-primary border-b-2 border-primary pb-1" href="/about">About</a>
          <a className="font-subheader text-subheader text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">ESG</a>
          <a className="font-subheader text-subheader text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">QA</a>
        </div>
        <button className="bg-primary-container text-[#0f172a] font-subheader text-subheader font-bold px-sm py-xs rounded hover:brightness-110 transition-colors scale-95 duration-200" style={{boxShadow: '0 2px 0 0 rgba(0,0,0,0.1) inset'}}>Get Quote</button>
      </nav>
`;

if (!aboutContent.includes("TopNavBar")) {
  aboutContent = aboutContent.replace(
    "{/* Hero Section */}",
    navBarHtml + "\n      {/* Hero Section */}"
  );
  fs.writeFileSync('src/app/about/page.tsx', aboutContent);
}

console.log("Navigation links fixed and NavBar added to About page!");
