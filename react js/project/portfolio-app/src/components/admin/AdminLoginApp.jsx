import React, { useState } from "react";
import { login } from "../../services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom";

export default function AdminLoginApp() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

const handleSubmit = async (e) => {
  // IMPORTANT: prevents page refresh
  e.preventDefault();

  setError(null);
  setLoading(true);

  try {
    await login(email, password);

    toast.success("You are logged in successfully!");

    console.log("Admin logged in:", email);

    // Clear form
    setEmail("");
    setPassword("");
    navigate("/admin-login/dashboard");

  } catch (err) {
    console.error(err);
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

return (
<div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
  <div className="max-w-6xl w-full mx-auto">
    <div className="grid lg:grid-cols-2 bg-white rounded-[40px] overflow-hidden shadow-2xl">

      {/* Left Section */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-10 text-white flex flex-col justify-center">

        <h1 className="text-4xl md:text-5xl font-black mb-4">
          ADMIN PANEL
        </h1>

        <p className="text-lg leading-relaxed opacity-90">
          Welcome back! Login to access your dashboard, manage users,
          projects, reports and system settings.
        </p>

        <div className="mt-10 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="Admin"
            className="w-72 object-contain"
          />
        </div>

      </div>

      {/* Right Section */}
      <div className="p-8 md:p-12 flex items-center">

        <div className="w-full">

          <ToastContainer />

          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Login Account
          </h2>

          <p className="text-slate-500 mb-8">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* EMAIL */}
            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Admin Email
              </label>

              <div className="relative">

                <span className="absolute left-4 top-4 text-slate-400">
                  <i className="fa-solid fa-envelope"></i>
                </span>

                <input
                  type="email"
                  placeholder="Enter Admin Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-slate-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />

              </div>
            </div>


            {/* PASSWORD */}
            <div>
              <label className="block mb-2 font-semibold text-slate-700">
                Password
              </label>

              <div className="relative">

                <span className="absolute left-4 top-4 text-slate-400">
                  <i className="fa-solid fa-lock"></i>
                </span>

                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border border-slate-300 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />

              </div>
            </div>


            {/* REMEMBER / FORGOT */}
            <div className="flex items-center justify-between">

              <label className="flex items-center gap-2 text-slate-600">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-blue-600"
                />

                Remember Me
              </label>

              <button
                type="button"
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                Forgot Password?
              </button>

            </div>


            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-bold text-lg hover:scale-[1.02] duration-300 disabled:opacity-60 disabled:hover:scale-100"
            >
              {loading ? "Logging in..." : "Login Now"}
            </button>


            {/* ERROR */}
            {error && (
              <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl text-center">
                {error}
              </div>
            )}

          </form>


          {/* FOOTER */}
          <div className="mt-8 text-center text-slate-500">
            © 2026 Admin Dashboard
          </div>

        </div>

      </div>

    </div>
  </div>
</div>
);
}