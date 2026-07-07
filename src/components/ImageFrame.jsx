import React from "react";
import { Lightbox } from "./Lightbox";

export function ImageFrame({ src, alt, label, className = "" }) {
  const [failed, setFailed] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  if (!src || failed) {
    return (
      <div className={`imageFallback ${className}`}>
        <div>
          <span>IMAGE SLOT</span>
          <strong>{label || alt || "Real photo"}</strong>
        </div>
      </div>
    );
  }

  return (
    <>
      <figure className={`imageFrame ${className}`} onClick={() => setOpen(true)} style={{ cursor: "zoom-in" }}>
        <img src={src} alt={alt || label} loading="lazy" onError={() => setFailed(true)} />
        {label && <figcaption>{label}</figcaption>}
      </figure>
      {open && <Lightbox src={src} alt={alt || label} onClose={() => setOpen(false)} />}
    </>
  );
}
