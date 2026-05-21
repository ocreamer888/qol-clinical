"use client";

import Image from "next/image";
import { waTeleconsultaAgenda } from "@/lib/whatsapp";
import { WhatsAppButton } from "../WhatsAppButton";

export function CTABanner() {
  return (
    <section className="bg-[#dad2c7] pb-20 md:py-32 lg:py-28">
      <div className="max-w-[1250px] mx-auto px-2 lg:px-12">
        {/* Main container - no overflow-hidden so image can extend above */}
        <div className="relative flex flex-col justify-start md:justify-center items-start md:min-h-[200px] min-h-[420px] bg-[#1e232f] rounded-[40px]">

          {/* Content - Left Side */}
          <div className="relative flex flex-col justify-between md:justify-center items-start md:min-h-[200px] h-full min-h-[500px] z-10 p-8 lg:p-16 max-w-[400px] md:max-w-[600px]">
            <h2 className="font-[family-name:var(--font-adamina)] text-white text-3xl md:text-4xl leading-tight mb-6">
              Teleconsulta con Nuestros Profesionales
            </h2>

            <WhatsAppButton
              message={waTeleconsultaAgenda()}
              className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white text-[#244841] hover:bg-gray-100 focus:ring-white px-7 py-3.5 text-lg"
            >
              Agenda llamada
            </WhatsAppButton>
          </div>

          {/* Doctor Image - extends above the banner, clipped at bottom */}
          <div className="absolute right-8 lg:right-12 bottom-0 w-[55%] lg:w-full min-h-[350px] overflow-hidden">
            <Image
              src="/photos/dr-javier-leon-qol-clinical-2.png"
              alt="Medical professional"
              fill
              loading="lazy"
              className="object-contain object-right-bottom w-full h-full"
            />
          </div>

          {/* Phone Icon Overlay */}
          <div className="hidden md:block absolute right-[35%] md:right-[22%] md:top-[40%] z-20">
            <div className="relative">
              {/* Inner circle with icon */}
              <div className="relative w-[100px] h-[100px] bg-gradient-to-br from-white/40 to-white/20 rounded-full flex items-center justify-center border border-white/10 backdrop-blur">
                <div className="w-[55px] h-[55px] rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
