import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {   BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login />} />
        {/* Dashboard */}
        <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute> }/>
        {/* Default */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Unknown URL */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  </StrictMode>
);
