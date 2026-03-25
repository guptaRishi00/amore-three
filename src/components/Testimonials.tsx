import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../lib/data";

export default function Testimonials() {
  return (
    <section className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-24 bubbly-text">
          Un-brrr-lievable!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className={`gelato-bubble p-10 hover:-translate-y-6 transition-all duration-700 flex flex-col justify-between hover:shadow-2xl border border-white/50 backdrop-blur-xl ${
                t.type === "secondary"
                  ? "bg-pink-500/10 hover:bg-pink-500/20"
                  : t.type === "tertiary"
                    ? "bg-yellow-500/10 hover:bg-yellow-500/20"
                    : "bg-white/40 hover:bg-white/50"
              }`}
            >
              <p className="text-lg italic font-bold text-blue-900 mb-10 leading-relaxed drop-shadow-sm border-l-4 pl-4 border-blue-900/10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-blue-900/10">
                <img
                  className="w-14 h-14 rounded-full border-4 border-white shadow-lg transition-transform duration-300 hover:scale-110"
                  src={t.image}
                  alt={t.name}
                />
                <div>
                  <p className="font-black text-blue-900 text-lg">{t.name}</p>
                  <div className="flex text-yellow-500 drop-shadow-sm mt-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
