"use client";
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
      
      {/* Hero Section */}
      <section className="bg-[#0f1d30] dark:bg-[#0a1220] relative text-white pt-40 pb-20 px-8 flex flex-col items-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img alt="Engineering Background" className="w-full h-full object-cover opacity-60 grayscale-[0.3]" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" />
          <div className="absolute inset-0 bg-[#0f1d30]/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1d30]/30 to-[#0f1d30]/90"></div>
        </div>
        
        <div className="relative z-10 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Engineer Together</h1>
          <p className="text-white/80 max-w-2xl mx-auto mb-10">
            Whether you need a custom alloy composition, a bulk valve order, or a one-off precision casting — our engineering team responds within 4 business hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#f59e0b] text-[#0f1d30] dark:text-gray-100 px-6 py-3 rounded font-bold flex items-center gap-2 hover:brightness-110 transition-all">
              <span className="material-symbols-outlined text-sm">description</span> Send RFQ
            </button>
            <button className="border border-white/20 px-6 py-3 rounded font-bold flex items-center gap-2 hover:bg-white dark:bg-[#1a2332] dark:border-gray-800/10 transition-all">
              <span className="material-symbols-outlined text-sm">call</span> Call Direct
            </button>
            <button className="border border-white/20 px-6 py-3 rounded font-bold flex items-center gap-2 hover:bg-white dark:bg-[#1a2332] dark:border-gray-800/10 transition-all">
              <span className="material-symbols-outlined text-sm">location_on</span> Visit Office
            </button>
          </div>
        </div>
      </section>

      {/* Orange Banner */}
      <div className="bg-[#f59e0b] text-[#0f1d30] dark:text-gray-100 font-bold text-center py-3 text-sm tracking-wide">
        Average Response Time: 4 Hours
      </div>

      {/* Main Content Layout */}
      <main className="bg-[#f8f9fa] py-16 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* Request for Quote Card */}
            <div className="bg-white dark:bg-[#1a2332] dark:border-gray-800 rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0f1d30] dark:text-gray-100 mb-8">Request for Quote</h2>
              
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
                  className={`border rounded-lg p-6 cursor-pointer transition-all ${selectedDivision === 'technocast' ? 'border-[#f59e0b] bg-[#f59e0b]/5 ring-1 ring-[#f59e0b]' : 'border-gray-200 hover:border-[#f59e0b]/50'}`}
                >
                  <h3 className="font-bold text-[#0f1d30] dark:text-gray-100 mb-2 text-lg">Radhe Technocast</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">Investment Castings & Precision Components</p>
                </div>
                <div 
                  onClick={() => setSelectedDivision('flowmarshal')}
                  className={`border rounded-lg p-6 cursor-pointer transition-all ${selectedDivision === 'flowmarshal' ? 'border-[#f59e0b] bg-[#f59e0b]/5 ring-1 ring-[#f59e0b]' : 'border-gray-200 hover:border-[#f59e0b]/50'}`}
                >
                  <h3 className="font-bold text-[#0f1d30] dark:text-gray-100 mb-2 text-lg">Flow Marshal Valves</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">Industrial Valves & Fluid Control</p>
                </div>
              </div>

              {/* Next Button */}
              <div className="flex justify-end">
                <button 
                  onClick={() => selectedDivision && setActiveStep(2)}
                  className={`px-8 py-2.5 rounded font-bold transition-colors text-sm ${selectedDivision ? 'bg-[#0f1d30] dark:bg-[#0a1220] text-white hover:bg-[#1a2f4c]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                >
                  Next Step
                </button>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="tel:+919876543210" className="group bg-[#0f1d30] dark:bg-[#0a1220] rounded-xl p-6 text-white flex flex-col items-start shadow-sm border border-[#1a2f4c] hover:border-[#f59e0b] transition-all cursor-pointer">
                <span className="material-symbols-outlined text-[#f59e0b] mb-4 group-hover:scale-110 transition-transform">support_agent</span>
                <h4 className="font-bold mb-2 group-hover:text-[#f59e0b] transition-colors">Call Us</h4>
                <p className="text-white/60 text-base mb-1">HQ: +91 98765 43210</p>
                <p className="text-white/60 text-base">Export: +91 98765 43211</p>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="group bg-[#0f1d30] dark:bg-[#0a1220] rounded-xl p-6 text-white flex flex-col items-start shadow-sm border border-[#1a2f4c] hover:border-[#22c55e] transition-all cursor-pointer">
                <span className="material-symbols-outlined text-[#22c55e] mb-4 group-hover:scale-110 transition-transform">chat</span>
                <h4 className="font-bold mb-2 group-hover:text-[#22c55e] transition-colors">WhatsApp</h4>
                <p className="text-white/60 text-base mb-4">Instant technical support</p>
                <span className="text-[#22c55e] text-sm font-bold flex items-center gap-1 mt-auto">Start Chat <span className="material-symbols-outlined text-[14px]">arrow_forward</span></span>
              </a>
              <a href="mailto:info@radhegroup.com" className="group bg-[#0f1d30] dark:bg-[#0a1220] rounded-xl p-6 text-white flex flex-col items-start shadow-sm border border-[#1a2f4c] hover:border-[#f59e0b] transition-all cursor-pointer">
                <span className="material-symbols-outlined text-[#f59e0b] mb-4 group-hover:scale-110 transition-transform">mail</span>
                <h4 className="font-bold mb-2 group-hover:text-[#f59e0b] transition-colors">Email Us</h4>
                <p className="text-white/60 text-base mb-1 break-all">info@radhegroup.com</p>
                <p className="text-white/60 text-base break-all">engineering@radhegroup.com</p>
              </a>
            </div>

            {/* FAQ */}
            <div className="bg-white dark:bg-[#1a2332] dark:border-gray-800 rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#0f1d30] dark:text-gray-100 mb-6">Frequently Asked Questions</h2>
              <div className="flex flex-col gap-4">
                <div className="border border-gray-200 rounded p-4">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(0)}>
                    <h4 className="font-bold text-[#0f1d30] dark:text-gray-100 text-sm">What is your standard lead time for custom castings?</h4>
                    <span className="material-symbols-outlined text-gray-400">{expandedFaq === 0 ? 'expand_less' : 'expand_more'}</span>
                  </div>
                  {expandedFaq === 0 && (
                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                      Typically 4-6 weeks for new developments and 2-4 weeks for repeat orders, depending on complexity and volume.
                    </p>
                  )}
                </div>
                <div className="border border-gray-200 rounded p-4">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(1)}>
                    <h4 className="font-bold text-[#0f1d30] dark:text-gray-100 text-sm">Do you provide Third Party Inspection (TPI) like SGS or TUV?</h4>
                    <span className="material-symbols-outlined text-gray-400">{expandedFaq === 1 ? 'expand_less' : 'expand_more'}</span>
                  </div>
                  {expandedFaq === 1 && (
                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-base leading-relaxed">
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
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="group bg-[#0f1d30] dark:bg-[#0a1220] rounded-xl relative overflow-hidden shadow-sm h-[320px] flex flex-col items-center justify-center border border-[#1a2f4c] hover:border-[#f59e0b] transition-all cursor-pointer">
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div className="relative z-10 flex flex-col items-center text-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[#f59e0b] text-5xl mb-4 group-hover:-mt-2 transition-all">map</span>
                <h3 className="text-xl font-bold text-white mb-2">Global Locations</h3>
                <p className="text-white/70 text-base mb-4">Explore our facilities</p>
                <span className="text-[#f59e0b] text-sm font-bold flex items-center opacity-0 group-hover:opacity-100 transition-opacity">Open Maps <span className="material-symbols-outlined text-[16px] ml-1">open_in_new</span></span>
              </div>
            </a>

            {/* Regional Sales Desks */}
            <div className="bg-white dark:bg-[#1a2332] dark:border-gray-800 rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#0f1d30] dark:text-gray-100 mb-6">Regional Sales Desks</h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <div>
                    <h4 className="font-bold text-[#0f1d30] dark:text-gray-100 text-sm mb-1">Middle East</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-base">Mr. Ahmed</p>
                  </div>
                  <a href="mailto:ahmed@radhegroup.com" className="text-[#f59e0b] hover:bg-[#f59e0b] hover:text-white p-2 rounded-full transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </a>
                </div>
                
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <div>
                    <h4 className="font-bold text-[#0f1d30] dark:text-gray-100 text-sm mb-1">Europe</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-base">Ms. Sarah</p>
                  </div>
                  <a href="mailto:sarah@radhegroup.com" className="text-[#f59e0b] hover:bg-[#f59e0b] hover:text-white p-2 rounded-full transition-all flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      
    </>
  );
}
