import React from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../lib/data";

export default function Testimonials() {
  return (
    <section className="py-40 px-6 bg-linear-to-b from-transparent to-white/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-24 bubbly-text tracking-tight">
          Un-brrr-lievable!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className={`relative group p-10 md:p-12 rounded-[2.5rem] hover:-translate-y-6 transition-all duration-700 flex flex-col justify-between shadow-xl hover:shadow-2xl border-2 backdrop-blur-xl overflow-hidden ${
                t.type === "secondary"
                  ? "bg-pink-500/10 border-pink-300/50 hover:bg-pink-500/20"
                  : t.type === "tertiary"
                    ? "bg-yellow-500/10 border-yellow-300/50 hover:bg-yellow-500/20"
                    : "bg-white/40 border-white/60 hover:bg-white/60"
              }`}
            >
              <div className="absolute top-6 right-6 opacity-[0.05] group-hover:opacity-10 transition-opacity duration-700">
                <Quote size={100} className="text-blue-900" />
              </div>

              <div className="relative z-10 mb-12">
                <div className="flex gap-1.5 mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={22} className="text-yellow-400 fill-yellow-400 drop-shadow-sm" />
                  ))}
                </div>
                <p className="text-xl md:text-[1.4rem] font-bold text-blue-950 leading-relaxed drop-shadow-sm">
                  "{t.text}"
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-5 pt-8 border-t-2 border-blue-900/10">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <img
                    className="relative w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover transition-transform duration-500 group-hover:scale-110"
                    src={t.image}
                    alt={t.name}
                  />
                </div>
                <div>
                  <h4 className="font-black text-blue-950 text-xl md:text-2xl tracking-tight">{t.name}</h4>
                  <p className="text-blue-700/60 font-black text-xs uppercase tracking-widest mt-1">
                    Verified Taste Tester
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
