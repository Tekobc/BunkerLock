import { ArmorTierInfo, LockMechanismInfo, FinishInfo } from "@/types/bunker";

export const ARMOR_TIERS: ArmorTierInfo[] = [
  {
    level: 1,
    code: "BL-LVL1-URBAN",
    name: "Centinela Residencial",
    category: "Acorazada Clase Residencial",
    thicknessMm: 65,
    weightKg: 135,
    boltsCount: 8,
    ballisticRating: "Anti-Efracción Mecánica",
    en1627Class: "Grado 3 (RC3)",
    attackResistanceMinutes: 15,
    basePriceUsd: 1450,
    description:
      "Doble chapa de acero electrogalvanizado de 2.0mm con nervaduras longitudinales en 'U'. Protección infalible contra palancas pesadas, cortafríos y ganzuado profesional.",
    coreMaterial: "Lana de roca ignífuga 80kg/m³ + refuerzos de acero",
    drillProofPlate: "Chapa templada 3mm en zona de cerradura",
    suitableFor: "Departamentos de alta gama y accesos residenciales urbanos",
  },
  {
    level: 2,
    code: "BL-LVL2-FORTRESS",
    name: "Fortaleza Reforzada",
    category: "Acorazada de Alta Resistencia",
    thicknessMm: 78,
    weightKg: 185,
    boltsCount: 12,
    ballisticRating: "Balística Ligera Cal. 22 / 38 Special",
    en1627Class: "Grado 4 (RC4)",
    attackResistanceMinutes: 30,
    basePriceUsd: 2150,
    description:
      "Chapa de acero estructural de 2.5mm combinada con placa de manganeso templado anti-taladro. Cerrojos cilíndricos de 20mm con sistema antidesgarro del marco.",
    coreMaterial: "Panel ignífugo compuesto + fibra cerámica atérmica",
    drillProofPlate: "Acero al manganeso anti-perforación de 4.5mm",
    suitableFor: "Casas particulares, countries y oficinas ejecutivas de valor",
  },
  {
    level: 3,
    code: "BL-LVL3-BALISTIC",
    name: "Titanium Balística RB3",
    category: "Blindaje Balístico Certificado",
    thicknessMm: 92,
    weightKg: 245,
    boltsCount: 16,
    ballisticRating: "RB3 / NIJ IIIA (9mm Parabellum & .44 Magnum)",
    en1627Class: "Grado 5 (RC5)",
    attackResistanceMinutes: 50,
    basePriceUsd: 3200,
    description:
      "Blindaje balístico certificado bajo norma RENAR/ANMaC RB3 y norma europea EN 1522. Capas alternadas de acero balístico y polímero de aramida para absorción de energía cinética.",
    coreMaterial: "Sándwich balístico de aramida + núcleo corta-fuego 90 min",
    drillProofPlate: "Placa completa de acero balístico 500 HBW",
    suitableFor: "Residencias con necesidad de máxima disuasión y embajadas",
  },
  {
    level: 4,
    code: "BL-LVL4-APEX",
    name: "Bunker Apex B6",
    category: "Blindaje Pesado Fusil de Asalto",
    thicknessMm: 110,
    weightKg: 330,
    boltsCount: 20,
    ballisticRating: "CEN FB6 / NIJ III (Fusil 7.62x51mm NATO y 5.56 NATO)",
    en1627Class: "Grado 6 (RC6)",
    attackResistanceMinutes: 90,
    basePriceUsd: 4800,
    description:
      "Estructura acorazada mono-bloque con chapa de acero balístico de alta dureza (Hardox 500) y blindaje composite cerámico. Cerrojos tridimensionales de 25mm con bloqueo térmico anti-soplete.",
    coreMaterial: "Compuesto cerámico-balístico + aislamiento RF/EMP",
    drillProofPlate: "Escudo compuesto de carburo de tungsteno y titanio",
    suitableFor: "Habitaciones del pánico, salas de armas y bóvedas comerciales",
  },
  {
    level: 5,
    code: "BL-LVL5-MILITARY",
    name: "Vault Imperial Grado Militar",
    category: "Cámara Acorazada Impenetrable",
    thicknessMm: 140,
    weightKg: 460,
    boltsCount: 28,
    ballisticRating: "CEN FB7 / Perforante Cal. .50 BMG & Anti-Explosivos",
    en1627Class: "Grado Máximo Bóveda Bancaria",
    attackResistanceMinutes: 180,
    basePriceUsd: 7400,
    description:
      "Nivel militar supremo sin concesiones. Chasis tubular de viga estructural reforzado con perfiles IPN, blindaje activo con relocking automático en caso de intento de perforación mecánica o térmica.",
    coreMaterial: "Matriz ultra-densa anti-corte por lanza térmica y oxicorte",
    drillProofPlate: "Blindaje integral multicapa de 18mm con insertos diamantados",
    suitableFor: "Búnkers subterráneos, refugios de alta seguridad y cámaras del tesoro",
  },
];

