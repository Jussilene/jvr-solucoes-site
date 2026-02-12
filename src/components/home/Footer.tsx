import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  // ✅ usa a MESMA logo que já funciona no HERO
  const base = import.meta.env.BASE_URL || "/"
  const logoPrimary = `${base}brand/logo-jvr.png`
  const logoFallback = `${base}brand/logo.png`

  return (
    <footer className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[#061a37]" />

      <div className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoPrimary}
                alt="JVR"
                className="h-7 w-auto object-contain image-render-auto"
                draggable={false}
                loading="eager"
                onError={(e) => {
                  ;(e.currentTarget as HTMLImageElement).src = logoFallback
                }}
              />
              <div className="leading-tight">
                <div className="text-lg font-semibold text-white">JVR</div>
                <div className="text-xs text-white/60">Soluções Inteligentes</div>
              </div>
            </div>

            <div className="text-sm text-white/70 leading-relaxed max-w-sm">
              Transformando empresas com Inteligência Artificial e automação de processos.
            </div>
          </div>

          {/* Navegação */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white">Navegação</div>
            <div className="space-y-2 text-sm text-white/70">
              <a className="block hover:text-white" href="#produtos">Produtos</a>
              <a className="block hover:text-white" href="#personalizada">Soluções Personalizadas</a>
              <a className="block hover:text-white" href="#sobre">Sobre Nós</a>
              <a className="block hover:text-white" href="#contato">Contato</a>
            </div>
          </div>

          {/* Soluções */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white">Soluções</div>
            <div className="space-y-2 text-sm text-white/70">
              <a className="block hover:text-white" href="#produtos">IA Conciliador Bancário</a>
              <a className="block hover:text-white" href="#produtos">IA Conciliação Fornecedores</a>
              <a className="block hover:text-white" href="#produtos">MVP Notas Fiscais</a>
              <a className="block hover:text-white" href="#produtos">IA Análise de Mercado</a>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white">Contato</div>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" style={{ color: "rgba(255,255,255,0.72)" }} />
                contato@jvrsolucoes.com.br
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" style={{ color: "rgba(255,255,255,0.72)" }} />
                (41) 99507-1438
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" style={{ color: "rgba(255,255,255,0.72)" }} />
                Curitiba, PR
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px bg-white/10" />

        <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between text-xs text-white/55">
          <div>
            © {new Date().getFullYear()} JVR Soluções Inteligentes. CNPJ: 00.000.000/0001-00. Todos os direitos reservados.
          </div>

          <div className="flex gap-6">
            <a href="/termos" className="hover:text-white">Termos de Uso</a>
            <a href="/privacidade" className="hover:text-white">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
