import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Menu,
  X,
} from "lucide-react";

const navItems = ["Home", "About", "Services", "Projects", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="w-full fixed top-0 z-50">
      <div className="hidden lg:flex bg-slate-950 text-slate-200 px-10 py-2 text-xs justify-between items-center">
        <div className="flex gap-8">
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-orange-500" />
            +92 322 4599393
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} className="text-orange-500" />
            bawakhandesignstudio@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-orange-500" />
            Chishtian Road, Bahawalnagar
          </span>
        </div>

        <div className="flex items-center gap-4 border-l border-slate-700 pl-6">
          <Facebook className="w-4 h-4 hover:text-orange-500 cursor-pointer transition" />
          <Twitter className="w-4 h-4 hover:text-orange-500 cursor-pointer transition" />
          <Linkedin className="w-4 h-4 hover:text-orange-500 cursor-pointer transition" />
        </div>
      </div>

      <nav className="bg-white/95 backdrop-blur shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            {/* LOGO */}
            <NavLink to="/" className="leading-tight">
              <h1 className="text-2xl lg:text-3xl font-black tracking-tight text-slate-900">
                BAWA KHAN
              </h1>
              <p className="text-[10px] tracking-[0.2em] text-orange-500 font-semibold">
                DESIGN STUDIO
              </p>
            </NavLink>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex h-full items-center">
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `relative h-full px-6 flex items-center text-sm font-semibold uppercase tracking-wide transition-all duration-300
                    ${
                      isActive
                        ? "text-orange-600"
                        : "text-slate-700 hover:text-orange-600"
                    }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item}
                      <span
                        className={`absolute bottom-0 left-0 h-0.75 bg-orange-500 transition-all duration-300
                          ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* CTA */}
            <NavLink
              to="/contact"
              className="hidden md:inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-orange-600 transition"
            >
              Get a Quote
            </NavLink>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-slate-900"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 md:hidden"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-[75%] max-w-sm h-full bg-slate-950 p-8"
            >
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-xl font-black text-white">BAWA KHAN</h2>
                  <p className="text-[10px] tracking-[0.3em] text-orange-500">
                    DESIGN STUDIO
                  </p>
                </div>
                <button onClick={() => setIsOpen(false)}>
                  <X size={28} className="text-white" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <NavLink
                    key={item}
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-lg font-medium border-b border-slate-800 pb-3 hover:text-orange-500 transition"
                  >
                    {item}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
