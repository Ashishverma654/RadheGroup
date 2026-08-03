"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Fuel, Droplets, Zap, FlaskConical, Car, Building2, Ship, Pill, X, ArrowRight } from "lucide-react"

const industries = [
  {
    id: "oil-gas",
    name: "Oil & Gas",
    icon: Fuel,
    image: "/images/products/gate-valve.svg",
    description: "Critical flow control equipment and precision-cast components for upstream, midstream, and downstream petroleum applications.",
    companies: [
      { name: "Flow Marshal Valves", products: ["Gate Valves (ANSI 150–1500)", "Globe Valves", "Swing Check Valves"], url: "http://flowmarshalvalves.com" },
      { name: "Radhe Industries", products: ["MS & SS Castings", "IBR Approved Fittings"], url: "http://radheindustries.in" },
      { name: "Radhe Alloys", products: ["Duplex & Super Duplex Round Bars", "Inconel & Monel Plates"], url: "http://radhealloys.com" }
    ]
  },
  {
    id: "water",
    name: "Water & Wastewater",
    icon: Droplets,
    image: "/images/products/pump-impeller.svg",
    description: "Corrosion-resistant valves and castings for water treatment plants, desalination units, and municipal pipelines.",
    companies: [
      { name: "Flow Marshal Valves", products: ["Cast Steel Gate Valves", "Swing Check Valves"], url: "http://flowmarshalvalves.com" },
      { name: "Radhe Industries", products: ["SS Castings for Pump Bodies"], url: "http://radheindustries.in" }
    ]
  },
  {
    id: "power",
    name: "Power Generation",
    icon: Zap,
    image: "/images/products/gear-shaft.svg",
    description: "High-pressure, high-temperature components for thermal, nuclear, and renewable energy plants.",
    companies: [
      { name: "Flow Marshal Valves", products: ["High-Pressure Gate Valves (ANSI 900–1500)", "Pressure Seal Bonnet Valves"], url: "http://flowmarshalvalves.com" },
      { name: "Radhe Technocast", products: ["Investment Cast Turbine Components", "CNC Machined High-Temp Parts"], url: "http://radhetechnocast.com" },
      { name: "Radhe Industries", products: ["IBR Approved Castings"], url: "http://radheindustries.in" }
    ]
  },
  {
    id: "petrochemical",
    name: "Petrochemical & Refining",
    icon: FlaskConical,
    image: "/images/products/casting-valve-body.svg",
    description: "Full spectrum of flow control equipment and exotic alloy materials for chemical processing and refinery applications.",
    companies: [
      { name: "Flow Marshal Valves", products: ["Gate, Globe & Check Valves in CF8M, CF3M, Alloy 20"], url: "http://flowmarshalvalves.com" },
      { name: "Radhe Technocast", products: ["Precision Cast Reactor Components", "SS 316L Machined Parts"], url: "http://radhetechnocast.com" },
      { name: "Radhe Industries", products: ["Alloy Steel Castings"], url: "http://radheindustries.in" },
      { name: "Radhe Alloys", products: ["Hastelloy, Inconel & Monel Raw Materials"], url: "http://radhealloys.com" }
    ]
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: Car,
    image: "/images/products/hero-slider-2.svg",
    description: "Precision-engineered investment castings and machined components for automotive OEMs and Tier-1 suppliers.",
    companies: [
      { name: "Radhe Technocast", products: ["Investment Cast Gear Shafts & Levers", "CNC Machined Gearbox Components", "Automotive Brackets & Housings"], url: "http://radhetechnocast.com" }
    ]
  },
  {
    id: "construction",
    name: "Construction & Infrastructure",
    icon: Building2,
    image: "/images/products/bearing-housing.svg",
    description: "Heavy-duty cast and forged components for bridges, buildings, and large-scale infrastructure projects.",
    companies: [
      { name: "Radhe Industries", products: ["MS & Alloy Steel Heavy Castings", "Structural Cast Components"], url: "http://radheindustries.in" },
      { name: "Radhe Alloys", products: ["Structural Steel Round Bars & Plates"], url: "http://radhealloys.com" }
    ]
  },
  {
    id: "marine",
    name: "Marine & Shipbuilding",
    icon: Ship,
    image: "/images/products/hero-slider-3.svg",
    description: "Corrosion-resistant alloys and seawater-rated valves for marine propulsion, offshore platforms, and shipboard systems.",
    companies: [
      { name: "Flow Marshal Valves", products: ["Marine Grade Gate & Check Valves"], url: "http://flowmarshalvalves.com" },
      { name: "Radhe Alloys", products: ["Cupro-Nickel, Monel & Duplex Alloys"], url: "http://radhealloys.com" }
    ]
  },
  {
    id: "pharma",
    name: "Pharmaceutical & Food",
    icon: Pill,
    image: "/images/products/gear-shaft.svg",
    description: "Hygienic-grade stainless steel castings and machined components meeting FDA and GMP requirements.",
    companies: [
      { name: "Radhe Technocast", products: ["SS 316L Investment Castings", "Mirror-Finish CNC Machined Parts", "Sanitary Fittings & Housings"], url: "http://radhetechnocast.com" }
    ]
  }
]

