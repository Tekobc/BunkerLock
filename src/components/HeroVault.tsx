"use client";

import React, { useState } from "react";
import { Shield, Fingerprint, Lock, Unlock, Key, Layers, ArrowDown, Activity, CheckCircle2 } from "lucide-react";
import { playBoltSlide, playHeavyLatch, playBiometricScan, playTactileClick, playHydraulicRelease } from "@/lib/sound";

export default function HeroVault() {
  const [isLocked, setIsLocked] = useState(true);
  const [isScanning, setIsScanning] = useState(false);
  const [scanGranted, setScanGranted] = useState(false);
  const [boltState, setBoltState] = useState<"locked" | "unlocked">("locked");
  const [inspectionMode, setInspectionMode] = useState<"standard" | "xray">("standard");

  const toggleVaultLock = () => {
    if (boltState === "locked") {
      playBoltSlide();
      setBoltState("unlocked");
      setIsLocked(false);
      setTimeout(() => {
        playHydraulicRelease();
      }, 350);
    } else {
      playBoltSlide();
      setTimeout(() => {
        playHeavyLatch();
      }, 250);
      setBoltState("locked");
      setIsLocked(true);
    }
  };

  const handleFingerprintScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    playTactileClick();

    setTimeout(() => {
      setIsScanning(false);
      setScanGranted(true);
      playBiometricScan(true);

      // Auto-unlock al reconocer huella
      setTimeout(() => {
        toggleVaultLock();
        setTimeout(() => setScanGranted(false), 3000);
      }, 500);
    }, 1200);
  };

  return (
    <section
      id="camara"
      className="relative min-h-screen pt-28 pb-20 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0c0f] via-[#101318] to-[#0a0c0f]"
    >
      {/* Fondo de iluminación volumétrica y rejilla metálica */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(37,45,58,0.45)_0%,rgba(10,12,15,0.95)_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

      {/* Haz de luz cenital de búnker */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-500/10 via-amber-500/0 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        {/* Badge superior de certificación industrial */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#181d24] border border-amber-500/30 shadow-[0_2px_12px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.15)] mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping" />
          <span className="text-xs font-mono-tech uppercase tracking-widest text-amber-400 font-bold">
            SISTEMA DE SEGURIDAD BALÍSTICA &bull; SERIE VAULT APEX 2026
          </span>
          <span className="text-slate-600 font-mono-tech">|</span>
          <span className="text-xs font-mono-tech text-slate-300">CERTIFICACIÓN EN 1627 RC6</span>
        </div>

        {/* Titular Principal de Alto Impacto */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase font-heading drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            PESO FÍSICO. ACERO BALÍSTICO. <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent">
              INEXPUGNABILIDAD TOTAL.
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Ingeniería de blindaje pesado y herrería de ultra-precisión para residencias de lujo, embajadas y cámaras acorazadas privadas.
          </p>
        </div>

        {/* =========================================================
            LA CÁMARA DE SEGURIDAD: PUERTA SKEUOMÓRFICA A ESCALA REAL
           ========================================================= */}
        <div className="relative w-full max-w-4xl mx-auto my-4">
          {/* Marco Exterior de Hormigón y Acero Estructural */}
          <div className="relative p-5 sm:p-8 rounded-xl bg-gradient-to-b from-[#1c2129] via-[#12151a] to-[#0c0e12] border-2 border-slate-700/80 shadow-[0_30px_90px_rgba(0,0,0,0.95),inset_0_2px_4px_rgba(255,255,255,0.1)]">
            
            {/* Tornillería perimetral de anclaje (Remaches biselados) */}
            <div className="absolute top-2 left-3 flex gap-3">
              <span className="rivet-screw" />
              <span className="rivet-screw" />
              <span className="rivet-screw" />
            </div>
            <div className="absolute top-2 right-3 flex gap-3">
              <span className="rivet-screw" />
              <span className="rivet-screw" />
              <span className="rivet-screw" />
            </div>
            <div className="absolute bottom-2 left-3 flex gap-3">
              <span className="rivet-screw" />
              <span className="rivet-screw" />
              <span className="rivet-screw" />
            </div>
            <div className="absolute bottom-2 right-3 flex gap-3">
              <span className="rivet-screw" />
              <span className="rivet-screw" />
              <span className="rivet-screw" />
            </div>

            {/* Telemetría superior del marco */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/60 font-mono-tech text-[11px] sm:text-xs">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-black/60 border border-slate-700 text-slate-400">
                  REF: <strong className="text-white">BL-VAULT-APEX-900</strong>
                </span>
                <span className="hidden sm:inline text-slate-500">CHAPA HARDOX 500 &bull; 110mm</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    playTactileClick();
                    setInspectionMode(inspectionMode === "standard" ? "xray" : "standard");
                  }}
                  className={`px-3 py-1 rounded text-[11px] font-bold border transition-all flex items-center gap-1.5 ${
                    inspectionMode === "xray"
                      ? "bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.3)]"
                      : "bg-slate-800 text-slate-400 border-slate-700 hover:text-white"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>MODO RAYOS X (BLINDAJE INTERIOR)</span>
                </button>

                <div className="flex items-center gap-2">
                  <span
                    className={`led-indicator ${boltState === "locked" ? "led-red" : "led-green"}`}
                  />
                  <span
                    className={`font-bold tracking-wider ${
                      boltState === "locked" ? "text-rose-400" : "text-emerald-400"
                    }`}
                  >
                    {boltState === "locked" ? "ENCLAVADO // CERRADO" : "LIBERADO // ABIERTO"}
                  </span>
                </div>
              </div>
            </div>

            {/* Hoja de la Puerta Blindada (La Masa de Acero) */}
            <div
              className={`relative rounded-lg transition-all duration-700 border-2 ${
                inspectionMode === "xray"
                  ? "bg-[#0b1626]/90 border-cyan-500/60 shadow-[0_0_40px_rgba(6,182,212,0.2)]"
                  : "bg-brushed-steel border-slate-500/40 shadow-[inset_0_2px_8px_rgba(255,255,255,0.25),inset_0_-4px_12px_rgba(0,0,0,0.8),0_12px_40px_rgba(0,0,0,0.9)]"
              } p-6 sm:p-10 min-h-[460px] sm:min-h-[500px] flex flex-col justify-between overflow-hidden`}
            >
              {/* Capas internas visibles en modo rayos X */}
              {inspectionMode === "xray" && (
                <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] bg-[size:16px_16px] opacity-30 pointer-events-none">
                  <div className="absolute inset-6 border border-dashed border-cyan-400/40 rounded flex items-center justify-center">
                    <span className="font-mono-tech text-xs text-cyan-300/80 px-3 py-1 bg-black/60 rounded border border-cyan-500/30">
                      SÁNDWICH BALÍSTICO: AR-500 (12mm) + PLACA MANGANESO ANTI-TALADRO (6mm) + NÚCLEO IGNÍFUGO
                    </span>
                  </div>
                </div>
              )}

              {/* Placa Metálica Grabada con Emblema BunkerLock */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="plate-sunken p-3 sm:p-4 rounded-md inline-flex items-center gap-3">
                  <Shield className="w-8 h-8 text-amber-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" />
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-100 font-heading">
                      BUNKERLOCK ARMORED VAULT
                    </div>
                    <div className="text-[10px] font-mono-tech text-amber-400/90 tracking-widest">
                      CALIBRE RESISTENCIA: RB3 / FB6 / EN 1627
                    </div>
                  </div>
                </div>

                {/* Mirilla Balística Acorazada */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-slate-800 via-slate-900 to-black border-2 border-slate-500/80 shadow-[inset_0_2px_6px_rgba(255,255,255,0.3),0_4px_12px_rgba(0,0,0,0.9)] flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-b from-sky-950 via-slate-900 to-black border border-cyan-500/30 shadow-[inset_0_0_8px_rgba(6,182,212,0.4)] flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400/80 animate-ping" />
                  </div>
                  <span className="absolute -top-1 w-2 h-1 bg-slate-400 rounded-sm" />
                </div>
              </div>

              {/* Centro de la Puerta: Volante Mecánico de Bóveda y Cerrojos */}
              <div className="relative z-10 my-8 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14">
                
                {/* Cerrojos cilíndricos de acero cromado laterales (Animados físicamente) */}
                <div className="absolute -left-6 sm:-left-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-0">
                  {[1, 2, 3].map((bolt) => (
                    <div
                      key={bolt}
                      className={`h-5 sm:h-6 rounded-l-md bg-brushed-chrome border border-slate-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.9)] transition-all duration-500 ${
                        boltState === "locked"
                          ? "w-10 sm:w-14 -translate-x-2"
                          : "w-3 translate-x-4 opacity-40"
                      }`}
                    />
                  ))}
                </div>

                {/* Volante Mecánico Pesado Giratorio (Tactile Wheel Latch) */}
                <div className="flex flex-col items-center">
                  <button
                    onClick={toggleVaultLock}
                    title="Haga clic para accionar los cerrojos de la puerta"
                    className="relative group p-2 focus:outline-none cursor-pointer"
                  >
                    {/* Aro exterior con remaches */}
                    <div
                      className={`relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-slate-600 via-slate-800 to-[#12151b] border-4 border-slate-400/70 shadow-[inset_0_3px_6px_rgba(255,255,255,0.5),0_15px_35px_rgba(0,0,0,0.9)] flex items-center justify-center transition-transform duration-700 ease-out ${
                        boltState === "unlocked" ? "rotate-90" : "rotate-0"
                      }`}
                    >
                      {/* Radios metálicos del volante */}
                      <div className="absolute w-full h-4 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 shadow-[0_2px_6px_rgba(0,0,0,0.8)] rounded-sm" />
                      <div className="absolute h-full w-4 bg-gradient-to-b from-slate-400 via-slate-200 to-slate-400 shadow-[0_2px_6px_rgba(0,0,0,0.8)] rounded-sm" />
                      <div className="absolute w-full h-4 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rotate-45 shadow-[0_2px_6px_rgba(0,0,0,0.8)] rounded-sm" />
                      <div className="absolute w-full h-4 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 -rotate-45 shadow-[0_2px_6px_rgba(0,0,0,0.8)] rounded-sm" />

                      {/* Núcleo central con cerradura */}
                      <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-b from-slate-700 via-slate-900 to-black border-2 border-slate-400 shadow-[inset_0_2px_5px_rgba(255,255,255,0.4),0_6px_16px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center">
                        {boltState === "locked" ? (
                          <Lock className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" />
                        ) : (
                          <Unlock className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" />
                        )}
                        <span className="text-[9px] font-mono-tech uppercase font-bold text-slate-300 mt-1">
                          {boltState === "locked" ? "ENCLAVAR" : "ABIERTO"}
                        </span>
                      </div>
                    </div>
                  </button>
                  <span className="mt-2 text-xs font-mono-tech text-amber-400 font-bold tracking-wider">
                    [ PRESIONE EL VOLANTE O ACCIONE CERROJOS ]
                  </span>
                </div>

                {/* Panel Escudo Biométrico Táctil */}
                <div className="plate-raised p-4 rounded-lg flex flex-col items-center w-52 border border-slate-600/60">
                  <div className="w-full flex items-center justify-between pb-2 mb-3 border-b border-slate-700/80">
                    <span className="text-[10px] font-mono-tech text-slate-400 font-bold">ESCÁNER BIOMÉTRICO</span>
                    <span
                      className={`led-indicator ${
                        scanGranted ? "led-green" : isScanning ? "led-amber" : "led-red"
                      }`}
                    />
                  </div>

                  <button
                    onClick={handleFingerprintScan}
                    disabled={isScanning}
                    className="relative w-24 h-28 rounded-md bg-gradient-to-b from-slate-900 to-black border-2 border-slate-700 shadow-[inset_0_2px_8px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center p-2 group hover:border-amber-500/70 transition-all cursor-pointer"
                  >
                    <Fingerprint
                      className={`w-14 h-14 transition-colors ${
                        isScanning
                          ? "text-amber-400 animate-pulse"
                          : scanGranted
                          ? "text-emerald-400"
                          : "text-slate-500 group-hover:text-amber-400"
                      }`}
                    />

                    {isScanning && (
                      <div className="absolute inset-x-2 top-2 h-0.5 bg-amber-400 shadow-[0_0_10px_#f59e0b] animate-bounce" />
                    )}

                    <span className="text-[9px] font-mono-tech uppercase mt-2 text-slate-400">
                      {isScanning ? "VERIFICANDO..." : scanGranted ? "AUTORIZADO" : "APOYAR DEDO"}
                    </span>
                  </button>

                  <div className="w-full mt-3 text-center">
                    <span className="text-[10px] font-mono-tech text-slate-400">
                      Vascular 3D &bull; Cripto 256-bit
                    </span>
                  </div>
                </div>

                {/* Cerrojos cilíndricos derechos */}
                <div className="absolute -right-6 sm:-right-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-0">
                  {[1, 2, 3].map((bolt) => (
                    <div
                      key={bolt}
                      className={`h-5 sm:h-6 rounded-r-md bg-brushed-chrome border border-slate-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,0,0,0.9)] transition-all duration-500 ${
                        boltState === "locked"
                          ? "w-10 sm:w-14 translate-x-2"
                          : "w-3 -translate-x-4 opacity-40"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Telemetría inferior de la puerta */}
              <div className="relative z-10 pt-4 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono-tech text-xs">
                <div className="plate-sunken p-2 rounded">
                  <div className="text-[10px] text-slate-500">MASA ESTIMADA</div>
                  <div className="font-bold text-slate-200">340 KG ACERO</div>
                </div>
                <div className="plate-sunken p-2 rounded">
                  <div className="text-[10px] text-slate-500">CERROJOS TRIPLEX</div>
                  <div className="font-bold text-amber-400">16 PISTONES 22MM</div>
                </div>
                <div className="plate-sunken p-2 rounded">
                  <div className="text-[10px] text-slate-500">PRESIÓN SELLADO</div>
                  <div className="font-bold text-slate-200">4.8 BAR HERMÉTICO</div>
                </div>
                <div className="plate-sunken p-2 rounded">
                  <div className="text-[10px] text-slate-500">RESISTENCIA DISPARO</div>
                  <div className="font-bold text-emerald-400">RB3 / 7.62 NATO</div>
                </div>
              </div>
            </div>

            {/* Botonera de control directo debajo de la puerta */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={toggleVaultLock}
                className="tactile-button px-6 py-3 rounded text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-200 flex items-center gap-2"
              >
                {boltState === "locked" ? (
                  <>
                    <Unlock className="w-4 h-4 text-emerald-400" />
                    <span>RETRAER CERROJOS (ABRIR BÓVEDA)</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-amber-400" />
                    <span>ENCLAVAR CERROJOS (SELLAR BÓVEDA)</span>
                  </>
                )}
              </button>

              <a
                href="#configurador"
                onClick={() => playTactileClick()}
                className="tactile-amber px-6 py-3 rounded text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-2"
              >
                <Shield className="w-4 h-4" />
                <span>PERSONALIZAR MI PUERTA A MEDIDA</span>
              </a>

              <a
                href="#anatomia"
                onClick={() => playTactileClick()}
                className="tactile-button px-5 py-3 rounded text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-300 flex items-center gap-2 hover:text-white"
              >
                <ArrowDown className="w-4 h-4 text-amber-400" />
                <span>DESGLOSE POR CAPAS</span>
              </a>
            </div>
          </div>
        </div>

        {/* Cita técnica inferior */}
        <div className="mt-8 text-center max-w-2xl font-mono-tech text-xs text-slate-500">
          * Todas las unidades BunkerLock se fabrican bajo pedido según vano específico. Instalación certificada con anclajes estructurales de hormigón armado sin obra sucia invasiva.
        </div>
      </div>
    </section>
  );
}
