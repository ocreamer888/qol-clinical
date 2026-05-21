"use client";

import { waTratamiento } from "@/lib/whatsapp";
import { WhatsAppButton } from "../WhatsAppButton";
import { treatments } from "@/lib/scripts";
import { iconMap } from "@/components/icons";

export function Treatments() {
  return (
    <section id="treatments" className="bg-[#dad2c7] py-20 lg:py-28">
      <div className="max-w-[1248px] mx-auto px-2 lg:px-12">
        <h2 className="font-[family-name:var(--font-adamina)] text-[#28574e] text-3xl md:text-4xl lg:text-[40px] leading-tight max-w-[629px] mb-12">
          Explora Nuestros Tratamientos por Especialidad
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {treatments.map((treatment) => {
            const displayName = treatment.name.replace(/\n/g, " ");
            const Icon = iconMap[treatment.icon];

            return (
              <WhatsAppButton
                key={treatment.id}
                message={waTratamiento(displayName)}
                aria-label={`Consultar por WhatsApp: ${displayName}`}
                className="group bg-[#f9f9f9] rounded-[30px] p-6 h-[218px] flex flex-col items-center justify-between hover:shadow-lg transition-shadow cursor-pointer text-left no-underline"
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center flex-grow text-[#28574e] group-hover:text-[#20433d] transition-colors">
                  <Icon className="w-full h-full" />
                </div>

                <h3 className="text-black font-medium text-xl lg:text-2xl text-center whitespace-pre-line">
                  {treatment.name}
                </h3>
              </WhatsAppButton>
            );
          })}
        </div>
      </div>
    </section>
  );
}