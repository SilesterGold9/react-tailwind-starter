import { Check } from "lucide-react";
import Card from "./Card";

const PricingCard = ({ name, price, features, highlight }) => {
  return (
    <Card title={name} center>
      <div className="text-3xl font-bold mb-4">{price}</div>
      <ul className="mb-6 text-slate-700 space-y-2 text-left">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2 rounded ${
          highlight ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-800"
        } font-semibold`}
      >
        Escolher
      </button>
    </Card>
  );
};

export default PricingCard;
