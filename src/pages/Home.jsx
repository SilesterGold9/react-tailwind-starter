import Section from "../components/Section.jsx";

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
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Configuração Rápida</h3>
            <p className="mt-2 text-slate-600">
              Vite + Tailwind v4 + Framer Motion em minutos.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Stack Moderna</h3>
            <p className="mt-2 text-slate-600">
              Construa com as ferramentas e práticas mais recentes.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Animações Lindas</h3>
            <p className="mt-2 text-slate-600">
              Transições suaves impulsionadas pelo Framer Motion.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
