import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-blue-500/30 bg-black/80 backdrop-blur-lg shadow-lg h-20">
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-6 h-full">

          {/* Logo */}
          <Link to="/" className="text-4xl font-bold tracking-tight text-white">
            Rohan <span className="text-blue-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            <Link to="/" className="text-white hover:text-blue-400 transition">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-blue-400 transition">About</Link>
            <Link to="/skills" className="text-gray-300 hover:text-blue-400 transition">Skills</Link>
            <Link to="/projects" className="text-gray-300 hover:text-blue-400 transition">Projects</Link>
            <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition">Contact</Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Hire Me Button */}
            <Link to="/contact" className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition">Hire Me</Link>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(true)} className="md:hidden text-white">
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black border-r border-blue-500 z-50 transform transition-transform duration-300 ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-5 border-b border-blue-500">
          <h2 className="text-xl font-bold text-white">
            Menu
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            <FaTimes size={22} />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col gap-6 p-6">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-400">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-400">About</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-400">Skills</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-400">Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-400">Contact</Link>
          <Link to="/contact" className="bg-blue-600 text-center py-3 rounded-lg text-white font-semibold">Hire Me</Link>
        </nav>
      </div>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
}