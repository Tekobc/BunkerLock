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
    </div>
  );
}
