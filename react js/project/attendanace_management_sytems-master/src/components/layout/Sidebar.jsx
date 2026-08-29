import {
  BarChart3, CalendarDays, CheckCircle2, ClipboardList, Clock3,
  LayoutDashboard, LogOut, PlusCircle, XCircle
} from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/add-shift", label: "Add Shift", icon: PlusCircle },
  { to: "/manage-shift", label: "Manage Shift", icon: ClipboardList },
  { to: "/approved-shift", label: "Approved Shift", icon: CheckCircle2 },
  { to: "/rejected-shift", label: "Rejected Shift", icon: XCircle },
  { to: "/attendance", label: "Attendance", icon: CalendarDays },
];

export default function Sidebar({ mobileOpen, setMobileOpen, onLogout }) {
  const nav = (
    <div className="flex h-full flex-col bg-[#354052] text-white">
      <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">
        <div>
          <div className="text-xl font-black tracking-wide text-cyan-400">TOPS HRMS</div>
          <div className="text-[10px] uppercase tracking-widest text-slate-300">Employee Portal</div>
        </div>
        <button className="lg:hidden text-slate-300" onClick={() => setMobileOpen(false)}>
          <XCircle size={23} />
        </button>
      </div>

      <nav className="scrollbar-thin flex-1 space-y-1 overflow-y-auto p-3">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition ${
                isActive
                  ? "bg-cyan-500 font-semibold text-white shadow-lg shadow-cyan-900/20"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <Icon size={19} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-white/10 p-3">
        <button
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-200 transition hover:bg-red-500/15 hover:text-red-100"
        >
          <LogOut size={19} />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 lg:block">{nav}</aside>
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <aside className="relative h-full w-72 shadow-2xl">{nav}</aside>
        </div>
      )}
    </>
  );
}