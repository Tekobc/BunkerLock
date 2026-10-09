"use client";

import React, { useState } from "react";
import { IRONWORK_CATALOG } from "@/data/ironwork";
import { Wrench, Shield, ArrowUpRight, Check, Hammer, Lock, Activity, Sparkles } from "lucide-react";
import { playTactileClick } from "@/lib/sound";

interface IronworkCatalogProps {
  onSelectItem?: (itemTitle: string) => void;
}

export default function IronworkCatalog({ onSelectItem }: IronworkCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "TODO EL CATÁLOGO" },
    { id: "portones", label: "PORTONES ACORAZADOS" },
    { id: "rejas", label: "REJAS DE FORJA MACIZA" },
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
      onSelectItem(`HERRERÍA PESADA: ${itemTitle}`);
    }
    const el = document.getElementById("consola");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="herreria" className="relative py-24 bg-[#0d0f14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono-tech text-xs uppercase mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>DIVISIÓN HERRERÍA PESADA &amp; FORJA ESTRUCTURAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-heading">
              HERRERÍA PROFESIONAL DE PRECISIÓN
            </h2>
            <p className="mt-2 text-slate-400 max-w-xl text-sm sm:text-base">
              Portones motorizados anti-embestida, rejas de hierro macizo al fuego y cerramientos acorazados sin remaches débiles ni perfiles huecos.
            </p>
          </div>

          {/* Filtros de Categoría Táctiles */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-3.5 py-1.5 rounded text-xs font-mono-tech font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                  selectedCategory === cat.id
                    ? "bg-amber-500 text-black border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.4)]"
                    : "bg-[#141820] text-slate-400 border-slate-700 hover:text-white hover:border-slate-500"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla de Productos de Herrería Pesada */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="plate-raised rounded-2xl border border-slate-700/80 p-6 sm:p-8 flex flex-col justify-between group hover:border-amber-500/70 transition-all duration-300 relative overflow-hidden"
            >
              {/* Reflejo metálico sutil al hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Remaches de esquina */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="rivet-screw" />
                    <span className="text-[10px] font-mono-tech uppercase font-bold text-amber-500">
                      CATEGORÍA: {item.category.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-xs font-mono-tech text-slate-400">
                    RESISTENCIA: <strong className="text-emerald-400">{item.impactResistanceJoules.toLocaleString()} J</strong>
                  </span>
                </div>

                {/* Título y Subtítulo */}
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white font-heading group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-amber-400/90 font-mono-tech">
                  {item.subtitle}
                </p>

                {/* Descripción */}
                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Chasis y Anclajes */}
                <div className="mt-5 p-3 rounded bg-black/40 border border-slate-800 text-[11px] font-mono-tech text-slate-300 space-y-1">
                  <div>
                    <span className="text-slate-500">ESTRUCTURA:</span> {item.steelGauge}
                  </div>
                  <div>
                    <span className="text-slate-500">ANCLAJE:</span> {item.anchorSystem}
                  </div>
                  <div>
                    <span className="text-slate-500">TRATAMIENTO:</span> {item.finish}
                  </div>
                </div>

                {/* Tabla de Especificaciones */}
                <div className="mt-5 grid grid-cols-2 gap-2 text-xs font-mono-tech">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="plate-sunken p-2.5 rounded">
                      <div className="text-[9px] text-slate-500 uppercase">{spec.label}</div>
                      <div className="font-bold text-slate-200 mt-0.5 text-[11px]">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón de Cotización Directa */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono-tech text-slate-400">
                  Fabricación 100% personalizada s/ plano
                </span>

                <button
                  onClick={() => handleInquiry(item.title)}
                  className="tactile-amber px-4 py-2 rounded text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 cursor-pointer"
                >
                  <span>SOLICITAR COTIZACIÓN</span>
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
