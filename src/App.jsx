import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Features";
import ProductDemo from "./sections/ProductDemo";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-900 bg-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <ProductDemo />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
