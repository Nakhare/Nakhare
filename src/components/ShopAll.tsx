import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Filter, X, ChevronDown, Grid, List } from "lucide-react";
import { ProductCard, type ProductProps } from "./ProductCard";
import GlareCard from "./GlareCard";

const ALL_PRODUCTS: ProductProps[] = [
  {
    id: 1,
    name: "APOORVA",
    subtitle: "Tailored in Crimson Confidence.",
    price: 1299,
    image: "https://row.nishorama.com/cdn/shop/files/GeneratedImageFebruary10_2026-5_08PM.jpg?v=1770794025&width=832",
    illustration: "https://row.nishorama.com/cdn/shop/files/GeneratedImageFebruary10_2026-5_11PM.jpg?v=1770794026&width=832",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"]
  },
  {
    id: 2,
    name: "JOGI",
    subtitle: "Bohemian Rhapsody in Indigo.",
    price: 899,
    image: "https://row.nishorama.com/cdn/shop/files/DSC8643_340c00ee-12ea-4f79-a466-109b544aa89d.jpg?v=1765960913&width=832",
    illustration: "https://row.nishorama.com/cdn/shop/files/DSC8672.jpg?v=1765960913&width=832",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 3,
    name: "MAGAN",
    subtitle: "Earthy Tones for the Soul.",
    price: 1199,
    image: "https://row.nishorama.com/cdn/shop/files/hans3.jpg?v=1765960918&width=832",
    illustration: "https://www.nishorama.com/cdn/shop/files/hans1.jpg?format=webp&v=1768831737&width=1080",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"]
  },
  {
    id: 4,
    name: "GUL",
    subtitle: "Floral Whispers in Cotton.",
    price: 749,
    image: "https://evara.me/cdn/shop/files/1_30955224-c433-4752-ab5a-9159eb5f52b1.webp?v=1767721516",
    illustration: "https://evara.me/cdn/shop/files/7_4ed47d9d-4ac4-4fce-943a-fcf32280be48.webp?v=1767721516",
    sizes: ["M", "L", "XL", "XXL", "XXXL"]
  },
  {
    id: 5,
    name: "TEVAR",
    subtitle: "Bold Black Attitude.",
    price: 1499,
    image: "https://row.nishorama.com/cdn/shop/files/P1003849.jpg?v=1765960894&width=832",
    illustration: "https://row.nishorama.com/cdn/shop/files/DSC8672.jpg?v=1765960913&width=832",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 6,
    name: "RANG",
    subtitle: "A Splash of Festive Joy.",
    price: 999,
    image: "https://row.nishorama.com/cdn/shop/files/ADK04567_3-4_7ca10d07-df17-40a6-9966-c8d6e0d71049.jpg?v=1765960679&width=832",
    illustration: "https://evara.me/cdn/shop/files/7_4ed47d9d-4ac4-4fce-943a-fcf32280be48.webp?v=1767721516",
    sizes: ["XS", "S", "M", "L", "XL"]
  }
];

export default function ShopAll({ onAddToCart }: { onAddToCart?: () => void }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="pt-32 pb-24 bg-brand-nude min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-display leading-none">Shop All</h1>
            <p className="text-black/60 font-medium tracking-widest uppercase text-xs">
              {ALL_PRODUCTS.length} Products Found
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-6 py-3 border border-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
            >
              <Filter size={16} /> Filter & Sort
            </motion.button>
            <div className="hidden md:flex border border-black">
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => setViewMode("grid")}
                className={`p-3 ${viewMode === "grid" ? "bg-black text-white" : "bg-transparent text-black"}`}
              >
                <Grid size={18} />
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => setViewMode("list")}
                className={`p-3 ${viewMode === "list" ? "bg-black text-white" : "bg-transparent text-black"}`}
              >
                <List size={18} />
              </motion.button>
            </div>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 space-y-10">
            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest border-b border-black/10 pb-4">Availability</h4>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 border-black rounded-none accent-brand-maroon" />
                  <span className="text-sm font-medium group-hover:text-brand-maroon transition-colors">In Stock (12)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group opacity-40">
                  <input type="checkbox" className="w-4 h-4 border-black rounded-none accent-brand-maroon" />
                  <span className="text-sm font-medium">Out of Stock (2)</span>
                </label>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest border-b border-black/10 pb-4">Price</h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="text-[10px] font-bold uppercase opacity-40">From</label>
                    <input type="number" placeholder="₹" className="w-full bg-transparent border-b border-black py-2 text-sm focus:outline-none" />
                  </div>
                  <div className="flex-1">
                    <label className="text-[10px] font-bold uppercase opacity-40">To</label>
                    <input type="number" placeholder="₹" className="w-full bg-transparent border-b border-black py-2 text-sm focus:outline-none" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-bold uppercase tracking-widest border-b border-black/10 pb-4">Size</h4>
              <div className="grid grid-cols-4 gap-2">
                {["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"].map(size => (
                  <button key={size} className="aspect-square border border-black/10 flex items-center justify-center text-[10px] font-bold hover:border-black hover:bg-black hover:text-white transition-all">
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className={`grid ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"} gap-x-8 gap-y-16`}>
              {ALL_PRODUCTS.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[120]"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-brand-nude z-[130] p-8 shadow-2xl overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-2xl font-display">Filter & Sort</h3>
                <button onClick={() => setIsFilterOpen(false)} className="p-2 hover:bg-black/5 rounded-full">
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-12">
                {/* Mobile filters same as sidebar but stacked */}
                <div className="space-y-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest border-b border-black/10 pb-4">Sort By</h4>
                  <div className="space-y-3">
                    {["Featured", "Best Selling", "Price: Low to High", "Price: High to Low"].map(sort => (
                      <label key={sort} className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="sort" className="w-4 h-4 accent-brand-maroon" />
                        <span className="text-sm font-medium">{sort}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest border-b border-black/10 pb-4">Size</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"].map(size => (
                      <button key={size} className="aspect-square border border-black/10 flex items-center justify-center text-[10px] font-bold">
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-black/10">
                <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-brand-maroon transition-colors">
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
