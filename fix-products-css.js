const fs = require('fs');
const cssPath = 'C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app\\\\globals.css';

let css = fs.readFileSync(cssPath, 'utf8');

const missingCss = `

@layer utilities {
    .technical-grid {
        background-size: 40px 40px;
        background-image: linear-gradient(to right, rgba(245, 158, 11, 0.05) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(245, 158, 11, 0.05) 1px, transparent 1px);
    }
    .glass-dark {
        background: rgba(15, 29, 48, 0.85);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .active-tab {
        background-color: #f59e0b !important;
        color: #0d1c2f !important;
    }
    .cad-preview {
        background-color: #0d1c2f;
        background-image: 
            radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0);
        background-size: 20px 20px;
    }
    .glow-hover:hover {
        box-shadow: 0 0 25px 2px rgba(245, 158, 11, 0.35);
        border-color: rgba(245, 158, 11, 0.5) !important;
    }
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .reveal.visible {
        opacity: 1;
        transform: translateY(0);
    }
}
`;

if (!css.includes('.technical-grid')) {
    fs.appendFileSync(cssPath, missingCss);
    console.log('Appended missing product page CSS to globals.css');
} else {
    console.log('CSS already exists');
}
