const fs = require('fs');

function htmlToJsx(html) {
    let jsx = html
        .replace(/class=/g, 'className=')
        .replace(/<!--/g, '{/*')
        .replace(/-->/g, '*/}')
        .replace(/onclick=/gi, 'onClick=')
        .replace(/<br>/g, '<br />')
        .replace(/<hr>/g, '<hr />')
        .replace(/<img([^>]*[^/])>/g, '<img$1 />')
        .replace(/<input([^>]*[^/])>/g, '<input$1 />')
        .replace(/<meta([^>]*[^/])>/g, '<meta$1 />')
        .replace(/<link([^>]*[^/])>/g, '<link$1 />');
        
    const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
        jsx = bodyMatch[1];
    }
    
    // SAFE non-greedy script tag removal
    jsx = jsx.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
    
    // Remove inline onclick
    jsx = jsx.replace(/onClick="[^"]*"/gi, '');
    
    // Convert style attributes
    jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
        const styles = p1.split(';').filter(s => s.trim() !== '').map(s => {
            const [key, value] = s.split(':');
            if(!key || !value) return '';
            const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            return `${camelKey}: '${value.trim()}'`;
        }).join(', ');
        return `style={{${styles}}}`;
    });

    return `
"use client"
import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      ${jsx}
    </>
  );
}
`;
}

const productContent = fs.readFileSync('C:\\\\Users\\\\akuma\\\\.gemini\\\\antigravity-ide\\\\brain\\\\2d185d46-e700-45c1-90ae-2873b9906f87\\\\.system_generated\\\\steps\\\\603\\\\content.md', 'utf-8');
const separatorIndex = productContent.indexOf('---');
let productHtml = separatorIndex !== -1 ? productContent.substring(separatorIndex + 3) : productContent;
let result = htmlToJsx(productHtml);

// Fix image URLs
// We will replace lh3.googleusercontent.com URLs with our local images appropriately
result = result.replace(/https:\/\/lh3\.googleusercontent\.com\/aida-public\/AB6AXuBDdDjNnJNPFsVp8Gu5MsgHwpaRDGo5UFq34Lk1fM4AFeew25dM3oU0rkxLtRgdmODXXpEJJL2KbWl2sXq9SemjV1YqTl3R6rt6sNcd5QhHqO1hyE-e_I0fcs2CCdIaHRfqgN01ALslNeBTwFKr6trgeyTjpNx13O8gge8KBVfXJffuFha3WqrK1CDJB3J5WeukZ9DSE9WyVoX1BEBcZ7Ya9BTxR_PuWB78ds1RWfpIQg87WMnvPtTE/g, '/images/products/stats-bg.png'); // Example replacement, but let's just make sure they don't break

// Write to file
fs.writeFileSync('C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app\\\\products\\\\page.tsx', result);
console.log('Product page regenerated completely.');
