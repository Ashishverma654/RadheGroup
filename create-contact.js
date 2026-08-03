const fs = require('fs');
const path = require('path');

const pageContent = `"use client";
import React, { useState } from 'react';

export default function ContactPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedDivision, setSelectedDivision] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-lg py-sm max-w-[1280px] mx-auto bg-white/90 dark:bg-[#0f1d30]/90 backdrop-blur-md border-b border-outline-variant/20 shadow-md">
        <a href="/" className="font-headline-sm text-headline-sm font-bold text-primary-container tracking-tight">RADHE GROUP</a>
        <div className="hidden md:flex items-center gap-md">
          <a className="font-subheader text-subheader text-on-surface-variant hover:text-primary transition-colors duration-300" href="/">Home</a>
          <a className="font-subheader text-subheader text-on-surface-variant hover:text-primary transition-colors duration-300" href="/products">Products</a>
          <a className="font-subheader text-subheader text-on-surface-variant hover:text-primary transition-colors duration-300" href="/about">About</a>
          <a className="font-subheader text-subheader text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">ESG</a>
          <a className="font-subheader text-subheader text-primary border-b-2 border-primary pb-1" href="/contact">Global Presence</a>
        </div>
        <button className="bg-primary-container text-[#0f172a] font-subheader text-subheader font-bold px-sm py-xs rounded hover:brightness-110 transition-colors scale-95 duration-200" style={{boxShadow: '0 2px 0 0 rgba(0,0,0,0.1) inset'}}>Get Quote</button>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0f1d30] text-white pt-40 pb-20 px-8 flex flex-col items-center text-center">
        <h1 className="font-display-lg text-4xl md:text-5xl font-bold mb-6">Let's Engineer Together</h1>
        <p className="font-body-lg text-white/70 max-w-2xl mb-10">
          Whether you need a custom alloy composition, a bulk valve order, or a one-off precision casting — our engineering team responds within 4 business hours.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#f59e0b] text-[#0f1d30] px-6 py-3 rounded font-bold flex items-center gap-2 hover:brightness-110 transition-all">
            <span className="material-symbols-outlined text-sm">description</span> Send RFQ
          </button>
          <button className="border border-white/20 px-6 py-3 rounded font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
            <span className="material-symbols-outlined text-sm">call</span> Call Direct
          </button>
          <button className="border border-white/20 px-6 py-3 rounded font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
            <span className="material-symbols-outlined text-sm">location_on</span> Visit Office
          </button>
        </div>
      </section>

      {/* Orange Banner */}
      <div className="bg-[#f59e0b] text-[#0f1d30] font-bold text-center py-3 text-sm tracking-wide">
        Average Response Time: 4 Hours
      </div>

      {/* Main Content Layout */}
      <main className="bg-[#f8f9fa] py-16 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* Request for Quote Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0f1d30] mb-8">Request for Quote</h2>
              
              {/* Stepper */}
              <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-8 text-xs font-bold uppercase tracking-wider text-gray-400">
                <div className="text-[#f59e0b] border-b-2 border-[#f59e0b] pb-2 -mb-[9px]">Division</div>
                <div>Specs</div>
                <div>Docs</div>
                <div>Details</div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div 
                  onClick={() => setSelectedDivision('technocast')}
                  className={\`border rounded-lg p-6 cursor-pointer transition-all \${selectedDivision === 'technocast' ? 'border-[#f59e0b] bg-[#f59e0b]/5 ring-1 ring-[#f59e0b]' : 'border-gray-200 hover:border-[#f59e0b]/50'}\`}
                >
                  <h3 className="font-bold text-[#0f1d30] mb-2 text-lg">Radhe Technocast</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Investment Castings & Precision Components</p>
                </div>
                <div 
                  onClick={() => setSelectedDivision('flowmarshal')}
                  className={\`border rounded-lg p-6 cursor-pointer transition-all \${selectedDivision === 'flowmarshal' ? 'border-[#f59e0b] bg-[#f59e0b]/5 ring-1 ring-[#f59e0b]' : 'border-gray-200 hover:border-[#f59e0b]/50'}\`}
                >
                  <h3 className="font-bold text-[#0f1d30] mb-2 text-lg">Flow Marshal Valves</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">Industrial Valves & Fluid Control</p>
                </div>
              </div>

              {/* Next Button */}
              <div className="flex justify-end">
                <button className="bg-[#0f1d30] text-white px-8 py-2.5 rounded font-bold hover:bg-[#1a2f4c] transition-colors text-sm">
                  Next Step
                </button>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#0f1d30] rounded-xl p-6 text-white flex flex-col items-start shadow-sm border border-[#1a2f4c]">
                <span className="material-symbols-outlined text-[#f59e0b] mb-4">support_agent</span>
                <h4 className="font-bold mb-2">Call Us</h4>
                <p className="text-white/60 text-sm mb-1">HQ: +91 98765 43210</p>
                <p className="text-white/60 text-sm">Export: +91 98765 43211</p>
              </div>
              <div className="bg-[#0f1d30] rounded-xl p-6 text-white flex flex-col items-start shadow-sm border border-[#1a2f4c]">
                <span className="material-symbols-outlined text-[#22c55e] mb-4">chat</span>
                <h4 className="font-bold mb-2">WhatsApp</h4>
                <p className="text-white/60 text-sm mb-4">Instant technical support</p>
                <a href="#" className="text-[#22c55e] text-sm font-bold flex items-center gap-1 mt-auto">Start Chat <span className="material-symbols-outlined text-[14px]">arrow_forward</span></a>
              </div>
              <div className="bg-[#0f1d30] rounded-xl p-6 text-white flex flex-col items-start shadow-sm border border-[#1a2f4c]">
                <span className="material-symbols-outlined text-[#f59e0b] mb-4">mail</span>
                <h4 className="font-bold mb-2">Email Us</h4>
                <p className="text-white/60 text-sm mb-1 break-all">info@radhegroup.com</p>
                <p className="text-white/60 text-sm break-all">engineering@radhegroup.com</p>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0f1d30] mb-6">Frequently Asked Questions</h2>
              <div className="flex flex-col gap-4">
                <div className="border border-gray-200 rounded p-4">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(0)}>
                    <h4 className="font-bold text-[#0f1d30] text-sm">What is your standard lead time for custom castings?</h4>
                    <span className="material-symbols-outlined text-gray-400">{expandedFaq === 0 ? 'expand_less' : 'expand_more'}</span>
                  </div>
                  {expandedFaq === 0 && (
                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                      Typically 4-6 weeks for new developments and 2-4 weeks for repeat orders, depending on complexity and volume.
                    </p>
                  )}
                </div>
                <div className="border border-gray-200 rounded p-4">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(1)}>
                    <h4 className="font-bold text-[#0f1d30] text-sm">Do you provide Third Party Inspection (TPI) like SGS or TUV?</h4>
                    <span className="material-symbols-outlined text-gray-400">{expandedFaq === 1 ? 'expand_less' : 'expand_more'}</span>
                  </div>
                  {expandedFaq === 1 && (
                    <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                      Yes, we regularly coordinate with major TPI agencies based on client requirements.
                    </p>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            
            {/* Global Locations Map */}
            <div className="bg-[#0f1d30] rounded-xl relative overflow-hidden shadow-sm h-[320px] flex flex-col items-center justify-center border border-[#1a2f4c]">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-[#f59e0b] text-5xl mb-4">map</span>
                <h3 className="text-xl font-bold text-white mb-2">Global Locations</h3>
                <p className="text-white/70 text-sm">Explore our facilities</p>
              </div>
            </div>

            {/* Regional Sales Desks */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#0f1d30] mb-6">Regional Sales Desks</h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <div>
                    <h4 className="font-bold text-[#0f1d30] text-sm mb-1">Middle East</h4>
                    <p className="text-gray-500 text-sm">Mr. Ahmed</p>
                  </div>
                  <a href="#" className="text-[#f59e0b] hover:bg-[#f59e0b]/10 p-2 rounded-full transition-colors flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </a>
                </div>
                
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <div>
                    <h4 className="font-bold text-[#0f1d30] text-sm mb-1">Europe</h4>
                    <p className="text-gray-500 text-sm">Ms. Sarah</p>
                  </div>
                  <a href="#" className="text-[#f59e0b] hover:bg-[#f59e0b]/10 p-2 rounded-full transition-colors flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f1d30] text-white/70 w-full py-xl border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-md px-md max-w-[1280px] mx-auto">
          <div className="col-span-1">
            <div className="font-headline-sm text-headline-sm text-white mb-md">RADHE GROUP</div>
            <p className="text-white/70 text-sm mb-4">© 2024 RadheGroup. Precision Engineering Excellence.</p>
          </div>
          <div className="col-span-1 flex flex-col space-y-xs">
            <a className="text-white/70 hover:text-white transition-opacity text-sm" href="#">Privacy Policy</a>
            <a className="text-white/70 hover:text-white transition-opacity text-sm" href="#">Terms of Service</a>
          </div>
          <div className="col-span-1 flex flex-col space-y-xs">
            <a className="text-white/70 hover:text-white transition-opacity text-sm" href="#">Compliance</a>
            <a className="text-white/70 hover:text-white transition-opacity text-sm" href="#">Sitemap</a>
          </div>
          <div className="col-span-1 flex flex-col space-y-xs">
            <a className="text-white/70 hover:text-white transition-opacity text-sm" href="#">Global Offices</a>
            <a className="text-white/70 hover:text-white transition-opacity text-sm" href="#">Career</a>
          </div>
        </div>
      </footer>
    </>
  );
}
`;

fs.mkdirSync(path.join('C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app', 'contact'), { recursive: true });
fs.writeFileSync('C:\\\\Users\\\\akuma\\\\OneDrive\\\\Documents\\\\Desktop\\\\RadheGroup\\\\src\\\\app\\\\contact\\\\page.tsx', pageContent);

console.log('Contact page created successfully!');
