import React from "react";
import { Share2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full rounded-t-[5rem] md:rounded-t-[8rem] bg-white/40 backdrop-blur-3xl flex flex-col items-center gap-10 py-24 px-6 border-t-2 border-white/60 relative shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
      <div className="flex items-center gap-3">
        <img
          className="h-12 w-auto transition-transform duration-500 hover:scale-110 hover:-rotate-6"
          src="/logo.png"
          alt="Footer Logo"
        />

      </div>

      <div className="flex flex-wrap justify-center gap-10 font-['Plus_Jakarta_Sans'] text-xs font-black uppercase tracking-[0.3em] text-blue-800">
        {["Privacy", "Contact", "Wholesale", "Careers"].map((link) => (
          <a
            key={link}
            href="#"
            className="hover:text-pink-600 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-pink-600 after:transition-all hover:after:w-full pb-1"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="flex gap-6 mt-4">
        <button className="w-14 h-14 rounded-full bg-white/60 backdrop-blur-xl flex items-center justify-center text-blue-600 shadow-xl hover:scale-125 hover:-translate-y-2 transition-all duration-300 border border-white/50 hover:bg-white hover:shadow-blue-500/20">
          <Share2 size={24} />
        </button>
        <button className="w-14 h-14 rounded-full bg-white/60 backdrop-blur-xl flex items-center justify-center text-pink-500 shadow-xl hover:scale-125 hover:-translate-y-2 transition-all duration-300 border border-white/50 hover:bg-white hover:shadow-pink-500/20">
          <Heart size={24} fill="currentColor" />
        </button>
      </div>

      <p className="text-xs font-bold text-blue-900/40 mt-6 tracking-widest uppercase">
        © 2024 Frosted Penguins. Stay Melty.
      </p>
    </footer>
  );
}
