export default function StatCard({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <p className="text-sm font-extrabold tracking-wide">{label}</p>
      <p className="text-xs text-white/60">{desc}</p>
    </div>
  );
}
