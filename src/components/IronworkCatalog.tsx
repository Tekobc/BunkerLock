"use client";

import React, { useState } from "react";
import { IRONWORK_CATALOG } from "@/data/ironwork";
import { Wrench, ArrowUpRight } from "lucide-react";
import { playTactileClick } from "@/lib/sound";

interface IronworkCatalogProps {
  onSelectItem?: (itemTitle: string) => void;
}

export default function IronworkCatalog({ onSelectItem }: IronworkCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "TODOS" },
    { id: "portones", label: "PORTONES" },
    { id: "rejas", label: "REJAS MACIZAS" },
    { id: "cerramientos", label: "CERRAMIENTOS BALÍSTICOS" },
    { id: "panico", label: "HABITACIONES DE PÁNICO" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? IRONWORK_CATALOG
      : IRONWORK_CATALOG.filter((item) => item.category === selectedCategory);

  const handleCategorySelect = (id: string) => {
    playTactileClick();
    setSelectedCategory(id);
  };

  const handleInquiry = (itemTitle: string) => {
    playTactileClick();
    if (onSelectItem) {
      onSelectItem(`HERRERÍA: ${itemTitle}`);
    }
    const el = document.getElementById("consola");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="herreria" className="relative py-28 bg-[#0a0b0f] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Cabecera Limpia */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase text-amber-500 mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>HERRERÍA PESADA DE PRECISIÓN</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-heading">
              ESTRUCTURAS &amp; FORJA
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Portones automatizados anti-embestida, rejas de hierro macizo forjadas al fuego y cámaras de pánico a medida.
            </p>
          </div>

          {/* Filtros Limpios */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono-tech font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-amber-500 text-black shadow-md"
                    : "bg-[#12141a] text-slate-400 hover:text-white border border-white/[0.06]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla Limpia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#111317] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center text-xs font-mono-tech text-slate-500 mb-3 uppercase">
                  <span>{item.category}</span>
                  <span className="text-emerald-400 font-bold">{item.impactResistanceJoules.toLocaleString()} JOULES</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold uppercase text-white font-heading group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono-tech mt-1 mb-4">
                  {item.subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech pt-4 border-t border-white/[0.06]">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="p-2.5 rounded bg-black/40">
                      <div className="text-[10px] text-slate-500 uppercase">{spec.label}</div>
                      <div className="text-slate-200 font-semibold mt-0.5">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono-tech text-slate-500">Fabricación a medida</span>
                <button
                  onClick={() => handleInquiry(item.title)}
                  className="tactile-amber px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                >
                  <span>COTIZAR</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
