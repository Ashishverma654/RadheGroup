
"use client"
import React, { useEffect } from 'react';
import Script from 'next/script';

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
      
{/* Hero Section */}
<section className="relative pt-40 pb-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
<img src="/images/stitch/valves.jpg" alt="Flow Marshal Valve" className="absolute inset-0 w-full h-full object-cover z-0" />
<div className="absolute inset-0 bg-[#0f1d30]/40 dark:bg-[#0a1220]/40 z-0 technical-grid"></div>
<div className="max-w-[1280px] w-full mx-auto px-md relative z-10 text-center flex flex-col items-center">
<div className="reveal inline-block px-sm py-xs border-l-4 border-primary-container bg-primary-container/20 mb-md backdrop-blur-sm shadow-sm">
<span className="text-primary-container font-label-caps uppercase drop-shadow-md text-white font-bold">Engineering Standard V.2024</span>
</div>
<h1 className="reveal font-display-lg text-display-lg text-white mb-sm drop-shadow-2xl">Technical Product Catalog</h1>
<div className="reveal w-32 h-1 bg-primary-container mb-lg drop-shadow-md"></div>
<p className="reveal text-white/90 font-body-lg max-w-[42rem] drop-shadow-md leading-relaxed">
    Explore our comprehensive range of high-precision industrial components. From ASME standard valves to advanced metallurgical alloys, engineered for extreme environments.
