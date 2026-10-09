"use client";

import React from "react";
import { Shield, Lock, Award, Phone, Mail, MapPin, ChevronRight, CheckCircle2 } from "lucide-react";
import { playTactileClick } from "@/lib/sound";

export default function Footer() {
  return (
    <footer className="relative bg-[#07090c] border-t-2 border-slate-800 text-slate-400 font-sans overflow-hidden">
      
      {/* Tiras de peligro industrial discretas en la parte superior del footer */}
      <div className="h-1.5 w-full hazard-stripes opacity-40" />

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Columna 1 & 2: Identidad y Misión */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-slate-700 to-black border border-slate-600 flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <span className="text-xl font-extrabold uppercase tracking-tight text-white font-heading">
                  BUNKER<span className="text-amber-500">LOCK</span>
                </span>
                <div className="text-[9px] font-mono-tech text-amber-500/80 uppercase tracking-widest">
                  HEAVY ARMOR &bull; INDUSTRIAL FORGE
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-6">
              Líderes en ingeniería balística, fabricación de puertas acorazadas y herrería de alta seguridad. Cada pieza es diseñada bajo tolerancias micrométricas para garantizar la invulnerabilidad total de su propiedad y seres queridos.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono-tech">
              <span className="px-2.5 py-1 rounded bg-[#13171e] border border-slate-800 text-slate-300">
                FABRICACIÓN CERTIFICADA
              </span>
              <span className="px-2.5 py-1 rounded bg-[#13171e] border border-slate-800 text-slate-300">
                ACERO HARDOX 500
              </span>
              <span className="px-2.5 py-1 rounded bg-[#13171e] border border-slate-800 text-amber-400">
                GARANTÍA DE POR VIDA
              </span>
            </div>
          </div>

          {/* Columna 3: Navegación Rápida */}
          <div>
            <h4 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-amber-500" /> SISTEMAS &amp; BÓVEDAS
            </h4>
            <ul className="space-y-2 text-xs font-mono-tech">
              <li>
                <a
                  href="#camara"
                  onClick={() => playTactileClick()}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" /> La Cámara Principal
                </a>
              </li>
              <li>
                <a
                  href="#configurador"
                  onClick={() => playTactileClick()}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Vault Builder (Configurador)
                </a>
              </li>
              <li>
                <a
                  href="#anatomia"
                  onClick={() => playTactileClick()}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Capas de Blindaje Sándwich
                </a>
              </li>
              <li>
                <a
                  href="#herreria"
                  onClick={() => playTactileClick()}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Portones y Herrería Maciza
                </a>
              </li>
              <li>
                <a
                  href="#ensayos"
                  onClick={() => playTactileClick()}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Ensayos y Certificaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Normativas y Homologaciones */}
          <div>
            <h4 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-amber-500" /> NORMAS Y CALIDAD
            </h4>
            <ul className="space-y-2 text-[11px] font-mono-tech text-slate-400">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>UNE-EN 1627:2021 Grado 3 al 6</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Balística RENAR RB3 / CEN FB6</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Resistencia Térmica EI 120</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Gestión de Calidad ISO 9001:2015</span>
              </li>
            </ul>
          </div>

          {/* Columna 5: Planta Industrial y Contacto */}
          <div>
            <h4 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-500" /> PLANTA INDUSTRIAL
            </h4>
            <div className="space-y-2.5 text-xs font-mono-tech text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Polo Industrial Tecnológico, Buenos Aires, Argentina</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+5491100000000" className="hover:text-amber-400 transition-colors">
                  +54 (11) 5482-BUNKER
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:ingenieria@bunkerlock.com" className="hover:text-amber-400 transition-colors">
                  ingenieria@bunkerlock.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Separador inferior con remaches y copyright */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-tech text-slate-500 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
            <span>&copy; 2026 BUNKERLOCK SECURITY SYSTEMS. TODOS LOS DERECHOS RESERVADOS.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-500 text-[11px]">
            <span>DESPLIEGUE: VERCEL EDGE NETWORK</span>
            <span>&bull;</span>
            <span>POLÍTICA DE PRIVACIDAD &amp; SECRETO TÉCNICO</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
