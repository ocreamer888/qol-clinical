import React from 'react'
import Image from 'next/image'
import { WhatsAppButton } from '../WhatsAppButton'
import { waConsultaGratis } from '@/lib/whatsapp'
export const CTAsection = () => {
  return (
    <section className="bg-[#f8f8f8] py-20 lg:py-28">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-[1237px] bg-[#dad2c7] rounded-[40px] mx-auto lg:pl-12 gap-4">
        <div className="relative flex flex-col items-start justify-center z-10 px-4 py-16 lg:px-8 w-full md:w-1/2 max-w-[700px] bg-[#dad2c7] rounded-[40px] gap-4 flex-1">
          <h2 className="font-[family-name:var(--font-adamina)] text-[#28574e] text-3xl md:text-4xl">
            Agenda Consulta Gratis
          </h2>
          
            <p className="text-text-secondary text-base leading-relaxed">
              En QOL Clinical nos comprometemos a proteger la privacidad de la información personal que nos
              proporciona. Este documento describe de forma general qué datos podemos recopilar, con qué
              fines los utilizamos y cómo puede ejercer sus derechos.
            </p>
          
          <WhatsAppButton
            message={waConsultaGratis()}
            className="flex w-full rounded-full border border-white/45 bg-[#28574e] hover:border-white/70 w-1/2 items-center justify-center backdrop-blur px-4 py-4 mt-8 text-sm text-white md:px-[12px] md:text-[16px] md:leading-snug"
          >
            Consulta Gratis
          </WhatsAppButton>
        </div>
        <div className="relative flex flex-col flex-1 items-center justify-center z-10 w-full bg-[#28574e]= pt-16 rounded-[40px]">
            <Image src="/photos/dr-javier-leon-qol-clinical-2.png" 
            alt="CTA Section" 
            width={1000} 
            height={1000} 
            className="object-cover object-center max-w-[300px] h-full rounded-[40px]" />
        </div>
      </div>
    </section>
  )
}