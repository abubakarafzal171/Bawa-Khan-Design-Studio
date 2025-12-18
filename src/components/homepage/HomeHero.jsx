import React from "react";
import { NavLink } from "react-router-dom";

import HeroVideo1 from "../../data/videos/heroVideo1.mp4";
import HeroVideo2 from "../../data/videos/heroVideo2.mp4";
import HeroVideo3 from "../../data/videos/heroVideo1.mp4";

const videos = [HeroVideo1, HeroVideo2, HeroVideo3];

// Pick random video directly during initial state
const getRandomVideo = () => videos[Math.floor(Math.random() * videos.length)];

const HomeHero = () => {
  const [currentVideo] = React.useState(getRandomVideo()); // <-- Initialize randomly once

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* ===== Video Background ===== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        key={currentVideo}
      >
        <source src={currentVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 md:px-10 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
          Transforming Ideas <span className="text-orange-500">Into Reality</span>
        </h1>
        <p className="text-slate-200 text-lg md:text-xl mb-8 drop-shadow-md">
          Bawa Khan Design Studio delivers excellence in construction, architectural innovation, and modern infrastructure design.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <NavLink
            to="/contact"
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition"
          >
            Start Your Project
          </NavLink>
          <NavLink
            to="/projects"
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-slate-900 transition"
          >
            View Portfolio
          </NavLink>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black/70 to-transparent"></div>
    </section>
  );
};

export default HomeHero;
