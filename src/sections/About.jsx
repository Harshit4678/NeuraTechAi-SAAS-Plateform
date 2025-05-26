import { motion as Motion } from "framer-motion";
import { FaBrain } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function About() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
      id="about"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Animated Icon */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6 text-blue-600 text-5xl"
        >
          <FaBrain />
        </Motion.div>

        {/* Heading */}
        <Motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          About <span className="text-blue-600">NeuraTech AI</span>
        </Motion.h2>

        {/* Paragraph */}
        <Motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8"
        >
          We’re a passionate team building smart tools for the future. With{" "}
          <span className="text-blue-600 font-semibold">AI</span> and{" "}
          <span className="text-blue-600 font-semibold">automation</span> at the
          core, NeuraTech AI empowers businesses to unlock{" "}
          <span className="text-blue-600 font-semibold">productivity</span> like
          never before.
        </Motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Join Us Button */}
          <Motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-white bg-blue-600 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Join Us Today
          </Motion.a>

          {/* Learn More Button */}
          <Motion.a
            href="#features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-5 py-3 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-100 transition duration-300"
          >
            Learn More <HiArrowNarrowRight className="text-xl" />
          </Motion.a>
        </div>
      </div>
    </section>
  );
}
