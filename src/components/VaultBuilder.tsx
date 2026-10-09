"use client";

import React, { useState, useMemo } from "react";
import { ARMOR_TIERS, LOCK_MECHANISMS, FINISH_OPTIONS } from "@/data/doors";
import { ArmorLevel, LockType, FinishType } from "@/types/bunker";
import { Shield, Check, Sliders, ArrowRight, Send } from "lucide-react";
import { playTactileClick, playBoltSlide } from "@/lib/sound";

interface VaultBuilderProps {
  onSelectConfig?: (configText: string) => void;
}

export default function VaultBuilder({ onSelectConfig }: VaultBuilderProps) {
  const [selectedLevel, setSelectedLevel] = useState<ArmorLevel>(3);
  const [selectedLock, setSelectedLock] = useState<LockType>("biometric");
  const [selectedFinish, setSelectedFinish] = useState<FinishType>("brushed_steel");
  const [widthCm, setWidthCm] = useState<number>(95);
  const [heightCm, setHeightCm] = useState<number>(210);

  const activeTier = useMemo(
    () => ARMOR_TIERS.find((t) => t.level === selectedLevel) || ARMOR_TIERS[2],
    [selectedLevel]
  );
  const activeLock = useMemo(
    () => LOCK_MECHANISMS.find((l) => l.id === selectedLock) || LOCK_MECHANISMS[0],
    [selectedLock]
  );
  const activeFinish = useMemo(
    () => FINISH_OPTIONS.find((f) => f.id === selectedFinish) || FINISH_OPTIONS[0],
    [selectedFinish]
  );

  const calculatedSpecs = useMemo(() => {
    const areaM2 = (widthCm * heightCm) / 10000;
    const baseAreaM2 = (90 * 205) / 10000;
    const areaMultiplier = areaM2 / baseAreaM2;

    const totalWeight = Math.round(
      activeTier.weightKg * areaMultiplier +
        (activeFinish.id === "armored_oak" ? 35 : activeFinish.id === "forged_graphite" ? 45 : 15)
    );

    return {
      totalWeight,
      thicknessMm: activeTier.thicknessMm,
      boltsCount: activeTier.boltsCount,
      resistanceMin: activeTier.attackResistanceMinutes,
    };
  }, [activeTier, activeFinish, widthCm, heightCm]);

  const summaryString = useMemo(() => {
    return `BUNKERLOCK CONFIGURACIÓN: Nivel ${activeTier.level} (${activeTier.name}) | Cerradura: ${activeLock.name} | Acabado: ${activeFinish.name} | Medidas: ${widthCm}x${heightCm}cm | Peso: ${calculatedSpecs.totalWeight}kg`;
  }, [activeTier, activeLock, activeFinish, widthCm, heightCm, calculatedSpecs]);

  const handleSelectLevel = (lvl: ArmorLevel) => {
    playBoltSlide();
    setSelectedLevel(lvl);
  };

  const handleSelectLock = (l: LockType) => {
    playTactileClick();
    setSelectedLock(l);
  };

  const handleSelectFinish = (f: FinishType) => {
    playTactileClick();
    setSelectedFinish(f);
  };

  const dispatchToConsole = () => {
    playTactileClick();
    if (onSelectConfig) {
      onSelectConfig(summaryString);
    }
    const el = document.getElementById("consola");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sendWhatsApp = () => {
    playTactileClick();
    const text = encodeURIComponent(
      `Hola BunkerLock, deseo cotizar una puerta acorazada personalizada:\n\n• ${summaryString}\n\n¿Podrían contactarme para coordinar medidas y presupuesto?`
    );
    window.open(`https://wa.me/5491124073143?text=${text}`, "_blank");
  };

  return (
    <section id="configurador" className="relative py-28 bg-[#0a0b0f] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Cabecera Limpia */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase text-amber-500 mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>CONFIGURADOR PERSONALIZADO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-heading">
            DISEÑA TU BÓVEDA
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Personaliza el nivel de blindaje balístico, tecnología de control de acceso y acabado material con cálculo de especificaciones en tiempo real.
          </p>
        </div>

        {/* Layout en 2 Columnas Espaciosas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Columna de Selección (7 Columnas) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* 1. Nivel de Blindaje */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-tech uppercase font-bold text-slate-300">
                  1. NIVEL DE BLINDAJE &bull; {activeTier.en1627Class}
                </span>
                <span className="text-xs font-mono-tech text-amber-500 font-medium">
                  {activeTier.ballisticRating}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
                {ARMOR_TIERS.map((tier) => (
                  <button
                    key={tier.level}
                    onClick={() => handleSelectLevel(tier.level)}
                    className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                      selectedLevel === tier.level
                        ? "bg-[#1f242d] border-amber-500 text-white shadow-sm"
                        : "bg-[#111317] border-white/[0.08] text-slate-400 hover:border-white/20"
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs font-mono-tech font-bold">
                      <span>NIVEL {tier.level}</span>
                      {selectedLevel === tier.level && <Check className="w-3.5 h-3.5 text-amber-400" />}
                    </div>
                    <div className="text-xs font-bold text-slate-200 mt-1 truncate">{tier.name}</div>
                  </button>
                ))}
              </div>

              <p className="mt-3 text-xs text-slate-400 leading-relaxed font-sans">
                {activeTier.description}
              </p>
            </div>

            {/* 2. Sistema de Cerradura */}
            <div>
              <span className="block text-xs font-mono-tech uppercase font-bold text-slate-300 mb-4">
                2. SISTEMA DE CERRADURA &bull; {activeLock.type}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {LOCK_MECHANISMS.map((lock) => (
                  <button
                    key={lock.id}
                    onClick={() => handleSelectLock(lock.id)}
                    className={`p-4 rounded-lg border text-left transition-all cursor-pointer ${
                      selectedLock === lock.id
                        ? "bg-[#1f242d] border-amber-500 text-white shadow-sm"
                        : "bg-[#111317] border-white/[0.08] text-slate-400 hover:border-white/20"
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs font-bold text-white mb-1">
                      <span>{lock.name.split("&")[0]}</span>
                      {selectedLock === lock.id && <Check className="w-3.5 h-3.5 text-amber-400" />}
                    </div>
                    <div className="text-[11px] text-amber-500 font-mono-tech font-medium">ALTA SEGURIDAD</div>
                  </button>
                ))}
              </div>

              <p className="mt-3 text-xs text-slate-400 leading-relaxed font-sans">
                {activeLock.description}
              </p>
            </div>

            {/* 3. Acabado Exterior */}
            <div>
              <span className="block text-xs font-mono-tech uppercase font-bold text-slate-300 mb-4">
                3. REVESTIMIENTO EXTERIOR
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FINISH_OPTIONS.map((finish) => (
                  <button
                    key={finish.id}
                    onClick={() => handleSelectFinish(finish.id)}
                    className={`p-4 rounded-lg border text-left transition-all cursor-pointer ${
                      selectedFinish === finish.id
                        ? "bg-[#1f242d] border-amber-500 text-white shadow-sm"
                        : "bg-[#111317] border-white/[0.08] text-slate-400 hover:border-white/20"
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs font-bold text-white">
                      <span>{finish.name}</span>
                      {selectedFinish === finish.id && <Check className="w-3.5 h-3.5 text-amber-400" />}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">{finish.visualClass}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Medidas */}
            <div>
              <span className="block text-xs font-mono-tech uppercase font-bold text-slate-300 mb-4">
                4. DIMENSIONES DE VANO
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#111317] p-5 rounded-lg border border-white/[0.08]">
                <div>
                  <div className="flex justify-between text-xs font-mono-tech mb-2 text-slate-300">
                    <span>ANCHO DE HOJA</span>
                    <strong className="text-white">{widthCm} CM</strong>
                  </div>
                  <input
                    type="range"
                    min="80"
                    max="130"
                    value={widthCm}
                    onChange={(e) => setWidthCm(Number(e.target.value))}
                    className="w-full accent-amber-500 bg-slate-800 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono-tech mb-2 text-slate-300">
                    <span>ALTO DE HOJA</span>
                    <strong className="text-white">{heightCm} CM</strong>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="250"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full accent-amber-500 bg-slate-800 cursor-pointer"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Columna de Resumen Limpia (5 Columnas) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-8 rounded-2xl bg-[#12141a] border border-white/10 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <span className="text-xs font-mono-tech uppercase font-bold text-white tracking-wider">
                  ESPECIFICACIÓN TÉCNICA
                </span>
                <span className="text-[10px] font-mono-tech text-amber-400 uppercase">
                  {activeTier.en1627Class}
                </span>
              </div>

              {/* Métricas Principales */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06]">
                  <div className="text-[10px] font-mono-tech text-slate-500 uppercase">PESO TOTAL</div>
                  <div className="text-xl font-bold text-white font-mono-tech mt-0.5">
                    {calculatedSpecs.totalWeight} KG
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06]">
                  <div className="text-[10px] font-mono-tech text-slate-500 uppercase">GROSOR HOJA</div>
                  <div className="text-xl font-bold text-white font-mono-tech mt-0.5">
                    {calculatedSpecs.thicknessMm} MM
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06]">
                  <div className="text-[10px] font-mono-tech text-slate-500 uppercase">CERROJOS</div>
                  <div className="text-xl font-bold text-amber-400 font-mono-tech mt-0.5">
                    {calculatedSpecs.boltsCount} PINS
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06]">
                  <div className="text-[10px] font-mono-tech text-slate-500 uppercase">RESISTENCIA</div>
                  <div className="text-xl font-bold text-emerald-400 font-mono-tech mt-0.5">
                    +{calculatedSpecs.resistanceMin} MIN
                  </div>
                </div>
              </div>

              {/* Presupuesto a Medida */}
              <div className="pt-2">
                <div className="text-[11px] font-mono-tech text-slate-400 uppercase">
                  COTIZACIÓN PERSONALIZADA
                </div>
                <div className="text-2xl font-bold text-white font-mono-tech mt-1">
                  Presupuesto a Medida
                </div>
                <p className="text-xs text-slate-400 mt-1 font-mono-tech">
                  Fabricación personalizada según vano y nivel de blindaje solicitado.
                </p>
              </div>

              {/* Botones de Acción */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={dispatchToConsole}
                  className="tactile-amber w-full py-3.5 rounded-md text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSFERIR A CONTACTO</span>
                </button>

                <button
                  onClick={sendWhatsApp}
                  className="w-full py-3 rounded-md text-xs font-bold tracking-wider uppercase text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer bg-white/[0.02]"
                >
                  <span>CONSULTAR POR WHATSAPP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
