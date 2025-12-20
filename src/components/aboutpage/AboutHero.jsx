import React from "react";
import { motion } from "framer-motion";
import {
  DraftingCompass,
  ArrowDown,
  Sparkles,
  Layers3,
} from "lucide-react";

const AboutHero = () => {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18, delayChildren: 0.4 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-[100vh] bg-[#FCFCFC] overflow-hidden flex items-center">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.18),transparent_45%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            className="lg:col-span-6"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-3 mb-10 px-5 py-3 rounded-full bg-white shadow-lg border border-slate-100"
            >
              <DraftingCompass className="w-5 h-5 text-amber-600" />
              <span className="text-xs tracking-[0.35em] font-bold text-slate-500 uppercase">
                Est. 2003 • Design & Build Studio
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl md:text-7xl xl:text-[5.2rem] font-light text-slate-900 leading-[1.05] mb-10"
            >
              Architecture That
              <span className="block font-serif italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
                Feels Timeless
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl text-slate-600 leading-relaxed max-w-xl mb-14"
            >
              At <strong>Bawa Khan Design Studio</strong>, we design calm,
              intelligent environments where structure, light, and purpose
              exist in perfect balance.
            </motion.p>

            <motion.div variants={item} className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <Layers3 className="text-amber-600" />
                <span className="text-sm text-slate-500">
                  Precision • Craft • Detail
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Sparkles className="text-amber-600" />
                <span className="text-sm text-slate-500">
                  Trusted by Clients
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-20 flex items-center gap-4 text-slate-400"
            >
              <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center animate-pulse">
                <ArrowDown size={18} />
              </div>
              <span className="text-sm tracking-wide">
                Scroll to explore philosophy
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="lg:col-span-6 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.6 }}
          >
            {/* Floating Badge */}
            <div className="absolute -top-8 left-6 z-20 bg-white/80 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-xl border border-slate-100 hidden md:block">
    
              <p className="text-2xl font-semibold text-slate-900">
                Trusted
              </p>
            </div>

            {/* Image (Height Fixed) */}
            <div className="relative w-full max-w-md aspect-[3/4] max-h-[520px] rounded-[2.5rem] overflow-hidden shadow-[0_35px_70px_-20px_rgba(0,0,0,0.25)]">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80"
                alt="Architectural Excellence"
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[3s]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-black/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
