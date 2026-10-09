"use client";

import React from "react";
import { Shield, ChevronRight } from "lucide-react";
import { playTactileClick } from "@/lib/sound";

export default function Footer() {
  return (
    <footer className="relative bg-[#06070a] border-t border-white/[0.08] text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Columna 1: Marca */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#161a22] border border-white/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-amber-500" />
              </div>
              <span className="text-xl font-bold uppercase tracking-tight text-white font-heading">
                BUNKER<span className="text-amber-500 font-extrabold">LOCK</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Ingeniería balística y herrería de alta precisión. Fabricación artesanal de puertas acorazadas y cámaras acorazadas según normas de resistencia balística internacionales.
            </p>

            <div className="pt-2 text-xs font-mono-tech text-slate-500">
              PLANTA INDUSTRIAL &bull; BUENOS AIRES, ARGENTINA
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-xs font-mono-tech font-bold uppercase text-white mb-4 tracking-wider">
              SECCIONES
            </h4>
            <ul className="space-y-2.5 text-xs font-mono-tech">
              <li>
                <a
                  href="#camara"
                  onClick={() => playTactileClick()}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" /> La Bóveda
                </a>
              </li>
              <li>
                <a
                  href="#configurador"
                  onClick={() => playTactileClick()}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Configurador
                </a>
              </li>
              <li>
                <a
                  href="#anatomia"
                  onClick={() => playTactileClick()}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Anatomía por Capas
                </a>
              </li>
              <li>
                <a
                  href="#herreria"
                  onClick={() => playTactileClick()}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Herrería Pesada
                </a>
              </li>
              <li>
                <a
                  href="#ensayos"
                  onClick={() => playTactileClick()}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Ensayos Balísticos
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Certificaciones */}
          <div>
            <h4 className="text-xs font-mono-tech font-bold uppercase text-white mb-4 tracking-wider">
              NORMAS
            </h4>
            <ul className="space-y-2 text-xs font-mono-tech text-slate-400">
              <li>UNE-EN 1627:2021 RC3–RC6</li>
              <li>Balística RENAR RB3</li>
              <li>CEN EN 1522 FB6</li>
              <li>Resistencia Térmica EI 120</li>
            </ul>
          </div>

        </div>

        {/* Separador inferior */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs font-mono-tech text-slate-500 gap-4">
          <div>&copy; 2026 BUNKERLOCK SECURITY SYSTEMS. TODOS LOS DERECHOS RESERVADOS.</div>
          <div className="flex gap-4">
            <a
              href="https://wa.me/5491124073143"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              WHATSAPP: +54 9 11 2407-3143
            </a>
            <span>&bull;</span>
            <a href="mailto:ingenieria@bunkerlock.com" className="hover:text-slate-300 transition-colors">
              ingenieria@bunkerlock.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
