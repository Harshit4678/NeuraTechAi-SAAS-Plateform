import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaBrain,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-10 text-center md:text-left">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-4 text-blue-400 text-2xl font-bold">
            <FaBrain className="text-blue-500" />
            MindForge AI
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            AI-Powered Productivity Tools.
            <br />
            Automate, Analyze, Achieve.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-blue-400 transition">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-blue-400 transition">
              <a href="#features">Features</a>
            </li>
            <li className="hover:text-blue-400 transition">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="hover:text-blue-400 transition">
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-blue-400 transition">
              <a href="#">Docs</a>
            </li>
            <li className="hover:text-blue-400 transition">
              <a href="#">Blog</a>
            </li>
            <li className="hover:text-blue-400 transition">
              <a href="#">Tutorials</a>
            </li>
            <li className="hover:text-blue-400 transition">
              <a href="#">API</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-blue-400 transition">
              <a href="#">Help Center</a>
            </li>
            <li className="hover:text-blue-400 transition">
              <a href="#">Contact</a>
            </li>
            <li className="hover:text-blue-400 transition">
              <a href="#">Terms of Service</a>
            </li>
            <li className="hover:text-blue-400 transition">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-2xl text-gray-400">
            <a href="#" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © 2025 MindForge AI. All rights reserved.
      </div>
    </footer>
  );
}
