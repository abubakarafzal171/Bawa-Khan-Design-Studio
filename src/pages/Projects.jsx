import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PROJECT_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    title: "Modern Corporate Hub",
    location: "Lahore, PK",
    tag: "Commercial",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    title: "Luxury Glass Villa",
    location: "Islamabad, PK",
    tag: "Residential",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
    title: "Minimalist Estate",
    location: "Karachi, PK",
    tag: "Residential",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    title: "Tech Park Plaza",
    location: "Sialkot, PK",
    tag: "Commercial",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931",
    title: "Industrial Facility",
    location: "Faisalabad, PK",
    tag: "Infrastructure",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000",
    title: "Penthouse Interior",
    location: "Lahore, PK",
    tag: "Interior",
  },
];

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="bg-white min-h-screen">
      {/* --- Header --- */}
      <section className="pt-32 pb-16 px-6 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-amber-600 font-bold tracking-[0.3em] uppercase text-xs"
        >
          Our Portfolio
        </motion.span>
        <h1 className="text-4xl md:text-6xl font-light text-slate-900 mt-4">
          Visualizing <span className="italic font-serif">Excellence</span>
        </h1>
      </section>

      {/* --- Image Grid --- */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_IMAGES.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`img-${project.id}`}
              onClick={() => setSelectedImg(project)}
              className="relative group cursor-pointer overflow-hidden rounded-[2rem] aspect-[4/5] bg-slate-100"
            >
              <img
                src={project.url}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                    {project.tag}
                  </span>
                  <h3 className="text-white text-2xl font-light mt-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/70 text-sm mt-1">
                    <MapPin size={14} /> {project.location}
                  </div>
                </div>
                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                  <Maximize2 size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Full Screen Modal --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-amber-500 transition-colors z-[110]">
              <X size={40} />
            </button>

            <motion.div
              layoutId={`img-${selectedImg.id}`}
              className="relative max-w-5xl w-full h-full max-h-[80vh] rounded-[2rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.url}
                className="w-full h-full object-contain md:object-cover"
                alt="Selected"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h2 className="text-3xl font-light">{selectedImg.title}</h2>
                <p className="text-amber-400 mt-2 tracking-widest uppercase text-sm">
                  {selectedImg.location} — {selectedImg.tag}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Quick CTA --- */}
      <section className="py-20 bg-slate-50 text-center px-6">
        <h2 className="text-3xl font-light text-slate-900 mb-8">
          Ready to see your project here?
        </h2>
        <Link to="/contact">
          {" "}
          <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-600 transition-all flex items-center gap-3 mx-auto">
            Book a Free Consultation <ArrowRight size={18} />
          </button>{" "}
        </Link>
      </section>
    </div>
  );
};

export default Projects;
