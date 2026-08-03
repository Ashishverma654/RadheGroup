"use client"

import * as React from "react"
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MessageSquarePlus, Phone, Mail, ArrowLeft, Upload, FileText, Info, HelpCircle } from "lucide-react"

// Custom WhatsApp SVG Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
)

type InquiryType = 'none' | 'quote' | 'general' | 'support'

export function RfqButton() {
  const [open, setOpen] = React.useState(false)
  const [inquiryType, setInquiryType] = React.useState<InquiryType>('none')

  // Reset state when drawer closes
  React.useEffect(() => {
    if (!open) {
      setTimeout(() => setInquiryType('none'), 300)
    }
  }, [open])

  return (
    <>
      {/* Floating Action Buttons (Vertical Stack on the right) */}
      <div className="fixed bottom-28 right-8 z-50 flex-col gap-4 hidden md:flex">
        <a href="tel:+919876543210" className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
          <Phone className="w-6 h-6" />
        </a>
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
          <WhatsAppIcon className="w-7 h-7" />
        </a>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger 
          className="fixed bottom-8 right-8 z-50 h-16 rounded-full px-8 shadow-2xl hover:scale-105 transition-transform bg-primary text-primary-foreground font-bold text-lg hidden md:flex items-center gap-3 border-4 border-background/20"
        >
          <MessageSquarePlus className="w-6 h-6" />
          Get in Touch
        </SheetTrigger>
        
        {/* Mobile version of the FABs */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
          <a href="tel:+919876543210" className="h-12 w-12 rounded-full bg-blue-500 text-white shadow-xl flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="h-12 w-12 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center">
            <WhatsAppIcon className="w-6 h-6" />
          </a>
          <SheetTrigger 
            className="h-14 w-14 rounded-full shadow-2xl bg-primary text-primary-foreground border-2 border-background/20 flex items-center justify-center"
          >
            <MessageSquarePlus className="w-6 h-6" />
          </SheetTrigger>
        </div>

        <SheetContent side="right" className="w-full sm:max-w-[40rem] overflow-y-auto border-l-border/50 bg-background/95 backdrop-blur-xl">
          
          {/* STEP 1: Select Inquiry Type */}
          {inquiryType === 'none' && (
            <div className="flex flex-col h-full pt-10">
              <SheetHeader className="mb-12 text-center">
                <SheetTitle className="text-5xl font-extrabold text-foreground">How can we help?</SheetTitle>
                <SheetDescription className="text-2xl text-muted-foreground mt-4">
                  Select an option below so we can direct you to the right team.
                </SheetDescription>
              </SheetHeader>
              
              <div className="flex flex-col gap-6 mt-4">
                <button 
                  onClick={() => setInquiryType('quote')}
                  className="flex items-center gap-6 p-8 rounded-2xl border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all text-left group shadow-sm"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FileText className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Request a Custom Quote</h3>
                    <p className="text-lg text-muted-foreground">Detailed form for castings, valves, and alloys.</p>
                  </div>
                </button>

                <button 
                  onClick={() => setInquiryType('general')}
                  className="flex items-center gap-6 p-8 rounded-2xl border-2 border-border hover:border-foreground/50 hover:bg-muted/50 transition-all text-left group shadow-sm"
                >
                  <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Info className="w-10 h-10 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">General Inquiry</h3>
                    <p className="text-lg text-muted-foreground">Partnerships, press, or general questions.</p>
                  </div>
                </button>

                <button 
                  onClick={() => setInquiryType('support')}
                  className="flex items-center gap-6 p-8 rounded-2xl border-2 border-border hover:border-foreground/50 hover:bg-muted/50 transition-all text-left group shadow-sm"
                >
                  <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <HelpCircle className="w-10 h-10 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Technical Support</h3>
                    <p className="text-lg text-muted-foreground">Help with existing orders or products.</p>
                  </div>
                </button>
              </div>

              {/* Direct Contact Options */}
              <div className="mt-auto pt-16 pb-8">
                <h4 className="text-base font-extrabold text-muted-foreground uppercase tracking-widest mb-6 text-center">Or contact us directly</h4>
                <div className="grid grid-cols-3 gap-6">
                  <a href="tel:+919876543210" className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:-translate-y-1 transition-all">
                    <Phone className="w-8 h-8" />
                    <span className="text-base font-bold">Call</span>
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-[#25D366] hover:bg-[#1ebd5a] text-white shadow-xl hover:-translate-y-1 transition-all">
                    <WhatsAppIcon className="w-9 h-9" />
                    <span className="text-base font-bold">WhatsApp</span>
                  </a>
                  <a href="mailto:info@radhegroup.com" className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white shadow-xl hover:-translate-y-1 transition-all">
                    <Mail className="w-8 h-8" />
                    <span className="text-base font-bold">Email</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Quote Form */}
          {inquiryType === 'quote' && (
            <div className="flex flex-col pt-4 pb-8">
              <button 
                onClick={() => setInquiryType('none')}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 font-semibold w-fit transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to options
              </button>
              
              <SheetHeader className="mb-8">
                <SheetTitle className="text-3xl font-extrabold text-primary">Request a Quote</SheetTitle>
                <SheetDescription className="text-lg text-muted-foreground">
                  Provide detailed specifications for an accurate engineering and manufacturing quote.
                </SheetDescription>
              </SheetHeader>
              
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setOpen(false); alert("Quote Request Submitted Successfully!"); }}>
                
                {/* 1. Target Company */}
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-bold text-foreground">Target Company <span className="text-red-500">*</span></label>
                  <select id="company" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground font-medium">
                    <option>RadheGroup (Not Sure)</option>
                    <option>Radhe Technocast (Precision Casting & Machining)</option>
                    <option>Flow Marshal Valves (Industrial Valves)</option>
                    <option>Radhe Industries (Heavy Duty Castings)</option>
                    <option>Radhe Alloys (Alloy Steels & Composites)</option>
                  </select>
                </div>

                {/* 2. Contact Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-foreground">Full Name <span className="text-red-500">*</span></label>
                    <input id="name" required type="text" placeholder="John Doe" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-foreground">Business Email <span className="text-red-500">*</span></label>
                    <input id="email" required type="email" placeholder="john@company.com" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground/50" />
                  </div>
                </div>

                {/* 3. Technical Specs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="material" className="text-sm font-bold text-foreground">Material Spec <span className="text-red-500">*</span></label>
                    <input id="material" required type="text" placeholder="e.g. SS 316L, WCB, Cast Iron" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="qty" className="text-sm font-bold text-foreground">Est. Quantity <span className="text-red-500">*</span></label>
                    <input id="qty" required type="text" placeholder="e.g. 500 pcs / month" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground/50" />
                  </div>
                </div>

                {/* 4. Delivery Date */}
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-bold text-foreground">Required Delivery Date</label>
                  <input id="date" type="date" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground" />
                </div>

                {/* 5. File Upload (Mock) */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground">Upload Drawings (CAD / PDF)</label>
                  <div className="w-full border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-muted/30 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Upload className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground mt-1">STEP, IGES, DXF, or PDF (Max 20MB)</p>
                  </div>
                </div>

                {/* 6. Details */}
                <div className="space-y-2">
                  <label htmlFor="details" className="text-sm font-bold text-foreground">Additional Requirements</label>
                  <textarea id="details" rows={3} placeholder="Tell us about tolerances, finishes, certifications required..." className="w-full p-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground/50 resize-none" />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-xl font-bold rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
                  Submit RFQ
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  An engineering specialist will review your specs and reply within 24 hours.
                </p>
              </form>
            </div>
          )}

          {/* STEP 2: General/Support Form */}
          {(inquiryType === 'general' || inquiryType === 'support') && (
            <div className="flex flex-col pt-4 pb-8 h-full">
              <button 
                onClick={() => setInquiryType('none')}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 font-semibold w-fit transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to options
              </button>
              
              <SheetHeader className="mb-8">
                <SheetTitle className="text-3xl font-extrabold text-foreground">
                  {inquiryType === 'general' ? 'General Inquiry' : 'Technical Support'}
                </SheetTitle>
                <SheetDescription className="text-lg text-muted-foreground">
                  {inquiryType === 'general' 
                    ? 'Have a question about partnerships or general business? Send us a message.'
                    : 'Need help with an existing order or product specifications? We are here to help.'}
                </SheetDescription>
              </SheetHeader>
              
              <form className="space-y-6 flex-grow flex flex-col" onSubmit={(e) => { e.preventDefault(); setOpen(false); alert("Message Sent!"); }}>
                <div className="space-y-2">
                  <label htmlFor="gen-name" className="text-sm font-bold text-foreground">Full Name</label>
                  <input id="gen-name" required type="text" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="gen-email" className="text-sm font-bold text-foreground">Email</label>
                  <input id="gen-email" required type="email" className="w-full h-12 px-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="gen-msg" className="text-sm font-bold text-foreground">Message</label>
                  <textarea id="gen-msg" required rows={6} className="w-full p-4 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                </div>

                <div className="mt-auto pt-6">
                  <Button type="submit" size="lg" className="w-full h-14 text-xl font-bold rounded-xl shadow-lg hover:scale-[1.02] transition-transform">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          )}

        </SheetContent>
      </Sheet>
    </>
  )
}
