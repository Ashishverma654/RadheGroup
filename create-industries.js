const fs = require('fs');

const pageContent = `"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function IndustriesPage() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: \`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: 200%; animation: marquee 20s linear infinite; }
        .slider-thumb::-webkit-slider-thumb { appearance: none; width: 40px; height: 40px; border-radius: 50%; background: white; border: 4px solid #f59e0b; cursor: ew-resize; box-shadow: 0 0 10px rgba(0,0,0,0.3); }
        .slider-thumb::-moz-range-thumb { appearance: none; width: 40px; height: 40px; border-radius: 50%; background: white; border: 4px solid #f59e0b; cursor: ew-resize; box-shadow: 0 0 10px rgba(0,0,0,0.3); }
      \`}} />

      {/* Hero Section */}
      <section className="bg-[#4b5563] relative min-h-[70vh] flex flex-col justify-center px-4 md:px-16 pt-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 font-display-lg leading-tight">
              Powering Global <br/><span className="text-[#f59e0b]">Industries</span>
            </h1>
            <p className="text-white/80 max-w-lg text-lg font-body-md mb-8">
              Delivering mission-critical castings, forgings, and valves to the world's most demanding sectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#f59e0b] text-[#0f1d30] px-8 py-3 rounded font-bold hover:brightness-110 transition-colors text-sm">
                View Solutions
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition-colors text-sm">
                Technical Specs
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-end items-center relative">
            <div className="w-64 h-64 border-4 border-[#0f1d30] rounded-xl flex items-center justify-center bg-[#374151] opacity-70">
               <span className="material-symbols-outlined text-6xl text-[#0f1d30]">landscape</span>
            </div>
            {/* Play Button Icon */}
            <div className="absolute bottom-4 right-4 bg-[#22c55e] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-white">play_arrow</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="bg-[#0f1d30] py-4 overflow-hidden border-b border-white/10">
        <div className="animate-marquee flex items-center text-white/50 text-xs font-bold tracking-widest whitespace-nowrap">
          <div className="w-1/2 flex justify-around items-center px-4">
            <span>API 6D Q1 & 600</span>
            <span>ASME U-STAMP "U"</span>
            <span>CE MARKING</span>
            <span>ISO 9001:2015</span>
            <span>VENDOR APPD</span>
          </div>
          <div className="w-1/2 flex justify-around items-center px-4">
            <span>API 6D Q1 & 600</span>
            <span>ASME U-STAMP "U"</span>
            <span>CE MARKING</span>
            <span>ISO 9001:2015</span>
            <span>VENDOR APPD</span>
          </div>
        </div>
      </div>

      {/* Core Grid Section */}
      <section className="bg-white py-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">Precision Sectors</p>
          <h2 className="text-3xl font-bold text-[#0f1d30] mb-12">Comprehensive Industrial Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#1e293b] p-8 rounded-lg shadow-lg hover:-translate-y-1 transition-transform relative group">
              <div className="absolute top-8 right-8 text-white/20 font-bold text-lg">01</div>
              <span className="material-symbols-outlined text-[#f59e0b] text-3xl mb-6">oil_barrel</span>
              <h3 className="text-white text-2xl font-bold mb-4">Oil & Gas</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Specialized in high-pressure valves, Christmas tree components, and corrosion-resistant castings for subsea and upstream environments.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#f59e0b] text-xs font-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] mr-2"></span>Gate & Ball Valve Bodies</li>
                <li className="flex items-center text-[#f59e0b] text-xs font-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] mr-2"></span>API-6D Compliance</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1e293b] p-8 rounded-lg shadow-lg hover:-translate-y-1 transition-transform relative group">
              <div className="absolute top-8 right-8 text-white/20 font-bold text-lg">02</div>
              <span className="material-symbols-outlined text-[#f59e0b] text-3xl mb-6">settings</span>
              <h3 className="text-white text-2xl font-bold mb-4">Automotive</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                High-volume, precision-forged drivetrain components and structural alloy parts designed for the next generation of transport technology.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#f59e0b] text-xs font-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] mr-2"></span>Drivetrain Forgings</li>
                <li className="flex items-center text-[#f59e0b] text-xs font-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] mr-2"></span>Tight Tolerance Castings</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1e293b] p-8 rounded-lg shadow-lg hover:-translate-y-1 transition-transform relative group">
              <div className="absolute top-8 right-8 text-white/20 font-bold text-lg">03</div>
              <span className="material-symbols-outlined text-[#f59e0b] text-3xl mb-6">sailing</span>
              <h3 className="text-white text-2xl font-bold mb-4">Marine & Defense</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Heavy-duty, salt water-resistant alloys and naval-grade components engineered for extreme durability and mission reliability.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#f59e0b] text-xs font-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] mr-2"></span>Propeller Shafts</li>
                <li className="flex items-center text-[#f59e0b] text-xs font-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] mr-2"></span>Ballistic Grade Alloys</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-[#1e293b] p-8 rounded-lg shadow-lg hover:-translate-y-1 transition-transform relative group">
              <div className="absolute top-8 right-8 text-white/20 font-bold text-lg">04</div>
              <span className="material-symbols-outlined text-[#f59e0b] text-3xl mb-6">bolt</span>
              <h3 className="text-white text-2xl font-bold mb-4">Power Generation</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Turbine housings and thermal-resistant metallurgy, designed to withstand sustained high temperatures in nuclear and gas power plants.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-[#f59e0b] text-xs font-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] mr-2"></span>Steam Turbine Housings</li>
                <li className="flex items-center text-[#f59e0b] text-xs font-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] mr-2"></span>Super Alloy Forgings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Raw to Finished Slider */}
      <section className="bg-white py-16 px-4 md:px-8 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">Manufacturing Lifecycle</p>
            <h2 className="text-3xl font-bold text-[#0f1d30] mb-6">From Raw Forged Billet to Precision Valve</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Our vertically integrated facility controls the entire process. We transform raw, glowing-hot forgings into world-class industrial valves using state-of-the-art 5-axis CNC machining centers.
            </p>
            <div className="flex gap-16">
              <div>
                <div className="text-[#f59e0b] font-bold text-xl mb-1">100%</div>
                <div className="text-gray-400 text-xs font-bold tracking-wider">IN-HOUSE QA</div>
              </div>
              <div>
                <div className="text-[#f59e0b] font-bold text-xl mb-1">&lt; 2µm</div>
                <div className="text-gray-400 text-xs font-bold tracking-wider">TOLERANCE</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl bg-gray-200">
            {/* Raw Image (Left) */}
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1565515267688-6617fc4b5f4c?auto=format&fit=crop&q=80" alt="Raw" className="w-full h-full object-cover filter contrast-125 saturate-150" />
            </div>
            
            {/* Finished Image (Right) */}
            <div 
              className="absolute inset-0 border-l-2 border-[#f59e0b]"
              style={{ clipPath: \`inset(0 0 0 \${sliderPosition}%)\` }}
            >
              <img src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80" alt="Finished" className="w-full h-full object-cover filter grayscale" />
            </div>

            {/* Slider Control */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
            
            {/* Visual Handle */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-md border-2 border-[#f59e0b] flex items-center justify-center shadow-lg z-10 pointer-events-none"
              style={{ left: \`calc(\${sliderPosition}% - 20px)\` }}
            >
               <span className="material-symbols-outlined text-[#f59e0b] text-sm">unfold_more</span>
            </div>
          </div>
        </div>
      </section>

      {/* Global Distribution Network Map */}
      <section className="bg-[#151c2c] py-24 px-4 md:px-8">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Global Distribution Network</h2>
          <p className="text-white/60 mb-16 max-w-2xl mx-auto">
            Supplying high-performance components to critical infrastructure projects across six continents.
          </p>
          
          <div className="relative w-full h-[400px] bg-transparent opacity-80 flex items-center justify-center">
            {/* Stylized placeholder map blob */}
            <svg viewBox="0 0 800 400" className="w-full h-full fill-[#1e293b]">
              <path d="M100,200 Q150,150 250,250 T450,150 T650,250 T750,100 L700,350 L150,300 Z" />
            </svg>
            
            {/* Glowing Nodes */}
            <div className="absolute top-[45%] left-[25%] w-3 h-3 bg-[#f59e0b] rounded-full shadow-[0_0_15px_#f59e0b] animate-pulse"></div>
            <div className="absolute top-[35%] left-[45%] w-3 h-3 bg-[#f59e0b] rounded-full shadow-[0_0_15px_#f59e0b] animate-pulse" style={{animationDelay: "0.2s"}}></div>
            <div className="absolute top-[40%] left-[50%] w-3 h-3 bg-[#f59e0b] rounded-full shadow-[0_0_15px_#f59e0b] animate-pulse" style={{animationDelay: "0.5s"}}></div>
            <div className="absolute top-[65%] left-[75%] w-3 h-3 bg-[#f59e0b] rounded-full shadow-[0_0_15px_#f59e0b] animate-pulse" style={{animationDelay: "0.8s"}}></div>
          </div>
        </div>
      </section>

      {/* Engineer's Resource Hub */}
      <section className="bg-[#f8fafc] py-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">Technical Assets</p>
              <h2 className="text-3xl font-bold text-[#0f1d30]">Engineer's Resource Hub</h2>
            </div>
            <Link href="#" className="text-sm font-bold text-[#0f1d30] flex items-center hover:text-[#f59e0b] transition-colors">
              View All Resources <span className="material-symbols-outlined text-sm ml-1">arrow_forward_ios</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-blue-500">description</span>
              </div>
              <h3 className="text-[#0f1d30] font-bold text-xl mb-3">API-6D Valve Specs</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed h-16">
                Detailed dimensional data and pressure ratings for our full line of pipeline valves.
              </p>
              <button className="text-[#f59e0b] text-xs font-bold flex items-center tracking-wider hover:underline">
                DOWNLOAD PDF <span className="material-symbols-outlined text-sm ml-1">download</span>
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-purple-500">verified</span>
              </div>
              <h3 className="text-[#0f1d30] font-bold text-xl mb-3">ASTM Material Grades</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed h-16">
                Chemical composition and mechanical properties chart for our standard alloys.
              </p>
              <button className="text-[#f59e0b] text-xs font-bold flex items-center tracking-wider hover:underline">
                DOWNLOAD PDF <span className="material-symbols-outlined text-sm ml-1">download</span>
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-50 rounded flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-green-500">3d_rotation</span>
              </div>
              <h3 className="text-[#0f1d30] font-bold text-xl mb-3">3D CAD Models</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed h-16">
                STEP and IGES files for direct integration into your system designs.
              </p>
              <button className="text-[#f59e0b] text-xs font-bold flex items-center tracking-wider hover:underline">
                REQUEST ACCESS <span className="material-symbols-outlined text-sm ml-1">lock_open</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="bg-[#111827] py-16 px-4 md:px-8 border-b border-white/10">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Need components engineered for your sector's strict tolerances?</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#f59e0b] text-[#0f1d30] px-8 py-3 rounded font-bold hover:brightness-110 transition-colors text-sm text-center">
              Request a Custom Quote
            </Link>
            <button className="border border-white/30 text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition-colors text-sm text-center">
              Contact Engineering Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1d30] text-white/70 w-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-[1280px] mx-auto">
          <div className="col-span-1">
            <div className="font-bold text-xl text-[#f59e0b] mb-4">RadheGroup</div>
            <p className="text-white/50 text-xs mb-4 leading-relaxed">Leading manufacturer of precision castings, forgings, and valves for global heavy industry.</p>
            <p className="text-white/30 text-xs mt-8">© 2024 RadheGroup Industrial Solutions. All Rights Reserved.</p>
          </div>
          <div className="col-span-1 flex flex-col space-y-3">
            <div className="text-white font-bold text-xs tracking-wider mb-2">NAVIGATION</div>
            <a className="text-white/60 hover:text-white transition-opacity text-sm" href="/products">Products</a>
            <a className="text-[#f59e0b] font-bold text-sm" href="/industries">Industries</a>
            <a className="text-white/60 hover:text-white transition-opacity text-sm" href="/about">Facilities</a>
            <a className="text-white/60 hover:text-white transition-opacity text-sm" href="#">Global Network</a>
          </div>
          <div className="col-span-1 flex flex-col space-y-3">
            <div className="text-white font-bold text-xs tracking-wider mb-2">RESOURCES</div>
            <a className="text-white/60 hover:text-white transition-opacity text-sm" href="#">Certifications</a>
            <a className="text-white/60 hover:text-white transition-opacity text-sm" href="#">Quality Control</a>
            <a className="text-white/60 hover:text-white transition-opacity text-sm" href="#">News & Insights</a>
            <a className="text-white/60 hover:text-white transition-opacity text-sm" href="#">CSR</a>
          </div>
          <div className="col-span-1 flex flex-col space-y-3">
            <div className="text-white font-bold text-xs tracking-wider mb-2">CONTACT</div>
            <a className="text-white/60 hover:text-white transition-opacity text-sm" href="mailto:contact@radhegroup.com">contact@radhegroup.com</a>
            <a className="text-white/60 hover:text-white transition-opacity text-sm" href="tel:+18005550199">+1 (800) 555-0199</a>
            <div className="flex gap-4 mt-4">
              <span className="material-symbols-outlined text-white/50 hover:text-[#f59e0b] cursor-pointer">share</span>
              <span className="material-symbols-outlined text-white/50 hover:text-[#f59e0b] cursor-pointer">language</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
`;

fs.mkdirSync('src/app/industries', { recursive: true });
fs.writeFileSync('src/app/industries/page.tsx', pageContent);
console.log("Industries page created successfully.");
