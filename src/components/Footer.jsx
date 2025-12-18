import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Facebook, Instagram, 
  Linkedin, ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-gray-300 font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Brand & Logo */}
        <div className="space-y-6">
          <Link to="/" className="inline-block">
            {/* Logo from public folder */}
            <img 
              src="/logo.png" 
              alt="Bawa Khan Design Studio Logo" 
              className="h-24 w-auto object-contain brightness-110 shadow-sm"
              onError={(e) => { e.target.style.display = 'none'; }} // Fallback if image fails
            />
          
          </Link>
          <p className="text-sm leading-relaxed text-slate-400 max-w-sm italic">
            Transforming visions into concrete reality. We specialize in modern architectural designs and robust construction solutions.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Navigation */}
        <div className="md:pl-12">
          <h3 className="text-white font-bold uppercase tracking-[0.2em] text-[11px] mb-8 border-l-2 border-orange-600 pl-3">
            Quick Links
          </h3>
          <ul className="space-y-4 text-sm font-medium">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="hover:text-orange-500 transition-colors flex items-center group"
                >
                  <ArrowRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300 text-orange-600" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div>
          <h3 className="text-white font-bold uppercase tracking-[0.2em] text-[11px] mb-8 border-l-2 border-orange-600 pl-3">
            Connect With Us
          </h3>
          <ul className="space-y-6 text-sm">
            <li className="flex gap-4 items-start group">
              <div className="bg-slate-800 p-2 rounded group-hover:bg-orange-600 transition-colors">
                <MapPin size={18} className="text-white shrink-0" />
              </div>
              <span className="text-slate-400">Chishtian Road, Bahawalnagar,<br /> Punjab, Pakistan</span>
            </li>
            <li className="flex gap-4 items-center group">
              <div className="bg-slate-800 p-2 rounded group-hover:bg-orange-600 transition-colors">
                <Phone size={18} className="text-white shrink-0" />
              </div>
              <a href="tel:+923224599393" className="hover:text-orange-500 transition-colors">+92 322 4599393</a>
            </li>
            <li className="flex gap-4 items-center group">
              <div className="bg-slate-800 p-2 rounded group-hover:bg-orange-600 transition-colors">
                <Mail size={18} className="text-white shrink-0" />
              </div>
              <a href="mailto:bawakhandesignstudio@gmail.com" className="hover:text-orange-500 transition-colors break-all">
                bawakhandesignstudio@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-800/50 py-8 bg-[#0a101f]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase tec">
            © {currentYear} BAWA KHAN DESIGN STUDIO. Built for excellence.
          </p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;