import { Link } from "react-router-dom"

export default function PoliticaDePrivacidade() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-14">
        <h1 className="text-4xl font-bold text-slate-900">Política de Privacidade</h1>
        <p className="mt-3 text-slate-600">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="prose prose-slate mt-10 max-w-none">
          <p>
            Esta Política descreve como a <strong>JVR Soluções Inteligentes</strong> trata dados pessoais coletados neste site,
            em conformidade com os princípios da Lei Geral de Proteção de Dados (LGPD).
          </p>

          <h2>1. Quais dados coletamos</h2>
          <ul>
            <li>Dados fornecidos em formulários: nome, e-mail, telefone, empresa e descrição da necessidade.</li>
            <li>Dados técnicos básicos: navegador, dispositivo e páginas acessadas (quando houver ferramentas de análise).</li>
          </ul>

          <h2>2. Finalidades do tratamento</h2>
          <ul>
            <li>Responder solicitações e contatos recebidos pelo site.</li>
            <li>Entender necessidades e elaborar propostas de serviços/projetos.</li>
            <li>Melhorar a experiência do site e a comunicação com o público.</li>
          </ul>

          <h2>3. Compartilhamento de dados</h2>
          <p>
            Não comercializamos dados pessoais. O compartilhamento poderá ocorrer apenas com fornecedores essenciais à operação
            (por exemplo, hospedagem e serviços de e-mail), sempre dentro de finalidade legítima e mínima necessária.
          </p>

          <h2>4. Retenção e segurança</h2>
          <p>
            Os dados são mantidos somente pelo período necessário ao atendimento e ao cumprimento de obrigações legais,
            com adoção de medidas técnicas e administrativas de segurança compatíveis.
          </p>

          <h2>5. Direitos do titular</h2>
          <p>
            Você pode solicitar acesso, correção, atualização ou exclusão de dados pessoais, observadas as hipóteses legais,
            pelo e-mail <strong>jvr.solucoes8@gmail.com</strong>.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Podemos utilizar cookies para funcionamento e métricas de navegação. Você pode gerenciar essas permissões no seu navegador.
          </p>

          <h2>7. Alterações desta política</h2>
          <p>
            Esta Política poderá ser atualizada periodicamente. Recomendamos consulta regular desta página.
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