export const LOCK_MECHANISMS: LockMechanismInfo[] = [
  {
    id: "biometric",
    name: "Biométrica Vascular 3D & Motor Suizo",
    type: "Electromecánica de Alta Precisión",
    technology: "Lector subdérmico vascular infrarrojo (infalsificable) + cilindro mecánico de emergencia",
    boltsAction: "Apertura motorizada silenciosa en 0.4s con repliegue instantáneo",
    powerSource: "Batería de litio grado militar con autonomía de 18 meses + bypass externo USB-C",
    priceDeltaUsd: 650,
    description:
      "Acceso instantáneo con el mapa venoso del dedo. Rechaza huellas falsas de silicona o moldes. Registro de auditoría cifrado con 256 bits.",
  },
  {
    id: "keypad",
    name: "Teclado Criptográfico Táctico",
    type: "Digital Industrial Blindado",
    technology: "Dispersión aleatoria de dígitos en pantalla OLED de zafiro anti-rastreo de calor térmico",
    boltsAction: "Servomotor electromecánico de alta presión con bloqueo secundario",
    powerSource: "Alimentación redundante cableada con respaldo de acumulador sellado",
    priceDeltaUsd: 450,
    description:
      "Evita la lectura de códigos por cámaras infrarrojas gracias a su secuencia de dígitos aleatoria. Teclas fresadas en titanio grado 5.",
  },
  {
    id: "double_bitted",
    name: "Borjas Doble Paletón de Relojería",
    type: "Mecánica Pura de Acero Cementado",
    technology: "12 gargantas asimétricas de precisión con llaves maestras incopiables de protocolo exclusivo",
    boltsAction: "Accionamiento manual mediante engranajes multiplicadores de par",
    powerSource: "100% Mecánico — Cero electrónica, inmune a pulsos electromagnéticos (EMP) y cortes de red",
    priceDeltaUsd: 300,
    description:
      "La pureza de la alta mecánica europea. Sin componentes electrónicos, imbatible ante sabotajes cibernéticos o inhibidores de señal.",
  },
];

export const FINISH_OPTIONS: FinishInfo[] = [
  {
    id: "brushed_steel",
    name: "Acero Cepillado Balístico",
    material: "Acero Inoxidable AISI 316L con grano direccional 240",
    visualClass: "Industrial Minimalista de Alta Gama",
    corrosionWarrantyYears: 25,
    priceDeltaUsd: 380,
    description:
      "Acabado satinado uniforme con reflejos especulares plateados. Tratamiento cerámico anti-huellas y resistencia a ambientes salinos extremos.",
  },
  {
    id: "titanium_dark",
    name: "Titanio Carbón Oscurecido",
    material: "Aleación de Titanio con recubrimiento PVD de carbono diamante (DLC)",
    visualClass: "Táctico Stealth / Lujo Oscuro",
    corrosionWarrantyYears: 30,
    priceDeltaUsd: 520,
    description:
      "Aspecto negro grafito satinado con textura sedosa. Absorbe la luz de forma espectacular, emulando la estética de la industria aeroespacial militar.",
  },
  {
    id: "armored_oak",
    name: "Roble Macizo Noble Acorazado",
    material: "Madera de roble europeo curado de 22mm integrado al chasis",
    visualClass: "Elegancia Arquitectónica Clásica y Cálida",
    corrosionWarrantyYears: 20,
    priceDeltaUsd: 420,
    description:
      "Mimetización residencial perfecta. Por fuera transmite la nobleza y calidez del roble macizo con barniz de poliuretano mate; por dentro es un búnker de acero impenetrable.",
  },
  {
    id: "forged_graphite",
    name: "Hierro Forjado Tradicional & Remaches",
    material: "Hierro forjado al fuego de fragua con remaches cónicos vistos",
    visualClass: "Monumental, Pesado y Neogótico Industrial",
    corrosionWarrantyYears: 25,
    priceDeltaUsd: 460,
    description:
      "Tratamiento al fuego con textura rugosa mate y tornillería perimetral de cabeza cónica fresada. Cada pieza es forjada a mano por maestros herreros.",
  },
];
