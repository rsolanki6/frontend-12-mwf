import React, { useState } from "react";
import { login } from "../services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);

    try {
      await login(name, password);

      toast.success("You are logged in successfully!");

      setName("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center min-vh-100"
    >
      <div
        className="card shadow-lg border-0 rounded-4"
        style={{
          maxWidth: "450px",
          width: "100%",
        }}
      >
        <div className="card-body p-4 p-md-5">

          <ToastContainer />

          <form onSubmit={handleSubmit}>

            <h2 className="text-center fw-bold mb-4">
              Login
            </h2>

            {/* NAME */}

            <div className="mb-3">
              <input className="form-control form-control-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                type="text"
                required
              />
            </div>

            {/* PASSWORD */}

            <div className="mb-3">
              <input
                className="form-control form-control-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                required
              />
            </div>

            {/* LOGIN BUTTON */}

            <button
              type="submit"
              className="btn btn-primary btn-lg w-100"
            >
              Login
            </button>

            {/* ERROR */}

            {error && (
              <div className="alert alert-danger mt-3 mb-0 text-center">
                {error}
              </div>
            )}

          </form>

        </div>
      </div>
    </div>
  );
}