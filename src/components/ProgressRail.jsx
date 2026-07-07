import { countries } from "../data/trips";

export function ProgressRail({ activeIndex, goTo }) {
  const labels = ["Cover", ...countries.map((country) => country.name), "Budget"];
  return (
    <nav className="progressRail" aria-label="Slide navigation">
      {labels.map((label, index) => (
        <button
          key={label}
          className={index === activeIndex ? "active" : ""}
          type="button"
          onClick={() => goTo(index)}
          aria-label={`Go to ${label}`}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          <b>{label}</b>
        </button>
      ))}
    </nav>
  );
}
