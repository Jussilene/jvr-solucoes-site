import React, { useState } from "react"
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
  Send,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import InterestModal from "@/components/InterestModal"
import { sendLeadEmail } from "@/lib/sendLeadEmail"

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
    desc: "Capture, organize e gerencie NFS-e - recebidas, emitidas e canceladas - de forma automática e organizada em pastas.",
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
  const [interestOpen, setInterestOpen] = useState(false)
  const [interestProductTitle, setInterestProductTitle] = useState("")

  const openInterest = (productTitle: string) => {
    setInterestProductTitle(productTitle)
    setInterestOpen(true)
  }

  const [projName, setProjName] = useState("")
  const [projEmail, setProjEmail] = useState("")
  const [projPhone, setProjPhone] = useState("")
  const [projCompany, setProjCompany] = useState("")
  const [projMessage, setProjMessage] = useState("")
  const [projSending, setProjSending] = useState(false)

  const [contactName, setContactName] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactMessage, setContactMessage] = useState("")
  const [contactSending, setContactSending] = useState(false)

  const sendEmail = async (payload: {
    nome: string
    email: string
    phone?: string
    empresa?: string
    title: string
    message: string
  }) =>
    sendLeadEmail({
      name: payload.nome,
      email: payload.email,
      phone: payload.phone,
      company: payload.empresa,
      title: payload.title,
      message: payload.message,
      source: "Formulario principal do site",
    })

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
      <InterestModal
        open={interestOpen}
        onClose={() => setInterestOpen(false)}
        productTitle={interestProductTitle}
      />

      <section
        id="hero"
        className="relative flex min-h-[92vh] items-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#132744] to-[#1B3A5C]"
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#E8A838]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[#3b6cb5]/15 blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-14 lg:px-8 lg:pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Sparkles className="h-4 w-4 text-[#E8A838]" />
                <span className="text-sm text-white/70">Inteligência Artificial & Automação</span>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Transforme sua empresa com{" "}
                <span className="bg-gradient-to-r from-[#E8A838] to-[#f0c36d] bg-clip-text text-transparent">
                  soluções inteligentes
                </span>
              </h1>

              <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/60">
                Sistemas prontos de IA e MVPs que automatizam processos financeiros, fiscais e estratégicos.
                Reduza custos, ganhe tempo e tome decisões com dados reais.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  className="rounded-xl bg-[#E8A838] px-8 py-6 text-base font-semibold text-[#0a1628] shadow-lg shadow-[#E8A838]/20 transition-all hover:bg-[#d4952e] hover:shadow-xl hover:shadow-[#E8A838]/30"
                  onClick={() => scrollToId("produtos")}
                >
                  Ver Soluções <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  className="rounded-xl border-white/20 bg-transparent px-8 py-6 text-base text-white transition-all hover:bg-white/10"
                  onClick={() => scrollToId("personalizada")}
                >
                  Solicitar Projeto
                </Button>
              </div>

              <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
                <div>
                  <p className="text-2xl font-bold text-[#E8A838]">4+</p>
                  <p className="mt-1 text-xs text-white/50">Soluções Prontas</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#E8A838]">IA</p>
                  <p className="mt-1 text-xs text-white/50">Tecnologia Avançada</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#E8A838]">100%</p>
                  <p className="mt-1 text-xs text-white/50">Personalizável</p>
                </div>
              </div>
            </div>

            <div className="hidden justify-center lg:flex">
              <div className="relative">
                <div className="absolute inset-0 scale-110 rounded-3xl bg-gradient-to-br from-[#E8A838]/20 to-[#3b6cb5]/20 blur-xl" />
                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
                  <img
                    src={import.meta.env.BASE_URL + "brand/logo-jvr.png"}
                    alt="JVR Soluções Inteligentes"
                    className="w-full max-w-[420px]"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="produtos" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="text-center">
            <div className="text-xs font-semibold tracking-[0.25em] text-brand">NOSSOS PRODUTOS</div>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">Soluções prontas para sua empresa</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Sistemas de IA e MVPs desenvolvidos para resolver problemas reais do dia a dia empresarial,
              com implementação rápida e resultados imediatos.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {products.map((p) => (
              <Card
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:border-[#E8A838]/30 hover:shadow-xl hover:shadow-[#E8A838]/5"
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#1B3A5C] to-[#E8A838] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-2xl ${p.iconBg} p-3`}>
                      <div className={p.iconColor}>{p.icon}</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Badge
                      variant="outline"
                      className="pointer-events-none rounded-full border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-100 hover:text-slate-700"
                    >
                      {p.tag}
                    </Badge>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.desc}</p>

                  <ul className="mt-5 space-y-3 text-sm text-slate-600">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[hsl(var(--brand))]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <Button
                      className="group/btn w-full rounded-xl bg-[#113860] text-white transition-all duration-300 hover:bg-[#0f3358]"
                      onClick={() => openInterest(p.title)}
                      type="button"
                    >
                      Tenho Interesse <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="personalizada" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <div className="text-xs font-semibold tracking-[0.25em] text-brand">SOB MEDIDA</div>
              <h2 className="mt-3 text-4xl font-bold text-slate-900">Precisa de uma solução personalizada?</h2>
              <p className="mt-4 max-w-xl text-slate-600">
                Se nenhum dos nossos produtos atende 100% à sua necessidade, desenvolvemos uma solução exclusiva para a sua empresa.
                Da ideia à implementação com tecnologia de ponta.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                    <Lightbulb className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Entendemos</div>
                    <div className="text-sm text-slate-600">Analisamos sua necessidade e mapeamos processos</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                    <Code2 className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Desenvolvemos</div>
                    <div className="text-sm text-slate-600">Criamos a solução sob medida com IA e automação</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                    <Settings className="h-5 w-5 text-slate-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Implementamos</div>
                    <div className="text-sm text-slate-600">Entregamos, treinamos sua equipe e damos suporte</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="rounded-3xl border-slate-200 bg-slate-50 shadow-sm">
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
                    className="mt-6 w-full rounded-xl bg-[hsl(var(--brand))] text-slate-900 hover:bg-[hsl(var(--brand-2))]"
                    type="submit"
                    disabled={projSending}
                  >
                    {projSending ? "Enviando..." : <>Enviar Solicitação <Send className="ml-2 h-4 w-4" /></>}
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="sobre" className="relative overflow-hidden bg-[#0a1628] py-24 text-white">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#E8A838]/5 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="text-xs font-semibold tracking-[0.25em] text-brand">SOBRE NÓS</div>
            <h2 className="mt-3 text-4xl font-bold">Por que a JVR Soluções Inteligentes?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Somos especialistas em desenvolver sistemas com Inteligência Artificial e MVPs que resolvem desafios reais de empresas,
              com foco em processos financeiros, fiscais e estratégicos.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Inovação", desc: "Tecnologia de ponta aplicada a problemas reais", icon: <Zap className="h-5 w-5 text-brand" /> },
              { title: "Confiança", desc: "Segurança e transparência em cada entrega", icon: <ShieldCheck className="h-5 w-5 text-brand" /> },
              { title: "Resultado", desc: "Foco em ROI e impacto mensurável", icon: <Target className="h-5 w-5 text-brand" /> },
              { title: "Parceria", desc: "Trabalhamos lado a lado com sua equipe", icon: <Users className="h-5 w-5 text-brand" /> },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
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

      <section id="contato" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="text-center">
            <div className="text-xs font-semibold tracking-[0.25em] text-brand">CONTATO</div>
            <h2 className="mt-3 text-5xl font-bold text-slate-900">Fale conosco</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Tem dúvidas ou quer saber mais sobre nossas soluções? Entre em contato e responderemos rapidamente.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                  <Mail className="h-5 w-5 text-slate-700" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">E-mail</div>
                  <div className="font-semibold text-slate-900">jvr.solucoes8@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                  <Phone className="h-5 w-5 text-slate-700" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Telefone</div>
                  <div className="font-semibold text-slate-900">(41) 99507-1438</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
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
                    className="mt-6 w-[230px] rounded-xl bg-[#113860] text-white hover:bg-[#0f3358]"
                    type="submit"
                    disabled={contactSending}
                  >
                    {contactSending ? "Enviando..." : <>Enviar Mensagem <Send className="ml-2 h-4 w-4" /></>}
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
