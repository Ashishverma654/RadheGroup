"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function IndustriesPage() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: 200%; animation: marquee 20s linear infinite; }
        .slider-thumb::-webkit-slider-thumb { appearance: none; width: 40px; height: 40px; border-radius: 50%; background: white; border: 4px solid #f59e0b; cursor: ew-resize; box-shadow: 0 0 10px rgba(0,0,0,0.3); }
        .slider-thumb::-moz-range-thumb { appearance: none; width: 40px; height: 40px; border-radius: 50%; background: white; border: 4px solid #f59e0b; cursor: ew-resize; box-shadow: 0 0 10px rgba(0,0,0,0.3); }
      `}} />

      {/* Hero Section */}
      <section className="bg-[#0f1d30] relative min-h-[70vh] flex flex-col justify-center px-4 md:px-16 pt-16 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0f1d30]/60 z-0"></div>
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-6 font-display-lg leading-tight">
              Powering Global <br/><span className="text-[#f59e0b]">Industries</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-[500px]">
              Delivering mission-critical castings, forgings, and valves to the world's most demanding sectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#f59e0b] text-[#0f1d30] dark:text-gray-100 px-8 py-3 rounded font-bold hover:brightness-110 transition-colors text-sm">
                View Solutions
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded font-bold hover:bg-white dark:bg-[#1a2332] dark:border-gray-800/10 transition-colors text-sm">
                Technical Specs
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-end items-center relative">
            <div className="w-64 h-64 border-4 border-[#0f1d30] rounded-xl overflow-hidden shadow-2xl relative">
              <img src="/images/products/hero-slider-2.png" alt="Industrial Manufacturing" className="w-full h-full object-cover filter contrast-125 brightness-75" />
            </div>
            {/* Play Button Icon */}
            <div className="absolute bottom-4 right-4 bg-[#22c55e] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform z-20">
              <span className="material-symbols-outlined text-white">play_arrow</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="bg-[#0f1d30] dark:bg-[#0a1220] py-4 overflow-hidden border-b border-white/10">
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
      <section className="bg-white dark:bg-[#1a2332] dark:border-gray-800 py-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">Precision Sectors</p>
          <h2 className="text-3xl font-bold text-[#0f1d30] dark:text-gray-100 mb-12">Comprehensive Industrial Expertise</h2>

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
      <section className="bg-white dark:bg-[#1a2332] dark:border-gray-800 py-16 px-4 md:px-8 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">Manufacturing Lifecycle</p>
            <h2 className="text-3xl font-bold text-[#0f1d30] dark:text-gray-100 mb-6">From Raw Forged Billet to Precision Valve</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
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
              <img src="/images/products/en24-billet.png" alt="Raw Billet" className="w-full h-full object-cover" />
            </div>
            
            {/* Finished Image (Right) */}
            <div 
              className="absolute inset-0 border-l-2 border-[#f59e0b]"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <img src="/images/products/pressure-seal-valve.png" alt="Finished Valve" className="w-full h-full object-cover" />
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
              className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-[#1a2332] dark:border-gray-800 rounded-md border-2 border-[#f59e0b] flex items-center justify-center shadow-lg z-10 pointer-events-none"
              style={{ left: `calc(${sliderPosition}% - 20px)` }}
            >
               <span className="material-symbols-outlined text-[#f59e0b] text-sm">unfold_more</span>
            </div>
          </div>
        </div>
      </section>

      
      {/* Group Companies Section */}
      <section className="bg-white dark:bg-[#1a2332] dark:border-gray-800 py-24 px-4 md:px-8 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#f59e0b] text-xs font-bold tracking-widest uppercase mb-2">Our Foundation</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1d30] dark:text-gray-100">The Companies of RadheGroup</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">Four specialized divisions working in synergy to provide end-to-end metallurgical and engineering solutions.</p>
          </div>

          <div className="space-y-16">
            {/* Division 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="h-72 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                  <img src="/images/products/factory-about.png" alt="Radhe Technocast" className="w-full h-full object-cover filter contrast-125" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-[#0f1d30] dark:text-gray-100 mb-3">Radhe Technocast</h3>
                <p className="text-[#f59e0b] font-bold text-sm mb-4">Precision Investment Casting & Machining</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Specializing in the lost wax process, Radhe Technocast produces highly intricate, tight-tolerance components for the aerospace, automotive, and industrial sectors. Our facilities in Rajkot and Vavdi feature state-of-the-art CNC machining centers, allowing us to deliver ready-to-assemble parts.
                </p>
                <a href="http://radhetechnocast.com" target="_blank" rel="noreferrer" className="text-[#0f1d30] dark:text-gray-100 font-bold text-sm flex items-center hover:text-[#f59e0b] transition-colors">
                  Visit Website <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Division 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="h-72 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                  <img src="/images/products/hero-valves.png" alt="Flow Marshal Valves" className="w-full h-full object-cover filter contrast-125" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-[#0f1d30] dark:text-gray-100 mb-3">Flow Marshal Valves</h3>
                <p className="text-[#f59e0b] font-bold text-sm mb-4">High-Performance Industrial Valves</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Flow Marshal Valves manufactures severe service valves including Gate, Globe, Check, and Pressure Seal valves for the Oil & Gas and Power sectors. We focus heavily on API-6D compliance, ensuring our pipeline valves perform flawlessly under extreme pressure and corrosive environments.
                </p>
                <a href="http://flowmarshalvalves.com" target="_blank" rel="noreferrer" className="text-[#0f1d30] dark:text-gray-100 font-bold text-sm flex items-center hover:text-[#f59e0b] transition-colors">
                  Visit Website <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Division 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="h-72 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                  <img src="/images/products/hero-castings.png" alt="Radhe Industries" className="w-full h-full object-cover filter contrast-125" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-[#0f1d30] dark:text-gray-100 mb-3">Radhe Industries</h3>
                <p className="text-[#f59e0b] font-bold text-sm mb-4">Heavy Duty Castings & Fabrications</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Operating an ISO 9001:2015 certified foundry in Bakrol, Ahmedabad, Radhe Industries specializes in large-scale M.S., S.S., and Alloy Steel cast parts. We are a trusted provider of IBR approved pressure fittings, pipe spools, and heavy structural components for critical infrastructure.
                </p>
                <a href="http://radheindustries.in" target="_blank" rel="noreferrer" className="text-[#0f1d30] dark:text-gray-100 font-bold text-sm flex items-center hover:text-[#f59e0b] transition-colors">
                  Visit Website <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Division 4 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="h-72 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                  <img src="/images/products/hero-alloys.png" alt="Radhe Alloys" className="w-full h-full object-cover filter contrast-125" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-[#0f1d30] dark:text-gray-100 mb-3">Radhe Alloys</h3>
                <p className="text-[#f59e0b] font-bold text-sm mb-4">Alloy Steels & Composites</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Radhe Alloys supplies mill-certified, traceable special alloys designed for high stress and heavy wear applications. We formulate and produce premium round bars, billets, and composite structural steels, including Duplex, Inconel, and Monel alloys for aerospace and marine sectors.
                </p>
                <a href="http://radhealloys.com" target="_blank" rel="noreferrer" className="text-[#0f1d30] dark:text-gray-100 font-bold text-sm flex items-center hover:text-[#f59e0b] transition-colors">
                  Visit Website <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </a>
              </div>
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
          
          <div className="relative w-full h-[500px] bg-[#0f1d30] rounded-2xl overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl">
            {/* Spinning Globe Video Background */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen z-0 filter brightness-150 contrast-125"
            >
              <source src="https://upload.wikimedia.org/wikipedia/commons/transcoded/1/1c/Spinning_Globe_with_Earth_Lights.ogv/Spinning_Globe_with_Earth_Lights.ogv.480p.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#151c2c] via-transparent to-[#151c2c] z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#151c2c] via-transparent to-[#151c2c] z-10"></div>
            
            {/* Glowing Nodes */}
            <div className="absolute top-[35%] left-[25%] w-3 h-3 bg-[#f59e0b] rounded-full shadow-[0_0_20px_4px_#f59e0b] animate-pulse z-20"></div>
            <div className="absolute top-[45%] left-[45%] w-3 h-3 bg-[#f59e0b] rounded-full shadow-[0_0_20px_4px_#f59e0b] animate-pulse z-20" style={{animationDelay: "0.2s"}}></div>
            <div className="absolute top-[30%] left-[55%] w-4 h-4 bg-[#f59e0b] rounded-full shadow-[0_0_25px_5px_#f59e0b] animate-pulse z-20" style={{animationDelay: "0.5s"}}></div>
            <div className="absolute top-[50%] left-[75%] w-3 h-3 bg-[#f59e0b] rounded-full shadow-[0_0_20px_4px_#f59e0b] animate-pulse z-20" style={{animationDelay: "0.8s"}}></div>
            <div className="absolute top-[65%] left-[60%] w-3 h-3 bg-[#f59e0b] rounded-full shadow-[0_0_20px_4px_#f59e0b] animate-pulse z-20" style={{animationDelay: "1.1s"}}></div>
          </div>
        </div>
      </section>

      {/* Engineer's Resource Hub */}
      <section className="bg-[#f8fafc] dark:bg-[#131b2c] dark:border-gray-800 py-24 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">Technical Assets</p>
              <h2 className="text-3xl font-bold text-[#0f1d30] dark:text-gray-100">Engineer's Resource Hub</h2>
            </div>
            <Link href="#" className="text-sm font-bold text-[#0f1d30] dark:text-gray-100 flex items-center hover:text-[#f59e0b] transition-colors">
              View All Resources <span className="material-symbols-outlined text-sm ml-1">arrow_forward_ios</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#1a2332] dark:border-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-blue-500">description</span>
              </div>
              <h3 className="text-[#0f1d30] dark:text-gray-100 font-bold text-xl mb-3">API-6D Valve Specs</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed h-16">
                Detailed dimensional data and pressure ratings for our full line of pipeline valves.
              </p>
              <button className="text-[#f59e0b] text-xs font-bold flex items-center tracking-wider hover:underline">
                DOWNLOAD PDF <span className="material-symbols-outlined text-sm ml-1">download</span>
              </button>
            </div>

            <div className="bg-white dark:bg-[#1a2332] dark:border-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-purple-500">verified</span>
              </div>
              <h3 className="text-[#0f1d30] dark:text-gray-100 font-bold text-xl mb-3">ASTM Material Grades</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed h-16">
                Chemical composition and mechanical properties chart for our standard alloys.
              </p>
              <button className="text-[#f59e0b] text-xs font-bold flex items-center tracking-wider hover:underline">
                DOWNLOAD PDF <span className="material-symbols-outlined text-sm ml-1">download</span>
              </button>
            </div>

            <div className="bg-white dark:bg-[#1a2332] dark:border-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-50 rounded flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-green-500">3d_rotation</span>
              </div>
              <h3 className="text-[#0f1d30] dark:text-gray-100 font-bold text-xl mb-3">3D CAD Models</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed h-16">
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
            <Link href="/contact" className="bg-[#f59e0b] text-[#0f1d30] dark:text-gray-100 px-8 py-3 rounded font-bold hover:brightness-110 transition-colors text-sm text-center">
              Request a Custom Quote
            </Link>
            <button className="border border-white/30 text-white px-8 py-3 rounded font-bold hover:bg-white dark:bg-[#1a2332] dark:border-gray-800/10 transition-colors text-sm text-center">
              Contact Engineering Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </>
  );
}
