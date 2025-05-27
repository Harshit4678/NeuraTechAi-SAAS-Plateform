import { motion as Motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import LottieAnimation from "../components/LottieAnimation";

const features = [
  {
    title: "Smart Automation",
    desc: "AI-powered workflows to handle tasks for you.",
  },
  {
    title: "Real-Time Insights",
    desc: "Get live metrics and predictive data instantly.",
  },
  {
    title: "Easy Integration",
    desc: "Connect MindForge with your favorite tools.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <Motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Powerful Features Designed for You
        </Motion.h2>

        {/* Lottie Animation added here */}
        <div className="flex justify-center mt-10">
          <LottieAnimation
            src="/animations/ai-assistant.json"
            className="w-52 h-52"
          />
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Motion.div
              key={index}
              className="p-6 border rounded-xl shadow hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircleIcon className="h-10 w-10 text-blue-600 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.desc}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
