"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('melting');

  const tabContent = {
    melting: {
      title: "Induction Melting Technology",
      description: "Equipped with automated 3-ton induction furnaces capable of handling complex alloy compositions with precise temperature control.",
      features: ["Dual-track melting systems", "Real-time spectrometry"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApIAXS1Z6B_E4sPK9xD1svtP5_-5ro3TbBIp3V8ICIEl0kI8drDHA7WlffnAT2jXs3gcS1tDKN6ORjLOWgVYnkBaJ0Ucx1O2FFdc0itOc4E8_CiBwMWQAC10Gmy-pzZQRc36o8SKf2XvSBqzQ_pL2kAuX3FbhQgAqeFj5ICSAoyNB6n10HDyGGMcpvmUTN15mqiKb-S_HI9Mh0gZLoxLf2YnWWn6j3t5MbrmUo84sWAspeUh0qroZV"
    },
    machining: {
      title: "Advanced VMC & HMC Machining",
      description: "High-speed multi-axis vertical and horizontal machining centers dedicated to achieving tight tolerances and complex geometries.",
      features: ["5-Axis Simultaneous Machining", "Micron-level Tolerances"],
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80"
    },
    testing: {
      title: "Non-Destructive Testing Labs",
      description: "In-house advanced NDT facilities for comprehensive subsurface flaw detection and material verification.",
      features: ["X-Ray & Ultrasonic Testing", "Coordinate Measuring Machine (CMM)"],
      image: "https://lh3.googleusercontent.com/aida/AP1WRLs3SqzwNfY7nL46oN36_PqY1xzyRNX-QOtTNnGPYrH1_4iL1An6FSxHH2u8K9FQTR571sZd6idHzhgP1fhma1TY0V4g6jAKS0uShbZ-XdTT8aQTAzA7Jv-DvHfpscYIMhjSZoHXzZxWF6tt3yg9QL296t3Kv6Ue1MNxmA8AXww3C1qb9gColtl90FDOECtkyTIG5VotjiI_2t8SpEsiIEIXHgqJKEf1ClYPqLYMZXSYH6nbbMa3izYuEU0"
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .circular-chart { display: block; margin: 0 auto; max-width: 80%; max-height: 150px; }
        .circle-bg { fill: none; stroke: #f1f5f9; stroke-width: 3.8; }
        .circle { fill: none; stroke-width: 2.8; stroke-linecap: round; animation: progress 1.5s ease-out forwards; }
        @keyframes progress { 0% { stroke-dasharray: 0 100; } }
        .progress-92 { stroke: #f59e0b; stroke-dasharray: 92, 100; }
        .progress-35 { stroke: #f59e0b; stroke-dasharray: 35, 100; }
        .progress-100 { stroke: #f59e0b; stroke-dasharray: 100, 100; }
      `}} />

      {/* Hero Section */}
      <section className="bg-[#0f1d30] dark:bg-[#0a1220] relative min-h-[70vh] flex flex-col justify-center items-center text-center px-4 pt-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img alt="Metallurgical Background" className="w-full h-full object-cover grayscale-[0.2]" src="/images/stitch/forging-press.jpg" />
          <div className="absolute inset-0 bg-[#0f1d30]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1d30]/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 font-display-lg">Decades of Metallurgical Mastery</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg font-body-md leading-relaxed">
            Precision engineering meets industrial scale. We are the trusted partner for complex metal solutions globally.
          </p>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <span className="material-symbols-outlined text-white/50 text-3xl">mouse</span>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="bg-white dark:bg-[#1a2332] dark:border-gray-800 py-6 md:py-8 px-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0f1d30] dark:text-gray-100 inline-block border-b-4 border-[#f59e0b] pb-2">Our Journey</h2>
          </div>
          
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>
            
            {/* 1998 Item */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative">
              <div className="w-full md:w-5/12">
                <div className="bg-white dark:bg-[#1a2332] dark:border-gray-800 p-8 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-[#a16207] text-2xl font-bold mb-2">1998</h3>
                  <h4 className="text-[#0f1d30] dark:text-gray-100 font-bold text-lg mb-2">Founding</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    Established first foundry in Gujarat, focusing on small-scale industrial castings.
                  </p>
                </div>
              </div>
              <div className="hidden md:flex w-2/12 justify-center relative z-10">
                <div className="w-4 h-4 rounded-full bg-[#f59e0b] ring-4 ring-white shadow"></div>
              </div>
              <div className="w-full md:w-5/12"></div>
            </div>

            {/* 2005 Item */}
            <div className="flex flex-col md:flex-row items-center justify-between relative">
              <div className="w-full md:w-5/12 order-3 md:order-1"></div>
              <div className="hidden md:flex w-2/12 justify-center relative z-10 order-2">
                <div className="w-4 h-4 rounded-full bg-[#f59e0b] ring-4 ring-white shadow"></div>
              </div>
              <div className="w-full md:w-5/12 order-1 md:order-3 mb-8 md:mb-0">
                <div className="bg-white dark:bg-[#1a2332] dark:border-gray-800 p-8 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-[#a16207] text-2xl font-bold mb-2">2005</h3>
                  <h4 className="text-[#0f1d30] dark:text-gray-100 font-bold text-lg mb-2">Global Exports</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    Initiated first major export contract to Germany for automotive components.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Technical Infrastructure Tabs */}
      <section className="bg-[#f8fafc] dark:bg-[#131b2c] dark:border-gray-800 py-6 md:py-8 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-3xl font-bold text-[#0f1d30] dark:text-gray-100 mb-8">Technical Infrastructure</h2>
          
          <div className="flex space-x-8 border-b border-gray-200 mb-8 overflow-x-auto pb-1">
            <button 
              onClick={() => setActiveTab('melting')}
              className={`font-bold pb-4 transition-colors ${activeTab === 'melting' ? 'text-[#0f1d30] border-b-2 border-[#f59e0b]' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Melting
            </button>
            <button 
              onClick={() => setActiveTab('machining')}
              className={`font-bold pb-4 transition-colors ${activeTab === 'machining' ? 'text-[#0f1d30] border-b-2 border-[#f59e0b]' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Machining
            </button>
            <button 
              onClick={() => setActiveTab('testing')}
              className={`font-bold pb-4 transition-colors ${activeTab === 'testing' ? 'text-[#0f1d30] border-b-2 border-[#f59e0b]' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Testing
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#0f1d30] dark:text-gray-100 mb-4">{tabContent[activeTab as keyof typeof tabContent].title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                {tabContent[activeTab as keyof typeof tabContent].description}
              </p>
              <ul className="space-y-4">
                {tabContent[activeTab as keyof typeof tabContent].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm font-medium">
                    <span className="material-symbols-outlined text-[#f59e0b] text-[20px]">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
              <img 
                src={tabContent[activeTab as keyof typeof tabContent].image} 
                alt="Infrastructure" 
                className="w-full h-full object-cover transition-opacity duration-500" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Engineering */}
      <section className="bg-white dark:bg-[#1a2332] dark:border-gray-800 py-6 md:py-8 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0f1d30] dark:text-gray-100 mb-4">Sustainable Engineering</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10">Committed to minimal environmental impact without compromising scale.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-6">
                <svg className="circular-chart w-full h-full" viewBox="0 0 36 36">
                  <path className="circle-bg" strokeWidth="3.8" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                  <path className="circle progress-92" strokeWidth="2.8" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="92, 100"></path>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-3xl text-[#0f1d30] dark:text-gray-100">
                  92<span className="text-lg text-gray-400">%</span>
                </div>
              </div>
              <h4 className="font-bold text-gray-700">Material Recycling</h4>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-6">
                <svg className="circular-chart w-full h-full" viewBox="0 0 36 36">
                  <path className="circle-bg" strokeWidth="3.8" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                  <path className="circle progress-35" strokeWidth="2.8" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="35, 100"></path>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-3xl text-[#0f1d30] dark:text-gray-100">
                  35<span className="text-lg text-gray-400">%</span>
                </div>
              </div>
              <h4 className="font-bold text-gray-700">Solar Powered</h4>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-6">
                <svg className="circular-chart w-full h-full" viewBox="0 0 36 36">
                  <path className="circle-bg" strokeWidth="3.8" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                  <path className="circle progress-100" strokeWidth="2.8" strokeLinecap="round" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" strokeDasharray="100, 100"></path>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-2xl text-[#0f1d30] dark:text-gray-100">
                  ZLD
                </div>
              </div>
              <h4 className="font-bold text-gray-700">Zero Liquid Discharge</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="bg-[#1e293b] py-16 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to work with a certified global partner?</h2>
            <p className="text-white/60">Leverage decades of metallurgical expertise for your next project.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
            <button className="border border-[#f59e0b] text-[#f59e0b] px-6 py-3 rounded font-bold hover:bg-[#f59e0b]/10 transition-colors text-sm text-center">
              Request Corporate Profile PDF
            </button>
            <Link href="/contact" className="bg-[#f59e0b] text-[#0f1d30] dark:text-gray-100 px-6 py-3 rounded font-bold hover:brightness-110 transition-colors text-sm text-center">
              Consult an Engineer
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </>
  );
}
