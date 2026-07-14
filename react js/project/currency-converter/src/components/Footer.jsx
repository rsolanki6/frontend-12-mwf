import React from "react";
import { FaMoneyBillWave, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-blue-400">
              <FaMoneyBillWave />
              <span>CurrencyX</span>
            </div>

            <p className="text-slate-300 mt-4 text-sm leading-6">
              A modern currency converter app built using React,
              Tailwind CSS, and live exchange rate APIs. Track conversions
              and manage history easily.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/history" className="hover:text-white transition">
                  History
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>

            <div className="flex gap-4 text-2xl">
              <a
                href="#"
                className="hover:text-blue-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="hover:text-blue-400 transition"
              >
                <FaTwitter />
              </a>
            </div>

            <p className="text-slate-400 text-sm mt-4">
              Built with ❤️ using React
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} CurrencyX. All rights reserved.
        </div>

      </div>
    </footer>
  );
}