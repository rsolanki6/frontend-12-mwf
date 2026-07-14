import React, { useEffect, useState } from "react";
import { FaMoneyBillWave, FaGlobe, FaExchangeAlt, FaHistory } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Loader UI
 if (loading) {
return (
     <div className="min-h-screen flex items-center justify-center">
          <div className="text-lg font-semibold text-slate-600">
               Loading...
          </div>
     </div>
);
}

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 px-4 py-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center text-blue-600 text-5xl mb-4">
              <FaMoneyBillWave />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              About CurrencyX
            </h1>

            <p className="text-slate-600 mt-3 text-sm md:text-base max-w-2xl mx-auto">
              A modern, fast, and easy-to-use currency converter built using React,
              Tailwind CSS, and real-time exchange rate APIs.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaGlobe className="text-blue-600 text-3xl mb-3" />
              <h3 className="font-semibold text-lg mb-2">Live Exchange Rates</h3>
              <p className="text-slate-600 text-sm">
                Get real-time currency conversion rates from trusted APIs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaExchangeAlt className="text-blue-600 text-3xl mb-3" />
              <h3 className="font-semibold text-lg mb-2">Instant Conversion</h3>
              <p className="text-slate-600 text-sm">
                Convert any currency instantly with accurate calculations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaHistory className="text-blue-600 text-3xl mb-3" />
              <h3 className="font-semibold text-lg mb-2">History Tracking</h3>
              <p className="text-slate-600 text-sm">
                Save and manage all your past currency conversions easily.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <FaMoneyBillWave className="text-blue-600 text-3xl mb-3" />
              <h3 className="font-semibold text-lg mb-2">Simple UI</h3>
              <p className="text-slate-600 text-sm">
                Clean and responsive design that works on all devices.
              </p>
            </div>

          </div>

          {/* Project Info */}
          <div className="mt-12 bg-white rounded-2xl shadow p-6 md:p-10">

            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Project Overview
            </h2>

            <p className="text-slate-600 leading-7 text-sm md:text-base">
              CurrencyX is a React-based web application designed to simplify
              currency conversion. It uses live exchange rate APIs to provide
              accurate conversions in real-time. The app also stores conversion
              history using a mock backend (json-server), allowing users to track
              their previous conversions easily.
            </p>

            <p className="text-slate-600 leading-7 text-sm md:text-base mt-4">
              This project demonstrates key frontend development skills such as
              API integration, state management, routing, responsive design, and
              CRUD operations.
            </p>

          </div>

          {/* Tech Stack */}
          <div className="mt-10 text-center">

            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Built With
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React",
                "Tailwind CSS",
                "Axios",
                "React Router",
                "JSON Server",
                "REST API",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}