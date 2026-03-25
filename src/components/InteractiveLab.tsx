import React from "react";
import { Sparkles, Leaf } from "lucide-react";

export default function InteractiveLab() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto gelato-bubble p-10 md:p-24 liquid-sheen border-8 border-white/20 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-4 text-blue-700 font-black uppercase tracking-widest">
              <span className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl shadow-xl">
                01
              </span>
              <span className="text-lg">Interactive Lab</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black bubbly-text leading-[1.1] mb-10 font-['Plus_Jakarta_Sans']">
              Design Your <br /> Fruit Fantasy
            </h2>
            <div className="space-y-6">
              <div className="group flex items-center gap-6 p-4 md:p-6 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300 cursor-pointer border border-white/40 hover:shadow-lg">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-blue-900 group-hover:text-blue-700 transition-colors">
                    Pick Your Shape
                  </h4>
                  <p className="text-sm md:text-base text-slate-600">
                    Impossible molds for impossible dreams.
                  </p>
                </div>
              </div>
              <div className="group flex items-center gap-6 p-4 md:p-6 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300 cursor-pointer border border-white/40 hover:shadow-lg">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Leaf size={24} />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-blue-900 group-hover:text-blue-700 transition-colors">
                    Flavor Swirl
                  </h4>
                  <p className="text-sm md:text-base text-slate-600">
                    Liquid neon fruit purees.
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-12 w-full md:w-auto px-12 py-6 btn-iridescent text-white rounded-full font-black text-xl liquid-sheen shadow-xl hover:-translate-y-1 transition-transform duration-300">
              Start Transmuting
            </button>
          </div>

          <div className="relative">
            <div className="gelato-bubble aspect-square flex items-center justify-center bg-white/10 border-4 border-dashed border-blue-400/20 group backdrop-blur-2xl shadow-inner">
              <img
                className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl transition-all duration-1000 group-hover:scale-110 group-hover:-translate-y-6"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWKbWfwV2ZTbTR6eXmx0nI49gMtDH7a9swuCQD8AzFfmAXVed7isVnHpE0Hu9mzngkv02UkQ0IcWsQdB5bRQ1wW6SodKD1DKsXc0y5eg2wxdCJ0BE7cy34K3bGGGpVmRVDc_-SdnamNx--RGdJOVikKs6AS6XkSyqh4RVjXQWejZ23QpBtSVR91aDgZmaRwAtpJO85PYZ5xqHBYwdz1OS55i_Oq7J_LuU-FlVe33RBHYMtLJ5zTcjuWpAWAug8rX9T7wlgfgj_n3uT"
                alt="Feature"
              />
              <div className="absolute -bottom-6 bg-white/80 backdrop-blur-3xl px-8 py-4 rounded-3xl shadow-2xl text-lg font-black text-blue-700 border-2 border-white/60 transition-transform duration-500 group-hover:-translate-y-2">
                "Make it POP!"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
