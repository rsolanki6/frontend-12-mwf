import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, Clock3, UserRound } from "lucide-react";
import { addShift } from "../utils/storage";

const initial = {
  employee: "",
  date: new Date().toISOString().slice(0, 10),
  startTime: "09:00",
  endTime: "18:00",
  reason: ""
};

export default function AddShift() {
  const [form, setForm] = useState(initial);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    addShift(form);
    setMessage("Shift request added successfully.");
    setForm(initial);
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Add Shift</h2>
        <p className="mt-1 text-sm text-slate-400">Create a new employee shift request.</p>
      </div>

      <form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        {message && <div className="mb-5 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">{message}</div>}

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Employee Name" icon={UserRound}>
            <input required name="employee" value={form.employee} onChange={change} placeholder="Enter employee name" className="input" />
          </Field>

          <Field label="Shift Date" icon={CalendarDays}>
            <input required type="date" name="date" value={form.date} onChange={change} className="input" />
          </Field>

          <Field label="Start Time" icon={Clock3}>
            <input required type="time" name="startTime" value={form.startTime} onChange={change} className="input" />
          </Field>

          <Field label="End Time" icon={Clock3}>
            <input required type="time" name="endTime" value={form.endTime} onChange={change} className="input" />
          </Field>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-600">Reason / Notes</label>
            <textarea required name="reason" value={form.reason} onChange={change} rows="4" placeholder="Enter shift reason..." className="input resize-none" />
          </div>
        </div>

        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button type="button" onClick={() => navigate("/manage-shift")} className="rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50">
            Manage Shifts
          </button>
          <button className="rounded-lg bg-cyan-500 px-6 py-3 text-sm font-bold text-white hover:bg-cyan-600">
            Add Shift Request
          </button>
        </div>
      </form>

      <style>{`.input{width:100%;border-radius:.5rem;border:1px solid #e2e8f0;background:#f8fafc;padding:.75rem 1rem;font-size:.875rem;outline:none}.input:focus{border-color:#22d3ee;box-shadow:0 0 0 3px rgba(34,211,238,.12)}`}</style>
    </div>
  );
}

function Field({ label, icon: Icon, children }) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-600">
        <Icon size={16} className="text-cyan-500" /> {label}
      </label>
      {children}
    </div>
  );
}