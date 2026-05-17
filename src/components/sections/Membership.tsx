"use client";

import { Button } from "../ui/Button";

const membershipPlans = [
  {
    id: "lite",
    name: "QOL Lite",
    price: "$10",
    period: "/mes",
    label: "Desde",
    features: [
      "Cobertura de salud global en más de 50 países",
      "Asesor de salud en EE.UU.",
      "Medicamentos a precio preferencial",
      "Asistencia con visas médicas",
      "Tamizaje genético preventivo",
      "Servicio de concierge global",
    ],
    gradient: "from-white/20 to-transparent",
    gradientPosition: "left",
  },
  {
    id: "family",
    name: "QOL Family",
    price: "$45",
    period: "/mes",
    label: "Desde",
    features: [
      "Cobertura de salud global en más de 50 países",
      "Asesor de salud en EE.UU.",
      "Medicamentos a precio preferencial",
      "Asistencia con visas médicas",
      "Tamizaje genético preventivo",
      "Servicio de concierge global",
    ],
    gradient: "from-white/20 to-transparent",
    gradientPosition: "right",
  },
];

export function Membership() {
  return (
    <section id="membership" className="py-20">
      <div className="bg-[#28564d] rounded-[44px] max-w-[1300px] mx-auto p-8 lg:p-28">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-adamina)] text-white text-4xl md:text-5xl lg:text-[64px] mb-6">
            Membresía QOL
          </h2>
          <p className="text-white/60 text-lg max-w-[805px] mx-auto">
            La membresía QOL Clinical te da acceso continuo a un equipo clínico que te conoce,
            te sigue y trabaja activamente por tu calidad de vida. No es solo un servicio, es una red de apoyo permanente.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
          {membershipPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-[40px] overflow-hidden p-8 lg:p-12 min-h-[584px] border border-white/20 flex flex-col ${
                plan.gradientPosition === "left"
                  ? "bg-gradient-to-br from-white/10 to-transparent"
                  : "bg-gradient-to-bl from-white/10 to-transparent"
              }`}
              style={{
                background: `linear-gradient(${plan.gradientPosition === "left" ? "135deg" : "225deg"}, rgba(255,255,255,0.1) 0%, transparent 100%)`,
              }}
            >
              {/* Plan Name */}
              <h3 className="text-white font-medium text-2xl mb-2">{plan.name}</h3>

              {/* Label */}
              <p className="text-white/50 text-base mb-1">{plan.label}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="font-[family-name:var(--font-adamina)] text-white text-4xl lg:text-[40px] font-medium">
                  {plan.price}
                </span>
                <span className="text-white/70 text-lg">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-white text-base flex items-start gap-3">
                    <span className="text-white/70 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button variant="white" size="sm" className="w-fit">
                Comenzar
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
