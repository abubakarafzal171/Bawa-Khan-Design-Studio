import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqData } from '../../data/data.js';

const HomeFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-28 bg-[#fdfdfd] px-6 relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-orange-500 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-slate-400 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Modern Header Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="p-2 bg-orange-50 text-orange-600 rounded-lg">
              <HelpCircle size={20} />
            </span>
            <span className="text-orange-600 font-bold uppercase tracking-[0.3em] text-xs">
              Knowledge Base
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none"
          >
            Your Questions, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
              Architected Answers.
            </span>
          </motion.h2>
        </div>

        {/* Premium FAQ List */}
        <div className="grid gap-6">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group transition-all duration-500 rounded-3xl ${
                  isOpen 
                  ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-transparent' 
                  : 'bg-transparent border border-slate-100 hover:border-orange-200'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-start gap-6">
                    <span className={`text-sm font-mono mt-1 transition-colors duration-300 ${
                      isOpen ? 'text-orange-500' : 'text-slate-400'
                    }`}>
                      0{index + 1}
                    </span>
                    <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                      isOpen ? 'text-slate-900' : 'text-slate-700 group-hover:text-orange-600'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className={`p-2 rounded-full transition-all duration-300 ${
                    isOpen ? 'bg-orange-500 text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-orange-50'
                  }`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 pb-8 ml-14">
                        <div className="h-[2px] w-12 bg-orange-100 mb-6" />
                        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Subtle Footer Note (No Action Button) */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-16 text-slate-400 font-medium"
        >
          Can't find what you're looking for? Feel free to reach out to our support team.
        </motion.p>
      </div>
    </section>
  );
};

export default HomeFaqs;