import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../../data/data.js';

const HomeServices = () => {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-orange-600 font-bold tracking-[0.3em] uppercase text-xs"
          >
            Our Expertise
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 leading-tight tracking-tight"
          >
            What We <span className="text-orange-600 italic">Offer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto"
          >
            Bawa Khan Design Studio delivers modern construction solutions with precision, style, and functionality.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1, type: 'spring', stiffness: 50 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className={`${service.bg} ${service.textColor} rounded-2xl p-8 flex flex-col justify-between shadow-lg relative overflow-hidden cursor-pointer transition-all duration-500`}
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center rounded-xl mb-6 bg-orange-50 text-orange-600">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm md:text-base opacity-80 leading-relaxed">{service.desc}</p>

                {/* Arrow / Hover */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-current opacity-20 group-hover:opacity-100 group-hover:bg-orange-500 flex items-center justify-center transition-all duration-500">
                  <ArrowUpRight size={20} className="text-current group-hover:text-white" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
