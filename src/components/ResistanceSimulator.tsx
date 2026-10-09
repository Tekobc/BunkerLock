"use client";

import React, { useState } from "react";
import { SECURITY_TESTS } from "@/data/testing";
import { ShieldCheck, Play, RotateCcw } from "lucide-react";
import { playTactileClick, playHeavyLatch, playBoltSlide } from "@/lib/sound";

export default function ResistanceSimulator() {
  const [selectedTestId, setSelectedTestId] = useState<string>("ballistic");
  const [isRunningTest, setIsRunningTest] = useState<boolean>(false);
  const [testProgress, setTestProgress] = useState<number>(0);
  const [testCompleted, setTestCompleted] = useState<boolean>(false);

  const currentTest = SECURITY_TESTS.find((t) => t.id === selectedTestId) || SECURITY_TESTS[0];

  const handleSelectTest = (id: string) => {
    playTactileClick();
    setSelectedTestId(id);
    setIsRunningTest(false);
    setTestProgress(0);
    setTestCompleted(false);
  };

  const startSimulation = () => {
    if (isRunningTest) return;
    setIsRunningTest(true);
    setTestCompleted(false);
    setTestProgress(0);
    playTactileClick();

    let prog = 0;
    const interval = setInterval(() => {
      prog += 5;
      setTestProgress(prog);

      if (prog === 50) {
        playHeavyLatch();
      }

      if (prog >= 100) {
        clearInterval(interval);
        setIsRunningTest(false);
        setTestCompleted(true);
        playBoltSlide();
      }
    }, 80);
  };

  const resetSimulation = () => {
    playTactileClick();
    setIsRunningTest(false);
    setTestProgress(0);
    setTestCompleted(false);
  };

  return (
    <section id="ensayos" className="relative py-28 bg-[#08090c] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Cabecera Limpia */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase text-amber-500 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>BANCO DE PRUEBAS BALÍSTICAS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-heading">
            ENSAYOS DE RESISTENCIA
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Simulación interactiva de laboratorio frente a armamento militar de alto calibre y herramientas industriales.
          </p>
        </div>

        {/* Layout Limpio en 2 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Selector de Protocolo (4 Columnas) */}
          <div className="lg:col-span-4 space-y-2.5">
            <span className="block text-xs font-mono-tech uppercase text-slate-500 mb-3">
              PROTOCOLO DE ENSAYO:
            </span>

            {SECURITY_TESTS.map((test) => {
              const isActive = test.id === selectedTestId;
              return (
                <button
                  key={test.id}
                  onClick={() => handleSelectTest(test.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#181c24] border-amber-500 text-white"
                      : "bg-[#101217] border-white/[0.06] text-slate-400 hover:border-white/20"
                  }`}
                >
                  <div className="text-[10px] font-mono-tech text-amber-500 font-bold uppercase">
                    {test.standard.split("/")[0]}
                  </div>
                  <div className="text-sm font-bold text-white mt-1 uppercase font-heading">
                    {test.name}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 truncate">
                    {test.threatLevel}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Consola de Ensayo Limpia (8 Columnas) */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-2xl bg-[#101217] border border-white/[0.08] shadow-xl">
            
            <div className="flex flex-wrap items-center justify-between pb-4 border-b border-white/[0.08] gap-4 text-xs font-mono-tech">
              <span className="text-slate-300 font-bold uppercase">LABORATORIO CERTIFICADO</span>
              <span className="text-amber-500">{currentTest.standard}</span>
            </div>

            {/* Simulación Visual Limpia */}
            <div className="my-8 p-8 rounded-xl bg-black/50 border border-white/[0.06] flex flex-col items-center justify-center min-h-[180px] relative">
              <div
                className={`w-20 h-20 rounded-full border-2 flex items-center justify-center transition-all ${
                  isRunningTest
                    ? "border-rose-500 scale-105"
                    : testCompleted
                    ? "border-emerald-500"
                    : "border-slate-700"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full ${
                    isRunningTest
                      ? "bg-rose-500 animate-ping"
                      : testCompleted
                      ? "bg-emerald-500"
                      : "bg-amber-500"
                  }`}
                />
              </div>

              <div className="mt-4 text-xs font-mono-tech">
                {isRunningTest ? (
                  <span className="text-rose-400 font-bold">CARGA APLICADA: {testProgress}%</span>
                ) : testCompleted ? (
                  <span className="text-emerald-400 font-bold">DICTAMEN: PENETRACIÓN CERO (100% INTACTO)</span>
                ) : (
                  <span className="text-slate-400">SISTEMA EN ESPERA DE DISPARO</span>
                )}
              </div>

              {/* Barra de Progreso */}
              <div className="w-full h-1 bg-slate-800 rounded-full mt-5 overflow-hidden">
                <div
                  className="h-full bg-amber-500 transition-all duration-75"
                  style={{ width: `${testProgress}%` }}
                />
              </div>
            </div>

            {/* Datos Técnicos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-xs font-mono-tech">
              <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04]">
                <div className="text-[10px] text-slate-500 uppercase">AMENAZA</div>
                <div className="text-white font-semibold mt-0.5 truncate">{currentTest.toolOrCaliber}</div>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04]">
                <div className="text-[10px] text-slate-500 uppercase">ENERGÍA</div>
                <div className="text-amber-400 font-semibold mt-0.5">{currentTest.temperatureOrVelocity}</div>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/[0.04]">
                <div className="text-[10px] text-slate-500 uppercase">RESULTADO</div>
                <div className="text-emerald-400 font-semibold mt-0.5">{currentTest.resultStatus}</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
              {currentTest.summary}
            </p>

            {/* Botones de Control */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={startSimulation}
                disabled={isRunningTest}
                className={`tactile-amber px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer ${
                  isRunningTest ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isRunningTest ? "SIMULANDO..." : "EJECUTAR ENSAYO"}</span>
              </button>

              <button
                onClick={resetSimulation}
                disabled={isRunningTest}
                className="px-4 py-2.5 rounded-md text-xs font-mono-tech text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 cursor-pointer bg-white/[0.02]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>REINICIAR</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
