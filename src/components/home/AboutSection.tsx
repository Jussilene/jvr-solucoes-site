export default function AboutSection() {
  return (
    <section id="sobre" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#071a2f]" />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#f0b247] text-center">
          SOBRE NÓS
        </p>

        <h2 className="mt-4 text-5xl font-extrabold tracking-tight text-white text-center">
          Por que a JVR Soluções Inteligentes?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-white/70 leading-relaxed">
          Somos especialistas em desenvolver sistemas com Inteligência Artificial e MVPs que resolvem
          desafios reais de empresas, com foco em processos financeiros, fiscais e estratégicos.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Inovação", desc: "Tecnologia de ponta aplicada a problemas reais" },
            { title: "Confiança", desc: "Segurança e transparência em cada entrega" },
            { title: "Resultado", desc: "Foco em ROI e impacto mensurável" },
            { title: "Parceria", desc: "Trabalhamos lado a lado com sua equipe" },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
            >
              <div className="mx-auto h-14 w-14 rounded-2xl bg-white/10" />
              <div className="mt-6 text-xl font-semibold text-white">{c.title}</div>
              <div className="mt-3 text-sm text-white/65 leading-relaxed">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
