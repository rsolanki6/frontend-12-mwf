import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./components/auth/Login";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import AddShift from "./pages/AddShift";
import ManageShift from "./pages/ManageShift";
import ApprovedShift from "./pages/ApprovedShift";
import RejectedShift from "./pages/RejectedShift";
import Attendance from "./pages/Attendance";

export default function App() {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("tops_hrms_auth") === "true"
  );

  useEffect(() => {
    const sync = () => setAuthenticated(localStorage.getItem("tops_hrms_auth") === "true");
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const login = () => {
    localStorage.setItem("tops_hrms_auth", "true");
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("tops_hrms_auth");
    setAuthenticated(false);
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={
          authenticated ? <Navigate to="/" replace /> : <Login onLogin={login} />
        }
      />

      <Route
        element={
          <ProtectedRoute authenticated={authenticated}>
            <DashboardLayout onLogout={logout} />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-shift" element={<AddShift />} />
        <Route path="/manage-shift" element={<ManageShift />} />
        <Route path="/approved-shift" element={<ApprovedShift />} />
        <Route path="/rejected-shift" element={<RejectedShift />} />
        <Route path="/attendance" element={<Attendance />} />
      </Route>

      <Route path="*" element={<Navigate to={authenticated ? "/" : "/login"} replace />} />
    </Routes>
  );
}