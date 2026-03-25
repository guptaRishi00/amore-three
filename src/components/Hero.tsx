import React from "react";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 px-6 overflow-hidden">
      <div className="absolute top-20 right-[15%] w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-10 left-[10%] w-[500px] h-[500px] bg-pink-300/20 rounded-full blur-[150px]"></div>

      <div className="max-w-6xl w-full text-center relative z-10">
        <div className="mb-10 inline-block px-8 py-2 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 text-blue-900 font-black tracking-widest uppercase text-[10px] md:text-xs liquid-sheen shadow-sm">
          The Magic of Arctic Melting
        </div>
        <h1 className="text-6xl md:text-[9rem] font-extrabold leading-[0.85] bubbly-text mb-8 md:mb-12 py-4 font-['Plus_Jakarta_Sans'] transition-all duration-700">
          Scoop <br /> <span className="italic block mt-2">Happiness</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-blue-900/60 font-bold leading-relaxed mb-12 px-4 transition-all duration-700">
          Where dreams drip like golden mango and the air tastes of frozen velvet.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
          <button className="w-full sm:w-auto px-10 py-5 btn-iridescent text-white rounded-full font-black text-lg md:text-xl liquid-sheen shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Enter The Dream
          </button>
          <button className="w-full sm:w-auto px-10 py-5 bg-white/30 backdrop-blur-3xl border-2 border-white/60 rounded-full text-lg md:text-xl font-black text-blue-700 flex items-center justify-center gap-3 hover:bg-white/50 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
            Our Legend
          </button>
        </div>
      </div>

      <div className="mt-20 w-full max-w-6xl relative px-4">
        <div className="gelato-bubble aspect-21/9 overflow-hidden group shadow-2xl relative">
          <img
            className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSKuDksd9tgiaZGBlVvtSXI3-DB91YFgpVYWYyI1rFu6UnCFGF2ehtH_bCVxGuuj28v_MskHUCF_PKfG44FGQptFBKZdzFs6CTSz81EnysQeBgG86atleR1opS4ZebY2fDOBeFgUwI2M9TUjIQlYjYSWv6Grvf_sY33XYuv4qSTN1EyGct9o-GMziQvFO1wL9GRWCasqa43peDViupl9HBhFREojuJAwTk2rCcVJcw3IH7gG7X5EG4PeDfrWbckREFoEuV_gsY2cTn"
            alt="Landscape"
          />
          <div className="absolute inset-0 bg-linear-to-t from-blue-900/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
