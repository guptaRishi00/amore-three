import React from "react";
import { Plus } from "lucide-react";
import { FLAVORS } from "../lib/data";

export default function FlavorGallery() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black bubbly-text mb-6">
            Frozen Masterpieces
          </h2>
          <p className="text-xl md:text-2xl font-bold text-blue-800 italic">
            Organic bubbles of pure joy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
          {FLAVORS.map((flavor) => (
            <div
              key={flavor.id}
              className="gelato-bubble p-8 md:p-12 pt-24 text-center group relative mt-20 transition-all duration-500  hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)]"
            >
              <div
                className={`absolute -top-24 left-1/2 -translate-x-1/2 w-56 h-56 md:w-64 md:h-64 transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-4 `}
              >
                <img
                  className="w-full h-full object-contain rounded-full"
                  src={flavor.image}
                  alt={flavor.name}
                />
              </div>
              <div className="mt-30">

                <h3 className="text-3xl md:text-4xl font-black bubbly-text mb-4">
                  {flavor.name}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {flavor.description}
                </p>
                <button
                  className={`mt-8 w-14 h-14 rounded-full flex items-center justify-center mx-auto transition-all shadow-lg hover:scale-110 hover:shadow-xl active:scale-95 ${flavor.color}`}
                >
                  <Plus size={28} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
