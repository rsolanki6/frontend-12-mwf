import { useMemo } from "react";
import { CalendarCheck2, Clock3 } from "lucide-react";

export default function Attendance() {
  const today = new Date().toISOString().slice(0, 10);
  const rows = useMemo(() => [
    { date: today, in: "09:03 AM", out: "06:02 PM", status: "Present" },
    { date: "2026-08-21", in: "09:11 AM", out: "06:15 PM", status: "Present" },
    { date: "2026-08-20", in: "09:00 AM", out: "06:01 PM", status: "Present" },
    { date: "2026-08-19", in: "09:22 AM", out: "06:10 PM", status: "Late" }
  ], [today]);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6"><h2 className="text-2xl font-bold text-slate-800">Attendance</h2><p className="mt-1 text-sm text-slate-400">Employee attendance overview.</p></div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Stat title="Present Days" value="3" icon={CalendarCheck2} />
        <Stat title="Late Days" value="1" icon={Clock3} />
        <Stat title="Attendance %" value="92%" icon={CalendarCheck2} />
      </div>
      <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-400"><tr><th className="px-5 py-3">Date</th><th className="px-5 py-3">Check In</th><th className="px-5 py-3">Check Out</th><th className="px-5 py-3">Status</th></tr></thead>
            <tbody className="divide-y divide-slate-100">{rows.map(r => <tr key={r.date}><td className="px-5 py-4 font-medium">{r.date}</td><td className="px-5 py-4 text-slate-500">{r.in}</td><td className="px-5 py-4 text-slate-500">{r.out}</td><td className="px-5 py-4"><span className={`rounded-full px-3 py-1 text-xs font-semibold ${r.status === "Late" ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}>{r.status}</span></td></tr>)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Stat({ title, value, icon: Icon }) {
  return <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><div><p className="text-sm text-slate-400">{title}</p><p className="mt-1 text-2xl font-bold text-slate-800">{value}</p></div><Icon className="text-cyan-500" size={28}/></div></div>;
}