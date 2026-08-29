import { useEffect, useState } from "react";
import { CheckCircle2, Clock3, Users, XCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getShifts, seedShifts } from "../utils/storage";
import StatusBadge from "../components/common/StatusBadge";

export default function Dashboard() {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    seedShifts();
    setShifts(getShifts());
  }, []);

  const pending = shifts.filter(s => s.status === "pending").length;
  const approved = shifts.filter(s => s.status === "approved").length;
  const rejected = shifts.filter(s => s.status === "rejected").length;

  const cards = [
    { label: "Total Shifts", value: shifts.length, icon: Users, bg: "bg-cyan-50", color: "text-cyan-600" },
    { label: "Pending", value: pending, icon: Clock3, bg: "bg-amber-50", color: "text-amber-600" },
    { label: "Approved", value: approved, icon: CheckCircle2, bg: "bg-emerald-50", color: "text-emerald-600" },
    { label: "Rejected", value: rejected, icon: XCircle, bg: "bg-red-50", color: "text-red-600" },
  ];

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <section className="rounded-2xl bg-gradient-to-r from-[#354052] to-slate-700 p-6 text-white shadow-lg sm:p-8">
        <p className="text-sm text-cyan-300">Welcome back 👋</p>
        <h2 className="mt-1 text-2xl font-bold sm:text-3xl">Employee HRMS Dashboard</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-300">
          Manage your shift requests, approvals, rejections and attendance from one responsive portal.
        </p>
      </section>

      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {cards.map(({ label, value, icon: Icon, bg, color }) => (
          <div key={label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className={`rounded-xl p-3 ${bg} ${color}`}><Icon size={23} /></div>
              <span className="text-3xl font-bold text-slate-800">{value}</span>
            </div>
            <p className="mt-4 text-sm font-medium text-slate-500">{label}</p>
          </div>
        ))}
      </div>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <div>
            <h3 className="font-bold text-slate-800">Recent Shift Requests</h3>
            <p className="text-xs text-slate-400">Latest localStorage records</p>
          </div>
          <Link to="/manage-shift" className="flex items-center gap-1 text-sm font-semibold text-cyan-600 hover:text-cyan-700">
            Manage <ArrowRight size={16} />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-5 py-3">Employee</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Shift</th>
                <th className="px-5 py-3">Reason</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {shifts.slice(0, 5).map((shift) => (
                <tr key={shift.id} className="hover:bg-slate-50">
                  <td className="px-5 py-4 font-semibold text-slate-700">{shift.employee}</td>
                  <td className="px-5 py-4 text-slate-500">{shift.date}</td>
                  <td className="px-5 py-4 text-slate-500">{shift.startTime} - {shift.endTime}</td>
                  <td className="px-5 py-4 text-slate-500">{shift.reason}</td>
                  <td className="px-5 py-4"><StatusBadge status={shift.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}