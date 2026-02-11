import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import InterestModal from "./InterestModal";

function IconBrain() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 5a3 3 0 0 1 6 0v1a3 3 0 0 1 2 5v2a3 3 0 0 1-2 5v1a3 3 0 0 1-6 0v-1a3 3 0 0 1-2-5v-2a3 3 0 0 1 2-5V5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function IconDoc() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 12h8M8 16h6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconReceipt() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 3h10v18l-2-1-2 1-2-1-2 1-2-1-2 1V3Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 19V5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 17v-6M12 17v-9M16 17v-4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

type Product = { pill: string; title: string };

export default function ProductsSection() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);

  const products = useMemo(
    () => [
      {
        icon: <IconBrain />,
        pill: "Inteligência Artificial",
        title: "IA Conciliador Bancário",
        description:
          "Automatize a conciliação bancária com IA. Compare extratos, identifique divergências e reconcilie lançamentos em segundos.",
        bullets: [
          "Conciliação automática de extratos",
          "Identificação de divergências",
          "Relatórios detalhados",
          "Integração com sistemas contábeis",
        ],
      },
      {
        icon: <IconDoc />,
        pill: "Inteligência Artificial",
        title: "IA Conciliação de Fornecedores",
        description:
          "Gerencie e concilie pagamentos a fornecedores com precisão. A IA cruza dados de notas, boletos e pagamentos automaticamente.",
        bullets: [
          "Cruzamento automático de dados",
          "Controle de pagamentos e vencimentos",
          "Alertas de inconsistências",
          "Dashboard de fornecedores",
        ],
      },
      {
        icon: <IconReceipt />,
        pill: "MVP / Automação",
        title: "MVP Captura de Notas Fiscais de Serviços",
        description:
          "Capture, organize e gerencie NFS-e — recebidas, emitidas e canceladas — de forma automática e organizada em pastas.",
        bullets: [
          "Captura automática de NFS-e",
          "Separação: recebidas, emitidas, canceladas",
          "Organização em pastas inteligentes",
          "Exportação e relatórios",
        ],
      },
      {
        icon: <IconChart />,
        pill: "Inteligência Artificial",
        title: "IA Análise de Mercado & Redução de Custos",
        description:
          "Análise inteligente de balancetes empresariais com sugestões estratégicas de melhorias operacionais e redução de custos.",
        bullets: [
          "Análise de balancetes com IA",
          "Sugestões de redução de custos",
          "Insights de mercado personalizados",
          "Relatórios estratégicos",
        ],
      },
    ],
    []
  );

  function openLeadModal(p: Product) {
    setSelected({ pill: p.pill, title: p.title });
    setOpen(true);
  }

  return (
    <section id="produtos" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#f0b247]">
            NOSSOS PRODUTOS
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#0b1a2a]">
            Soluções prontas para sua empresa
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-black/60">
            Sistemas de IA e MVPs desenvolvidos para resolver problemas reais do dia a dia
            empresarial, com implementação rápida e resultados imediatos.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {products.map((p) => (
            <ProductCard
              key={p.title}
              icon={p.icon}
              pill={p.pill}
              title={p.title}
              description={p.description}
              bullets={p.bullets}
              onCtaClick={() => openLeadModal({ pill: p.pill, title: p.title })}
            />
          ))}
        </div>
      </div>

      <InterestModal
        open={open}
        onOpenChange={setOpen}
        productTitle={selected?.title ?? "Produto"}
      />
    </section>
  );
}
