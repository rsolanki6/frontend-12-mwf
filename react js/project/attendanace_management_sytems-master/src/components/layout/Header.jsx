import { Bell, Menu, UserCircle } from "lucide-react";
import { useLocation } from "react-router-dom";

const titles = {
  "/": "Dashboard",
  "/add-shift": "Add Shift",
  "/manage-shift": "Manage Shift",
  "/approved-shift": "Approved Shift",
  "/rejected-shift": "Rejected Shift",
  "/attendance": "Attendance"
};

export default function Header({ onMenu }) {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("tops_hrms_user") || "{}");

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/95 px-4 shadow-sm backdrop-blur sm:px-6">
      <div className="flex items-center gap-3">
        <button onClick={onMenu} className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden">
          <Menu size={24} />
        </button>
        <div>
          <h1 className="text-lg font-bold text-slate-800 sm:text-xl">{titles[location.pathname] || "HRMS"}</h1>
          <p className="hidden text-xs text-slate-400 sm:block">Employee HR & Attendance Management</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative rounded-full p-2 text-slate-500 hover:bg-slate-100">
          <Bell size={21} />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-cyan-500" />
        </button>
        <div className="hidden h-8 w-px bg-slate-200 sm:block" />
        <div className="flex items-center gap-2">
          <UserCircle size={34} className="text-cyan-500" />
          <div className="hidden sm:block">
            <div className="text-sm font-semibold text-slate-700">{user.name || "Employee"}</div>
            <div className="text-[11px] text-slate-400">{user.mobile || ""}</div>
          </div>
        </div>
      </div>
    </header>
  );
}