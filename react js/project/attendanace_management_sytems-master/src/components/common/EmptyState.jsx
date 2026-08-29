import { ClipboardList } from "lucide-react";

export default function EmptyState({ title = "No records found", text = "There are no records to display." }) {
  return (
    <div className="flex flex-col items-center justify-center py-14 text-center">
      <div className="mb-3 rounded-full bg-slate-100 p-4 text-slate-400">
        <ClipboardList size={28} />
      </div>
      <h3 className="font-semibold text-slate-700">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-slate-400">{text}</p>
    </div>
  );
}