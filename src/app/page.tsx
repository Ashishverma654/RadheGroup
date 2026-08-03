
"use client"
import React, { useEffect, useState } from 'react';


function AnimatedStat({ value, suffix = '', isFloat = false }: { value: number; suffix?: string; isFloat?: boolean }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLSpanElement>(null);

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
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
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


export default function Page() {
  

  
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


  return (
    <>
      
{/* Hero Section Slider */}
<section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="hero-slide active">
<img alt="Facility" className="w-full h-full object-cover" src="/images/products/hero-slider-1.png"/>
</div>
<div className="hero-slide">
<img alt="Precision" className="w-full h-full object-cover" src="/images/products/hero-slider-2.png"/>
</div>
<div className="hero-slide">
<img alt="Logistics" className="w-full h-full object-cover" src="/images/products/hero-slider-3.png"/>
</div>
<div className="absolute inset-0 bg-black/50 z-10"></div>
</div>
<div className="relative z-20 max-w-[1280px] mx-auto px-md w-full reveal-on-scroll">
<div className="max-w-[42rem]">
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-sm drop-shadow-2xl">
                Forging the Future of Industry
            </h1>
<p className="font-body-lg text-body-lg text-white/90 mb-lg max-w-[32rem] leading-relaxed">
                Precision engineering meets uncompromising quality across all our manufacturing wings. Powering global infrastructure with elite industrial solutions.
            </p>
<div className="flex flex-wrap gap-md">
<button className="interactive-element bg-primary-container text-on-primary-container px-xl py-md font-subheader text-subheader font-bold rounded shadow-xl">
                    Explore Companies
                </button>
<button className="interactive-element border-2 border-white text-white px-xl py-md font-subheader text-subheader font-bold rounded hover:bg-white/10">
                    Products Catalog
                </button>
</div>
</div>
</div>
</section>
{/* Global Export Banner (Marquee) */}
<section className="bg-surface-container py-md border-y border-outline-variant/30 overflow-hidden reveal-on-scroll">
<div className="marquee-content gap-md items-center">

<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="INDIA (HQ)" className="absolute inset-0 w-full h-full object-cover transition-all duration-300" src="https://flagcdn.com/w160/in.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">INDIA (HQ)</span>
</div>
<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="UNITED STATES" className="absolute inset-0 w-full h-full object-cover transition-all duration-300" src="https://flagcdn.com/w160/us.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">UNITED STATES</span>
</div>
<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="GERMANY" className="absolute inset-0 w-full h-full object-cover transition-all duration-300" src="https://flagcdn.com/w160/de.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">GERMANY</span>
</div>
<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="SAUDI ARABIA" className="absolute inset-0 w-full h-full object-cover transition-all duration-300" src="https://flagcdn.com/w160/sa.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">SAUDI ARABIA</span>
</div>
<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="FRANCE" className="absolute inset-0 w-full h-full object-cover transition-all duration-300" src="https://flagcdn.com/w160/fr.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">FRANCE</span>
</div>
<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="UAE" className="absolute inset-0 w-full h-full object-cover transition-all duration-300" src="https://flagcdn.com/w160/ae.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">UAE</span>
</div>

<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="INDIA (HQ)" className="absolute inset-0 w-full h-full object-cover transition-all duration-300" src="https://flagcdn.com/w160/in.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">INDIA (HQ)</span>
</div>
<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="UNITED STATES" className="absolute inset-0 w-full h-full object-cover transition-all duration-300" src="https://flagcdn.com/w160/us.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">UNITED STATES</span>
</div>
<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="GERMANY" className="absolute inset-0 w-full h-full object-cover transition-all duration-300" src="https://flagcdn.com/w160/de.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">GERMANY</span>
</div>
<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="SAUDI ARABIA" className="absolute inset-0 w-full h-full object-cover transition-all duration-300" src="https://flagcdn.com/w160/sa.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">SAUDI ARABIA</span>
</div>
<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="FRANCE" className="absolute inset-0 w-full h-full object-cover transition-all duration-300" src="https://flagcdn.com/w160/fr.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">FRANCE</span>
</div>
<div className="relative w-48 h-12 rounded-lg overflow-hidden flex items-center justify-center group flex-shrink-0">
<img alt="UAE" className="absolute inset-0 w-full h-full object-cover transition-all duration-300" src="https://flagcdn.com/w160/ae.png"/>
<div className="absolute inset-0 bg-black/40"></div>
<span className="relative font-label-caps text-white font-bold tracking-widest">UAE</span>
</div>
</div>
</section>
{/* Core Companies Section */}
<section className="py-12 max-w-[1280px] mx-auto px-md reveal-on-scroll">
<div className="mb-lg">
<span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">The Ecosystem</span>
<h2 className="font-headline-md text-headline-md mt-base text-on-surface">Our Specialized Engineering Wings</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
<div className="interactive-element relative group overflow-hidden p-md border border-outline-variant/30 rounded-xl min-h-[300px] flex flex-col justify-end">
<img alt="Technocast" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="/images/stitch/technocast.jpg"/>
<div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
<div className="relative z-10 text-white">
<div className="w-10 h-10 bg-primary-container/20 rounded-lg flex items-center justify-center mb-sm">
<span className="material-symbols-outlined text-primary-container" data-icon="settings">settings</span>
</div>
<h3 className="font-headline-sm text-headline-sm mb-xs">Radhe Technocast</h3>
<p className="font-body-md text-sm mb-md opacity-80">High-precision investment castings and CNC machining.</p>
<a className="inline-flex items-center gap-xs text-primary-container font-bold" href="https://radhetechnocast.com" target="_blank" rel="noopener noreferrer">
                    Visit Website <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</a>
</div>
</div>
<div className="interactive-element relative group overflow-hidden p-md border border-outline-variant/30 rounded-xl min-h-[300px] flex flex-col justify-end">
<img alt="Valves" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="/images/stitch/valves.jpg"/>
<div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
<div className="relative z-10 text-white">
<div className="w-10 h-10 bg-primary-container/20 rounded-lg flex items-center justify-center mb-sm">
<span className="material-symbols-outlined text-primary-container" data-icon="opacity">opacity</span>
</div>
<h3 className="font-headline-sm text-headline-sm mb-xs">Flow Marshal Valves</h3>
<p className="font-body-md text-sm mb-md opacity-80">Premium industrial gate, globe, and check valves.</p>
<a className="inline-flex items-center gap-xs text-primary-container font-bold" href="https://flowmarshal.com" target="_blank" rel="noopener noreferrer">
                    Visit Website <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</a>
</div>
</div>
<div className="interactive-element relative group overflow-hidden p-md border border-outline-variant/30 rounded-xl min-h-[300px] flex flex-col justify-end">
<img alt="Foundry" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="/images/stitch/foundry-ladle.jpg"/>
<div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
<div className="relative z-10 text-white">
<div className="w-10 h-10 bg-primary-container/20 rounded-lg flex items-center justify-center mb-sm">
<span className="material-symbols-outlined text-primary-container" data-icon="factory">factory</span>
</div>
<h3 className="font-headline-sm text-headline-sm mb-xs">Radhe Industries</h3>
<p className="font-body-md text-sm mb-md opacity-80">Heavy duty sand casting and forging solutions.</p>
<a className="inline-flex items-center gap-xs text-primary-container font-bold" href="https://radheindustries.com" target="_blank" rel="noopener noreferrer">
                    Visit Website <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</a>
</div>
</div>
<div className="interactive-element relative group overflow-hidden p-md border border-outline-variant/30 rounded-xl min-h-[300px] flex flex-col justify-end">
<img alt="Alloys" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="/images/products/hero-alloys.png"/>
<div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors"></div>
<div className="relative z-10 text-white">
<div className="w-10 h-10 bg-primary-container/20 rounded-lg flex items-center justify-center mb-sm">
<span className="material-symbols-outlined text-primary-container" data-icon="handyman">handyman</span>
</div>
<h3 className="font-headline-sm text-headline-sm mb-xs">Radhe Alloys</h3>
<p className="font-body-md text-sm mb-md opacity-80">Specialized alloy round bars for chemical plants.</p>
<a className="inline-flex items-center gap-xs text-primary-container font-bold" href="https://radhealloys.com" target="_blank" rel="noopener noreferrer">
                    Visit Website <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</a>
</div>
</div>
</div>
</section>
{/* Technological Infrastructure Section */}
<section className="relative py-12 overflow-hidden reveal-on-scroll">
<div className="absolute inset-0 z-0">
<img alt="Industrial Motion" className="w-full h-full object-cover zoom-bg" src="/images/stitch/infra-cnc.jpg"/>
<div className="absolute inset-0 bg-inverse-surface/80"></div>
</div>
<div className="relative z-10 max-w-[1280px] mx-auto px-md">
<div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
<div>
<span className="font-label-caps text-primary-container tracking-widest uppercase">Innovation Hub</span>
<h2 className="font-headline-md text-headline-md text-white mt-base mb-md">Technological Infrastructure</h2>
<p className="text-white/80 mb-lg font-body-lg">We invest in the future of manufacturing through integrated robotic systems and proprietary metallurgical research.</p>
<ul className="space-y-sm">
<li className="flex items-center gap-sm text-white">
<span className="material-symbols-outlined text-primary-container">precision_manufacturing</span>
<span>Fully automated robotic forging cells</span>
</li>
<li className="flex items-center gap-sm text-white">
<span className="material-symbols-outlined text-primary-container">science</span>
<span>In-house NDT and chemical analysis lab</span>
</li>
<li className="flex items-center gap-sm text-white">
<span className="material-symbols-outlined text-primary-container">terminal</span>
<span>ERP-driven supply chain management</span>
</li>
</ul>
</div>
<div className="bg-white/5 backdrop-blur-md p-md rounded-xl border border-white/10">
<div className="aspect-video bg-black/40 rounded flex items-center justify-center text-white/50 relative overflow-hidden">
<img alt="Process" className="w-full h-full object-cover opacity-60" src="/images/stitch/infra-cnc.jpg"/>
<span className="material-symbols-outlined text-6xl absolute">play_circle</span>
</div>
</div>
</div>
</div>
</section>
{/* Interactive Technical Deep-Dive */}
<section className="py-xl bg-surface reveal-on-scroll">
<div className="max-w-[1280px] mx-auto px-md">
<div className="mb-lg text-center">
<span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Deep Tech</span>
<h2 className="font-headline-md text-headline-md mt-base text-on-surface">Exploded View: Flow Marshal Valve</h2>
</div>
<div className="relative bg-surface-container rounded-3xl overflow-hidden border border-outline-variant/30 aspect-video md:aspect-[21/9]">
<img alt="Valve Exploded" className="w-full h-full object-cover opacity-50" src="/images/stitch/valves.jpg"/>
{/* Hotspots */}
<div className="hotspot top-[30%] left-[45%]">
<div className="hotspot-label">
<p className="font-bold border-b border-white/20 mb-1 pb-1">Precision Stem</p>
<p>Pressure Rating: 2500 PSI</p>
<p>Material: ASTM A216 WCB</p>
</div>
</div>
<div className="hotspot top-[60%] left-[25%]">
<div className="hotspot-label">
<p className="font-bold border-b border-white/20 mb-1 pb-1">Sealing Flange</p>
<p>Tolerance: +/- 0.005mm</p>
<p>Leak Class: VI Zero Leakage</p>
</div>
</div>
<div className="hotspot top-[50%] left-[70%]">
<div className="hotspot-label">
<p className="font-bold border-b border-white/20 mb-1 pb-1">Actuator Port</p>
<p>ISO 5211 Standard Mounting</p>
<p>Interface: High Torque Gear</p>
</div>
</div>
<div className="absolute bottom-md right-md bg-white/10 backdrop-blur-md p-md rounded-xl border border-white/20">
<p className="text-xs font-label-caps text-on-surface opacity-60">Interactive Schematic v2.4</p>
<p className="text-sm font-bold text-primary">Hover markers for technical specs</p>
</div>
</div>
</div>
</section>
{/* Real-Time Precision Dashboard */}
<section className="py-12 bg-inverse-surface reveal-on-scroll overflow-hidden relative">
<div className="absolute inset-0 opacity-5">
<div className="h-full w-full bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px]"></div>
</div>
<div className="max-w-[1280px] mx-auto px-md relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end gap-md mb-8">
<div>
<span className="font-label-caps text-primary-container tracking-widest uppercase">Live Operations</span>
<h2 className="font-headline-md text-headline-md text-white mt-base">Precision Manufacturing Dashboard</h2>
</div>
<div className="flex items-center gap-sm bg-white/5 px-md py-sm rounded-full border border-white/10">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-white/60 text-xs font-label-caps">SYSTEMS OPTIMIZED</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-md">
<div className="bg-white/5 border border-white/10 p-lg rounded-2xl group hover:border-primary-container transition-all">
<p className="text-white/60 text-xs font-label-caps mb-sm">CURRENT FURNACE TEMP</p>
<div className="font-stat-value text-primary-container flex items-baseline gap-xs">
<span className="text-5xl"><AnimatedStat value={1250} /></span><span className="text-xl">°C</span>
</div>
<div className="w-full bg-white/10 h-1 mt-md rounded-full overflow-hidden">
<div className="bg-primary-container h-full w-[85%] animate-[progress_3s_ease-out]"></div>
</div>
</div>
<div className="bg-white/5 border border-white/10 p-lg rounded-2xl group hover:border-primary-container transition-all">
<p className="text-white/60 text-xs font-label-caps mb-sm">ANNUAL TONNAGE</p>
<div className="font-stat-value text-primary-container flex items-baseline gap-xs">
<span className="text-5xl"><AnimatedStat value={10432} /></span><span className="text-xl">+</span>
</div>
<div className="mt-md flex gap-xs">
<span className="w-1 h-4 bg-primary-container/20"></span>
<span className="w-1 h-6 bg-primary-container/40"></span>
<span className="w-1 h-8 bg-primary-container"></span>
<span className="w-1 h-5 bg-primary-container/60"></span>
</div>
</div>
<div className="bg-white/5 border border-white/10 p-lg rounded-2xl group hover:border-primary-container transition-all">
<p className="text-white/60 text-xs font-label-caps mb-sm">ACTIVE SHIPMENTS</p>
<div className="font-stat-value text-primary-container text-5xl"><AnimatedStat value={42} /></div>
<p className="text-xs text-white/40 mt-md">GLOBAL DESTINATIONS</p>
</div>
<div className="bg-white/5 border border-white/10 p-lg rounded-2xl group hover:border-primary-container transition-all">
<p className="text-white/60 text-xs font-label-caps mb-sm">QUALITY RATING</p>
<div className="font-stat-value text-primary-container text-5xl"><AnimatedStat value={99.8} isFloat={true} suffix="%" /></div>
<div className="flex gap-1 mt-md">
<span className="material-symbols-outlined text-xs text-primary-container">star</span>
<span className="material-symbols-outlined text-xs text-primary-container">star</span>
<span className="material-symbols-outlined text-xs text-primary-container">star</span>
<span className="material-symbols-outlined text-xs text-primary-container">star</span>
<span className="material-symbols-outlined text-xs text-primary-container">star</span>
</div>
</div>
</div>
</div>
</section>
{/* Engineering Heritage Timeline */}
<section className="py-12 bg-surface overflow-hidden reveal-on-scroll">
<div className="max-w-[1280px] mx-auto px-md mb-6">
<span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Our Legacy</span>
<h2 className="font-headline-md text-headline-md mt-base text-on-surface">Engineering Milestones</h2>
</div>
<div className="overflow-x-auto custom-scrollbar pb-md">
<div className="flex gap-0 min-w-max px-md">
{/* 1998 */}
<div className="w-[300px] border-l-2 border-primary-container pl-md py-lg group">
<span className="font-stat-value text-primary-container text-2xl mb-xs block group-hover:scale-110 transition-transform origin-left"><AnimatedStat value={1998} /></span>
<h4 className="font-subheader font-bold text-on-surface mb-xs">Founding</h4>
<p className="text-sm text-on-surface-variant leading-relaxed">Establishment of the first foundry unit in Rajkot, Gujarat.</p>
</div>
{/* 2005 */}
<div className="w-[300px] border-l-2 border-primary-container/30 pl-md py-lg group">
<span className="font-stat-value text-primary/40 text-2xl mb-xs block group-hover:text-primary-container group-hover:scale-110 transition-all origin-left"><AnimatedStat value={2005} /></span>
<h4 className="font-subheader font-bold text-on-surface mb-xs">First Export</h4>
<p className="text-sm text-on-surface-variant leading-relaxed">Radhe Industries secures its first major international contract in the Middle East.</p>
</div>
{/* 2012 */}
<div className="w-[300px] border-l-2 border-primary-container/30 pl-md py-lg group">
<span className="font-stat-value text-primary/40 text-2xl mb-xs block group-hover:text-primary-container group-hover:scale-110 transition-all origin-left"><AnimatedStat value={2012} /></span>
<h4 className="font-subheader font-bold text-on-surface mb-xs">Technocast Launch</h4>
<p className="text-sm text-on-surface-variant leading-relaxed">State-of-the-art investment casting facility operationalized.</p>
</div>
{/* 2023 */}
<div className="w-[300px] border-l-2 border-primary-container/30 pl-md py-lg group">
<span className="font-stat-value text-primary/40 text-2xl mb-xs block group-hover:text-primary-container group-hover:scale-110 transition-all origin-left"><AnimatedStat value={2023} /></span>
<h4 className="font-subheader font-bold text-on-surface mb-xs">Global Expansion</h4>
<p className="text-sm text-on-surface-variant leading-relaxed">Strategic warehouses established in USA and Germany.</p>
</div>
{/* 2025 */}
<div className="w-[300px] border-l-2 border-primary-container/30 pl-md py-lg group">
<span className="font-stat-value text-primary/40 text-2xl mb-xs block group-hover:text-primary-container group-hover:scale-110 transition-all origin-left"><AnimatedStat value={2025} /></span>
<h4 className="font-subheader font-bold text-on-surface mb-xs">AI Foundry</h4>
<p className="text-sm text-on-surface-variant leading-relaxed">Integration of AI-driven defect detection across all wings.</p>
</div>
</div>
</div>
</section>
{/* Industries Interactive Grid */}
<section className="relative py-12 reveal-on-scroll overflow-hidden bg-surface dark:bg-[#111c2d]">
<div className="absolute inset-0 z-0 bg-[url('/images/stitch/valves.jpg')] bg-cover bg-center bg-fixed opacity-30 dark:opacity-10 mix-blend-overlay"></div>
<div className="relative z-10 max-w-[1280px] mx-auto px-md">
<div className="mb-lg text-center">
<span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Global Impact</span>
<h2 className="font-headline-md text-headline-md mt-base text-on-surface dark:text-white">Industries We Empower</h2>
<p className="mt-sm text-on-surface-variant dark:text-gray-300 max-w-[36rem] mx-auto">Interactive mapping of our strategic supply chain contributions.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-sm">
<div className="industry-card interactive-element cursor-pointer group relative overflow-hidden p-md border border-outline-variant/30 dark:border-white/10 rounded-xl" >
<img src="/images/stitch/valves.jpg" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500 z-0" />
         <div className="absolute inset-0 bg-[#0f1d30]/80 group-hover:bg-[#0f1d30]/60 transition-colors z-0"></div>
         <div className="relative z-10 flex flex-col items-center text-center text-white h-full justify-center">
<span className="material-symbols-outlined text-primary text-4xl mb-sm" data-icon="oil_barrel">oil_barrel</span>
<h4 className="font-subheader text-subheader font-bold text-white">Oil &amp; Gas</h4>
<div className="reveal-panel mt-sm text-sm text-white/80">
<ul className="list-disc text-left ml-md space-y-1">
<li>API 6D Certified Valves</li>
<li>Subsea Castings</li>
<li>High-Pressure Flanges</li>
</ul>
</div>
</div>
</div>
<div className="industry-card interactive-element cursor-pointer group relative overflow-hidden p-md border border-outline-variant/30 dark:border-white/10 rounded-xl" >
<img src="/images/products/hero-slider-3.png" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500 z-0" />
         <div className="absolute inset-0 bg-[#0f1d30]/80 group-hover:bg-[#0f1d30]/60 transition-colors z-0"></div>
         <div className="relative z-10 flex flex-col items-center text-center text-white h-full justify-center">
<span className="material-symbols-outlined text-primary text-4xl mb-sm" data-icon="water_drop">water_drop</span>
<h4 className="font-subheader text-subheader font-bold text-white">Water Management</h4>
<div className="reveal-panel mt-sm text-sm text-white/80">
<ul className="list-disc text-left ml-md space-y-1">
<li>Desalination Plant Parts</li>
<li>Pumping System Valves</li>
<li>Corrosion-Resistant Castings</li>
</ul>
</div>
</div>
</div>
<div className="industry-card interactive-element cursor-pointer group relative overflow-hidden p-md border border-outline-variant/30 dark:border-white/10 rounded-xl" >
<img src="/images/stitch/infra-cnc.jpg" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500 z-0" />
         <div className="absolute inset-0 bg-[#0f1d30]/80 group-hover:bg-[#0f1d30]/60 transition-colors z-0"></div>
         <div className="relative z-10 flex flex-col items-center text-center text-white h-full justify-center">
<span className="material-symbols-outlined text-primary text-4xl mb-sm" data-icon="bolt">bolt</span>
<h4 className="font-subheader text-subheader font-bold text-white">Power Generation</h4>
<div className="reveal-panel mt-sm text-sm text-white/80">
<ul className="list-disc text-left ml-md space-y-1">
<li>Turbine Housings</li>
<li>High-Temp Steam Valves</li>
<li>Nuclear-Grade Forgings</li>
</ul>
</div>
</div>
</div>
<div className="industry-card interactive-element cursor-pointer group relative overflow-hidden p-md border border-outline-variant/30 dark:border-white/10 rounded-xl" >
<img src="/images/products/hero-alloys.png" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500 z-0" />
         <div className="absolute inset-0 bg-[#0f1d30]/80 group-hover:bg-[#0f1d30]/60 transition-colors z-0"></div>
         <div className="relative z-10 flex flex-col items-center text-center text-white h-full justify-center">
<span className="material-symbols-outlined text-primary text-4xl mb-sm" data-icon="science">science</span>
<h4 className="font-subheader text-subheader font-bold text-white">Petrochemical</h4>
<div className="reveal-panel mt-sm text-sm text-white/80">
<ul className="list-disc text-left ml-md space-y-1">
<li>Chemical Process Valves</li>
<li>Specialty Alloy Castings</li>
<li>High-Tolerance Fittings</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Statistics & Trust */}
<section className="py-12 reveal-on-scroll">
<div className="max-w-[1280px] mx-auto px-md">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-lg mb-12">
<div className="text-center border-t-2 border-primary-container pt-md">
<div className="font-stat-value text-stat-value text-primary mb-xs"><AnimatedStat value={25} suffix="+" /></div>
<div className="font-label-caps text-label-caps text-on-surface-variant">YEARS EXPERIENCE</div>
</div>
<div className="text-center border-t-2 border-primary-container pt-md">
<div className="font-stat-value text-stat-value text-primary mb-xs"><AnimatedStat value={50} suffix="+" /></div>
<div className="font-label-caps text-label-caps text-on-surface-variant">COUNTRIES EXPORTED</div>
</div>
<div className="text-center border-t-2 border-primary-container pt-md">
<div className="font-stat-value text-stat-value text-primary mb-xs"><AnimatedStat value={500} suffix="+" /></div>
<div className="font-label-caps text-label-caps text-on-surface-variant">EXPERT EMPLOYEES</div>
</div>
<div className="text-center border-t-2 border-primary-container pt-md">
<div className="font-stat-value text-stat-value text-primary mb-xs"><AnimatedStat value={10} suffix="k+" /></div>
<div className="font-label-caps text-label-caps text-on-surface-variant">TONS ANNUALLY</div>
</div>
</div>
<div className="flex flex-wrap justify-center gap-lg items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<div className="interactive-element px-md py-sm bg-surface-container border border-outline-variant/30 font-bold text-on-surface hover:scale-110 hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer shadow-sm hover:shadow-lg">ISO 9001:2015</div>
<div className="interactive-element px-md py-sm bg-surface-container border border-outline-variant/30 font-bold text-on-surface hover:scale-110 hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer shadow-sm hover:shadow-lg">IBR APPROVED</div>
<div className="interactive-element px-md py-sm bg-surface-container border border-outline-variant/30 font-bold text-on-surface hover:scale-110 hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer shadow-sm hover:shadow-lg">ASME CERTIFIED</div>
<div className="interactive-element px-md py-sm bg-surface-container border border-outline-variant/30 font-bold text-on-surface hover:scale-110 hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer shadow-sm hover:shadow-lg">CE MARKING</div>
</div>
</div>
</section>
{/* About Teaser */}
<section className="grid grid-cols-1 md:grid-cols-2 reveal-on-scroll">
<div className="bg-inverse-surface p-xl flex items-center">
<div className="max-w-[28rem] mx-auto md:mx-0">
<span className="font-label-caps text-primary-container tracking-widest uppercase">Our Heritage</span>
<h2 className="font-headline-md text-headline-md text-white mt-base mb-md">Decades of Metallurgical Mastery</h2>
<p className="font-body-lg text-body-lg text-white/70 mb-lg leading-relaxed">
                Founded on the principles of precision and integrity, RadheGroup has grown from a local foundry into a global industrial titan.
            </p>
<button className="interactive-element bg-primary text-on-primary px-xl py-md font-subheader text-subheader font-bold rounded">
                Read Our Story
            </button>
</div>
</div>
<div className="relative h-[400px] md:h-auto overflow-hidden group">
<img alt="Industrial Casting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/images/stitch/hero-port.png"/>
<div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all"></div>
</div>
</section>

</>
  );
}
