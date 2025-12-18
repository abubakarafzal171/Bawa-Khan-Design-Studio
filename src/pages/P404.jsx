import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const P404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 px-6">
      <div className="text-center">
        {/* 404 Number */}
        <h1 className="text-[10rem] font-extrabold text-orange-500 leading-none">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
          Page Not Found
        </h2>
        <p className="text-slate-600 mt-2 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>

        {/* CTA Button */}
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition"
        >
          <ArrowLeft size={18} />
          Go Back Home
        </NavLink>

        {/* Optional Illustration */}
        <div className="mt-10">
          <img
            src="/logo.png"
            alt="404 Illustration"
            className="mx-auto w-80 max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default P404;
