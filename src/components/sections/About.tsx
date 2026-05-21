
export function About() {
  return (
    <section id="about" className="pb-20 -mt-80 md:-mt-20 lg:-mt-0 lg:pb-28">
      <div className="max-w-[1252px] mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Headline */}
          <div>
            <h2 className="font-[family-name:var(--font-adamina)] text-[#28574e] text-3xl md:text-4xl lg:text-[40px] leading-tight">
              Un modelo clínico diseñado para ti, no para el sistema
            </h2>
          </div>

          {/* Right Column - Description */}
          <div>
            <p className="text-[#757575] text-md leading-relaxed">
              QOL Clinical es un centro clínico integral especializado en el manejo de condiciones crónicas.
              Nuestro equipo multidisciplinario evalúa tu estado de salud completo, revisa tus tratamientos
              y construye contigo un plan jerarquizado, claro y sostenible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
