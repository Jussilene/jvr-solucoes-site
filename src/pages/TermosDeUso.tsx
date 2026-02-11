import { Link } from "react-router-dom"

export default function TermosDeUso() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-14">
        <h1 className="text-4xl font-bold text-slate-900">Termos de Uso</h1>
        <p className="mt-3 text-slate-600">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="prose prose-slate max-w-none mt-10">
          <p>
            Estes Termos de Uso regulam o acesso e a utilização do site da <strong>JVR Soluções Inteligentes</strong>.
            Ao navegar neste site, você concorda com os termos abaixo.
          </p>

          <h2>1. Uso do site</h2>
          <p>
            Você se compromete a utilizar o site de forma lícita, sem violar direitos de terceiros,
            sem tentar explorar vulnerabilidades, e sem interferir no funcionamento do serviço.
          </p>

          <h2>2. Conteúdo e propriedade intelectual</h2>
          <p>
            Textos, marcas, layout e demais conteúdos exibidos podem estar protegidos por direitos autorais e/ou propriedade intelectual.
            É proibida a reprodução sem autorização prévia, salvo quando permitido por lei.
          </p>

          <h2>3. Propostas e contato</h2>
          <p>
            Informações enviadas via formulários (ex.: solicitação de projeto) serão usadas para retorno comercial/atendimento.
            A JVR pode solicitar dados adicionais para entendimento do escopo.
          </p>

          <h2>4. Limitação de responsabilidade</h2>
          <p>
            Embora busquemos manter informações corretas e o site disponível, não garantimos ausência de falhas, interrupções ou imprecisões.
            O uso do site é de responsabilidade do usuário.
          </p>

          <h2>5. Alterações</h2>
          <p>
            Podemos atualizar estes Termos a qualquer momento. Recomenda-se revisá-los periodicamente.
          </p>

          <h2>6. Contato</h2>
          <p>
            Para dúvidas sobre estes termos: <strong>contato@jvrsolucoes.com.br</strong>.
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
