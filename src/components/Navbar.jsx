import { useEffect, useState } from "react";
import { FaBrain } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo now links to #home */}
        <a
          href="#home"
          className="text-xl font-bold text-blue-600 flex items-center gap-2"
        >
          <FaBrain className="text-2xl text-blue-500" />
          MindForge AI
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>
          <a href="#features" className="hover:text-blue-600">
            Features
          </a>
          <a href="#pricing" className="hover:text-blue-600">
            Pricing
          </a>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="material-icons">{isOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <a href="#home" className="block py-2">
            Home
          </a>
          <a href="#features" className="block py-2">
            Features
          </a>
          <a href="#pricing" className="block py-2">
            Pricing
          </a>
          <a href="#about" className="block py-2">
            About
          </a>
          <a href="#contact" className="block py-2">
            Contact
          </a>
        </div>
      )}
    </Motion.header>
  );
}
