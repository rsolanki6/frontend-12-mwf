import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function HeaderApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex justify-between items-center">

          <h1 className="text-2xl font-bold text-slate-100">
            Task Manager
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-4">
            <Link
              to="/"
              className="bg-slate-700 hover:bg-slate-600 text-white px-5 py-2 rounded-lg transition"
            >
              Add Task
            </Link>

            <Link
              to="/manage"
              className="bg-white hover:bg-slate-100 text-slate-900 px-5 py-2 rounded-lg transition font-medium"
            >
              Manage Tasks
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-40 mt-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-3">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="bg-slate-700 hover:bg-slate-600 text-white px-5 py-3 rounded-lg text-center"
            >
              Add Task
            </Link>

            <Link
              to="/manage"
              onClick={() => setIsOpen(false)}
              className="bg-white hover:bg-slate-100 text-slate-900 px-5 py-3 rounded-lg text-center font-medium"
            >
              Manage Tasks
            </Link>

          </div>
        </div>

      </div>
    </header>
  );
}