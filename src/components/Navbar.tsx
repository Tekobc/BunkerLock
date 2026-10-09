"use client";

import React, { useState, useEffect } from "react";
import { Shield, Volume2, VolumeX, Phone, Lock, Menu, X, ArrowUpRight } from "lucide-react";
import { isSoundEnabled, toggleSound, playTactileClick } from "@/lib/sound";

export default function Navbar() {
  const [soundOn, setSoundOn] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setSoundOn(isSoundEnabled());
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  const navLinks = [
    { name: "La Cámara", href: "#camara" },
    { name: "Configurador", href: "#configurador" },
    { name: "Anatomía", href: "#anatomia" },
    { name: "Herrería", href: "#herreria" },
    { name: "Certificaciones", href: "#ensayos" },
    { name: "Consola de Contacto", href: "#consola" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c0e12]/95 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-[#0c0e12]/80 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      {/* Barra superior de telemetría y estado industrial */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-[#12151a] border-b border-black/80 text-[11px] font-mono-tech text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
            <span className="text-slate-300 font-semibold tracking-wider">ESTADO: ENCLAVAMIENTO ACTIVO</span>
          </span>
          <span className="text-slate-600">|</span>
          <span>NORMATIVA: EN 1627 CLASE RC3–RC6 &amp; RENAR RB3</span>
          <span className="text-slate-600">|</span>
          <span className="text-amber-500 font-medium">FABRICACIÓN NACIONAL DE PRECISIÓN</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-slate-400">INGENIERÍA BALÍSTICA &amp; HERRERÍA PESADA</span>
          <span className="text-slate-600">|</span>
          <a
            href="tel:+5491100000000"
            className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-300"
          >
            <Phone className="w-3 h-3 text-amber-500" />
            <span>LÍNEA DIRECTA INGENIERÍA: +54 (11) 5482-BUNKER</span>
          </a>
        </div>
      </div>

      {/* Contenedor principal del Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logotipo Skeuomórfico */}
          <a
            href="#"
            onClick={() => playTactileClick()}
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="relative w-12 h-12 rounded bg-gradient-to-br from-slate-700 via-slate-800 to-black border border-slate-600 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_12px_rgba(0,0,0,0.8)] group-hover:border-amber-500 transition-colors">
              <Shield className="w-7 h-7 text-amber-500 transition-transform group-hover:scale-105" />
              <Lock className="w-3.5 h-3.5 text-white absolute bottom-2 right-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" />
              <span className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-slate-400 border border-black shadow-sm" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-slate-400 border border-black shadow-sm" />
              <span className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-slate-400 border border-black shadow-sm" />
              <span className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-slate-400 border border-black shadow-sm" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-bold tracking-tight text-white uppercase font-heading drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  BUNKER<span className="text-amber-500">LOCK</span>
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 font-mono-tech font-bold uppercase tracking-widest">
                  HEAVY ARMOR
                </span>
              </div>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono-tech">
                PUERTAS BLINDADAS &amp; HERRERÍA DE ALTA SEGURIDAD
              </span>
            </div>
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#14171d]/90 p-1.5 rounded-lg border border-slate-700/60 shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => playTactileClick()}
                className="px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase text-slate-300 hover:text-white hover:bg-slate-800/80 rounded transition-all duration-150 border border-transparent hover:border-slate-600 hover:shadow-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Controles de la derecha */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Interruptor de sonido táctil */}
            <button
              onClick={handleSoundToggle}
              title={soundOn ? "Silenciar audio mecánico" : "Activar audio mecánico táctil"}
              className={`p-2.5 rounded border flex items-center justify-center transition-all ${
                soundOn
                  ? "bg-slate-800/90 text-amber-400 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                  : "bg-slate-900 text-slate-500 border-slate-700 hover:text-slate-300"
              }`}
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* CTA Cotizador Rápido */}
            <a
              href="#consola"
              onClick={() => playTactileClick()}
              className="tactile-amber px-4 py-2.5 rounded text-xs font-bold tracking-wider uppercase flex items-center gap-2 group"
            >
              <span>COTIZAR PROYECTO</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Botón Móvil */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handleSoundToggle}
              className="p-2 rounded bg-slate-800 text-amber-400 border border-slate-700"
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                playTactileClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded bg-slate-800 text-slate-300 border border-slate-700"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#12151b] border-b border-slate-700 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                playTactileClick();
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2.5 rounded text-sm font-semibold tracking-wider uppercase text-slate-200 hover:bg-slate-800 hover:text-amber-400 border border-transparent hover:border-slate-700"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#consola"
              onClick={() => {
                playTactileClick();
                setMobileMenuOpen(false);
              }}
              className="tactile-amber w-full py-3 rounded text-center text-xs font-bold tracking-wider uppercase block"
            >
              SOLICITAR COTIZACIÓN INMEDIATA
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
