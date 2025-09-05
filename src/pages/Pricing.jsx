import { Check } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="px-6 py-12 text-center">
      <h2 className="text-3xl font-bold">Preços</h2>
      <p className="mt-4 text-slate-600 max-w-xl mx-auto">
        Escolha um plano que funcione para você. (Página de demonstração 🚀)
      </p>
      <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center items-stretch">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`flex-1 bg-white rounded-xl shadow p-8 border ${
              plan.highlight ? "border-blue-600 scale-105" : "border-slate-200"
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
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded ${
                plan.highlight
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-800"
              } font-semibold`}
            >
              Escolher
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
