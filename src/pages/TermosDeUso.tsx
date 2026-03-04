import { Link } from "react-router-dom"

export default function TermosDeUso() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-14">
        <h1 className="text-4xl font-bold text-slate-900">Termos de Uso</h1>
        <p className="mt-3 text-slate-600">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="prose prose-slate mt-10 max-w-none">
          <p>
            Estes Termos de Uso regulam o acesso e a utilização do site da <strong>JVR Soluções Inteligentes</strong>.
            Ao navegar neste site, você declara que leu, compreendeu e concorda com as disposições abaixo.
          </p>

          <h2>1. Uso do site</h2>
          <p>
            O usuário compromete-se a utilizar este site de forma lícita, ética e em conformidade com a legislação aplicável,
            sem praticar atos que prejudiquem terceiros, comprometam a segurança da plataforma ou interfiram na sua disponibilidade.
          </p>

          <h2>2. Conteúdo e propriedade intelectual</h2>
          <p>
            Todos os conteúdos, incluindo textos, marcas, identidade visual, layout e materiais disponibilizados, são protegidos por
            direitos autorais e de propriedade intelectual. É vedada a reprodução, distribuição ou uso sem autorização prévia,
            salvo hipóteses legalmente permitidas.
          </p>

          <h2>3. Propostas e contato</h2>
          <p>
            As informações enviadas por formulários poderão ser utilizadas para atendimento, contato comercial e elaboração de propostas.
            Quando necessário, poderemos solicitar dados complementares para melhor entendimento da demanda.
          </p>

          <h2>4. Limitação de responsabilidade</h2>
          <p>
            Empregamos esforços razoáveis para manter o site atualizado e disponível. Ainda assim, não garantimos ausência de falhas
            técnicas, indisponibilidades temporárias ou imprecisões eventuais. O uso do site é de responsabilidade do usuário.
          </p>

          <h2>5. Alterações</h2>
          <p>
            Estes Termos podem ser atualizados a qualquer tempo, sem aviso prévio. Recomendamos a revisão periódica desta página.
          </p>

          <h2>6. Contato</h2>
          <p>
            Para dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail: <strong>jvr.solucoes8@gmail.com</strong>.
          </p>
        </div>

        <div className="mt-10">
          <Link to="/" className="text-sm font-semibold text-slate-900 hover:underline">
            ← Voltar para o site
          </Link>
        </div>
      </div>
    </div>
  )
}
