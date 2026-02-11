import { Link } from "react-router-dom"

export default function PoliticaDePrivacidade() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-14">
        <h1 className="text-4xl font-bold text-slate-900">Política de Privacidade</h1>
        <p className="mt-3 text-slate-600">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="prose prose-slate max-w-none mt-10">
          <p>
            Esta Política descreve como a <strong>JVR Soluções Inteligentes</strong> trata dados pessoais coletados neste site,
            em conformidade com boas práticas e princípios da LGPD.
          </p>

          <h2>1. Quais dados coletamos</h2>
          <ul>
            <li>Dados fornecidos em formulários: nome, e-mail, telefone, empresa e descrição da necessidade.</li>
            <li>Dados técnicos básicos: navegador, dispositivo, páginas acessadas (quando houver analytics).</li>
          </ul>

          <h2>2. Para que usamos os dados</h2>
          <ul>
            <li>Responder solicitações e contatos.</li>
            <li>Entender necessidades e elaborar propostas de serviços/projetos.</li>
            <li>Melhorar a experiência do site e a comunicação (quando aplicável).</li>
          </ul>

          <h2>3. Compartilhamento</h2>
          <p>
            Não vendemos seus dados. Podemos compartilhar com fornecedores estritamente necessários (ex.: e-mail/hosting),
            sempre com finalidade legítima e mínima.
          </p>

          <h2>4. Retenção e segurança</h2>
          <p>
            Mantemos dados apenas pelo tempo necessário para atendimento/obrigações legais e aplicamos medidas de segurança razoáveis.
          </p>

          <h2>5. Seus direitos</h2>
          <p>
            Você pode solicitar acesso, correção, exclusão e informações sobre tratamento de dados por meio do e-mail:
            <strong> contato@jvrsolucoes.com.br</strong>.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Podemos utilizar cookies para funcionamento e métricas. Você pode controlar cookies no seu navegador.
          </p>

          <h2>7. Alterações</h2>
          <p>
            Esta Política pode ser atualizada periodicamente.
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
