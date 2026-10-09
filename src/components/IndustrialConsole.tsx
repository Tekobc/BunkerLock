"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Send, CheckCircle2, MessageSquare, Phone, Mail, User, MapPin } from "lucide-react";
import { playTactileClick, playBiometricScan } from "@/lib/sound";

interface IndustrialConsoleProps {
  prefilledSpec?: string;
}

export default function IndustrialConsole({ prefilledSpec }: IndustrialConsoleProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [projectType, setProjectType] = useState("Puerta Acorazada Residencial");
  const [specsNotes, setSpecsNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledSpec) {
      setSpecsNotes((prev) => (prev ? `${prev}\n\n• ${prefilledSpec}` : prefilledSpec));
    }
  }, [prefilledSpec]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playTactileClick();
    playBiometricScan(true);
    setIsSubmitted(true);
  };

  const handleWhatsAppDispatch = () => {
    playTactileClick();
    const message = `*SOLICITUD DE COTIZACIÓN - BUNKERLOCK*\n\n` +
      `• *Cliente:* ${fullName || "Particular"}\n` +
      `• *Teléfono:* ${phone || "No especificado"}\n` +
      `• *Ubicación:* ${location || "No especificada"}\n` +
      `• *Tipo de Obra:* ${projectType}\n` +
      `• *Detalle:*\n${specsNotes || "Deseo asesoramiento técnico"}`;

    const url = `https://wa.me/5491100000000?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="consola" className="relative py-28 bg-[#0a0b0f] border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Cabecera Limpia */}
        <div className="max-w-xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase text-amber-500 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>SOLICITUD TÉCNICA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-heading">
            COTIZAR PROYECTO
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Envíe los requerimientos de su vano o consulte directamente a nuestro departamento de ingeniería balística.
          </p>
        </div>

        {/* Formulario Limpio */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#111317] border border-white/[0.08] shadow-2xl">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-bold uppercase text-white font-heading">
                SOLICITUD TRANSMITIDA
              </h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto">
                Nos pondremos en contacto dentro de las próximas 2 horas hábiles para coordinar planos y especificaciones.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-5 py-2.5 rounded-md text-xs font-mono-tech text-slate-300 hover:text-white border border-white/10 cursor-pointer"
              >
                ENVIAR OTRA CONSULTA
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-2">
                    NOMBRE O ESTUDIO *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej. Estudio Gómez / Particular"
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-sm text-white focus:outline-none focus:border-amber-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-2">
                    TELÉFONO O WHATSAPP *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+54 9 11 ..."
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-sm text-white focus:outline-none focus:border-amber-500 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-2">
                    EMAIL DE CONTACTO *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contacto@correo.com"
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-sm text-white focus:outline-none focus:border-amber-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-2">
                    ZONA O LOCALIDAD DE LA OBRA *
                  </label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ej. CABA, Nordelta, Pilar, Interior..."
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-sm text-white focus:outline-none focus:border-amber-500 font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-2">
                  TIPO DE ESTRUCTURA
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-sm text-white focus:outline-none focus:border-amber-500 font-sans"
                >
                  <option value="Puerta Acorazada Residencial">Puerta Acorazada Residencial</option>
                  <option value="Puerta Balística RB3 / B6">Puerta Balística RB3 / B6</option>
                  <option value="Portón Vehicular Acorazado">Portón Vehicular Acorazado</option>
                  <option value="Rejas de Forja Estructural">Rejas de Forja Estructural</option>
                  <option value="Cámara de Pánico">Cámara de Pánico / Bóveda</option>
                  <option value="Cerramiento Balístico">Cerramiento Balístico</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-2">
                  DETALLES O ESPECIFICACIONES ADICIONALES
                </label>
                <textarea
                  rows={4}
                  value={specsNotes}
                  onChange={(e) => setSpecsNotes(e.target.value)}
                  placeholder="Detalles sobre medidas estimadas, paredes o requerimientos de seguridad..."
                  className="w-full p-4 rounded-lg bg-black/40 border border-white/10 text-sm text-white focus:outline-none focus:border-amber-500 font-sans"
                />
              </div>

              {/* Botones de Envío */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="tactile-amber py-3.5 px-6 rounded-md text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer flex-1"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMITIR SOLICITUD</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDispatch}
                  className="py-3.5 px-6 rounded-md text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer border border-white/10 text-slate-200 hover:text-white bg-white/[0.03] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WHATSAPP INMEDIATO</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
