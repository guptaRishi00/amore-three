import React from "react";
import { Zap, Leaf, Sparkles, Heart } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Zap,
      label: "Glacier Chill",
      color: "hover:bg-blue-500 hover:shadow-blue-500/50",
    },
    {
      icon: Leaf,
      label: "Pure Soul",
      color: "hover:bg-green-500 hover:shadow-green-500/50",
    },
    {
      icon: Sparkles,
      label: "Molded Art",
      color: "hover:bg-yellow-500 hover:shadow-yellow-500/50",
    },
    {
      icon: Heart,
      label: "Penguin Love",
      color: "hover:bg-pink-500 hover:shadow-pink-500/50",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white/20 backdrop-blur-sm border-y border-white/40">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black bubbly-text mb-20">
          The Arctic Magic
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group cursor-default"
            >
              <div
                className={`w-24 h-24 md:w-32 md:h-32 gelato-bubble flex items-center justify-center mb-6 transition-all duration-500 text-blue-600 group-hover:text-white group-hover:-translate-y-2 hover:shadow-xl ${item.color}`}
              >
                <item.icon size={40} />
              </div>
              <h3 className="text-xl md:text-2xl font-black bubbly-text group-hover:scale-105 transition-transform">
                {item.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
