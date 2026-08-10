import React from 'react'
import brijesh from '../man1.png'
export default function ContentApp() {
  return (
<section className="max-w-7xl mx-auto px-6 py-12">
  <div className="grid lg:grid-cols-3 gap-10 items-start">

    {/* Left Side */}
    <div className="space-y-6">

      {/* Contact Info */}
      <div className="space-y-5">
         <div className="flex items-center gap-4">
          <i className="fa-brands fa-whatsapp text-3xl text-green-600"></i>
          <span className="font-semibold text-3xl">
            Brijesh Kumar Pandey
          </span>
        </div>   

        <div className="flex items-center gap-4">
          <i className="fa-brands fa-whatsapp text-3xl text-green-600"></i>
          <span className="font-semibold text-xl">
            +91 9998003879
          </span>
        </div>

        <div className="flex items-center gap-4">
          <i className="fa-solid fa-location-dot text-3xl text-red-500"></i>
          <span className="font-semibold text-xl">
            Rajkot, Gujarat - 360005
          </span>
        </div>

        <div className="flex items-center gap-4">
          <i className="fa-regular fa-envelope text-3xl text-blue-600"></i>
          <span className="font-semibold text-lg break-all">
            brijeshpandey@example.com
          </span>
        </div>

      </div>

      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={brijesh}
          alt="Brijesh Pandey"
          className="w-full m-0 p-0 max-w-xs object-contain -ms-25"
        />
      </div>

    </div>

    {/* Right Side */}
    <div className="lg:col-span-2 space-y-8">

      {/* Experience Card */}
      <div className="bg-white rounded-3xl shadow-lg p-6 border border-slate-200">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div>

            <div className="inline-block border-2 border-black px-6 py-2 rounded-full font-semibold">
              2013 – Present (12+ Years)
            </div>

            <div className="mt-5">

              <h3 className="text-3xl font-bold text-slate-800">
                TOPS Technologies
              </h3>

              <div className="flex items-center gap-2 mt-2">
                <i className="fa-solid fa-location-dot"></i>
                <span className="font-semibold">
                  Ahmedabad, Gujarat
                </span>
              </div>

            </div>

          </div>

          <div className="border-l-0 md:border-l md:pl-8 border-slate-300">

            <h3 className="text-2xl font-bold mb-3">
              Senior Technical Trainer
            </h3>

            <p className="text-slate-700 leading-relaxed">
              Delivering professional training in MERN Stack Development,
              Python Programming, Data Science, Data Analytics, React.js,
              Node.js, MongoDB, SQL, Power BI, and modern web technologies.
              Mentored thousands of students and professionals in building
              real-world projects and industry-ready skills.
            </p>

          </div>

        </div>

      </div>

      {/* Projects Button */}
      <div>
        <button className="bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition">
          + TRAINING EXPERTISE +
        </button>
      </div>

      {/* Expertise List */}
      <div className="space-y-6">

        {/* Item 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6">

          <div className="w-24 h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center text-5xl">
            💻
          </div>

          <div className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-[30px] relative">

            <div className="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 w-6 h-6 bg-blue-500 rotate-45"></div>

            <p className="text-lg leading-relaxed">
              Trained students in Full Stack Web Development using
              HTML, CSS, JavaScript, Bootstrap, React.js, Node.js,
              Express.js, MongoDB, and MySQL.
            </p>

          </div>

        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row items-center gap-6">

          <div className="w-24 h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center text-5xl">
            🐍
          </div>

          <div className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-[30px] relative">

            <div className="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 w-6 h-6 bg-blue-500 rotate-45"></div>

            <p className="text-lg leading-relaxed">
              Conducted advanced Python training including Core Python,
              OOP, NumPy, Pandas, Matplotlib, Seaborn, Django,
              Flask, and MySQL integration.
            </p>

          </div>

        </div>

        {/* Item 3 */}
        <div className="flex flex-col md:flex-row items-center gap-6">

          <div className="w-24 h-24 rounded-2xl bg-white shadow-lg flex items-center justify-center text-5xl">
            📊
          </div>

          <div className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-[30px] relative">

            <div className="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 w-6 h-6 bg-blue-500 rotate-45"></div>

            <p className="text-lg leading-relaxed">
              Specialized in Data Analytics and Data Science training
              using Excel, SQL, Power BI, Tableau, Python, Pandas,
              Machine Learning fundamentals, and dashboard creation.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

  )
}
