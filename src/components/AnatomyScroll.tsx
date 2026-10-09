"use client";

import React, { useState } from "react";
import { Layers, Shield, Flame, Hammer, Lock, CheckCircle2, ChevronRight, Activity } from "lucide-react";
import { playTactileClick } from "@/lib/sound";

interface ArmorLayer {
  index: number;
  title: string;
  subtitle: string;
  thickness: string;
  hardness: string;
  functionDesc: string;
  protectionTarget: string;
  features: string[];
}

const LAYERS: ArmorLayer[] = [
  {
    index: 1,
    title: "Chapa Exterior de Acero Electrogalvanizado",
    subtitle: "Primera barrera arquitectónica y protección contra intemperie y vandalismo superficial",
    thickness: "3.2 mm de espesor calibrado",
    hardness: "220 HBW",
    functionDesc:
      "Chapa de acero laminado en frío sometida a baño de electrocincado para impedir la corrosión galvánica. Absorbe y disipa impactos iniciales de masas contundentes antes de transferir energía al chasis.",
    protectionTarget: "Mazas, palancas de pata de cabra, hachas de bombero y agentes atmosféricos.",
    features: [
      "Tratamiento anticorrosivo para más de 25 años en intemperie",
      "Plegado continuo de bordes sin soldaduras expuestas al corte",
      "Alojamiento embutido para mirilla gran angular de zafiro",
    ],
  },
  {
    index: 2,
    title: "Escudo Balístico al Manganeso & Carburo de Tungsteno",
    subtitle: "Capa impenetrable de dureza extrema para desintegrar brocas y discos de corte",
    thickness: "6.0 mm a 12.0 mm (según nivel balístico)",
    hardness: "500 - 600 HBW (Acero Balístico Hardox / Manganeso)",
    functionDesc:
      "Aleación austenítica al manganeso que se auto-endurece por fricción mecánica. Cuando una broca de cobalto o carburo intenta perforar el alojamiento de la cerradura, la placa incrementa su dureza localmente hasta romper la herramienta.",
    protectionTarget: "Taladros de columna magnéticos, brocas de diamante, caladoras de plasma.",
    features: [
      "Blindaje específico en el 100% del área de cajas de cerradura",
      "Efecto de auto-endurecimiento térmico",
      "Matriz compuesta anti-corte por sierra de sable",
    ],
  },
  {
    index: 3,
    title: "Mecanismo Multipunto & Cerrojos Cementados de 22mm",
    subtitle: "Red de pistones tridimensionales que clavan la hoja al marco de acero de la pared",
    thickness: "22 mm de diámetro macizo integral",
    hardness: "64 HRC en núcleo y periferia",
    functionDesc:
      "Transmisión mediante barras de empuje de acero trefilado. Al accionar la llave o motor, 16 a 28 pistones penetran 35mm en cajetines blindados superiores, inferiores y laterales, convirtiendo la puerta en un monolito solidario a la estructura del edificio.",
    protectionTarget: "Gatos hidráulicos de 20 toneladas, palancas de 1.5 metros, arietes policiales.",
    features: [
      "Pivotes fijos traseros anti-descolgamiento en el lateral de bisagras",
      "Dispositivo de rebloqueo pirotécnico (se enclava permanentemente ante ataque con soplete)",
      "Protección anti-retroceso: cada perno queda trabado de forma independiente",
    ],
  },
  {
    index: 4,
    title: "Núcleo Ignífugo & Aislante Termoacústico de Alta Densidad",
    subtitle: "Barrera térmica de lana de roca basáltica para contención de calor extremo y ruido",
    thickness: "50 mm de masa prensada (120 kg/m³)",
    hardness: "Aislante No Combustible (Clase A1)",
    functionDesc:
      "Aislamiento térmico que garantiza que, aun ardiendo la cara externa a más de 1000°C en un incendio voraz (curva ISO 834), la cara interna y los mandos mantengan una temperatura segura para las personas refugiadas en el interior.",
    protectionTarget: "Fuego voraz continuo (120 minutos), gases calientes, espionaje acústico.",
    features: [
      "Atenuación acústica certificada de 46 dB",
      "Juntas intumescentes perimetrales que sellan por dilatación térmica",
      "Cero emisión de gases tóxicos en caso de combustión externa",
    ],
  },
  {
    index: 5,
    title: "Bastidor Estructural de Vigas & Anclaje de Hormigón H-30",
    subtitle: "El esqueleto indestructible soldado a la estructura maestra de la propiedad",
    thickness: "Perfiles conformados en 3.5mm con nervios transversales",
    hardness: "Acero Estructural ASTM A36 / S275JR",
    functionDesc:
      "El premarco no va atornillado a un tabique común de yeso: se vincula a dados de hormigón armado o vigas estructurales mediante 12 a 16 garras de expansión química o soldadura eléctrica continua. Ninguna fuerza mecánica puede arrancar el vano.",
    protectionTarget: "Tracción por vehículo pesado (ensayo de cable de acero), colapso estructural.",
    features: [
      "Bisagras macizas con rodamientos de bolas de acero inoxidable",
      "Regulación tridimensional micrométrica de holgura",
      "Cajetines cerrados con chapa de 4mm para alojar los cerrojos",
    ],
  },
];

