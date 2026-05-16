"use client";

import Image from "next/image";
import { waFeatureConsulta } from "@/lib/whatsapp";
import { WhatsAppButton } from "../WhatsAppButton";

const features = [
  {
    id: 1,
    title: "Segunda Opinión",
    description:
      "Claridad sobre tu diagnóstico y tratamiento actual, con una mirada fresca e independiente",
    icon: "/icons/second-opinion-icon.svg",
    iconBg: "bg-[#f9f9f9]",
  },
  {
    id: 2,
    title: "Tratamiento",
    description:
      "Revisión profesional de tus medicamentos para maximizar resultados y minimizar riesgos",
    icon: "/icons/treatment-icon.svg",
    iconBg: "bg-[#f8f8f8]",
  },
  {
    id: 3,
    title: "Teleconsulta",
    description:
      "Atención clínica de calidad desde tu casa, tu trabajo, donde la vida te encuentre",
    icon: "/icons/world-icon.svg",
    iconBg: "bg-[#f9f9f9]",
  },
];

export function Features() {
  return (
    <section id="features" className="pb-20 lg:pb-28">
      <div className="max-w-[1252px] mx-auto px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <WhatsAppButton
              key={feature.id}
              message={waFeatureConsulta(feature.title)}
              aria-label={`Consultar por WhatsApp: ${feature.title}`}
              className={`group ${feature.iconBg} rounded-[40px] p-8 lg:p-10 flex flex-col items-center text-center min-h-[378px] no-underline cursor-pointer transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20433d] focus-visible:ring-offset-2`}
            >
              <div className="w-16 h-16 lg:w-[68px] lg:h-[68px] mb-6 relative shrink-0">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain pointer-events-none"
                />
              </div>

              <h3 className="text-black font-medium text-xl lg:text-2xl mb-4">
                {feature.title}
              </h3>

              <p className="text-[#757575] text-base leading-relaxed mb-8 flex-grow">
                {feature.description}
              </p>

              <span className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full bg-[#20433d] text-white group-hover:bg-[#1a3531] px-5 py-2 text-sm shrink-0">
                Consulta
              </span>
            </WhatsAppButton>
          ))}
        </div>
      </div>
    </section>
  );
}
