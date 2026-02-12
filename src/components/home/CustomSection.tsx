import React, { useState } from "react"
import { Send } from "lucide-react"
import { sendLeadEmail } from "@/lib/sendLeadEmail"

export default function CustomSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    try {
      setLoading(true)

      await sendLeadEmail({
        title: "Solicitação de Projeto (Personalizada)",
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || undefined,
        company: company.trim() || undefined,
        message: message.trim() || undefined,
        source: "Solicitação Personalizada (Seção)",
      })

      setName("")
      setEmail("")
      setPhone("")
      setCompany("")
      setMessage("")
      alert("Solicitação enviada com sucesso! ✅")
    } catch (err: any) {
      console.error(err)
      alert(err?.message || "Não foi possível enviar agora. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="personalizada" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* esquerda */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#f0b247]">
              SOB MEDIDA
            </p>

            <h2 className="mt-4 text-5xl font-extrabold tracking-tight text-[#0b1a2a] leading-[1.05]">
              Precisa de uma solução personalizada?
            </h2>

            <p className="mt-6 text-black/60 leading-relaxed max-w-xl">
              Se nenhum dos nossos produtos atende 100% à sua necessidade,
              desenvolvemos uma solução exclusiva para a sua empresa. Da ideia à
              implementação — com tecnologia de ponta.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-2xl bg-black/[0.04] grid place-items-center text-[#0b1a2a]">
                  💡
                </div>
                <div>
                  <div className="font-semibold text-[#0b1a2a]">Entendemos</div>
                  <div className="text-black/55 text-sm mt-1">
                    Analisamos sua necessidade e mapeamos processos
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-2xl bg-black/[0.04] grid place-items-center text-[#0b1a2a]">
                  {"</>"}
                </div>
                <div>
                  <div className="font-semibold text-[#0b1a2a]">Desenvolvemos</div>
                  <div className="text-black/55 text-sm mt-1">
                    Criamos a solução sob medida com IA e automação
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-2xl bg-black/[0.04] grid place-items-center text-[#0b1a2a]">
                  ⚙️
                </div>
                <div>
                  <div className="font-semibold text-[#0b1a2a]">Implementamos</div>
                  <div className="text-black/55 text-sm mt-1">
                    Entregamos, treinamos sua equipe e damos suporte
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* direita (form) */}
          <div className="rounded-3xl border border-black/5 bg-black/[0.02] p-8">
            <h3 className="text-2xl font-bold text-[#0b1a2a]">
              Solicite seu projeto
            </h3>

            <form onSubmit={onSubmit}>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="h-12 rounded-xl border border-black/10 bg-white px-4 outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="Seu nome *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="h-12 rounded-xl border border-black/10 bg-white px-4 outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="Seu e-mail *"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="h-12 rounded-xl border border-black/10 bg-white px-4 outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="Telefone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  className="h-12 rounded-xl border border-black/10 bg-white px-4 outline-none focus:ring-2 focus:ring-black/10"
                  placeholder="Nome da empresa"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <textarea
                className="mt-4 min-h-[160px] w-full rounded-xl border border-black/10 bg-white p-4 outline-none focus:ring-2 focus:ring-black/10"
                placeholder="Descreva sua necessidade, qual problema quer resolver, qual área da empresa..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full h-14 rounded-xl bg-[#f0b247] text-black font-semibold hover:opacity-90 transition inline-flex items-center justify-center disabled:opacity-70"
              >
                {loading ? "Enviando..." : "Enviar Solicitação"}{" "}
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
