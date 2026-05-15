import React from 'react'

export default function AdminLogin() {
  return (
    <>
    
    
     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">

        {/* Logo */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-teal-600 font-bold">
            LUXE
          </h1>

          <p className="text-gray-500 mt-2">
            Admin Panel Login
          </p>

        </div>

        {/* Login Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>

            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>

            <div className="relative">

              <span className="absolute left-4 top-4 text-gray-400">
                <FaEnvelope />
              </span>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-teal-500"
              />

            </div>

          </div>

          {/* Password */}
          <div>

            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>

            <div className="relative">

              <span className="absolute left-4 top-4 text-gray-400">
                <FaLock />
              </span>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-teal-500"
              />

            </div>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl text-lg font-semibold transition duration-300">

            Login

          </button>

        </form>

      </div>

    </div>
    
    </>
  )
}