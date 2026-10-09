"use client";

import React, { useState } from "react";
import { Layers, Shield, CheckCircle2 } from "lucide-react";
import { playTactileClick } from "@/lib/sound";

interface ArmorLayer {
  index: number;
  title: string;
  subtitle: string;
  thickness: string;
  hardness: string;
  functionDesc: string;
  features: string[];
}

const LAYERS: ArmorLayer[] = [
  {
    index: 1,
    title: "Chapa Exterior de Acero Electrogalvanizado",
    subtitle: "Primera barrera arquitectónica y protección contra intemperie y corte superficial",
    thickness: "3.2 mm",
    hardness: "220 HBW",
    functionDesc:
      "Chapa de acero laminado en frío con tratamiento de electrocincado continuo. Absorbe el impacto de herramientas manuales antes de transferir la energía al chasis interior.",
    features: [
      "Tratamiento anticorrosivo para más de 25 años en intemperie",
      "Plegado continuo de bordes sin costuras de soldadura expuestas",
      "Alojamiento embutido para mirilla gran angular de zafiro",
    ],
  },
  {
    index: 2,
    title: "Escudo Balístico al Manganeso Anti-Taladro",
    subtitle: "Blindaje de dureza extrema para desintegrar brocas y discos abrasivos",
    thickness: "6.0 mm a 12.0 mm",
    hardness: "500 - 600 HBW (Hardox / Manganeso)",
    functionDesc:
      "Aleación que se auto-endurece por fricción mecánica. Si un taladro magnético o fresa intenta perforar la cerradura, la placa incrementa su dureza localmente hasta romper la broca.",
    features: [
      "Blindaje integral en la totalidad del área de cerraduras",
      "Efecto de auto-endurecimiento ante fricción térmica",
      "Matriz compuesta anti-corte por sierra de sable",
    ],
  },
  {
    index: 3,
    title: "Mecanismo Multipunto con Cerrojos Cementados de 22mm",
    subtitle: "Pistones tridimensionales que clavan la hoja al marco de la pared",
    thickness: "22 mm macizo",
    hardness: "64 HRC",
    functionDesc:
      "Al accionar la cerradura, los pistones de acero templado penetran 35mm en cajetines blindados superiores, inferiores y laterales, convirtiendo la puerta en un monolito solidario a la estructura.",
    features: [
      "Pivotes fijos traseros anti-descolgamiento en el lateral de bisagras",
      "Dispositivo de rebloqueo automático ante ataque con soplete",
      "Bloqueo independiente contra empuje o retroceso forzado",
    ],
  },
  {
    index: 4,
    title: "Núcleo Ignífugo & Aislante de Alta Densidad",
    subtitle: "Barrera térmica de lana de roca basáltica para contención de calor y fuego",
    thickness: "50 mm (120 kg/m³)",
    hardness: "Clase A1 No Combustible",
    functionDesc:
      "Aislamiento térmico que garantiza que, aun expuesta la cara exterior a más de 1000°C en un incendio voraz (curva ISO 834), los mandos interiores se mantengan a temperatura segura.",
    features: [
      "Atenuación acústica certificada de 46 dB",
      "Juntas intumescentes perimetrales que sellan por dilatación",
      "Cero emisión de gases tóxicos en caso de fuego exterior",
    ],
  },
  {
    index: 5,
    title: "Bastidor Estructural & Anclaje de Hormigón H-30",
    subtitle: "El esqueleto soldado a la estructura maestra de la propiedad",
    thickness: "Perfiles conformados 3.5mm",
    hardness: "ASTM A36 Estructural",
    functionDesc:
      "El premarco no se atornilla a un tabique común: se vincula a vigas o dados de hormigón armado mediante garras de expansión química o soldadura continua. Ninguna fuerza mecánica puede arrancar el vano.",
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
    <section id="anatomia" className="relative py-28 bg-[#08090c]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Cabecera Limpia */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase text-amber-500 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>ARQUITECTURA DE BLINDAJE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-heading">
            ANATOMÍA POR CAPAS
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Un sándwich balístico multicapa de ingeniería pesada diseñado para disipar cualquier método de asalto contemporáneo.
          </p>
        </div>

        {/* Selector de Pestañas Horizontal Limpio */}
        <div className="flex flex-wrap gap-2 pb-8 border-b border-white/[0.08] mb-10">
          {LAYERS.map((layer) => (
            <button
              key={layer.index}
              onClick={() => handleSelectLayer(layer.index)}
              className={`px-4 py-2.5 rounded-lg text-xs font-mono-tech font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeLayerIndex === layer.index
                  ? "bg-amber-500 text-black shadow-md"
                  : "bg-[#12141a] text-slate-400 hover:text-white border border-white/[0.06]"
              }`}
            >
              0{layer.index}. {layer.title.split(" ")[0]} {layer.title.split(" ")[1]}
            </button>
          ))}
        </div>

        {/* Ficha de Detalle de la Capa */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#101217] border border-white/[0.08] shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <span className="text-xs font-mono-tech text-amber-500 uppercase tracking-widest font-bold">
              CAPA ESTRUCTURAL 0{currentLayer.index} DE 05
            </span>
            <div className="flex gap-6 text-xs font-mono-tech text-slate-400">
              <div>ESPESOR: <strong className="text-white">{currentLayer.thickness}</strong></div>
              <div>&bull;</div>
              <div>DUREZA: <strong className="text-white">{currentLayer.hardness}</strong></div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white font-heading">
              {currentLayer.title}
            </h3>
            <p className="mt-2 text-sm text-slate-400 font-mono-tech">
              {currentLayer.subtitle}
            </p>
          </div>

          <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-3xl">
            {currentLayer.functionDesc}
          </p>

          <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4">
            {currentLayer.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
