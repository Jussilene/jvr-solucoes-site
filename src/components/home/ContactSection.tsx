import { Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contato" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#f0b247] text-center">
          CONTATO
        </p>

        <h2 className="mt-4 text-5xl font-extrabold tracking-tight text-[#0b1a2a] text-center">
          Fale conosco
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-black/60 leading-relaxed">
          Tem dúvidas ou quer saber mais sobre nossas soluções? Entre em contato e responderemos rapidamente.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* left info */}
          <div className="space-y-5">
            <div className="flex gap-4 items-center">
              <div className="h-14 w-14 rounded-2xl bg-black/[0.04] grid place-items-center">✉️</div>
              <div>
                <div className="text-sm text-black/50">E-mail</div>
                <div className="font-semibold text-[#0b1a2a]">contato@jvrsolucoes.com.br</div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="h-14 w-14 rounded-2xl bg-black/[0.04] grid place-items-center">📞</div>
              <div>
                <div className="text-sm text-black/50">Telefone</div>
                <div className="font-semibold text-[#0b1a2a]">(41) 99507-1438</div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="h-14 w-14 rounded-2xl bg-black/[0.04] grid place-items-center">📍</div>
              <div>
                <div className="text-sm text-black/50">Localização</div>
                <div className="font-semibold text-[#0b1a2a]">Curitiba, PR — Brasil</div>
              </div>
            </div>
          </div>

          {/* right form */}
          <div className="rounded-3xl border border-black/5 bg-black/[0.02] p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="h-12 rounded-xl border border-black/10 bg-white px-4 outline-none focus:ring-2 focus:ring-black/10" placeholder="Seu nome *" />
              <input className="h-12 rounded-xl border border-black/10 bg-white px-4 outline-none focus:ring-2 focus:ring-black/10" placeholder="Seu e-mail *" />
            </div>

            <textarea
              className="mt-4 min-h-[180px] w-full rounded-xl border border-black/10 bg-white p-4 outline-none focus:ring-2 focus:ring-black/10"
              placeholder="Sua mensagem..."
            />

            <button className="mt-6 w-full h-14 rounded-xl bg-[#0a2a4a] text-white font-semibold hover:opacity-90 transition inline-flex items-center justify-center">
              Enviar Mensagem <Send className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
