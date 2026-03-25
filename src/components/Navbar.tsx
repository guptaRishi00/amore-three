"use client";

import React, { useState, useEffect } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${scrolled ? "md:top-4" : "md:top-6"
        }`}
    >
      <div
        className={`max-w-6xl mx-auto flex justify-between items-center px-6 md:px-10 py-3 rounded-full border border-white/40 transition-all duration-500 ${scrolled
            ? "bg-white/40 backdrop-blur-2xl shadow-xl"
            : "bg-white/20 backdrop-blur-md"
          }`}
      >
        <div className="flex items-center gap-2 group cursor-pointer">
          <img
            className="h-10 w-auto transition-transform group-hover:scale-110"
            src="/logo.png"
            alt="Logo"
          />

        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-extrabold tracking-widest uppercase font-['Plus_Jakarta_Sans']">
          {["Shop", "Flavors", "Our Story", "Merch"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-blue-900 hover:text-pink-600 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="p-3 rounded-full bg-blue-500/10 text-blue-700 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
            <ShoppingCart size={20} />
          </button>
          <button
            className="md:hidden p-3 rounded-full bg-blue-500/10 text-blue-700 hover:bg-blue-500/20 transition-colors shadow-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden hidden sm:block">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3BkLhEIQme7teR1SMZWlRHrukoJuaWdIkH8FUnFB0mWtBYMdAsncc21ud2II159QbYnTr3tn2yfuZTKDFN_er1VNI8wHdzh6ysMIuE0FsqKlzwZ74SjUaIjTHXIjaamG5I5StSj6psX9GlVaF27DWDVrlJp4wnU7c7Kt7kLxIBItukDODzqVCAso-JmjaS-is-8teV7cA-JEOkpbsr66vhzr5i-Gf97e5Z98k5SCXEUR6jhIrw9Qt-PRZoFSHuzV7A6iZhf5yWFY9"
              alt="User"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-6 right-6 bg-white/90 backdrop-blur-3xl rounded-3xl p-8 border border-white/50 shadow-2xl flex flex-col items-center gap-6 font-bold uppercase tracking-widest transition-all">
          <a href="#" className="hover:text-amber-500 transition-colors">Shop</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Flavors</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Our Story</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Merch</a>
        </div>
      )}
    </nav>
  );
}
