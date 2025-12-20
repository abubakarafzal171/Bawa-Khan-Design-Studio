import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Added Router Link
import { DraftingCompass, HardHat, Sofa, Briefcase, ArrowUpRight } from 'lucide-react';

// --- DATA CONFIGURATION ---
const EXPERTISE_DATA = {
  header: {
    tag: "What We Offer",
    title: "Engineering Excellence",
    subtitle: "We specialize in comprehensive construction design services that take your project from initial concept through to final completion."
  },
  services: [
    {
      id: "01",
      title: "Architectural Design",
      link: "/services/architectural", // Specific links if needed
      desc: "Modern and sustainable blueprints tailored to your vision. We create spaces that inspire and function perfectly.",
      icon: <DraftingCompass className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80"
    },
    {
      id: "02",
      title: "Civil Construction",
      link: "/services/civil",
      desc: "From foundation to finishing with precision engineering. We use high-quality materials to ensure structural integrity.",
      icon: <HardHat className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
    },
    {
      id: "03",
      title: "Interior Design",
      link: "/services/interior",
      desc: "Luxury interiors that reflect your lifestyle. We blend aesthetics with functionality to create peaceful environments.",
      icon: <Sofa className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
    },
    {
      id: "04",
      title: "Project Management",
      link: "/services/management",
      desc: "Timely delivery and strict quality control. Our integrated approach eliminates communication gaps and delays.",
      icon: <Briefcase className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
    }
  ]
};

const AboutExpertise = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-amber-600 font-bold uppercase text-xs tracking-[0.3em] mb-4 block">
              {EXPERTISE_DATA.header.tag}
            </span>
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 leading-tight">
              {EXPERTISE_DATA.header.title}
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-500 max-w-sm text-lg leading-relaxed border-l-2 border-slate-100 pl-6"
          >
            {EXPERTISE_DATA.header.subtitle}
          </motion.p>
        </div>

        {/* --- SERVICES GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE_DATA.services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-50 rounded-[2.5rem] p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:bg-white border border-transparent hover:border-slate-100 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                {/* Background Number Reveal */}
                <span className="absolute top-6 right-8 text-6xl font-black text-slate-200/40 group-hover:text-amber-500/10 transition-colors">
                  {item.id}
                </span>

                {/* Icon Container */}
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-amber-600 mb-8 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>

                {/* Text Content */}
                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-slate-500 leading-relaxed mb-8 group-hover:text-slate-700 transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* --- LINKED VIEW DETAILS BUTTON --- */}
              <Link 
                to="/services" 
                className="flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-widest cursor-pointer group-hover:text-slate-900 transition-all duration-300 w-fit z-20"
              >
                View Details 
                <motion.span
                  whileHover={{ x: 5, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowUpRight size={18} />
                </motion.span>
              </Link>

              {/* Hidden Image Reveal on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover scale-150 group-hover:scale-100 transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutExpertise;