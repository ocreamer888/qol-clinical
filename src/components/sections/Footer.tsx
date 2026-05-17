"use client";

import Link from "next/link";
import Image from "next/image";


const footerLinks = {
  about: {
    title: "Sobre QOL Clinical",
    description:
      "Hacemos compañamiento farmacéutico y clínico para todo tipo de condiciones crónicas y agudas.",
  },

  contactInfo: {
    title: "Información de Contacto",
    offices: [
      { country: "CR", location: "San José, Costa Rica", label: "Oficinas en Costa Rica" },
    ],
    email: "jchavarria@lifehubcr.com",
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Política de Privacidad", href: "/legal/privacidad" },
      { label: "Términos y Condiciones", href: "/legal/terminos" },
      { label: "Licencia", href: "/legal/licencia" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-[#f8f8f8]">
      <div className="w-full bg-[#28574e] py-16 rounded-t-[40px] mx-auto px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 pb-12 border-b border-white/20">
          {/* About Column */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">{footerLinks.about.title}</h3>
            <p className="text-white/80 text-base leading-relaxed">
              {footerLinks.about.description}
            </p>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">{footerLinks.contactInfo.title}</h3>
            <div className="space-y-4">
              {footerLinks.contactInfo.offices.map((office) => (
                <div key={office.country} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs uppercase font-medium">{office.country}</span>
                  </div>
                  <div>
                    <p className="text-white/90 text-sm font-medium">{office.label} :</p>
                    <p className="text-white/60 text-sm">{office.location}</p>
                  </div>
                </div>
              ))}
              {/* Email */}
              <div className="flex items-center gap-3 mt-4 bg-white/10 rounded-xl px-4 py-3">
                <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white/90 text-sm">{footerLinks.contactInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">{footerLinks.legal.title}</h3>
            <ul className="space-y-3">
              {footerLinks.legal.links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
          <span className="text-white font-medium text-2xl">
            <Image
                  src="/logos/Group 8.svg"
                  alt="QOL Clinical"
                  width={150}
                  height={150}
                  className="object-contain"
                /></span>
          </div>

          {/* Social Links 
          <div className="flex items-center gap-4">
            {["facebook", "twitter", "instagram", "linkedin", "youtube"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label={social}
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  {social === "facebook" && (
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  )}
                  {social === "twitter" && (
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  )}
                  {social === "instagram" && (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  )}
                  {social === "linkedin" && (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  )}
                  {social === "youtube" && (
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  )}
                </svg>
              </a>
            ))}
          </div>
            */}
          {/* Copyright */}
          <p className="text-white text-base">
            © {new Date().getFullYear()} QOL Clinical. Derechos Reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
