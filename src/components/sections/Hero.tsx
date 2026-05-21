"use client";

import Image from "next/image";
import { waHablaEspecialista } from "@/lib/whatsapp";
import { WhatsAppButton } from "../WhatsAppButton";

export function Hero() {
  return (
    <section className="relative min-h-[1300px] overflow-hidden">
      {/* Hero Content */}
      <div className="absolute inset-0 w-full mx-auto bg-[#28574e] flex-1 h-[55%] rounded-b-3xl px-8 lg:px-12 pt-44 pb-16">
        {/* Main Headline */}
        <div className="relative z-10 w-full mx-auto">
        <h1 className="font-[family-name:var(--font-adamina)] text-white text-center text-4xl md:text-5xl lg:text-[48px] leading-tight max-w-[750px] mx-auto mb-2">
          Vivir con una condición crónica no significa vivir sin apoyo.
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-center text-[16px] max-w-[671px] mx-auto mb-8 leading-tight">
          En QOL Clinical te acompañamos con un equipo clínico integral, desde donde estás.
          Teleconsulta personalizada, seguimiento real, plan de salud diseñado para ti.
        </p>

        {/* CTAs — primary + WhatsApp (FarmaPlus-style) */}
        <div className="mx-auto mb-4 flex w-full max-w-[376px] flex-col items-stretch gap-2">
          <WhatsAppButton
            message={waHablaEspecialista()}
            className="flex h-[56px] w-full items-center justify-center rounded-[62px] bg-white text-[15px] text-purple-800 hover:bg-white/80"
          >
            Habla con un especialista ahora
          </WhatsAppButton>
        </div>

        {/* Tagline */}
        <p className="text-white/70 text-center text-[12px] mb-10">
          Sin filas. Sin esperas. Solo atención que te entiende.
        </p>

        {/* Hero Image Container */}
        <div className="relative w-full max-w-[900px] mx-auto">
          {/* Main Image */}
          <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl p-6 shadow-2xl">
            <Image
              src="/photos/dr-javier-leon-qol-clinical.png"
              alt="Doctor providing teleconsultation"
              width={1103}
              height={698}
              className="w-full h-auto object-cover rounded-[8px]"
              priority
              quality={100}
            />
          </div>

          {/* Floating Card - Left */}
          <div className="absolute -left-4 lg:-left-28 bottom-16 lg:bottom-70 bg-[#1e232f]/60 backdrop-blur-sm rounded-full px-6 lg:px-10 py-4 max-w-[280px] hidden md:block">
            <p className="text-white text-lg leading-tight text-center">
              Atención de primera y personalizada
            </p>
          </div>

          {/* Floating Card - Right */}
          <div className="absolute -right-4 lg:-right-20 bottom-20 bg-[#1e232f]/60 backdrop-blur-sm rounded-full px-6 lg:px-10 py-4 max-w-[280px] hidden md:block">
            <p className="text-white text-lg lg:text-[22px] leading-tight text-center">
              Acompañamiento 24/7
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
