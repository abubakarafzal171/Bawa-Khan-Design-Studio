import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from '../../data/images/project1.webp';
import img2 from '../../data/images/project2.webp';
import img3 from '../../data/images/project3.webp';
import img4 from '../../data/images/project4.webp';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HomeProjects = () => {
  const images = [img1, img2, img3, img4];
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [_, setInit] = useState(false);

  return (
    <section className="py-16 bg-[#050810] overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              className="h-1 bg-orange-600 rounded-full"
            />
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
              Projects <span className="text-orange-600 italic">That Delivered</span>
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button 
              ref={prevRef}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all hover:bg-orange-600 hover:border-orange-600 group active:scale-90 bg-white/5"
            >
              <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={24} />
            </button>
            <button 
              ref={nextRef}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all hover:bg-orange-600 hover:border-orange-600 group active:scale-90 bg-white/5"
            >
              <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={24} />
            </button>
          </div>
        </div>

        {/* Swiper Slider Container */}
        <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl shadow-black/50">
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            effect="fade"
            speed={1000}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
                setInit(true);
              });
            }}
            pagination={{ clickable: true }}
            className="w-full h-[300px] md:h-[450px]" // Updated heights
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-full group">
                  <img 
                    src={img} 
                    alt={`Project ${idx + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-transparent to-transparent opacity-70" />
                  
                  {/* Info Badge */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <span className="text-orange-500 font-bold text-xs tracking-widest uppercase">Project 0{idx + 1}</span>
                    <div className="w-8 h-px bg-white/20" />
                    <span className="text-white/80 text-sm font-medium">Bawa Khan Studio</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Tailwind pagination already works, no need for JSX global */}
    </section>
  );
};

export default HomeProjects;
