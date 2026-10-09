export type ArmorLevel = 1 | 2 | 3 | 4 | 5;

export interface ArmorTierInfo {
  level: ArmorLevel;
  code: string;
  name: string;
  category: string;
  thicknessMm: number;
  weightKg: number;
  boltsCount: number;
  ballisticRating: string;
  en1627Class: string;
  attackResistanceMinutes: number;
  basePriceUsd: number;
  description: string;
  coreMaterial: string;
  drillProofPlate: string;
  suitableFor: string;
}

export type LockType = "biometric" | "keypad" | "double_bitted";

export interface LockMechanismInfo {
  id: LockType;
  name: string;
  type: string;
  technology: string;
  boltsAction: string;
  powerSource: string;
  priceDeltaUsd: number;
  description: string;
}

export type FinishType = "brushed_steel" | "titanium_dark" | "armored_oak" | "forged_graphite";

export interface FinishInfo {
  id: FinishType;
  name: string;
  material: string;
  visualClass: string;
  corrosionWarrantyYears: number;
  priceDeltaUsd: number;
  description: string;
}

export interface VaultConfiguration {
  armorLevel: ArmorLevel;
  lockType: LockType;
  finish: FinishType;
  customWidthCm: number;
  customHeightCm: number;
  thermalInsulation: boolean;
  peepHoleDigital: boolean;
  reinforcedSubframe: boolean;
}

export interface IronworkItem {
  id: string;
  title: string;
  subtitle: string;
  category: "portones" | "rejas" | "cerramientos" | "panico";
  steelGauge: string;
  anchorSystem: string;
  impactResistanceJoules: number;
  finish: string;
  description: string;
  specs: { label: string; value: string }[];
}

export interface SecurityTestType {
  id: "ballistic" | "cutting" | "fire" | "hydraulic";
  name: string;
  standard: string;
  threatLevel: string;
  testTimeSeconds: number;
  toolOrCaliber: string;
  resultStatus: "INEXPUGNABLE" | "CERTIFICADO" | "RESISTENCIA TOTAL";
  temperatureOrVelocity: string;
  summary: string;
}
