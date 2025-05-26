import { motion as Motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "NeuraTech AI boosted our productivity by 40%! A must-have.",
  },
  {
    name: "Rahul Verma",
    text: "Seamless automation and brilliant insights. Great experience!",
  },
  {
    name: "Anjali Mehta",
    text: "Clean UI and powerful features. Our team loves it!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Motion.div
              key={i}
              className="p-6 border rounded-xl shadow hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-600">“{t.text}”</p>
              <p className="mt-4 font-semibold text-blue-600">{t.name}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
