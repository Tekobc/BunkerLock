import { IronworkItem } from "@/types/bunker";

export const IRONWORK_CATALOG: IronworkItem[] = [
  {
    id: "porton-titans-v1",
    title: "Portón Acorazado Autoportante Titan",
    subtitle: "Acceso vehicular de alta resistencia con blindaje balístico oculto",
    category: "portones",
    steelGauge: "Estructura en tubo estructural ASTM A500 120x80x4.5mm con doble chapa 3.2mm",
    anchorSystem: "Pilares embebidos en dados de hormigón armado H-30 con anclaje químico Hilti",
    impactResistanceJoules: 185000,
    finish: "Pintura electrostática en polvo curada a 200°C con imprimación epoxi rica en zinc",
    description:
      "Diseñado para resistir impactos de vehículos pesados a velocidad (ensayo anti-embestida tipo Bollard K12). Motorización industrial italiana trifásica de ciclo continuo con apertura en 6 segundos y cerrojos electromecánicos de anclaje al suelo.",
    specs: [
      { label: "Tiempo de apertura", value: "6.2 seg (Motor Inverter 1.5 HP)" },
      { label: "Masa total", value: "680 kg por hoja" },
      { label: "Nivel de impacto", value: "Vehículo de 7.5 ton a 50 km/h" },
      { label: "Cerrojos de piso", value: "2 x 30mm acero templado cementado" },
    ],
  },
  {
    id: "reja-monolito-forja",
    title: "Rejas de Forja Estructural Maciza",
    subtitle: "Barrera perimetral de hierro macizo forjado al fuego sin puntos débiles de soldadura",
    category: "rejas",
    steelGauge: "Barras macizas cuadradas de 25x25mm de acero SAE 1045 forjadas a mano",
    anchorSystem: "Varillas roscadas de 20mm ancladas 180mm en mampostería de ladrillo macizo / viga",
    impactResistanceJoules: 45000,
    finish: "Patinado artesanal pavonado al grafito con ceras microcristalinas",
    description:
      "A diferencia de las rejas huecas comerciales que se cortan en segundos con cizalla, estas rejas están construidas con hierro macizo y cartelas anti-palanca. Su diseño entrelazado impide la inserción de gatos hidráulicos o amoladoras angulares.",
    specs: [
      { label: "Espesor de varilla", value: "25mm macizo integral" },
      { label: "Separación entre barras", value: "95mm (Imposible el paso del torso o cabeza)" },
      { label: "Anclaje ciego", value: "Tornillos de seguridad con cabeza cortante" },
      { label: "Resistencia a cizalla", value: "Superior a 30 toneladas de presión" },
    ],
  },
  {
    id: "cerramiento-balistico-perimeter",
    title: "Cerramiento Blindado Vidriado Balístico B6",
    subtitle: "Estructura arquitectónica con perfilería de acero inoxidable y cristal multicapa",
    category: "cerramientos",
    steelGauge: "Perfiles de acero balístico con rotura de puente térmico y refuerzo de aramida",
    anchorSystem: "Fijación embutida estructural con pletinas de expansión de 12mm",
    impactResistanceJoules: 95000,
    finish: "Acabado anodizado titanio mate y perfiles fresados de precisión",
    description:
      "Combina la máxima transparencia visual con protección contra calibres militares (fusil Fal, M16, AK-47). El cristal de 56mm multicapa incorpora láminas de policarbonato 'No-Spall' que evitan esquirlas hacia el interior de la propiedad.",
    specs: [
      { label: "Espesor del cristal", value: "56mm multilaminado con policarbonato" },
      { label: "Norma Balística", value: "CEN EN 1063 BR6 / UL 752 Level 8" },
      { label: "Aislamiento acústico", value: "48 dB de atenuación" },
      { label: "Resistencia térmica", value: "U-Value 1.1 W/m²K" },
    ],
  },
  {
    id: "puerta-panico-vault",
    title: "Cámara Anti-Pánico y Refugio BunkerLock",
    subtitle: "Módulo acorazado estanco para protección de vidas frente a intrusión violenta",
    category: "panico",
    steelGauge: "Caja de blindaje envolvente con planchas de acero Hardox y alma ignífuga",
    anchorSystem: "Encofrado perimetral con hormigón de alta densidad y pernos de expansión",
    impactResistanceJoules: 260000,
    finish: "Revestimiento interior acústico ignífugo y exterior de acero texturado",
    description:
      "Transforme un vestidor, suite principal o sótano en una zona segura inexpugnable. Cuenta con puerta de cierre hermético, sistema de ventilación forzada con filtros HEPA y carbón activado, comunicación de emergencia satelital y cerradura de rebloqueo manual interior.",
    specs: [
      { label: "Cierre hermético", value: "Juntas intumescentes y sello de neopreno perimetral" },
      { label: "Autonomía interior", value: "Hasta 72 horas con sistema de recirculación" },
      { label: "Cerrojos de bloqueo", value: "8 cerrojos unidireccionales de accionamiento manual" },
      { label: "Protección térmica", value: "Resistencia al fuego 120 minutos (EI 120)" },
    ],
  },
];
