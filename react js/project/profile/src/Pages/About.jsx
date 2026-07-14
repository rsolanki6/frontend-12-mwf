import React from "react";
import Avatar from "../assets/avatar.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold uppercase tracking-wider">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Know More About Me
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="flex justify-center">
            <div className="relative">
              
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

              <img
                src={Avatar}
                alt="Rohan"
                className="relative w-72 md:w-96 animate-float"
              />
            </div>
          </div>

          {/* Right Side */}
          <div>

            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Hi, I'm <span className="text-blue-500">Rohan Solanki</span>
            </h3>

            <p className="text-gray-300 leading-relaxed mb-5">
              I am a Diploma Computer Engineering graduate and
              an aspiring Frontend Developer passionate about
              creating modern, responsive, and user-friendly
              web applications.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              Currently, I am enhancing my skills in React.js,
              JavaScript, Tailwind CSS, and Firebase while
              building real-world projects to prepare for
              internships and full-time opportunities.
            </p>

            {/* Information */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">

              <div>
                <h4 className="text-blue-500 font-semibold">
                  Name
                </h4>
                <p className="text-gray-300">
                  Rohan Solanki
                </p>
              </div>

              <div>
                <h4 className="text-blue-500 font-semibold">
                  Education
                </h4>
                <p className="text-gray-300">
                  Diploma Computer Engineering
                </p>
              </div>

              <div>
                <h4 className="text-blue-500 font-semibold">
                  Skills
                </h4>
                <p className="text-gray-300">
                  React, JS, Tailwind, Firebase
                </p>
              </div>

              <div>
                <h4 className="text-blue-500 font-semibold">
                  Location
                </h4>
                <p className="text-gray-300">
                  Rajkot, Gujarat
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <a
                href="/resume.pdf"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="border border-blue-500 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition"
              >
                Contact Me
              </a>

            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-blue-500">
              10+
            </h3>
            <p className="text-gray-400 mt-2">
              Projects
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-blue-500">
              1+
            </h3>
            <p className="text-gray-400 mt-2">
              Internship
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-blue-500">
              5+
            </h3>
            <p className="text-gray-400 mt-2">
              Technologies
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-blue-500">
              100%
            </h3>
            <p className="text-gray-400 mt-2">
              Dedication
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}