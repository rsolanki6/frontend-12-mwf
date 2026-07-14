import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-lg border-b border-blue-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <a
              href="#home"
              className="text-2xl font-bold tracking-wide"
            >
              <span className="text-white">Rohan</span>
              <span className="text-blue-500">.</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="relative text-white font-medium hover:text-blue-400 transition duration-300 group"
                >
                  {item.name}

                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}

              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold transition duration-300"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-2xl"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-black overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="flex flex-col px-6 py-4 space-y-4 border-t border-blue-500">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-blue-400 font-medium transition duration-300"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 hover:bg-blue-700 text-center py-2 rounded-lg font-semibold transition duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer for Fixed Navbar */}
      <div className="h-20"></div>
    </>
  );
}