import React from "react";
import { ArrowRight } from "lucide-react";

export default function Mythology() {
  return (
    <section className="py-40 bg-blue-700 text-white relative melting-border overflow-hidden shadow-inner">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent)] mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 md:gap-32">
          <div className="lg:w-1/2 relative order-2 lg:order-1">
            <div className="gelato-bubble aspect-square overflow-hidden shadow-2xl rotate-3 border-white/30 transition-transform duration-700 hover:rotate-0 hover:scale-[1.02]">
              <img
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC6tm06YiUf6gqBnAb_2JR-rXq66cWxBuuDB3qjkOFBpYh_gtVmeAzsPsuj3f9Sn4ubcqnpNwaT2Vz4kz2k1jywXqhkYdQ3by3cqH_a_ILDAXkeX9Ux3-Okw9XxTRpwxF1TW2aRyiB7WcrVCgV4LSmyKzUH2nGzCKk1NoSh5W6D0hm2yB22FKxFDuzoxXcOKfjJX3DdVrSUfWGR8CJwHitR52v71tej6Km7fc9MN3UHZb2NhY8D3SHt52Yy-4-33oPv6Kjo5Wy72Yw"
                alt="Mythology"
              />
            </div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/10 blur-[60px] rounded-full"></div>
          </div>
          <div className="lg:w-1/2 space-y-10 order-1 lg:order-2">
            <h2 className="text-5xl md:text-7xl font-black leading-tight bubbly-text text-white! filter-none! drop-shadow-lg">
              Melting Point <br /> Mythology
            </h2>
            <p className="text-lg md:text-2xl font-medium leading-relaxed opacity-90 drop-shadow-md">
              Legend says the first scoop was born from a comet made of frozen
              cream that crashed into a field of golden mangoes. Our penguins
              have been chasing that flavor ever since.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-6 text-2xl font-black hover:gap-10 transition-all group bg-white/10 border border-white/30 backdrop-blur-xl px-10 py-5 rounded-full hover:bg-white/20 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              The Legend{" "}
              <ArrowRight
                size={32}
                className="group-hover:scale-125 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
