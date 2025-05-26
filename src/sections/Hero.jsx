import { motion as Motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const carouselData = [
  {
    img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7", // AI automation image
    title: "AI Task Automation",
    desc: "Let NeuraTech handle all the boring repetitive stuff with precision.",
  },
  {
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692", // Teamwork
    title: "Smart Team Sync",
    desc: "Collaborate in real-time with intuitive workflows and AI integration.",
  },
  {
    img: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4", // Analytics dashboard
    title: "Actionable Insights",
    desc: "Get data-driven insights to supercharge your decision making.",
  },
];

export default function Hero() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!showCarousel) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [showCarousel]);

  return (
    <section
      className=" min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200 pt-20 text-center px-4"
      id="home"
    >
      <Motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-gray-800"
      >
        Empowering Teams with <span className="text-blue-600">AI</span> Tools
      </Motion.h1>

      <Motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-gray-600 max-w-xl mx-auto"
      >
        NeuraTech AI helps your team automate tasks, enhance productivity, and
        deliver smarter results — faster.
      </Motion.p>

      {!showCarousel && (
        <Motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowCarousel(true)}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
        >
          Get Started
        </Motion.button>
      )}

      {/* Carousel Starts Here */}
      {showCarousel && (
        <div className="mt-12 max-w-[95%] sm:max-w-[90%]  relative overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <Motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center overflow-hidden"
            >
              <img
                src={carouselData[current].img}
                alt={carouselData[current].title}
                className="w-full md:w-1/2 h-48 md:h-96 object-cover"
              />
              <div className="p-6 text-left md:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {carouselData[current].title}
                </h3>
                <p className="text-gray-600">{carouselData[current].desc}</p>
              </div>
            </Motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {carouselData.map((_, index) => (
              <div
                key={index}
                className={`h-3 w-3 rounded-full ${
                  index === current ? "bg-blue-600" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
