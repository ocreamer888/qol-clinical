import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | QOL Clinical",
  description: "Política de privacidad de QOL Clinical.",
};

export default function PrivacidadPage() {
  return (
    <article className="space-y-8">
      <h1 className="font-heading text-3xl text-[#28574e] md:text-4xl">
        Política de Privacidad
      </h1>
      <p className="text-sm leading-relaxed text-gray-500">
        Última actualización: mayo de 2026
      </p>

      {/* ── PASTE FINAL LEGAL COPY BELOW THIS LINE ── */}

      <section className="space-y-6 text-base leading-relaxed text-gray-700">
        <div>
          <h2 className="text-xl font-semibold text-[#28574e] mb-2">1. Responsable del tratamiento</h2>
          <p>[Pendiente de revisión legal]</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#28574e] mb-2">2. Datos que recopilamos</h2>
          <p>[Pendiente de revisión legal]</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#28574e] mb-2">3. Finalidad del tratamiento</h2>
          <p>[Pendiente de revisión legal]</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#28574e] mb-2">4. Base legal</h2>
          <p>[Pendiente de revisión legal]</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#28574e] mb-2">5. Derechos del titular</h2>
          <p>[Pendiente de revisión legal]</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-[#28574e] mb-2">6. Contacto</h2>
          <p>[Pendiente de revisión legal]</p>
        </div>
      </section>

      {/* ── END OF LEGAL COPY ── */}
    </article>
  );
}
