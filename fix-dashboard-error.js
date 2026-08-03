const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const animatedStatCode = `
function AnimatedStat({ value, suffix = '', isFloat = false }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setCount(easeOut * value);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, value]);

  const displayValue = isFloat ? count.toFixed(1) : Math.floor(count).toLocaleString();

  return <span ref={ref}>{displayValue}{suffix}</span>;
}
`;

if (!content.includes('function AnimatedStat')) {
    content = content.replace(
        "import React, { useEffect } from 'react';",
        "import React, { useEffect, useState } from 'react';\n\n" + animatedStatCode
    );
    fs.writeFileSync('src/app/page.tsx', content);
    console.log('Fixed AnimatedStat component');
} else {
    console.log('Already fixed');
}
