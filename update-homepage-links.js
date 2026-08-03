const fs = require('fs');

const pageFile = 'src/app/page.tsx';
let content = fs.readFileSync(pageFile, 'utf8');

// 1. Remove the Precision Product Finder section
const productFinderStart = '{/* Precision Product Finder */}';
const companiesStart = '{/* Core Companies Section */}';

const startIndex = content.indexOf(productFinderStart);
const endIndex = content.indexOf(companiesStart);

if (startIndex !== -1 && endIndex !== -1) {
    content = content.substring(0, startIndex) + content.substring(endIndex);
}

// 2. Update links for the companies
// Since we have specific companies in order, we can replace them sequentially or using unique identifiers.
content = content.replace(
    '<h3 className="font-headline-sm text-headline-sm mb-xs">Radhe Technocast</h3>\n<p className="font-body-md text-sm mb-md opacity-80">High-precision investment castings and CNC machining.</p>\n<a className="inline-flex items-center gap-xs text-primary-container font-bold" href="#">',
    '<h3 className="font-headline-sm text-headline-sm mb-xs">Radhe Technocast</h3>\n<p className="font-body-md text-sm mb-md opacity-80">High-precision investment castings and CNC machining.</p>\n<a className="inline-flex items-center gap-xs text-primary-container font-bold" href="https://radhetechnocast.com" target="_blank" rel="noopener noreferrer">'
);

content = content.replace(
    '<h3 className="font-headline-sm text-headline-sm mb-xs">Flow Marshal Valves</h3>\n<p className="font-body-md text-sm mb-md opacity-80">Premium industrial gate, globe, and check valves.</p>\n<a className="inline-flex items-center gap-xs text-primary-container font-bold" href="#">',
    '<h3 className="font-headline-sm text-headline-sm mb-xs">Flow Marshal Valves</h3>\n<p className="font-body-md text-sm mb-md opacity-80">Premium industrial gate, globe, and check valves.</p>\n<a className="inline-flex items-center gap-xs text-primary-container font-bold" href="https://flowmarshal.com" target="_blank" rel="noopener noreferrer">'
);

content = content.replace(
    '<h3 className="font-headline-sm text-headline-sm mb-xs">Radhe Industries</h3>\n<p className="font-body-md text-sm mb-md opacity-80">Heavy duty sand casting and forging solutions.</p>\n<a className="inline-flex items-center gap-xs text-primary-container font-bold" href="#">',
    '<h3 className="font-headline-sm text-headline-sm mb-xs">Radhe Industries</h3>\n<p className="font-body-md text-sm mb-md opacity-80">Heavy duty sand casting and forging solutions.</p>\n<a className="inline-flex items-center gap-xs text-primary-container font-bold" href="https://radheindustries.com" target="_blank" rel="noopener noreferrer">'
);

content = content.replace(
    '<h3 className="font-headline-sm text-headline-sm mb-xs">Radhe Alloys</h3>\n<p className="font-body-md text-sm mb-md opacity-80">Specialized alloy round bars for chemical plants.</p>\n<a className="inline-flex items-center gap-xs text-primary-container font-bold" href="#">',
    '<h3 className="font-headline-sm text-headline-sm mb-xs">Radhe Alloys</h3>\n<p className="font-body-md text-sm mb-md opacity-80">Specialized alloy round bars for chemical plants.</p>\n<a className="inline-flex items-center gap-xs text-primary-container font-bold" href="https://radhealloys.com" target="_blank" rel="noopener noreferrer">'
);


// 3. (Optional cleanup) We added useState and useRouter for the product finder, we can remove them if they are unused now.
content = content.replace("import React, { useEffect, useState } from 'react';\nimport { useRouter } from 'next/navigation';", "import React, { useEffect } from 'react';");
content = content.replace(/const router = useRouter\(\);[\s\S]*?const handleSearch = \(\) => {[\s\S]*?};/, '');


fs.writeFileSync(pageFile, content);
console.log('Homepage updated: Product finder removed, company links added.');
