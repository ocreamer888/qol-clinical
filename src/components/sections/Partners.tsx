"use client";

import Image from "next/image";

const partners = [
  { id: 1, name: "Mayo Clinic", logo: "/logos/mayo-clinic-logo.png" },
  { id: 2, name: "Cleveland Clinic", logo: "/logos/cleveland-clinic-logo.png" },
  { id: 3, name: "MD Anderson", logo: "/logos/md-anderson-cancer-center-logo.png" },
  { id: 4, name: "Stanford Health Care", logo: "/logos/standford-healthcare-logo.png" },
  { id: 5, name: "Stanford Cardiovascular", logo: "/logos/standford-cardiovascular-institute-logo.png" },
  { id: 6, name: "Children's Hospital LA", logo: "/logos/children-hospital-la-logo.png" },
  { id: 7, name: "Boston Children's", logo: "/logos/boston-children-hospital-logo.png" },
  { id: 8, name: "NIH Clinical Center", logo: "/logos/nih-clinical-center-logo.png" },
  { id: 9, name: "Mount Sinai", logo: "/logos/mount-sinai-logo.png" },
];

export function Partners() {
  return (
    <section id="partners" className="pb-20 lg:pb-28">
      <div className="max-w-[1248px] mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_500px] gap-12 lg:gap-20 items-center justify-center">
          {/* Left - Logos Grid */}
          <div className="grid grid-cols-3 gap-4 order-2 lg:order-1">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-[#f9f9f9] rounded-[30px] h-[180px] flex items-center justify-center p-6"
              >
                <div className="relative w-full h-full max-w-[134px] max-h-[80px]">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right - Text */}
          <div className="lg:pt-12 order-1 lg:order-2">
            <h2 className="font-[family-name:var(--font-adamina)] text-[#28574e] text-3xl md:text-4xl text-center lg:text-start leading-tight">
              Respaldados por Líderes del Sector Salud
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
