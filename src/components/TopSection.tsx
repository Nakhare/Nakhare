import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import FloralAccent from "./FloralAccent";
import DotGrid from "./DotGrid";
import GlareCard from "./GlareCard";

export default function TopSection() {
  return (
    <section className="w-full pt-20 bg-brand-nude relative overflow-hidden">
      {/* Background Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.03 }}
          transition={{ duration: 1.5 }}
          className="text-[25vw] font-display leading-none whitespace-nowrap"
        >
          NAKHARE NAKHARE NAKHARE
        </motion.div>
      </div>

      <FloralAccent className="absolute top-40 -left-10 text-brand-maroon/5 w-40 h-40 -rotate-12" />
      <FloralAccent className="absolute bottom-40 -right-10 text-brand-rust/5 w-32 h-32 rotate-12" />
      
      {/* Dot Grid Decoration */}
      <DotGrid 
        className="absolute bottom-20 right-10 z-0 opacity-40 hidden lg:grid" 
        rows={12} 
        cols={12} 
        gap={16}
      />

      <GlareCard className="w-full relative z-10">
        <img 
          src="https://evara.me/cdn/shop/files/1_77a7f67d-0d99-47f8-af0d-173eb13f1540.webp?v=1769269844&width=1920" 
          alt="Nakhare Top Banner" 
          className="w-full h-auto block"
          referrerPolicy="no-referrer"
        />
      </GlareCard>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col items-center text-center space-y-8 relative z-10">
        {/* Dot Grid behind text */}
        <DotGrid 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1] opacity-20" 
          rows={8} 
          cols={20} 
          gap={24}
          dotSize={2}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-6xl md:text-8xl font-display leading-none tracking-tighter">
            SHORT KURTI.<br />
            <span className="text-brand-maroon">BIG NAKHARE.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-brand-peach p-6 shadow-xl rounded-xl border border-black/5 max-w-[280px] relative group"
        >
          {/* Small decorative dot grid */}
          <DotGrid 
            className="absolute -bottom-4 -right-4 z-[-1] opacity-20" 
            rows={4} 
            cols={4} 
            gap={8}
            dotSize={3}
          />
          
          <p className="text-sm font-bold italic leading-tight text-black">
            "Finally, a brand that gets my vibe and my size!"
          </p>
          <div className="mt-2 text-[10px] font-bold uppercase tracking-widest opacity-50 text-black">— Riya, 21</div>
          
          {/* Decorative quote mark */}
          <div className="absolute -top-4 -left-4 text-6xl text-brand-maroon/10 font-serif">"</div>
        </motion.div>
      </div>
    </section>
  );
}
