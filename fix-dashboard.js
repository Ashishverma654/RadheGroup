const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Fix paddings
content = content.replace(
    '<section className="py-xl bg-inverse-surface reveal-on-scroll overflow-hidden relative">',
    '<section className="py-12 bg-inverse-surface reveal-on-scroll overflow-hidden relative">'
);
content = content.replace(
    '<div className="flex flex-col md:flex-row justify-between items-end gap-md mb-xl">',
    '<div className="flex flex-col md:flex-row justify-between items-end gap-md mb-8">'
);

// 2. Inject AnimatedStat component at the top after imports
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

content = content.replace(
    "import { useRouter } from 'next/navigation';",
    "import { useRouter } from 'next/navigation';\n" + animatedStatCode
);

// 3. Replace static numbers with AnimatedStat
content = content.replace(
    '<span className="text-5xl">1250</span>',
    '<span className="text-5xl"><AnimatedStat value={1250} /></span>'
);

content = content.replace(
    '<span className="text-5xl">10,432</span>',
    '<span className="text-5xl"><AnimatedStat value={10432} /></span>'
);

content = content.replace(
    '<div className="font-stat-value text-primary-container text-5xl">42</div>',
    '<div className="font-stat-value text-primary-container text-5xl"><AnimatedStat value={42} /></div>'
);

content = content.replace(
    '<div className="font-stat-value text-primary-container text-5xl">99.8%</div>',
    '<div className="font-stat-value text-primary-container text-5xl"><AnimatedStat value={99.8} isFloat={true} suffix="%" /></div>'
);

fs.writeFileSync('src/app/page.tsx', content);
console.log('Dashboard fixed: paddings reduced and dynamic animations added.');
