import { SecurityTestType } from "@/types/bunker";

export const SECURITY_TESTS: SecurityTestType[] = [
  {
    id: "ballistic",
    name: "Ensayo Balístico de Alto Calibre",
    standard: "Norma EN 1522 / NIJ Standard 0108.01",
    threatLevel: "Fusil Militar 7.62x51mm NATO & .44 Magnum",
    testTimeSeconds: 15,
    toolOrCaliber: "Proyectil Full Metal Jacket (FMJ) con núcleo de acero perforante",
    resultStatus: "INEXPUGNABLE",
    temperatureOrVelocity: "830 m/s (Velocidad de boca)",
    summary:
      "Ensayo de 6 impactos concéntricos a 10 metros de distancia. Cero penetración del proyectil y cero desprendimiento de esquirlas internas (efecto No-Spall) gracias al blindaje multicapa con disipador de aramida.",
  },
  {
    id: "cutting",
    name: "Ataque Térmico y Amoladora Radial 230mm",
    standard: "Norma UNE-EN 1627:2021 Clase RC5 / RC6",
    threatLevel: "Herramientas de demolición eléctrica y oxicorte continuo",
    testTimeSeconds: 45,
    toolOrCaliber: "Amoladora angular 2400W + Soplete de corte oxhídrico a 2200°C",
    resultStatus: "CERTIFICADO",
    temperatureOrVelocity: "2,200 °C de temperatura de llama",
    summary:
      "Placas de carburo de tungsteno y manganeso desintegran los discos abrasivos diamantados. Las trampas térmicas activan el re-bloqueo pirotécnico permanente de los pestillos impidiendo cualquier apertura.",
  },
  {
    id: "hydraulic",
    name: "Presión Hidráulica y Apalancamiento Extremo",
    standard: "CEN/TR 16863 / Test de Deformación Estructural",
    threatLevel: "Gato hidráulico de 20 toneladas y palanca de 1500mm",
    testTimeSeconds: 30,
    toolOrCaliber: "Ariete neumático industrial y gato expansor de separación",
    resultStatus: "RESISTENCIA TOTAL",
    temperatureOrVelocity: "196 kN de empuje vertical y horizontal",
    summary:
      "Los pivotes macizos anti-palanca de 22mm embutidos en el marco perimetral soldado impiden el desencaje de la hoja incluso si se cortasen completamente las bisagras exteriores.",
  },
  {
    id: "fire",
    name: "Exposición al Fuego Extremo (EI 120)",
    standard: "Norma UNE-EN 1634-1 / Curva de Fuego ISO 834",
    threatLevel: "Incendio estructural voraz generalizado",
    testTimeSeconds: 60,
    toolOrCaliber: "Horno pirolítico continuo durante 120 minutos",
    resultStatus: "CERTIFICADO",
    temperatureOrVelocity: "1,050 °C sostenidos",
    summary:
      "Juntas intumescentes perimetrales se expanden un 400% sellando por completo el paso de humo tóxico, gases y llamas. La temperatura interior de la manija no superó los 34°C tras 2 horas de combustión.",
  },
];
