const fs = require('fs');
const path = require('path');

const pageContent = `import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: \`
        .custom-border { border: 1px solid #e2e8f0; }
        .tech-border { border: 1px solid #06b6d4; }
        .glass-overlay { background: rgba(15, 23, 42, 0.9); backdrop-filter: blur(8px); }
        .timeline-line { position: absolute; top: 50%; left: 0; right: 0; height: 2px; background: #e2e8f0; z-index: -1; transform: translateY(-50%); }
        .circular-chart { display: block; margin: 0 auto; max-width: 80%; max-height: 250px; }
        .circle-bg { fill: none; stroke: #e6eeff; strokeWidth: 3.8; }
        .circle { fill: none; strokeWidth: 2.8; strokeLinecap: round; animation: progress 1s ease-out forwards; }
        @keyframes progress { 0% { stroke-dasharray: 0 100; } }
        .progress-92 { stroke: #f59e0b; stroke-dasharray: 92, 100; }
        .progress-35 { stroke: #f59e0b; stroke-dasharray: 35, 100; }
        .progress-100 { stroke: #f59e0b; stroke-dasharray: 100, 100; }
      \` }} />

      {/* Hero Section */}
      <header className="bg-[#0f1d30] text-white py-xl px-gutter md:px-lg text-center flex flex-col items-center justify-center min-h-[50vh]">
        <div className="max-w-3xl">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary-container mb-sm">Decades of Metallurgical Mastery</h1>
          <p className="font-body-lg text-body-lg text-tertiary-fixed mb-lg">Founded on the principles of precision and integrity, RadheGroup has grown from a local foundry into a global industrial force.</p>
          <a className="inline-flex items-center gap-2 border border-primary-container text-primary-container px-md py-sm rounded hover:bg-primary-container/10 transition-colors font-subheader text-subheader font-bold" href="#infrastructure">
            Explore Infrastructure
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </a>
        </div>
      </header>

      {/* Manufacturing Journey */}
      <section className="py-xl px-gutter md:px-lg bg-surface-container-lowest max-w-[1280px] mx-auto text-center" id="infrastructure">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-xl">Manufacturing Journey</h2>
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-lg md:gap-md z-10 px-md">
          <div className="hidden md:block timeline-line"></div>
          {/* Step 1 */}
          <div className="group relative bg-surface-container-lowest custom-border p-md rounded flex flex-col items-center w-full md:w-1/5 hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(15,23,42,0.08)] transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center mb-sm group-hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-primary-container group-hover:text-[#0f172a]">factory</span>
            </div>
            <h3 className="font-subheader text-subheader text-on-surface">Melting</h3>
            <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity p-sm flex flex-col justify-center items-center rounded border border-primary-container">
              <p className="font-label-caps text-label-caps text-secondary mb-1">Induction Furnace</p>
              <p className="font-body-md text-sm">Temp: 1650°C</p>
              <p className="font-body-md text-sm">Tolerance: ±5°C</p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="group relative bg-surface-container-lowest custom-border p-md rounded flex flex-col items-center w-full md:w-1/5 hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(15,23,42,0.08)] transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-sm group-hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-secondary group-hover:text-[#0f172a]">water_drop</span>
            </div>
            <h3 className="font-subheader text-subheader text-on-surface">Casting</h3>
            <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity p-sm flex flex-col justify-center items-center rounded border border-primary-container">
              <p className="font-label-caps text-label-caps text-secondary mb-1">Sand &amp; Investment</p>
              <p className="font-body-md text-sm">Cooling Rate Controlled</p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="group relative bg-surface-container-lowest custom-border p-md rounded flex flex-col items-center w-full md:w-1/5 hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(15,23,42,0.08)] transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-sm group-hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-secondary group-hover:text-[#0f172a]">thermostat</span>
            </div>
            <h3 className="font-subheader text-subheader text-on-surface">Heat Treatment</h3>
            <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity p-sm flex flex-col justify-center items-center rounded border border-primary-container">
              <p className="font-label-caps text-label-caps text-secondary mb-1">Annealing</p>
              <p className="font-body-md text-sm">Quenching</p>
              <p className="font-body-md text-sm">Tempering</p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="group relative bg-surface-container-lowest custom-border p-md rounded flex flex-col items-center w-full md:w-1/5 hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(15,23,42,0.08)] transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-sm group-hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-secondary group-hover:text-[#0f172a]">precision_manufacturing</span>
            </div>
            <h3 className="font-subheader text-subheader text-on-surface">Machining</h3>
            <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity p-sm flex flex-col justify-center items-center rounded border border-primary-container">
              <p className="font-label-caps text-label-caps text-secondary mb-1">VMC &amp; HMC</p>
              <p className="font-body-md text-sm">5-Axis</p>
              <p className="font-body-md text-sm">± 0.01mm</p>
            </div>
          </div>
          {/* Step 5 */}
          <div className="group relative bg-surface-container-lowest custom-border p-md rounded flex flex-col items-center w-full md:w-1/5 hover:-translate-y-1 hover:shadow-[0_4px_8px_rgba(15,23,42,0.08)] transition-all cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center mb-sm group-hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-secondary group-hover:text-[#0f172a]">fact_check</span>
            </div>
            <h3 className="font-subheader text-subheader text-on-surface">NDT Quality</h3>
            <div className="absolute inset-0 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity p-sm flex flex-col justify-center items-center rounded border border-primary-container">
              <p className="font-label-caps text-label-caps text-secondary mb-1">X-Ray</p>
              <p className="font-body-md text-sm">Ultrasonic</p>
              <p className="font-body-md text-sm">Spectro</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Map (Dark Section) */}
      <section className="py-xl px-gutter md:px-lg bg-[#0f1d30] text-white">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-headline-md text-headline-md text-center mb-xl">Facilities Map</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {/* Plant 1 */}
            <div className="group bg-inverse-surface border border-outline/30 rounded p-md hover:border-primary-container transition-colors cursor-pointer relative overflow-hidden">
              <div className="flex items-center gap-sm mb-sm relative z-10">
                <span className="material-symbols-outlined text-primary-container">domain</span>
                <h3 className="font-headline-sm text-headline-sm">Plant 1 <span className="text-sm font-normal text-tertiary-fixed-dim">Vavdi</span></h3>
              </div>
              <div className="relative z-10 transition-opacity group-hover:opacity-0">
                <p className="font-body-md text-tertiary-fixed-dim">Area: 45,000 sq.ft.</p>
                <p className="font-body-md text-tertiary-fixed-dim">Capacity: 12,000 TPA</p>
              </div>
              <div className="absolute inset-0 bg-[#0f1d30]/95 flex flex-col justify-center p-md opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <p className="font-body-md text-white">Advanced Foundry &amp; Primary Forging Unit.</p>
              </div>
            </div>
            {/* Plant 2 */}
            <div className="group bg-inverse-surface border border-outline/30 rounded p-md hover:border-primary-container transition-colors cursor-pointer relative overflow-hidden">
              <div className="flex items-center gap-sm mb-sm relative z-10">
                <span className="material-symbols-outlined text-primary-container">domain</span>
                <h3 className="font-headline-sm text-headline-sm">Plant 2 <span className="text-sm font-normal text-tertiary-fixed-dim">Bakrol</span></h3>
              </div>
              <div className="relative z-10 transition-opacity group-hover:opacity-0">
                <p className="font-body-md text-tertiary-fixed-dim">Area: 60,000 sq.ft.</p>
                <p className="font-body-md text-tertiary-fixed-dim">Capacity: 8,500 TPA</p>
              </div>
              <div className="absolute inset-0 bg-[#0f1d30]/95 flex flex-col justify-center p-md opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <p className="font-body-md text-white">State-of-the-art VMC/HMC Machining Center &amp; R&amp;D Hub.</p>
              </div>
            </div>
            {/* Plant 3 */}
            <div className="group bg-inverse-surface border border-outline/30 rounded p-md hover:border-primary-container transition-colors cursor-pointer relative overflow-hidden">
              <div className="flex items-center gap-sm mb-sm relative z-10">
                <span className="material-symbols-outlined text-primary-container">domain</span>
                <h3 className="font-headline-sm text-headline-sm">Plant 3 <span className="text-sm font-normal text-tertiary-fixed-dim">Ahmedabad</span></h3>
              </div>
              <div className="relative z-10 transition-opacity group-hover:opacity-0">
                <p className="font-body-md text-tertiary-fixed-dim">Area: [Details]</p>
                <p className="font-body-md text-tertiary-fixed-dim">Capacity: [Details]</p>
              </div>
              <div className="absolute inset-0 bg-[#0f1d30]/95 flex flex-col justify-center p-md opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <p className="font-body-md text-white">Global Exports Hub &amp; Final Quality Assurance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Split & Material Tool */}
      <section className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side: Infrastructure Features */}
          <div className="bg-[#0f1d30] text-white py-xl px-gutter md:px-lg flex flex-col justify-center">
            <div className="max-w-[36rem] ml-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div>
                  <span className="material-symbols-outlined text-primary-container text-3xl mb-xs">robot</span>
                  <h4 className="font-subheader text-subheader font-bold mb-1">Robotic Forging</h4>
                  <p className="font-body-md text-sm text-tertiary-fixed-dim">Automated precision high-tonnage forging presses ensuring consistent grain flow.</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-primary-container text-3xl mb-xs">biotech</span>
                  <h4 className="font-subheader text-subheader font-bold mb-1">NDT Labs</h4>
                  <p className="font-body-md text-sm text-tertiary-fixed-dim">In-house non-destructive testing for subsurface flaw detection.</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-primary-container text-3xl mb-xs">memory</span>
                  <h4 className="font-subheader text-subheader font-bold mb-1">VMC Lines</h4>
                  <p className="font-body-md text-sm text-tertiary-fixed-dim">High-speed multi-axis vertical machining centers for complex geometries.</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-primary-container text-3xl mb-xs">account_tree</span>
                  <h4 className="font-subheader text-subheader font-bold mb-1">ERP Systems</h4>
                  <p className="font-body-md text-sm text-tertiary-fixed-dim">Fully integrated SAP environment tracking material from melt to dispatch.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side: Industrial Media & Material Tool */}
          <div className="py-xl px-gutter md:px-lg bg-surface-container-lowest flex flex-col gap-lg items-center justify-center relative">
            <div className="w-full max-w-[32rem] tech-border rounded p-1 relative">
              <img className="w-full h-auto object-cover rounded filter contrast-125 saturate-110" alt="Industrial forging press" src="https://images.unsplash.com/photo-1565515267688-6617fc4b5f4c?auto=format&fit=crop&q=80" />
              <div className="absolute top-2 right-2 bg-[#0f1d30]/80 text-primary-container font-label-caps text-xs px-2 py-1 rounded backdrop-blur">LIVE FEED</div>
            </div>
            {/* Material Comparison Tool */}
            <div className="w-full max-w-[32rem] bg-[#0f1d30] tech-border rounded p-md">
              <h4 className="font-subheader text-subheader text-center text-white mb-md">Material Comparison Tool</h4>
              <div className="grid grid-cols-4 gap-xs text-sm text-tertiary-fixed-dim font-label-caps mb-sm">
                <div></div>
                <div className="text-center">AISI 4140</div>
                <div class="text-center">SS 316L</div>
                <div className="text-center">Duplex 2205</div>
              </div>
              <div className="space-y-sm">
                <div className="grid grid-cols-4 gap-xs items-center">
                  <div className="text-xs text-tertiary-fixed-dim">Tensile Strength</div>
                  <div className="h-2 bg-surface-container-low rounded overflow-hidden"><div className="h-full bg-primary-container w-[60%]"></div></div>
                  <div className="h-2 bg-surface-container-low rounded overflow-hidden"><div className="h-full bg-primary-container w-[45%]"></div></div>
                  <div className="h-2 bg-surface-container-low rounded overflow-hidden"><div className="h-full bg-primary-container w-[85%]"></div></div>
                </div>
                <div className="grid grid-cols-4 gap-xs items-center">
                  <div className="text-xs text-tertiary-fixed-dim">Corrosion Resist.</div>
                  <div className="h-2 bg-surface-container-low rounded overflow-hidden"><div className="h-full bg-primary-container w-[30%]"></div></div>
                  <div className="h-2 bg-surface-container-low rounded overflow-hidden"><div className="h-full bg-primary-container w-[80%]"></div></div>
                  <div className="h-2 bg-surface-container-low rounded overflow-hidden"><div className="h-full bg-primary-container w-[95%]"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Dashboard & Certifications Grid */}
      <section className="py-xl px-gutter md:px-lg bg-surface-container-lowest max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          {/* ESG Dashboard */}
          <div>
            <h2 className="font-headline-md text-headline-md text-center lg:text-left mb-lg">ESG Dashboard</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-md">
              {/* Stat 1 */}
              <div className="bg-surface custom-border rounded p-md text-center flex flex-col items-center justify-center">
                <svg className="circular-chart mb-sm w-24 h-24" viewBox="0 0 36 36">
                  <path className="circle-bg" strokeWidth="3.8" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                  <path className="circle progress-92" strokeWidth="2.8" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="92, 100"></path>
                  <text className="font-stat-value text-[10px] fill-[#0f1d30]" textAnchor="middle" x="18" y="20.35">92%</text>
                </svg>
                <p className="font-subheader text-subheader">Scrap Recycling</p>
              </div>
              {/* Stat 2 */}
              <div className="bg-surface custom-border rounded p-md text-center flex flex-col items-center justify-center">
                <svg className="circular-chart mb-sm w-24 h-24" viewBox="0 0 36 36">
                  <path className="circle-bg" strokeWidth="3.8" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                  <path className="circle progress-35" strokeWidth="2.8" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="35, 100"></path>
                  <text className="font-stat-value text-[10px] fill-[#0f1d30]" textAnchor="middle" x="18" y="20.35">35%</text>
                </svg>
                <p className="font-subheader text-subheader">Solar Power</p>
              </div>
              {/* Stat 3 */}
              <div className="bg-surface custom-border rounded p-md text-center flex flex-col items-center justify-center">
                <svg className="circular-chart mb-sm w-24 h-24" viewBox="0 0 36 36">
                  <path className="circle-bg" strokeWidth="3.8" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                  <path className="circle progress-100" strokeWidth="2.8" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="100, 100"></path>
                  <text className="font-stat-value text-[10px] fill-[#0f1d30]" textAnchor="middle" x="18" y="20.35">ZLD</text>
                </svg>
                <p className="font-subheader text-subheader">Zero Liquid Discharge</p>
              </div>
            </div>
          </div>
          {/* Certifications */}
          <div>
            <h2 className="font-headline-md text-headline-md text-center lg:text-left mb-lg">Certifications Grid</h2>
            <div className="grid grid-cols-2 gap-sm">
              <div className="bg-surface custom-border rounded p-md flex flex-col items-center justify-center hover:shadow-[0_4px_8px_rgba(15,23,42,0.08)] transition-all cursor-pointer group">
                <span className="material-symbols-outlined text-4xl text-secondary mb-xs group-hover:text-primary-container transition-colors">verified</span>
                <h4 className="font-subheader text-subheader font-bold">ISO 9001</h4>
                <a className="text-xs text-primary-container font-label-caps mt-xs flex items-center gap-1 hover:underline" href="#">Download <span className="material-symbols-outlined text-[10px]">download</span></a>
              </div>
              <div className="bg-surface custom-border rounded p-md flex flex-col items-center justify-center hover:shadow-[0_4px_8px_rgba(15,23,42,0.08)] transition-all cursor-pointer group">
                <span className="material-symbols-outlined text-4xl text-secondary mb-xs group-hover:text-primary-container transition-colors">assignment_turned_in</span>
                <h4 className="font-subheader text-subheader font-bold">IBR</h4>
                <a className="text-xs text-primary-container font-label-caps mt-xs flex items-center gap-1 hover:underline" href="#">Download <span className="material-symbols-outlined text-[10px]">download</span></a>
              </div>
              <div className="bg-surface custom-border rounded p-md flex flex-col items-center justify-center hover:shadow-[0_4px_8px_rgba(15,23,42,0.08)] transition-all cursor-pointer group">
                <span className="material-symbols-outlined text-4xl text-secondary mb-xs group-hover:text-primary-container transition-colors">engineering</span>
                <h4 className="font-subheader text-subheader font-bold">ASME</h4>
                <a className="text-xs text-primary-container font-label-caps mt-xs flex items-center gap-1 hover:underline" href="#">Download <span className="material-symbols-outlined text-[10px]">download</span></a>
              </div>
              <div className="bg-surface custom-border rounded p-md flex flex-col items-center justify-center hover:shadow-[0_4px_8px_rgba(15,23,42,0.08)] transition-all cursor-pointer group">
                <span className="material-symbols-outlined text-4xl text-secondary mb-xs group-hover:text-primary-container transition-colors">approval</span>
                <h4 className="font-subheader text-subheader font-bold">CE</h4>
                <a className="text-xs text-primary-container font-label-caps mt-xs flex items-center gap-1 hover:underline" href="#">Download <span className="material-symbols-outlined text-[10px]">download</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live QA / Shop Floor Snapshots */}
      <section className="py-xl px-gutter md:px-lg bg-[#0f1d30] text-white">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-headline-md text-headline-md text-center mb-xl">Shop Floor Snapshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {/* QA 1 */}
            <div className="bg-inverse-surface border border-outline/30 rounded overflow-hidden flex flex-col">
              <div className="relative h-64">
                <img className="w-full h-full object-cover" alt="Spectrometer Analysis" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1d30] to-transparent opacity-80"></div>
              </div>
              <div className="p-md relative -mt-12 z-10">
                <h3 className="font-headline-sm text-headline-sm mb-xs">Spectrometer Analysis</h3>
                <p className="font-body-md text-sm text-tertiary-fixed-dim">Real-time chemical composition verification ensuring precise metallurgical adherence.</p>
              </div>
            </div>
            {/* QA 2 */}
            <div className="bg-inverse-surface border border-outline/30 rounded overflow-hidden flex flex-col">
              <div className="relative h-64">
                <img className="w-full h-full object-cover" alt="Precision Check & CMM" src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1d30] to-transparent opacity-80"></div>
              </div>
              <div className="p-md relative -mt-12 z-10">
                <h3 className="font-headline-sm text-headline-sm mb-xs">Precision Check &amp; CMM</h3>
                <p className="font-body-md text-sm text-tertiary-fixed-dim">Coordinate Measuring Machine validating micron-level dimensional tolerances on finished components.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1d30] text-white/70 w-full py-xl border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-md px-md max-w-[1280px] mx-auto">
          <div className="col-span-1">
            <div className="font-headline-sm text-headline-sm text-white mb-md">RADHE GROUP</div>
            <p className="text-white/70 text-sm mb-4">© 2024 RadheGroup Industrial. Engineered for Precision.</p>
          </div>
          <div className="col-span-1 flex flex-col space-y-xs">
            <h4 className="font-subheader text-subheader font-bold text-primary-container mb-xs">Links</h4>
            <a className="text-white/70 hover:text-white transition-opacity text-body-md" href="#">Privacy Policy</a>
            <a className="text-white/70 hover:text-white transition-opacity text-body-md" href="#">Certifications</a>
            <a className="text-white/70 hover:text-white transition-opacity text-body-md" href="#">Technical Specs</a>
            <a className="text-white/70 hover:text-white transition-opacity text-body-md" href="#">Global Offices</a>
          </div>
          <div className="col-span-1 flex flex-col space-y-xs">
            <h4 className="font-subheader text-subheader font-bold text-primary-container mb-xs">Contact</h4>
            <div className="flex items-center gap-2 text-white/70 text-sm"><span className="material-symbols-outlined text-sm">mail</span> info@radhegroup.com</div>
            <div className="flex items-center gap-2 text-white/70 text-sm"><span className="material-symbols-outlined text-sm">phone</span> +91 800 555 1234</div>
            <div className="flex items-start gap-2 text-white/70 text-sm"><span className="material-symbols-outlined text-sm mt-1">location_on</span> 123 Industrial Estate, Gujarat, India</div>
          </div>
          <div className="col-span-1">
            <h4 className="font-subheader text-subheader font-bold text-primary-container mb-xs">Social Links</h4>
            <div className="flex gap-sm">
              <a className="text-white/70 hover:text-primary-container transition-colors" href="#"><span className="material-symbols-outlined">language</span></a>
              <a className="text-white/70 hover:text-primary-container transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
`;

fs.mkdirSync(path.join('C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app', 'about'), { recursive: true });
fs.writeFileSync('C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app\\\\about\\\\page.tsx', pageContent);

console.log('About page created successfully!');
