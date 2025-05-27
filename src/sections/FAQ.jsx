import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";
import LottieAnimation from "../components/LottieAnimation";

const faqs = [
  {
    q: "What is MindForge AI?",
    a: "MindForge AI is a cutting-edge productivity suite that leverages artificial intelligence to automate workflows, streamline communication, and supercharge team efficiency.",
  },
  {
    q: "Is there a free trial?",
    a: "Absolutely! Start with our free Basic plan, no credit card required. Upgrade anytime as your needs grow.",
  },
  {
    q: "Can I integrate with Slack or Notion?",
    a: "Yes, MindForge AI supports seamless integrations with Slack, Notion, Trello, and more – making your workflows smarter and more connected.",
  },
  {
    q: "Is my data secure with MindForge AI?",
    a: "We take security seriously. Your data is encrypted, and we follow industry best practices to ensure it's safe and secure.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white" id="faq">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <LottieAnimation
              src="/animations/ai-faqbot.json"
              className="w-64 h-64 lg:100 lg:100"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Everything you need to know about MindForge AI. Can’t find what
            you’re looking for? Reach out to us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isActive = active === i;
            return (
              <Motion.div
                key={i}
                onClick={() => setActive(isActive ? null : i)}
                initial={false}
                animate={{ scale: isActive ? 1.02 : 1 }}
                whileHover={{ scale: 1.03 }}
                className="border border-gray-200 rounded-lg p-5 bg-white cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-medium text-gray-800">
                    {item.q}
                  </h4>
                  <span className="text-blue-600">
                    {isActive ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                {isActive && (
                  <Motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 mt-3 leading-relaxed"
                  >
                    {item.a}
                  </Motion.p>
                )}
              </Motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
