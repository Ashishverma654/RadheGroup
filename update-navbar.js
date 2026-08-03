const fs = require('fs');

// 1. Rewrite src/components/layout/header.tsx
const headerCode = `"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '#', label: 'Industries' },
    { href: '/about', label: 'About Us' },
    { href: '#', label: 'Quality' },
    { href: '/contact', label: 'Global Presence' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 dark:bg-inverse-surface/95 backdrop-blur-md shadow-sm border-b border-outline-variant/30">
      <div className="flex justify-between items-center h-20 px-md max-w-[1280px] mx-auto">
        <Link href="/" className="font-display-lg text-headline-sm md:text-display-lg font-bold text-primary dark:text-inverse-primary tracking-tight">
          RadheGroup
        </Link>
        <div className="hidden md:flex items-center gap-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={\`font-subheader text-subheader transition-colors \${
                  isActive 
                    ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                    : 'text-on-surface-variant hover:text-primary'
                }\`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-sm">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 active:scale-90"
          >
            <span className="material-symbols-outlined">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <Link href="/contact" className="bg-primary-container text-on-primary-container px-md py-2 font-subheader text-subheader font-bold rounded-lg hover:brightness-110 active:scale-95 transition-all">
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
`;
fs.writeFileSync('src/components/layout/header.tsx', headerCode);

// 2. Update layout.tsx to render the Header
let layoutCode = fs.readFileSync('src/app/layout.tsx', 'utf-8');
if (!layoutCode.includes('<Header />')) {
  layoutCode = layoutCode.replace(
    '<main className="flex-1">',
    '<Header />\n          <main className="flex-1 pt-20">' // added pt-20 to offset the fixed nav
  );
  fs.writeFileSync('src/app/layout.tsx', layoutCode);
}

// 3. Remove hardcoded navs from all pages
function removeNav(file, regex) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    content = content.replace(regex, '');
    fs.writeFileSync(file, content);
  }
}

// page.tsx
removeNav(
  'src/app/page.tsx', 
  /\{\/\* Global TopNavBar \*\/\}\n<nav className="fixed top-0 w-full z-50.*?<\/nav>\n/s
);

// products/page.tsx
removeNav(
  'src/app/products/page.tsx', 
  /\{\/\* Header \*\/\}\n<header className="fixed top-0 w-full z-50.*?<\/header>\n/s
);

// about/page.tsx
removeNav(
  'src/app/about/page.tsx', 
  /\{\/\* TopNavBar \*\/\}\n\s*<nav className="fixed top-0 left-0 w-full z-50.*?<\/nav>\n/s
);

// contact/page.tsx
removeNav(
  'src/app/contact/page.tsx', 
  /\{\/\* TopNavBar \*\/\}\n\s*<nav className="fixed top-0 left-0 w-full z-50.*?<\/nav>\n/s
);

console.log('Global navbar implemented successfully!');
