import { useEffect, useState } from "react";
import { getShifts } from "../utils/storage";
import StatusBadge from "../components/common/StatusBadge";
import EmptyState from "../components/common/EmptyState";

export default function RejectedShift() {
  const [items, setItems] = useState([]);
  useEffect(() => setItems(getShifts().filter(s => s.status === "rejected")), []);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6"><h2 className="text-2xl font-bold text-slate-800">Rejected Shift</h2><p className="mt-1 text-sm text-slate-400">All rejected employee shift requests.</p></div>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {items.length === 0 ? <EmptyState title="No rejected shifts" text="Rejected shift requests will appear here." /> : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase text-slate-400"><tr><th className="px-5 py-3">Employee</th><th className="px-5 py-3">Date</th><th className="px-5 py-3">Time</th><th className="px-5 py-3">Reason</th><th className="px-5 py-3">Status</th></tr></thead>
              <tbody className="divide-y divide-slate-100">{items.map(s => <tr key={s.id}><td className="px-5 py-4 font-semibold">{s.employee}</td><td className="px-5 py-4 text-slate-500">{s.date}</td><td className="px-5 py-4 text-slate-500">{s.startTime} - {s.endTime}</td><td className="px-5 py-4 text-slate-500">{s.reason}</td><td className="px-5 py-4"><StatusBadge status={s.status}/></td></tr>)}</tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}