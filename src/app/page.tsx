"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroVault from "@/components/HeroVault";
import VaultBuilder from "@/components/VaultBuilder";
import AnatomyScroll from "@/components/AnatomyScroll";
import ResistanceSimulator from "@/components/ResistanceSimulator";
import IronworkCatalog from "@/components/IronworkCatalog";
import IndustrialConsole from "@/components/IndustrialConsole";
import Footer from "@/components/Footer";

export default function Home() {
  const [prefilledSpec, setPrefilledSpec] = useState<string>("");

  const handleConfigSelected = (spec: string) => {
    setPrefilledSpec(spec);
  };

  return (
    <div className="min-h-screen bg-[#090b0e] text-[#e2e8f0] flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* Barra de navegación superior skeuomórfica */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* 1. Hero Section (La Cámara de Seguridad) */}
        <HeroVault />

        {/* 2. Selector de Puertas Blindadas (Interactive Vault Builder) */}
        <VaultBuilder onSelectConfig={handleConfigSelected} />

        {/* 3. Desglose Anatómico de Seguridad (Scroll-World Experience) */}
        <AnatomyScroll />

        {/* 4. Sección de Herrería Profesional de Alta Precisión */}
        <IronworkCatalog onSelectItem={handleConfigSelected} />

        {/* 5. Simulador de Resistencia / Certificaciones */}
        <ResistanceSimulator />

        {/* 6. Contacto & Cotización Inmediata (Consola Industrial Táctil) */}
        <IndustrialConsole prefilledSpec={prefilledSpec} />
      </main>

      {/* Footer Industrial de Alta Resistencia */}
      <Footer />

      {/* Botón Flotante de WhatsApp Directo */}
      <a
        href="https://wa.me/5491124073143"
        target="_blank"
        rel="noopener noreferrer"
        title="Contactar por WhatsApp directo"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#12161f] hover:bg-[#181d28] border border-emerald-500/40 shadow-[0_8px_25px_rgba(0,0,0,0.8),0_0_15px_rgba(16,185,129,0.2)] text-white group transition-all duration-200"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-mono-tech font-bold uppercase tracking-wider text-slate-200 group-hover:text-emerald-400 transition-colors">
          WHATSAPP
        </span>
      </a>
    </div>
  );
}
