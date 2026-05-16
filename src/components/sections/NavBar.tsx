import { waConsultaGratis } from "@/lib/whatsapp";
import { WhatsAppButton } from "../WhatsAppButton";
import Image from "next/image";

export function NavBar() {
  return (
    <div className="absolute z-9999 top-4 left-0 right-0">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 lg:px-12 py-6 lg:py-4 max-w-[1200px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-white font-medium text-2xl">
            <Image
                  src="/logos/group 8.svg"
                  alt= "jaje"
                  width={150}
                  height={150}
                  className="object-contain"
                /></span>
        </div>

        {/* Nav Links
        <div className="hidden lg:flex items-center gap-6">
          <a href="#features" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
            Second Opinion
          </a>
          <a href="#treatments" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
            Medical Travel
          </a>
          <a href="#membership" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
            Clinical Trials
          </a>
          <a href="#doctors" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
            Membership Goal
          </a>
          <a href="#contact" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
            Testimonials
          </a>
          <a href="#" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
            Login
          </a>
        </div>
        */}

        <div className="flex flex-wrap items-center justify-end gap-2">
          <WhatsAppButton
            message={waConsultaGratis()}
            className="rounded-full border border-white/45 hover:border-white/70 backdrop-blur px-4 py-2 text-sm text-white md:px-[13px] md:py-3 md:text-[15px] md:leading-snug"
          >
            Consulta Gratis
          </WhatsAppButton>
        </div>
      </nav>
    </div>
  );
}
