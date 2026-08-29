export default function StatusBadge({ status }) {
  const styles = {
    pending: "bg-amber-50 text-amber-700 ring-amber-200",
    approved: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    rejected: "bg-red-50 text-red-700 ring-red-200"
  };

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ring-1 ${styles[status] || styles.pending}`}>
      {status}
    </span>
  );
}