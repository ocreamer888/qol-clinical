"use client";

import Image from "next/image";
import { Button } from "../ui/Button";

export function ContactForm() {
  return (
    <section id="contact" className="bg-[#f8f8f8] py-20 lg:py-28">
      <div className="flex justify-center items-center max-w-[1237px] mx-auto px-8 lg:px-12">
          {/* Form Content */}
          <div className="relative z-10 p-8 lg:p-16 max-w-[700px] bg-[#dad2c7] rounded-[40px]">
            <h2 className="font-[family-name:var(--font-adamina)] text-[#28574e] text-3xl md:text-4xl mb-10">
              Agenda Consulta Gratis
            </h2>

            <form className="space-y-4">
              {/* First Row - First Name & Last Name */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full h-[77px] bg-white rounded-full border border-[#d3d3d3] px-10 text-lg text-black placeholder:text-[#969696] focus:outline-none focus:border-[#28574e]"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="w-full h-[77px] bg-white rounded-full border border-[#d3d3d3] px-10 text-lg text-black placeholder:text-[#969696] focus:outline-none focus:border-[#28574e]"
                  />
                </div>
              </div>

              {/* Second Row - Email & Mobile */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="w-full h-[77px] bg-white rounded-full border border-[#d3d3d3] px-10 text-lg text-black placeholder:text-[#969696] focus:outline-none focus:border-[#28574e]"
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Número de Teléfono"
                    className="w-full h-[77px] bg-white rounded-full border border-[#d3d3d3] px-10 text-lg text-black placeholder:text-[#969696] focus:outline-none focus:border-[#28574e]"
                  />
                </div>
              </div>

              {/* Country Dropdown */}
              <div className="relative">
                <select
                  className="w-full h-[76px] bg-white rounded-full border border-[#d3d3d3] px-10 text-lg text-[#969696] focus:outline-none focus:border-[#28574e] appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>País</option>
                  <option value="cr">Costa Rica</option>
                  <option value="us">Estados Unidos</option>
                  <option value="ca">Canadá</option>
                  <option value="uk">Reino Unido</option>
                  <option value="de">Alemania</option>
                  <option value="fr">Francia</option>
                  <option value="it">Italia</option>
                  <option value="es">España</option>
                  <option value="mx">México</option>
                  <option value="co">Colombia</option>
                  <option value="ar">Argentina</option>
                  <option value="other">Otro</option>
                </select>
                {/* Dropdown Arrow */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-[#969696]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="w-full h-[213px] bg-white/60 rounded-[34px] border border-[#d3d3d3] px-10 py-6 text-lg text-black placeholder:text-[#969696] focus:outline-none focus:border-[#28574e] resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button variant="dark" size="md" type="submit">
                Enviar
              </Button>
            </form>
          </div>
        </div>
    </section>
  );
}
