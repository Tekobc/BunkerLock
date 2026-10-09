"use client";

import React, { useState, useMemo } from "react";
import { ARMOR_TIERS, LOCK_MECHANISMS, FINISH_OPTIONS } from "@/data/doors";
import { ArmorLevel, LockType, FinishType } from "@/types/bunker";
import { Shield, Lock, Sliders, Check, Sparkles, Scale, Gauge, DollarSign, Send, ArrowRight, ShieldAlert, Cpu } from "lucide-react";
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
  const [thermalInsulation, setThermalInsulation] = useState<boolean>(true);
  const [digitalPeephole, setDigitalPeephole] = useState<boolean>(true);
  const [reinforcedSubframe, setReinforcedSubframe] = useState<boolean>(true);

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

  // Cálculo en tiempo real de propiedades físicas y precio
  const calculatedSpecs = useMemo(() => {
    const areaM2 = (widthCm * heightCm) / 10000;
    const baseAreaM2 = (90 * 205) / 10000;
    const areaMultiplier = areaM2 / baseAreaM2;

    const totalWeight = Math.round(
      activeTier.weightKg * areaMultiplier +
        (activeFinish.id === "armored_oak" ? 35 : activeFinish.id === "forged_graphite" ? 45 : 15)
    );

    const basePrice = activeTier.basePriceUsd * areaMultiplier;
    const lockPrice = activeLock.priceDeltaUsd;
    const finishPrice = activeFinish.priceDeltaUsd;
    const addOns =
      (thermalInsulation ? 180 : 0) +
      (digitalPeephole ? 240 : 0) +
      (reinforcedSubframe ? 280 : 0);

    const totalPriceUsd = Math.round(basePrice + lockPrice + finishPrice + addOns);

    return {
      totalWeight,
      thicknessMm: activeTier.thicknessMm,
      boltsCount: activeTier.boltsCount,
      resistanceMin: activeTier.attackResistanceMinutes,
      totalPriceUsd,
    };
  }, [
    activeTier,
    activeLock,
    activeFinish,
    widthCm,
    heightCm,
    thermalInsulation,
    digitalPeephole,
    reinforcedSubframe,
  ]);

  const summaryString = useMemo(() => {
    return `BUNKERLOCK CONFIGURACIÓN: Nivel ${activeTier.level} (${activeTier.name}) | Cerradura: ${activeLock.name} | Acabado: ${activeFinish.name} | Medidas: ${widthCm}x${heightCm}cm | Peso: ${calculatedSpecs.totalWeight}kg | Estimado: USD $${calculatedSpecs.totalPriceUsd}`;
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
      `Hola BunkerLock, deseo cotizar la siguiente puerta acorazada personalizada:\n\n• ${summaryString}\n\n¿Podrían brindarme asesoramiento técnico y tiempo de entrega?`
    );
    window.open(`https://wa.me/5491100000000?text=${text}`, "_blank");
  };

  return (
    <section id="configurador" className="relative py-24 bg-[#0d0f14] border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono-tech text-xs uppercase mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>CONFIGURADOR INDUSTRIAL INTERACTIVO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-heading">
              DISEÑA TU BÓVEDA A MEDIDA
            </h2>
            <p className="mt-2 text-slate-400 max-w-xl text-sm sm:text-base">
              Calibra el nivel de resistencia balística, sistema de cerrojos electromecánicos y acabados exteriores de ultra-lujo.
            </p>
          </div>

          <div className="mt-6 md:mt-0 font-mono-tech text-xs text-slate-400 bg-[#141820] p-3 rounded border border-slate-700/60">
            <span className="text-amber-500 font-bold">TELEMETRÍA EN VIVO:</span> CÁLCULO DE MASA Y TOLERANCIA DINÁMICO
          </div>
        </div>

        {/* =========================================================
            LAYOUT DEL CONSTRUCTOR (CONTROLES + DISPLAY HUD)
           ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMNA IZQUIERDA: CONTROLES DE CONFIGURACIÓN (7 COLUMNAS) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* PASO 1: Nivel de Blindaje */}
            <div className="plate-raised p-5 sm:p-6 rounded-xl border border-slate-700/70">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-tech uppercase tracking-widest text-amber-500 font-bold flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" /> PASO 1: NIVEL DE BLINDAJE &amp; RESISTENCIA
                </span>
                <span className="text-xs font-mono-tech text-slate-400">
                  {activeTier.en1627Class}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
                {ARMOR_TIERS.map((tier) => (
                  <button
                    key={tier.level}
                    onClick={() => handleSelectLevel(tier.level)}
                    className={`p-3 rounded-lg border text-left transition-all relative ${
                      selectedLevel === tier.level
                        ? "bg-gradient-to-b from-[#2a313d] to-[#1c222b] border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                        : "bg-[#14171e] border-slate-700/80 hover:border-slate-500 text-slate-400"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono-tech font-bold text-white">NIVEL {tier.level}</span>
                      {selectedLevel === tier.level && (
                        <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]" />
                      )}
                    </div>
                    <div className="text-[11px] font-bold text-slate-200 mt-1 truncate">{tier.name}</div>
                    <div className="text-[10px] text-amber-400/90 font-mono-tech mt-1">{tier.ballisticRating.split("/")[0]}</div>
                  </button>
                ))}
              </div>

              {/* Detalle del nivel seleccionado */}
              <div className="mt-4 p-3.5 rounded bg-black/40 border border-slate-800 text-xs text-slate-300 space-y-1.5 font-mono-tech">
                <div className="text-white font-bold">{activeTier.category} — {activeTier.code}</div>
                <p className="text-slate-400 font-sans text-xs">{activeTier.description}</p>
                <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-slate-400 border-t border-slate-800">
                  <div><strong>Núcleo:</strong> {activeTier.coreMaterial}</div>
                  <div><strong>Placa anti-taladro:</strong> {activeTier.drillProofPlate}</div>
                </div>
              </div>
            </div>

            {/* PASO 2: Tipo de Cerradura */}
            <div className="plate-raised p-5 sm:p-6 rounded-xl border border-slate-700/70">
              <span className="text-xs font-mono-tech uppercase tracking-widest text-amber-500 font-bold flex items-center gap-2 mb-4">
                <Cpu className="w-4 h-4" /> PASO 2: SISTEMA DE CERROJOS Y CONTROL DE ACCESO
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {LOCK_MECHANISMS.map((lock) => (
                  <button
                    key={lock.id}
                    onClick={() => handleSelectLock(lock.id)}
                    className={`p-4 rounded-lg border text-left transition-all ${
                      selectedLock === lock.id
                        ? "bg-gradient-to-b from-[#2a313d] to-[#1c222b] border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                        : "bg-[#14171e] border-slate-700/80 hover:border-slate-500 text-slate-400"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white uppercase">{lock.name.split("&")[0]}</span>
                      {selectedLock === lock.id && <Check className="w-4 h-4 text-amber-400" />}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono-tech mb-2">{lock.type}</div>
                    <div className="text-[11px] text-amber-400 font-mono-tech font-bold">+USD ${lock.priceDeltaUsd}</div>
                  </button>
                ))}
              </div>
              <p className="mt-3 text-xs text-slate-400 font-mono-tech">
                {activeLock.description}
              </p>
            </div>

            {/* PASO 3: Acabado Exterior */}
            <div className="plate-raised p-5 sm:p-6 rounded-xl border border-slate-700/70">
              <span className="text-xs font-mono-tech uppercase tracking-widest text-amber-500 font-bold flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4" /> PASO 3: REVESTIMIENTO Y ACABADO ESTÉTICO
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FINISH_OPTIONS.map((finish) => (
                  <button
                    key={finish.id}
                    onClick={() => handleSelectFinish(finish.id)}
                    className={`p-4 rounded-lg border text-left transition-all ${
                      selectedFinish === finish.id
                        ? "bg-gradient-to-b from-[#2a313d] to-[#1c222b] border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                        : "bg-[#14171e] border-slate-700/80 hover:border-slate-500 text-slate-400"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{finish.name}</span>
                      {selectedFinish === finish.id && <Check className="w-4 h-4 text-amber-400" />}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">{finish.visualClass}</div>
                    <div className="text-[10px] text-amber-400 font-mono-tech mt-2">
                      Garantía Anticorrosión: {finish.corrosionWarrantyYears} Años
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* PASO 4: Dimensiones y Opciones Técnicas */}
            <div className="plate-raised p-5 sm:p-6 rounded-xl border border-slate-700/70 space-y-5">
              <span className="text-xs font-mono-tech uppercase tracking-widest text-amber-500 font-bold flex items-center gap-2">
                <Sliders className="w-4 h-4" /> PASO 4: CALIBRACIÓN DE VANO &amp; ACCESORIOS ESTRUCTURALES
              </span>

              {/* Sliders de dimensiones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between text-xs font-mono-tech mb-2">
                    <span className="text-slate-300">ANCHO DE HOJA:</span>
                    <span className="text-amber-400 font-bold">{widthCm} CM</span>
                  </div>
                  <input
                    type="range"
                    min="80"
                    max="130"
                    value={widthCm}
                    onChange={(e) => setWidthCm(Number(e.target.value))}
                    className="w-full accent-amber-500 bg-slate-800 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono-tech text-slate-500 mt-1">
                    <span>80 cm (Estándar)</span>
                    <span>130 cm (Extra Ancha)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono-tech mb-2">
                    <span className="text-slate-300">ALTO DE HOJA:</span>
                    <span className="text-amber-400 font-bold">{heightCm} CM</span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="250"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full accent-amber-500 bg-slate-800 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono-tech text-slate-500 mt-1">
                    <span>200 cm</span>
                    <span>250 cm (Piso a Techo)</span>
                  </div>
                </div>
              </div>

              {/* Toggles de accesorios adicionales */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    playTactileClick();
                    setThermalInsulation(!thermalInsulation);
                  }}
                  className={`p-3 rounded border text-left text-xs font-mono-tech transition-all ${
                    thermalInsulation
                      ? "bg-amber-500/10 border-amber-500/60 text-white"
                      : "bg-[#12151a] border-slate-800 text-slate-500"
                  }`}
                >
                  <div className="flex items-center justify-between font-bold">
                    <span>NÚCLEO IGNÍFUGO</span>
                    <span>{thermalInsulation ? "[ON]" : "[OFF]"}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Lana de roca 120 min</div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playTactileClick();
                    setDigitalPeephole(!digitalPeephole);
                  }}
                  className={`p-3 rounded border text-left text-xs font-mono-tech transition-all ${
                    digitalPeephole
                      ? "bg-amber-500/10 border-amber-500/60 text-white"
                      : "bg-[#12151a] border-slate-800 text-slate-500"
                  }`}
                >
                  <div className="flex items-center justify-between font-bold">
                    <span>MIRILLA DIGITAL</span>
                    <span>{digitalPeephole ? "[ON]" : "[OFF]"}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Visión nocturna IR</div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    playTactileClick();
                    setReinforcedSubframe(!reinforcedSubframe);
                  }}
                  className={`p-3 rounded border text-left text-xs font-mono-tech transition-all ${
                    reinforcedSubframe
                      ? "bg-amber-500/10 border-amber-500/60 text-white"
                      : "bg-[#12151a] border-slate-800 text-slate-500"
                  }`}
                >
                  <div className="flex items-center justify-between font-bold">
                    <span>SUBCHASIS SÍSMICO</span>
                    <span>{reinforcedSubframe ? "[ON]" : "[OFF]"}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Garras de acero 12mm</div>
                </button>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: HUD DE TELEMETRÍA FÍSICA & COTIZACIÓN EN VIVO (5 COLUMNAS) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            
            {/* Panel Principal HUD */}
            <div className="plate-raised p-6 rounded-xl border-2 border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-gradient-to-b from-[#181d24] via-[#12151b] to-[#0d0f13]">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                  <span className="text-xs font-mono-tech uppercase font-bold text-white tracking-wider">
                    COMPILADOR DE INGENIERÍA
                  </span>
                </div>
                <span className="text-[10px] font-mono-tech text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                  TIEMPO REAL
                </span>
              </div>

              {/* Visualización Esquema de Puerta Configurada */}
              <div className="my-6 p-4 rounded-lg bg-black/60 border border-slate-800 flex items-center justify-center relative overflow-hidden">
                <div
                  className={`w-36 h-56 rounded border-2 transition-all flex flex-col justify-between p-3 relative ${
                    selectedFinish === "brushed_steel"
                      ? "bg-brushed-steel border-slate-400"
                      : selectedFinish === "titanium_dark"
                      ? "bg-titanium-dark border-slate-700"
                      : selectedFinish === "armored_oak"
                      ? "bg-amber-950/70 border-amber-800"
                      : "bg-forged-iron border-slate-600"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="rivet-screw" />
                    <span className="w-3 h-3 rounded-full bg-cyan-400/80 shadow-[0_0_6px_#06b6d4]" />
                    <span className="rivet-screw" />
                  </div>

                  {/* Detalle central de cerradura */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-500 flex items-center justify-center shadow-lg">
                      <Lock className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className="text-[8px] font-mono-tech text-white uppercase mt-1">
                      {activeTier.code.split("-")[1]}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="rivet-screw" />
                    <span className="text-[7px] font-mono-tech text-slate-400">
                      {widthCm}x{heightCm}
                    </span>
                    <span className="rivet-screw" />
                  </div>
                </div>

                <div className="absolute right-3 top-3 text-right font-mono-tech text-[10px] text-slate-400 space-y-1">
                  <div>NORM: <strong className="text-white">{activeTier.en1627Class}</strong></div>
                  <div>BAL: <strong className="text-amber-400">{activeTier.ballisticRating.split("/")[0]}</strong></div>
                  <div>PINS: <strong className="text-emerald-400">{calculatedSpecs.boltsCount}</strong></div>
                </div>
              </div>

              {/* Métricas Físicas Clave */}
              <div className="grid grid-cols-2 gap-3 mb-6 font-mono-tech text-xs">
                <div className="plate-sunken p-3 rounded">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[10px] mb-1">
                    <Scale className="w-3 h-3 text-amber-500" />
                    <span>PESO ESTIMADO</span>
                  </div>
                  <div className="text-lg font-bold text-white">{calculatedSpecs.totalWeight} KG</div>
                  <div className="text-[9px] text-slate-500">Masa de acero macizo</div>
                </div>

                <div className="plate-sunken p-3 rounded">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[10px] mb-1">
                    <Gauge className="w-3 h-3 text-amber-500" />
                    <span>GROSOR DE HOJA</span>
                  </div>
                  <div className="text-lg font-bold text-white">{calculatedSpecs.thicknessMm} MM</div>
                  <div className="text-[9px] text-slate-500">Multicapa compuesta</div>
                </div>

                <div className="plate-sunken p-3 rounded">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[10px] mb-1">
                    <Lock className="w-3 h-3 text-amber-500" />
                    <span>CERROJOS 22MM</span>
                  </div>
                  <div className="text-lg font-bold text-amber-400">{calculatedSpecs.boltsCount} PISTONES</div>
                  <div className="text-[9px] text-slate-500">Acero cementado 64 HRC</div>
                </div>

                <div className="plate-sunken p-3 rounded">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[10px] mb-1">
                    <Shield className="w-3 h-3 text-amber-500" />
                    <span>RESISTENCIA ATAQUE</span>
                  </div>
                  <div className="text-lg font-bold text-emerald-400">+{calculatedSpecs.resistanceMin} MIN</div>
                  <div className="text-[9px] text-slate-500">Ensayo efracción continuo</div>
                </div>
              </div>

              {/* Bloque de Cotización Estimada */}
              <div className="p-4 rounded-lg bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 mb-6">
                <div className="text-[11px] font-mono-tech text-amber-400/90 uppercase tracking-widest font-bold">
                  PRESUPUESTO ESTIMADO DE FABRICACIÓN
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono-tech">
                    USD ${calculatedSpecs.totalPriceUsd.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-400 font-mono-tech">+ IVA s/ Facturación</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Incluye fabricación a medida, herrajes de seguridad, tratamiento anticorrosivo y embalaje para transporte especializado.
                </p>
              </div>

              {/* Botones de Acción */}
              <div className="space-y-3">
                <button
                  onClick={dispatchToConsole}
                  className="tactile-amber w-full py-3.5 rounded text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSFERIR A CONSOLA DE CONTACTO</span>
                </button>

                <button
                  onClick={sendWhatsApp}
                  className="tactile-button w-full py-3 rounded text-xs font-bold tracking-wider uppercase text-emerald-400 hover:text-emerald-300 flex items-center justify-center gap-2 border-emerald-500/40 cursor-pointer"
                >
                  <span>SOLICITAR AUDITORÍA POR WHATSAPP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Garantía de Fabricación */}
            <div className="p-4 rounded-lg bg-[#11141a] border border-slate-800 text-xs text-slate-400 font-mono-tech flex items-center gap-3">
              <Shield className="w-6 h-6 text-amber-500 shrink-0" />
              <span>
                <strong>GARANTÍA ESTRUCTURAL DE POR VIDA:</strong> Chasis garantizado contra deformación por ataque mecánico o torsión de vano.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
