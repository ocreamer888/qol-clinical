import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | QOL Clinical",
  description: "Términos y condiciones de uso de QOL Clinical.",
};

export default function TerminosPage() {
  return (
    <article className="space-y-8">
      <h1 className="font-heading text-3xl text-[#28574e] md:text-4xl">
        Términos y Condiciones
      </h1>
      <p className="text-sm leading-relaxed text-gray-500">
        Última actualización: mayo de 2026
      </p>

      {/* ── PASTE FINAL LEGAL COPY BELOW THIS LINE ── */}

      <section className="space-y-6 text-base leading-relaxed text-gray-700">
        <div>
          <h2 className="text-xl font-semibold text-[#28574e] mb-2">1. Aceptación de los términos</h2>
          <p>[Pendiente de revisión legal]</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#28574e] mb-2">2. Descripción del servicio</h2>
          <p>[Pendiente de revisión legal]</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#28574e] mb-2">3. Limitación de responsabilidad</h2>
          <p>[Pendiente de revisión legal]</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#28574e] mb-2">4. Propiedad intelectual</h2>
          <p>[Pendiente de revisión legal]</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#28574e] mb-2">5. Resolución de disputas</h2>
          <p>[Pendiente de revisión legal]</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#28574e] mb-2">6. Ley aplicable</h2>
          <p>[Pendiente de revisión legal]</p>
        </div>
      </section>

      {/* ── END OF LEGAL COPY ── */}
    </article>
  );
}
