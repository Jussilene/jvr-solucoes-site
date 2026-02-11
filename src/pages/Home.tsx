import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  ArrowRight,
  Brain,
  Building2,
  ReceiptText,
  BarChart3,
  Lightbulb,
  Code2,
  Settings,
  Zap,
  ShieldCheck,
  Target,
  Users,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import InterestModal from "@/components/InterestModal"
import emailjs from "@emailjs/browser"

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: "smooth", block: "start" })
}

type Product = {
  tag: string
  title: string
  desc: string
  bullets: string[]
  icon: React.ReactNode
  iconBg: string
  iconColor: string
}

const products: Product[] = [
  {
    tag: "Inteligência Artificial",
    title: "IA Conciliador Bancário",
    desc: "Automatize a conciliação bancária com IA. Compare extratos, identifique divergências e reconcilie lançamentos em segundos.",
    bullets: [
      "Conciliação automática de extratos",
      "Identificação de divergências",
      "Relatórios detalhados",
      "Integração com sistemas contábeis",
    ],
    icon: <Brain className="h-6 w-6" />,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    tag: "Inteligência Artificial",
    title: "IA Conciliação de Fornecedores",
    desc: "Gerencie e concilie pagamentos a fornecedores com precisão. A IA cruza dados de notas, boletos e pagamentos automaticamente.",
    bullets: [
      "Cruzamento automático de dados",
      "Controle de pagamentos e vencimentos",
      "Alertas de inconsistências",
      "Dashboard de fornecedores",
    ],
    icon: <Building2 className="h-6 w-6" />,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    tag: "MVP / Automação",
    title: "MVP Captura de Notas Fiscais de Serviços",
    desc: "Capture, organize e gerencie NFS-e — recebidas, emitidas e canceladas — de forma automática e organizada em pastas.",
    bullets: [
      "Captura automática de NFS-e",
      "Separação: recebidas, emitidas, canceladas",
      "Organização em pastas inteligentes",
      "Exportação e relatórios",
    ],
    icon: <ReceiptText className="h-6 w-6" />,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    tag: "Inteligência Artificial",
    title: "IA Análise de Mercado & Redução de Custos",
    desc: "Análise inteligente de balancetes empresariais com sugestões estratégicas de melhorias operacionais e redução de custos.",
    bullets: [
      "Análise de balancetes com IA",
      "Sugestões de redução de custos",
      "Insights de mercado personalizados",
      "Relatórios estratégicos",
    ],
    icon: <BarChart3 className="h-6 w-6" />,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
]

export default function Home() {
  // ✅ AJUSTE: estado do modal (só isso)
  const [interestOpen, setInterestOpen] = useState(false)
  const [interestProductTitle, setInterestProductTitle] = useState("")

  const openInterest = (productTitle: string) => {
    setInterestProductTitle(productTitle)
    setInterestOpen(true)
  }

  // ✅ NOVO: states do "Solicite seu projeto"
  const [projName, setProjName] = useState("")
  const [projEmail, setProjEmail] = useState("")
  const [projPhone, setProjPhone] = useState("")
  const [projCompany, setProjCompany] = useState("")
  const [projMessage, setProjMessage] = useState("")
  const [projSending, setProjSending] = useState(false)

  // ✅ NOVO: states do "Fale conosco"
  const [contactName, setContactName] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactMessage, setContactMessage] = useState("")
  const [contactSending, setContactSending] = useState(false)

  // ✅ NOVO: função de envio (mesmo EmailJS do modal)
  const sendEmail = async (payload: {
    nome: string
    email: string
    phone?: string
    empresa?: string
    title: string
    message: string
  }) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
    const emailTo = (import.meta.env.VITE_EMAIL_TO as string) || ""

    // garante que o "para" exista no template (se você usar {{to_email}})
    const params = {
      ...payload,
      to_email: emailTo,
    }

    return emailjs.send(serviceId, templateId, params, publicKey)
  }

  // ✅ NOVO: submit "Solicite seu projeto"
  const onSubmitProject = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!projName.trim() || !projEmail.trim()) return

    try {
      setProjSending(true)
      await sendEmail({
        nome: projName,
        email: projEmail,
        phone: projPhone,
        empresa: projCompany,
        title: "Solicitação de projeto (Sob medida)",
        message: projMessage,
      })

      // limpa
      setProjName("")
      setProjEmail("")
      setProjPhone("")
      setProjCompany("")
      setProjMessage("")
    } catch (err) {
      console.error("Erro ao enviar solicitação:", err)
    } finally {
      setProjSending(false)
    }
  }

  // ✅ NOVO: submit "Fale conosco"
  const onSubmitContact = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!contactName.trim() || !contactEmail.trim()) return

    try {
      setContactSending(true)
      await sendEmail({
        nome: contactName,
        email: contactEmail,
        phone: "",
        empresa: "",
        title: "Mensagem via Fale Conosco",
        message: contactMessage,
      })

      // limpa
      setContactName("")
      setContactEmail("")
      setContactMessage("")
    } catch (err) {
      console.error("Erro ao enviar mensagem:", err)
    } finally {
      setContactSending(false)
    }
  }

  return (
    <>
      {/* ✅ Modal (igual ao print) */}
      <InterestModal
        open={interestOpen}
        onClose={() => setInterestOpen(false)}
        productTitle={interestProductTitle}
      />

      {/* HERO */}
      <section id="hero" className="hero-bg bg-grid-fine">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <Badge className="bg-white/10 text-white border-white/15 px-4 py-1.5 rounded-full">
                <Sparkles className="h-4 w-4 mr-2" />
                Inteligência Artificial & Automação
              </Badge>

              <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">
                Transforme sua <br />
                empresa com <br />
                <span className="text-brand">soluções</span> <br />
                <span className="text-brand">inteligentes</span>
              </h1>

              <p className="text-white/70 max-w-xl">
                Sistemas prontos de IA e MVPs que automatizam processos financeiros, fiscais e estratégicos.
                Reduza custos, ganhe tempo e tome decisões com dados reais.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  className="rounded-full bg-[hsl(var(--brand))] text-slate-900 hover:bg-[hsl(var(--brand-2))]"
                  onClick={() => scrollToId("produtos")}
                >
                  Ver Soluções <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
                  onClick={() => scrollToId("personalizada")}
                >
                  Solicitar Projeto
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-6 max-w-xl">
                <div>
                  <div className="text-3xl font-bold text-brand">4+</div>
                  <div className="text-xs text-white/60">Soluções Prontas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand">IA</div>
                  <div className="text-xs text-white/60">Tecnologia Avançada</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand">100%</div>
                  <div className="text-xs text-white/60">Personalizável</div>
                </div>
              </div>
            </div>

            {/* Logo / mock */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-md">
                <div className="rounded-2xl bg-white p-8">
                  <img
                    src="/src/assets/logo-jvr.png"
                    alt="JVR Soluções Inteligentes"
                    className="mx-auto h-40 w-auto object-contain"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="text-center">
            <div className="text-xs font-semibold tracking-[0.25em] text-brand">NOSSOS PRODUTOS</div>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">Soluções prontas para sua empresa</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Sistemas de IA e MVPs desenvolvidos para resolver problemas reais do dia a dia empresarial,
              com implementação rápida e resultados imediatos.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {products.map((p) => (
              <Card key={p.title} className="rounded-2xl border-slate-200 shadow-sm">
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-2xl ${p.iconBg} p-3`}>
                      <div className={p.iconColor}>{p.icon}</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Badge className="bg-slate-100 text-slate-700 border border-slate-200 rounded-full">
                      {p.tag}
                    </Badge>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{p.desc}</p>

                  <ul className="mt-5 space-y-3 text-sm text-slate-600">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[hsl(var(--brand))]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    {/* ✅ AJUSTE: onClick abre modal */}
                    <Button
                      className="w-full rounded-full bg-[#061a37] text-white hover:bg-[#052048]"
                      onClick={() => openInterest(p.title)}
                      type="button"
                    >
                      Tenho Interesse <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONALIZADA */}
      <section id="personalizada" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <div className="text-xs font-semibold tracking-[0.25em] text-brand">SOB MEDIDA</div>
              <h2 className="mt-3 text-4xl font-bold text-slate-900">Precisa de uma solução personalizada?</h2>
              <p className="mt-4 text-slate-600 max-w-xl">
                Se nenhum dos nossos produtos atende 100% à sua necessidade, desenvolvemos uma solução exclusiva para a sua empresa.
                Da ideia à implementação — com tecnologia de ponta.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                    <Lightbulb className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Entendemos</div>
                    <div className="text-sm text-slate-600">Analisamos sua necessidade e mapeamos processos</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                    <Code2 className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Desenvolvemos</div>
                    <div className="text-sm text-slate-600">Criamos a solução sob medida com IA e automação</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                    <Settings className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Implementamos</div>
                    <div className="text-sm text-slate-600">Entregamos, treinamos sua equipe e damos suporte</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">Solicite seu projeto</h3>

                <form onSubmit={onSubmitProject}>
                  <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Input placeholder="Seu nome *" value={projName} onChange={(e) => setProjName(e.target.value)} />
                    <Input placeholder="Seu e-mail *" value={projEmail} onChange={(e) => setProjEmail(e.target.value)} />
                    <Input placeholder="Telefone" value={projPhone} onChange={(e) => setProjPhone(e.target.value)} />
                    <Input placeholder="Nome da empresa" value={projCompany} onChange={(e) => setProjCompany(e.target.value)} />
                  </div>

                  <div className="mt-4">
                    <Textarea
                      placeholder="Descreva sua necessidade, qual problema quer resolver, qual área da empresa..."
                      className="min-h-[120px]"
                      value={projMessage}
                      onChange={(e) => setProjMessage(e.target.value)}
                    />
                  </div>

                  <Button
                    className="mt-6 w-full rounded-full bg-[hsl(var(--brand))] text-slate-900 hover:bg-[hsl(var(--brand-2))]"
                    type="submit"
                    disabled={projSending}
                  >
                    {projSending ? "Enviando..." : <>Enviar Solicitação <ArrowRight className="ml-2 h-4 w-4" /></>}
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-[#061a37] text-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="text-center">
            <div className="text-xs font-semibold tracking-[0.25em] text-brand">SOBRE NÓS</div>
            <h2 className="mt-3 text-4xl font-bold">Por que a JVR Soluções Inteligentes?</h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Somos especialistas em desenvolver sistemas com Inteligência Artificial e MVPs que resolvem desafios reais de empresas,
              com foco em processos financeiros, fiscais e estratégicos.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { title: "Inovação", desc: "Tecnologia de ponta aplicada a problemas reais", icon: <Zap className="h-5 w-5 text-brand" /> },
              { title: "Confiança", desc: "Segurança e transparência em cada entrega", icon: <ShieldCheck className="h-5 w-5 text-brand" /> },
              { title: "Resultado", desc: "Foco em ROI e impacto mensurável", icon: <Target className="h-5 w-5 text-brand" /> },
              { title: "Parceria", desc: "Trabalhamos lado a lado com sua equipe", icon: <Users className="h-5 w-5 text-brand" /> },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                  {item.icon}
                </div>
                <div className="mt-5 text-center">
                  <div className="text-xl font-semibold">{item.title}</div>
                  <div className="mt-2 text-sm text-white/60">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="text-center">
            <div className="text-xs font-semibold tracking-[0.25em] text-brand">CONTATO</div>
            <h2 className="mt-3 text-5xl font-bold text-slate-900">Fale conosco</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Tem dúvidas ou quer saber mais sobre nossas soluções? Entre em contato e responderemos rapidamente.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-slate-700" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">E-mail</div>
                  <div className="font-semibold text-slate-900">contato@jvrsolucoes.com.br</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-slate-700" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Telefone</div>
                  <div className="font-semibold text-slate-900">(41) 99507-1438</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-slate-700" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Localização</div>
                  <div className="font-semibold text-slate-900">Curitiba, PR</div>
                </div>
              </div>
            </div>

            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <div className="p-8">
                <form onSubmit={onSubmitContact}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Input placeholder="Seu nome *" value={contactName} onChange={(e) => setContactName(e.target.value)} />
                    <Input placeholder="Seu e-mail *" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
                  </div>
                  <div className="mt-4">
                    <Textarea
                      placeholder="Sua mensagem..."
                      className="min-h-[150px]"
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                    />
                  </div>
                  <Button
                    className="mt-6 w-full rounded-full bg-[#061a37] text-white hover:bg-[#052048]"
                    type="submit"
                    disabled={contactSending}
                  >
                    {contactSending ? "Enviando..." : <>Enviar Mensagem <ArrowRight className="ml-2 h-4 w-4" /></>}
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
