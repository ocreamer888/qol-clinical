import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | QOL Clinical",
  description: "Términos y condiciones de uso de QOL Clinical.",
};

export default function TerminosPage() {
  return (
    <article className="space-y-8">
      <h1 className="font-heading text-3xl text-[#28574e] md:text-4xl">Términos y Condiciones</h1>
      <p className="text-text-secondary text-sm leading-relaxed">
        Última actualización: abril de 2026
      </p>
      <section className="space-y-4 text-base leading-relaxed text-text-secondary">
        <p>
          El uso del sitio web y los servicios de QOL Clinical implica la aceptación de estos términos.
          Aquí debe incluirse la descripción del servicio, limitaciones de responsabilidad, condiciones de
          uso del contenido, propiedad intelectual y resolución de disputas según corresponda.
        </p>
        <p>
          Sustituya este borrador por los términos finales redactados por su equipo legal y alineados con
          su modelo de atención (teleconsulta, coordinación con terceros, etc.).
        </p>
      </section>
    </article>
  );
}
