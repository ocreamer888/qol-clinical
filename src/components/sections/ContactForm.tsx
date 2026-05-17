"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import { buildWhatsAppHref, waContactForm } from "@/lib/whatsapp";

interface FormFields {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  pais: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  telefono?: string;
}

export function ContactForm() {
  const [fields, setFields] = useState<FormFields>({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    pais: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!fields.nombre.trim()) e.nombre = "El nombre es requerido.";
    if (!fields.email.trim()) {
      e.email = "El correo es requerido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = "Ingrese un correo válido.";
    }
    if (!fields.telefono.trim()) e.telefono = "El teléfono es requerido.";
    return e;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const message = waContactForm(
      fields.nombre,
      fields.apellido,
      fields.email,
      fields.telefono,
      fields.pais,
      fields.mensaje
    );
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
    const href = buildWhatsAppHref(phone, message);
    if (href) window.open(href, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full h-[77px] bg-white rounded-full border border-[#d3d3d3] px-10 text-lg text-black placeholder:text-[#969696] focus:outline-none focus:border-[#28574e]";
  const errorClass = "text-red-600 text-sm mt-1 pl-4";

  return (
    <section id="contact" className="bg-[#f8f8f8] py-20 lg:py-28">
      <div className="flex justify-center items-center max-w-[1237px] mx-auto px-8 lg:px-12">
        <div className="relative z-10 p-8 lg:p-16 max-w-[700px] w-full bg-[#dad2c7] rounded-[40px]">
          <h2 className="font-[family-name:var(--font-adamina)] text-[#28574e] text-3xl md:text-4xl mb-10">
            Agenda Consulta Gratis
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {/* First Row - First Name & Last Name */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={fields.nombre}
                  onChange={handleChange}
                  className={inputClass}
                  aria-invalid={!!errors.nombre}
                />
                {errors.nombre && <p className={errorClass}>{errors.nombre}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  value={fields.apellido}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Second Row - Email & Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  value={fields.email}
                  onChange={handleChange}
                  className={inputClass}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Número de Teléfono"
                  value={fields.telefono}
                  onChange={handleChange}
                  className={inputClass}
                  aria-invalid={!!errors.telefono}
                />
                {errors.telefono && <p className={errorClass}>{errors.telefono}</p>}
              </div>
            </div>

            {/* Country Dropdown */}
            <div className="relative">
              <select
                name="pais"
                value={fields.pais}
                onChange={handleChange}
                className="w-full h-[76px] bg-white rounded-full border border-[#d3d3d3] px-10 text-lg text-[#969696] focus:outline-none focus:border-[#28574e] appearance-none cursor-pointer"
              >
                <option value="" disabled>País</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Estados Unidos">Estados Unidos</option>
                <option value="Canadá">Canadá</option>
                <option value="Reino Unido">Reino Unido</option>
                <option value="Alemania">Alemania</option>
                <option value="Francia">Francia</option>
                <option value="Italia">Italia</option>
                <option value="España">España</option>
                <option value="México">México</option>
                <option value="Colombia">Colombia</option>
                <option value="Argentina">Argentina</option>
                <option value="Otro">Otro</option>
              </select>
              <div className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-[#969696]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Message Textarea */}
            <textarea
              name="mensaje"
              placeholder="Mensaje"
              rows={4}
              value={fields.mensaje}
              onChange={handleChange}
              className="w-full h-[213px] bg-white/60 rounded-[34px] border border-[#d3d3d3] px-10 py-6 text-lg text-black placeholder:text-[#969696] focus:outline-none focus:border-[#28574e] resize-none"
            />

            <Button variant="dark" size="md" type="submit">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
