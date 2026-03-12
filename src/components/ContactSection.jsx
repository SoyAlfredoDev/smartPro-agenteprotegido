"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Phone,
  Mail,
  Building2,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  User,
  BriefcaseBusiness,
  AlertTriangle,
  Clock3,
  FileText,
} from "lucide-react";

const isapres = [
  "Colmena",
  "Banmédica",
  "Consalud",
  "Cruz Blanca",
  "Nueva Masvida",
  "Vida Tres",
  "Esencial",
  "Otra",
];

const cargos = [
  "Ejecutivo comercial",
  "Supervisor comercial",
  "Jefe de ventas",
  "Ejecutivo senior",
  "Otro",
];

const situaciones = [
  "Recibí una denuncia ante la Superintendencia",
  "Me notificaron de un proceso administrativo",
  "Estoy siendo investigado",
  "Quiero prevenir una denuncia",
  "Solo quiero orientación legal",
];

const urgencias = [
  "Urgente (ya fui notificado)",
  "Dentro de esta semana",
  "Solo quiero información",
];

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#f7f7f9] py-16 sm:py-20 lg:py-24"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#f7f7f9_0%,#eef2f5_100%)]" />
        <div className="absolute left-0 top-0 h-[320px] w-full bg-[radial-gradient(circle_at_top_left,rgba(88,126,141,0.14),transparent_30%)]" />
        <div className="absolute bottom-0 right-0 h-[320px] w-full bg-[radial-gradient(circle_at_bottom_right,rgba(35,31,58,0.10),transparent_28%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d8dde3] bg-white/90 px-4 py-2 text-sm font-semibold text-[#587e8d] shadow-sm backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4" />
              Solicita tu asesoría
            </div>

            <h2 className="mt-5 max-w-xl text-[2.2rem] font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#231f3a] sm:text-[2.9rem] lg:text-[3.5rem]">
              Cuéntanos tu situación y te orientamos
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#4b5563] sm:text-lg">
              Completa el formulario con tus datos y el contexto de tu caso.
              Nuestro equipo revisará tu solicitud antes de contactarte.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[22px] border border-[#dfe4ea] bg-white/80 p-5 shadow-sm backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef3f4] text-[#587e8d]">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#231f3a]">
                  Evaluación inicial
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5b6072]">
                  Revisamos tu caso, nivel de urgencia y etapa del proceso para
                  darte una orientación más precisa.
                </p>
              </div>

              <div className="rounded-[22px] border border-[#dfe4ea] bg-white/80 p-5 shadow-sm backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef3f4] text-[#587e8d]">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#231f3a]">
                  Enfoque especializado
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5b6072]">
                  Formulario pensado para ejecutivos del sistema de salud y
                  situaciones ante la Superintendencia.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {[
                "Respuesta inicial clara y profesional.",
                "Revisión previa antes de contactarte.",
                "Asesoría enfocada en proteger tu ejercicio profesional.",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#587e8d] shadow-sm ring-1 ring-[#d9dbe3]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-[15px] leading-6 text-[#2f2f39] sm:text-base">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="mailto:contact@agenteseguro.cl"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="mt-8 inline-flex items-center gap-3 rounded-xl border border-[#d8dde3] bg-white px-5 py-3 text-sm font-semibold text-[#231f3a] shadow-sm transition hover:border-[#587e8d] hover:text-[#587e8d]"
            >
              <Mail className="h-4 w-4" />
              contact@agenteseguro.cl
            </motion.a>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -left-6 top-10 hidden h-[78%] w-[88%] rounded-[32px] bg-[#dfe4ea] lg:block" />
            <div className="absolute -right-5 bottom-8 hidden h-28 w-28 rounded-full bg-[#587e8d]/15 blur-3xl lg:block" />

            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#231f3a] shadow-[0_30px_80px_rgba(35,31,58,0.28)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(88,126,141,0.35),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_24%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02),transparent_35%,rgba(255,255,255,0.03))]" />

              <div className="relative p-5 sm:p-7 lg:p-8">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#bfe1ea] backdrop-blur-sm">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Formulario de contacto
                  </div>

                  <h3 className="mt-4 text-[1.7rem] font-black leading-tight tracking-[-0.03em] text-white sm:text-[2rem]">
                    Solicita asesoría
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-white/70 sm:text-[15px]">
                    Déjanos tus datos y una breve descripción. Revisaremos tu
                    caso antes de contactarte.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <motion.div
                      whileFocus={{ scale: 1.01 }}
                      className="sm:col-span-2"
                    >
                      <label htmlFor="nombreCompleto" className="sr-only">
                        Nombre completo
                      </label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" />
                        <input
                          id="nombreCompleto"
                          name="nombreCompleto"
                          type="text"
                          placeholder="Nombre completo"
                          className="h-14 w-full rounded-xl border border-[#d7dbe2] bg-white pl-11 pr-5 text-[15px] text-[#231f3a] outline-none transition placeholder:text-[#6b7280] focus:border-[#587e8d] focus:ring-4 focus:ring-[#587e8d]/15"
                        />
                      </div>
                    </motion.div>

                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <label htmlFor="telefonoWhatsapp" className="sr-only">
                        Teléfono / WhatsApp
                      </label>
                      <div className="relative">
                        <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" />
                        <input
                          id="telefonoWhatsapp"
                          name="telefonoWhatsapp"
                          type="tel"
                          placeholder="Teléfono / WhatsApp"
                          className="h-14 w-full rounded-xl border border-[#d7dbe2] bg-white pl-11 pr-5 text-[15px] text-[#231f3a] outline-none transition placeholder:text-[#6b7280] focus:border-[#587e8d] focus:ring-4 focus:ring-[#587e8d]/15"
                        />
                      </div>
                    </motion.div>

                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <label htmlFor="isapre" className="sr-only">
                        Isapre donde trabajas
                      </label>
                      <div className="relative">
                        <Building2 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" />
                        <select
                          id="isapre"
                          name="isapre"
                          defaultValue=""
                          className="h-14 w-full appearance-none rounded-xl border border-[#d7dbe2] bg-white pl-11 pr-5 text-[15px] text-[#231f3a] outline-none transition focus:border-[#587e8d] focus:ring-4 focus:ring-[#587e8d]/15"
                        >
                          <option value="" disabled>
                            Isapre donde trabajas
                          </option>
                          {isapres.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </motion.div>

                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <label htmlFor="cargoActual" className="sr-only">
                        Cargo actual
                      </label>
                      <div className="relative">
                        <BriefcaseBusiness className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" />
                        <select
                          id="cargoActual"
                          name="cargoActual"
                          defaultValue=""
                          className="h-14 w-full appearance-none rounded-xl border border-[#d7dbe2] bg-white pl-11 pr-5 text-[15px] text-[#231f3a] outline-none transition focus:border-[#587e8d] focus:ring-4 focus:ring-[#587e8d]/15"
                        >
                          <option value="" disabled>
                            Cargo actual
                          </option>
                          {cargos.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.01 }}
                      className="sm:col-span-2"
                    >
                      <label htmlFor="situacion" className="sr-only">
                        ¿En qué situación te encuentras?
                      </label>
                      <div className="relative">
                        <AlertTriangle className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" />
                        <select
                          id="situacion"
                          name="situacion"
                          defaultValue=""
                          className="h-14 w-full appearance-none rounded-xl border border-[#d7dbe2] bg-white pl-11 pr-5 text-[15px] text-[#231f3a] outline-none transition focus:border-[#587e8d] focus:ring-4 focus:ring-[#587e8d]/15"
                        >
                          <option value="" disabled>
                            ¿En qué situación te encuentras?
                          </option>
                          {situaciones.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.01 }}
                      className="sm:col-span-2"
                    >
                      <label htmlFor="urgencia" className="sr-only">
                        ¿Con qué urgencia necesitas asesoría?
                      </label>
                      <div className="relative">
                        <Clock3 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" />
                        <select
                          id="urgencia"
                          name="urgencia"
                          defaultValue=""
                          className="h-14 w-full appearance-none rounded-xl border border-[#d7dbe2] bg-white pl-11 pr-5 text-[15px] text-[#231f3a] outline-none transition focus:border-[#587e8d] focus:ring-4 focus:ring-[#587e8d]/15"
                        >
                          <option value="" disabled>
                            ¿Con qué urgencia necesitas asesoría?
                          </option>
                          {urgencias.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.01 }}
                      className="sm:col-span-2"
                    >
                      <label htmlFor="situacionDetalle" className="sr-only">
                        Cuéntanos brevemente tu situación
                      </label>
                      <div className="relative">
                        <FileText className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-[#6b7280]" />
                        <textarea
                          id="situacionDetalle"
                          name="situacionDetalle"
                          rows={5}
                          placeholder="Cuéntanos brevemente tu situación (opcional). Describe brevemente la denuncia o situación que enfrentas."
                          className="w-full rounded-xl border border-[#d7dbe2] bg-white pl-11 pr-5 pt-4 text-[15px] text-[#231f3a] outline-none transition placeholder:text-[#6b7280] focus:border-[#587e8d] focus:ring-4 focus:ring-[#587e8d]/15"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/8 p-4 text-sm leading-6 text-white/70 backdrop-blur-sm">
                    Nuestro equipo revisará tu caso antes de contactarte.
                  </div>

                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      whileHover={{ y: -2, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[linear-gradient(135deg,#2aa7a3_0%,#6bc2a8_100%)] px-6 text-base font-extrabold text-white shadow-[0_16px_40px_rgba(47,166,155,0.35)] transition hover:shadow-[0_18px_44px_rgba(47,166,155,0.45)]"
                    >
                      Solicitar asesoría
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </motion.button>
                  </div>
                </form>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/56900000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-semibold text-white/85 backdrop-blur-sm transition hover:bg-white/12"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>

                  <span className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/65 backdrop-blur-sm">
                    Respuesta personalizada
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
