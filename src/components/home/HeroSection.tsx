import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  // ✅ Imagem vinda de /public/brand (compatível com base do GH Pages)
  const heroLogo = import.meta.env.BASE_URL + "brand/hero-logo.png"

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* fundo (gradiente + grid) */}
      <div className="absolute inset-0 bg-[#071a2f]" />
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(240,178,71,0.16),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* esquerda */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80">
              ✨ Inteligência Artificial & Automação
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
              Transforme sua <br />
              empresa com <br />
              <span className="text-[#f0b247]">soluções</span> <br />
              <span className="text-[#f0b247]">inteligentes</span>
            </h1>

            <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
              Sistemas prontos de IA e MVPs que automatizam processos financeiros,
              fiscais e estratégicos. Reduza custos, ganhe tempo e tome decisões
              com dados reais.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#produtos"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-[#f0b247] text-black hover:opacity-90 transition"
              >
                Ver Soluções <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <a
                href="#personalizada"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition"
              >
                Solicitar Projeto
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-3xl font-extrabold text-[#f0b247]">4+</div>
                <div className="text-xs text-white/65 mt-1">Soluções Prontas</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#f0b247]">IA</div>
                <div className="text-xs text-white/65 mt-1">Tecnologia Avançada</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#f0b247]">100%</div>
                <div className="text-xs text-white/65 mt-1">Personalizável</div>
              </div>
            </div>

            <div className="mt-10 h-px bg-white/10" />
          </div>

          {/* direita */}
          <div className="lg:justify-self-end w-full">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="rounded-2xl bg-white p-6">
                <img
                  src={heroLogo}
                  alt="JVR Soluções Inteligentes"
                  className="w-full h-[240px] object-contain"
                  loading="eager"
                  onError={(e) => {
                    // fallback visual (pra você identificar rápido se o caminho falhar online)
                    ;(e.currentTarget as HTMLImageElement).style.display = "none"
                  }}
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
