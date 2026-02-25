import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center pt-20">
      {/* Background Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.03 }}
          transition={{ duration: 1.5 }}
          className="text-[30vw] font-display leading-none whitespace-nowrap"
        >
          ATTITUDE ATTITUDE ATTITUDE
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-maroon text-sm font-bold tracking-[0.4em] uppercase mb-4">
              New Collection 2026
            </h2>
            <h1 className="text-7xl md:text-9xl font-display leading-[0.85] tracking-tighter">
              SHORT KURTI.<br />
              <span className="text-brand-rust">BIG NAKHARE.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl font-medium max-w-md text-black/70 leading-relaxed"
          >
            Expressive, stylish, and unapologetically you. Our short kurtis are designed for the bold Gen-Z soul.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-brand-maroon transition-all duration-300 flex items-center gap-3 group rounded-sm">
              Shop Now <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="px-10 py-5 border-2 border-black text-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 rounded-sm">
              View Lookbook
            </button>
          </motion.div>

          <div className="flex items-center gap-8 pt-8 border-t border-black/10">
            <div>
              <div className="text-3xl font-display">XS - XXXXL</div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">Inclusive Sizing</div>
            </div>
            <div>
              <div className="text-3xl font-display">100+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-50">Unique Designs</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-8 border-white"
          >
            <img 
              src="https://picsum.photos/seed/nakhare-hero/800/1200" 
              alt="NAKHARE Model" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          {/* Decorative Elements */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-12 -right-12 w-48 h-48 border-2 border-dashed border-brand-maroon/30 rounded-full flex items-center justify-center p-8"
          >
            <div className="text-[10px] font-bold text-center uppercase tracking-widest text-brand-maroon/50">
              Handcrafted in India • Premium Quality • Bold Designs •
            </div>
          </motion.div>

          <div className="absolute -bottom-8 -left-8 z-20 bg-brand-peach p-6 shadow-xl rounded-xl border border-black/5 max-w-[200px]">
            <p className="text-xs font-bold italic leading-tight">
              "Finally, a brand that gets my vibe and my size!"
            </p>
            <div className="mt-2 text-[10px] font-bold uppercase tracking-widest opacity-50">— Riya, 21</div>
          </div>
        </div>
      </div>
    </section>
  );
}
