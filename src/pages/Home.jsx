import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";

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
          <Card
            title="Configuração Rápida"
            content="Vite + Tailwind v4 + Framer Motion em minutos.
"
          />
          <Card
            title="Stack Moderna"
            content="Construa com as ferramentas e práticas mais recentes.

"
          />
          <Card
            title="Animações Lindas"
            content="Transições suaves impulsionadas pelo Framer Motion."
          />

          <Card
            title="Responsividade"
            content=" Todo o template completamente responsivo para qualquer tela. "
          />

          <Card
            title="Modularidade"
            content="Feito com a modularidade no centro de tudo."
          />
          <Card
            title="Componetização"
            content="Criado com ja alguns componentes, como sections, cards, Navbars... e mais!"
          />
        </div>
      </Section>
    </>
  );
};

export default Home;
