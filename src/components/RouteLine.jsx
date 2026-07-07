export function RouteLine({ route }) {
  return (
    <div className="routeLine" aria-label="Route line">
      {route.map((stop, index) => (
        <div className="routeStop" key={`${stop}-${index}`}>
          <span>{index + 1}</span>
          <b>{stop}</b>
        </div>
      ))}
    </div>
  );
}
