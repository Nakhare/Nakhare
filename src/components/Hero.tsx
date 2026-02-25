import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import FloralAccent from "./FloralAccent";

const HERO_IMAGES = [
  "https://evara.me/cdn/shop/files/2_0539ccb9-099e-41bf-a826-fad1096ab301.webp?v=1769269845&width=1920",
  "https://evara.me/cdn/shop/files/1_77a7f67d-0d99-47f8-af0d-173eb13f1540.webp?v=1769269844&width=1920"
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center pt-20">
      {/* Floral Accents */}
      <FloralAccent className="absolute top-40 left-10 text-brand-rust/10 w-32 h-32" />
      <FloralAccent className="absolute bottom-20 right-1/3 text-brand-maroon/5 w-24 h-24 rotate-45" />
      <FloralAccent className="absolute top-20 right-10 text-brand-rust/5 w-16 h-16 -rotate-12" />
      
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
            className="text-base md:text-lg font-classy font-semibold tracking-tight text-brand-maroon max-w-md leading-relaxed"
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

        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 aspect-[2/3] md:aspect-[3/4.5] rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImage}
                src={HERO_IMAGES[currentImage]} 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                alt="NAKHARE Model" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <button 
                onClick={prevImage}
                className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {HERO_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImage === idx ? "w-8 bg-brand-maroon" : "bg-black/20 hover:bg-black/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Decorative Elements */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-12 -right-12 w-48 h-48 border-2 border-dashed border-brand-maroon/30 rounded-full flex items-center justify-center p-8 pointer-events-none"
          >
            <div className="text-[10px] font-bold text-center uppercase tracking-widest text-brand-maroon/50">
              Handcrafted in India • Premium Quality • Bold Designs •
            </div>
          </motion.div>

          <div className="absolute -bottom-8 -left-8 z-20 bg-brand-peach p-6 shadow-xl rounded-xl border border-black/5 max-w-[200px] pointer-events-none">
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
