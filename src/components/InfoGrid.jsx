export function InfoGrid({ items }) {
  return (
    <div className="infoGrid">
      {items.map(([label, value]) => (
        <div className="infoTile" key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </div>
  );
}
