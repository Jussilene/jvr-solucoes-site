import { Outlet, Link, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: "smooth", block: "start" })
}

export default function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === "/"
  const [headerOnDark, setHeaderOnDark] = useState(true)

  // ✅ usa a logo da pasta /public/brand (funciona em DEV e GitHub Pages)
  const base = import.meta.env.BASE_URL || "/"
  const logoPrimary = `${base}brand/logo-jvr.png`
  const logoFallback = `${base}brand/logo.png`

  // Detecta se está no topo/hero para manter header com estilo "Base44"
  useEffect(() => {
    if (!isHome) {
      setHeaderOnDark(false)
      return
    }

    const hero = document.getElementById("hero")
    const heroHeight = hero?.offsetHeight ?? 600

    const onScroll = () => {
      const y = window.scrollY || 0
      setHeaderOnDark(y < heroHeight - 80)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isHome])

  const headerClass = useMemo(() => {
    // Sobre o hero (escuro): transparente + blur + texto claro
    if (headerOnDark) {
      return "bg-transparent text-white"
    }
    // Fora do hero (claro): branco/translúcido + texto escuro
    return "bg-white/75 text-slate-900 shadow-sm backdrop-blur-md"
  }, [headerOnDark])

  const navLinkClass = cn(
    "text-sm font-medium transition-colors opacity-90 hover:opacity-100"
  )

  const onNav = (id: string) => {
    if (!isHome) {
      navigate("/")
      // espera renderizar e rola
      setTimeout(() => scrollToId(id), 60)
      return
    }
    scrollToId(id)
  }

  return (
    <div className="min-h-screen">
      {/* HEADER (sempre visível) */}
      <header className={cn("fixed inset-x-0 top-0 z-50", headerClass)}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            {/* ✅ logo corrigida (antes: /src/assets/logo-jvr.png) */}
            <img
              src={logoPrimary}
              alt="JVR"
              className={cn(
                "h-8 w-auto object-contain",
                // melhora nitidez (evita esticar)
                "image-render-auto"
              )}
              draggable={false}
              onError={(e) => {
                ;(e.currentTarget as HTMLImageElement).src = logoFallback
              }}
            />
            <div className="leading-tight">
              <div className={cn("text-sm font-semibold", headerOnDark ? "text-white" : "text-slate-900")}>
                JVR
              </div>
              <div className={cn("text-xs", headerOnDark ? "text-white/70" : "text-slate-600")}>
                Soluções Inteligentes
              </div>
            </div>
          </Link>

          {/* Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            <button className={navLinkClass} onClick={() => onNav("produtos")}>
              Produtos
            </button>
            <button className={navLinkClass} onClick={() => onNav("personalizada")}>
              Personalizada
            </button>
            <button className={navLinkClass} onClick={() => onNav("sobre")}>
              Sobre
            </button>
            <button className={navLinkClass} onClick={() => onNav("contato")}>
              Contato
            </button>
          </nav>

          {/* CTA */}
          <button
            onClick={() => onNav("contato")}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-colors",
              "bg-[hsl(var(--brand))] text-slate-900 hover:bg-[hsl(var(--brand-2))]"
            )}
          >
            Fale Conosco
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* FOOTER (Base44-like completo) */}
      <footer className="text-white">
        <div className="bg-[#061a37]">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="grid gap-10 md:grid-cols-4">
              {/* Brand */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  {/* ✅ logo corrigida (antes: /src/assets/logo-jvr.png) */}
                  <img
                    src={logoPrimary}
                    alt="JVR"
                    className={cn("h-7 w-auto object-contain image-render-auto")}
                    draggable={false}
                    onError={(e) => {
                      ;(e.currentTarget as HTMLImageElement).src = logoFallback
                    }}
                  />
                  <div className="leading-tight">
                    <div className="text-lg font-semibold">JVR</div>
                    <div className="text-xs text-white/60">Soluções Inteligentes</div>
                  </div>
                </div>

                <p className="text-sm text-white/70 max-w-sm leading-relaxed">
                  Transformando empresas com Inteligência Artificial e automação de processos.
                </p>
              </div>

              {/* Navegação */}
              <div className="space-y-3">
                <div className="text-sm font-semibold">Navegação</div>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><button onClick={() => onNav("produtos")} className="hover:text-white">Produtos</button></li>
                  <li><button onClick={() => onNav("personalizada")} className="hover:text-white">Soluções Personalizadas</button></li>
                  <li><button onClick={() => onNav("sobre")} className="hover:text-white">Sobre Nós</button></li>
                  <li><button onClick={() => onNav("contato")} className="hover:text-white">Contato</button></li>
                </ul>
              </div>

              {/* Soluções (faltava) */}
              <div className="space-y-3">
                <div className="text-sm font-semibold">Soluções</div>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><button onClick={() => onNav("produtos")} className="hover:text-white">IA Conciliador Bancário</button></li>
                  <li><button onClick={() => onNav("produtos")} className="hover:text-white">IA Conciliação Fornecedores</button></li>
                  <li><button onClick={() => onNav("produtos")} className="hover:text-white">MVP Notas Fiscais</button></li>
                  <li><button onClick={() => onNav("produtos")} className="hover:text-white">IA Análise de Mercado</button></li>
                </ul>
              </div>

              {/* Contato */}
              <div className="space-y-3">
                <div className="text-sm font-semibold">Contato</div>
                <ul className="space-y-3 text-sm text-white/70">
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 icon-mono" />
                    contato@jvrsolucoes.com.br
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 icon-mono" />
                    (41) 99507-1438
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 icon-mono" />
                    Curitiba, PR
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="text-xs text-white/50">
                © {new Date().getFullYear()} JVR Soluções Inteligentes. CNPJ: 00.000.000/0001-00. Todos os direitos reservados.
              </div>

              <div className="flex gap-6 text-xs text-white/60">
                <Link to="/termos" className="hover:text-white">Termos de Uso</Link>
                <Link to="/privacidade" className="hover:text-white">Política de Privacidade</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
