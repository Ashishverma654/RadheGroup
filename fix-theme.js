const fs = require('fs');
const path = 'src/app/globals.css';
let css = fs.readFileSync(path, 'utf8');

// Fix the Tailwind custom-variant
css = css.replace('@custom-variant dark (&:is(.dark *));', '@custom-variant dark (&:where(.dark, .dark *));');

// Fix the conflicting theme variables by using CSS variables instead of hardcoded hex colors
css = css.replace('--color-background: #f8f9ff;', '--color-background: var(--background);');
css = css.replace('--color-on-background: #0d1c2f;', '--color-on-background: var(--foreground);');
css = css.replace('--color-surface: #f8f9ff;', '--color-surface: var(--card);');
css = css.replace('--color-on-surface: #0d1c2f;', '--color-on-surface: var(--card-foreground);');
css = css.replace('--color-surface-variant: #d5e3fd;', '--color-surface-variant: var(--muted);');
css = css.replace('--color-on-surface-variant: #534434;', '--color-on-surface-variant: var(--muted-foreground);');
css = css.replace('--color-primary: #855300;', '--color-primary: var(--primary);');
css = css.replace('--color-on-primary: #ffffff;', '--color-on-primary: var(--primary-foreground);');
css = css.replace('--color-secondary: #565e74;', '--color-secondary: var(--secondary);');
css = css.replace('--color-on-secondary: #ffffff;', '--color-on-secondary: var(--secondary-foreground);');
css = css.replace('--color-error: #ba1a1a;', '--color-error: var(--destructive);');

// Make sure other pages that have hardcoded bg-white are updated to support dark mode.
// Actually, fixing globals.css might be enough for the background and surface.

fs.writeFileSync(path, css);
console.log('Fixed globals.css theme conflicts');
