"use client";

import Image from "next/image";

const doctors = [
  {
    id: 1,
    name: "Dr. Javier León",
    specialty: "Director Clínico",
    image: "/photos/dr-javier-leon.png",
    description:
      "Farmaceútico con sólida experiencia en gestión operativa enfocado en el sector salud y tecnología, logística de suministros, mejora de la experiencia del paciente, y operaciones de centros de servicios compartidos. Con experiencia clínica y comercial, marketing, optimización de recursos, procesos y gestión de talento. He desempeñado roles en contextos industriales y clínicos a nivel regional, con un enfoque multicultural. Todo ello orientado a la excelencia en el seguimiento farmacoterapéutico.",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="bg-[#f8f8f8] py-20 lg:py-28 rounded-t-[40px]">
      <div className="max-w-[1237px] mx-auto px-8 lg:px-12">
        <h2 className="font-[family-name:var(--font-adamina)] text-[#28574e] text-3xl md:text-4xl lg:text-[40px] text-center mb-16">
          Conoce a Nuestro Director Clínico
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-center">
          {doctors.map((doctor) => (
            <>
              {/* Photo card */}
              <div key={`img-${doctor.id}`} className="relative rounded-[28.59px] overflow-hidden aspect-square bg-[#d9d9d9]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#28574e]/30 to-[#20433d]/50" />
                <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
                <div className="absolute bottom-4 left-4 right-4 bg-black/40 border border-white/10 backdrop-blur-sm rounded-[34.31px] py-3 px-4">
                  <p className="text-white text-center text-lg font-medium">{doctor.name}</p>
                  <p className="text-white text-center text-sm font-light">{doctor.specialty}</p>
                </div>
              </div>

              {/* Description */}
              <p key={`desc-${doctor.id}`} className="text-black text-center md:text-start text-xl lg:text-2xl leading-relaxed">
                {doctor.description}
              </p>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
