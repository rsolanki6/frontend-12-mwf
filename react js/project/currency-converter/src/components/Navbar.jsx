import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaMoneyBillWave } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-blue-600"
          >
            <FaMoneyBillWave />
            <span>CurrencyX</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-slate-700 hover:text-blue-600 transition">Home</Link>

            <Link to="/history" className="text-slate-700 hover:text-blue-600 transition">History</Link>

            <Link to="/about" className="text-slate-700 hover:text-blue-600 transition">About</Link>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Convert Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-slate-700"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 py-4" : "max-h-0"}`}>
          <div className="flex flex-col gap-4">

            <Link to="/" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-blue-600">Home</Link>

            <Link to="/history" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-blue-600">History</Link>

            <Link to="/about" onClick={() => setMenuOpen(false)} className="text-slate-700 hover:text-blue-600">About</Link>

            <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Convert Now</button>

          </div>
        </div>

      </div>
    </nav>
  );
}