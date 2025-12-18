import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Trophy, Users, Building2, HardHat } from 'lucide-react';

const StatItem = ({ icon: Icon, end, suffix, title, subtitle }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative group p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute -right-4 -bottom-4 text-slate-700/10 group-hover:text-orange-500/10 transition-colors duration-500">
        <Icon size={120} />
      </div>

      <div className="relative z-10">
        <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-orange-900/20 group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-white" size={28} />
        </div>

        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            {inView ? <CountUp end={end} duration={2.5} /> : '0'}
          </span>
          <span className="text-3xl font-bold text-orange-500">{suffix}</span>
        </div>

        <h3 className="mt-2 text-lg font-bold text-gray-100 uppercase tracking-wider">
          {title}
        </h3>
        <p className="text-sm text-slate-400 font-medium">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

const HomeStats = () => {
  const stats = [
    {
      icon: Building2,
      end: 150,
      suffix: '+',
      title: "Projects Done",
      subtitle: "Residential & Commercial"
    },
    {
      icon: Users,
      end: 120,
      suffix: '+',
      title: "Happy Clients",
      subtitle: "Trust & Satisfaction"
    },
    {
      icon: Trophy,
      end: 15,
      suffix: '+',
      title: "Awards Won",
      subtitle: "Excellence in Design"
    },
    {
      icon: HardHat,
      end: 25,
      suffix: '+',
      title: "Expert Team",
      subtitle: "Professional Engineers"
    }
  ];

  return (
    <section className="relative py-24 bg-[#0f172a] overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs"
          >
            Our Track Record
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-white mt-4 tracking-tight"
          >
            CONSTRUCTING WITH <span className="text-orange-600 italic">PRECISION</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStats;