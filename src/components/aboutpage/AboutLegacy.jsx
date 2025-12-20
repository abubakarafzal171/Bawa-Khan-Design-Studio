import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Hammer, Lightbulb, CheckCircle2 } from 'lucide-react';

// --- DATA CONFIGURATION ---
const STORY_DATA = {
  backgroundText: "SINCE 2003",
  mainHeading: "A Journey of Precision",
  subHeading: "Building Excellence for 20+ Years",
  description: "What started as a small team of passionate designers in Bahawalnagar has grown into a full-service construction design firm trusted across the region.",
  stats: [
    { label: "Founded", value: "2003", icon: <CheckCircle2 className="w-4 h-4" /> },
    { label: "Projects", value: "500+", icon: <Hammer className="w-4 h-4" /> },
    { label: "Awards", value: "15+", icon: <Lightbulb className="w-4 h-4" /> }
  ],
  images: {
    large: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
    small: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
  },
  quote: "Exceptional spaces are created when innovative design meets quality craftsmanship."
};

const AboutStory = () => {
  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden">
      
      {/* 1. Large Decorative Background Text (Architectural Style) */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[20vw] font-black leading-none whitespace-nowrap">
          {STORY_DATA.backgroundText}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-4 items-start">
          
          {/* --- LEFT SIDE: ASYMMETRIC IMAGERY --- */}
          <div className="lg:col-span-7 relative mb-20 lg:mb-0">
            {/* Main Large Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-4/5 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl aspect-[4/5]"
            >
              <img src={STORY_DATA.images.large} alt="Legacy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-slate-900/10"></div>
            </motion.div>

            {/* Overlapping Small Image with Parallax effect */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: -50, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-10 right-0 w-1/2 rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white aspect-square hidden md:block"
            >
              <img src={STORY_DATA.images.small} alt="Detail" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: CONTENT CARD --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:-ml-20 lg:mt-24 relative"
          >
            <div className="bg-slate-900 text-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/20 rounded-full blur-3xl"></div>
              
              <span className="text-amber-500 font-bold uppercase text-xs tracking-widest mb-4 block">
                {STORY_DATA.subHeading}
              </span>
              <h3 className="text-4xl md:text-5xl font-light mb-8 leading-tight font-serif italic">
                {STORY_DATA.mainHeading}
              </h3>
              
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                {STORY_DATA.description}
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 border-t border-slate-800 pt-10">
                {STORY_DATA.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-1 text-amber-500 mb-1">
                      {stat.icon}
                      <span className="text-xs font-bold uppercase tracking-tighter">
                        {stat.label}
                      </span>
                    </div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Quote Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 bg-amber-600 text-white p-8 rounded-2xl flex gap-4 shadow-xl"
            >
              <Quote className="text-amber-200 shrink-0" size={32} fill="currentColor" />
              <p className="font-medium italic text-lg leading-snug">
                "{STORY_DATA.quote}"
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Vertical Decorative Text for Side */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block">
        <p className="text-slate-200 text-xs font-bold tracking-[1em] uppercase vertical-text">
          Architecture • Construction • Innovation
        </p>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
};

export default AboutStory;