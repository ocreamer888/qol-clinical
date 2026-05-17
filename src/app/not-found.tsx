import Link from "next/link";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { waConsultaGratis } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#28574e] flex flex-col items-center justify-center px-8 text-center">
      <p className="text-white/50 text-sm uppercase tracking-widest mb-4">404</p>
      <h1 className="font-[family-name:var(--font-adamina)] text-white text-4xl md:text-5xl mb-6 max-w-[600px]">
        Esta página no existe
      </h1>
      <p className="text-white/70 text-lg mb-10 max-w-[480px]">
        Puede que el enlace esté roto o que la página haya sido movida. Vuelve al inicio o contáctanos directamente.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Link
          href="/"
          className="rounded-full bg-white text-[#28574e] font-medium px-8 py-3 hover:bg-white/90 transition-colors"
        >
          Volver al inicio
        </Link>
        <WhatsAppButton
          message={waConsultaGratis()}
          className="rounded-full border border-white/40 text-white px-8 py-3 hover:border-white/70 transition-colors"
        >
          Hablar con un especialista
        </WhatsAppButton>
      </div>
    </main>
  );
}
