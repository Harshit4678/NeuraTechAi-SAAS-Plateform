import { useState } from "react";
import { FaBrain } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600 flex items-center gap-2">
          <FaBrain className="text-2xl text-blue-500" />
          NeuraTech AI
        </h1>
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
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
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="material-icons">{isOpen ? "close" : "menu"}</span>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
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
    </header>
  );
}
