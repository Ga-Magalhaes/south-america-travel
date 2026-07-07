export function BudgetPanel({ country }) {
  const { budget } = country;
  return (
    <aside className="budgetPanel">
      <div className="panelHeader">
        <span>{budget.capLabel}</span>
        <strong>US${budget.capUsd.toLocaleString()}</strong>
      </div>
      <div className="budgetHeroNumber">US${budget.plannedUsd.toLocaleString()}</div>
      <p>{budget.summary}</p>
      <div className="budgetSplit">
        <div>
          <span>Planned</span>
          <strong>US${budget.plannedUsd.toLocaleString()}</strong>
        </div>
        <div>
          <span>Balance</span>
          <strong>{budget.balanceUsd === 0 ? "Built into cap" : `US$${budget.balanceUsd.toLocaleString()}`}</strong>
        </div>
      </div>
    </aside>
  );
}
