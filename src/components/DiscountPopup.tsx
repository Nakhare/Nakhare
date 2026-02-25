import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { X, Mail } from "lucide-react";
import FloralAccent from "./FloralAccent";

export default function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem("nakhare_popup_seen");
      if (!hasSeen) {
        setIsOpen(true);
      }
    }, 1500); // Show 1.5s after landing
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem("nakhare_popup_seen", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        closePopup();
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative w-full max-w-lg bg-brand-nude p-0 rounded-2xl shadow-2xl border border-brand-rust/20 overflow-hidden"
      >
        <FloralAccent className="absolute -top-10 -right-10 text-brand-maroon/10 w-40 h-40 rotate-45" />
        <FloralAccent className="absolute -bottom-10 -left-10 text-brand-rust/10 w-32 h-32 -rotate-12" />

        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 p-1 hover:bg-black/5 rounded-full transition-colors z-20"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="hidden md:block relative h-full min-h-[400px]">
            <img 
              src="https://shopmasakali.co/cdn/shop/files/1_21fb331c-cc84-4468-92be-61e17edbc3d4.jpg?v=1771586723" 
              alt="Discount" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-maroon/10" />
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center text-center space-y-6 relative z-10">
            {!isSubmitted ? (
              <>
                <div className="space-y-2">
                  <h3 className="text-xs font-bold tracking-[0.3em] text-brand-maroon uppercase">Exclusive Offer</h3>
                  <h2 className="text-5xl font-display leading-none">10% OFF</h2>
                  <p className="text-base font-classy font-semibold text-brand-maroon/80">On your first purchase</p>
                </div>

                <p className="text-sm text-black/60 font-classy">
                  Join the Nakhare Club and get an instant discount code delivered to your inbox.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30" size={18} />
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-brand-maroon/10 pl-12 pr-4 py-4 rounded-lg text-sm focus:outline-none focus:border-brand-maroon transition-colors font-classy"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-brand-maroon text-white font-bold uppercase tracking-widest hover:bg-black transition-colors rounded-lg shadow-lg shadow-brand-maroon/20"
                  >
                    Get My Discount
                  </button>
                </form>

                <button 
                  onClick={closePopup}
                  className="text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors"
                >
                  No thanks, I'll pay full price
                </button>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 py-10"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-display">Check Your Inbox!</h2>
                  <p className="text-sm font-classy text-black/60">Your 10% discount code is on its way. Happy shopping!</p>
                </div>
                <div className="py-3 px-6 bg-white border-2 border-dashed border-brand-maroon rounded-xl inline-block">
                  <span className="text-2xl font-display tracking-widest text-brand-maroon">WELCOME10</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
