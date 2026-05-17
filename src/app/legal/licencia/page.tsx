import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licencia | QOL Clinical",
  description: "Información de licencias y permisos de QOL Clinical.",
};

export default function LicenciaPage() {
  return (
    <article className="space-y-8">
      <h1 className="font-heading text-3xl text-[#28574e] md:text-4xl">
        Licencia
      </h1>
      <p className="text-sm leading-relaxed text-gray-500">
        Última actualización: mayo de 2026
      </p>

      {/* ── PASTE FINAL LEGAL COPY BELOW THIS LINE ── */}

      <section className="space-y-6 text-base leading-relaxed text-gray-700">
        <div>
          <h2 className="text-xl font-semibold text-[#28574e] mb-2">1. Registro profesional</h2>
          <p>[Pendiente — incluir número de registro y entidad emisora]</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#28574e] mb-2">2. Permisos de operación</h2>
          <p>[Pendiente — incluir permisos sanitarios aplicables]</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#28574e] mb-2">3. Vigencia</h2>
          <p>[Pendiente — incluir fechas de vigencia oficiales]</p>
        </div>
      </section>

      {/* ── END OF LEGAL COPY ── */}
    </article>
  );
}
