"use client";

import { waFeatureConsulta } from "@/lib/whatsapp";
import { WhatsAppButton } from "../WhatsAppButton";
import { features } from "@/lib/scripts";
import { iconMap } from "@/components/icons";

export function Features() {
  return (
    <section id="features" className="pb-20 lg:pb-28">
      <div className="max-w-[1252px] mx-auto px-2 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <WhatsAppButton
                key={feature.id}
                message={waFeatureConsulta(feature.title)}
                aria-label={`Consultar por WhatsApp: ${feature.title}`}
                className={`group ${feature.iconBg} rounded-[40px] p-8 lg:p-10 flex flex-col items-center text-center min-h-[378px] no-underline cursor-pointer transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20433d] focus-visible:ring-offset-2`}
              >
                <div className="mb-6 text-[#20433d] group-hover:text-[#1a3531] transition-colors">
                  {Icon ? (
                    <Icon className="w-16 h-16 lg:w-[68px] lg:h-[68px] shrink-0" />
                  ) : null}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}