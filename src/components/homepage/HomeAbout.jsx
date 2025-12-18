import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import AboutImage from "../../data/images/owner.webp"; // Replace with your image

const HomeAbout = () => {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* ===== Text Content ===== */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs"
          >
            Who We Are
          </motion.span>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight"
          >
            Building <span className="text-orange-500 italic">Dreams</span> With Precision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-slate-700 mt-6 text-lg md:text-xl max-w-lg"
          >
            Bawa Khan Design Studio is dedicated to transforming architectural visions into reality. With innovation, expertise, and a focus on quality, we deliver projects that inspire and stand the test of time.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="mt-8"
          >
            <NavLink
              to="/contact"
              className="inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition"
            >
              Get In Touch
            </NavLink>
          </motion.div>
        </div>

        {/* ===== Image / Illustration ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 flex justify-center lg:justify-end"
        >
          <img
            src={AboutImage}
            alt="About Us"
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HomeAbout;
