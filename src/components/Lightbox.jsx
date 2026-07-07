import React from "react";
import { createPortal } from "react-dom";

export function Lightbox({ src, alt, onClose }) {
  React.useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div className="lightboxOverlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={alt}>
      <button className="lightboxClose" onClick={onClose} aria-label="Fechar">✕</button>
      <img
        className="lightboxImg"
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  );
}
