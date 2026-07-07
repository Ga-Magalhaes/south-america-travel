export function StatPill({ label, value }) {
  return (
    <div className="statPill">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
