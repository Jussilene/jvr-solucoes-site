import { useEffect, useState } from "react"

const links = [
  { label: "Produtos", href: "#produtos" },
  { label: "Personalizada", href: "#personalizada" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  // ✅ usa a MESMA logo que já funciona no HERO
  const base = import.meta.env.BASE_URL || "/"
  const logoPrimary = `${base}brand/logo-jvr.png`
  const logoFallback = `${base}brand/logo.png`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all",
        scrolled
          ? "bg-white/90 backdrop-blur border-b border-black/5"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={logoPrimary}
            alt="JVR"
            className="h-7 w-auto object-contain"
            loading="eager"
            draggable={false}
            onError={(e) => {
              ;(e.currentTarget as HTMLImageElement).src = logoFallback
            }}
          />
          <div className="leading-tight">
            <div
              className={[
                "font-semibold tracking-tight",
                scrolled ? "text-[#0b1a2a]" : "text-white",
              ].join(" ")}
            >
              JVR
            </div>
            <div
              className={[
                "text-xs",
                scrolled ? "text-black/50" : "text-white/70",
              ].join(" ")}
            >
              Soluções Inteligentes
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={[
                "text-sm transition",
                scrolled
                  ? "text-black/60 hover:text-black"
                  : "text-white/75 hover:text-white",
              ].join(" ")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium bg-[#f0b247] text-black hover:opacity-90 transition"
        >
          Fale Conosco
        </a>
      </div>
    </header>
  )
}
