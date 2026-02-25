import { motion } from "motion/react";
import { ShoppingBag, Search, User, Heart, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-brand-nude/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button className="md:hidden p-2">
            <Menu size={24} />
          </button>
          <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-brand-maroon transition-colors">Shop All</a>
            <a href="#" className="hover:text-brand-maroon transition-colors">New Drops</a>
            <a href="#" className="hover:text-brand-maroon transition-colors">Best Sellers</a>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center text-white font-display text-xs">N</div>
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-display tracking-tighter leading-none">NAKHARE</span>
              <span className="text-[8px] font-bold tracking-[0.2em] uppercase opacity-60">kurti</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <User size={20} />
          </button>
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors relative">
            <Heart size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-maroon rounded-full" />
          </button>
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
