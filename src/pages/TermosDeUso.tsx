import { Link } from "react-router-dom"

const sections = [
  {
    title: "1. Objeto e escopo",
    paragraphs: [
      "Estes Termos de Uso regulam o acesso e a utilizacao do site institucional da JVR Solucoes Inteligentes, incluindo paginas, formularios, conteudos e canais de contato disponibilizados ao publico.",
      "Ao navegar neste site ou enviar informacoes por meio dos formularios, o usuario declara que leu, compreendeu e concorda com as disposicoes aqui previstas.",
    ],
  },
  {
    title: "2. Uso adequado da plataforma",
    paragraphs: [
      "O usuario compromete-se a utilizar o site de forma licita, etica e compativel com a legislacao vigente, abstendo-se de praticar atos que possam comprometer a seguranca, a disponibilidade ou a integridade da plataforma.",
      "Nao e permitido utilizar este site para envio de conteudo ilicito, ofensivo, fraudulento, enganoso ou que viole direitos de terceiros.",
    ],
  },
  {
    title: "3. Informacoes e propostas comerciais",
    paragraphs: [
      "Os dados enviados por meio dos formularios de contato, interesse ou solicitacao de projeto poderao ser utilizados para atendimento comercial, esclarecimento de duvidas, avaliacao de demanda e elaboracao de propostas.",
      "O envio de uma solicitacao pelo site nao gera obrigacao de contratacao, aprovacao automatica de proposta ou garantia de disponibilidade imediata dos servicos.",
    ],
  },
  {
    title: "4. Propriedade intelectual",
    paragraphs: [
      "Todos os elementos deste site, incluindo textos, identidade visual, marcas, logotipos, layout, componentes graficos e demais materiais, pertencem a JVR Solucoes Inteligentes ou sao utilizados mediante autorizacao.",
      "E vedada a reproducao, distribuicao, adaptacao, exploracao comercial ou qualquer outro uso sem autorizacao previa e expressa, salvo nas hipoteses legalmente permitidas.",
    ],
  },
  {
    title: "5. Limitacao de responsabilidade",
    paragraphs: [
      "A JVR Solucoes Inteligentes adota esforcos razoaveis para manter as informacoes atualizadas e o site em funcionamento adequado. Ainda assim, nao garante ausencia de falhas tecnicas, indisponibilidades temporarias ou erros eventuais.",
      "O uso das informacoes publicadas neste site e de responsabilidade do usuario, que deve avaliar a adequacao dos conteudos ao seu contexto antes de tomar decisoes de negocio, tecnicas ou comerciais.",
    ],
  },
  {
    title: "6. Links e servicos de terceiros",
    paragraphs: [
      "Este site pode utilizar servicos de terceiros para hospedagem, envio de mensagens, analytics ou integracoes operacionais. A utilizacao desses servicos segue criterios tecnicos e operacionais da plataforma.",
      "Quando houver links externos, a JVR Solucoes Inteligentes nao se responsabiliza por conteudos, politicas ou praticas mantidas por sites de terceiros.",
    ],
  },
  {
    title: "7. Atualizacoes destes Termos",
    paragraphs: [
      "Estes Termos de Uso poderao ser alterados a qualquer momento para refletir ajustes operacionais, legais ou estrategicos. A versao vigente sera sempre a publicada nesta pagina.",
      "Recomenda-se a consulta periodica deste documento, especialmente antes do envio de informacoes ou da solicitacao de contato comercial.",
    ],
  },
  {
    title: "8. Contato",
    paragraphs: [
      "Para duvidas relacionadas a estes Termos de Uso, solicitacoes institucionais ou assuntos juridicos, entre em contato pelo e-mail jvr.solucoes8@gmail.com.",
    ],
  },
]

export default function TermosDeUso() {
  const updatedAt = new Date().toLocaleDateString("pt-BR")

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <div className="rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
          <div className="border-b border-slate-200 px-6 py-10 md:px-10">
            <div className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Documento Institucional
            </div>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Termos de Uso
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              Este documento estabelece as condicoes de acesso e utilizacao do site da JVR Solucoes Inteligentes, com foco em transparencia, seguranca juridica e clareza na relacao com visitantes, clientes e parceiros.
            </p>
            <p className="mt-4 text-sm font-medium text-slate-500">
              Ultima atualizacao: {updatedAt}
            </p>
          </div>

          <div className="px-6 py-10 md:px-10 md:py-12">
            <div className="space-y-8">
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-6 md:px-7"
                >
                  <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 md:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <Link
                to="/"
                className="inline-flex items-center text-sm font-semibold text-slate-900 transition hover:text-amber-700"
              >
                ← Voltar para o site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
