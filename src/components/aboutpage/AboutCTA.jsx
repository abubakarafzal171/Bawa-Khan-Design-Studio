import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight, Phone, Calendar } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-100 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="bg-slate-900 rounded-[3.5rem] p-8 md:p-20 overflow-hidden relative shadow-2xl">
          {/* Subtle Grid Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Side: Content */}
            <div className="text-white space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-400 text-sm font-bold uppercase tracking-widest"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Ready to Build?
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-light leading-tight">
                Let’s create something <br />
                <span className="font-serif italic text-amber-500">
                  extraordinary together.
                </span>
              </h2>

              <p className="text-slate-400 text-lg max-w-md mx-auto lg:mx-0">
                Whether it's a dream home or a modern office, we bring design
                innovation and construction precision to your doorstep.
              </p>
            </div>

            {/* Right Side: Action Buttons */}
            <div className="flex flex-col items-center lg:items-end space-y-4">
              {/* Main CTA Button */}
              <Link
                to="/contact"
                className="group relative flex items-center gap-3 bg-amber-600 hover:bg-white text-white hover:text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 shadow-xl hover:shadow-amber-600/20 w-full md:w-auto justify-center"
              >
                Start a Conversation
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>

              {/* WhatsApp Quick Link */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/923224599393"
                className="mt-6 flex items-center gap-3 bg-[#25D366]/10 text-[#25D366] px-6 py-3 rounded-xl border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white transition-all cursor-pointer"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </motion.a>
            </div>
          </div>

          {/* Abstract Circle Decoration */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-600/20 rounded-full blur-[80px]"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutCTA;
