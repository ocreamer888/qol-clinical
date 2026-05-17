/** Prefilled WhatsApp copy by entry point (Spanish, QOL Clinical). */

const ORIGIN = "la web de QOL Clinical";

export function buildWhatsAppHref(
  phoneDigits: string,
  message?: string
): string | null {
  const digits = phoneDigits.replace(/\D/g, "");
  if (!digits) return null;
  const base = `https://wa.me/${digits}`;
  const text = message?.trim();
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function waConsultaGratis(): string {
  return (
    `Hola, vengo desde ${ORIGIN}. ` +
    "Me gustaría agendar una consulta gratis y conocer cómo pueden acompañarme con mi condición de salud."
  );
}

export function waHablaEspecialista(): string {
  return (
    `Hola, vengo desde ${ORIGIN}. ` +
    "Quiero hablar con un especialista para entender mis opciones de teleconsulta y seguimiento."
  );
}

export function waTratamiento(especialidadDisplay: string): string {
  const label = especialidadDisplay.replace(/\s*\n\s*/g, " ").trim();
  return (
    `Hola, vengo desde ${ORIGIN}. ` +
    `Me interesa información sobre el área de ${label}. ¿Me pueden orientar sobre próximos pasos?`
  );
}

export function waTeleconsultaAgenda(): string {
  return (
    `Hola, vengo desde ${ORIGIN}. ` +
    "Vi la sección de teleconsulta y quiero agendar una llamada con un profesional."
  );
}

export function waFeatureConsulta(featureTitle: string): string {
  const topic = featureTitle.trim();
  return (
    `Hola, vengo desde ${ORIGIN}. ` +
    `Me interesa la opción de «${topic}». ¿Me pueden contar cómo funciona y qué necesito para empezar?`
  );
}

export function waContactForm(
  nombre: string,
  apellido: string,
  email: string,
  telefono: string,
  pais: string,
  mensaje: string
): string {
  return (
    `Hola, vengo desde ${ORIGIN}.\n` +
    `Nombre: ${nombre} ${apellido}\n` +
    `Email: ${email}\n` +
    `Teléfono: ${telefono}\n` +
    `País: ${pais}\n` +
    `Mensaje: ${mensaje}`
  );
}
