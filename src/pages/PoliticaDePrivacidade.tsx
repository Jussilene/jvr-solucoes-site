import { Link } from "react-router-dom"

const sections = [
  {
    title: "1. Compromisso com a privacidade",
    paragraphs: [
      "A JVR Solucoes Inteligentes trata dados pessoais com responsabilidade, finalidade legitima e observancia aos principios aplicaveis da Lei Geral de Protecao de Dados Pessoais (LGPD).",
      "Esta Politica explica quais informacoes podem ser coletadas neste site, para quais finalidades sao utilizadas e quais direitos o titular pode exercer.",
    ],
  },
  {
    title: "2. Dados que podem ser coletados",
    paragraphs: [
      "Podemos coletar dados fornecidos diretamente pelo usuario nos formularios do site, como nome, e-mail, telefone, empresa e descricao da demanda apresentada.",
      "Tambem podem ser coletados dados tecnicos e operacionais relacionados a navegacao, como endereco IP, tipo de dispositivo, navegador utilizado, data e horario de acesso, sempre de forma compativel com a finalidade do servico.",
    ],
  },
  {
    title: "3. Finalidades do tratamento",
    paragraphs: [
      "Os dados pessoais podem ser utilizados para responder contatos recebidos, avaliar interesses comerciais, elaborar propostas, prestar atendimento, melhorar a comunicacao com o publico e aperfeicoar a experiencia de navegacao no site.",
      "Nao utilizamos os dados para finalidades incompatíveis com o contexto da coleta ou sem base legal adequada.",
    ],
  },
  {
    title: "4. Compartilhamento de dados",
    paragraphs: [
      "A JVR Solucoes Inteligentes nao comercializa dados pessoais. Eventual compartilhamento pode ocorrer apenas com operadores e fornecedores essenciais para hospedagem, mensageria, analytics, suporte tecnico ou execucao de servicos relacionados ao funcionamento do site.",
      "Sempre que houver compartilhamento, ele sera limitado ao minimo necessario para a execucao da finalidade correspondente.",
    ],
  },
  {
    title: "5. Armazenamento e seguranca",
    paragraphs: [
      "Adotamos medidas tecnicas e administrativas razoaveis para proteger os dados pessoais contra acesso nao autorizado, perda, alteracao, divulgacao ou qualquer tratamento inadequado.",
      "Os dados sao mantidos pelo periodo necessario ao atendimento da finalidade informada, ao cumprimento de obrigacoes legais, regulatórias ou ao exercicio regular de direitos.",
    ],
  },
  {
    title: "6. Direitos do titular",
    paragraphs: [
      "Nos termos da legislacao aplicavel, o titular pode solicitar confirmacao da existencia de tratamento, acesso aos dados, correcao, atualizacao, anonimização, bloqueio, eliminacao, portabilidade, revogacao de consentimento e demais direitos previstos em lei.",
      "As solicitacoes podem ser encaminhadas para jvr.solucoes8@gmail.com, acompanhadas de informacoes suficientes para identificacao do titular e analise adequada do pedido.",
    ],
  },
  {
    title: "7. Cookies e tecnologias semelhantes",
    paragraphs: [
      "O site pode utilizar cookies e tecnologias correlatas para funcionamento tecnico, melhoria de desempenho, analise estatistica de uso e aperfeicoamento da experiencia do usuario.",
      "O visitante pode configurar o navegador para bloquear ou remover cookies, observando que determinadas funcionalidades podem ser impactadas por essa escolha.",
    ],
  },
  {
    title: "8. Atualizacoes desta Politica",
    paragraphs: [
      "Esta Politica de Privacidade pode ser revisada periodicamente para refletir alteracoes legais, tecnicas ou operacionais. A versao mais recente estara sempre disponivel nesta pagina.",
    ],
  },
]

export default function PoliticaDePrivacidade() {
  const updatedAt = new Date().toLocaleDateString("pt-BR")

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <div className="rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
          <div className="border-b border-slate-200 px-6 py-10 md:px-10">
            <div className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Protecao de Dados
            </div>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Politica de Privacidade
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              Esta Politica descreve de forma objetiva como a JVR Solucoes Inteligentes coleta, utiliza, armazena e protege dados pessoais tratados por meio deste site institucional.
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
                className="inline-flex items-center text-sm font-semibold text-slate-900 transition hover:text-sky-700"
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
