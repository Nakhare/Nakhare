import { motion } from "motion/react";

export default function FloralAccent({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 0.4, scale: 1 }}
      transition={{ duration: 1 }}
      className={`pointer-events-none select-none ${className}`}
    >
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10C50 10 55 30 50 40C45 30 50 10 50 10Z" fill="currentColor" />
        <path d="M50 90C50 90 45 70 50 60C55 70 50 90 50 90Z" fill="currentColor" />
        <path d="M10 50C10 50 30 45 40 50C30 55 10 50 10 50Z" fill="currentColor" />
        <path d="M90 50C90 50 70 55 60 50C70 45 90 50 90 50Z" fill="currentColor" />
        <path d="M25 25C25 25 40 35 45 45C35 40 25 25 25 25Z" fill="currentColor" />
        <path d="M75 75C75 75 60 65 55 55C65 60 75 75 75 75Z" fill="currentColor" />
        <path d="M75 25C75 25 65 40 55 45C60 35 75 25 75 25Z" fill="currentColor" />
        <path d="M25 75C25 75 35 60 45 55C40 65 25 75 25 75Z" fill="currentColor" />
        <circle cx="50" cy="50" r="5" fill="currentColor" />
      </svg>
    </motion.div>
  );
}
