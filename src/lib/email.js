"use client";

import emailjs from "@emailjs/browser";

export const sendContactEmail = async (formData) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Faltan variables públicas de EmailJS");
  }

  const templateParams = {
    nombreCompleto: formData.nombreCompleto,
    telefonoWhatsapp: formData.telefonoWhatsapp,
    isapre: formData.isapre,
    cargoActual: formData.cargoActual,
    situacion: formData.situacion,
    urgencia: formData.urgencia,
    situacionDetalle:
      formData.situacionDetalle || "No indicó detalles adicionales.",
  };

  return emailjs.send(serviceId, templateId, templateParams, {
    publicKey,
  });
};