</p>
</div>
</section>
{/* 4-Division Tab Selector */}
<section className="relative z-20 -mt-32 pb-16">
<div className="max-w-[1280px] mx-auto px-md">
<div className="reveal grid grid-cols-2 md:grid-cols-4 gap-base border border-white/10 rounded-lg overflow-hidden glass-dark shadow-2xl">
<button className="tab-btn active-tab flex flex-col items-center justify-center py-lg transition-all duration-300 border-r border-white/5 relative overflow-hidden group" >
<img src="/images/stitch/technocast.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-500 z-0" />
<div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
<span className="material-symbols-outlined mb-xs text-3xl drop-shadow-md">precision_manufacturing</span>
<span className="text-xl font-bold tracking-wide drop-shadow-lg text-white">Radhe Technocast</span>
</div>
</button>
<button className="tab-btn bg-transparent text-white/60 hover:text-white dark:bg-[#1a2332] dark:border-gray-800/5 flex flex-col items-center justify-center py-lg transition-all duration-300 border-r border-white/5 relative overflow-hidden group" >
<img src="/images/stitch/valves.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-500 z-0" />
<div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
<span className="material-symbols-outlined mb-xs text-3xl drop-shadow-md">settings_input_component</span>
<span className="text-xl font-bold tracking-wide drop-shadow-lg text-white">Flow Marshal Valves</span>
</div>
</button>
<button className="tab-btn bg-transparent text-white/60 hover:text-white dark:bg-[#1a2332] dark:border-gray-800/5 flex flex-col items-center justify-center py-lg transition-all duration-300 border-r border-white/5 relative overflow-hidden group" >
<img src="/images/stitch/foundry-ladle.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-500 z-0" />
<div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
<span className="material-symbols-outlined mb-xs text-3xl drop-shadow-md">factory</span>
<span className="text-xl font-bold tracking-wide drop-shadow-lg text-white">Radhe Industries</span>
</div>
</button>
<button className="tab-btn bg-transparent text-white/60 hover:text-white dark:bg-[#1a2332] dark:border-gray-800/5 flex flex-col items-center justify-center py-lg transition-all duration-300 relative overflow-hidden group" >
<img src="/images/products/hero-alloys.png" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-500 z-0" />
<div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
<span className="material-symbols-outlined mb-xs text-3xl drop-shadow-md">biotech</span>
<span className="text-xl font-bold tracking-wide drop-shadow-lg text-white">Radhe Alloys</span>
</div>
</button>
</div>
</div>
</section>
{/* 360° Interactive Engineering Inspection Section */}
<section className="pt-16 pb-12 bg-surface-container-low overflow-hidden">
<div className="max-w-[1280px] mx-auto px-md">
<div className="reveal mb-lg text-center">
<span className="text-primary font-bold text-lg uppercase tracking-widest block mb-sm">Virtual Prototype</span>
<h2 className="text-4xl md:text-5xl font-extrabold text-on-surface">360° Interactive Engineering Inspection</h2>
<div className="w-24 h-1 bg-primary-container mx-auto mt-sm"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-center bg-[#0d1c2f] rounded-2xl overflow-hidden shadow-2xl relative border border-white/10">
{/* Sidebar Labels Left */}
<div className="lg:col-span-3 p-md space-y-md z-10 hidden lg:block">
<div className="reveal bg-white dark:bg-[#1a2332] dark:border-gray-800/5 backdrop-blur-md border-l-4 border-primary-container p-sm rounded-r-lg">
<span className="block text-on-surface-variant dark:text-white/40 font-bold tracking-wider text-[9px] uppercase">Component Material</span>
<span className="text-on-surface dark:text-white font-bold text-sm mt-1">Stainless Steel 316L</span>
</div>
<div className="reveal bg-white dark:bg-[#1a2332] dark:border-gray-800/5 backdrop-blur-md border-l-4 border-primary-container p-sm rounded-r-lg" style={{transitionDelay: '100ms'}}>
<span className="block text-on-surface-variant dark:text-white/40 font-bold tracking-wider text-[9px] uppercase">Certification</span>
<span className="text-on-surface dark:text-white font-bold text-sm mt-1">Compliance: API 600</span>
</div>
</div>
{/* Central 3D Viewer */}
<div className="lg:col-span-6 relative h-[350px] md:h-[500px] flex items-center justify-center">
<div className="absolute inset-0 technical-grid opacity-10 pointer-events-none"></div>
{/* STITCH_THREEJS_START:ANIMATION_21 className="w-full h-[350px] md:h-[500px] bg-transparent cursor-grab active:cursor-grabbing" */}
<div className="w-full h-[350px] md:h-[500px] bg-transparent cursor-grab active:cursor-grabbing" style={{display: 'block'}}>

<div id="threejs-container-ANIMATION_21" style={{width: '100%', height: '100%'}}></div>

</div>
{/* STITCH_THREEJS_END:ANIMATION_21 */}
<div className="absolute bottom-md left-1/2 -translate-x-1/2 flex items-center gap-sm bg-black/40 backdrop-blur-sm px-md py-xs rounded-full border border-white/10">
<span className="material-symbols-outlined text-white/60 text-sm">touch_app</span>
<span className="text-white/80 font-label-caps text-[10px]">Drag to Rotate • Scroll to Zoom</span>
</div>
</div>
{/* Sidebar Labels Right */}
<div className="lg:col-span-3 p-md space-y-md z-10">
{/* Mobile Only Labels (Visible on small screens) */}
<div className="lg:hidden grid grid-cols-2 gap-sm mb-md">
<div className="bg-white dark:bg-[#1a2332] dark:border-gray-800/5 border-l-2 border-primary-container p-xs rounded">
<span className="block text-on-surface-variant dark:text-white/40 font-bold tracking-wider text-[8px] uppercase">Material</span>
<span className="text-on-surface dark:text-white font-bold text-xs mt-1">SS 316L</span>
</div>
<div className="bg-white dark:bg-[#1a2332] dark:border-gray-800/5 border-l-2 border-primary-container p-xs rounded">
<span className="block text-on-surface-variant dark:text-white/40 font-bold tracking-wider text-[8px] uppercase">Standard</span>
<span className="text-on-surface dark:text-white font-bold text-xs mt-1">API 600</span>
</div>
</div>
<div className="reveal bg-white dark:bg-[#1a2332] dark:border-gray-800/5 backdrop-blur-md border-r-4 border-primary-container p-sm rounded-l-lg text-right hidden lg:block" style={{transitionDelay: '200ms'}}>
<span className="block text-on-surface-variant dark:text-white/40 font-bold tracking-wider text-[9px] uppercase">Maximum Threshold</span>
<span className="text-on-surface dark:text-white font-bold text-sm mt-1">2500 PSI Rating</span>
</div>
<div className="reveal bg-white dark:bg-[#1a2332] dark:border-gray-800/5 backdrop-blur-md border-r-4 border-primary-container p-sm rounded-l-lg text-right hidden lg:block" style={{transitionDelay: '300ms'}}>
<span className="block text-on-surface-variant dark:text-white/40 font-bold tracking-wider text-[9px] uppercase">System Integration</span>
<span className="text-on-surface dark:text-white font-bold text-sm mt-1">BIM Ready (.STEP)</span>
</div>
<div className="mt-lg pt-lg border-t border-white/10 text-center lg:text-right">
<button className="bg-primary-container text-on-primary-container px-md py-xs font-bold rounded-lg hover:scale-105 transition-transform">Download CAD Data</button>
</div>
</div>
</div>
</div>
</section>
{/* Main Content Area */}
<main className="py-12 bg-surface">
<div className="max-w-[1280px] mx-auto px-md">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
{/* Sidebar Dashboard Widgets */}
<aside className="lg:col-span-4 space-y-md">
{/* ASME P-T Estimator */}
<div className="reveal bg-[#0f1d30] dark:bg-[#0a1220] p-md rounded-xl border border-white/10 shadow-lg glow-hover transition-all">
<div className="flex justify-between items-center mb-md">
<h3 className="text-white font-headline-sm flex items-center gap-xs">
<span className="material-symbols-outlined text-primary-container">thermostat</span>
                            ASME B16.5 P-T
                        </h3>
<span className="text-white/40 font-label-caps">Estimator</span>
</div>
<div className="mb-lg">
<label className="text-white/60 text-xs font-label-caps block mb-xs">Process Temperature (°F)</label>
<input className="w-full h-1 bg-white dark:bg-[#1a2332] dark:border-gray-800/10 appearance-none rounded-lg accent-primary-container cursor-pointer transition-all" id="tempRange" max="1500" min="0" type="range" defaultValue="750"/>
<div className="flex justify-between text-white/40 text-[10px] mt-xs">
<span className="font-label-caps">-20°F</span>
<span className="font-label-caps">750°F</span>
<span className="font-label-caps">1500°F</span>
</div>
</div>
<div className="text-center py-md border-y border-white/10">
<span className="text-primary-container font-stat-value text-display-lg" id="psiValue">2450</span>
<span className="text-white/60 font-label-caps ml-xs">PSI Rating</span>
</div>
<div className="mt-md text-[10px] text-white/40 leading-relaxed italic font-label-caps">
                        *Estimated values for Material Group 1.1 (A105). Consult ASME B16.5-2020 tables for exact certification data.
                    </div>
</div>
{/* Chemical Composition */}
<div className="reveal bg-[#0f1d30] dark:bg-[#0a1220] p-md rounded-xl border border-white/10 shadow-lg glow-hover transition-all">
<h3 className="text-white font-headline-sm mb-lg flex items-center gap-xs">
<span className="material-symbols-outlined text-primary-container">experiment</span>
                        Alloy Composition
                    </h3>
<div className="space-y-sm">
<div>
<div className="flex justify-between mb-xs">
<span className="text-white font-label-caps text-[10px]">Chromium (Cr)</span>
<span className="text-primary-container font-bold font-label-caps text-[10px]">18.2%</span>
</div>
<div className="w-full h-1 bg-white dark:bg-[#1a2332] dark:border-gray-800/10 rounded-full overflow-hidden">
<div className="h-full bg-primary-container" style={{width: '72%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-xs">
<span className="text-white font-label-caps text-[10px]">Nickel (Ni)</span>
<span className="text-primary-container font-bold font-label-caps text-[10px]">8.5%</span>
</div>
<div className="w-full h-1 bg-white dark:bg-[#1a2332] dark:border-gray-800/10 rounded-full overflow-hidden">
<div className="h-full bg-primary-container" style={{width: '35%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-xs">
<span className="text-white font-label-caps text-[10px]">Carbon (C)</span>
<span className="text-primary-container font-bold font-label-caps text-[10px]">0.08%</span>
</div>
<div className="w-full h-1 bg-white dark:bg-[#1a2332] dark:border-gray-800/10 rounded-full overflow-hidden">
<div className="h-full bg-primary-container" style={{width: '12%'}}></div>
</div>
</div>
</div>
</div>
{/* Dimension Matrix */}
<div className="reveal bg-[#0f1d30] dark:bg-[#0a1220] p-md rounded-xl border border-white/10 shadow-lg overflow-hidden glow-hover transition-all">
<h3 className="text-white font-headline-sm mb-lg">Dimension Matrix</h3>
<div className="overflow-x-auto">
<table className="w-full text-left text-[10px] text-white/70">
<thead className="border-b border-white/20 uppercase text-white/40">
<tr>
<th className="py-xs pr-xs font-label-caps">Size (in)</th>
<th className="py-xs font-label-caps">RF-Face</th>
<th className="py-xs font-label-caps">BW-End</th>
<th className="py-xs font-label-caps">RTJ-End</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 font-label-caps">
<tr><td className="py-xs font-bold text-primary-container">2"</td><td>7.00</td><td>8.50</td><td>7.50</td></tr>
<tr><td className="py-xs font-bold text-primary-container">3"</td><td>8.00</td><td>11.12</td><td>8.62</td></tr>
<tr><td className="py-xs font-bold text-primary-container">4"</td><td>9.00</td><td>12.00</td><td>9.62</td></tr>
</tbody>
</table>
</div>
</div>
</aside>
{/* Product Grid Area */}
<div className="lg:col-span-8 space-y-md">
{/* Product Card 1 */}
<div className="reveal bg-[#0f1d30] dark:bg-[#0a1220] rounded-xl border border-white/10 overflow-hidden flex flex-col md:flex-row h-auto md:h-[320px] transition-all duration-500 glow-hover group">
<div className="md:w-2/5 cad-preview relative">
<div className="absolute inset-0 flex items-center justify-center">
<img alt="CAD Drawing" className="w-4/5 opacity-80 group-hover:scale-105 transition-transform duration-700" src="/images/products/gate-valve.png"/>
</div>
</div>
<div className="md:w-3/5 p-lg flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h2 className="text-white font-headline-md mb-xs">Class 600 Gate Valve</h2>
<span className="bg-primary-container/10 text-primary-container px-xs py-1 rounded text-[10px] font-label-caps uppercase border border-primary-container/20">API 600</span>
</div>
<p className="text-white/50 text-sm mb-md">Heavy-duty cast steel construction with hard-faced wedge for extreme high-pressure steam.</p>
<ul className="grid grid-cols-2 gap-y-xs gap-x-md text-[11px] text-white/70 font-label-caps">
<li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[14px] text-primary-container">check_circle</span> 2" to 36" Bore</li>
<li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[14px] text-primary-container">check_circle</span> Flanged / BW End</li>
</ul>
</div>
<div className="flex flex-col sm:flex-row gap-sm mt-lg">
<button className="flex-1 bg-primary-container text-on-primary-container py-xs font-bold rounded-lg hover:brightness-110 transition-all scale-100 active:scale-95">Get Quote</button>
<button className="flex-1 border border-white/20 text-white py-xs font-bold rounded-lg hover:bg-white dark:bg-[#1a2332] dark:border-gray-800/5 transition-all flex items-center justify-center gap-xs">
<span className="material-symbols-outlined text-sm">download</span> PDF Specs
                            </button>
</div>
</div>
</div>
{/* Product Card 2 */}
<div className="reveal bg-[#0f1d30] dark:bg-[#0a1220] rounded-xl border border-white/10 overflow-hidden flex flex-col md:flex-row h-auto md:h-[320px] transition-all duration-500 glow-hover group">
<div className="md:w-2/5 cad-preview relative">
<div className="absolute inset-0 flex items-center justify-center">
<img alt="Globe Valve CAD" className="w-4/5 opacity-80 group-hover:scale-105 transition-transform duration-700" src="/images/products/globe-valve.png"/>
</div>
</div>
<div className="md:w-3/5 p-lg flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h2 className="text-white font-headline-md mb-xs">Class 150 Globe Valve</h2>
<span className="bg-primary-container/10 text-primary-container px-xs py-1 rounded text-[10px] font-label-caps uppercase border border-primary-container/20">BS 1873</span>
</div>
<p className="text-white/50 text-sm mb-md">Engineered for precise throttling and flow regulation. Features leak-proof shutoff.</p>
<ul className="grid grid-cols-2 gap-y-xs gap-x-md text-[11px] text-white/70 font-label-caps">
<li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[14px] text-primary-container">check_circle</span> OS&amp;Y Type</li>
<li className="flex items-center gap-xs"><span className="material-symbols-outlined text-[14px] text-primary-container">check_circle</span> Fugitive Emission</li>
</ul>
</div>
<div className="flex flex-col sm:flex-row gap-sm mt-lg">
<button className="flex-1 bg-primary-container text-on-primary-container py-xs font-bold rounded-lg hover:brightness-110 transition-all scale-100 active:scale-95">Get Quote</button>
<button className="flex-1 border border-white/20 text-white py-xs font-bold rounded-lg hover:bg-white dark:bg-[#1a2332] dark:border-gray-800/5 transition-all flex items-center justify-center gap-xs">
<span className="material-symbols-outlined text-sm">download</span> PDF Specs
                            </button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
{/* New: Advanced Pressure Testing Section */}
<section className="relative min-h-[600px] py-24 flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Pressure Testing Background" className="w-full h-full object-cover grayscale-[0.2]" src="/images/stitch/forging-press.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0f1d30] via-[#0f1d30]/60 to-transparent"></div>
</div>
<div className="max-w-[1280px] mx-auto px-md relative z-10 w-full">
<div className="max-w-[36rem] reveal">
<span className="font-bold text-lg text-primary-container tracking-widest mb-sm block uppercase">R&amp;D EXCELLENCE</span>
<h2 className="text-white text-4xl md:text-5xl font-extrabold mb-lg leading-tight">Advanced Pressure Testing Facility</h2>
<p className="text-white/80 text-xl md:text-2xl leading-relaxed mb-xl max-w-2xl">Every component undergoes rigorous hydrostatic and pneumatic testing under extreme parameters, ensuring failure is never an option in your critical operations.</p>
<div className="grid grid-cols-2 gap-md mb-xl">
<div>
<span className="block text-primary-container font-bold text-5xl mb-2">15k+</span>
<span className="text-white/60 font-bold tracking-widest text-sm uppercase">PSI Test Limit</span>
</div>
<div>
<span className="block text-primary-container font-bold text-5xl mb-2">100%</span>
<span className="text-white/60 font-bold tracking-widest text-sm uppercase">Traceability</span>
</div>
</div>
<button className="bg-primary-container text-on-primary-container px-8 py-4 text-lg font-bold rounded-xl hover:scale-105 transition-transform shadow-lg">Explore Facilities</button>
</div>
</div>
</section>
{/* New: Technical Blueprint Library Section */}
<section className="py-xl bg-surface border-y border-outline-variant/20">
<div className="max-w-[1280px] mx-auto px-md">
<div className="flex flex-col md:flex-row gap-xl items-center">
<div className="md:w-1/2 reveal">
<h2 className="font-display-lg text-on-surface mb-md">Technical Blueprint Library</h2>
<p className="text-on-surface-variant font-body-lg mb-lg">Access our complete digital repository of high-fidelity engineering drawings and 3D CAD models for integration into your system designs.</p>
<div className="space-y-sm">
<div className="flex items-center gap-md p-md bg-white dark:bg-[#1a2332] dark:border-gray-800 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-primary">view_in_ar</span>
<span className="font-label-caps text-on-surface">3D Model Package (.STEP)</span>
<span className="material-symbols-outlined ml-auto opacity-0 group-hover:opacity-100 transition-opacity">download</span>
</div>
<div className="flex items-center gap-md p-md bg-white dark:bg-[#1a2332] dark:border-gray-800 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-primary">architecture</span>
<span className="font-label-caps text-on-surface">Dimensional Blueprints (.DWG)</span>
<span className="material-symbols-outlined ml-auto opacity-0 group-hover:opacity-100 transition-opacity">download</span>
</div>
</div>
</div>
<div className="md:w-1/2 relative group reveal">
<div className="rounded-xl overflow-hidden shadow-2xl border border-outline-variant/30 relative">
<img alt="Technical Blueprint" className="w-full h-auto" src="/images/products/bearing-housing.png"/>
<div className="absolute inset-0 bg-[#0d1c2f]/40 group-hover:bg-transparent transition-all duration-500 flex items-center justify-center">
<button className="bg-white dark:bg-[#1a2332] dark:border-gray-800/10 backdrop-blur-md border border-white/30 text-white px-md py-xs rounded-full opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100 flex items-center gap-xs">
<span className="material-symbols-outlined">zoom_in</span> Full Resolution View
                        </button>
</div>
</div>
<div className="absolute -bottom-xs -right-xs bg-primary-container p-sm rounded-lg shadow-lg">
<span className="font-label-caps text-on-primary-container text-[10px]">VERIFIED ASSEMBLY DRAWING RG-MSP-4000</span>
</div>
</div>
</div>
</div>
</section>
{/* New: Live Quality Assurance Feed Section */}
<section className="py-xl bg-[#0f1d30] dark:bg-[#0a1220]">
<div className="max-w-[1280px] mx-auto px-md">
<div className="text-center mb-xl reveal">
<h2 className="font-display-lg text-white mb-sm">Live Quality Assurance</h2>
<div className="w-24 h-1 bg-primary-container mx-auto mb-md"></div>
<p className="text-white/60 font-body-md">Real-time snapshots from our metallurgical and precision testing labs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md reveal">
<div className="relative overflow-hidden rounded-xl group glow-hover transition-all">
<img alt="Quality Assurance 1" className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" src="/images/stitch/technocast.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-md bg-gradient-to-t from-black/80 to-transparent">
<div className="flex items-center gap-xs">
<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
<span className="font-label-caps text-white text-xs">Live Metallurgy Analysis - Lab 04</span>
</div>
</div>
</div>
<div className="relative overflow-hidden rounded-xl group glow-hover transition-all">
<img alt="Quality Assurance 2" className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" src="/images/stitch/infra-cnc.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-md bg-gradient-to-t from-black/80 to-transparent">
<div className="flex items-center gap-xs">
<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
<span className="font-label-caps text-white text-xs">Precision Tolerance Verification - Zone C</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Call to Action Banner */}
<section className="py-xl bg-[#0f1d30] dark:bg-[#0a1220] technical-grid border-t border-white/10">
<div className="max-w-[1280px] mx-auto px-md text-center reveal">
<h2 className="text-white text-4xl md:text-5xl font-extrabold mb-lg">Custom Technical Solutions?</h2>
<p className="text-white/70 text-lg md:text-xl mb-xl max-w-3xl mx-auto leading-relaxed">Request a deep-dive technical consultation with our engineering team for bespoke alloy developments or specialized valve designs.</p>
<div className="flex flex-wrap justify-center gap-lg">
<button className="bg-primary-container text-on-primary-container px-8 py-4 text-lg font-bold rounded-xl hover:scale-105 transition-transform shadow-lg">Request Technical Call</button>
<button className="border-2 border-white/20 text-white px-8 py-4 text-lg font-bold rounded-xl hover:bg-white/10 transition-colors">View All Certificates</button>
</div>
</div>
</section>
{/* Footer */}

{/* FABs Removed to use global RfqButton */}

{/* Three.js Implementation Script */}
<div className="fixed inset-0 w-full h-full bg-transparent pointer-events-none z-[-1]" style={{display: 'block'}}>
    <div id="threejs-container-ANIMATION_21" style={{width: '100%', height: '100%'}}></div>
    
    <Script src="https://ajax.googleapis.com/ajax/libs/threejs/r125/three.min.js" strategy="afterInteractive" onLoad={() => {
        const THREE = (window as any).THREE;
        if (!THREE) return;
        
        const container = document.getElementById('threejs-container-ANIMATION_21');
        if (!container) return;
        if (container.children.length > 0) return;

        const devicePixelRatio = window.devicePixelRatio || 1;
        const scene = new THREE.Scene();
        const width = container.clientWidth || window.innerWidth;
        const height = container.clientHeight || window.innerHeight;
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(devicePixelRatio);
        container.appendChild(renderer.domElement);

        const bodyMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x172a45, 
            specular: 0x444444, 
            shininess: 30,
            transparent: true,
            opacity: 0.9
        });
        const detailMaterial = new THREE.MeshPhongMaterial({ color: 0xf59e0b });
        const wireframeMaterial = new THREE.MeshBasicMaterial({ color: 0xccdbf4, wireframe: true, transparent: true, opacity: 0.2 });

        const valveGroup = new THREE.Group();

        const bodyGeom = new THREE.CylinderGeometry(1.5, 1.5, 4, 32);
        const body = new THREE.Mesh(bodyGeom, bodyMaterial);
        body.rotation.z = Math.PI / 2;
        valveGroup.add(body);

        const flangeGeom = new THREE.CylinderGeometry(2.2, 2.2, 0.5, 32);
        const flange1 = new THREE.Mesh(flangeGeom, bodyMaterial);
        flange1.position.x = -2;
        flange1.rotation.z = Math.PI / 2;
        valveGroup.add(flange1);

        const flange2 = new THREE.Mesh(flangeGeom, bodyMaterial);
        flange2.position.x = 2;
        flange2.rotation.z = Math.PI / 2;
        valveGroup.add(flange2);

        const bonnetGeom = new THREE.CylinderGeometry(1, 1.5, 2, 32);
        const bonnet = new THREE.Mesh(bonnetGeom, bodyMaterial);
        bonnet.position.y = 2;
        valveGroup.add(bonnet);

        const stemGeom = new THREE.CylinderGeometry(0.3, 0.3, 3, 16);
        const stem = new THREE.Mesh(stemGeom, detailMaterial);
        stem.position.y = 3.5;
        valveGroup.add(stem);

        const wheelGeom = new THREE.TorusGeometry(1.2, 0.2, 16, 100);
        const wheel = new THREE.Mesh(wheelGeom, detailMaterial);
        wheel.position.y = 5;
        wheel.rotation.x = Math.PI / 2;
        valveGroup.add(wheel);

        const wireframeMesh = new THREE.Mesh(bodyGeom, wireframeMaterial);
        wireframeMesh.rotation.z = Math.PI / 2;
        wireframeMesh.scale.set(1.01, 1.01, 1.01);
        valveGroup.add(wireframeMesh);

        scene.add(valveGroup);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7);
        scene.add(directionalLight);

        camera.position.z = 10;

        // Position the group so it appears nice as a background element
        valveGroup.position.set(0, 0, 0);
        valveGroup.scale.set(0.6, 0.6, 0.6);

        let isDragging = false;
        let previousMouseX = 0;
        let previousMouseY = 0;

        window.addEventListener('mousedown', (e) => { isDragging = true; });
        window.addEventListener('mouseup', () => { isDragging = false; });
        window.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaX = e.clientX - previousMouseX;
                const deltaY = e.clientY - previousMouseY;
                valveGroup.rotation.y += deltaX * 0.01;
                valveGroup.rotation.x += deltaY * 0.01;
            }
            previousMouseX = e.clientX;
            previousMouseY = e.clientY;
        });

        function animate() {
            requestAnimationFrame(animate);
            if (!isDragging) {
                valveGroup.rotation.y += 0.005;
                const scrollY = window.scrollY;
                valveGroup.rotation.x = scrollY * 0.001;
            }
            renderer.render(scene, camera);
        }

        animate();

        window.addEventListener('resize', () => {
            const w = container.clientWidth || window.innerWidth;
            const h = container.clientHeight || window.innerHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        });
    }} />
</div>
{/* STITCH_THREEJS_END:ANIMATION_21 */}


    </>
  );
}
