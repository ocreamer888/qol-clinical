import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | QOL Clinical",
  description: "Política de privacidad de QOL Clinical.",
};

export default function PrivacidadPage() {
  return (
    <article className="space-y-8">
      <h1 className="font-heading text-3xl text-[#28574e] md:text-4xl">Política de Privacidad</h1>
      <p className="text-text-secondary text-sm leading-relaxed">
        Última actualización: abril de 2026
      </p>
      <section className="space-y-4 text-base leading-relaxed text-text-secondary">
        <p>
          En QOL Clinical nos comprometemos a proteger la privacidad de la información personal que nos
          proporciona. Este documento describe de forma general qué datos podemos recopilar, con qué
          fines los utilizamos y cómo puede ejercer sus derechos.
        </p>
        <p>
          El texto legal definitivo debe ser revisado y aprobado por asesoría jurídica y adaptado a las
          leyes aplicables en su jurisdicción (por ejemplo, protección de datos de salud y normativa
          local).
        </p>
      </section>
    </article>
  );
}
