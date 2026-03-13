"use client";

import emailjs from "@emailjs/browser";

export const sendContactEmail = async (formData) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Faltan variables públicas de EmailJS");
  }

  // Aseguramos que todos los campos del formulario se envíen
  const templateParams = {
    nombreCompleto: formData.nombreCompleto,
    email: formData.email, // Agregado: vital para contactar al cliente
    telefonoWhatsapp: formData.telefonoWhatsapp,
    isapre: formData.isapre,
    cargoActual: formData.cargoActual,
    situacion: formData.situacion,
    urgencia: formData.urgencia,
    situacionDetalle: formData.situacionDetalle?.trim()
      ? formData.situacionDetalle
      : "No indicó detalles adicionales.",
    // Útil si quieres configurar el "Reply-To" en la plantilla de EmailJS
    reply_to: formData.email,
  };

  return emailjs.send(serviceId, templateId, templateParams, {
    publicKey,
  });
};