export default function AnatomyScroll() {
  const [activeLayerIndex, setActiveLayerIndex] = useState(1);

  const currentLayer = LAYERS.find((l) => l.index === activeLayerIndex) || LAYERS[0];

  const handleSelectLayer = (idx: number) => {
    playTactileClick();
    setActiveLayerIndex(idx);
  };

  return (
    <section id="anatomia" className="relative py-24 bg-gradient-to-b from-[#0a0c0f] via-[#11141a] to-[#0a0c0f] overflow-hidden">
      
      {/* Rejilla técnica de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono-tech text-xs uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>SCROLL-WORLD EXPERIENCE &bull; ANATOMÍA INTERIOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-heading">
            DESGLOSE ANATÓMICO POR CAPAS
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Una puerta BunkerLock no es una hoja de madera reforzada: es un sándwich balístico multicapa de ingeniería militar diseñado para absorber cualquier método de asalto contemporáneo.
          </p>
        </div>

        {/* =========================================================
            EXPLORADOR INTERACTIVO DE CAPAS
           ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Navegador de Capas (5 Columnas) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono-tech uppercase tracking-widest text-slate-400 mb-2 px-1">
              SELECCIONA UNA CAPA ESTRUCTURAL:
            </div>

            {LAYERS.map((layer) => (
              <button
                key={layer.index}
                onClick={() => handleSelectLayer(layer.index)}
                className={`w-full p-4 rounded-lg border text-left transition-all flex items-center justify-between group cursor-pointer ${
                  activeLayerIndex === layer.index
                    ? "bg-gradient-to-r from-[#242b35] to-[#171b22] border-amber-500 shadow-[0_4px_20px_rgba(245,158,11,0.25)]"
                    : "bg-[#12151b] border-slate-800 hover:border-slate-700 text-slate-400"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className={`w-8 h-8 rounded font-mono-tech font-bold text-xs flex items-center justify-center border ${
                      activeLayerIndex === layer.index
                        ? "bg-amber-500 text-black border-amber-400 shadow-[0_0_10px_#f59e0b]"
                        : "bg-slate-800 text-slate-400 border-slate-700"
                    }`}
                  >
                    0{layer.index}
                  </span>
                  <div>
                    <div
                      className={`text-sm font-bold tracking-tight uppercase font-heading ${
                        activeLayerIndex === layer.index ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {layer.title}
                    </div>
                    <div className="text-[11px] font-mono-tech text-amber-500/80">
                      {layer.thickness}
                    </div>
                  </div>
                </div>

                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    activeLayerIndex === layer.index
                      ? "text-amber-400 translate-x-1"
                      : "text-slate-600 group-hover:text-slate-400"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Ficha Técnica de la Capa Activa (7 Columnas) */}
          <div className="lg:col-span-7">
            <div className="plate-raised p-6 sm:p-8 rounded-2xl border-2 border-slate-700/80 shadow-[0_20px_60px_rgba(0,0,0,0.9)] bg-gradient-to-b from-[#181d24] via-[#12151a] to-[#0c0e12]">
              
              {/* Header de la Ficha */}
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-700/80 gap-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono-tech font-bold text-xs uppercase">
                    CAPA TÉCNICA 0{currentLayer.index} / 05
                  </span>
                  <span className="text-xs font-mono-tech text-slate-400">
                    DUREZA: <strong className="text-white">{currentLayer.hardness}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
                  <span className="text-xs font-mono-tech text-slate-300 font-bold">CALIBRACIÓN ACTIVA</span>
                </div>
              </div>

              {/* Título y Subtítulo */}
              <div className="mt-5">
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white font-heading">
                  {currentLayer.title}
                </h3>
                <p className="mt-2 text-sm text-amber-400/90 font-mono-tech">
                  {currentLayer.subtitle}
                </p>
              </div>

              {/* Descripción Funcional */}
              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                {currentLayer.functionDesc}
              </p>

              {/* Objetivo de Protección */}
              <div className="mt-6 p-4 rounded-lg bg-black/50 border border-slate-800">
                <div className="text-xs font-mono-tech uppercase text-amber-500 font-bold mb-1 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" /> AMENAZAS MITIGADAS ESPECÍFICAMENTE:
                </div>
                <div className="text-xs sm:text-sm text-slate-200 font-mono-tech">
                  {currentLayer.protectionTarget}
                </div>
              </div>

              {/* Lista de Especificaciones Clave */}
              <div className="mt-6 space-y-2.5">
                <div className="text-xs font-mono-tech uppercase text-slate-400 font-bold">
                  PROPIEDADES DE INGENIERÍA:
                </div>
                {currentLayer.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Barra de progreso de profundidad */}
              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono-tech text-slate-500">
                <span>EXTERIOR (VANOPUBLICO)</span>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((step) => (
                    <span
                      key={step}
                      className={`h-2 rounded transition-all ${
                        step === currentLayer.index
                          ? "w-8 bg-amber-500 shadow-[0_0_8px_#f59e0b]"
                          : step < currentLayer.index
                          ? "w-4 bg-slate-600"
                          : "w-4 bg-slate-800"
                      }`}
                    />
                  ))}
                </div>
                <span>INTERIOR (BÚNKER)</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
