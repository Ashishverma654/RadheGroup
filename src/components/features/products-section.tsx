"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cog, Droplet, Factory, Wrench, ArrowRight, Download, FileText, ChevronRight, Calculator, Info } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

// Chemical grades data
const chemicalGrades = [
  {
    name: "AISI 4140 (Chromium-Molybdenum)",
    elements: [
      { symbol: "C", name: "Carbon", pct: 0.40, color: "bg-blue-500" },
      { symbol: "Cr", name: "Chromium", pct: 0.95, color: "bg-emerald-500" },
      { symbol: "Mn", name: "Manganese", pct: 0.85, color: "bg-purple-500" },
      { symbol: "Mo", name: "Molybdenum", pct: 0.20, color: "bg-orange-500" },
      { symbol: "Si", name: "Silicon", pct: 0.25, color: "bg-amber-500" },
      { symbol: "Fe", name: "Iron", pct: 97.35, color: "bg-slate-400" }
    ],
    properties: {
      tensile: "850 - 1000 MPa",
      yield: "650 - 800 MPa",
      hardness: "28 - 32 HRC (Treated)",
      elongation: "15 - 20%"
    }
  },
  {
    name: "Stainless Steel 316L (Low Carbon)",
    elements: [
      { symbol: "Cr", name: "Chromium", pct: 17.0, color: "bg-emerald-500" },
      { symbol: "Ni", name: "Nickel", pct: 12.0, color: "bg-indigo-500" },
      { symbol: "Mo", name: "Molybdenum", pct: 2.5, color: "bg-orange-500" },
      { symbol: "Mn", name: "Manganese", pct: 2.0, color: "bg-purple-500" },
      { symbol: "C", name: "Carbon", pct: 0.03, color: "bg-blue-500" },
      { symbol: "Fe", name: "Iron", pct: 68.47, color: "bg-slate-400" }
    ],
    properties: {
      tensile: "485 - 515 MPa",
      yield: "170 - 205 MPa",
      hardness: "70 - 90 HRB",
      elongation: "40 - 50%"
    }
  },
  {
    name: "ASTM A216 WCB (Cast Carbon Steel)",
    elements: [
      { symbol: "Mn", name: "Manganese", pct: 1.0, color: "bg-purple-500" },
      { symbol: "Si", name: "Silicon", pct: 0.6, color: "bg-amber-500" },
      { symbol: "C", name: "Carbon", pct: 0.3, color: "bg-blue-500" },
      { symbol: "Fe", name: "Iron", pct: 98.1, color: "bg-slate-400" }
    ],
    properties: {
      tensile: "485 - 655 MPa",
      yield: "250 MPa min",
      hardness: "137 HB min",
      elongation: "22% min"
    }
  }
]

// Valve B16.10 dimensions chart
const valveDimensions = [
  { size: "2\" (DN 50)", c150: 178, c300: 216, c600: 292, weight: 18 },
  { size: "3\" (DN 80)", c150: 203, c300: 282, c600: 356, weight: 32 },
  { size: "4\" (DN 100)", c150: 229, c300: 305, c600: 432, weight: 46 },
  { size: "6\" (DN 150)", c150: 267, c300: 403, c600: 559, weight: 77 },
  { size: "8\" (DN 200)", c150: 292, c300: 419, h600: 660, c600: 660, weight: 125 },
  { size: "10\" (DN 250)", c150: 330, c300: 457, c600: 787, weight: 190 },
  { size: "12\" (DN 300)", c150: 356, c300: 502, c600: 838, weight: 270 }
]

