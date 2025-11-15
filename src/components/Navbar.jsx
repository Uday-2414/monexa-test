import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import Button from "../reusable/AnimatedButton.jsx";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 overflow-hidden transition-all duration-500 ease-in-out ${
        isScrolled ? "mt-4 mx-4" : "mt-0 mx-0"
      }`}
    >
      <div
        className={`bg-white transition-all duration-500 ease-in-out ${
          isScrolled
            ? "rounded-2xl shadow-lg shadow-cyan-900/20"
            : "rounded-none shadow-md shadow-cyan-900/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo and Title */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 bg-transparent">
                <img
                  src={logo}
                  alt="Monexa Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>

              <span className="font-secondary text-2xl sm:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-cyan-600">
                MONEXA
              </span>
            </div>

            {/* Center - Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <Link
                to="/"
                className="text-gray-700 hover:text-cyan-600 transition-all duration-300 font-medium relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/product"
                className="text-gray-700 hover:text-cyan-600 transition-all duration-300 font-medium relative group"
              >
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/team"
                className="text-gray-700 hover:text-cyan-600 transition-all duration-300 font-medium relative group"
              >
                Team
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-cyan-600 transition-all duration-300 font-medium relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Right side - Request Demo Button (Desktop) */}
            <div className="hidden lg:block">
              <Button to="/contact" />
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-cyan-600 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2 border-t border-gray-200">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              to="/product"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300 font-medium"
            >
              Products
            </Link>
            <Link
              to="/team"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300 font-medium"
            >
              Team
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300 font-medium"
            >
              Contact
            </Link>
            <div className="mt-2">
              <Button to="/contact" text="Request a Demo" fullWidth />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for content below */}
      <div className="h-20"></div>
    </nav>
  );
}
