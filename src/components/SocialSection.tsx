import { motion } from "motion/react";
import { Instagram, Star, Quote } from "lucide-react";
import FloralAccent from "./FloralAccent";
import GlareCard from "./GlareCard";

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

            <GlareCard className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-black/5 bg-white group">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
              >
                <source src="https://www.nishorama.com/cdn/shop/videos/c/vp/f4da63febc334507a179ffe422d215aa/f4da63febc334507a179ffe422d215aa.HD-1080p-7.2Mbps-38377035.mp4?v=0" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-20">
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">Live from the Feed</span>
                </div>
              </div>
            </GlareCard>
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
