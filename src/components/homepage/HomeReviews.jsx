import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink, ArrowRight } from 'lucide-react';
import { reviewsData } from '../../data/data.js';

const HomeReviews = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="py-24 bg-[#0f172a] text-white overflow-hidden relative">
      {/* Decorative Architectural Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 -skew-x-12 translate-x-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-12 h-[2px] bg-orange-500"></span>
              <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-xs">
                Client Success Stories
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black leading-tight italic tracking-tight">
              BUILT ON <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">TRUST.</span>
            </h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-400 text-lg max-w-sm border-l-2 border-slate-700 pl-6"
          >
            We don't just build structures; we build relationships that last as long as our concrete.
          </motion.p>
        </div>

        {/* Reviews Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reviewsData.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group bg-slate-800/40 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 flex flex-col justify-between hover:bg-slate-800/60 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={`${i < review.stars ? 'fill-orange-500 text-orange-500' : 'text-slate-600'}`} 
                      />
                    ))}
                  </div>
                  <Quote className="text-slate-700 group-hover:text-orange-500/20 transition-colors duration-500 w-10 h-10" />
                </div>

                <p className="text-slate-300 text-lg leading-relaxed mb-8 font-medium italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-orange-500 w-4 h-4 rounded-full border-2 border-[#0f172a]" />
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-wide uppercase text-sm">
                    {review.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-bold tracking-widest">
                    {review.role || "VERIFIED CLIENT"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Section (Modern Premium CTA) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 flex flex-col items-center border-t border-slate-800 pt-16"
        >
          <p className="text-slate-400 mb-6 font-medium">Have you worked with us recently?</p>
          <a 
            href="https://www.google.com/maps/place/Bawa+khan+design+studio+bahawalnagar/@29.9917096,73.2309644,17z/data=!4m18!1m9!3m8!1s0x393d6ff9694ae145:0x9b6207ff4460469e!2sBawa+khan+design+studio+bahawalnagar!8m2!3d29.9915499!4d73.2310612!9m1!1b1!16s%2Fg%2F11x2v7yp5f!3m7!1s0x393d6ff9694ae145:0x9b6207ff4460469e!8m2!3d29.9915499!4d73.2310612!9m1!1b1!16s%2Fg%2F11x2v7yp5f?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-black text-sm uppercase tracking-tighter hover:bg-orange-500 hover:text-white transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Write Your Review On Google 
              <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeReviews;