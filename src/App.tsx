/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MoodSection from "./components/MoodSection";
import { ProductCard, type ProductProps } from "./components/ProductCard";
import DiscountPopup from "./components/DiscountPopup";
import SocialSection from "./components/SocialSection";
import Footer from "./components/Footer";

const TRENDING_PRODUCTS: ProductProps[] = [
  {
    id: 1,
    name: "APOORVA",
    subtitle: "Tailored in Crimson Confidence.",
    price: 1299,
    image: "https://picsum.photos/seed/model1/800/1000",
    illustration: "https://picsum.photos/seed/illu1/800/1000",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"]
  },
  {
    id: 2,
    name: "JOGI",
    subtitle: "Bohemian Rhapsody in Indigo.",
    price: 899,
    image: "https://picsum.photos/seed/model2/800/1000",
    illustration: "https://picsum.photos/seed/illu2/800/1000",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 3,
    name: "MAGAN",
    subtitle: "Earthy Tones for the Soul.",
    price: 1199,
    image: "https://row.nishorama.com/cdn/shop/files/hans3.jpg?v=1765960918&width=832",
    illustration: "https://row.nishorama.com/cdn/shop/files/IMG_4947.jpg?v=1765960855&width=832",
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL"]
  },
  {
    id: 4,
    name: "GUL",
    subtitle: "Floral Whispers in Cotton.",
    price: 749,
    image: "https://picsum.photos/seed/gul-floral-1/800/1000",
    illustration: "https://picsum.photos/seed/gul-floral-2/800/1000",
    sizes: ["M", "L", "XL", "XXL", "XXXL"]
  }
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-brand-nude selection:bg-brand-maroon selection:text-white">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <DiscountPopup />
          
          <main>
            <Hero />
            
            <MoodSection />

            {/* Trending Section */}
            <section className="py-24 bg-brand-nude">
              <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-brand-maroon text-sm font-bold tracking-[0.4em] uppercase">Hot Right Now</h3>
                    <h2 className="text-6xl md:text-8xl font-display leading-none">Trending Now</h2>
                  </div>
                  <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-brand-maroon hover:border-brand-maroon transition-all">
                    View All Products
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                  {TRENDING_PRODUCTS.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>

            {/* Shop Under 999 Banner */}
            <section className="py-12 bg-black overflow-hidden relative">
              <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap gap-20"
              >
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex items-center gap-20">
                    <span className="text-5xl md:text-7xl font-display text-white">SHOP UNDER 999</span>
                    <span className="text-5xl md:text-7xl font-display text-brand-peach">SHOP UNDER 999</span>
                  </div>
                ))}
              </motion.div>
            </section>

            {/* Size Inclusivity Section */}
            <section className="py-32 bg-brand-maroon text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="grid grid-cols-6 h-full">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="border-r border-white h-full" />
                  ))}
                </div>
              </div>

              <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4"
                >
                  <h3 className="text-brand-peach text-sm font-bold tracking-[0.5em] uppercase">Inclusivity at Core</h3>
                  <h2 className="text-7xl md:text-9xl font-display leading-[0.85]">
                    XS TO XXXXL<br />
                    <span className="text-brand-peach">STYLE HAS NO SIZE LIMIT</span>
                  </h2>
                </motion.div>
                
                <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto opacity-80">
                  Every body is a Nakhare body. We believe fashion should be accessible to everyone, regardless of size.
                </p>

                <button className="px-12 py-6 bg-brand-peach text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-sm">
                  Find Your Perfect Fit
                </button>
              </div>
            </section>

            <SocialSection />
          </main>

          <Footer />
        </motion.div>
      )}
    </div>
  );
}
