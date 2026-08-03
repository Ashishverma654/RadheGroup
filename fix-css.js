const fs = require('fs');

const content = fs.readFileSync('C:\\\\Users\\\\akuma\\\\.gemini\\\\antigravity-ide\\\\brain\\\\2d185d46-e700-45c1-90ae-2873b9906f87\\\\.system_generated\\\\steps\\\\610\\\\content.md', 'utf-8');

// Extract config
const configMatch = content.match(/tailwind\.config\s*=\s*(\{[\s\S]*?\})\s*<\/script>/);
let themeVars = '';
if (configMatch) {
    const configStr = configMatch[1];
    // Evaluate to object
    let config;
    try {
        config = eval('(' + configStr + ')');
    } catch(e) {
        console.error("Failed to eval config", e);
    }
    
    if (config && config.theme && config.theme.extend) {
        const ext = config.theme.extend;
        themeVars += '\n@theme inline {\n';
        
        if (ext.colors) {
            for (const [k, v] of Object.entries(ext.colors)) {
                themeVars += `  --color-${k}: ${v};\n`;
            }
        }
        if (ext.spacing) {
            for (const [k, v] of Object.entries(ext.spacing)) {
                themeVars += `  --spacing-${k}: ${v};\n`;
            }
        }
        if (ext.fontFamily) {
            for (const [k, v] of Object.entries(ext.fontFamily)) {
                themeVars += `  --font-${k}: ${v.map(f => '"' + f + '"').join(', ')};\n`;
            }
        }
        if (ext.fontSize) {
            for (const [k, v] of Object.entries(ext.fontSize)) {
                // Tailwind v4 uses --text-* for fontSize or you can just use classes if generated
            }
        }
        if (ext.borderRadius) {
            for (const [k, v] of Object.entries(ext.borderRadius)) {
                const suffix = k === 'DEFAULT' ? '' : `-${k}`;
                themeVars += `  --radius${suffix}: ${v};\n`;
            }
        }
        
        themeVars += '}\n';
    }
}

// Extract styles
const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
let styles = '';
if (styleMatch) {
    styles = styleMatch[1];
}

// Read globals.css
let globalsCss = fs.readFileSync('C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app\\\\globals.css', 'utf-8');

globalsCss += '\n/* --- INJECTED FROM STITCH --- */\n';
globalsCss += themeVars;
globalsCss += styles;

fs.writeFileSync('C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app\\\\globals.css', globalsCss);
console.log("CSS updated!");