const productTabs = [
  {
    id: "castings",
    company: "Radhe Technocast",
    label: "Precision Castings",
    icon: Cog,
    heroImage: "/images/products/hero-castings.svg",
    description: "Radhe Technocast specializes in investment casting (lost wax process) and CNC machining of complex components for critical industries. Our Rajkot & Vavdi casting facilities produce ready-to-assemble structural parts.",
    products: [
      {
        name: "Precision Investment Castings",
        variants: [
          {
            title: "Valve Body Castings",
            image: "/images/products/casting-valve-body.svg",
            description: "High-grade stainless steel valve body castings featuring intricate internal flow passages.",
            specs: [
              { label: "Material Grade", value: "ASTM A351 CF8M / CF3M" },
              { label: "Tolerance", value: "ISO 8062 CT6 Grade" },
              { label: "Roughness", value: "Ra 3.2 μm (as cast)" },
              { label: "Unit Weight", value: "1.5 kg - 45 kg" },
              { label: "Testing", value: "100% Spectrography, Dye Penetrant" }
            ]
          },
          {
            title: "Pump Impeller Castings",
            image: "/images/products/pump-impeller.svg",
            description: "Duplex steel closed impellers designed for balanced dynamic flow in chemical transfer pumps.",
            specs: [
              { label: "Material Grade", value: "Duplex SS 2205 / ASTM A890 Gr 4A" },
              { label: "Tolerance", value: "ISO 8062 CT7 Grade" },
              { label: "Roughness", value: "Ra 2.4 μm" },
              { label: "Max Diameter", value: "450 mm" },
              { label: "Balancing", value: "ISO 1940 Grade G2.5" }
            ]
          }
        ]
      },
      {
        name: "CNC Machined Components",
        variants: [
          {
            title: "Machined Gear Shafts",
            image: "/images/products/gear-shaft.svg",
            description: "Induction-hardened spline shafts engineered for heavy-duty transmission assemblies.",
            specs: [
              { label: "Material Grade", value: "Alloy Steel AISI 4140 / 8620" },
              { label: "Accuracy", value: "Splines within ±0.01 mm" },
              { label: "Hardness", value: "58 - 62 HRC (Case Depth 1.2 mm)" },
              { label: "Max Length", value: "800 mm" },
              { label: "Finishing", value: "Cylindrical Grinding to Ra 0.4 μm" }
            ]
          },
          {
            title: "Precision Bearing Housings",
            image: "/images/products/bearing-housing.svg",
            description: "Cast iron and carbon steel machined bearing blocks for high-speed industrial fans.",
            specs: [
              { label: "Material Grade", value: "Grey Cast Iron GG25 / ASTM A48" },
              { label: "Accuracy", value: "Bore diameter tolerance H7" },
              { label: "Max Swing", value: "600 mm" },
              { label: "Inspection", value: "CMM Coordinate Measuring Machine Verified" },
              { label: "Coating", value: "Anti-corrosive primer coating" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "valves",
    company: "Flow Marshal Valves",
    label: "Industrial Valves",
    icon: Droplet,
    heroImage: "/images/products/hero-valves.svg",
    description: "Flow Marshal Valves (Ahmedabad) is a leading exporter of heavy-duty gate, globe, and check valves designed to comply with API 600, ASME B16.34, and API 598 standards.",
    products: [
      {
        name: "Cast Steel Gate Valves",
        variants: [
          {
            title: "Bolted Bonnet Gate Valve",
            image: "/images/products/gate-valve.svg",
            description: "OS&Y gate valve for general isolation service in oil refineries and water treatment spools.",
            specs: [
              { label: "Standards", value: "API 600 / ASME B16.34" },
              { label: "Class Rating", value: "150# to 600# (PN 16 to PN 100)" },
              { label: "Size Range", value: "2\" to 24\" (DN 50 to DN 600)" },
              { label: "Trim Configuration", value: "API Trim 8 (13Cr / Stellite)" },
              { label: "End Connections", value: "Flanged RF / RTJ ASME B16.5" }
            ]
          },
          {
            title: "Pressure Seal Gate Valve",
            image: "/images/products/pressure-seal-valve.svg",
            description: "High-pressure, high-temperature gate valves utilizing line pressure to lock the body-bonnet joint.",
            specs: [
              { label: "Standards", value: "ASME B16.34 / API 600" },
              { label: "Class Rating", value: "900# to 2500# (PN 160 to PN 420)" },
              { label: "Size Range", value: "2\" to 12\"" },
              { label: "Body Materials", value: "ASTM A217 Gr. WC6, WC9, C12A" },
              { label: "Ends", value: "Butt-Weld (BW) ASME B16.25" }
            ]
          }
        ]
      },
      {
        name: "Globe & Non-Return Valves",
        variants: [
          {
            title: "Bolted Bonnet Globe Valve",
            image: "/images/products/pump-impeller.svg",
            description: "Engineered for precise flow throttling and control with minimal erosion under high velocity.",
            specs: [
              { label: "Standards", value: "BS 1873 / ASME B16.34" },
              { label: "Class Rating", value: "150# to 600#" },
              { label: "Size Range", value: "2\" to 16\"" },
              { label: "Disc Type", value: "Plug Disc (Stellite Hard Faced)" },
              { label: "Operation", value: "Handwheel / Gear Operated / Actuator ready" }
            ]
          },
          {
            title: "Swing Check Valve",
            image: "/images/products/casting-valve-body.svg",
            description: "Non-return check valves that allow free flow in one direction and instantly close to prevent backflow.",
            specs: [
              { label: "Standards", value: "BS 1868 / API 594" },
              { label: "Class Rating", value: "150# to 600#" },
              { label: "Design", value: "Bolted Cover, Renewable Seat Ring" },
              { label: "Seat Leakage", value: "API 598 Compliant Zero Leakage" },
              { label: "Hinge Pin", value: "Corrosion resistant SS 410 / SS 316" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "forgings",
    company: "Radhe Industries",
    label: "Heavy Duty Castings",
    icon: Factory,
    heroImage: "/images/products/hero-forgings.svg",
    description: "Radhe Industries (Bakrol, Ahmedabad) operates an ISO 9001:2015 certified casting foundry specializing in M.S., S.S. and Alloy Steel cast parts, including IBR approved pressure fittings.",
    products: [
      {
        name: "IBR Approved Pressure Castings",
        variants: [
          {
            title: "IBR Pipe Spools",
            image: "/images/products/pump-impeller.svg",
            description: "Indian Boiler Regulations (IBR) certified straight and custom bend pipeline spools.",
            specs: [
              { label: "Compliance", value: "IBR Form III-F Approved" },
              { label: "Steel Grades", value: "Carbon Steel ASTM A216 WCB" },
              { label: "Max Working Temp", value: "425°C (800°F)" },
              { label: "NDT Inspection", value: "Radiography, Magnetic Particle" },
              { label: "Thickness", value: "Schedule 40 to Schedule 160" }
            ]
          },
          {
            title: "IBR Flanged Tees & Elbows",
            image: "/images/products/bearing-housing.svg",
            description: "High-pressure boiler steam fittings with cast-in flanged configurations.",
            specs: [
              { label: "Compliance", value: "IBR Certified Boiler Grade" },
              { label: "Steel Grades", value: "Alloy Steel ASTM A217 WC6" },
              { label: "Size Range", value: "1\" to 12\" Nom. Size" },
              { label: "Rating", value: "Class 150# / 300# flanged ends" },
              { label: "NDT", value: "Dye Penetrant + Hydro-test at 1.5x rating" }
            ]
          }
        ]
      },
      {
        name: "Heavy Duty Custom Castings",
        variants: [
          {
            title: "Industrial Gearbox Housings",
            image: "/images/products/gear-shaft.svg",
            description: "Monolithic, heavy-cast machine housings designed for power plant and crusher gear assemblies.",
            specs: [
              { label: "Material Grade", value: "Cast Carbon Steel ASTM A216 WCB" },
              { label: "Casting Weight", value: "1,500 kg to 5,000 kg" },
              { label: "Process", value: "No-Bake Resin Sand Casting" },
              { label: "Heat Treatment", value: "Normalizing + Stress Relieving" },
              { label: "Dimensions", value: "Up to 3m x 2m x 1.5m blocks" }
            ]
          },
          {
            title: "Machinery Bed Plates",
            image: "/images/products/bed-plate.svg",
            description: "Heavy structural foundation frames featuring vibration absorption profiles.",
            specs: [
              { label: "Material Grade", value: "Grey Cast Iron GG25 / ASTM A48" },
              { label: "Casting Weight", value: "Up to 4,200 kg" },
              { label: "Surface Prep", value: "Shot blasting to Sa 2.5 standard" },
              { label: "Tolerances", value: "ISO 8062 CT9 Grade" },
              { label: "Flatness", value: "Machined within 0.1 mm over 2 meters" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "alloys",
    company: "Radhe Alloys",
    label: "Alloy Solutions",
    icon: Wrench,
    heroImage: "/images/products/hero-valves.svg",
    description: "Radhe Alloys supplies mill-certified, traceable special alloys, round bars, billets, and composited structural steels designed for high stress and heavy wear applications.",
    products: [
      {
        name: "Forged Alloy Steel Round Bars",
        variants: [
          {
            title: "AISI 4140 Round Bar",
            image: "/images/products/casting-valve-body.svg",
            description: "Chromium-Molybdenum steel forged round bars optimized for gears and heavy-duty shafting.",
            specs: [
              { label: "Material Grade", value: "AISI 4140 / DIN 42CrMo4" },
              { label: "Diameter Range", value: "50 mm to 300 mm" },
              { label: "Condition", value: "Hardened & Tempered (28-32 HRC base)" },
              { label: "Standards", value: "ASTM A29 / ASTM A322" },
              { label: "Traceability", value: "100% Heat Number Stamped with Mill Test Certificates" }
            ]
          },
          {
            title: "EN24 Heavy Forged Billet",
            image: "/images/products/pump-impeller.svg",
            description: "Nickel-Chromium-Molybdenum high-tensile steel billets forged for heavy crankshafts and high-stress gears.",
            specs: [
              { label: "Material Grade", value: "BS 970 817M40 (EN24)" },
              { label: "Section Size", value: "150 mm to 600 mm square / rounds" },
              { label: "Tensile Strength", value: "850 - 1000 MPa (Condition T)" },
              { label: "Reduction Ratio", value: "4:1 Minimum Hot Reduction" },
              { label: "Ultrasonic Test", value: "Tested to SEP 1921 Class C/c or D/d standards" }
            ]
          }
        ]
      }
    ]
  }
]

// Component to handle individual Product Gallery Card
function ProductGalleryCard({ product }: { product: typeof productTabs[0]["products"][0] }) {
  const [selectedIdx, setSelectedIdx] = React.useState(0)
  const activeVar = product.variants[selectedIdx]

  return (
    <div className="bg-secondary/30 backdrop-blur-md rounded-3xl border border-border/50 overflow-hidden shadow-lg flex flex-col justify-between h-full">
      <div>
        {/* Main Display Image */}
        <div className="relative h-72 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img 
              key={activeVar.title}
              src={activeVar.image} 
              alt={activeVar.title} 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground font-bold text-xs uppercase tracking-wider">
              {product.name}
            </span>
            <h4 className="text-3xl font-extrabold text-foreground mt-2 drop-shadow-md">{activeVar.title}</h4>
          </div>
        </div>

        {/* Variant Selectors (Image Thumbnails) */}
        {product.variants.length > 1 && (
          <div className="px-8 pt-6 flex gap-3 items-center">
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider mr-2">Select Variant:</span>
            {product.variants.map((v, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                  selectedIdx === idx ? "border-primary scale-105 shadow-md" : "border-border hover:border-primary/50"
                }`}
              >
                <img src={v.image} alt={v.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Specs Content */}
        <div className="p-8 pt-4">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed min-h-[56px]">{activeVar.description}</p>
          
          <div className="rounded-2xl border border-border/50 overflow-hidden">
            <div className="bg-primary/10 px-5 py-3 border-b border-border/50">
              <h5 className="text-base font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                <FileText className="w-4.5 h-4.5" /> Specifications Table
              </h5>
            </div>
            <div className="divide-y divide-border/30">
              {activeVar.specs.map((spec, sIdx) => (
                <div key={sIdx} className="flex flex-col sm:flex-row sm:items-center px-5 py-3 hover:bg-muted/30 transition-colors text-sm sm:text-base">
                  <span className="font-bold text-foreground sm:w-2/5 mb-0.5 sm:mb-0 flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    {spec.label}
                  </span>
                  <span className="text-muted-foreground sm:w-3/5 pl-5 sm:pl-0 font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-8 pt-0 flex gap-4">
        <a 
          href="#contact" 
          className={buttonVariants({ variant: "default", size: "lg", className: "text-lg font-bold px-8 h-14 shadow-md flex-1" })}
          onClick={(e) => {
            e.preventDefault();
            const rfqBtn = document.querySelector('[data-slot="sheet-trigger"]') as HTMLButtonElement;
            if (rfqBtn) rfqBtn.click();
          }}
        >
          Get Quote
        </a>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); alert("Technical datasheet PDF started downloading."); }}
          className={buttonVariants({ variant: "outline", size: "lg", className: "text-lg font-bold px-6 h-14 flex items-center gap-2" })}
        >
          <Download className="w-5 h-5" /> PDF
        </a>
      </div>
    </div>
  )
}

export function ProductsSection() {
  const [activeTab, setActiveTab] = React.useState("castings")
  const [selectedGrade, setSelectedGrade] = React.useState(chemicalGrades[0])
  
  // Pressure rating estimator state
  const [pressureClass, setPressureClass] = React.useState(150)
  const [temperature, setTemperature] = React.useState(100)
  const [estimatedPressure, setEstimatedPressure] = React.useState(285)

  // Recalculate pressure limits based on ASME B16.5 Carbon Steel Group 1.1 (ASTM A105)
  React.useEffect(() => {
    let baseRating = 0
    if (pressureClass === 150) {
      if (temperature <= 100) baseRating = 285
      else if (temperature <= 200) baseRating = 260
      else if (temperature <= 300) baseRating = 230
      else if (temperature <= 400) baseRating = 200
      else baseRating = 170
    } else if (pressureClass === 300) {
      if (temperature <= 100) baseRating = 740
      else if (temperature <= 200) baseRating = 680
      else if (temperature <= 300) baseRating = 655
      else if (temperature <= 400) baseRating = 635
      else baseRating = 605
    } else if (pressureClass === 600) {
      if (temperature <= 100) baseRating = 1480
      else if (temperature <= 200) baseRating = 1360
      else if (temperature <= 300) baseRating = 1310
      else if (temperature <= 400) baseRating = 1265
      else baseRating = 1205
    }
    setEstimatedPressure(baseRating)
  }, [pressureClass, temperature])

  const activeData = productTabs.find(t => t.id === activeTab)!

  return (
    <section id="products" className="w-full py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(var(--primary-rgb,59,130,246),0.02),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-5xl mx-auto"
        >
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-bold text-lg mb-8 uppercase tracking-widest">
            Product Catalog
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-foreground tracking-tight">
            Products & Technical Specifications
          </h2>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            Click on each manufacturing division below to view technical dimension tables, chemical compositions, and pressure calculators.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {productTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-8 py-5 rounded-2xl text-xl font-bold transition-all duration-300 border-2 shadow-sm ${
                activeTab === tab.id 
                  ? "bg-primary text-primary-foreground border-primary shadow-xl scale-105" 
                  : "bg-secondary/50 text-foreground border-border hover:border-primary/50 hover:bg-secondary"
              }`}
            >
              <tab.icon className="w-6 h-6" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Company Banner */}
            <div className="relative rounded-3xl overflow-hidden mb-16 h-[300px] md:h-[400px]">
              <img 
                src={activeData.heroImage} 
                alt={activeData.company} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-16 max-w-4xl">
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">{activeData.company}</h3>
                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed">{activeData.description}</p>
              </div>
            </div>

            {/* Products Grid with Gallery Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
              {activeData.products.map((product) => (
                <ProductGalleryCard key={product.name} product={product} />
              ))}
            </div>

            {/* Valves Dimension Matrix & Pressure Estimator (Only for Flow Marshal tab) */}
            {activeTab === "valves" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
                
                {/* ASME B16.10 Size Chart */}
                <div className="lg:col-span-2 bg-secondary/20 rounded-3xl p-8 border border-border/50">
                  <h4 className="text-2xl font-extrabold mb-6 flex items-center gap-2">
                    <FileText className="w-7 h-7 text-primary" />
                    ASME B16.10 Valve Dimension Matrix (Face-to-Face)
                  </h4>
                  <p className="text-lg text-muted-foreground mb-6">
                    Standard dimensions in mm for Cast Steel Gate Valves (RF - Raised Face ends).
                  </p>
                  <div className="overflow-x-auto rounded-2xl border border-border/50">
                    <table className="w-full text-left text-lg">
                      <thead className="bg-primary/10 text-primary uppercase font-bold text-sm tracking-wider">
                        <tr>
                          <th className="p-4">Nominal Size (NPS)</th>
                          <th className="p-4">Class 150# (L)</th>
                          <th className="p-4">Class 300# (L)</th>
                          <th className="p-4">Class 600# (L)</th>
                          <th className="p-4">Approx Weight (kg)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/30 font-medium">
                        {valveDimensions.map((row, idx) => (
                          <tr key={idx} className="hover:bg-muted/30 transition-colors">
                            <td className="p-4 font-bold">{row.size}</td>
                            <td className="p-4">{row.c150} mm</td>
                            <td className="p-4">{row.c300} mm</td>
                            <td className="p-4">{row.c600} mm</td>
                            <td className="p-4 text-muted-foreground">{row.weight} kg</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ASME B16.5 Pressure Rating Estimator */}
                <div className="bg-background rounded-3xl p-8 border-2 border-primary/30 shadow-xl flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-extrabold mb-4 flex items-center gap-2">
                      <Calculator className="w-7 h-7 text-primary" />
                      ASME B16.5 P-T Estimator
                    </h4>
                    <p className="text-base text-muted-foreground mb-6">
                      Estimate maximum safe working pressure limits for Carbon Steel (ASTM A105 / WCB).
                    </p>

                    <div className="space-y-6">
                      {/* Pressure Class */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-muted-foreground uppercase">Class Rating</label>
                        <div className="grid grid-cols-3 gap-2">
                          {[150, 300, 600].map(c => (
                            <button
                              key={c}
                              onClick={() => setPressureClass(c)}
                              className={`py-3 rounded-xl font-bold text-lg border-2 transition-all ${
                                pressureClass === c 
                                  ? "border-primary bg-primary/10 text-primary" 
                                  : "border-border hover:bg-muted"
                              }`}
                            >
                              {c}#
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Temperature Range */}
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-muted-foreground uppercase flex justify-between">
                          <span>Max Temperature</span>
                          <span className="text-primary font-bold">{temperature}°F ({Math.round((temperature-32)*5/9)}°C)</span>
                        </label>
                        <input
                          type="range"
                          min="100"
                          max="500"
                          step="100"
                          value={temperature}
                          onChange={(e) => setTemperature(parseInt(e.target.value))}
                          className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground font-semibold">
                          <span>100°F</span>
                          <span>300°F</span>
                          <span>500°F</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Estimation Output */}
                  <div className="mt-8 pt-6 border-t border-border/50">
                    <div className="text-sm font-bold text-muted-foreground uppercase mb-1">Max Safe Pressure Limit</div>
                    <div className="text-4xl font-extrabold text-primary flex items-baseline gap-2">
                      {estimatedPressure} <span className="text-xl font-bold text-foreground">PSI</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3 leading-normal flex items-start gap-2">
                      <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      Calculations are based on non-shock limits for Group 1.1 steel under ASME B16.5 standards.
                    </p>
                  </div>

                </div>

              </div>
            )}

            {/* Chemical Composition Chart (Only for Alloys & Forgings tab) */}
            {(activeTab === "alloys" || activeTab === "forgings") && (
              <div className="bg-secondary/20 rounded-3xl p-8 border border-border/50 mt-16 max-w-5xl mx-auto">
                <h4 className="text-2xl font-extrabold mb-6 flex items-center gap-2">
                  <Wrench className="w-7 h-7 text-primary" />
                  Alloy Grade Chemical Compositions & Material Properties
                </h4>
                <p className="text-lg text-muted-foreground mb-8">
                  Select an industrial material grade to visualize its elements, metallurgical composition, and mechanical properties.
                </p>

                {/* Select grade */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {chemicalGrades.map((grade, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedGrade(grade)}
                      className={`px-6 py-3 rounded-xl font-bold text-lg border-2 transition-all ${
                        selectedGrade.name === grade.name 
                          ? "border-primary bg-primary/10 text-primary" 
                          : "border-border hover:bg-muted"
                      }`}
                    >
                      {grade.name.split(" ")[0]}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Visual Makeup Bars */}
                  <div className="space-y-5">
                    <h5 className="text-lg font-bold text-foreground uppercase tracking-wider mb-2">Element Distribution (%)</h5>
                    {selectedGrade.elements.map((el, elIdx) => (
                      <div key={elIdx} className="space-y-1">
                        <div className="flex justify-between text-base font-semibold">
                          <span className="flex items-center gap-2">
                            <span className={`w-3.5 h-3.5 rounded-full ${el.color}`} />
                            <span className="font-bold">{el.symbol}</span> — {el.name}
                          </span>
                          <span className="font-bold text-muted-foreground">{el.pct}%</span>
                        </div>
                        <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${el.pct}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`h-full rounded-full ${el.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mechanical properties */}
                  <div className="bg-background rounded-2xl p-6 border border-border/50 flex flex-col justify-center">
                    <h5 className="text-lg font-bold text-foreground uppercase tracking-wider mb-6 pb-2 border-b border-border/50">Mechanical Limits</h5>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-xs font-bold text-muted-foreground uppercase">Tensile Strength</div>
                        <div className="text-xl font-extrabold text-foreground mt-1">{selectedGrade.properties.tensile}</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-muted-foreground uppercase">Yield Strength</div>
                        <div className="text-xl font-extrabold text-foreground mt-1">{selectedGrade.properties.yield}</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-muted-foreground uppercase">Hardness</div>
                        <div className="text-xl font-extrabold text-foreground mt-1">{selectedGrade.properties.hardness}</div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-muted-foreground uppercase">Elongation</div>
                        <div className="text-xl font-extrabold text-foreground mt-1">{selectedGrade.properties.elongation}</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Visit Full Website CTA */}
            <div className="mt-16 text-center">
              <a 
                href={activeData.products.length > 0 ? productTabs.find(t => t.id === activeTab)?.company === "Radhe Technocast" ? "http://radhetechnocast.com" : productTabs.find(t => t.id === activeTab)?.company === "Flow Marshal Valves" ? "http://flowmarshalvalves.com" : productTabs.find(t => t.id === activeTab)?.company === "Radhe Industries" ? "http://radheindustries.in" : "http://radhealloys.com" : "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-2xl font-bold text-primary hover:text-primary/80 transition-colors underline underline-offset-8 decoration-2"
              >
                View full {activeData.company} catalog <ArrowRight className="w-7 h-7" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
