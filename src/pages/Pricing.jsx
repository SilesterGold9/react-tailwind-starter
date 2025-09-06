import Section from "../components/Section";
import PricingCard from "../components/PricingCard";

const plans = [
  {
    name: "Básico",
    price: "R$29/mês",
    features: ["1 projeto", "Suporte por email", "Acesso básico"],
    highlight: false,
  },
  {
    name: "Profissional",
    price: "R$79/mês",
    features: ["10 projetos", "Suporte prioritário", "Acesso completo"],
    highlight: true,
  },
  {
    name: "Empresarial",
    price: "R$199/mês",
    features: [
      "Projetos ilimitados",
      "Gerente de conta dedicado",
      "Integrações avançadas",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <Section
      title="Preços"
      subtitle="Escolha um plano que funcione para você. (Página de demonstração 🚀)"
      center
    >
      <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center items-stretch">
        {plans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
    </Section>
  );
};

export default Pricing;
