import { ImageFrame } from "./ImageFrame";

export function AttractionCard({ attraction }) {
  return (
    <article className="attractionCard">
      <ImageFrame src={attraction.imageUrl} alt={attraction.title} label={attraction.city} />
      <div className="attractionContent">
        <div className="cardMeta">
          <span>{attraction.tag}</span>
          <b>{attraction.price}</b>
        </div>
        <h4>{attraction.title}</h4>
        <p>{attraction.description}</p>
      </div>
    </article>
  );
}
