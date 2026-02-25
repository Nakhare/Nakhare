import { motion } from "motion/react";
import { Instagram, Star, Quote } from "lucide-react";
import FloralAccent from "./FloralAccent";

export default function SocialSection() {
  return (
    <section className="py-24 bg-brand-nude/30 relative overflow-hidden">
      <FloralAccent className="absolute top-1/2 -right-10 text-brand-maroon/5 w-60 h-60 -translate-y-1/2" />
      <FloralAccent className="absolute bottom-0 left-20 text-brand-rust/5 w-32 h-32" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Instagram Feed */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-maroon">
                <Instagram size={24} />
                <span className="text-sm font-bold uppercase tracking-widest">@nakhare_official</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display leading-none">The Nakhare Feed</h2>
              <p className="text-lg text-black/60">Tag us in your fits to get featured. #BigNakhare</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 0.95, rotate: i % 2 === 0 ? 2 : -2 }}
                  className="aspect-square bg-white rounded-lg overflow-hidden shadow-md border border-black/5"
                >
                  <img 
                    src={`https://picsum.photos/seed/insta-${i}/400/400`} 
                    alt="Instagram post" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-display leading-none">Real Talk</h2>
              <p className="text-lg text-black/60">What our community is saying about us.</p>
            </div>

            <div className="space-y-6">
              {[
                { name: "Ananya S.", text: "The fit is incredible! I've never found a brand that actually understands XXXL sizing without making it look like a sack.", rating: 5 },
                { name: "Mehak K.", text: "Obsessed with the 'Tevar' collection. The punk typography on the website is so cool, and the kurti is even better in person.", rating: 5 },
                { name: "Ishani P.", text: "Fast delivery and the quality is premium. Definitely my new go-to for college wear.", rating: 4 }
              ].map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 relative"
                >
                  <Quote className="absolute top-4 right-4 text-brand-maroon/10" size={48} />
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < review.rating ? "fill-brand-rust text-brand-rust" : "text-black/10"} />
                    ))}
                  </div>
                  <p className="text-lg font-medium italic mb-4">"{review.text}"</p>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-maroon">{review.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
