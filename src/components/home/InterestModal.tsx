import React, { useEffect, useMemo, useState } from "react"
import { X, Send } from "lucide-react"
import { sendLeadEmail } from "@/lib/sendLeadEmail"

type Props = {
  open: boolean
  onClose: () => void
  productTitle: string
}

export default function InterestModal({ open, onClose, productTitle }: Props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const modalTitle = useMemo(() => {
    const title = productTitle?.trim() || ""
    return `Interesse: ${title}`
  }, [productTitle])

  // ESC fecha
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  // trava scroll
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  if (!open) return null

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    try {
      setLoading(true)

      await sendLeadEmail({
        title: `Novo interesse: ${productTitle || "Produto"}`,
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || undefined,
        company: company.trim() || undefined,
        message: message.trim() || undefined,
        source: "Interesse (Modal)",
      })

      setName("")
      setEmail("")
      setPhone("")
      setCompany("")
      setMessage("")
      onClose()
      alert("Interesse enviado com sucesso! ✅")
    } catch (err: any) {
      console.error(err)
      alert(err?.message || "Não foi possível enviar agora. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[80]">
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-full max-w-[760px] rounded-2xl bg-white shadow-2xl">
          <div className="relative px-10 pt-10">
            <button
              type="button"
              onClick={onClose}
              className="absolute right-6 top-6 rounded-full p-2 text-slate-500 hover:bg-slate-100"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-3xl font-bold text-slate-900 leading-tight">
              {modalTitle}
            </h3>

            <form onSubmit={onSubmit} className="mt-8 pb-10">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome *"
                  className="h-14 w-full rounded-xl border border-slate-200 px-5 text-base outline-none focus:border-slate-400"
                />

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail *"
                  type="email"
                  className="h-14 w-full rounded-xl border border-slate-200 px-5 text-base outline-none focus:border-slate-400"
                />

                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Telefone"
                  className="h-14 w-full rounded-xl border border-slate-200 px-5 text-base outline-none focus:border-slate-400"
                />

                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Sua empresa"
                  className="h-14 w-full rounded-xl border border-slate-200 px-5 text-base outline-none focus:border-slate-400"
                />
              </div>

              <div className="mt-5">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Alguma dúvida ou informação adicional?"
                  className="min-h-[150px] w-full resize-none rounded-xl border border-slate-200 px-5 py-4 text-base outline-none focus:border-slate-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-7 flex h-14 w-full items-center justify-center gap-3 rounded-xl text-base font-semibold text-slate-900 shadow-sm disabled:opacity-70"
                style={{ backgroundColor: "hsl(var(--brand))" }}
              >
                {loading ? "Enviando..." : "Confirmar Interesse"}
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
