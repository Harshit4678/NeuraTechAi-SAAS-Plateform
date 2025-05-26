import { useState } from "react";
import { motion as Motion } from "framer-motion";

export default function Pricing() {
  const [billing, setBilling] = useState("Monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      title: "Basic",
      price: billing === "Monthly" ? "Free" : "Free",
      features: ["Core Tools", "Community Access"],
    },
    {
      title: "Pro",
      price: billing === "Monthly" ? "₹899/mo" : "₹8990/yr",
      features: ["All Basic Features", "Automation Tools", "Support"],
    },
    {
      title: "Enterprise",
      price: billing === "Monthly" ? "₹2999/mo" : "₹29990/yr",
      features: ["All Pro Features", "Custom Workflows", "Priority Support"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Pricing Plans
        </h2>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center mb-10 gap-2">
          <span className={billing === "Monthly" ? "font-semibold" : ""}>
            Monthly
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={billing === "Yearly"}
              onChange={() =>
                setBilling(billing === "Monthly" ? "Yearly" : "Monthly")
              }
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition"></div>
            <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></span>
          </label>
          <span className={billing === "Yearly" ? "font-semibold" : ""}>
            Yearly
          </span>
        </div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              onClick={() => setSelectedPlan(i)}
              className={`cursor-pointer bg-white p-6 rounded-xl shadow-md transform transition-transform hover:shadow-xl ${
                selectedPlan === i
                  ? "border-2 border-blue-600 ring-2 ring-blue-100"
                  : "hover:-translate-y-2"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-700">
                {plan.title}
              </h3>
              <p className="text-3xl font-bold text-blue-600 my-4">
                {plan.price}
              </p>
              <ul className="text-gray-600 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="py-1">
                    ✅ {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition"
              >
                Choose Plan
              </a>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
