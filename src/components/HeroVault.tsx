"use client";

import React, { useState } from "react";
import { Shield, Lock, Unlock, ArrowDown, ChevronRight } from "lucide-react";
import { playBoltSlide, playHeavyLatch, playTactileClick, playHydraulicRelease } from "@/lib/sound";

export default function HeroVault() {
  const [isLocked, setIsLocked] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleVaultLock = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (isLocked) {
      playBoltSlide();
      setIsLocked(false);
      setTimeout(() => {
        playHydraulicRelease();
        setIsAnimating(false);
      }, 400);
    } else {
      playBoltSlide();
      setTimeout(() => {
        playHeavyLatch();
        setIsAnimating(false);
      }, 300);
      setIsLocked(true);
    }
  };

  return (
    <section
      id="camara"
      className="relative min-h-[92vh] pt-32 pb-24 flex flex-col items-center justify-center overflow-hidden bg-[#08090c]"
    >
      {/* Sutil resplandor cenital */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-amber-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center">
        
        {/* Badge Minimalista */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs text-slate-300 font-mono-tech mb-8">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>INGENIERÍA BALÍSTICA &bull; SERIE APEX 2026</span>
        </div>

        {/* Titular Principal Limpio y Contundente */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase font-heading max-w-3xl leading-[1.08]">
          PESO FÍSICO. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
            INEXPUGNABILIDAD TOTAL.
          </span>
        </h1>

        <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-xl font-normal leading-relaxed">
          Puertas acorazadas y herrería de alta precisión fabricadas a medida con acero de grado balístico para resistir lo impensable.
        </p>

        {/* =========================================================
            LA PUERTA ACORAZADA ESCULTÓRICA Y MINIMALISTA
           ========================================================= */}
        <div className="relative w-full max-w-lg mx-auto my-12">
          
          {/* Chasis Exterior de la Puerta */}
          <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#181b22] to-[#0e1015] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
            
            {/* Cabecera de Telemetría Discreta */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06] text-xs font-mono-tech">
              <span className="text-slate-400">CHAPA HARDOX 500 &bull; 110MM</span>
              <div className="flex items-center gap-2">
                <span className={`led-indicator ${isLocked ? "led-red" : "led-green"}`} />
                <span className={isLocked ? "text-rose-400" : "text-emerald-400"}>
                  {isLocked ? "ENCLAVADO // SEGURO" : "LIBERADO // ABIERTO"}
                </span>
              </div>
            </div>

            {/* Hoja de la Puerta con Textura Satinada */}
            <div className="relative rounded-xl bg-brushed-steel border border-white/10 p-8 min-h-[360px] flex flex-col justify-between items-center overflow-hidden shadow-inner">
              
              {/* Cerrojos de Cromo Laterales */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-0">
                {[1, 2, 3].map((bolt) => (
                  <div
                    key={bolt}
                    className={`h-4 rounded-l bg-brushed-chrome border border-slate-300 shadow-md transition-all duration-500 ${
                      isLocked ? "w-7 -translate-x-1" : "w-2 translate-x-2 opacity-30"
                    }`}
                  />
                ))}
              </div>

              <div className="absolute -right-3 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-0">
                {[1, 2, 3].map((bolt) => (
                  <div
                    key={bolt}
                    className={`h-4 rounded-r bg-brushed-chrome border border-slate-300 shadow-md transition-all duration-500 ${
                      isLocked ? "w-7 translate-x-1" : "w-2 -translate-x-2 opacity-30"
                    }`}
                  />
                ))}
              </div>

              {/* Emblema BunkerLock Superior */}
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono-tech tracking-wider">
                <Shield className="w-4 h-4 text-amber-500" />
                <span>BUNKERLOCK APEX</span>
              </div>

              {/* Mecanismo Central Táctil */}
              <div className="relative my-6 flex flex-col items-center">
                <button
                  onClick={toggleVaultLock}
                  title="Presione para accionar los cerrojos"
                  className="group relative focus:outline-none cursor-pointer"
                >
                  <div
                    className={`w-36 h-36 rounded-full bg-gradient-to-b from-[#282d37] to-[#12141a] border-2 border-white/20 shadow-[0_10px_25px_rgba(0,0,0,0.8)] flex items-center justify-center transition-transform duration-700 ease-out group-hover:border-amber-500/50 ${
                      isLocked ? "rotate-0" : "rotate-90"
                    }`}
                  >
                    {/* Radios metálicos minimalistas */}
                    <div className="absolute w-28 h-2 bg-gradient-to-r from-slate-500 via-slate-300 to-slate-500 rounded-full" />
                    <div className="absolute h-28 w-2 bg-gradient-to-b from-slate-500 via-slate-300 to-slate-500 rounded-full" />

                    {/* Núcleo de acero con icono */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-b from-[#1e222a] to-[#0c0e12] border border-white/20 flex items-center justify-center shadow-lg">
                      {isLocked ? (
                        <Lock className="w-6 h-6 text-amber-500" />
                      ) : (
                        <Unlock className="w-6 h-6 text-emerald-400" />
                      )}
                    </div>
                  </div>
                </button>

                <span className="mt-3 text-[11px] font-mono-tech text-slate-400 tracking-wider">
                  {isLocked ? "PULSE PARA ACCIONAR" : "PULSE PARA ENCLAVAR"}
                </span>
              </div>

              {/* Datos físicos de la puerta */}
              <div className="w-full pt-4 border-t border-white/[0.08] flex items-center justify-around text-xs font-mono-tech text-slate-400">
                <div>MASA: <strong className="text-white">340 KG</strong></div>
                <div>&bull;</div>
                <div>CERROJOS: <strong className="text-amber-400">16 PINS</strong></div>
                <div>&bull;</div>
                <div>NORMA: <strong className="text-white">EN 1627 RC6</strong></div>
              </div>

            </div>

          </div>

        </div>

        {/* Acciones Principales Limpias */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#configurador"
            onClick={() => playTactileClick()}
            className="tactile-amber px-6 py-3 rounded-md text-xs font-bold tracking-wider uppercase flex items-center gap-2"
          >
            <span>CONFIGURAR MI BÓVEDA</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <a
            href="#anatomia"
            onClick={() => playTactileClick()}
            className="tactile-button px-6 py-3 rounded-md text-xs font-bold tracking-wider uppercase text-slate-300 hover:text-white flex items-center gap-2"
          >
            <ArrowDown className="w-4 h-4 text-amber-400" />
            <span>EXPLORAR CAPAS</span>
          </a>
        </div>

      </div>
    </section>
  );
}
