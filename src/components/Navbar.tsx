import { motion } from "motion/react";
import { ShoppingBag, Search, User, Heart, Menu } from "lucide-react";
import FloralAccent from "./FloralAccent";

export default function Navbar({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-brand-nude/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between relative">
        <FloralAccent className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 text-brand-maroon/10 md:hidden" />
        <div className="flex items-center gap-8">
          <button className="md:hidden p-2">
            <Menu size={24} />
          </button>
          <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest">
            <button onClick={() => onNavigate?.("shop")} className="hover:text-brand-maroon transition-colors">Shop All</button>
            <button onClick={() => onNavigate?.("shop")} className="hover:text-brand-maroon transition-colors">New Drops</button>
            <button className="hover:text-brand-maroon transition-colors">Best Sellers</button>
          </div>
        </div>

        <div 
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer"
          onClick={() => onNavigate?.("home")}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <FloralAccent className="absolute -top-4 -left-4 w-8 h-8 text-brand-maroon/20 group-hover:rotate-45 transition-transform duration-700" />
              <div className="h-10 w-10 border border-black rounded-full flex items-center justify-center text-black font-display text-xs group-hover:bg-black group-hover:text-white transition-all duration-300">N</div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-display tracking-tighter leading-none text-black group-hover:text-brand-maroon transition-colors">NAKHARE</span>
              <span className="text-[7px] font-bold tracking-[0.4em] uppercase opacity-40 text-center">Modern Ethnic</span>
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
