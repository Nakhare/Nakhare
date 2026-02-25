export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-4xl font-display tracking-tighter">NAKHARE</span>
              <span className="text-[8px] font-bold tracking-[0.3em] uppercase opacity-60">Short Kurti Big Nakhare</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Redefining Indian ethnic wear for the modern, bold, and unapologetic woman. Inclusive sizing, exclusive designs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-display mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-brand-peach transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-brand-peach transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-brand-peach transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-brand-peach transition-colors">Our Story</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-brand-peach transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-brand-peach transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-brand-peach transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-brand-peach transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display mb-6">Join the Nakhare Club</h4>
            <p className="text-sm text-white/60 mb-6">Get early access to drops and exclusive discounts.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 bg-white/10 border border-white/20 px-4 py-3 rounded text-sm focus:outline-none focus:border-brand-peach transition-colors"
              />
              <button className="bg-brand-peach text-black px-6 py-3 font-bold uppercase text-xs hover:bg-white transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">
            © 2026 NAKHARE FASHIONS PVT LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
