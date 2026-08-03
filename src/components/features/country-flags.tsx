"use client"

import { motion } from "framer-motion"

const countries = [
  { name: "India", code: "IN", flag: "🇮🇳" },
  { name: "USA", code: "US", flag: "🇺🇸" },
  { name: "UK", code: "GB", flag: "🇬🇧" },
  { name: "Germany", code: "DE", flag: "🇩🇪" },
  { name: "Italy", code: "IT", flag: "🇮🇹" },
  { name: "France", code: "FR", flag: "🇫🇷" },
  { name: "Saudi Arabia", code: "SA", flag: "🇸🇦" },
  { name: "UAE", code: "AE", flag: "🇦🇪" },
  { name: "Qatar", code: "QA", flag: "🇶🇦" },
  { name: "Kuwait", code: "KW", flag: "🇰🇼" },
  { name: "Oman", code: "OM", flag: "🇴🇲" },
  { name: "Bahrain", code: "BH", flag: "🇧🇭" },
  { name: "Iran", code: "IR", flag: "🇮🇷" },
  { name: "Iraq", code: "IQ", flag: "🇮🇶" },
  { name: "Yemen", code: "YE", flag: "🇾🇪" },
  { name: "Brazil", code: "BR", flag: "🇧🇷" },
  { name: "Kenya", code: "KE", flag: "🇰🇪" },
  { name: "Nigeria", code: "NG", flag: "🇳🇬" },
  { name: "South Africa", code: "ZA", flag: "🇿🇦" },
  { name: "Australia", code: "AU", flag: "🇦🇺" },
  { name: "Singapore", code: "SG", flag: "🇸🇬" },
  { name: "Malaysia", code: "MY", flag: "🇲🇾" },
  { name: "Thailand", code: "TH", flag: "🇹🇭" },
]

export function CountryFlagsSection() {
  // Duplicate for seamless infinite scroll
  const duplicated = [...countries, ...countries]

  return (
    <section className="w-full py-20 bg-secondary/30 border-y border-border/40 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-bold text-lg mb-6 uppercase tracking-widest">
            Global Presence
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Trusted Across {countries.length}+ Countries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            RadheGroup products are exported and trusted by industries worldwide — from the Middle East to Europe, Africa to Southeast Asia.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Row 1 (Left to Right) */}
      <div className="relative w-full mb-6">
        <div className="flex animate-scroll-left">
          {duplicated.map((country, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex-shrink-0 mx-3 flex items-center gap-3 px-6 py-4 rounded-2xl bg-background/80 backdrop-blur border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <span className="text-4xl">{country.flag}</span>
              <span className="text-lg font-bold text-foreground whitespace-nowrap">{country.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Scroll Row 2 (Right to Left) */}
      <div className="relative w-full">
        <div className="flex animate-scroll-right">
          {[...duplicated].reverse().map((country, idx) => (
            <div
              key={`row2-${idx}`}
              className="flex-shrink-0 mx-3 flex items-center gap-3 px-6 py-4 rounded-2xl bg-background/80 backdrop-blur border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <span className="text-4xl">{country.flag}</span>
              <span className="text-lg font-bold text-foreground whitespace-nowrap">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
