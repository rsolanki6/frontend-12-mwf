import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderApp() {     
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-lg shadow-lg shadow-slate-900/5 h-20">
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-6 h-full">

          {/* LOGO */}
          <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900">
            LUXE
          </Link>

          {/* DESKTOP NAV (UNCHANGED) */}
          <nav className="hidden md:flex items-center gap-8 font-inter text-sm font-medium tracking-wide">
            <Link to="/" className="active-nav-link">Home</Link>
            <Link to="/shop" className="text-slate-600 hover:text-teal-600 transition-colors">Shop</Link>
            <Link to="/feedback" className="text-slate-600 hover:text-teal-600 transition-colors">Feedback</Link>
            <Link to="/contact" className="text-slate-600 hover:text-teal-600 transition-colors">Contact</Link>
          </nav>
          
          <div className="flex items-center gap-6">

            {/* SEARCH (UNCHANGED) */}
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-3/4 -translate-y-1/2 text-slate-400 text-sm">
                search
              </span>
              <input className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-label-sm focus:ring-2 focus:ring-secondary/20 w-64 transition-all" placeholder="Search..." type="text"/>
            </div>
            
            {/* ICONS (UNCHANGED) */}
            <div className="flex items-center gap-4 text-slate-900">
              <Link to="/cart" className="hover:text-teal-500 transition-all duration-200">
                <span className="material-symbols-outlined">shopping_cart</span>
              </Link>

              <Link to="/login" className="hover:text-teal-500 transition-all duration-200">
                <span className="material-symbols-outlined">account_circle</span>
              </Link>
            </div>

            {/* ✅ MOBILE TOGGLER (NEW) */}
            <button onClick={() => setIsOpen(true)} className="md:hidden">
              <span className="material-symbols-outlined text-3xl">
                menu
              </span>
            </button>

          </div>
        </div>
      </header>

      {/* ✅ OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* ✅ MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex flex-col gap-6 p-6">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/feedback" onClick={() => setIsOpen(false)}>Feedback</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      </div>
    </>
  );
}