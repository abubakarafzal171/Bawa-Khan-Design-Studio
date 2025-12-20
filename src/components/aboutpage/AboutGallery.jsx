import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// --- IMAGE DATA ---
const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    size: "full",
    title: "Structural Integrity",
    speed: 0
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053",
    size: "half",
    title: "Modern Minimalist Interiors",
    speed: -100
  },
  {
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931",
    size: "half",
    title: "The Craftsmanship",
    speed: 100
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    size: "full",
    title: "Architectural Clarity",
    speed: 0
  }
];

const AboutGallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect: moves images slightly as you scroll
  const yTranslate = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={containerRef} className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Section Title */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center text-4xl md:text-5xl font-light text-slate-900 font-serif italic"
          >
            Visualizing the <span className="text-amber-600">Extraordinary</span>
          </motion.h2>
        </div>

        <div className="space-y-32">
          
          {/* Row 1: Full Width Immersive */}
          <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-[3rem] group">
            <motion.div style={{ y: yTranslate }} className="absolute inset-0 w-full h-[120%]">
              <img 
                src={GALLERY_IMAGES[0].url} 
                alt={GALLERY_IMAGES[0].title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            <div className="absolute bottom-12 left-12 text-white">
              <p className="text-xs font-bold tracking-[0.4em] uppercase mb-2 opacity-80 underline underline-offset-8 decoration-amber-500">Perspective</p>
              <h4 className="text-3xl font-light">{GALLERY_IMAGES[0].title}</h4>
            </div>
          </div>

          {/* Row 2: Half Width Floating Layout */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            {/* Left Image (Slow scroll down) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl border-8 border-slate-50">
                <img src={GALLERY_IMAGES[1].url} className="w-full h-full object-cover" alt="Interior" />
              </div>
              <div className="px-4">
                 <h4 className="text-2xl font-bold">{GALLERY_IMAGES[1].title}</h4>
                 <p className="text-slate-400 mt-2">Harmonizing light and space.</p>
              </div>
            </motion.div>

            {/* Right Image (Floating Higher) */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: -40 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl border-8 border-slate-50">
                <img src={GALLERY_IMAGES[2].url} className="w-full h-full object-cover" alt="Detail" />
              </div>
              <div className="px-4">
                 <h4 className="text-2xl font-bold">{GALLERY_IMAGES[2].title}</h4>
                 <p className="text-slate-400 mt-2">Where precision meets human touch.</p>
              </div>
            </motion.div>
          </div>

          {/* Row 3: Full Width with Reveal */}
          <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-[3rem] group">
            <motion.div 
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={GALLERY_IMAGES[3].url} 
                alt={GALLERY_IMAGES[3].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="w-24 h-24 border border-white/30 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm mb-8"
                >
                  <div className="w-3 h-3 bg-amber-500 rounded-full animate-ping"></div>
                </motion.div>
                <h4 className="text-4xl md:text-6xl font-light tracking-tighter uppercase">Timeless <span className="italic font-serif">Aesthetics</span></h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutGallery;