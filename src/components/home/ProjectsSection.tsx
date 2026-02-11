import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Grundstein BPO — Website Institucional",
    description:
      "Site institucional apresentando serviços de BPO financeiro com automação e IA.",
    imageSrc: "/assets/grundstein-bpo.png",
    href: "https://jussilene.github.io/grundstein-bpo-site/",
    tags: ["Website", "BPO", "Responsivo"],
  },
  {
    title: "IA Fornecedores PRO — Landing Page",
    description:
      "Landing moderna e responsiva para apresentar solução e benefícios da automação.",
    imageSrc: "/assets/ia-fornecedores-landing.png",
    href: "https://jussilene.github.io/ia-fornecedores-landing-pro/",
    tags: ["Landing", "Conversão"],
  },
  {
    title: "Landing IA Restaurante — Venda do Agente",
    description:
      "Landing page profissional para venda de IA via WhatsApp para restaurantes.",
    imageSrc: "/assets/landing-ia-restaurante.png",
    href: "https://jussilene.github.io/landing-ia-restaurante/",
    tags: ["WhatsApp", "IA", "Vendas"],
  },
  {
    title: "Fotolog CIC — Projeto de Extensão",
    description:
      "Fotoblog da Cidade Industrial de Curitiba com fotos, vídeos e mapa.",
    imageSrc: "/assets/fotolog-cic.png",
    href: "https://jussilene.github.io/fotolog-cic/",
    tags: ["Faculdade", "Web", "Mapa"],
  },
  {
    title: "FluxoNF — Landing",
    description:
      "Landing page do FluxoNF para apresentação e captação de leads.",
    imageSrc: "/assets/fluxonf-landing.png",
    href: "https://jussilene.github.io/fluxonf-landing/",
    tags: ["SaaS", "NFS-e"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projetos" className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">Projetos</h2>
        <p className="mt-2 text-muted-foreground">
          Alguns projetos que eu desenvolvi — sites, landings e soluções com IA.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
