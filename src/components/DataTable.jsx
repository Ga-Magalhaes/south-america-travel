export function DataTable({ headers, rows, compact = false }) {
  return (
    <div className={`tableWrap ${compact ? "compact" : ""}`}>
      <table>
        <thead>
          <tr>{headers.map((head) => <th key={head}>{head}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>{row.map((cell, cellIdx) => <td key={`${idx}-${cellIdx}`}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
