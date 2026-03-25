import React from "react";
import { Zap, Leaf, Sparkles, Heart } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Zap,
      title: "Glacier Chill",
      desc: "Instant absolute zero",
      baseColor: "text-blue-600",
      bgHover: "group-hover:bg-blue-500",
      glow: "hover:shadow-blue-500/50",
      gradient: "from-blue-200/50 to-blue-50/20"
    },
    {
      icon: Leaf,
      title: "Pure Soul",
      desc: "Ethically sourced nature",
      baseColor: "text-green-600",
      bgHover: "group-hover:bg-green-500",
      glow: "hover:shadow-green-500/50",
      gradient: "from-green-200/50 to-green-50/20"
    },
    {
      icon: Sparkles,
      title: "Molded Art",
      desc: "Visually stunning shapes",
      baseColor: "text-yellow-600",
      bgHover: "group-hover:bg-yellow-500",
      glow: "hover:shadow-yellow-500/50",
      gradient: "from-yellow-200/50 to-yellow-50/20"
    },
    {
      icon: Heart,
      title: "Penguin Love",
      desc: "Crafted with deep care",
      baseColor: "text-pink-600",
      bgHover: "group-hover:bg-pink-500",
      glow: "hover:shadow-pink-500/50",
      gradient: "from-pink-200/50 to-pink-50/20"
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-white/20 backdrop-blur-sm border-y border-white/40">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-white/40 blur-3xl rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black bubbly-text mb-6 tracking-tight">
          The Arctic Magic
        </h2>
        <p className="text-xl md:text-2xl text-blue-900/60 font-bold mb-20 max-w-2xl mx-auto">
          Experience the incredible sensations imbued within every scoop of our creations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center group cursor-pointer 
                          bg-linear-to-b ${item.gradient} border-2 border-white/60 
                          rounded-full px-8 py-16 shadow-xl hover:shadow-2xl 
                          transition-all duration-500 hover:-translate-y-4`}
            >
              <div
                className={`w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center 
                            bg-white shadow-inner border-4 border-white/80 mb-8 
                            transition-all duration-500 ${item.baseColor} group-hover:text-white 
                            ${item.bgHover} ${item.glow} group-hover:scale-110`}
              >
                <item.icon size={48} strokeWidth={2.5} className="drop-shadow-sm" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-black text-blue-950 mb-3 group-hover:scale-105 transition-transform tracking-tight">
                {item.title}
              </h3>
              <p className="text-blue-800/70 font-bold text-center leading-snug px-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
