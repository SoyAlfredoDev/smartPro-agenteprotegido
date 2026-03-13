"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { sendContactEmail } from "../lib/email";
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
  XCircle,
  X,
  CircleCheckBig,
  Loader2,
} from "lucide-react";

/* ───────────────────────── Data ───────────────────────── */

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

const initialFormData = {
  nombreCompleto: "",
  telefonoWhatsapp: "",
  isapre: "",
  cargoActual: "",
  situacion: "",
  urgencia: "",
  situacionDetalle: "",
};

const requiredFields = [
  { key: "nombreCompleto", label: "Nombre completo" },
  { key: "telefonoWhatsapp", label: "Teléfono / WhatsApp" },
  { key: "isapre", label: "Isapre donde trabajas" },
  { key: "cargoActual", label: "Cargo actual" },
  { key: "situacion", label: "Situación actual" },
  { key: "urgencia", label: "Nivel de urgencia" },
];

/* ───────────────────────── Modal ───────────────────────── */

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalCard = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", damping: 26, stiffness: 300 },
  },
  exit: { opacity: 0, scale: 0.92, y: 24, transition: { duration: 0.2 } },
};

function StatusModal({ type, missingFields = [], onClose }) {
  if (!type) return null;

  const isError = type === "validation_error";
  const isSendError = type === "error";
  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      {type && (
        <motion.div
          key="modal-backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/55 px-4 backdrop-blur-sm"
        >
          <motion.div
            key="modal-card"
            variants={modalCard}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#1c1833] shadow-[0_40px_100px_rgba(0,0,0,0.55)]"
          >
            {/* glow */}
            <div
              className={`absolute inset-0 ${
                isSuccess
                  ? "bg-[radial-gradient(circle_at_top_right,rgba(42,167,163,0.25),transparent_45%)]"
                  : "bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.18),transparent_45%)]"
              }`}
            />

            <div className="relative p-7 sm:p-8">
              {/* close */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-white/40 transition hover:bg-white/10 hover:text-white/70"
              >
                <X className="h-4 w-4" />
              </button>

              {/* icon */}
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${
                  isSuccess
                    ? "bg-emerald-500/15 text-emerald-400"
                    : "bg-red-500/15 text-red-400"
                }`}
              >
                {isSuccess ? (
                  <CircleCheckBig className="h-8 w-8" />
                ) : (
                  <XCircle className="h-8 w-8" />
                )}
              </div>

              {/* title */}
              <h3 className="mt-5 text-center text-xl font-bold text-white sm:text-2xl">
                {isSuccess && "¡Solicitud enviada!"}
                {isError && "Campos incompletos"}
                {isSendError && "Error al enviar"}
              </h3>

              {/* body */}
              <div className="mt-3 text-center text-sm leading-6 text-white/65 sm:text-[15px]">
                {isSuccess && (
                  <p>
                    Tu solicitud fue enviada correctamente. Nuestro equipo
                    revisará tu caso y se pondrá en contacto contigo a la
                    brevedad.
                  </p>
                )}
                {isError && (
                  <>
                    <p>
                      Por favor completa los siguientes campos antes de enviar:
                    </p>
                    <ul className="mt-3 space-y-1.5 text-left">
                      {missingFields.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-amber-300/90"
                        >
                          <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {isSendError && (
                  <p>
                    Ocurrió un error al enviar tu formulario. Por favor
                    inténtalo nuevamente o contáctanos directamente por
                    WhatsApp.
                  </p>
                )}
              </div>

              {/* button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={onClose}
                className={`mt-7 h-12 w-full rounded-xl text-sm font-bold text-white transition ${
                  isSuccess
                    ? "bg-[linear-gradient(135deg,#2aa7a3_0%,#6bc2a8_100%)] shadow-[0_10px_30px_rgba(42,167,163,0.35)] hover:shadow-[0_14px_36px_rgba(42,167,163,0.45)]"
                    : "bg-white/10 hover:bg-white/15"
                }`}
              >
                {isSuccess ? "Entendido" : "Cerrar"}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ───────────────────── Main Component ───────────────────── */

export default function ContactSection() {
  const [formData, setFormData] = useState(initialFormData);
  const [modalType, setModalType] = useState(null);
  const [missingFields, setMissingFields] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getEmptyRequiredFields = useCallback(() => {
    return requiredFields
      .filter((f) => !formData[f.key]?.trim())
      .map((f) => f.label);
  }, [formData]);

  const closeModal = useCallback(() => {
    setModalType(null);
    setMissingFields([]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const empty = getEmptyRequiredFields();
    if (empty.length > 0) {
      setMissingFields(empty);
      setModalType("validation_error");
      return;
    }

    setIsSubmitting(true);
    setModalType(null);

    try {
      // Trim all values before sending
      const trimmed = Object.fromEntries(
        Object.entries(formData).map(([k, v]) => [k, v.trim()]),
      );
      await sendContactEmail(trimmed);
      setModalType("success");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setModalType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ── Modal ── */}
      <AnimatePresence>
        {modalType && (
          <StatusModal
            type={modalType}
            missingFields={missingFields}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>

      {/* ── Section ── */}
      <section
        id="contacto"
        className="relative overflow-hidden bg-[#f7f7f9] py-16 sm:py-20 lg:py-24"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#f7f7f9_0%,#eef2f5_100%)]" />
          <div className="absolute left-0 top-0 h-[320px] w-full bg-[radial-gradient(circle_at_top_left,rgba(88,126,141,0.14),transparent_30%)]" />
          <div className="absolute bottom-0 right-0 h-[320px] w-full bg-[radial-gradient(circle_at_bottom_right,rgba(35,31,58,0.10),transparent_28%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            {/* ── Left column ── */}
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
                    Revisamos tu caso, nivel de urgencia y etapa del proceso
                    para darte una orientación más precisa.
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
                contacto@agenteprotegido.cl
              </motion.a>
            </motion.div>

            {/* ── Right column — Form ── */}
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

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {/* Nombre completo */}
                      <div className="sm:col-span-2">
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
                            value={formData.nombreCompleto}
                            onChange={handleChange}
                            className="h-14 w-full rounded-xl border border-[#d7dbe2] bg-white pl-11 pr-5 text-[15px] text-[#231f3a] outline-none transition placeholder:text-[#6b7280] focus:border-[#587e8d] focus:ring-4 focus:ring-[#587e8d]/15"
                          />
                        </div>
                      </div>

                      {/* Teléfono */}
                      <div>
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
                            value={formData.telefonoWhatsapp}
                            onChange={handleChange}
                            className="h-14 w-full rounded-xl border border-[#d7dbe2] bg-white pl-11 pr-5 text-[15px] text-[#231f3a] outline-none transition placeholder:text-[#6b7280] focus:border-[#587e8d] focus:ring-4 focus:ring-[#587e8d]/15"
                          />
                        </div>
                      </div>

                      {/* Isapre */}
                      <div>
                        <label htmlFor="isapre" className="sr-only">
                          Isapre donde trabajas
                        </label>
                        <div className="relative">
                          <Building2 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" />
                          <select
                            id="isapre"
                            name="isapre"
                            value={formData.isapre}
                            onChange={handleChange}
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
                      </div>

                      {/* Cargo */}
                      <div>
                        <label htmlFor="cargoActual" className="sr-only">
                          Cargo actual
                        </label>
                        <div className="relative">
                          <BriefcaseBusiness className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" />
                          <select
                            id="cargoActual"
                            name="cargoActual"
                            value={formData.cargoActual}
                            onChange={handleChange}
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
                      </div>

                      {/* Situación */}
                      <div className="sm:col-span-2">
                        <label htmlFor="situacion" className="sr-only">
                          ¿En qué situación te encuentras?
                        </label>
                        <div className="relative">
                          <AlertTriangle className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" />
                          <select
                            id="situacion"
                            name="situacion"
                            value={formData.situacion}
                            onChange={handleChange}
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
                      </div>

                      {/* Urgencia */}
                      <div className="sm:col-span-2">
                        <label htmlFor="urgencia" className="sr-only">
                          ¿Con qué urgencia necesitas asesoría?
                        </label>
                        <div className="relative">
                          <Clock3 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]" />
                          <select
                            id="urgencia"
                            name="urgencia"
                            value={formData.urgencia}
                            onChange={handleChange}
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
                      </div>

                      {/* Detalle (opcional) */}
                      <div className="sm:col-span-2">
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
                            value={formData.situacionDetalle}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-[#d7dbe2] bg-white pl-11 pr-5 pt-4 text-[15px] text-[#231f3a] outline-none transition placeholder:text-[#6b7280] focus:border-[#587e8d] focus:ring-4 focus:ring-[#587e8d]/15"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/8 p-4 text-sm leading-6 text-white/70 backdrop-blur-sm">
                      Nuestro equipo revisará tu caso antes de contactarte.
                    </div>

                    <div className="pt-2">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={!isSubmitting ? { y: -2, scale: 1.01 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[linear-gradient(135deg,#2aa7a3_0%,#6bc2a8_100%)] px-6 text-base font-extrabold text-white shadow-[0_16px_40px_rgba(47,166,155,0.35)] transition hover:shadow-[0_18px_44px_rgba(47,166,155,0.45)] disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            Solicitar asesoría
                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                          </>
                        )}
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
    </>
  );
}
