import { motion } from "motion/react";
import FloralAccent from "./FloralAccent";

const moods = [
  { name: "Floral", image: "https://i.pinimg.com/736x/45/6c/b1/456cb154fcf4d77b960943424bdae022.jpg", color: "bg-emerald-50" },
  { name: "Tevar Mode", image: "https://row.nishorama.com/cdn/shop/files/P1003849.jpg?v=1765960894&width=832", color: "bg-brand-maroon/5" },
  { name: "Everyday Cute", image: "https://evara.me/cdn/shop/files/13_6a54b246-6d99-4bb1-b724-223714e74db6_785x.webp?v=1768381922", color: "bg-brand-peach/20" },
  { name: "Festive Pop", image: "https://row.nishorama.com/cdn/shop/files/ADK04567_3-4_7ca10d07-df17-40a6-9966-c8d6e0d71049.jpg?v=1765960679&width=832", color: "bg-brand-rust/5" },
];

export default function MoodSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Floral Accents */}
      <FloralAccent className="absolute top-20 -right-10 text-brand-rust/10 w-48 h-48 rotate-12" />
      <FloralAccent className="absolute bottom-20 -left-10 text-brand-maroon/10 w-32 h-32 -rotate-12" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <h3 className="text-brand-rust text-sm font-bold tracking-[0.4em] uppercase">Find Your Vibe</h3>
            <h2 className="text-6xl md:text-8xl font-display leading-none">Shop by Mood</h2>
          </div>
          <p className="text-lg font-medium text-black/60 max-w-xs">
            Whether you're feeling cute or ready to take on the world, we've got a kurti for that.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {moods.map((mood, index) => (
            <motion.div
              key={mood.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer ${mood.color}`}
            >
              <img 
                src={mood.image} 
                alt={mood.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h4 className="text-4xl font-display text-white drop-shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {mood.name}
                </h4>
                <div className="mt-4 px-4 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  Explore Collection
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
