"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Send, CheckCircle2, Shield, Phone, MapPin, Mail, User, AlertCircle, MessageSquare } from "lucide-react";
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
  const [urgency, setUrgency] = useState("En Construcción");
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
      `• *Ubicación:* ${location || "CABA / GBA / Interior"}\n` +
      `• *Tipo de Obra:* ${projectType}\n` +
      `• *Urgencia:* ${urgency}\n` +
      `• *Detalle / Especificaciones:*\n${specsNotes || "Deseo asesoramiento técnico general"}`;

    const url = `https://wa.me/5491100000000?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="consola" className="relative py-24 bg-gradient-to-b from-[#0a0c10] via-[#12161d] to-[#0a0c10] border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la Consola */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono-tech text-xs uppercase mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>TERMINAL DE COTIZACIÓN DIRECTA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-heading">
            CONSOLA DE INGENIERÍA
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Envíe los requerimientos de su proyecto para recibir un presupuesto técnico desglosado con plano de vano y tiempo estimado de fraguado y entrega.
          </p>
        </div>

        {/* =========================================================
            PANEL DE CONTROL INDUSTRIAL SKEUOMÓRFICO
           ========================================================= */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#1c222b] via-[#141820] to-[#0c0e12] border-2 border-slate-700 shadow-[0_30px_90px_rgba(0,0,0,0.95),inset_0_2px_4px_rgba(255,255,255,0.1)] p-6 sm:p-10">
          
          {/* Remaches de esquina de la consola */}
          <div className="absolute top-3 left-4 flex gap-2">
            <span className="rivet-screw" />
            <span className="rivet-screw" />
          </div>
          <div className="absolute top-3 right-4 flex gap-2">
            <span className="rivet-screw" />
            <span className="rivet-screw" />
          </div>

          {/* Barra superior de status de la terminal */}
          <div className="flex flex-wrap items-center justify-between pb-4 mb-8 border-b border-slate-700/80 font-mono-tech text-xs gap-3">
            <div className="flex items-center gap-2">
              <span className="led-indicator led-green" />
              <span className="text-slate-200 font-bold tracking-wider">
                CANAL SEGURO: SERVIDOR DE PLANIFICACIÓN ACTIVO
              </span>
            </div>
            <div className="text-slate-400">
              RESPUESTA TÉCNICA: <span className="text-amber-400 font-bold">&lt; 2 HORAS HÁBILES</span>
            </div>
          </div>

          {isSubmitted ? (
            /* Mensaje de Confirmación Industrial */
            <div className="p-8 rounded-xl bg-black/60 border border-emerald-500/50 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold uppercase text-white font-heading">
                EXPEDIENTE DE PROYECTO TRANSMITIDO
              </h3>
              <p className="text-sm text-slate-300 max-w-lg mx-auto font-mono-tech">
                Los datos técnicos han sido ingresados al sistema de planificación de BunkerLock. Un ingeniero especialista se pondrá en contacto para coordinar la toma de medidas en obra.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="tactile-button px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider text-slate-300 cursor-pointer"
                >
                  INGRESAR NUEVA SOLICITUD
                </button>
              </div>
            </div>
          ) : (
            /* Formulario Estilo Terminal Industrial */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nombre */}
                <div>
                  <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-2">
                    TITULAR / ESTUDIO DE ARQUITECTURA *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ej. Arq. Mariano Gómez / Particular"
                      className="w-full pl-10 pr-4 py-2.5 rounded bg-black/50 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:border-amber-500 font-mono-tech shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]"
                    />
                  </div>
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-2">
                    TELÉFONO O WHATSAPP DIRECTO *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+54 9 11 ..."
                      className="w-full pl-10 pr-4 py-2.5 rounded bg-black/50 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:border-amber-500 font-mono-tech shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-2">
                    CORREO ELECTRÓNICO *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contacto@estudio.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded bg-black/50 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:border-amber-500 font-mono-tech shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]"
                    />
                  </div>
                </div>

                {/* Ubicación */}
                <div>
                  <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-2">
                    LOCALIDAD / ZONA DE LA OBRA *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Ej. Nordelta, Pilar, Recoleta, Interior..."
                      className="w-full pl-10 pr-4 py-2.5 rounded bg-black/50 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:border-amber-500 font-mono-tech shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Tipo de Proyecto */}
                <div>
                  <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-2">
                    TIPO DE ELEMENTO DE SEGURIDAD
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded bg-black/50 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:border-amber-500 font-mono-tech shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]"
                  >
                    <option value="Puerta Acorazada Residencial">Puerta Acorazada Residencial</option>
                    <option value="Puerta Balística Nivel RB3 / B6">Puerta Balística Nivel RB3 / B6</option>
                    <option value="Cámara de Pánico / Bóveda">Cámara de Pánico / Bóveda Privada</option>
                    <option value="Portón Vehicular Acorazado">Portón Vehicular Acorazado</option>
                    <option value="Rejas de Forja Estructural">Rejas de Forja Estructural</option>
                    <option value="Cerramiento Vidriado Balístico">Cerramiento Vidriado Balístico</option>
                  </select>
                </div>

                {/* Urgencia */}
                <div>
                  <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-2">
                    ESTADO DE EJECUCIÓN DEL PROYECTO
                  </label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full px-4 py-2.5 rounded bg-black/50 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:border-amber-500 font-mono-tech shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]"
                  >
                    <option value="En Construcción (Avanzado)">En Construcción (Vanos definidos)</option>
                    <option value="Planificación de Proyecto">Planificación en Proyecto de Arquitectura</option>
                    <option value="Reemplazo Inmediato">Reemplazo Inmediato por Requerimiento Urgente</option>
                  </select>
                </div>
              </div>

              {/* Especificaciones / Notas Técnicas */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono-tech uppercase text-slate-400">
                    ESPECIFICACIONES TÉCNICAS O CONFIGURACIÓN PRECARGADA
                  </label>
                  {prefilledSpec && (
                    <span className="text-[10px] font-mono-tech text-amber-400 font-bold">
                      [DATOS DESDE CONFIGURADOR CARGADOS]
                    </span>
                  )}
                </div>
                <textarea
                  rows={4}
                  value={specsNotes}
                  onChange={(e) => setSpecsNotes(e.target.value)}
                  placeholder="Detalle medidas estimadas, nivel de blindaje deseado, características de la pared o cualquier requisito particular..."
                  className="w-full p-4 rounded bg-black/50 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:border-amber-500 font-mono-tech shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]"
                />
              </div>

              {/* Botonera de Despacho */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-xs font-mono-tech text-slate-500 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-slate-400" />
                  <span>Tratamiento confidencial bajo estricto secreto de seguridad.</span>
                </div>

                <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleWhatsAppDispatch}
                    className="tactile-button px-5 py-3 rounded text-xs font-bold tracking-wider uppercase text-emerald-400 border-emerald-500/40 hover:text-emerald-300 flex items-center justify-center gap-2 flex-1 sm:flex-initial cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>COTIZAR POR WHATSAPP</span>
                  </button>

                  <button
                    type="submit"
                    className="tactile-amber px-6 py-3 rounded text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 flex-1 sm:flex-initial cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>TRANSMITIR A INGENIERÍA</span>
                  </button>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
