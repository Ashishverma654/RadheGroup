import React from 'react';

export function Footer() {
  return (
    <>
      {/* Animated Footer */}
      <footer className="animated-footer-bg text-white w-full py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-[1280px] mx-auto">
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold text-white mb-6">RadheGroup</h3>
            <p className="text-base mb-6 text-white/90 leading-relaxed">Engineering Excellence for Global Infrastructure.</p>
            <div className="flex gap-6">
              <a className="text-white/80 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-2xl">share</span></a>
              <a className="text-white/80 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-2xl">contact_mail</span></a>
            </div>
          </div>
          <div>
            <h4 className="text-base font-bold text-primary-container mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li><a className="text-base text-white/80 hover:text-white transition-colors" href="/products">Industrial Units</a></li>
              <li><a className="text-base text-white/80 hover:text-white transition-colors" href="#">Technical Papers</a></li>
              <li><a className="text-base text-white/80 hover:text-white transition-colors" href="/about">Media Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold text-primary-container mb-6 uppercase tracking-wider">Compliance</h4>
            <ul className="space-y-4">
              <li><a className="text-base text-white/80 hover:text-white transition-colors" href="#">ISO Certifications</a></li>
              <li><a className="text-base text-white/80 hover:text-white transition-colors" href="#">Environmental Policy</a></li>
              <li><a className="text-base text-white/80 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base font-bold text-primary-container mb-6 uppercase tracking-wider">Headquarters</h4>
            <p className="text-base text-white/80 leading-relaxed">
              Plot No. 124, GIDC Estate,<br/>
              Phase-II, Metoda,<br/>
              Rajkot - 360021, Gujarat.
            </p>
            <p className="mt-4 text-base font-bold text-white tracking-wide">T: +91 2827 2872XX</p>
          </div>
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 pt-8 mt-10 border-t border-white/20 text-center text-sm text-white/60">
          © 2024 RadheGroup Industrial Holdings. Precision Engineering & Global Logistics.
        </div>
      </footer>
      {/* Floating widgets moved to global RfqButton component */}
    </>
  );
}
