import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";

const resources = [
  {
    title: "Configuração Rápida",
    content: "Vite + Tailwind v4 + Framer Motion em minutos.",
  },
  {
    title: "Stack Moderna",
    content: "Construa com as ferramentas e práticas mais recentes.",
  },
  {
    title: "Animações Lindas",
    content: "Transições suaves impulsionadas pelo Framer Motion.",
  },
  {
    title: "Responsividade",
    content: "Todo o template completamente responsivo para qualquer tela.",
  },
  {
    title: "Modularidade",
    content: "Feito com a modularidade no centro de tudo.",
  },
  {
    title: "Componentização",
    content:
      "Criado já com alguns componentes, como sections, cards, Navbars... e mais!",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero ainda como antes */}
      <Section
        title="Recursos"
        subtitle="Tudo que você precisa para construir interfaces modernas rapidamente."
        center
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((res) => (
            <Card key={res.title} title={res.title} content={res.content} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Home;
