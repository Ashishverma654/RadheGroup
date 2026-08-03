const fs = require('fs');
const path = require('path');

function htmlToJsx(html) {
    // Basic conversion
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
        .replace(/<link([^>]*[^/])>/g, '<link$1 />')
        // Inline styles object conversion is tricky, for now we will remove script tags and style tags
        // and only keep the main body content.
        
    // Extract the content inside <body>...</body>
    const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
        jsx = bodyMatch[1];
    }
    
    // Remove the STITCH_THREEJS script and add placeholder if needed
    jsx = jsx.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    // Remove the onclick inline handlers for now as they're not valid JSX unless function
    jsx = jsx.replace(/onClick="[^"]*"/gi, '');
    
    // Convert style="display:block;width:100%;height:100%;min-height:200px;" to style={{display:'block',width:'100%',height:'100%',minHeight:'200px'}}
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
    // Any initialization logic can go here
  }, []);

  return (
    <>
      ${jsx}
    </>
  );
}
`;
}

// Convert Homepage
const homeContent = fs.readFileSync('C:\\\\Users\\\\akuma\\\\.gemini\\\\antigravity-ide\\\\brain\\\\2d185d46-e700-45c1-90ae-2873b9906f87\\\\.system_generated\\\\steps\\\\610\\\\content.md', 'utf-8');
const homeHtml = homeContent.split('---')[1] || homeContent;
fs.writeFileSync('C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app\\\\page.tsx', htmlToJsx(homeHtml));

// Convert Product Page
const productContent = fs.readFileSync('C:\\\\Users\\\\akuma\\\\.gemini\\\\antigravity-ide\\\\brain\\\\2d185d46-e700-45c1-90ae-2873b9906f87\\\\.system_generated\\\\steps\\\\603\\\\content.md', 'utf-8');
const productHtml = productContent.split('---')[1] || productContent;
fs.writeFileSync('C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app\\\\products\\\\page.tsx', htmlToJsx(productHtml));

console.log('Conversion completed.');