export function IndustriesSection() {
  const [selected, setSelected] = React.useState<string | null>(null)
  const selectedData = industries.find(i => i.id === selected)

  return (
    <section className="w-full py-32 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(var(--primary-rgb,59,130,246),0.04),transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-5xl mx-auto"
        >
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-bold text-lg mb-8 uppercase tracking-widest">
            Industries We Serve
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-foreground tracking-tight">
            Powering Every Major Industry
          </h2>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            Click on any industry to see exactly which RadheGroup companies and products serve it.
          </p>
        </motion.div>

        {/* Industry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setSelected(selected === industry.id ? null : industry.id)}
              className={`relative group p-8 rounded-3xl border-2 text-left transition-all duration-500 overflow-hidden ${
                selected === industry.id
                  ? "border-primary bg-primary/5 shadow-xl shadow-primary/10 scale-[1.02]"
                  : "border-border hover:border-primary/40 hover:bg-muted/30"
              }`}
            >
              {/* Background image overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                style={{ backgroundImage: `url(${industry.image})` }}
              />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${
                  selected === industry.id
                    ? "bg-primary text-primary-foreground scale-110"
                    : "bg-primary/10 text-primary group-hover:scale-110"
                }`}>
                  <industry.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{industry.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{industry.description}</p>
                <div className={`mt-4 text-sm font-bold flex items-center gap-1 transition-colors ${
                  selected === industry.id ? "text-primary" : "text-muted-foreground"
                }`}>
                  {selected === industry.id ? "Click to close" : "Click to explore"} 
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${selected === industry.id ? "rotate-90" : ""}`} />
                </div>
              </div>
            </button>
          ))}
        </motion.div>

        {/* Expanded Detail Panel */}
        <AnimatePresence>
          {selectedData && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="rounded-3xl border-2 border-primary/30 bg-secondary/30 backdrop-blur-xl overflow-hidden shadow-2xl">
                {/* Header with image */}
                <div className="relative h-64 md:h-80">
                  <img src={selectedData.image} alt={selectedData.name} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
                  <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-16">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
                        <selectedData.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="text-4xl md:text-5xl font-extrabold text-white">{selectedData.name}</h3>
                      <button onClick={() => setSelected(null)} className="ml-auto w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                        <X className="w-6 h-6 text-white" />
                      </button>
                    </div>
                    <p className="text-xl text-slate-200 max-w-3xl">{selectedData.description}</p>
                  </div>
                </div>

                {/* Companies serving this industry */}
                <div className="p-10 md:p-16">
                  <h4 className="text-2xl font-bold text-foreground mb-8">RadheGroup Companies Serving This Industry:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {selectedData.companies.map((company, idx) => (
                      <motion.a
                        key={idx}
                        href={company.url}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.15 }}
                        className="p-8 rounded-2xl bg-background/80 border border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group"
                      >
                        <h5 className="text-2xl font-bold text-primary mb-4 group-hover:text-primary/80 flex items-center gap-2">
                          {company.name} <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </h5>
                        <ul className="space-y-3">
                          {company.products.map((product, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-3 text-lg text-muted-foreground">
                              <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                              {product}
                            </li>
                          ))}
                        </ul>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
