import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTagline(true), 1000);
    const endTimer = setTimeout(onComplete, 3500);
    return () => {
      clearTimeout(timer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-brand-nude to-brand-peach"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ rotateY: 0, scale: 0.8, opacity: 0 }}
          animate={{ 
            rotateY: 360, 
            scale: 1, 
            opacity: 1 
          }}
          transition={{ 
            rotateY: { duration: 2, ease: "easeInOut", repeat: Infinity },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 }
          }}
          className="text-6xl md:text-9xl font-display text-brand-maroon mb-4"
        >
          नखरे
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-7xl font-display tracking-widest text-black"
        >
          NAKHARE
        </motion.div>

        <AnimatePresence>
          {showTagline && (
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.1em" }}
              exit={{ opacity: 0 }}
              className="mt-8 text-sm md:text-lg font-medium uppercase tracking-widest text-brand-rust"
            >
              Short Kurti. Big Nakhare.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <motion.div 
        className="absolute bottom-12 w-48 h-1 bg-black/10 overflow-hidden"
      >
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 3, ease: "linear" }}
          className="w-full h-full bg-brand-maroon"
        />
      </motion.div>
    </motion.div>
  );
}
