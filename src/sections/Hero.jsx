import { motion as Motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LottieAnimation from "../components/LottieAnimation";

const carouselData = [
  {
    img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    title: "AI Task Automation",
    desc: "Let MindForge handle all the boring repetitive stuff with precision.",
  },
  {
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    title: "Smart Team Sync",
    desc: "Collaborate in real-time with intuitive workflows and AI integration.",
  },
  {
    img: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4",
    title: "Actionable Insights",
    desc: "Get data-driven insights to supercharge your decision making.",
  },
];

export default function Hero() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [titleText, setTitleText] = useState("");
  const [paraText, setParaText] = useState("");
  const [current, setCurrent] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const fullTitle = "Empowering Teams with AI Tools";
  const fullPara =
    "MindForge AI helps your team automate tasks, enhance productivity, and deliver smarter results — faster.";

  useEffect(() => {
    let tIndex = 0;
    let pIndex = 0;

    const typeTitle = () => {
      if (tIndex <= fullTitle.length) {
        setTitleText(fullTitle.slice(0, tIndex));
        tIndex++;
        setTimeout(typeTitle, 60);
      } else {
        typePara();
      }
    };

    const typePara = () => {
      if (pIndex <= fullPara.length) {
        setParaText(fullPara.slice(0, pIndex));
        pIndex++;
        setTimeout(typePara, 20);
      } else {
        // Hide cursor after typing finishes
        setTimeout(() => {
          setShowCursor(false);
        }, 1500); // 1.5 seconds after full text typed
      }
    };

    typeTitle();
  }, []);

  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-200 pt-10 md:pt-20
 text-center px-4 transition-all duration-700 ${
   showCarousel ? "md:items-center" : "md:items-start"
 }`}
      id="home"
    >
      <div
        className={`flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto ${
          showCarousel ? "md:justify-center" : ""
        }`}
      >
        <div className={`md:w-1/2 ${showCarousel ? "text-center" : ""}`}>
          <Motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-800"
          >
            {titleText}
            {showCursor && <span className="blinking-cursor">|</span>}
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-gray-600 text-lg max-w-xl mx-auto"
          >
            {paraText}
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
        </div>

        {!showCarousel && (
          <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
            <LottieAnimation
              src="/animations/ai-robot.json"
              className="w-[360px] md:w-[480px]"
            />
          </div>
        )}
      </div>

      {showCarousel && (
        <div className="mt-12 max-w-[95%] sm:max-w-[90%] relative overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait">
            <Motion.div
              key={carouselData[0].img + current}
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

          <div className="flex justify-center mt-4 space-x-2">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full focus:outline-none ${
                  index === current ? "bg-blue-600" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
