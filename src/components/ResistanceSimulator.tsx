"use client";

import React, { useState } from "react";
import { SECURITY_TESTS } from "@/data/testing";
import { ShieldCheck, Flame, Hammer, Zap, Crosshair, Play, RotateCcw, AlertTriangle, CheckCircle } from "lucide-react";
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
    }, 90);
  };

  const resetSimulation = () => {
    playTactileClick();
    setIsRunningTest(false);
    setTestProgress(0);
    setTestCompleted(false);
  };

  return (
    <section id="ensayos" className="relative py-24 bg-[#0a0c10] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono-tech text-xs uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>LABORATORIO DE BALÍSTICA &bull; SIMULADOR DE IMPACTO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-heading">
            ENSAYOS DESTRUCTIVOS &amp; NORMAS
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Sometemos cada prototipo a los estándares de laboratorio más hostiles del mundo. Simule en tiempo real el comportamiento del blindaje frente a armamento militar y herramientas industriales.
          </p>
        </div>

        {/* =========================================================
            SIMULADOR INTERACTIVO
           ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Selector de Ensayos (4 Columnas) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono-tech uppercase text-slate-400 tracking-wider mb-2">
              SELECCIONE EL PROTOCOLO DE TEST:
            </div>

            {SECURITY_TESTS.map((test) => {
              const isActive = test.id === selectedTestId;
              return (
                <button
                  key={test.id}
                  onClick={() => handleSelectTest(test.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#252c38] to-[#171b22] border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                      : "bg-[#12151b] border-slate-800 hover:border-slate-700 text-slate-400"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-tech font-bold uppercase text-amber-500">
                      {test.standard.split("/")[0]}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
                    )}
                  </div>
                  <div className="text-sm font-bold text-slate-100 mt-1 uppercase font-heading">
                    {test.name}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 truncate">
                    {test.threatLevel}
                  </div>
                </button>
              );
            })}

            {/* Cuadro de Sellos y Homologaciones Oficiales */}
            <div className="plate-raised p-4 rounded-xl border border-slate-700/60 mt-6 text-xs font-mono-tech text-slate-400 space-y-2">
              <div className="text-white font-bold uppercase flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>CERTIFICACIONES OFICIALES VIGENTES</span>
              </div>
              <ul className="space-y-1 text-[11px] text-slate-400">
                <li>&bull; UNE-EN 1627:2021 Grado 3, 4, 5 y 6</li>
                <li>&bull; RENAR / ANMaC Balística Nivel RB3</li>
                <li>&bull; CEN EN 1522 Clase FB4, FB6 y FB7</li>
                <li>&bull; Resistencia al Fuego UNE-EN 1634-1 EI 120</li>
              </ul>
            </div>
          </div>

          {/* Consola de Ensayo y Visualización (8 Columnas) */}
          <div className="lg:col-span-8">
            <div className="plate-raised p-6 sm:p-8 rounded-2xl border-2 border-slate-700 shadow-[0_20px_60px_rgba(0,0,0,0.9)] bg-gradient-to-b from-[#181d24] via-[#12151a] to-[#0c0e12]">
              
              {/* Barra superior de telemetría de laboratorio */}
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-700/80 gap-3">
                <div className="flex items-center gap-2">
                  <Crosshair className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-mono-tech font-bold text-white uppercase">
                    CÁMARA DE ENSAYO BALÍSTICO ACTIVA
                  </span>
                </div>
                <div className="font-mono-tech text-xs text-slate-400">
                  ESTÁNDAR: <strong className="text-amber-400">{currentTest.standard}</strong>
                </div>
              </div>

              {/* Área Gráfica de Simulación y Disparo */}
              <div className="my-6 p-6 rounded-xl bg-black/70 border border-slate-800 relative overflow-hidden min-h-[220px] flex flex-col justify-between">
                
                {/* Cuadrícula de coordenadas balísticas */}
                <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none" />

                {/* Blanco / Punto de impacto central */}
                <div className="relative z-10 flex flex-col items-center justify-center my-4">
                  <div
                    className={`relative w-28 h-28 rounded-full border-2 flex items-center justify-center transition-all ${
                      isRunningTest
                        ? "border-rose-500 shadow-[0_0_40px_rgba(244,63,94,0.6)] animate-pulse"
                        : testCompleted
                        ? "border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                        : "border-slate-700"
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full border border-dashed border-slate-600 flex items-center justify-center">
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

                    {/* Efecto de chispas / impacto en ejecución */}
                    {isRunningTest && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="absolute w-32 h-1 bg-amber-400 shadow-[0_0_15px_#f59e0b] rotate-45 animate-ping" />
                        <span className="absolute w-32 h-1 bg-rose-500 shadow-[0_0_15px_#ef4444] -rotate-45 animate-ping" />
                      </div>
                    )}
                  </div>

                  <div className="mt-3 font-mono-tech text-xs text-center">
                    {isRunningTest ? (
                      <span className="text-rose-400 font-bold tracking-wider animate-pulse">
                        [ DETONACIÓN / CARGA DESTRUCTIVA APLICADA: {testProgress}% ]
                      </span>
                    ) : testCompleted ? (
                      <span className="text-emerald-400 font-bold tracking-wider">
                        [ ENSAYO FINALIZADO: IMPACTO DISIPADO CON ÉXITO ]
                      </span>
                    ) : (
                      <span className="text-slate-400">
                        [ SISTEMA LISTO PARA INICIAR PROTOCOLO ]
                      </span>
                    )}
                  </div>
                </div>

                {/* Barra de progreso de carga destructiva */}
                <div className="relative z-10 space-y-1">
                  <div className="flex justify-between text-[11px] font-mono-tech text-slate-400">
                    <span>ENERGÍA DEFORMADORA:</span>
                    <span className="text-amber-400 font-bold">{testProgress}%</span>
                  </div>
                  <div className="w-full h-2 rounded bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 via-rose-500 to-emerald-500 transition-all duration-100"
                      style={{ width: `${testProgress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Parámetros Técnicos del Ensayo */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 font-mono-tech text-xs">
                <div className="plate-sunken p-3 rounded">
                  <div className="text-[10px] text-slate-500 uppercase">ARMAMENTO / CARGA</div>
                  <div className="font-bold text-white mt-0.5 truncate">{currentTest.toolOrCaliber}</div>
                </div>

                <div className="plate-sunken p-3 rounded">
                  <div className="text-[10px] text-slate-500 uppercase">ENERGÍA / VELOCIDAD</div>
                  <div className="font-bold text-amber-400 mt-0.5">{currentTest.temperatureOrVelocity}</div>
                </div>

                <div className="plate-sunken p-3 rounded">
                  <div className="text-[10px] text-slate-500 uppercase">RESULTADO OFICIAL</div>
                  <div className="font-bold text-emerald-400 mt-0.5">{currentTest.resultStatus}</div>
                </div>
              </div>

              {/* Resumen Forense del Ensayo */}
              <div className="p-4 rounded-lg bg-black/50 border border-slate-800 text-xs text-slate-300 mb-6">
                <strong className="text-white uppercase font-mono-tech block mb-1">
                  DICTAMEN DE LABORATORIO:
                </strong>
                <p className="leading-relaxed">{currentTest.summary}</p>
              </div>

              {/* Botones de Control de la Simulación */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={startSimulation}
                  disabled={isRunningTest}
                  className={`tactile-amber px-6 py-3 rounded text-xs font-bold tracking-wider uppercase flex items-center gap-2 cursor-pointer ${
                    isRunningTest ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{isRunningTest ? "SIMULANDO IMPACTO..." : "EJECUTAR ENSAYO EN TIEMPO REAL"}</span>
                </button>

                <button
                  onClick={resetSimulation}
                  disabled={isRunningTest}
                  className="tactile-button px-4 py-3 rounded text-xs font-bold tracking-wider uppercase text-slate-400 hover:text-white flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>REINICIAR BANCO</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
