const fs = require('fs');

const filesToFix = [
  'C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app\\\\page.tsx',
  'C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app\\\\products\\\\page.tsx'
];

const useEffectCode = `
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
`;

filesToFix.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf-8');
  
  // Replace the empty useEffect with the observer one
  content = content.replace(/useEffect\(\(\) => \{\s*\/\/ Any initialization logic can go here\s*\}, \[\]\);/, useEffectCode);
  
  fs.writeFileSync(file, content);
  console.log('Fixed reveal-on-scroll in', file);
});
