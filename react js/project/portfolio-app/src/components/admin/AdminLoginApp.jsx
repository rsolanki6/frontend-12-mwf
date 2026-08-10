import React, { useState } from "react";
import { login } from "../../services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLoginApp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">

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
              Admin Login
            </h2>

            {/* EMAIL */}

            <div className="mb-3">

              <input
                className="form-control form-control-lg"
                type="email"
                placeholder="Admin Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>


            {/* PASSWORD */}

            <div className="mb-3">

              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

            </div>


            {/* LOGIN */}

            <button
              type="submit"
              className="btn btn-primary btn-lg w-100"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Admin Login"}
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