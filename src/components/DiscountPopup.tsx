import { motion } from "motion/react";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

export default function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem("nakhare_popup_seen");
      if (!hasSeen) {
        setIsOpen(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem("nakhare_popup_seen", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-md bg-brand-nude p-8 rounded-2xl shadow-2xl border border-brand-rust/20"
      >
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 p-1 hover:bg-black/5 rounded-full transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-bold tracking-widest text-brand-rust uppercase">✨ Welcome to NAKHARE ✨</h3>
            <h2 className="text-4xl font-display leading-none">Get 10% OFF</h2>
            <p className="text-lg font-medium">on your first order</p>
          </div>

          <div className="py-4 px-6 border-2 border-dashed border-brand-maroon rounded-xl bg-white/50">
            <span className="text-2xl font-display tracking-widest text-brand-maroon">NAKHARE10</span>
          </div>

          <div className="flex flex-col gap-3">
            <button 
              onClick={closePopup}
              className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-brand-maroon transition-colors rounded-lg"
            >
              Shop Now
            </button>
            <button 
              onClick={closePopup}
              className="text-sm font-medium text-black/60 hover:text-black underline underline-offset-4"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
