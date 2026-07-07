export function TransportGrid({ items }) {
  return (
    <div className="transportGrid">
      {items.map((item) => (
        <article className="transportCard" key={item.title}>
          <span>{item.route}</span>
          <h4>{item.title}</h4>
          <strong>{item.cost}</strong>
          <p>{item.detail}</p>
        </article>
      ))}
    </div>
  );
}
