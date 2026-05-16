import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licencia | QOL Clinical",
  description: "Información de licencias y permisos de QOL Clinical.",
};

export default function LicenciaPage() {
  return (
    <article className="space-y-8">
      <h1 className="font-heading text-3xl text-[#28574e] md:text-4xl">Licencia</h1>
      <p className="text-text-secondary text-sm leading-relaxed">
        Última actualización: abril de 2026
      </p>
      <section className="space-y-4 text-base leading-relaxed text-text-secondary">
        <p>
          En esta sección puede publicar la información sobre licencias profesionales, registros
          sanitarios, permisos de operación u otras credenciales que deban ser transparentes ante
          pacientes y autoridades.
        </p>
        <p>
          Complete esta página con los números de registro, entidades emisoras y vigencias oficiales
          según aplique a su organización.
        </p>
      </section>
    </article>
  );
}
