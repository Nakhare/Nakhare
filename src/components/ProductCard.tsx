import React from "react";
import { motion } from "motion/react";
import { ShoppingBag, Heart } from "lucide-react";

export interface ProductProps {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  illustration: string;
  sizes: string[];
}

export function ProductCard({ product }: { product: ProductProps; key?: React.Key }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col"
    >
      {/* Product Info Above Image (Punk Style) */}
      <div className="mb-4 space-y-1">
        <h3 className="text-4xl md:text-5xl font-punk text-black leading-none group-hover:text-brand-maroon transition-colors">
          {product.name}
        </h3>
        <p className="text-sm font-medium italic text-brand-rust opacity-80">
          {product.subtitle}
        </p>
      </div>

      {/* Split Visual Layout */}
      <div className="relative aspect-[4/5] overflow-hidden bg-white/50 rounded-xl border border-black/5">
        <div className="flex h-full">
          {/* Real Model */}
          <div className="w-1/2 h-full relative overflow-hidden border-r border-black/5">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Illustration */}
          <div className="w-1/2 h-full relative bg-brand-nude/30 flex items-center justify-center overflow-hidden">
            <motion.img 
              initial={{ x: 20, opacity: 0.8 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              src={product.illustration} 
              alt={`${product.name} illustration`}
              className="w-full h-full object-contain p-4"
              referrerPolicy="no-referrer"
            />
            {/* Confident Tag */}
            <div className="absolute top-4 right-4 bg-black text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
              Attitude
            </div>
          </div>
        </div>

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex gap-2">
            <button className="flex-1 bg-white text-black py-2 text-xs font-bold uppercase tracking-widest hover:bg-brand-peach transition-colors flex items-center justify-center gap-2">
              <ShoppingBag size={14} /> Add to Cart
            </button>
            <button className="p-2 bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-black transition-colors">
              <Heart size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Price and Sizes Below */}
      <div className="mt-4 flex justify-between items-end">
        <div className="space-y-2">
          <div className="text-2xl font-display text-brand-maroon">₹{product.price}</div>
          <div className="flex gap-1">
            {product.sizes.map(size => (
              <span key={size} className="text-[10px] font-bold border border-black/10 px-1.5 py-0.5 rounded hover:bg-black hover:text-white transition-colors cursor-default">
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
