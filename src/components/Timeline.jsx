export function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <article className="timelineItem" key={`${item.day}-${index}`}>
          <div className="timelineMarker">{index + 1}</div>
          <div>
            <div className="timelineTopline">
              <span>{item.day}</span>
              <b>{item.sleep}</b>
            </div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <small>{item.costLocal}{item.costUsd ? ` · approximately US$${item.costUsd}` : ""}</small>
          </div>
        </article>
      ))}
    </div>
  );
}
