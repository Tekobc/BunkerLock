"use client";

import React, { useState, useEffect } from "react";
import { Shield, Volume2, VolumeX, Menu, X, ArrowUpRight } from "lucide-react";
import { isSoundEnabled, toggleSound, playTactileClick } from "@/lib/sound";

export default function Navbar() {
  const [soundOn, setSoundOn] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setSoundOn(isSoundEnabled());
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  const navLinks = [
    { name: "La Bóveda", href: "#camara" },
    { name: "Configurador", href: "#configurador" },
    { name: "Anatomía", href: "#anatomia" },
    { name: "Herrería", href: "#herreria" },
    { name: "Ensayos", href: "#ensayos" },
    { name: "Contacto", href: "#consola" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090c]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Minimalista de Alta Gama */}
          <a
            href="#"
            onClick={() => playTactileClick()}
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-md bg-[#161a22] border border-white/10 flex items-center justify-center shadow-md group-hover:border-amber-500/60 transition-colors">
              <Shield className="w-5 h-5 text-amber-500 transition-transform group-hover:scale-105" />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white uppercase font-heading">
                BUNKER<span className="text-amber-500 font-extrabold">LOCK</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono-tech">
                SEGURIDAD BALÍSTICA
              </span>
            </div>
          </a>

          {/* Navegación Desktop Limpia */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => playTactileClick()}
                className="text-xs font-medium tracking-wider uppercase text-slate-300 hover:text-white transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Controles de la derecha */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={handleSoundToggle}
              title={soundOn ? "Silenciar audio táctil" : "Activar audio táctil"}
              className={`p-2 rounded-md transition-colors ${
                soundOn
                  ? "text-amber-400 hover:text-amber-300"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <a
              href="#consola"
              onClick={() => playTactileClick()}
              className="tactile-amber px-4 py-2 rounded-md text-xs font-bold tracking-wider uppercase flex items-center gap-1.5"
            >
              <span>COTIZAR</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Botón Móvil */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handleSoundToggle}
              className="p-2 text-slate-400 hover:text-white"
            >
              {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                playTactileClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0d0f14]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                playTactileClick();
                setMobileMenuOpen(false);
              }}
              className="block text-sm font-medium tracking-wider uppercase text-slate-300 hover:text-amber-400"
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
              className="tactile-amber w-full py-2.5 rounded-md text-center text-xs font-bold tracking-wider uppercase block"
            >
              COTIZAR PROYECTO
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
