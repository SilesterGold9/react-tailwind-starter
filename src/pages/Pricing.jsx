import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Section from "../components/Section";

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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, type: "spring" },
  }),
};

const Pricing = () => {
  return (
    <Section
      title="Preços"
      subtitle="Escolha um plano que funcione para você. (Página de demonstração 🚀)"
      center
    >
      <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center items-stretch">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`flex-1 bg-white rounded-xl shadow p-8 border ${
              plan.highlight ? "border-teal-600 scale-105" : "border-slate-200"
            } transition-transform`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold mb-4">{plan.price}</div>
            <ul className="mb-6 text-slate-700 space-y-2 text-left">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded ${
                plan.highlight
                  ? "bg-teal-600 text-white"
                  : "bg-slate-100 text-slate-800"
              } font-semibold`}
            >
              Escolher
            </button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Pricing;
