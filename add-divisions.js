const fs = require('fs');

const divisionsJSX = `
      {/* Group Companies Section */}
      <section className="bg-white py-24 px-4 md:px-8 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#f59e0b] text-xs font-bold tracking-widest uppercase mb-2">Our Foundation</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1d30]">The Companies of RadheGroup</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Four specialized divisions working in synergy to provide end-to-end metallurgical and engineering solutions.</p>
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
                <h3 className="text-2xl font-bold text-[#0f1d30] mb-3">Radhe Technocast</h3>
                <p className="text-[#f59e0b] font-bold text-sm mb-4">Precision Investment Casting & Machining</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Specializing in the lost wax process, Radhe Technocast produces highly intricate, tight-tolerance components for the aerospace, automotive, and industrial sectors. Our facilities in Rajkot and Vavdi feature state-of-the-art CNC machining centers, allowing us to deliver ready-to-assemble parts.
                </p>
                <a href="http://radhetechnocast.com" target="_blank" rel="noreferrer" className="text-[#0f1d30] font-bold text-sm flex items-center hover:text-[#f59e0b] transition-colors">
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
                <h3 className="text-2xl font-bold text-[#0f1d30] mb-3">Flow Marshal Valves</h3>
                <p className="text-[#f59e0b] font-bold text-sm mb-4">High-Performance Industrial Valves</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Flow Marshal Valves manufactures severe service valves including Gate, Globe, Check, and Pressure Seal valves for the Oil & Gas and Power sectors. We focus heavily on API-6D compliance, ensuring our pipeline valves perform flawlessly under extreme pressure and corrosive environments.
                </p>
                <a href="http://flowmarshalvalves.com" target="_blank" rel="noreferrer" className="text-[#0f1d30] font-bold text-sm flex items-center hover:text-[#f59e0b] transition-colors">
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
                <h3 className="text-2xl font-bold text-[#0f1d30] mb-3">Radhe Industries</h3>
                <p className="text-[#f59e0b] font-bold text-sm mb-4">Heavy Duty Castings & Fabrications</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Operating an ISO 9001:2015 certified foundry in Bakrol, Ahmedabad, Radhe Industries specializes in large-scale M.S., S.S., and Alloy Steel cast parts. We are a trusted provider of IBR approved pressure fittings, pipe spools, and heavy structural components for critical infrastructure.
                </p>
                <a href="http://radheindustries.in" target="_blank" rel="noreferrer" className="text-[#0f1d30] font-bold text-sm flex items-center hover:text-[#f59e0b] transition-colors">
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
                <h3 className="text-2xl font-bold text-[#0f1d30] mb-3">Radhe Alloys</h3>
                <p className="text-[#f59e0b] font-bold text-sm mb-4">Alloy Steels & Composites</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Radhe Alloys supplies mill-certified, traceable special alloys designed for high stress and heavy wear applications. We formulate and produce premium round bars, billets, and composite structural steels, including Duplex, Inconel, and Monel alloys for aerospace and marine sectors.
                </p>
                <a href="http://radhealloys.com" target="_blank" rel="noreferrer" className="text-[#0f1d30] font-bold text-sm flex items-center hover:text-[#f59e0b] transition-colors">
                  Visit Website <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

`;

const targetFile = 'src/app/industries/page.tsx';
let content = fs.readFileSync(targetFile, 'utf-8');

if (!content.includes('The Companies of RadheGroup')) {
  // Insert before {/* Global Distribution Network Map */}
  content = content.replace('{/* Global Distribution Network Map */}', divisionsJSX + '      {/* Global Distribution Network Map */}');
  fs.writeFileSync(targetFile, content);
  console.log("Added group divisions section to industries page.");
} else {
  console.log("Section already exists.");
}
