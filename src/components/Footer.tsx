import FloralAccent from "./FloralAccent";
import DotGrid from "./DotGrid";

export default function Footer({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <footer className="bg-brand-peach/20 text-black pt-24 pb-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-black h-full" />
          ))}
        </div>
      </div>

      {/* Floral Accents */}
      <FloralAccent className="absolute -top-10 -left-10 text-brand-rust/20 w-40 h-40" />
      <FloralAccent className="absolute -bottom-10 -right-10 text-brand-maroon/10 w-60 h-60 rotate-45" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6 relative group">
            <div className="absolute -top-4 -left-4 z-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <DotGrid rows={6} cols={6} gap={10} dotSize={2} />
            </div>
            <div className="flex flex-col group cursor-pointer relative z-10" onClick={() => onNavigate?.("home")}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 border border-brand-maroon rounded-full flex items-center justify-center text-brand-maroon font-display text-xs group-hover:bg-brand-maroon group-hover:text-white transition-all duration-300">N</div>
                <span className="text-4xl font-display tracking-tighter text-brand-maroon">NAKHARE</span>
              </div>
              <span className="text-[9px] font-bold tracking-[0.4em] uppercase opacity-40 mt-1">Short Kurti. Big Nakhare.</span>
            </div>
            <p className="text-sm text-black/60 leading-relaxed font-classy">
              Redefining Indian ethnic wear for the modern, bold, and unapologetic woman. Inclusive sizing, exclusive designs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-display mb-6 text-brand-maroon">Quick Links</h4>
            <ul className="space-y-4 text-sm text-black/60 font-classy">
              <li><button onClick={() => onNavigate?.("shop")} className="hover:text-brand-maroon transition-colors">Shop All</button></li>
              <li><button onClick={() => onNavigate?.("shop")} className="hover:text-brand-maroon transition-colors">New Arrivals</button></li>
              <li><button className="hover:text-brand-maroon transition-colors">Size Guide</button></li>
              <li><button className="hover:text-brand-maroon transition-colors">Our Story</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display mb-6 text-brand-maroon">Support</h4>
            <ul className="space-y-4 text-sm text-black/60 font-classy">
              <li><a href="#" className="hover:text-brand-rust transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-brand-rust transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-brand-rust transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-brand-rust transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display mb-6 text-brand-maroon font-classy">Join the Nakhare Club</h4>
            <p className="text-sm text-black/60 mb-6 font-classy">Get early access to drops and exclusive discounts.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 bg-white border border-brand-maroon/10 px-4 py-3 rounded text-sm focus:outline-none focus:border-brand-maroon transition-colors"
              />
              <button className="bg-brand-maroon text-white px-6 py-3 font-bold uppercase text-xs hover:bg-black transition-colors rounded-sm">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-maroon/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold uppercase tracking-widest text-black/40">
            © 2026 NAKHARE FASHIONS PVT LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-black/40">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
