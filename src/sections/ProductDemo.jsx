import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const images = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
];

export default function ProductDemo() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="py-20 bg-gray-50" id="demo">
      <div className="max-w-[98%] sm:max-w-[85%] mx-auto px-4 text-center relative">
        <Motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
        >
          See MindForge AI in Action
        </Motion.h2>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-xl shadow-lg select-none">
          <Motion.img
            key={images[current]}
            src={images[current]}
            alt={`Product Demo ${current + 1}`}
            className="w-full h-[240px]  md:h-[500px] object-cover rounded-xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
          />

          {/* Prev Button */}
          <button
            onClick={goPrev}
            aria-label="Previous"
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
          </button>

          {/* Next Button */}
          <button
            onClick={goNext}
            aria-label="Next"
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-4 h-4 rounded-full transition-colors ${
                current === i ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
