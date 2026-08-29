import { useEffect, useState } from "react";
import { Check, Pencil, Search, Trash2, X } from "lucide-react";
import { deleteShift, getShifts, updateShift } from "../utils/storage";
import StatusBadge from "../components/common/StatusBadge";
import EmptyState from "../components/common/EmptyState";

export default function ManageShift() {
  const [shifts, setShifts] = useState([]);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState(null);

  const load = () => setShifts(getShifts());
  useEffect(load, []);

  const action = (id, status) => {
    updateShift(id, { status });
    load();
  };

  const remove = (id) => {
    if (window.confirm("Delete this shift request?")) {
      deleteShift(id);
      load();
    }
  };

  const filtered = shifts.filter(s =>
    `${s.employee} ${s.date} ${s.reason} ${s.status}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Manage Shift</h2>
          <p className="mt-1 text-sm text-slate-400">Approve, reject, edit or delete shift requests.</p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search size={18} className="absolute left-3 top-3 text-slate-400" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search shifts..." className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-cyan-400" />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        {filtered.length === 0 ? <EmptyState /> : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-400">
                <tr>
                  <th className="px-5 py-3">Employee</th><th className="px-5 py-3">Date</th>
                  <th className="px-5 py-3">Time</th><th className="px-5 py-3">Reason</th>
                  <th className="px-5 py-3">Status</th><th className="px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map(s => (
                  <tr key={s.id} className="hover:bg-slate-50">
                    <td className="px-5 py-4 font-semibold text-slate-700">{s.employee}</td>
                    <td className="px-5 py-4 text-slate-500">{s.date}</td>
                    <td className="px-5 py-4 text-slate-500">{s.startTime} - {s.endTime}</td>
                    <td className="max-w-xs px-5 py-4 text-slate-500">{s.reason}</td>
                    <td className="px-5 py-4"><StatusBadge status={s.status} /></td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button title="Approve" onClick={() => action(s.id, "approved")} className="rounded-lg bg-emerald-50 p-2 text-emerald-600 hover:bg-emerald-100"><Check size={17}/></button>
                        <button title="Reject" onClick={() => action(s.id, "rejected")} className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100"><X size={17}/></button>
                        <button title="Edit" onClick={() => setEditing(s)} className="rounded-lg bg-cyan-50 p-2 text-cyan-600 hover:bg-cyan-100"><Pencil size={17}/></button>
                        <button title="Delete" onClick={() => remove(s.id)} className="rounded-lg bg-slate-100 p-2 text-slate-600 hover:bg-slate-200"><Trash2 size={17}/></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {editing && <EditModal shift={editing} close={() => setEditing(null)} saved={load} />}
    </div>
  );
}

function EditModal({ shift, close, saved }) {
  const [form, setForm] = useState(shift);
  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    updateShift(shift.id, form);
    saved();
    close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <form onSubmit={submit} className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-800">Edit Shift</h3>
          <button type="button" onClick={close} className="rounded-full p-2 hover:bg-slate-100"><X size={20}/></button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["employee", "Employee"], ["date", "Date"], ["startTime", "Start Time"], ["endTime", "End Time"]
          ].map(([name, label]) => (
            <label key={name} className="text-sm font-semibold text-slate-600">
              {label}
              <input required name={name} type={name === "date" ? "date" : name.includes("Time") ? "time" : "text"} value={form[name]} onChange={change} className="mt-1 w-full rounded-lg border border-slate-200 p-2.5 font-normal outline-none focus:border-cyan-400" />
            </label>
          ))}
          <label className="text-sm font-semibold text-slate-600 sm:col-span-2">
            Reason
            <textarea required name="reason" value={form.reason} onChange={change} rows="3" className="mt-1 w-full rounded-lg border border-slate-200 p-2.5 font-normal outline-none focus:border-cyan-400" />
          </label>
        </div>
        <button className="mt-5 w-full rounded-lg bg-cyan-500 py-3 text-sm font-bold text-white hover:bg-cyan-600">Save Changes</button>
      </form>
    </div>
  );
}