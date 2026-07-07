import React from "react";
import { countries, finalComparison, project } from "./data/trips";
import { AttractionCard } from "./components/AttractionCard";
import { BudgetPanel } from "./components/BudgetPanel";
import { DataTable } from "./components/DataTable";
import { ImageFrame } from "./components/ImageFrame";
import { ProgressRail } from "./components/ProgressRail";
import { RouteLine } from "./components/RouteLine";
import { StatPill } from "./components/StatPill";
import { Timeline } from "./components/Timeline";
import { TransportGrid } from "./components/TransportGrid";
import "./styles.css";

const slides = ["cover", ...countries.map((country) => country.id), "comparison"];

function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

function CoverSlide({ next }) {
  return (
    <section className="slide coverSlide">
      <div className="noise" />
      <div className="coverGrid">
        <div className="coverCopy">
          <span className="eyebrow">English travel project</span>
          <h1>{project.title}</h1>
          <p>{project.subtitle}</p>
          <div className="coverStats">
            <StatPill label="Budget cap" value={`US$${project.totalBudget.toLocaleString()}`} />
            <StatPill label="Planned total" value={`US$${project.plannedConservativeTotal.toLocaleString()}`} />
            <StatPill label="Reserve" value={`US$${project.remainingReserve.toLocaleString()}`} />
          </div>
          <button type="button" className="primaryAction" onClick={next}>
            Start presentation <span>→</span>
          </button>
        </div>
        <div className="coverVisual" aria-hidden="true">
          <div className="orbit orbitOne" />
          <div className="orbit orbitTwo" />
          <div className="flagStack">
            {countries.map((country) => (
              <div key={country.id} style={{ "--accent": country.theme.accent, "--accent3": country.theme.accent3 }}>
                <span>{country.theme.flag}</span>
                <strong>{country.name}</strong>
                <small>{country.budget.headline}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="keyboardHint">Use ← and → keyboard arrows to move between countries</div>
    </section>
  );
}

function CountrySlide({ country }) {
  const tableHeaders = country.id === "peru"
    ? ["Category", "USD", "PEN", "BOB"]
    : country.id === "chile"
      ? ["Item", "CLP", "USD", "Note"]
      : ["Item", "ARS", "USD", "Note"];

  return (
    <section
      className={`slide countrySlide countrySlide--${country.id}`}
      style={{
        "--accent": country.theme.accent,
        "--accent-2": country.theme.accent2,
        "--accent-3": country.theme.accent3,
        "--country-bg": country.theme.gradient,
        "--country-soft": country.theme.soft
      }}
    >
      <div className="noise" />
      <div className="countryHero sectionBlock">
        <div className="heroText">
          <span className="eyebrow">{country.theme.flag} {country.kicker}</span>
          <h2>{country.name}</h2>
          <p>{country.tagline}</p>
          <div className="heroBadges">
            <span>{country.base}</span>
            <span>{country.exchange}</span>
          </div>
        </div>
        <ImageFrame src={country.heroImage} alt={`${country.name} travel hero`} label={`${country.name} route visual`} className="heroImage" />
        <BudgetPanel country={country} />
      </div>

      <div className="sectionBlock routeBlock">
        <div className="sectionTitle routeTitle">
          <span>Route architecture</span>
          <h3>From plan to visual journey</h3>
        </div>
        <div className="routeDashboard">
          <div className="routeMapCard">
            <RouteLine route={country.route} />
          </div>
          <div className="keyList" aria-label={`${country.name} executive highlights`}>
            {country.keyFacts.map(([label, value]) => (
              <article key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="twoColumn sectionBlock">
        <div>
          <div className="sectionTitle">
            <span>Daily script</span>
            <h3>Itinerary timeline</h3>
          </div>
          <Timeline items={country.timeline} />
        </div>
        <div>
          <div className="sectionTitle">
            <span>Mobility and lodging</span>
            <h3>Operational choices</h3>
          </div>
          <TransportGrid items={country.transport} />
          <DataTable
            compact
            headers={["City", "Area", "Option", "Cost", "Positioning"]}
            rows={country.hotels.map((hotel) => [hotel.city, hotel.area, hotel.economy, hotel.comfort, hotel.example])}
          />
        </div>
      </div>

      <div className="sectionBlock">
        <div className="sectionTitle wideTitle">
          <span>Real attraction images</span>
          <h3>Tourist points selected from the travel plan</h3>
        </div>
        <div className="attractionsGrid">
          {country.attractions.map((attraction) => <AttractionCard attraction={attraction} key={attraction.title} />)}
        </div>
      </div>

      {country.food && (
        <div className="sectionBlock">
          <div className="sectionTitle">
            <span>Food experience</span>
            <h3>Restaurant budget references</h3>
          </div>
          <DataTable headers={["Restaurant", "Estimated cost", "Role in the route"]} rows={country.food} />
        </div>
      )}

      <div className="sectionBlock budgetTableBlock">
        <div className="sectionTitle">
          <span>Detailed budget</span>
        </div>
        <DataTable headers={tableHeaders} rows={country.budgetRows} />
      </div>
    </section>
  );
}

function ComparisonSlide() {
  return (
    <section className="slide comparisonSlide">
      <div className="noise" />
      <div className="comparisonShell">
        <span className="eyebrow">Final financial dashboard</span>
        <h2>US$8,000 is more than enough for the trips</h2>
        <p>{finalComparison.note}</p>
        <DataTable
          headers={["Country", "Calculation base", "Duration", "Planned cost", "Interpretation"]}
          rows={finalComparison.rows}
        />
        <div className="comparisonCards">
          <div>
            <span>Total class cap</span>
            <strong>US$8,000</strong>
          </div>
          <div>
            <span>Conservative planned total</span>
            <strong>US$4,847</strong>
          </div>
          <div>
            <span>Remaining reserve</span>
            <strong>US$3,153</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [index, setIndex] = React.useState(0);

  const goTo = React.useCallback((nextIndex) => {
    setIndex(clamp(nextIndex, 0, slides.length - 1));
  }, []);

  const next = React.useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = React.useCallback(() => goTo(index - 1), [goTo, index]);

  React.useEffect(() => {
    function onKeyDown(event) {
      const tagName = event.target?.tagName?.toLowerCase();
      if (["input", "textarea", "select"].includes(tagName)) return;
      if (event.key === "ArrowRight") goTo(index + 1);
      if (event.key === "ArrowLeft") goTo(index - 1);
      if (event.key === "Home") goTo(0);
      if (event.key === "End") goTo(slides.length - 1);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo, index]);

  return (
    <main className="appShell">
      <ProgressRail activeIndex={index} goTo={goTo} />
      <div className="slideTrack" style={{ transform: `translate3d(-${index * 100}vw, 0, 0)` }}>
        <CoverSlide next={next} />
        {countries.map((country) => <CountrySlide country={country} key={country.id} />)}
        <ComparisonSlide />
      </div>
      <div className="navControls" aria-label="Presentation controls">
        <button type="button" onClick={prev} disabled={index === 0}>← Previous</button>
        <span>{String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
        <button type="button" onClick={next} disabled={index === slides.length - 1}>Next →</button>
      </div>
    </main>
  );
}
