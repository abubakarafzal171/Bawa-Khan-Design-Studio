import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Compass,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Clock,
  Trees,
  Hammer
} from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES_LIST = [
  {
    title: "Commercial Construction",
    icon: <Building2 className="w-8 h-8" />,
    description: "Delivering high-performance workspaces and retail environments. We handle everything from structural steel to advanced HVAC integration.",
    features: ["Office Complexes", "Retail Malls", "Industrial Hubs"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
  },
  {
    title: "Residential Construction",
    icon: <Home className="w-8 h-8" />,
    description: "Building more than houses—we build legacies. Our residential team specializes in custom luxury villas and sustainable multi-family housing.",
    features: ["Custom Mansions", "Smart Homes", "Sustainable Villas"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
  },
  {
    title: "Pre-Construction",
    icon: <Compass className="w-8 h-8" />,
    description: "Success is decided before the first brick is laid. Our pre-con phase includes feasibility studies and meticulous budget forecasting.",
    features: ["Cost Estimation", "Site Analysis", "BIM Modeling"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931",
  },
  {
    title: "Civil Engineering",
    icon: <Hammer className="w-8 h-8" />, 
    description: "Handling the heavy lifting of urban development. We provide robust engineering solutions for foundations and structural frameworks.",
    features: ["Structural Analysis", "Foundation Work", "Earthworks"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070",
  },
  {
    title: "Landscape Construction",
    icon: <Trees className="w-8 h-8" />,
    description: "Integrating architecture with nature. We design exterior environments that enhance property value and provide peaceful escapes.",
    features: ["Garden Design", "Hardscaping", "Exterior Lighting"],
    image: "https://images.unsplash.com/photo-1558905619-1715af70479d?q=80&w=2024",
  }
];

const Services = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-600/10 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
              Expertise & Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              Building Beyond <br />
              <span className="font-serif italic text-amber-500">Expectations.</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              From microscopic design details to macroscopic infrastructure, we
              offer a holistic suite of services to bring any architectural
              vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES LIST */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-16 items-center`}
            >
              {/* Image Container (Category Badge Removed) */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] bg-slate-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-amber-100 text-amber-600 rounded-2xl shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-lg leading-relaxed italic border-l-4 border-slate-200 pl-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 text-sm font-medium text-slate-500 shadow-sm"
                    >
                      <CheckCircle2 size={14} className="text-amber-500" />
                      {feature}
                    </span>
                  ))}
                </div>

  
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. TRUST STATS */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
          {[
            {
              label: "Quality Standards",
              value: "ISO 9001 Certified",
              desc: "Rigorous quality checks at every construction milestone.",
              icon: <ShieldCheck className="text-amber-600 mx-auto md:mx-0 mb-4" />
            },
            {
              label: "Safety Record",
              value: "Zero Incidents",
              desc: "Our site management prioritizes human life above all else.",
              icon: <Zap className="text-amber-600 mx-auto md:mx-0 mb-4" />
            },
            {
              label: "Time Efficiency",
              value: "On-Time Delivery",
              desc: "We use advanced systems to track and hit deadlines.",
              icon: <Clock className="text-amber-600 mx-auto md:mx-0 mb-4" />
            },
          ].map((stat, i) => (
            <div key={i}>
              {stat.icon}
              <h4 className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">
                {stat.label}
              </h4>
              <p className="text-2xl font-bold text-slate-900 mb-2">{stat.value}</p>
              <p className="text-slate-500 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FINAL CALL TO ACTION */}
      <section className="py-24 px-6">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="max-w-5xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Need a Specialized <br />
              <span className="italic font-serif text-amber-500">Solution?</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
              Every project is unique. Let’s sit down and discuss a tailored
              plan that fits your budget and timeline perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact" className="bg-amber-600 text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all shadow-xl">
                Get a Custom Quote
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[100px]"></div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;