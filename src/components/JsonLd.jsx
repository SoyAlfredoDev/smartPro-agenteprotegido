export default function JsonLd() {
  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Agente Protegido",
    url: "https://agenteprotegido.cl",
    description:
      "Defensa administrativa especializada para ejecutivos del sistema de salud en Chile. Asesoría ante procesos y sanciones de la Superintendencia de Salud.",
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
    serviceType: [
      "Defensa administrativa",
      "Asesoría legal para ejecutivos de salud",
      "Defensa ante Superintendencia de Salud",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santiago",
      addressCountry: "CL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "contacto@agenteprotegido.cl",
      contactType: "customer service",
      availableLanguage: "Spanish",
    },
    image: "https://agenteprotegido.cl/images/og-image.jpg",
    priceRange: "$$",
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Agente Protegido",
    url: "https://agenteprotegido.cl",
    description:
      "Defensa administrativa especializada para ejecutivos del sistema de salud en Chile.",
    inLanguage: "es",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalService),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSite),
        }}
      />
    </>
  );
}
