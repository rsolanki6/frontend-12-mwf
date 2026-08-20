import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const fixedNumber = "9998003879";
  const fixedPassword = "12345";

  const handleLogin = (e) => {
    e.preventDefault();

    if (mobileNo === fixedNumber && password === fixedPassword) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("mobileNo", mobileNo);

      setError("");

      navigate("/dashboard");
    } else {
      setError("Invalid mobile number or password");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-700">

      {/* Logo */}
      <div className="mb-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgt2ZGyLPdvd-1UhLeD13_hvvsCe-ST33nGZzDg3V2g&s=10"
          alt="Logo"
          className="h-50 w-100 rounded-md object-contain"
        />
      </div>

      {/* Login Form */}
      <div className="w-1/4 rounded-md bg-white p-6">

        <h2 className="mb-4 text-xl font-bold">
          Login
        </h2>

        {error && (
          <p className="mb-3 text-sm text-red-500">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin}>

          {/* Mobile */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Mobile No.
            </label>

            <input
              type="text"
              placeholder="Mobile No."
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              className="w-full rounded border px-3 py-2 text-gray-700 shadow focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border px-3 py-2 text-gray-700 shadow focus:outline-none"
            />
          </div>

          {/* Login */}
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}
