"use client";

import Image from "next/image";
import { waTratamiento } from "@/lib/whatsapp";
import { WhatsAppButton } from "../WhatsAppButton";

const treatments = [
  { id: 1, name: "Oncología", icon: "/icons/oncology-icon.svg" },
  { id: 2, name: "Endocronología", icon: "/icons/endocronlogía-icon.svg" },
  { id: 3, name: "Infertilidad", icon: "/icons/infertility-icon.svg" },
  { id: 4, name: "Salud Mental", icon: "/icons/brain-icon.svg" },
  { id: 5, name: "Cardiología", icon: "/icons/cardiology-icon.svg" },
  { id: 6, name: "Neurología", icon: "/icons/neurology-icon.svg" },
  { id: 7, name: "Rheumatología", icon: "/icons/rheumatología-icon.svg" },
  { id: 8, name: "Estética", icon: "/icons/estetica-icon.svg" },
  { id: 9, name: "Enfermedades\nRaras", icon: "/icons/rare-diseases-icon.svg", multiline: true },
  { id: 10, name: "Surrogacy", icon: "/icons/surrogacy-icon.svg" },
];

export function Treatments() {
  return (
    <section id="treatments" className="bg-[#dad2c7] py-20 lg:py-28">
      <div className="max-w-[1248px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <h2 className="font-[family-name:var(--font-adamina)] text-[#28574e] text-3xl md:text-4xl lg:text-[40px] leading-tight max-w-[629px] mb-12">
          Explora Nuestros Tratamientos por Especialidad
        </h2>

        {/* Treatments Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {treatments.map((treatment) => (
            <WhatsAppButton
              key={treatment.id}
              message={waTratamiento(treatment.name)}
              aria-label={`Consultar por WhatsApp: ${treatment.name.replace("\n", " ")}`}
              className="bg-[#f9f9f9] rounded-[30px] p-6 h-[218px] flex flex-col items-center justify-between hover:shadow-lg transition-shadow cursor-pointer text-left no-underline"
            >
              <div className="relative w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center flex-grow">
                <Image
                  src={treatment.icon}
                  alt={treatment.name.replace("\n", " ")}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              <h3 className="text-black font-medium text-xl lg:text-2xl text-center whitespace-pre-line">
                {treatment.name}
              </h3>
            </WhatsAppButton>
          ))}
        </div>
      </div>
    </section>
  );
}
