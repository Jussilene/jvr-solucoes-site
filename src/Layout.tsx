import { Outlet, Link, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils"

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

  const base = import.meta.env.BASE_URL || "/"
  const logoPrimary = `${base}brand/logo-jvr.png`
  const logoFallback = `${base}brand/logo.png`

  useEffect(() => {
    if (!isHome) {
      setHeaderOnDark(false)
      return
    }

    const onScroll = () => {
      const hero = document.getElementById("hero")
      if (!hero) {
        setHeaderOnDark(window.scrollY < 24)
        return
      }

      const heroBottom = hero.getBoundingClientRect().bottom
      setHeaderOnDark(heroBottom > 84)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [isHome])

  const headerClass = useMemo(() => {
    if (headerOnDark) {
      return "bg-transparent text-white"
    }
    return "bg-white/95 text-slate-900 shadow-sm backdrop-blur border-b border-black/5"
  }, [headerOnDark])

  const onNav = (id: string) => {
    if (!isHome) {
      navigate("/")
      setTimeout(() => scrollToId(id), 60)
      return
    }
    scrollToId(id)
  }

  return (
    <div className="min-h-screen bg-white">
      <header className={cn("fixed inset-x-0 top-0 z-50", headerClass)}>
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
          <Link to="/" className="flex items-center">
            <img
              src={logoPrimary}
              alt="JVR"
              className="h-16 w-auto object-contain"
              draggable={false}
              onError={(e) => {
                ;(e.currentTarget as HTMLImageElement).src = logoFallback
              }}
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <button
              className={cn("text-sm font-medium transition-colors", headerOnDark ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-slate-900")}
              onClick={() => onNav("produtos")}
            >
              Produtos
            </button>
            <button
              className={cn("text-sm font-medium transition-colors", headerOnDark ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-slate-900")}
              onClick={() => onNav("personalizada")}
            >
              Personalizada
            </button>
            <button
              className={cn("text-sm font-medium transition-colors", headerOnDark ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-slate-900")}
              onClick={() => onNav("sobre")}
            >
              Sobre
            </button>
            <button
              className={cn("text-sm font-medium transition-colors", headerOnDark ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-slate-900")}
              onClick={() => onNav("contato")}
            >
              Contato
            </button>
          </nav>

          <button
            onClick={() => onNav("contato")}
            className="rounded-xl bg-[hsl(var(--brand))] px-6 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-[hsl(var(--brand-2))]"
          >
            Fale Conosco
          </button>
        </div>
      </header>

      <main className={isHome ? "pt-0" : "pt-20"}>
        <Outlet />
      </main>

      <footer className="text-white">
        <div className="bg-[#061a37]">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="grid gap-10 md:grid-cols-4">
              <div className="space-y-4">
                <img
                  src={logoPrimary}
                  alt="JVR"
                  className="h-36 w-36 object-contain object-left"
                  draggable={false}
                  onError={(e) => {
                    ;(e.currentTarget as HTMLImageElement).src = logoFallback
                  }}
                />

                <p className="max-w-sm text-sm leading-relaxed text-white/70">
                  Transformando empresas com Inteligência Artificial e automação de processos.
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-semibold">Navegação</div>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><button onClick={() => onNav("produtos")} className="hover:text-white">Produtos</button></li>
                  <li><button onClick={() => onNav("personalizada")} className="hover:text-white">Soluções Personalizadas</button></li>
                  <li><button onClick={() => onNav("sobre")} className="hover:text-white">Sobre Nós</button></li>
                  <li><button onClick={() => onNav("contato")} className="hover:text-white">Contato</button></li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-semibold">Soluções</div>
                <ul className="space-y-2 text-sm text-white/70">
                  <li><button onClick={() => onNav("produtos")} className="hover:text-white">IA Conciliador Bancário</button></li>
                  <li><button onClick={() => onNav("produtos")} className="hover:text-white">IA Conciliação Fornecedores</button></li>
                  <li><button onClick={() => onNav("produtos")} className="hover:text-white">MVP Notas Fiscais</button></li>
                  <li><button onClick={() => onNav("produtos")} className="hover:text-white">IA Análise de Mercado</button></li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-semibold">Contato</div>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>jvr.solucoes8@gmail.com</li>
                  <li>(41) 99507-1438</li>
                  <li>Curitiba, PR</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
              <div>© {new Date().getFullYear()} JVR Soluções Inteligentes. CNPJ: 00.000.000/0001-00. Todos os direitos reservados.</div>
              <div className="flex gap-6">
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
